import Blockquote from "@tiptap/extension-blockquote";
import Bold from "@tiptap/extension-bold";
import BulletList from "@tiptap/extension-bullet-list";
import Code from "@tiptap/extension-code";
import { Color } from "@tiptap/extension-color";
import Heading from "@tiptap/extension-heading";
import { Image as TiptapImage } from "@tiptap/extension-image";
import Italic from "@tiptap/extension-italic";
import Link from "@tiptap/extension-link";
import ListItem from "@tiptap/extension-list-item";
import OrderedList from "@tiptap/extension-ordered-list";
import Paragraph from "@tiptap/extension-paragraph";
import Strike from "@tiptap/extension-strike";
import Subscript from "@tiptap/extension-subscript";
import Superscript from "@tiptap/extension-superscript";
import { TextAlign } from "@tiptap/extension-text-align";
import { TextStyle } from "@tiptap/extension-text-style";
import Underline from "@tiptap/extension-underline";
import StarterKit from "@tiptap/starter-kit";

// tiptap extension for content generation editor
export const tiptapExtensions = [
  StarterKit.configure({
    paragraph: {},
  }),
  Paragraph.configure({}),
  Heading.configure({
    levels: [2, 3],
  }),
  Bold,
  Italic,
  Underline,
  Strike,
  TextAlign.configure({
    types: ["heading", "paragraph"],
  }),
  TextStyle,
  Color,
  Code.configure({}),
  TiptapImage.configure({
    inline: true,
  }),
  Link.extend({
    addAttributes() {
      return {
        href: {
          default: null,
          parseHTML: (element) => {
            let href = element.getAttribute("href") || "";

            // Ensure "www." links are converted to absolute URLs
            if (!/^https?:\/\//.test(href) && /^www\./.test(href)) {
              href = `https://${href}`;
            }

            return href;
          },
          renderHTML: (attributes) => ({
            href: attributes.href,
            target: "_blank",
            rel: "noopener noreferrer",
          }),
        },
      };
    },

    addCommands() {
      return {
        setLink:
          (attrs) =>
          ({ commands }) => {
            if (!attrs.href) return false;

            let href = attrs.href.trim();

            // Ensure every link has "https://"
            if (!/^https?:\/\//.test(href)) {
              href = `https://${href}`;
            }

            return commands.setMark("link", { href });
          },

        unsetLink:
          () =>
          ({ commands }) => {
            return commands.unsetMark("link");
          },
      };
    },
  }).configure({
    openOnClick: false,
    autolink: true,
    defaultProtocol: "https",
    validate: (href) => /^https?:\/\//.test(href) || /^www\./.test(href),
  }),
  Blockquote.configure({}),
  ListItem.configure({}),
  BulletList.configure({}),
  OrderedList.configure({}),
  Superscript,
  Subscript,
];
