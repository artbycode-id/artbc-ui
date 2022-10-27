import React from 'react';
import Button from './Button';
import { ComponentStory, ComponentMeta } from '@storybook/react';


export default {
    title: 'Button',
    component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Small = Template.bind({});
export const Medium = Template.bind({});
export const Large = Template.bind({});
export const Default_small = Template.bind({});
export const Default_medium = Template.bind({});
export const Default_large = Template.bind({});

Small.args = {
    type: 'primary',
    children: <span>battens</span>,
};

Medium.args = {
    type: 'medium',
    children: <span>battens</span>,
};

Large.args = {
    type: 'large',
    children: <span>battens</span>,
};


Default_small.args = {
    type: 'd_small',
    children: <span>battens</span>,
};

Default_medium.args = {
    type: 'd_medium',
    children: <span>battens</span>,
};

Default_large.args = {
    type: 'd_large',
    children: <span>battens</span>,
};