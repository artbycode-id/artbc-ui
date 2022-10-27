import React from 'react';
import Typography from './Typography';
import { ComponentStory, ComponentMeta } from '@storybook/react';


export default {
    title: 'Typography',
    component: Typography,
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => <Typography {...args} />;

export const Reguler = Template.bind({});
export const Medium = Template.bind({});
export const Semi_bold = Template.bind({});

Reguler.args = {
    type: 'Regfont',
    // children: <p>Display 1</p>, 
};

Medium.args = {
    type: 'Medfont',
    // children: <p>Display 1</p>, 
};

Semi_bold.args = {
    type: 'Sbfont',
    // children: <p>Display 1</p>, 
};







