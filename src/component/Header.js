function Header() {
  return (
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
  )
}

export default Header;