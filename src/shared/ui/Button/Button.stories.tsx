import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, SizeButton, ThemeButton } from './Button';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    theme: ThemeButton.CLEAR,
};

export const OutlineClear = Template.bind({});
OutlineClear.args = {
    children: 'Text',
    theme: ThemeButton.OUTLINE,
};
export const OutlineClearSizeM = Template.bind({});
OutlineClearSizeM.args = {
    children: 'Text',
    theme: ThemeButton.OUTLINE,
    size: SizeButton.M,
};

export const OutlineClearSizeL = Template.bind({});
OutlineClearSizeL.args = {
    children: 'Text',
    theme: ThemeButton.OUTLINE,
    size: SizeButton.L,
};

export const OutlineClearSizeXL = Template.bind({});
OutlineClearSizeXL.args = {
    children: 'Text',
    theme: ThemeButton.OUTLINE,
    size: SizeButton.XL,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: 'Text',
    theme: ThemeButton.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BackgroundTheme = Template.bind({});
BackgroundTheme.args = {
    children: 'Text',
    theme: ThemeButton.BACKGROUND_INVERTED,
};

export const BackgroundThemeDark = Template.bind({});
BackgroundThemeDark.args = {
    children: 'Text',
    theme: ThemeButton.BACKGROUND_INVERTED,
};
BackgroundThemeDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BackgroundInvertedTheme = Template.bind({});
BackgroundInvertedTheme.args = {
    children: 'Text',
    theme: ThemeButton.BACKGROUND_INVERTED,
};

export const BackgroundInvertedThemeDark = Template.bind({});
BackgroundInvertedThemeDark.args = {
    children: 'Text',
    theme: ThemeButton.BACKGROUND_INVERTED,
};
BackgroundInvertedThemeDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SquareButton = Template.bind({});
SquareButton.args = {
    children: '>',
    theme: ThemeButton.BACKGROUND_INVERTED,
    square: true,
};

export const SquareButtonDark = Template.bind({});
SquareButtonDark.args = {
    children: '>',
    theme: ThemeButton.BACKGROUND_INVERTED,
    square: true,
};
SquareButtonDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SquareButtonSizeM = Template.bind({});
SquareButtonSizeM.args = {
    children: '>',
    theme: ThemeButton.BACKGROUND_INVERTED,
    square: true,
    size: SizeButton.M,
};

export const SquareButtonSizeL = Template.bind({});
SquareButtonSizeL.args = {
    children: '>',
    theme: ThemeButton.BACKGROUND_INVERTED,
    square: true,
    size: SizeButton.L,
};

export const SquareButtonSizeXL = Template.bind({});
SquareButtonSizeXL.args = {
    children: '>',
    theme: ThemeButton.BACKGROUND_INVERTED,
    square: true,
    size: SizeButton.XL,
};
