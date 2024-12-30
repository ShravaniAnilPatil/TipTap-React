import React, { useEffect } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import Highlight from "@tiptap/extension-highlight";
import Toolbar from "./Toolbar";
import CustomBox from "../extensions/CustomBox";
import ProgressBar from "../extensions/ProgressBar";

const Editor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      ProgressBar,
      Highlight.configure({
        multicolor: true,
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      CustomBox, 
    ],
    content: "<p>Start editing here!</p>",
  });

  useEffect(() => {
    return () => {
      if (editor) {
        editor.destroy();
      }
    };
  }, [editor]);

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
      <Toolbar editor={editor} />
      <EditorContent
        editor={editor}
        className="ProseMirror prose prose-lg focus:outline-none"
      />
    </div>
  );
};

export default Editor;
