import Data from './data.json';
import './section.css'
import { Link } from "react-router-dom";
import { useState } from 'react';
import List from './components/cardList'

function Section01(){
    //데이터 설정
    const items = Data.sec01;
    const selectList = ["Select", "Ring", "Earrings", "Bangle"]
    //useState
    //const [activeSelc, setActiveSelc] = useState(selectList);
    const [data, setData] = useState(items);
    //fillter
    const activeSelecList = (list) => {
        if(list === "Select"){
            setData(items);
            return;
        }
        const filterList = items.filter((item) => list === items.value);
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
                <ul>
                    {selectList.map((btn, idx) => {
                        return(
                            <li
                                key={idx}
                                onClick={() => activeSelecList(btn)}
                            >
                            {btn}
                            </li>
                        )
                    })}
                </ul>
            </div>
            <section className='page mgb'>
                {data.map( (a, idx) => {
                    return(
                        <List card={a} key={idx} />
                    )
                }
                )}
            </section>
        </article>
        </>
    )
}

export default Section01