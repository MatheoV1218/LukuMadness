// Base styles first so page/component stylesheets can override them.
import "./styles/global.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Story from "./pages/Story";
import Menu from "./pages/Menu";
import GetApp from "./pages/GetApp";
import DeleteAccount from "./pages/DeleteAccount";
import NotFound from "./pages/NotFound";


export const AppRoutes = () => (
  <Routes>
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/story" element={<Story />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/app" element={<GetApp />} />
      <Route path="/delete-account" element={<DeleteAccount />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
);

const App = () => (
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
);

export default App;
