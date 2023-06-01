import React, { useState } from 'react';

const AdoptionInformation = () => {
    const [reason, setReason] = useState('')
    const [time, setTime] = useState('')
    const [other, setOther] = useState('')

    return (
        <div className={box}>
            <div className={card}>
                <h2 className={title}>Adoption Information</h2>
                <div className={content}>
                    <textarea className={input} type="text" onChange={(e)=>setReason(e.target.value)} value={reason} placeholder="Why do you want to adopt a cat?"/>
                    <textarea className={input} type="text" onChange={(e)=>setTime(e.target.value)} value={time} placeholder="How many hours can you spend with the cat per day?"/>
                    <textarea className={input} type="text" onChange={(e)=>setOther(e.target.value)} value={other} placeholder="Do you have any other pets or children in the household?"/>
                </div>
            </div>
        </div>
    );
};

export default AdoptionInformation;

const card = 'bg-white p-10 min-w-[400px] rounded-lg shadow-xl'
const box = " w-[940px] flex-grow h-full py-10 flex items-start justify-center"
const title = " w-full text-center text-3xl font-bold mb-4"
const content = " flex flex-col items-center justify-center"
const input = "resize-none border w-full mb-4 px-5 py-3 rounded outline-none focus:border-blue-500 italic text-sm text-slate-800 "
    
    