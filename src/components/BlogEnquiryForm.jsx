"use client";

import { useState } from "react";
import styles from "./SimpleNamePopup.module.css";

const BlogEnquiryForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    course: "Data Science"
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const validate = () => {
    const validation = {};

    if (!form.name.trim()) {
      validation.name = "Name is required";
    } else if (form.name.trim().length < 2) {
      validation.name = "Name must be at least 2 characters";
    }

    if (!form.email.trim()) {
      validation.email = "Email is required";
    } else if (!form.email.match(/^\S+@\S+\.\S+$/)) {
      validation.email = "Please enter a valid email";
    }

    if (!form.mobile.trim()) {
      validation.mobile = "Mobile number is required";
    } else if (!form.mobile.match(/^\d{10}$/)) {
      validation.mobile = "Enter a valid 10 digit mobile number";
    }

    if (!form.course.trim()) {
      validation.course = "Course name is required";
    }

    return validation;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitError("");

    const validation = validate();
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...form,
          source: "Blog Page Enquiry"
        })
      });

      const payload = await response.json().catch(() => null);

      if (!response.ok || !payload?.success) {
        throw new Error(payload?.error || "Unable to submit enquiry");
      }

      setSubmitted(true);
      setForm({ name: "", email: "", mobile: "", course: "Data Science" });
    } catch (error) {
      setSubmitError(error.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.popup} style={{ boxShadow: "0 30px 70px rgba(0, 0, 0, 0.45)", padding: "32px 36px" }}>
      {submitted ? (
        <div className={styles.success}>
          <div className={styles.successIcon}>✓</div>
          <div className={styles.successText}>Thank you!</div>
          <div className={styles.successSubtext}>
            We&apos;ll contact you soon at {form.email}
          </div>
        </div>
      ) : (
        <form className={styles.form} onSubmit={handleSubmit}>
          <h2 className={styles.title}>Enquire Now</h2>

          {submitError && (
            <div className={styles.errorMsg} style={{ marginBottom: "12px" }}>
              {submitError}
            </div>
          )}

          <div className={styles.formGrid}>
            <div className={styles.fieldWrapper}>
              <label className={styles.label}>Name</label>
              <input
                type="text"
                name="name"
                className={`${styles.input} ${errors.name ? styles.inputError : ""}`}
                placeholder="Enter your name"
                value={form.name}
                onChange={handleChange}
              />
              {errors.name && <div className={styles.errorMsg}>⚠ {errors.name}</div>}
            </div>

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
              {errors.email && <div className={styles.errorMsg}>⚠ {errors.email}</div>}
            </div>

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
              {errors.mobile && <div className={styles.errorMsg}>⚠ {errors.mobile}</div>}
            </div>

            <div className={styles.fieldWrapper}>
              <label className={styles.label}>Select Course</label>
              <input
                type="text"
                name="course"
                className={`${styles.input} ${errors.course ? styles.inputError : ""}`}
                placeholder="Course interest"
                value={form.course}
                onChange={handleChange}
              />
              {errors.course && <div className={styles.errorMsg}>⚠ {errors.course}</div>}
            </div>
          </div>

          <button type="submit" className={styles.submitBtn} disabled={loading}>
            {loading ? "Submitting..." : "Submit Enquiry"}
          </button>
        </form>
      )}
    </div>
  );
};

export default BlogEnquiryForm;
