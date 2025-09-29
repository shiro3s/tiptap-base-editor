import { Meta, StoryObj } from "@storybook/react-vite";

import { Editor } from "@/components/common/editor";

const meta = {
	title: "Components/Editor",
	component: Editor,
	argTypes: {},
} satisfies Meta<typeof Editor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};
