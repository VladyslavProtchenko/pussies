import React from 'react';
import { useNavigate } from 'react-router-dom';

const Modal = ({isModal}) => {
    const navigate = useNavigate()

    return (
        <div className={ isModal? modal: 'hidden'}>
            <div className={modalContent}>
                Thank you so much!<br/>
                Be happy! 
                <button onClick={()=>navigate('/')} className={modalBtn}>back</button>
            </div>
        </div>
    );
};

export default Modal;

const modalBtn = 'text-base bg-pink-600 px-5 py-1 self-center rounded-lg text-white mt-6 '
const modal = ' flex items-center justify-center fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-20'
const modalContent = 'bg-white p-10 rounded-xl flex flex-col text-3xl'
