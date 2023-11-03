import { Suspense, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { SideBar } from 'widgets/SideBar';
import { getUserInited, userActions } from 'entities/User';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from './providers/ThemeProvider';

const App = () => {
    const { theme } = useTheme();

    const isUserInited = useSelector(getUserInited);
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
                    {isUserInited && <AppRouter />}
                </div>
            </Suspense>
        </div>
    );
};

export default App;
