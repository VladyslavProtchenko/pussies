
const Submit = () => {

    return (
        <div className={box}>
                <h2 className={title}>Submit Adoption</h2>
                <h3 className={price}>total costs: <span className='text-green-400'>$ 5 743 654.72</span></h3>
                <div className={content}>
                    Thank you for choosing to adopt a cat from our app! You are one step closer to bringing home your new furry friend. Please review your information and confirm your payment below. Once you submit your adoption form, we will contact you within 24 hours to arrange the delivery of your cat. We hope you and your cat will have a happy and healthy life together! 😊
                </div>
        </div>
    );
};

export default Submit;

//styles
const price = 'text-center w-full mb-6 text-lg'
const box = " w-[940px] flex-grow h-full py-10 flex flex-col items-start justify-start"
const title = " w-full text-center text-5xl font-bold mb-6"
const content = "text-2xl flex flex-col items-center justify-center"
    