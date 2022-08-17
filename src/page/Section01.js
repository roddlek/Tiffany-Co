import Data from './data.json';
import './section.css'
import { Link } from "react-router-dom";
import { useState } from 'react';

function Section01(){

    const selectList = ["Select", "Ring", "Earrings", "Bangle"]
    //useState
    //const [activeSelc, setActiveSelc] = useState(selectList);
    const [data, setData] = useState(Data.sec01);
    //fillter
    const activeSelecList = (list) => {
        console.log(list)
        if(list === "Select"){
            setData(Data.sec01);
            return;
        }
        const filterList = Data.filter((item) => item.sec01.value === list);
        setData(filterList);
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
                <select>
                    {selectList.map((btn, idx) => {
                        return(
                            <option
                                key={idx}
                                onClick={() => activeSelecList(btn)}
                            >
                            {btn}
                            </option>
                        )
                    })}
                </select>
            </div>
            <section className='page mgb'>
                {data.map( (a, b) => {
                    return(
                        <figure key={b}>
                        <img src={process.env.PUBLIC_URL + a.img} alt={a.title} />
                        <figcaption>
                            <dl>
                                <dt>{a.title}</dt>
                                <dd>{a.content}</dd>
                                <dd>{a.price}</dd>
                            </dl>
                        </figcaption>
                    </figure>
                    )
                }
                )}
            </section>
        </article>
        </>
    )
}

export default Section01