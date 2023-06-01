const Services = {

    sortCats(a, b, sort){
        if(sort === 'personality') return 1;
        return a[sort].localeCompare(b[sort]);
    },

    debounce(fn, ms) {
        let timeout; 
        return function() {
            const fnCall = () => fn.apply(this, arguments); 
            clearTimeout(timeout);
            timeout = setTimeout(fnCall, ms);
        }
    },

    next(cat, navigate, setStep, step) {
        if(!cat) return navigate('/')
        
        document.getElementById('carousel').scrollLeft +=940;
        if(step === null)return  setStep(0);
        setStep(step=> {
            if(step === 3) return 3;
            return step + 1;
        });
    },

    prev(setStep){
        document.getElementById('carousel').scrollLeft -=940;
        setStep(step=> {
            if(step === 0) return null;
            return step -=1
        });
    }
}

export default  Services;