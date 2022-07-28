function Footer(){
    const sns = [
        {
            "title": "twitter",
            "img": "images/icon-01.png"
        },{
            "title": "facebook",
            "img": "images/icon-02.png"
        },{
            "title": "google",
            "img": "images/icon-03.png"
        },{
            "title": "instagram",
            "img": "images/icon-04.png"
        },{
            "title": "tplus",
            "img": "images/icon-05.png"
        }
    ]
    return (
        <div id="footerWrap">
            <footer>
                <ul>
                    {sns.map( (item) => 
                        <li key={item.id}><a href="#">
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
                <small>COPYRIGHT 2016 VANZOE. ALL RIGHTS RESERVED.</small>
            </footer>
        </div>
    )
}

export default Footer;