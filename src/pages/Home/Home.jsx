import React, { useEffect, useState } from 'react';
import Sort from './components/Sort';
import { useGetCatsQuery } from '../../redux/swapApi';
import Services from '../../services/services';
import CatCard from './components/catCard';
import { useDispatch, useSelector } from 'react-redux';
import { convertCats } from '../../redux/swapSlice';


const Home = () => {
    const [sort, setSort] = useState('name');
    const [cats, setCats] = useState(null);
    const [limit, setLimit] = useState(3);
    const sortData = ['name', 'personality','weight'];
    const dispatch = useDispatch();

    const { data } = useGetCatsQuery({limit})
    useEffect(() => { if(data) dispatch(convertCats(data)) },[data])

    const pussies = useSelector(store => store.cats.cats)
    useEffect(() => {if(pussies) setCats(pussies) }, [pussies])
    
    const showMore = Services.debounce(setLimit, 300)

    return (
        <div className={box}>

            <section className={sorting}>
                <h1 className={filtersHeader}>Filters</h1>
                <Sort sort={sort} setSort={setSort} data={sortData}/>
            </section>

            <section className={catsSection}>
                {!cats && <div className='text-center w-full h-full'>Loading...</div>}

                {cats && [...cats]
                    .sort((a,b)=>Services.sortCats(a,b,sort))
                    .map((cat) => <CatCard key={cat.id} item={cat}/>)
                }
            </section>

            <button onClick={()=>showMore(p => p+=3)} className={more}>show more</button>
        </div>
    );
};

export default Home;
const box = 'flex flex-col flex-auto w-full max-w-[940px]'
const sorting = 'flex w-full border-b p-3 flex-col'
const filtersHeader = 'text-2xl text-center'
const catsSection = 'flex flex-wrap w-full py-10 min-h-full justify-start'
const more = 'mb-3 hover:opacity-50'

