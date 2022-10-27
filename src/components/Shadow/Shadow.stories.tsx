import React from 'react';
import Shadow from './Shadow';
import { ComponentStory, ComponentMeta } from '@storybook/react';


export default {
    title: 'Shadow',
    component: Shadow,
} as ComponentMeta<typeof Shadow>;

const Template: ComponentStory<typeof Shadow> = (args) => <Shadow {...args} />;

export const Size_1 = Template.bind({});
export const Size_2 = Template.bind({});
export const Size_3 = Template.bind({});
export const Size_4 = Template.bind({});
export const Size_5 = Template.bind({});
export const Size_6  = Template.bind({});
export const Size_7  = Template.bind({});

Size_1.args = {
    type: 'shadow_xm',
    children: <h1 className='pb-6'>xm</h1>,
};

Size_2.args = {
    type: 'shadow_sm',
    children: <h1 className='pb-6'>sm</h1>,
};

Size_3.args = {
    type: 'shadow_md',
    children: <h1 className='pb-6'>md</h1>,
};

Size_4.args = {
    type: 'shadow_lg',
    children: <h1 className='pb-6'>lg</h1>,
};

Size_5.args = {
    type: 'shadow_xl',
    children: <h1 className='pb-6'>xl</h1>,
};

Size_6.args = {
    type: 'shadow_2xl',
    children: <h1 className='pb-6'>2xl</h1>,
};

Size_7.args = {
    type: 'shadow_3xl',
    children: <h1 className='pb-6'>3xl</h1>,
};





