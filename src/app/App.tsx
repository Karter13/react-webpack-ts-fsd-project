import { Suspense, useEffect, useState } from 'react';

import { Navbar } from 'widgets/Navbar';
import { SideBar } from 'widgets/SideBar';
import { AppRouter } from 'app/providers/router';
import { classNames } from 'shared/lib/classNames/classNames';
import { useDispatch } from 'react-redux';
import { userActions } from 'entities/User';
import { useTheme } from './providers/ThemeProvider';

const App = () => {
    const { theme } = useTheme();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

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
