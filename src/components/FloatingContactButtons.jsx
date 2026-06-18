"use client";

import styles from "./FloatingContactButtons.module.css";

const DEFAULT_PHONE_E164 = "+919205436796";

export default function FloatingContactButtons({ phoneE164 = DEFAULT_PHONE_E164 }) {
  const digits = String(phoneE164).replace(/\D/g, "");
  const whatsappHref = `https://wa.me/${digits}`;
  const phoneHref = `tel:${phoneE164}`;

  /** Opens the global enquiry popup via the custom event */
  const openEnquiryPopup = (e) => {
    e.preventDefault();
    window.dispatchEvent(new Event("openEnquiryPopup"));
  };

  return (
    <div className={styles.wrap} aria-label="Contact options">
      {/* Form / Enquiry button — opens popup */}
      <button
        className={styles.button}
        onClick={openEnquiryPopup}
        aria-label="Open enquiry form"
        title="Enquiry Form"
        type="button"
      >
        <img
          className={styles.iconImg}
          src="/form.png"
          alt=""
          aria-hidden="true"
        />
      </button>

      {/* WhatsApp */}
      <a
        className={styles.button}
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        title="WhatsApp"
      >
        <img
          className={styles.iconImg}
          src="/whatsap.png"
          alt=""
          aria-hidden="true"
        />
      </a>

      {/* Phone call */}
      <a
        className={styles.button}
        href={phoneHref}
        aria-label="Call"
        title="Call"
      >
        <img
          className={styles.iconImg}
          src="/phone.png"
          alt=""
          aria-hidden="true"
        />
      </a>
    </div>
  );
}
