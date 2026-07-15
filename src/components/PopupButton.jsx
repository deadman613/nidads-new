"use client";

/**
 * PopupButton
 * Drop-in replacement for any button / link that should open the
 * global enquiry popup instead of navigating to a page.
 *
 * Usage:
 *   <PopupButton className={styles.ctaButton}>Talk to a Counsellor</PopupButton>
 */
export default function PopupButton({ children, className = "", style = {} }) {
  const handleClick = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new Event("openEnquiryPopup"));
    }
  };

  return (
    <button
      type="button"
      className={className}
      style={style}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
