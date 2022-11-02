import React from "react";
import Button from "./Button";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
export const Primary = Template.bind({});
export const Warning = Template.bind({});

Primary.args = {
  className: "btn btn-primary",
  children: <span>Primary</span>,
};

Default.args = {
  className: "btn btn-default",
  children: <span>Default</span>,
};

Warning.args = {
  className: "btn btn-outline btn-accent",
  children: <span>Warning</span>,
};
