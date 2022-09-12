//import Data from '../../public/data.json';
import { useState, useEffect, useCallback } from 'react';
import './section.css'
import { Link } from "react-router-dom";

function Section03(){
    //state 설정
    let [data, setData] = useState([]);
    //callback 설정
    const fetchData = useCallback(() => {
        fetch('./data.json')
        .then(response => response.json())
        .then(list => setData(list))
    }, []);
    //useeffect 설정
    useEffect(() => {fetchData()}, [fetchData])

    return(
        <>
        <article className='pageBox'>
            <h3 className='sec03'>BRILLIANT LIGHT</h3>
            <p>BRILLIANT LIGHT</p>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><span>&gt;</span>Brilliant Light</li>
            </ul>
            <section className='page'>
                {data.sec03.map( (item) => 
                    <figure key={item.id}>
                        <img src={process.env.PUBLIC_URL + item.img} alt={item.title} />
                        <figcaption>
                            <dl>
                                <dt>{item.title}</dt>
                                <dd>{item.price}</dd>
                            </dl>
                        </figcaption>
                    </figure>
                )}
            </section>
        </article>
        </>
    )
}

export default Section03