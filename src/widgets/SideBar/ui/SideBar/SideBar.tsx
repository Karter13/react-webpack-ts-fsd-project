import { memo, useMemo, useState } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { Button, SizeButton, ThemeButton } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { SideBarItem } from '../SideBarItem/SideBarItem';
import cls from './SideBar.module.scss';

interface SideBarProps {
    className?: string;
}

export const SideBar = memo(({ className }: SideBarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const sideBarItemsList = useSelector(getSidebarItems);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    const itemList = useMemo(() => sideBarItemsList.map((item) => (
        <SideBarItem
            key={item.path}
            item={item}
            collapsed={collapsed}
        />
    )), [collapsed, sideBarItemsList]);

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.SideBar, { [cls.collapsed]: collapsed }, [className])}
        >
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={cls.collapsedBtn}
                square
                size={SizeButton.L}
                theme={ThemeButton.BACKGROUND_INVERTED}
            >
                {collapsed ? '>' : '<'}
            </Button>

            <div className={cls.items}>
                {itemList}
            </div>

            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher
                    className={cls.lang}
                    short={collapsed}
                />
            </div>
        </div>
    );
});
