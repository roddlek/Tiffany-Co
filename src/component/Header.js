function Header() {
  return (
    <>
    <div id="headerWrap">
        <header>
            <h1>
                <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="Tiffany" />
            </h1>
            <ul>
                <li>로그인</li>
                <li>회원가입</li>
            </ul>
        </header>
    </div>
    <div id="navWrap">
      <div>
          <nav>
              <h2 className="hide">main navigation</h2>
              <ul>
                  <li><a href="#">COLLECTIONS</a></li>
                  <li><a href="#">Gifts</a></li>
                  <li><a href="#">Brilliant Light</a></li>
                  <li><a href="#">The WORLD OF PRISM</a></li>
              </ul>
          </nav>
      </div>
    </div>
    </>
  )
}

export default Header;