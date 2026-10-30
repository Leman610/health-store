import "./Error404.css";
import { Link } from "react-router-dom";
import error from "../assets/Error.404.avif";

const Error404 = () => {
  return (
    <div className="error-404">
      <div className="error-404-content">
        <div className="error-404-number">404</div>

        <div className="error-404-image">
          <img src={error} alt="404 Error" />
        </div>

        <h1>Oops! Page Not Found</h1>

        <p>
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>

        <Link to="/" className="error-404-btn">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Error404;
