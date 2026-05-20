import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Story from "./pages/Story";
import Menu from "./pages/Menu";

import ScrollToTop from "./components/ScrollToTop";

import "./styles/global.css";

function App() {
  return (
    <BrowserRouter>

      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/story" element={<Story />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;