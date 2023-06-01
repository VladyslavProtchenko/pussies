import { useEffect, useState } from "react"

function Point({text, index, mark, step}){
    const [prev, setPrev] = useState(false)
    const [next, setNext] = useState(false)
    const [completed, setCompleted] = useState(false)

    useEffect(() => {
        if(step >= index && step != null) setCompleted(true)
        if(step === index-1) setPrev(true)
        if(step === index) setNext(true)
    },[step])

    return (
            <div className={item}>
                <div className={point}>
                    <span className={ completed? circleDone : circle }>{index}</span>
                    {mark !== 'first' && <div className={prev ? leftLineD: leftLine }></div>}
                    {mark !== 'last' && <div className={ next ? rightlineD: rightline}></div>}
                </div>
                <div className={completed?titleD: title}>{text}</div>
            </div>
    );
}

export default Point;

const item = 'flex flex-col min-w-[100px] items-center text-xs relative';
const circle = ' px-3 text-center z-10 py-2  font-bold border-2 border-gray-300 bg-gray-200 rounded-full ';
const circleDone = 'text-white px-3 text-center z-10 py-2  font-bold border-2 border-green-300 bg-green-200 rounded-full ';
const rightline = ' absolute w-1/2 top-[50%] right-0 bg-gray-300 h-[3px] ';
const leftLine = ' absolute w-1/2 top-[50%] left-0 bg-gray-300 h-[3px] ';
const rightlineD = ' absolute w-1/2 top-[50%] right-0 bg-green-300 h-[3px] ';
const leftLineD = ' absolute w-1/2 top-[50%] left-0 bg-green-300 h-[3px] ';
const title = ' px-4';
const titleD = 'text-green-400 px-4';
const point = 'relative w-full flex justify-center';