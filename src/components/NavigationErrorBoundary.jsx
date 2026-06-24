"use client";

/**
 * DomErrorGuard — catches DOM commit-phase errors (like "insertBefore")
 * that browser extensions (SEO tools, Grammarly, etc.) cause by injecting
 * or moving DOM nodes out of React's managed tree.
 *
 * React's ErrorBoundary CANNOT catch these — they happen after render,
 * during the DOM mutation phase. Only window.addEventListener("error")
 * reaches them.
 *
 * On catch: auto-reloads once (sessionStorage guard prevents loops).
 * On successful navigation: clears the reload guard.
 */

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function DomErrorGuard() {
  const pathname = usePathname();

  // Clear reload guard on every successful navigation so the guard
  // doesn't permanently block recovery on the NEXT back-navigation.
  useEffect(() => {
    sessionStorage.removeItem("_domErrReload");
  }, [pathname]);

  useEffect(() => {
    const handler = (event) => {
      const msg =
        event?.error?.message ||
        event?.message ||
        "";

      const isDomMismatch =
        msg.includes("insertBefore") ||
        msg.includes("removeChild") ||
        msg.includes("not a child of this node") ||
        msg.includes("is not a child");

      if (!isDomMismatch) return;

      // Prevent React's unhandled-error overlay from appearing
      event.preventDefault();
      event.stopImmediatePropagation();

      // Reload once to get a clean DOM (free of extension-injected nodes)
      if (!sessionStorage.getItem("_domErrReload")) {
        sessionStorage.setItem("_domErrReload", "1");
        window.location.reload();
      }
    };

    // useCapture=true so we intercept before React's own error handler
    window.addEventListener("error", handler, true);
    return () => window.removeEventListener("error", handler, true);
  }, []);

  return null;
}
