import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextSize, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const TextLightTheme = Template.bind({});
TextLightTheme.args = {
    title: 'Title',
    text: 'Text',
};

export const TextDarkTheme = Template.bind({});
TextDarkTheme.args = {
    title: 'Title',
    text: 'Text',
};
TextDarkTheme.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
    title: 'Only Title',
};

export const OnlyTitleDarkTheme = Template.bind({});
OnlyTitleDarkTheme.args = {
    title: 'Only Title',
};
OnlyTitleDarkTheme.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyText = Template.bind({});
OnlyText.args = {
    text: 'Only Text',
};

export const OnlyTextDarkTheme = Template.bind({});
OnlyTextDarkTheme.args = {
    text: 'Only Text',
};
OnlyTextDarkTheme.decorators = [ThemeDecorator(Theme.DARK)];

export const ErrorText = Template.bind({});
ErrorText.args = {
    title: 'Error Title',
    text: 'Error Text',
    theme: TextTheme.ERROR,
};

export const TextSizeM = Template.bind({});
TextSizeM.args = {
    size: TextSize.M,
    title: 'Title M',
    text: 'Text M',
};

export const TextSizeL = Template.bind({});
TextSizeL.args = {
    size: TextSize.L,
    title: 'Title L',
    text: 'Text L',
};
