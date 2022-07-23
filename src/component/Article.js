function Article(){
    const ring = [
        {
            "title": "Diamond Vine Ring",
            "img": "images/box01-01.png"
        },{
            "title": "Apollo Brooch",
            "img": "images/box01-02.png"
        },{
            "title": "Bypass Ring",
            "img": "images/box01-03.png"
        },{
            "title": "Flames Brooch",
            "img": "images/box01-04.png"
        }
    ]
    const pendant = [
        {
            "title": "Yellow Circle Pendant",
            "img": "images/box02-01.png"
        },{
            "title": "Red Circle Pendant",
            "img": "images/box02-02.png"
        },{
            "title": "Gold Opal Pendant",
            "img": "images/box02-03.png"
        },{
            "title": "Green Opal Pendant",
            "img": "images/box02-04.png"
        }
    ]

    return(
        <article>
            <h3 className="box01">
                <div>
                    <span>Whatever Shining style</span>
                </div>
            </h3>
            <section className='box01'>
                {ring.map( (item) => 
                    <figure>
                        <img src={process.env.PUBLIC_URL + item.img} alt={item.title} />
                        <figcaption>{item.title}</figcaption>
                    </figure>
                )}
            </section>

            <h3 className="box02">
                <div>
                    <span>Capture her world</span>
                </div>
            </h3>
            <section className='box02'>
                {pendant.map( (item) => 
                    <figure>
                        <img src={process.env.PUBLIC_URL + item.img} alt={item.title} />
                        <figcaption>{item.title}</figcaption>
                    </figure>
                )}
            </section>
        </article>
    )
}

export default Article;