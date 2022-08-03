import { Link } from "react-router-dom";

function Main(){
    const ring = [
        {
            "id": 0,
            "title": "T-Wire Ring",
            "img": "images/box01-01.png"
        },{
            "id": 1,
            "title": "Pearl Ring",
            "img": "images/box01-02.png"
        },{
            "id": 2,
            "title": "Diamond Vine Ring",
            "img": "images/box01-03.png"
        },{
            "id": 3,
            "title": "1837 Ring",
            "img": "images/box01-04.png"
        }
    ]
    const pendant = [
        {
            "id": 0,
            "title": "Heart Tag Earrings",
            "img": "images/box02-01.png"
        },{
            "id": 1,
            "title": "Heart Tag Toggle Bracelet",
            "img": "images/box02-02.png"
        },{
            "id": 2,
            "title": "Hoop Earrings",
            "img": "images/box02-03.png"
        },{
            "id": 3,
            "title": "Heart Tag Bead Bracelet",
            "img": "images/box02-04.png"
        }
    ]

    return(
        <div id="content">
            <main>
                <article>
                    <h3 className="box01">
                        <div>
                            <span>Bring the Heat</span>
                            <span>This is sterling silver like you’ve never seen before.</span>
                            <button><Link to="/section01">Shop Now</Link></button>
                        </div>
                    </h3>
                    <section className='box01'>
                        <h4>Tiffany T</h4>
                        <p>Our favorite letter, your favorite collection. Tiffany T designs are marked by a sleek T motif, a signature House code inspired by our name.</p>
                        <div>
                            {ring.map( (item) => 
                                <figure key={item.id}>
                                    <img src={process.env.PUBLIC_URL + item.img} alt={item.title} />
                                    <figcaption>{item.title}</figcaption>
                                </figure>
                            )}
                        </div>
                    </section>

                    <h3 className="box02">
                        <div>
                            <span>Love Your Way</span>
                            <span>You’ll know who it’s for. You’ll know when it’s time. You’ll just know.</span>
                            <button><Link to="/section02">Shop Now</Link></button>
                        </div>
                    </h3>
                    <section className='box02'>
                        <h4>Tiffany Victoria®</h4>
                        <p>Designs for those who know too many diamonds are never enough. Flower and vine motifs shine in platinum, 18k yellow gold and 18k rose gold, with expertly cut marquise, pear-shaped and round brilliant diamond accents.</p>
                        <div>
                            {pendant.map( (item) => 
                                <figure key={item.id}>
                                    <img src={process.env.PUBLIC_URL + item.img} alt={item.title} />
                                    <figcaption>{item.title}</figcaption>
                                </figure>
                            )}
                        </div>
                    </section>
                </article>
            </main>
        </div>
    )
}

export default Main;