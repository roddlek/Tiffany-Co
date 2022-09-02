import Data from './data.json';
import './section.css'
import { Link } from "react-router-dom";
import { useState } from 'react';
//import List from './components/cardList'

function Section01(){
    const [data, setData] = useState(Data.sec01);
    const [filterData, setFilterData] = useState(Data.sec01)

    function changeFilter(e){
        //console.log(e.target.value)
        //changeList(e.target.value);
        if(e.target.value === "Select"){
            setData(data);
            return;
        }
        let filterList = Data.sec01.filter( (item) => e.target.value === item.value );
        setFilterData(filterList);
    }

    function changeList(){
        setFilterData.map((item) => console.log(item));
        
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
                {changeList()}
                {/* <figure>
                    <img src={process.env.PUBLIC_URL + img} alt={title} />
                    <figcaption>
                        <dl>
                            <dt>title</dt>
                            <dd>content</dd>
                            <dd>price</dd>
                        </dl>
                    </figcaption>
                </figure> */}
            </section>
        </article>
        </>
    )
}

export default Section01