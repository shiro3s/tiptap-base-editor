import React from "react";
import { EditorContent, useEditor } from "@tiptap/react";

// Tiptap Core Extensions
import StarterKit from "@tiptap/starter-kit";
import TextAlign from "@tiptap/extension-text-align";
import Underline from "@tiptap/extension-underline";
import TaskList from "@tiptap/extension-task-list";
import TaskItem from "@tiptap/extension-task-item";
import Typography from "@tiptap/extension-typography";
import SuperScript from "@tiptap/extension-superscript";
import SubScript from "@tiptap/extension-subscript";
import { Placeholder } from "@tiptap/extensions";

// Custom Extensions
import CodeBlock from "./extensions/code-block";
import Pages from "./extensions/pages"

// styles
import styles from "./style.module.css";
import "./style.css";

interface Props {
	placeholder?: string;
}

export const Editor: React.FC<Props> = ({ placeholder = "" }) => {
	const editor = useEditor({
		// 初回レンダリング時のチラツキ防止
		immediatelyRender: true,
		extensions: [
			StarterKit.configure({
				blockquote: {
					HTMLAttributes: {
						class: "block-quote",
					},
				},
			}),
			Placeholder.configure({
				placeholder,
			}),
			TextAlign.configure({ types: ["heading", "paragraph"] }),
			Underline,
			TaskList,
			TaskItem.configure({ nested: true }),
			Typography,
			SuperScript,
			SubScript,
			CodeBlock,
			Pages
		],
		editorProps: {
			attributes: {
				// library名をつける
				class: "",
			},
		},
	});

	return (
		<div className={styles.container}>
			<EditorContent editor={editor} className={styles.editor} />
		</div>
	);
};
