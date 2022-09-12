//import Data from './data.json';
import './section.css'
import { Link } from "react-router-dom";
import { useState, useEffect, useCallback } from 'react';

function Section01(){
    //state 설정
    let [list, setList] = useState([]);
    //조건 설정
    const [isFiltered, setisFiltered] = useState(false);
    //filter된 item 들어오는 state 설정
    const [filterItem, setFilterItem] = useState(list.sec01);
    //callback 설정
    const fetchData = useCallback(() => {
        fetch('./data.json')
        .then(response => response.json())
        .then(data => setList(data))
    }, []);
    //useeffect 설정
    useEffect(() => {fetchData()}, [fetchData])

    function changeFilter(e){
        if(e.target.value === 'Select'){
            setList(list);
            setisFiltered(false)
        }else{
            const filters = Object.values(list.sec01).filter( (item) => item.value === e.target.value )
            setisFiltered(true);
            setFilterItem(filters);
            console.log(filters);
        }
    }

    function FilterList(){
        return(
            <figure>
                <img src={process.env.PUBLIC_URL + img} alt='title' />
                <figcaption>
                    <dl>
                        <dt>title</dt>
                        <dd>content</dd>
                        <dd>price</dd>
                    </dl>
                </figcaption>
            </figure>
        )
    }

    return(
        <>
        <article className='pageBox'>
            <h3 className='sec01'>COLLECTIONS</h3>
            <p>COLLECTIONS</p>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><span>&gt;</span><Link to="/Section01">Collections</Link></li>
            </ul>
            <div>
                <select
                    onChange={changeFilter}
                >
                    <option value="Select">Select</option>
                    <option value="Ring">Ring</option>
                    <option value="Earrings">Earrings</option>
                    <option value="Bangle">Bangle</option>
                </select>
            </div>
            <section className='page mgb'>
                {isFiltered ?
                filterItem.map( (elm) => <FilterList value={elm} key={elm.id}></FilterList> )
                : Object.values(list.sec01).map( (elm) => <FilterList value={elm} key={elm.id}></FilterList> )}
            </section>
        </article>
        </>
    )
}

export default Section01