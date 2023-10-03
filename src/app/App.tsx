import { Suspense, useState } from 'react';

import { Navbar } from 'widgets/Navbar';
import { SideBar } from 'widgets/SideBar';
import { AppRouter } from 'app/providers/router';
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { useTheme } from './providers/ThemeProvider';

const App = () => {
    const { theme } = useTheme();

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <SideBar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
