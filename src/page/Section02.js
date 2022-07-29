import Data from './data.json';
import './section.css'
import { Link } from "react-router-dom";

function Section02(){
    return(
        <>
        <article className='pageBox'>
            <h3>GIFTS</h3>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><span>&gt;</span>Gifts</li>
            </ul>
            <section className='page'>
                {Data.sec02.map( (item) => 
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