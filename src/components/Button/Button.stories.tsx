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

Primary.args = {
    className: 'btn-primary',
    children: <span>Primary</span>,
};

Default.args = {
    className: 'btn-default',
    children: <span>Default</span>,
};