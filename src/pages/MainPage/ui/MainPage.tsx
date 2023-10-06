import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Counter } from 'entities/Counter';
import { Input } from 'shared/ui/Input/Input';

const MainPage = () => {
    const { t } = useTranslation('main');

    const [value, setValue] = useState('');

    const onchange = (value: string) => {
        setValue(value);
    };

    return (
        <div>
            {t('Главная страница')}
            <Input
                value={value}
                onChange={onchange}
                placeholder="Введите имя"
            />
        </div>
    );
};

export default MainPage;
