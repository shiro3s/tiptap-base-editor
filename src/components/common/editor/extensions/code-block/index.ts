import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import { all, createLowlight } from "lowlight";

import html from "highlight.js/lib/languages/javascript";
import css from "highlight.js/lib/languages/css";
import js from "highlight.js/lib/languages/javascript";
import ts from "highlight.js/lib/languages/typescript";

const lowlight = createLowlight(all);
lowlight.register("html", html);
lowlight.register("css", css);
lowlight.register("javascript", js);
lowlight.register("typescript", ts);

lowlight.registerAlias({ typescript: ["ts"] });
lowlight.registerAlias({ javascript: ["js"] });

const CodeBlock = CodeBlockLowlight.configure({
	lowlight,
  HTMLAttributes: {
    class: "code-block"
  },
  languageClassPrefix: "language-",
  defaultLanguage: "plaintext"
});

export default CodeBlock;
