import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { User } from 'entities/User';
import { CommentList } from './CommentList';

export default {
    title: 'entities/CommentList',
    component: CommentList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const CommentListPrimary = Template.bind({});
CommentListPrimary.args = {
    comments: [
        {
            id: '1',
            user: {
                id: '1',
                username: 'Maikl',
            },
            text: 'Maikl frontend developer',
        },
        {
            id: '2',
            user: {
                id: '1',
                username: 'Maikl',
            },
            text: 'React is good',
        },
    ],
};

export const CommentListLoading = Template.bind({});
CommentListLoading.args = {
    comments: [],
    isLoading: true,
};
