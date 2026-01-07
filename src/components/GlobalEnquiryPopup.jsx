"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const PopupEnquiryForm = dynamic(() => import("@/components/PopupEnquiryForm.jsx"), { ssr: false });

export default function GlobalEnquiryPopup() {
  const [showEnquiry, setShowEnquiry] = useState(false);

  useEffect(() => {
    // Open popup after 5 seconds
    const timer = setTimeout(() => {
      setShowEnquiry(true);
    }, 5000);

    // Listen for custom event to open popup
    const handleOpenEnquiry = () => {
      setShowEnquiry(true);
    };

    window.addEventListener('openEnquiryPopup', handleOpenEnquiry);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('openEnquiryPopup', handleOpenEnquiry);
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
