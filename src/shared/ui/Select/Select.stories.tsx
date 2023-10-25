import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Select } from 'shared/ui/Select/Select';

export default {
    title: 'shared/Select',
    component: Select,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const SelectPrimary = Template.bind({});
SelectPrimary.args = {
    label: 'Select value',
    options: [
        { value: '123', content: 'First' },
        { value: '1234', content: 'Second' },
    ],
};

export const SelectDark = Template.bind({});
SelectDark.args = {};
SelectDark.decorators = [ThemeDecorator(Theme.DARK)];
