import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

import { Text } from 'shared/ui/Text/Text';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useAppDispatch } from 'shared/lib/hooks/useDispatch/useDispatch';
import { useCallback } from 'react';
import { getProfileReadonly, profileActions, updateProfileData } from '../../../../entities/Profile';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
    const { className } = props;

    const dispatch = useAppDispatch();
    const { t } = useTranslation('profile');
    const readonly = useSelector(getProfileReadonly);

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        // @ts-ignore
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <Text title={t('Профиль')} />
            {readonly
                ? (
                    <Button
                        onClick={onEdit}
                        className={cls.editBtn}
                        theme={ThemeButton.OUTLINE}
                    >
                        {t('Редактировать')}
                    </Button>
                )
                : (
                    <>
                        <Button
                            onClick={onCancelEdit}
                            className={cls.editBtn}
                            theme={ThemeButton.OUTLINE_RED}
                        >
                            {t('Отменить')}
                        </Button>

                        <Button
                            onClick={onSave}
                            className={cls.saveBtn}
                            theme={ThemeButton.OUTLINE}
                        >
                            {t('Сохранить')}
                        </Button>
                    </>

                )}
        </div>
    );
};
