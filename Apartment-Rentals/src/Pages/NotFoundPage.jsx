import { Link } from "react-router-dom";
import YodaImg from "../assets/yoda.jpg";
const NotFoundPage = () => {
  return (
    <div className="not-found card">
      <h1>
        The URL you have entered, correct it is not. To the{" "}
        <Link to="/">
          <strong>homepage</strong>
        </Link>
        , return you must.
      </h1>
      <img src={YodaImg} alt="Master Yoda"></img>
    </div>
  );
};

export default NotFoundPage;
