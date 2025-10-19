import { Extension } from "@tiptap/core";
import { Plugin, PluginKey } from "@tiptap/pm/state";
import { DecorationSet } from "@tiptap/pm/view";
import { pageDecoration } from "./pageDecoration";

const Pages = Extension.create({
	name: "Pages",
	onCreate() {
		const targetNode = this.editor.view.dom;
		targetNode.classList.add("tiptap-pages");
	},
	addProseMirrorPlugins() {
		const editor = this.editor;
		return [
			new Plugin({
				key: new PluginKey("pages"),
				state: {
					init: (_, state) => {
						const widgetList = pageDecoration(state);
						return DecorationSet.create(state.doc, widgetList);
					},
					apply: (tr, decoration, oldState, newState) => {
						return decoration;
					},
				},
			}),
		];
	},
});

export default Pages;
