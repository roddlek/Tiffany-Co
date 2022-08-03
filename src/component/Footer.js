import React from 'react';

function Footer(){
    const sns = [
        {
            "id": 0,
            "title": "twitter",
            "img": "images/icon-01.png",
            "url": "https://twitter.com/TiffanyAndCo"
        },{
            "id": 1,
            "title": "facebook",
            "img": "images/icon-02.png",
            "url": "https://www.facebook.com/Tiffany"
        },{
            "id": 2,
            "title": "google",
            "img": "images/icon-03.png",
            "url": "https://twitter.com/TiffanyAndCo"
        },{
            "id": 3,
            "title": "instagram",
            "img": "images/icon-04.png",
            "url": "https://www.instagram.com/tiffanyandco/"
        }
    ]
    return (
        <div id="footerWrap">
            <footer>
                <ul>
                    {sns.map( (item) => 
                        <li key={item.id}><a href={item.sns}>
                            <img src={process.env.PUBLIC_URL + item.img} alt={item.title} />
                        </a></li>
                    )}
                </ul>
                <address>LEVEL3 TABLE 2025 BLDG 90-25 CHUNGDAM-DONG GANGNAM-GU SEOUL KOREA</address>
                <dl>
                    <dt>TEL &colon; </dt>
                    <dd>02.542.1254</dd>
                    <dt>FAX &colon; </dt>
                    <dd>02.543.1257</dd>
                </dl>
                <small>© T&amp;CO. 2022</small>
            </footer>
        </div>
    )
}

export default Footer;