import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { AppLink, AppLinkTheme } from './AppLink';

export default {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const AppLinkLight = Template.bind({});
AppLinkLight.args = {
    children: 'Text',
};

export const AppLinkDark = Template.bind({});
AppLinkDark.args = {
    children: 'Text',
};
AppLinkDark.decorators = [ThemeDecorator(Theme.DARK)];

export const AppLinkLightPRIMARY = Template.bind({});
AppLinkLightPRIMARY.args = {
    children: 'Text',
    theme: AppLinkTheme.PRIMARY,
};

export const AppLinkDarkPRIMARY = Template.bind({});
AppLinkDarkPRIMARY.args = {
    children: 'Text',
    theme: AppLinkTheme.PRIMARY,
};
AppLinkDarkPRIMARY.decorators = [ThemeDecorator(Theme.DARK)];

export const AppLinkLightSECONDARY = Template.bind({});
AppLinkLightSECONDARY.args = {
    children: 'Text',
    theme: AppLinkTheme.SECONDARY,
};

export const AppLinkDarkSECONDARY = Template.bind({});
AppLinkDarkSECONDARY.args = {
    children: 'Text',
    theme: AppLinkTheme.SECONDARY,
};
AppLinkDarkSECONDARY.decorators = [ThemeDecorator(Theme.DARK)];

export const AppLinkLightRED = Template.bind({});
AppLinkLightRED.args = {
    children: 'Text',
    theme: AppLinkTheme.RED,
};

export const AppLinkDarkRED = Template.bind({});
AppLinkDarkRED.args = {
    children: 'Text',
    theme: AppLinkTheme.RED,
};
AppLinkDarkRED.decorators = [ThemeDecorator(Theme.DARK)];
