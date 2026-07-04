"use client";

import { useRef, useLayoutEffect } from "react";
import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css";

// Dynamic import to avoid SSR issues
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

// ── TOOLBAR ID ──
// We render the toolbar as a SEPARATE div before the editor.
// Quill is told to use "#blog-toolbar" as its toolbar container.
// This prevents the editor blur event from firing when the user
// clicks a toolbar dropdown (the root cause of dropdowns closing instantly).
const TOOLBAR_ID = "blog-toolbar";

// Modules reference "#blog-toolbar" instead of an inline array.
// Must be defined outside the component for a stable reference.
const modules = {
  toolbar: {
    container: `#${TOOLBAR_ID}`,
  },
  clipboard: {
    matchVisual: false,
  },
};

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
  "table",
];

const TABLE_BLOT_REGISTERED_KEY = "__BLOG_TABLE_BLOT_REGISTERED__";

async function registerTableBlot() {
  if (typeof window === "undefined" || window[TABLE_BLOT_REGISTERED_KEY]) {
    return;
  }

  const module = await import("quill");
  const Quill = module.default || module.Quill;

  if (!Quill || typeof Quill.import !== "function") {
    return;
  }

  const BlockEmbed = Quill.import("blots/block/embed");

  class TableEmbedBlot extends BlockEmbed {
    static blotName = "table";
    static tagName = "div";
    static className = "ql-table-embed";

    static create(value) {
      const node = super.create();
      node.innerHTML = value || "";
      node.className = "ql-table-embed";
      return node;
    }

    static value(domNode) {
      return domNode.innerHTML;
    }
  }

  Quill.register(TableEmbedBlot, true);
  window[TABLE_BLOT_REGISTERED_KEY] = true;
}

// ── CUSTOM TOOLBAR JSX ──
// Rendered as a plain div — Quill picks it up by ID and wires the buttons.
// Using onMouseDown + e.preventDefault() on the wrapper stops focus loss.
function BlogToolbar() {
  return (
    <div
      id={TOOLBAR_ID}
      onMouseDown={(e) => e.preventDefault()} // key fix: prevents editor blur
    >
      {/* Heading select — H1 → H4 + Normal paragraph */}
      <span className="ql-formats">
        <select className="ql-header" defaultValue="">
          <option value="1">H1</option>
          <option value="2">H2</option>
          <option value="3">H3</option>
          <option value="4">H4</option>
          <option value="">Normal</option>
        </select>
      </span>

      {/* Font size */}
      <span className="ql-formats">
        <select className="ql-size" defaultValue="">
          <option value="small">Small</option>
          <option value="">Normal</option>
          <option value="large">Large</option>
          <option value="huge">Huge</option>
        </select>
      </span>

      {/* Text formatting */}
      <span className="ql-formats">
        <button className="ql-bold" />
        <button className="ql-italic" />
        <button className="ql-underline" />
        <button className="ql-strike" />
      </span>

      {/* Color */}
      <span className="ql-formats">
        <select className="ql-color" />
        <select className="ql-background" />
      </span>

      {/* Lists */}
      <span className="ql-formats">
        <button className="ql-list" value="ordered" />
        <button className="ql-list" value="bullet" />
      </span>

      {/* Alignment */}
      <span className="ql-formats">
        <select className="ql-align" />
      </span>

      {/* Indent */}
      <span className="ql-formats">
        <button className="ql-indent" value="-1" />
        <button className="ql-indent" value="+1" />
      </span>

      {/* Blocks */}
      <span className="ql-formats">
        <button className="ql-blockquote" />
        <button className="ql-code-block" />
      </span>

      {/* Media */}
      <span className="ql-formats">
        <button className="ql-link" />
        <button className="ql-image" />
      </span>

      {/* Clean */}
      <span className="ql-formats">
        <button className="ql-clean" />
      </span>
    </div>
  );
}

const BlogEditor = ({ value, onChange }) => {
  const quillRef = useRef(null);

  useLayoutEffect(() => {
    void registerTableBlot();
  }, []);

  const handlePaste = (event) => {
    const clipboardData = event.clipboardData;
    const html = clipboardData?.getData("text/html");

    if (!html || !html.toLowerCase().includes("<table")) {
      return;
    }

    const tableMatch = html.match(/<table[\s\S]*?<\/table>/i);
    if (!tableMatch) {
      return;
    }

    const editor = quillRef.current?.getEditor?.();
    if (!editor) {
      return;
    }

    event.preventDefault();
    editor.clipboard.dangerouslyPasteHTML(editor.getLength(), tableMatch[0]);
  };

  return (
    <div className="editor">
      {/* Toolbar rendered OUTSIDE ReactQuill — avoids blur-on-click issue */}
      <BlogToolbar />

      <ReactQuill
        ref={quillRef}
        theme="snow"
        value={value || ""}
        onChange={onChange}
        onPaste={handlePaste}
        modules={modules}
        formats={formats}
        placeholder="Write your blog content..."
        className="blog-editor-quill"
      />
    </div>
  );
};

export default BlogEditor;
