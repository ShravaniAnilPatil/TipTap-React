import { Mark } from "@tiptap/core";

const Highlight = Mark.create({
  name: "highlight",

  addOptions() {
    return {
      HTMLAttributes: {}, // Allow customization through attributes
      defaultColor: "yellow", // Default highlight color
    };
  },

  addAttributes() {
    return {
      color: {
        default: this.options.defaultColor,
        parseHTML: (element) => element.style.backgroundColor,
        renderHTML: (attributes) => {
          return {
            style: `background-color: ${attributes.color || this.options.defaultColor};`,
          };
        },
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: "span[style*=background-color]",
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ["span", this.mergeAttributes(HTMLAttributes), 0];
  },

  addCommands() {
    return {
      toggleHighlight: (color) => ({ commands }) => {
        return commands.toggleMark(this.name, { color });
      },
    };
  },

  addKeyboardShortcuts() {
    return {
      "Mod-Shift-H": () =>
        this.editor.commands.toggleHighlight(this.options.defaultColor),
    };
  },
});

export default Highlight;
