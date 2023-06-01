import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Steps from './steps/Steps';
import CatSection from './CatSection';
import PersonalInformation from './PersonalInformation';
import AdoptionInformation from './AdoptionInformation';
import Submit from './Submit';
import Modal from './Modal';
import Services from '../../services/services';


const SelectPage = () => {
    const cat = useSelector((state) => state.cats.selectedCat);
    const [step, setStep] = useState(null)
    const [isModal, setIsModal] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {if(step ===3) setIsModal(true)},[step])

    return (
        <div className='content overflow-hidden'>

            <h1 className={title}>SELECT CAT</h1>
            {cat && <Steps step={step} setStep={setStep}/>}
            {!cat && <h2 className={noCat}>Cat is not selected yet, pleace Select cat first</h2>}

            {cat && 
                <div className={slider}>
                    <div className={sliderContent} id='carousel'>
                        <section className={screen}><CatSection cat={cat} /></section>
                        <section className={screen}><PersonalInformation /></section>
                        <section className={screen}><AdoptionInformation /> </section>
                        <section className={screen}><Submit /></section>
                    </div>
                </div>  
            }

            <div className={buttons}>
                {step != null && step != 3  && <button onClick={()=>Services.prev(setStep)} className={next}>back</button>}
                <button onClick={()=>Services.next(cat, navigate, setStep, step)} className={next}>{!cat?'select cat': (step >= 2)? 'finish': 'next'}</button>
            </div>

            <Modal isModal={isModal}/>
        </div>
    );
};

export default SelectPage;


const buttons = ' flex items-center justify-center w-full space-x-6'
const title = 'w-full text-center text-3xl py-3'
const noCat = 'py-5 text-center text-2xl text-red-500 h-full'
const sliderContent = 'flex items-center overflow-y-hidden overflow-x-hidden scroll-smooth'
const next = 'px-4 w-[200px] uppercase my-10 self-center py-1 bg-blue-500 hover:bg-blue-400 text-white rounded-full'
const slider = `flex relative `
const screen = `w-[940px] min-w-[940px] flex-grow h-full`


