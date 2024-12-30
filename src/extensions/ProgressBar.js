import { Node } from "@tiptap/core";
import React from "react";
import { NodeViewWrapper, ReactNodeViewRenderer } from "@tiptap/react";

const ProgressBar = Node.create({
  name: "progressBar",
  group: "block",
  draggable: true,

  addAttributes() {
    return {
      percentage: {
        default: 50, 
      },
    };
  },
  parseHTML() {
    return [{
        tag: 'div[data-type="progress-bar"]',
      },
    ];
  },
  renderHTML({ HTMLAttributes }) {
    return ["div", { "data-type": "progress-bar", ...HTMLAttributes }];
  },
  addNodeView() {
    return ReactNodeViewRenderer(ProgressBarComponent);
  },
});

const ProgressBarComponent = ({ node, updateAttributes }) => {
  const percentage = node.attrs.percentage;

  return (
    <NodeViewWrapper className="progress-bar-wrapper">
      <div style={{ width: "100%", marginBottom: "8px" }}>
        <label>
          Progress: {percentage}%
          <input
            type="range"
            min="0"
            max="100"
            value={percentage}
            onChange={(event) =>
              updateAttributes({ percentage: parseInt(event.target.value, 10) })
            }
            style={{ width: "100%" }} />
        </label>
      </div>
      <div
        style={{
          width: "100%",
          height: "20px",
          backgroundColor: "#e0e0e0",
          borderRadius: "5px",
        }}
      >
        <div style={{
            width: `${percentage}%`,
            height: "100%",
            backgroundColor: "#4caf50",
            borderRadius: "5px",
          }}
        ></div>
      </div>
    </NodeViewWrapper>
  );
};

export default ProgressBar;
