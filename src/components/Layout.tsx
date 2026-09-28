import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import OrderProvider from "./order/OrderProvider";
import { getPageMeta } from "../seo/meta";
import { useHeadSync } from "../seo/useHeadSync";
import { useReveal } from "../hooks/useReveal";

const Layout = () => {
  const { pathname } = useLocation();
  useHeadSync(getPageMeta(pathname));
  useReveal(pathname);

  return (
    <OrderProvider>
      <ScrollToTop />
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="main" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </OrderProvider>
  );
};

export default Layout;
