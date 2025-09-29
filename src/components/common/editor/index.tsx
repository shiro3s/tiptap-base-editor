import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React from "react";

export const Editor: React.FC = () => {
	const editor = useEditor({
		extensions: [StarterKit],
	});

	return (
		<div>
			<EditorContent editor={editor} />
		</div>
	);
};
