import React from "react";
import Editor from "./components/Editor";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <h1 className="text-center text-3xl font-bold text-gray-700 mb-6">
        Tiptap Editor
      </h1>
      <Editor />
    </div>
  );
}

export default App;
