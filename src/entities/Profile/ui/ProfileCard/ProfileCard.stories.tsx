import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import AvatarImg from 'shared/assets/tests/storybook.jpg';
import { Currency } from '../../../Currency';
import { Country } from '../../../Country';
import { ProfileCard } from './ProfileCard';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const ProfileCardPrimary = Template.bind({});
ProfileCardPrimary.args = {
    data: {
        first: 'Михаил',
        lastname: 'Карамзин',
        age: 48,
        currency: Currency.EUR,
        country: Country.Belarus,
        city: 'Grodno',
        username: 'admin',
        avatar: AvatarImg,
    },
};

export const ProfileCardWithError = Template.bind({});
ProfileCardWithError.args = {
    isError: 'TRUE',
};

export const ProfileCardIsLoading = Template.bind({});
ProfileCardIsLoading.args = {
    isLoading: true,
};
