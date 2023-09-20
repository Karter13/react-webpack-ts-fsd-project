import './styles/index.scss';

import {Navbar} from "widgets/Navbar";
import {SideBar} from "widgets/SideBar";
import {useTheme} from "./providers/ThemeProvider";
import {AppRouter} from "app/providers/router";
import {classNames} from "shared/lib/classNames/classNames";
import {Suspense} from 'react';


const App = () => {
    const {theme} = useTheme()

    return (
        <div className={classNames(`app`, {}, [theme])}>
            <Suspense fallback="loading">
                <Navbar/>
                <div className="content-page">
                    <SideBar/>
                    <AppRouter/>
                </div>
            </Suspense>
        </div>
    );
};

export default App;
