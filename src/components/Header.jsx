import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {


    return (
        <div className={box}>
            <nav className={container}>
                <NavLink to='/'  className={logo}>
                    <span className='sm:hidden'>Find your alone </span> pussy
                </NavLink>

                <NavLink to='/select' className={adopt} >
                    Adopt
                </NavLink>
                <NavLink to='/' className={menuItem} >
                    help
                </NavLink>

            </nav>
        </div>
    );
};

export default Header;

const box = ' shadow flex w-screen justify-center items-center bg-white'
const container = 'w-[1280px] flex h-auto items-center'
const adopt = 'bg-green-400 py-2 px-4 rounded-full active:bg-green-300'
const menuItem = 'hover:underline px-[22px] sm:px-1'
const logo = 'text-[32px] px-[34px] py-[16px] sm:text-base'
