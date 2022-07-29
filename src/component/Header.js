import React from 'react';
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
    <div id="headerWrap">
        <header>
            <h1>
                <Link to="/"><img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="Tiffany" /></Link>
            </h1>
            <ul>
                <li><a href='#'>로그인</a></li>
                <li><a href='#'>회원가입</a></li>
            </ul>
        </header>
    </div>
    <div id="navWrap">
      <div>
          <nav>
              <h2 className="hide">main navigation</h2>
              <ul>
                  <li><Link to="/section01">COLLECTIONS</Link></li>
                  <li><Link to="/section02">Gifts</Link></li>
                  <li><Link to="/section03">Brilliant Light</Link></li>
                  <li><Link to="/section04">Fine Watches</Link></li>
              </ul>
          </nav>
      </div>
    </div>
    </>
  )
}

export default Header;