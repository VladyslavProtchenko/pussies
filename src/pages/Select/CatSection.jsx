import React from 'react';
import SelectedCatCard from './SelectedCatCard';
import { useNavigate } from 'react-router-dom';

const CatSection = ({cat}) => {
    const navigate = useNavigate()

    return (
        <section className={content}>
            <SelectedCatCard item={cat}/>
            <div className={about}>
                <h2 className={catName}>{cat.name}</h2>
                <p className={catDesc}>{cat.description}</p>
                <p className={catDesc2}>Pretty smart cat who will be love you all your life, bout not all his life, because it is a cat</p>
                <button onClick={()=>navigate('/')} className={change}>Change cat</button>
            </div>
        </section>
    );
};

export default CatSection;

const content = 'flex  justify-around my-6'
const about = 'w-1/2 flex flex-col'
const catName = 'text-3xl px-2'
const catDesc = 'text-gray-500 italic p-4'
const catDesc2 = 'px-4 text-xl text-right'
const change = 'px-8 bg-red-500 hover:bg-red-700 self-end mt-auto mb-10 rounded-full'