import React, { useState } from 'react';

const Sort = ({data, sort, setSort}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className={box} onClick={()=>setIsOpen(!isOpen)}>
            <h1 className={title}>{sort}</h1>
            <ul className={isOpen?subMenu: 'hidden'}>
                {data.map((item) => (
                    <li key={item} onClick={()=>setSort(item)} className={menuItem}>{item}</li>
                ))}
            </ul>
        </nav>
    );
};

export default Sort;

const box = 'cursor-pointer min-w-[150px] w-min relative'
const title = 'border px-2 bg-white rounded'
const subMenu = 'bg-white  z-10 rounded shadow absolute w-full'
const menuItem = 'px-2 hover:bg-gray-100 '