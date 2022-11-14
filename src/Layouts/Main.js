import React from 'react';
import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '../Pages/Shared/Header/Header';
import Footer from '../Pages/Shared/Footer/Footer';



const Main = () => {


    const [theme, setTheme] = useState(null);

    useEffect(() => {
        if (window.matchMedia('(prefers-color-scheme : dark)').matches) {
            setTheme('dark');
        }
    }, []);

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    const handleThemeSwitch = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }


    return (
        <div className='bg-white dark:bg-base-300'>
            <Header
                handleThemeSwitch={handleThemeSwitch}
            ></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;