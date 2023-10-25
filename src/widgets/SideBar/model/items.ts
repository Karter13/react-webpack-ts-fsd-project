import React from 'react';
import { RouterPath } from 'shared/config/routeConfig/routeConfig';

import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg';

export interface SideBarItemType {
    path: string;
    text: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
    authOnly?: boolean;
}

export const SideBarItemsList: SideBarItemType[] = [
    {
        path: RouterPath.main,
        text: 'Главная страница',
        Icon: MainIcon,

    },
    {
        path: RouterPath.about,
        text: 'О сайте',
        Icon: AboutIcon,

    },
    {
        path: RouterPath.profile,
        text: 'Профиль',
        Icon: ProfileIcon,
        authOnly: true,
    },
];
