import { useState } from 'react';

const PersonalInformation = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')

    return (
        <div className={box}>
            <div className={card}>
                <h2 className={title}>Personal Information</h2>
                <div className={content}>
                    <input className={input} type="text" onChange={(e)=>setName(e.target.value)} value={name} placeholder="name"/>
                    <input className={input} type="text" onChange={(e)=>setEmail(e.target.value)} value={email} placeholder="email"/>
                    <input className={input} type="text" onChange={(e)=>setPhone(e.target.value)} value={phone} placeholder="phone"/>
                    <input className={input} type="text" onChange={(e)=>setAddress(e.target.value)} value={address} placeholder="address"/>
                </div>
            </div>
        </div>
    );
};

export default PersonalInformation;

const card = 'bg-white p-10 w-min rounded-lg shadow-xl'
const box = " w-[940px] flex-grow h-full py-10 flex items-start justify-center"
const title = " w-full text-center text-3xl font-bold mb-10"
const content = " flex flex-col items-center justify-center"
const input = " border mb-4 px-5 py-3 rounded outline-none focus:border-blue-500 italic text-sm text-slate-800"



