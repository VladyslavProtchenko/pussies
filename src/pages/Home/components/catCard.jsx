import React from 'react';
import { useDispatch } from 'react-redux';
import { adoptCat } from '../../../redux/swapSlice';
import { NavLink } from 'react-router-dom';

const CatCard = ({item, style}) => {
    const dispatch = useDispatch()

    return (
        <article className={box+' '+style}>
            <div className={image} style={{backgroundImage:`url(${item.image})`}}></div>
            <h3 className={name}>{item.name}</h3>
            <p  className={desc}>{item.description}</p>

            <ul className={list}>
                <h2 className='w-full border-b border-black mb-2'>Personalities:</h2>
                <li className={listItem}>Adaptability: {item.personality.adaptability}</li>
                <li className={listItem}>Affection: {item.personality.affection}</li>
                <li className={listItem}>Children comfort: {item.personality.child}</li>
                <li className={listItem}>Energy: {item.personality.energy}</li>
            </ul>

            <div className={weight}>weight: {item.weight}kg</div>

            <NavLink to='/select' ><button onClick={()=>dispatch(adoptCat(item))} className={button}>Adopt</button></NavLink>
        </article>
    );
};

export default CatCard;

const box = 'flex flex-col items-center  relative bg-white overflow-hidden rounded-lg shadow-xl w-[30%] h-min mx-auto mb-5'
const image = `w-full h-[200px]  bg-center bg-cover bg-no-repeat`
const name = 'absolute text-2xl top-10 text-center text-white text-bold px-4 py-2 bg-black bg-opacity-50 w-full'
const desc = 'p-4 text-xs text-gray-800 italic bg-white bg-opacity-75 -translate-y-16'
const list = '-translate-y-16 flex flex-col w-full mb-2 px-3'
const weight = '-translate-y-16 text-center'
const listItem = 'text-xs mb-1 px-2'
const button = 'py-1 px-10 bg-blue-500 hover:bg-blue-700 text-white rounded-full  -translate-y-10'