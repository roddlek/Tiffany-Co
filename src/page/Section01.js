import Data from './data.json';
import './section.css'
import { Link } from "react-router-dom";

function Section01(){
    return(
        <>
        <article className='pageBox'>
            <h3>COLLECTIONS</h3>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><span>&gt;</span><Link to="/Section01">Collections</Link></li>
            </ul>
            <section className='page'>
                {Data.sec01.map( (item) => 
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

export default Section01