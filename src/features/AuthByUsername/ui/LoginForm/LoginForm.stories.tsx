import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import LoginForm from './LoginForm';

export default {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const LoginFormClear = Template.bind({});
LoginFormClear.args = {};
LoginFormClear.decorators = [StoreDecorator({
    loginForm: {
        username: '123',
        password: 'asdf',
    },
})];

export const LoginFormDark = Template.bind({});
LoginFormDark.args = {};
LoginFormDark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        loginForm: {
            username: '123',
            password: 'asdf',
        },
    }),
];

export const LoginFormWithError = Template.bind({});
LoginFormWithError.args = {};
LoginFormWithError.decorators = [StoreDecorator({
    loginForm: { username: '123', password: 'asd', error: 'ERROR' },
})];

export const LoginFormLoading = Template.bind({});
LoginFormLoading.args = {};
LoginFormLoading.decorators = [StoreDecorator({
    loginForm: { isLoading: true },
})];
