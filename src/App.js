//컴포넌트 연결
import './App.css';
import Header from './component/Header';
import Main from './component/Main';
import Aside from './component/Aside';
import Footer from './component/Footer';
// 라우터 연결
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <App>
        <Routes>
          <Route />
        </Routes>
      </App>
    </BrowserRouter>
    // <div className="App">
    //   <Header />
    //   <Main />
    //   <Aside />
    //   <Footer />
    // </div>
  );
}

export default App;
