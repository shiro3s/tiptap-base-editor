import { EditorState } from "@tiptap/pm/state";
import { Decoration } from "@tiptap/pm/view";

const pageBreakDefinition = (
  firstPage = false
) => {
	const container = document.createElement("div");
	container.classList.add("page-container");

	const page = document.createElement("div");
	page.classList.add("page");
  page.dataset.firstPage = `${firstPage}`

	const pageBreak = document.createElement("div");
	pageBreak.classList.add("page-break");

	const pageSpace = document.createElement("div");
	pageSpace.classList.add("page-space");

	pageBreak.append(pageSpace);
	container.append(page, pageBreak);

	return container;
};

export const pageDecoration = (state: EditorState) => {
	const widget = Decoration.widget(
		0,
		(view) => {
			//
			const pageGap = 30;
			const pageHeight = 842;
			const pageBackground = "#fff";

			const el = document.createElement("div");
			el.dataset.pagination = "true";

      const fragment = document.createDocumentFragment()
      
      for (let i = 0; i < 1; i+=1) {
        const page = pageBreakDefinition(i === 0)
        fragment.appendChild(page.cloneNode(true))
      }

      el.append(fragment)
			el.id = "pages";
			return el;
		},
		{ side: -1 },
	);

	return [widget];
};
