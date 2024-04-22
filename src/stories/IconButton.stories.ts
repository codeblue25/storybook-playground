import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import IconButton from "../components/IconButton";

const meta = {
  title: "Button/IconButton",
  component: IconButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    alt: { control: "text", description: "아이콘 이미지 대체 텍스트" },
    iconPath: { control: "text", description: "아이콘 이미지 경로" },
    onClick: { action: "clicked", description: "아이콘 클릭 이벤트" },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    alt: "icon",
    iconPath: "/icons/ic-public-delete-dark.svg",
  },
};
