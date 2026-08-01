"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

const PopupEnquiryForm = dynamic(() => import("@/components/PopupEnquiryForm.jsx"), { ssr: false });

const AUTO_OPEN_STORAGE_KEY = "nidads_enquiry_popup_auto_opened_session_v1";

export default function GlobalEnquiryPopup() {
  const [showEnquiry, setShowEnquiry] = useState(false);
  const timerRef = useRef(null);

  const hasAutoOpenedBefore = () => {
    try {
      return window.sessionStorage.getItem(AUTO_OPEN_STORAGE_KEY) === "1";
    } catch {
      return false;
    }
  };

  const markAutoOpened = () => {
    try {
      window.sessionStorage.setItem(AUTO_OPEN_STORAGE_KEY, "1");
    } catch {
      // ignore
    }
  };

  const openPopup = (reason) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    // If the user manually opened before the auto timer fires, prevent future auto-opens.
    if (reason === "auto" || reason === "manual") {
      markAutoOpened();
    }
    setShowEnquiry(true);
  };

  useEffect(() => {
    // Auto open after 5 seconds, but only once per browser session.
    if (!hasAutoOpenedBefore()) {
      timerRef.current = setTimeout(() => {
        openPopup("auto");
      }, 7000);
    }

    // Listen for custom event to open popup
    const handleOpenEnquiry = () => {
      openPopup("manual");
    };

    window.addEventListener("openEnquiryPopup", handleOpenEnquiry);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
      window.removeEventListener("openEnquiryPopup", handleOpenEnquiry);
    };
  }, []);

  return (
    <>
      {showEnquiry && (
        <PopupEnquiryForm 
          open={showEnquiry} 
          onClose={() => setShowEnquiry(false)}
          lockCourse={false}
        />
      )}
    </>
  );
}
