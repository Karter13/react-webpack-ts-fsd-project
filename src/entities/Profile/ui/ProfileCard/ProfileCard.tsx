import { useTranslation } from 'react-i18next';

import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Country } from '../../../Country/model/types/country';
import { CountrySelect } from '../../../../entities/Country';
import { Currency, CurrencySelect } from '../../../../entities/Currency';
import cls from './ProfileCard.module.scss';
import { Profile } from '../../model/types/profile';

interface ProfileCardProps {
    data?: Profile;
    isError?: string;
    className?: string;
    isLoading?: boolean;
    readOnly?: boolean;
    onChangeAge?: (value?: string) => void;
    onChangeCity?: (value?: string) => void;
    onChangeLastName?: (value?: string) => void;
    onChangeFirstName?: (value?: string) => void;
    onChangeAvatar?: (value?: string) => void;
    onChangeUserName?: (value?: string) => void;
    onChangeCurrency?: (currency?: Currency) => void;
    onChangeCountry?: (country?: Country) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        data,
        isError,
        isLoading,
        className,
        readOnly,
        onChangeLastName,
        onChangeFirstName,
        onChangeAge,
        onChangeCity,
        onChangeAvatar,
        onChangeUserName,
        onChangeCurrency,
        onChangeCountry,
    } = props;
    const { t } = useTranslation('profile');

    if (isLoading) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
                <Loader />
            </div>
        );
    }

    if (isError) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    title={t('Произощла ошибка при загрузке файла!')}
                    text={t('Попробуйте обновить страницу')}
                    align={TextAlign.CENTER}
                />
            </div>
        );
    }

    const mods: Mods = {
        [cls.editing]: !readOnly,
    };

    return (
        <div className={classNames(cls.ProfileCard, mods, [className])}>
            <div className={cls.data}>

                {data?.avatar && (
                    <div className={cls.avatarWrapper}>
                        <Avatar
                            src={data?.avatar}
                            alt={data?.first}
                            size={100}
                        />
                    </div>
                )}

                <Input
                    value={data?.first}
                    placeholder={t('Ваше имя')}
                    className={cls.input}
                    onChange={onChangeFirstName}
                    readOnly={readOnly}
                />

                <Input
                    value={data?.lastname}
                    placeholder={t('Ваша фамилимя')}
                    className={cls.input}
                    onChange={onChangeLastName}
                    readOnly={readOnly}
                />

                <Input
                    value={data?.age}
                    placeholder={t('Ваш возраст')}
                    className={cls.input}
                    onChange={onChangeAge}
                    readOnly={readOnly}
                />

                <Input
                    value={data?.city}
                    placeholder={t('Город')}
                    className={cls.input}
                    onChange={onChangeCity}
                    readOnly={readOnly}
                />

                <Input
                    value={data?.username}
                    placeholder={t('Введите имя пользователя')}
                    className={cls.input}
                    onChange={onChangeUserName}
                    readOnly={readOnly}
                />

                <Input
                    value={data?.avatar}
                    placeholder={t('Введите ссылку на аватар')}
                    className={cls.input}
                    onChange={onChangeAvatar}
                    readOnly={readOnly}
                />

                <CurrencySelect
                    className={cls.input}
                    value={data?.currency}
                    onChange={onChangeCurrency}
                    readOnly={readOnly}
                />

                <CountrySelect
                    className={cls.input}
                    value={data?.country}
                    onChange={onChangeCountry}
                    readOnly={readOnly}
                />

            </div>
        </div>
    );
};
