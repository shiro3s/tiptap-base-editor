import React from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

import "./style.css";
import styles from "./style.module.css";

export const Editor: React.FC = () => {
	const editor = useEditor({
		extensions: [
			StarterKit
		],
	});

	return (
		<div className={styles.container}>
			<EditorContent editor={editor} className={styles.editor} />
		</div>
	);
};
