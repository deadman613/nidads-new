"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import BlogEditor from "@/components/BlogEditor";
import { withAdminCsrf } from "@/lib/client-csrf";

const baseState = {
  title: "",
  slug: "",
  coverImg: "",
  ogImage: "",
  metaTitle: "",
  metaDescription: "",
  category: "",
  tags: "",
  keywords: "",
  schemas: [],
  content: "",
};

const clientSlugify = (raw = "") =>
  raw
    .toString()
    .normalize("NFKD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

const slugHelpId = "blog-form-slug-help";
const tagsHelpId = "blog-form-tags-help";
const keywordsHelpId = "blog-form-keywords-help";
const schemasHelpId = "blog-form-schemas-help";

const BlogForm = ({ initialData = null, mode = "create" }) => {
  const router = useRouter();

  const [formValues, setFormValues] = useState(() => ({
    ...baseState,
    ...initialData,
    category: initialData?.category || "",
    tags: initialData?.tags?.join(", ") || initialData?.tags || "",
    keywords: initialData?.keywords?.join(", ") || initialData?.keywords || "",
    schemas:
      (initialData?.schemas?.length
        ? initialData.schemas
        : [initialData?.schema, initialData?.faqSchema].filter(Boolean))
        ?.map((s) => (typeof s === "object" ? JSON.stringify(s, null, 2) : s)) ||
      [],
    content: initialData?.content || "",
    ogImage: initialData?.ogImage || "",
    metaTitle: initialData?.metaTitle || "",
    metaDescription: initialData?.metaDescription || "",
  }));
  const [slugTouched, setSlugTouched] = useState(Boolean(initialData?.slug));
  const [status, setStatus] = useState({ type: null, message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [uploading, setUploading] = useState(false);

  const formTitle = useMemo(() => (mode === "edit" ? "Update Post" : "Create Post"), [mode]);

  useEffect(() => {
    if (!slugTouched && formValues.title) {
      setFormValues((prev) => ({
        ...prev,
        slug: clientSlugify(prev.title) || prev.slug,
      }));
    }
  }, [formValues.title, slugTouched]);

  const setField = (field, value) => {
    setFormValues((prev) => ({ ...prev, [field]: value }));
  };

  const addSchema = () => {
    setFormValues((prev) => ({
      ...prev,
      schemas: [...prev.schemas, ""],
    }));
  };

  const updateSchema = (index, value) => {
    setFormValues((prev) => ({
      ...prev,
      schemas: prev.schemas.map((s, i) => (i === index ? value : s)),
    }));
  };

  const removeSchema = (index) => {
    setFormValues((prev) => ({
      ...prev,
      schemas: prev.schemas.filter((_, i) => i !== index),
    }));
  };

  const handleFileChange = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setStatus({ type: null, message: "" });

    try {
      const uploadData = new FormData();
      uploadData.append("file", file);
      const response = await fetch(
        "/api/upload",
        withAdminCsrf({
          method: "POST",
          body: uploadData,
        })
      );
      const result = await response.json().catch(() => ({}));
      if (response.status === 401) {
        throw new Error("Session expired. Please sign in again.");
      }
      if (!response.ok) {
        throw new Error(result.error || "Upload failed");
      }
      setField("coverImg", result.url);
      setStatus({ type: "success", message: "Image uploaded" });
    } catch (error) {
      setStatus({ type: "error", message: error.message });
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setStatus({ type: null, message: "" });

    try {
      if (!formValues.title.trim() || !formValues.content.trim()) {
        throw new Error("Title and content are required");
      }

      const payload = {
        title: formValues.title.trim(),
        slug: formValues.slug.trim() || clientSlugify(formValues.title),
        coverImg: formValues.coverImg?.trim() || "",
        ogImage: formValues.ogImage?.trim() || "",
        metaTitle: formValues.metaTitle?.trim() || "",
        metaDescription: formValues.metaDescription?.trim() || "",
        category: formValues.category?.trim() || "",
        tags: formValues.tags,
        keywords: formValues.keywords,
        schemas: formValues.schemas,
        content: formValues.content,
      };

      const isEdit = mode === "edit" && initialData?.id;
      const endpoint = isEdit ? `/api/blog/${initialData.id}` : "/api/blog";
      const method = isEdit ? "PUT" : "POST";

      const response = await fetch(
        endpoint,
        withAdminCsrf({
          method,
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        })
      );

      const result = await response.json().catch(() => ({}));

      if (response.status === 401) {
        throw new Error("Session expired. Please sign in again.");
      }
      if (!response.ok) {
        throw new Error(result.error || "Unable to save blog");
      }

      setStatus({ type: "success", message: isEdit ? "Post updated" : "Post created" });
      router.push("/admin/blog");
      router.refresh();
    } catch (error) {
      setStatus({ type: "error", message: error.message });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form className="admin-form" onSubmit={handleSubmit} aria-busy={submitting || uploading}>
      <header className="admin-form__header">
        <h2>{formTitle}</h2>
        <p>Use the editor below to manage the blog content that powers every site.</p>
      </header>

      <div className="form-grid">
        <label>
          Title
          <input
            type="text"
            name="title"
            required
            value={formValues.title}
            onChange={(event) => setField("title", event.target.value)}
          />
        </label>

        <label>
          Slug
          <input
            type="text"
            name="slug"
            value={formValues.slug}
            onChange={(event) => {
              setSlugTouched(true);
              setField("slug", clientSlugify(event.target.value));
            }}
            aria-describedby={slugHelpId}
          />
          <small id={slugHelpId}>Auto-generated from the title, but you can override it.</small>
        </label>

        <label>
          Meta Title (SEO)
          <input
            type="text"
            name="metaTitle"
            placeholder="50-60 characters recommended"
            maxLength="60"
            value={formValues.metaTitle}
            onChange={(event) => setField("metaTitle", event.target.value)}
          />
          <small>Optimized title for search engines (50-60 chars). If empty, uses the main title.</small>
        </label>

        <label>
          Meta Description (SEO)
          <textarea
            name="metaDescription"
            placeholder="150-160 characters recommended"
            maxLength="160"
            rows="3"
            value={formValues.metaDescription}
            onChange={(event) => setField("metaDescription", event.target.value)}
          />
          <small>Brief summary for search results and social media (150-160 chars).</small>
        </label>

        <label>
          Category
          <input
            type="text"
            name="category"
            placeholder="e.g. Data Science, Data Analytics, Digital Marketing"
            value={formValues.category}
            onChange={(event) => setField("category", event.target.value)}
            list="category-suggestions"
          />
          <datalist id="category-suggestions">
            <option value="Data Science" />
            <option value="Data Analytics" />
            <option value="Digital Marketing" />
            <option value="Business Analytics" />
            <option value="Machine Learning" />
            <option value="Python" />
            <option value="SQL" />
            <option value="Tableau" />
            <option value="Power BI" />
            <option value="Career Tips" />
            <option value="Placement" />
            <option value="Course Guide" />
            <option value="Interview Prep" />
            <option value="Industry News" />
            <option value="Tutorial" />
          </datalist>
          <small>Groups related posts. Shown as a chip on the blog post and used for recommendations.</small>
        </label>

        <label>
          Tags
          <input
            type="text"
            name="tags"
            placeholder="marketing, release, seo"
            value={formValues.tags}
            onChange={(event) => setField("tags", event.target.value)}
            aria-describedby={tagsHelpId}
          />
          <small id={tagsHelpId}>Comma-separated. Used for filtering and related posts.</small>
        </label>

        <label>
          Keywords (SEO)
          <input
            type="text"
            name="keywords"
            placeholder="design courses, UI UX, interior design"
            value={formValues.keywords}
            onChange={(event) => setField("keywords", event.target.value)}
            aria-describedby={keywordsHelpId}
          />
          <small id={keywordsHelpId}>Comma-separated. Used for SEO meta keywords (defaults to tags if empty).</small>
        </label>

        <label>
          Cover Image URL
          <input
            type="text"
            name="coverImg"
            placeholder="https://"
            value={formValues.coverImg}
            onChange={(event) => setField("coverImg", event.target.value)}
          />
        </label>

        <label>
          OG Image URL (Social Sharing)
          <input
            type="text"
            name="ogImage"
            placeholder="https://"
            value={formValues.ogImage}
            onChange={(event) => setField("ogImage", event.target.value)}
          />
          <small>Specific image for social media previews. If empty, uses cover image.</small>
        </label>

        <label>
          Or upload an image
          <input type="file" accept="image/png,image/jpeg,image/webp" onChange={handleFileChange} disabled={uploading} />
          <small>
            {uploading
              ? "Uploading..."
              : "Only JPEG, PNG, or WebP files are accepted. Images are hosted via ImgBB."}
          </small>
        </label>
      </div>

      <div className="schemas-section">
        <div className="schemas-header">
          <label className="editor-label">Structured Data Schemas (JSON-LD)</label>
          <button type="button" className="btn btn--secondary btn--small" onClick={addSchema}>
            + Add Schema
          </button>
        </div>
        <small id={schemasHelpId} style={{ display: "block", marginBottom: "1rem", color: "#64748b" }}>
          Add multiple JSON-LD schemas (BlogPosting, FAQPage, etc.). Paste valid JSON (preferred) or a single JSON-LD
          &lt;script&gt; block. Each entry renders as a separate script tag.
        </small>

        {formValues.schemas.length === 0 ? (
          <p
            style={{
              padding: "1rem",
              background: "#f8f9fa",
              borderRadius: "8px",
              color: "#64748b",
              textAlign: "center",
            }}
          >
            No schemas added yet. Click the + Add Schema button to add structured data.
          </p>
        ) : (
          <div className="schemas-list">
            {formValues.schemas.map((schema, index) => (
              <div key={index} className="schema-item">
                <div className="schema-item-header">
                  <span>Schema {index + 1}</span>
                  <button
                    type="button"
                    className="btn btn--danger btn--small"
                    onClick={() => removeSchema(index)}
                    aria-label={`Remove schema ${index + 1}`}
                  >
                    Remove
                  </button>
                </div>
                <textarea
                  name={`schema-${index}`}
                  rows="8"
                  placeholder='{"@context":"https://schema.org","@type":"BlogPosting",...}'
                  value={schema}
                  onChange={(event) => updateSchema(index, event.target.value)}
                  aria-label={`Schema ${index + 1} JSON`}
                />
              </div>
            ))}
          </div>
        )}
      </div>

      <label className="editor-label">
        Content
        <BlogEditor value={formValues.content} onChange={(html) => setField("content", html)} />
      </label>

      {status.message ? (
        <p
          className={`form-status form-status--${status.type}`}
          role={status.type === "error" ? "alert" : "status"}
          aria-live={status.type === "error" ? "assertive" : "polite"}
        >
          {status.message}
        </p>
      ) : null}

      <div className="form-actions">
        <button type="submit" className="btn btn--primary" disabled={submitting || uploading}>
          {submitting ? "Saving..." : formTitle}
        </button>
      </div>
    </form>
  );
};

export default BlogForm;
