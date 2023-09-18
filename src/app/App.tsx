import './styles/index.scss'

import {Navbar} from "widgets/Navbar";
import {SideBar} from "widgets/SideBar";
import {useTheme} from "./providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/providers/router";


const App = () => {
    const {theme} = useTheme()

    return (
        <div className={classNames(`app`, {}, [theme])}>
            <Navbar/>
            <div className="content-page">
                <SideBar/>
                <AppRouter/>
            </div>
        </div>
    );
};

export default App;
