import { NextResponse } from "next/server";

const SCRIPT_URL =
  process.env.GOOGLE_APPS_SCRIPT_URL ||
  "https://script.google.com/macros/s/AKfycbzCRHk31xizajqVOXHrjXr7MMMzNy00TjUoXcqGm99n2y-mDnND3OhHnAdjPSzxzWk/exec";

function asText(value) {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim();
}

function buildDetails(payload) {
  const parts = [
    payload.source && `Source: ${payload.source}`,
    payload.program && `Program: ${payload.program}`,
    payload.domain && `Domain: ${payload.domain}`,
    payload.experience && `Experience: ${payload.experience}`,
    payload.preferredDate && `Preferred Date: ${payload.preferredDate}`,
    payload.enquiryTypes && `Enquiry Types: ${payload.enquiryTypes}`,
    payload.message && `Message: ${payload.message}`,
    payload.description && `Description: ${payload.description}`,
  ].filter(Boolean);

  return parts.join(" | ");
}

function normalizePayload(payload) {
  const firstName = asText(payload.firstName);
  const lastName = asText(payload.lastName);
  const fullName = asText(payload.name) || [firstName, lastName].filter(Boolean).join(" ");
  const email = asText(payload.email);
  const mobile = asText(payload.mobile) || asText(payload.phone);
  const course = asText(payload.course) || asText(payload.program) || "General Enquiry";
  const details = buildDetails(payload);

  return {
    name: fullName,
    email,
    mobile,
    course,
    details,
    source: asText(payload.source),
  };
}

export async function POST(request) {
  try {
    const payload = await request.json().catch(() => null);

    if (!payload || typeof payload !== "object") {
      return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
    }

    const normalized = normalizePayload(payload);

    if (!normalized.name || !normalized.email) {
      return NextResponse.json({ error: "Name and email are required" }, { status: 400 });
    }

    const upstreamResponse = await fetch(SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(normalized),
      cache: "no-store",
    });

    const upstreamText = await upstreamResponse.text();
    let upstreamPayload = null;

    if (upstreamText) {
      try {
        upstreamPayload = JSON.parse(upstreamText);
      } catch {
        upstreamPayload = null;
      }
    }

    if (!upstreamResponse.ok || upstreamPayload?.success === false) {
      return NextResponse.json(
        {
          error:
            upstreamPayload?.error ||
            "Unable to submit enquiry to Google Sheets",
        },
        { status: 502 }
      );
    }

    if (upstreamText && !upstreamPayload) {
      return NextResponse.json(
        {
          error: "Google Apps Script returned a non-JSON response. Check the web app deployment and sheet permissions.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("POST /api/enquiry failed", error);
    return NextResponse.json({ error: "Unable to submit enquiry" }, { status: 500 });
  }
}