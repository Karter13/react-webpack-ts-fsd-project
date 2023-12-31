import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { CommentCard } from './CommentCard';

export default {
    title: 'entities/CommentCard',
    component: CommentCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;

export const CommentCardPrimary = Template.bind({});
CommentCardPrimary.args = {
    comment: {
        id: '1',
        user: {
            id: '1',
            username: 'Maikl',
        },
        text: 'Maikl frontend developer',
    },
};

export const CommentCardLoading = Template.bind({});
CommentCardLoading.args = {
    isLoading: true,
};
