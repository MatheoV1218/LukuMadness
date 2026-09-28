import { Link } from "react-router-dom";
import { LuArrowRight } from "react-icons/lu";
import "../styles/notFound.css";

const NotFound = () => (
  <section className="not-found">
    <div className="container not-found__inner">
      <p className="not-found__code" aria-hidden>
        4<span>0</span>4
      </p>
      <h1 className="display-2">
        This page got <em>eaten.</em>
      </h1>
      <p>We couldn't find what you were looking for — but the lukumades are still fresh.</p>
      <div className="not-found__actions">
        <Link to="/" className="btn btn--honey btn--lg">
          Back home
        </Link>
        <Link to="/menu" className="btn btn--ghost-light btn--lg">
          See the menu <LuArrowRight aria-hidden />
        </Link>
      </div>
    </div>
  </section>
);

export default NotFound;
