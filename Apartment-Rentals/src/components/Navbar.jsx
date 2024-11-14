import { Link } from "react-router-dom";

const Navbar = ({ image }) => {
  return (
    <div className="navbar">
      <Link to="/">
        <h1>HomeMe</h1>
      </Link>
      <Link to="/">
        <img src={image} alt="house logo" className="logo" />
      </Link>
    </div>
  );
};

export default Navbar;
