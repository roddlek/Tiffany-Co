function Main(){
    const ring = [
        {
            "title": "T-Wire Ring",
            "img": "images/box01-01.png"
        },{
            "title": "Pearl Ring",
            "img": "images/box01-02.png"
        },{
            "title": "Diamond Vine Ring",
            "img": "images/box01-03.png"
        },{
            "title": "1837 Ring",
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
        <div id="content">
            <main>
                <article>
                    <h3 className="box01">
                        <div>
                            <span>Whatever Shining Style</span>
                        </div>
                    </h3>
                    <section className='box01'>
                        {ring.map( (item) => 
                            <figure key={item.id}>
                                <img src={process.env.PUBLIC_URL + item.img} alt={item.title} />
                                <figcaption>{item.title}</figcaption>
                            </figure>
                        )}
                    </section>

                    <h3 className="box02">
                        <div>
                            <span>Capture Her World</span>
                        </div>
                    </h3>
                    <section className='box02'>
                        {pendant.map( (item) => 
                            <figure key={item.id}>
                                <img src={process.env.PUBLIC_URL + item.img} alt={item.title} />
                                <figcaption>{item.title}</figcaption>
                            </figure>
                        )}
                    </section>
                </article>
            </main>
        </div>
    )
}

export default Main;