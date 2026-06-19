"use client";

import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css";

// Dynamic import to avoid SSR issues
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

// Modules defined OUTSIDE the component so the object reference is stable —
// this is the fix for heading changes not applying (stale closure / remount).
const modules = {
  toolbar: {
    container: [
      // Headers H1 → H4 + Normal
      [{ header: [1, 2, 3, 4, false] }],

      // Text formatting
      ["bold", "italic", "underline", "strike"],

      // Text color and background
      [{ color: [] }, { background: [] }],

      // Font size
      [{ size: ["small", false, "large", "huge"] }],

      // Lists
      [{ list: "ordered" }, { list: "bullet" }],

      // Text alignment
      [{ align: [] }],

      // Indentation
      [{ indent: "-1" }, { indent: "+1" }],

      // Blockquote and code block
      ["blockquote", "code-block"],

      // Links and images
      ["link", "image"],

      // Clean formatting
      ["clean"],
    ],
  },
  clipboard: {
    matchVisual: false,
  },
};

// Formats list must include every format used in the toolbar
const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "color",
  "background",
  "size",
  "list",
  "align",
  "indent",
  "blockquote",
  "code-block",
  "link",
  "image",
];

const BlogEditor = ({ value, onChange }) => {
  return (
    <div className="editor">
      <ReactQuill
        theme="snow"
        value={value || ""}
        onChange={onChange}
        modules={modules}
        formats={formats}
        placeholder="Write your blog content..."
        className="blog-editor-quill"
      />
    </div>
  );
};

export default BlogEditor;
