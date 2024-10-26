const Header = ({image}) => {
  return (
    <div className="header">
    <h1>HomeMe</h1>
    <img src={image} alt="house logo" className="logo" />
    </div>
  )
}

export default Header