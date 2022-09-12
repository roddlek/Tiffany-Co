//import Data from '../../public/data.json';
import { useState, useEffect, useCallback } from "react"
import './section.css'
import { Link } from "react-router-dom";

function Section02(){
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
            <h3 className='sec02'>GIFTS</h3>
            <p>GIFTS</p>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><span>&gt;</span>Gifts</li>
            </ul>
            <section className='page mgb'>
                {data.sec02.map( (item) => 
                    <figure key={item.id}>
                        <img src={process.env.PUBLIC_URL + item.img} alt={item.title} />
                        <figcaption>
                            <dl>
                                <dt>{item.title}</dt>
                                <dd>{item.content}</dd>
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

export default Section02