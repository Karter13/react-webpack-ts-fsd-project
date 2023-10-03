import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from 'shared/ui/Modal/Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const ModalLightTheme = Template.bind({});
ModalLightTheme.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus quibusdam quos reiciendis reprehenderit veniam? Aut est non placeat sapiente voluptatem!',
};

export const ModalDarkTheme = Template.bind({});
ModalDarkTheme.args = {
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus quibusdam quos reiciendis reprehenderit veniam? Aut est non placeat sapiente voluptatem!',
};
ModalDarkTheme.decorators = [ThemeDecorator(Theme.DARK)];
