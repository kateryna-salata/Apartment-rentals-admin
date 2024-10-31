const Navbar = ({ image }) => {
  return (
    <div className="navbar">
      <h1>HomeMe</h1>
      <img src={image} alt="house logo" className="logo" />
    </div>
  );
};

export default Navbar;
