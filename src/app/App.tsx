import React, {Suspense} from 'react';
import {Link, Route, Routes} from "react-router-dom";
import './styles/index.scss'
import {useTheme} from "./providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";


const App = () => {
   const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames(`app`, {},  [theme])}>
            <button onClick={toggleTheme}>toggle</button>
            <Link to='/'>MainPage </Link>
            <Link to='/about'>AboutPage </Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>

                    <Route path='/' element={<MainPage/>}/>
                    <Route path='/about' element={<AboutPage/>}/>

                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
