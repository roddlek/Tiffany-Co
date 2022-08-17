import Data from './data.json';
import './section.css'
import { Link } from "react-router-dom";

function Section04(){
    return(
        <>
        <article className='pageBox'>
            <h3 className='sec04'>FINE WATCHES</h3>
            <p>FINE WATCHES</p>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><span>&gt;</span>Fine Watches</li>
            </ul>
            <section className='page'>
                {Data.sec04.map( (item) => 
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

export default Section04