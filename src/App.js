import './App.css';
// 컴포넌트 연결
import Box from './component/Box';
// 페이지 연결
import Main from './page/Main';
import Section01 from './page/Section01';
import Section02 from './page/Section02';
import Section03 from './page/Section03';
import Section04 from './page/Section04';
// 라우터 연결
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Box>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Section01" element={<Section01 />} />
          <Route path="/Section02" element={<Section02 />} />
          <Route path="/Section03" element={<Section03 />} />
          <Route path="/Section04" element={<Section04 />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
