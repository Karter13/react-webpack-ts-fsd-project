import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Skeleton } from './Skeleton';

export default {
    title: 'shared/Skeleton',
    component: Skeleton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />;

export const SkeletonPrimary = Template.bind({});
SkeletonPrimary.args = {
    width: '100%',
    height: 200,
};

export const SkeletonPrimaryCircle = Template.bind({});
SkeletonPrimaryCircle.args = {
    border: '50%',
    width: 100,
    height: 100,
};

export const SkeletonDark = Template.bind({});
SkeletonPrimary.args = {
    width: '100%',
    height: 200,
};
SkeletonDark.decorators = [
    ThemeDecorator(Theme.DARK),
];

export const SkeletonDarkCircle = Template.bind({});
SkeletonDarkCircle.args = {
    border: '50%',
    width: 100,
    height: 100,
};
SkeletonDarkCircle.decorators = [
    ThemeDecorator(Theme.DARK),
];
