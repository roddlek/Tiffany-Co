//import '../../index.css';

function List({card}){
    const {title, content, price, img, value} = card;
    //console.log(card);
    return(
        <figure name={value}>
            <img src={process.env.PUBLIC_URL + img} alt={title} />
            <figcaption>
                <dl>
                    <dt>{title}</dt>
                    <dd>{content}</dd>
                    <dd>{price}</dd>
                </dl>
            </figcaption>
        </figure>
    )
}

export default List