import React from 'react';
import Button from './Button';
import { ComponentStory, ComponentMeta } from '@storybook/react';


export default {
    title: 'Button',
    component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;
export const Default = Template.bind({
    label: 'Default',
    type: 'default'
});

export const Primary = Template.bind({});

export const Danger = Template.bind({});

export const Link = Template.bind({});

Danger.args = {
    label: 'Danger',
    type: 'danger'
};

Link.args = {
    label: 'Link',
    type: 'link'
};

Primary.args = {
    label: 'Primary',
    type: 'primary'
};

Default.args = {
    label: 'Button',
    type: 'default'
};