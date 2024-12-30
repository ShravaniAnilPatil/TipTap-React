import { Node } from '@tiptap/core';
import React from 'react';
import { NodeViewWrapper, NodeViewContent } from '@tiptap/react';
import { ReactNodeViewRenderer } from "@tiptap/react";

const CustomBox = Node.create({
  name: 'customBox',
  group: 'block',

  content: 'block*',
  
  draggable: true,

  addAttributes() {
    return {
      backgroundColor: {
        default: '#f0f0f0',
      },
    };
  },
  parseHTML() {
    return [
      {
        tag: 'div[data-type="custom-box"]',
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ['div', { 'data-type': 'custom-box', ...HTMLAttributes }, 0];
  },

  addNodeView() {
    return ReactNodeViewRenderer(CustomBoxComponent);
  },
});

const CustomBoxComponent = (props) => {
  const { node, updateAttributes } = props;

  return (
    <NodeViewWrapper className="custom-box" style={{ backgroundColor: node.attrs.backgroundColor }}>
      <div>
        <label>
          Background Color:
          <input
            type="color"
            value={node.attrs.backgroundColor}
            onChange={(event) => updateAttributes({ backgroundColor: event.target.value })}
          />
        </label>
      </div>
      <NodeViewContent />
    </NodeViewWrapper>
  );
};

export default CustomBox;
