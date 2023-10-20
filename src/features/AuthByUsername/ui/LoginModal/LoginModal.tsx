import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

import { Modal } from 'shared/ui/Modal/Modal';
import { Loader } from 'shared/ui/Loader/Loader';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';

interface LoginModalProps {
    className?: string;
    isOpen?: boolean;
    onClose: () => void;
}

export const LoginModal = (props: LoginModalProps) => {
    const {
        className,
        isOpen,
        onClose,
    } = props;
    const { t } = useTranslation();

    return (
        <Modal
            lazy
            isOpen={isOpen}
            onClose={onClose}
            className={classNames('', {}, [className])}
        >
            <Suspense fallback={<Loader />}>
                <LoginFormAsync onSuccess={onClose} />
            </Suspense>

        </Modal>
    );
};
