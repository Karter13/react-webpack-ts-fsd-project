import React, {Suspense} from 'react';
import {Link, Route, Routes} from "react-router-dom";
import './styles/index.scss'
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames";


const App = () => {
   const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames(`app`, {},  [theme])}>
            <button onClick={toggleTheme}>toggle</button>
            <Link to='/'>MainPage </Link>
            <Link to='/about'>AboutPage </Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>

                    <Route path='/' element={<MainPageAsync/>}/>
                    <Route path='/about' element={<AboutPageAsync/>}/>

                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
