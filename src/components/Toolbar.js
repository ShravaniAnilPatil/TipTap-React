import React from "react";

const Toolbar = ({ editor }) => {
  if (!editor) return null;

  return (
    <div className="flex space-x-2 mb-4">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`px-4 py-2 rounded ${
          editor.isActive("bold")
            ? "bg-blue-500 text-white"
            : "bg-gray-200 text-gray-700"
        }`}
      >
        Bold
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={`px-4 py-2 rounded ${
          editor.isActive("italic")
            ? "bg-blue-500 text-white"
            : "bg-gray-200 text-gray-700"
        }`}
      >
        Italic
      </button>
      <button
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={`px-4 py-2 rounded ${
          editor.isActive("underline")
            ? "bg-blue-500 text-white"
            : "bg-gray-200 text-gray-700"
        }`}
      >
        Underline
      </button>

      <button
        onClick={() => editor.chain().focus().setTextAlign("left").run()}
        className="px-4 py-2 bg-gray-200 rounded"
      >
        Align Left
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign("center").run()}
        className="px-4 py-2 bg-gray-200 rounded"
      >
        Align Center
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign("right").run()}
        className="px-4 py-2 bg-gray-200 rounded"
      >
        Align Right
      </button>

      <button
        onClick={() =>
          editor.chain().focus().insertContent('<div data-type="custom-box"></div>').run()
        }
        className="px-4 py-2 bg-green-500 text-white rounded"
      >
        Add Custom Box
      </button>
      <button
        onClick={() =>
          editor.chain().focus().insertContent('<div data-type="progress-bar"></div>').run()
        }
        className="px-4 py-2 bg-green-500 text-white rounded"
      >
        Add Progress Bar
      </button>

    </div>
  );
};

export default Toolbar;
