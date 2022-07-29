import Data from './data.json';
import './section.css'

function Section01(){
    return(
        <>
        <article id="page">
            <h3 className='hide'>Collectrions Page</h3>
            <ul>
                <li>HOME</li>
                <li><span>/</span>Collectrions</li>
            </ul>
            <section className='page'>
                {Data.map( (item) => 
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