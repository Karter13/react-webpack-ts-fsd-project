import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import { RouterPath } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg';
import ArticleIcon from 'shared/assets/icons/article-20-20.svg';
import { SideBarItemType } from '../../model/types/sidebar';

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const sideBarItemsList: SideBarItemType[] = [
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
        ];

        if (userData) {
            sideBarItemsList.push(
                {
                    path: RouterPath.profile + userData.id,
                    text: 'Профиль',
                    Icon: ProfileIcon,
                    authOnly: true,
                },
                {
                    path: RouterPath.articles,
                    text: 'Статьи',
                    Icon: ArticleIcon,
                    authOnly: true,
                },
            );
        }

        return sideBarItemsList;
    },

);
