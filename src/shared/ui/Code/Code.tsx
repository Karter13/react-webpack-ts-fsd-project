import { ReactNode, useCallback } from 'react';

import { classNames } from '../../lib/classNames/classNames';
import cls from './Code.module.scss';
import { Button, ThemeButton } from '../Button/Button';
import CopyIcon from '../../assets/icons/copy-20-20.svg';

interface CodeProps {
    className?: string;
    text: string;
}

export const Code = (props: CodeProps) => {
    const { className, text } = props;

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <pre className={classNames(cls.Code, {}, [className])}>
            <Button
                onClick={onCopy}
                className={cls.copyBtn}
                theme={ThemeButton.CLEAR}
            >
                <CopyIcon className={cls.copyIcon} />
            </Button>
            <code>
                {text}
            </code>
        </pre>
    );
};
