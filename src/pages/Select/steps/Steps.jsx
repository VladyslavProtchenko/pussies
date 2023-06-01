import Point from './Points';

const Steps = ({step}) => {
    const data =['Select cat','Personal information','Adoption Information','Submit Adoption']

    return (
        <div className={box}>
            {data.map((item, index) => {
                let mark = '';
                if(index === 0) mark = 'first';
                if(index === data.length-1) mark = 'last';
                return <Point key={index} step={step} text={item} mark={mark} index={index}/>
            })}
        </div>
    );
};

export default Steps;

const box = 'flex justify-center w-full mb-6';
