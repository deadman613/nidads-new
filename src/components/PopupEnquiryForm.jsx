import React, { useState } from "react";
import styles from "./SimpleNamePopup.module.css";
import { courses } from "@/data/courses";
import { useEffect } from "react";

const SimpleNamePopup = ({ open, onClose, selectedCourseId, lockCourse }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    course: selectedCourseId || ""
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
useEffect(() => {
  if (open) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }

  return () => {
    document.body.style.overflow = "";
  };
}, [open]);

  if (!open) return null;

  const courseOptions = courses.map((c) => ({ value: c.id, label: c.title }));
  const selectedCourseLabel = courseOptions.find(opt => opt.value === form.course)?.label;

  const validate = () => {
    const errs = {};
    
    if (!form.name.trim()) {
      errs.name = "Name is required";
    } else if (form.name.trim().length < 2) {
      errs.name = "Name must be at least 2 characters";
    }
    
    if (!form.email.trim()) {
      errs.email = "Email is required";
    } else if (!form.email.match(/^\S+@\S+\.\S+$/)) {
      errs.email = "Please enter a valid email";
    }
    
    if (!form.mobile.trim()) {
      errs.mobile = "Mobile number is required";
    } else if (!form.mobile.match(/^\d{10}$/)) {
      errs.mobile = "Enter a valid 10 digit mobile number";
    }
    
    if (!form.course) {
      errs.course = "Please select a course";
    }
    
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    
    // Success - handle submission here
    console.log("Submitted form:", form);
    setSubmitted(true);
    
    // Auto close after 3 seconds
    setTimeout(() => {
      handleClose();
    }, 3000);
  };

  const handleClose = () => {
    setForm({ name: "", email: "", mobile: "", course: "" });
    setErrors({});
    setSubmitted(false);
    onClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.popup}>
        <button 
          className={styles.closeBtn} 
          onClick={handleClose}
          type="button"
          aria-label="Close"
        >
          ×
        </button>

        {submitted ? (
          <div className={styles.success}>
            <div className={styles.successIcon}>✓</div>
            <div className={styles.successText}>Thank you, {form.name}!</div>
            <div className={styles.successSubtext}>We'll contact you soon at {form.email}</div>
          </div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit}>
            <h2 className={styles.title}>Enquire Now</h2>
            
            <div className={styles.formGrid}>
              {/* Name Field */}
              <div className={styles.fieldWrapper}>
                <label className={styles.label}>Name</label>
                <input
                  type="text"
                  name="name"
                  className={`${styles.input} ${errors.name ? styles.inputError : ""}`}
                  placeholder="Enter your name"
                  value={form.name}
                  onChange={handleChange}
                  autoFocus
                />
                {errors.name && (
                  <div className={styles.errorMsg}>
                    <span className={styles.errorIcon}>⚠</span>
                    {errors.name}
                  </div>
                )}
              </div>

              {/* Email Field */}
              <div className={styles.fieldWrapper}>
                <label className={styles.label}>Email</label>
                <input
                  type="email"
                  name="email"
                  className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
                  placeholder="your.email@gmail.com"
                  value={form.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <div className={styles.errorMsg}>
                    <span className={styles.errorIcon}>⚠</span>
                    {errors.email}
                  </div>
                )}
              </div>

              {/* Mobile Field */}
              <div className={styles.fieldWrapper}>
                <label className={styles.label}>Mobile Number</label>
                <div className={styles.mobileWrapper}>
                  <span className={styles.countryCode}>+91</span>
                  <input
                    type="tel"
                    name="mobile"
                    className={`${styles.input} ${styles.mobileInput} ${errors.mobile ? styles.inputError : ""}`}
                    placeholder="10 digit number"
                    value={form.mobile}
                    onChange={handleChange}
                    maxLength={10}
                    inputMode="numeric"
                  />
                </div>
                {errors.mobile && (
                  <div className={styles.errorMsg}>
                    <span className={styles.errorIcon}>⚠</span>
                    {errors.mobile}
                  </div>
                )}
              </div>

              {/* Course Selection */}
              <div className={styles.fieldWrapper}>
                <label className={styles.label}>Select Course</label>
                {lockCourse ? (
                  <input
                    type="text"
                    className={styles.input}
                    value={selectedCourseLabel || ""}
                    disabled
                  />
                ) : (
                  <select
                    name="course"
                    className={`${styles.select} ${errors.course ? styles.inputError : ""}`}
                    value={form.course}
                    onChange={handleChange}
                  >
                    <option value="">Choose a course</option>
                    {courseOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                )}
                {errors.course && (
                  <div className={styles.errorMsg}>
                    <span className={styles.errorIcon}>⚠</span>
                    {errors.course}
                  </div>
                )}
              </div>
            </div>

            <button type="submit" className={styles.submitBtn}>
              Submit Enquiry
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default SimpleNamePopup;