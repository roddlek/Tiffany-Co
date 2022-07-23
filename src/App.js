import './App.css';
import Header from './component/Header';
import Nav from './component/Nav';
import Article from './component/Article'
import Footer from './component/Footer'
import { BsArrowUp } from "react-icons/bs";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <div id="content">
        <main>
          <Article />
        </main>
      </div>
      <aside>
          <h4 className="hide">top메뉴</h4>
          <p><a href="#"><BsArrowUp /></a></p>
      </aside>
      <div id="footerWrap">
        <Footer />
      </div>
    </div>
  );
}

export default App;
