import React from 'react';
import Button from './Button';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title: 'Button',
    component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
export const Primary = Template.bind({});
export const Danger = Template.bind({});
export const Link = Template.bind({});

Danger.args = {
    type: 'danger',
    children: <span>Danger</span>,
};

Link.args = {
    type: 'link',
    children: <span>Link</span>,
};

Primary.args = {
    type: 'primary',
    children: <span>Primary</span>,
};

Default.args = {
    children: <span>Default</span>,
};