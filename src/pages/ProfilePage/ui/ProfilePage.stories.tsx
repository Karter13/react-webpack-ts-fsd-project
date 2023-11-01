import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import AvatarImg from 'shared/assets/tests/storybook.jpg';
import { Currency } from '../../../entities/Currency';
import { Country } from '../../../entities/Country';
import ProfilePage from './ProfilePage';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args: any) => <ProfilePage {...args} />;

export const ProfilePageNormal = Template.bind({});
ProfilePageNormal.args = {};
ProfilePageNormal.decorators = [StoreDecorator({
    profile: {
        form: {
            first: 'Михаил',
            lastname: 'Карамзин',
            age: 48,
            currency: Currency.EUR,
            country: Country.Belarus,
            city: 'Grodno',
            username: 'admin',
            avatar: AvatarImg,
        },
    },
})];

export const ProfilePageDark = Template.bind({});
ProfilePageDark.args = {};
ProfilePageDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    profile: {
        form: {
            first: 'Михаил',
            lastname: 'Карамзин',
            age: 48,
            currency: Currency.EUR,
            country: Country.Belarus,
            city: 'Grodno',
            username: 'admin',
            avatar: AvatarImg,
        },
    },
})];
