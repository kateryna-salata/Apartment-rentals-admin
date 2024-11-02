import {Link} from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/" className='btn'>      
      Home
      </Link>
      <Link to="/about" className='btn'>
      About Us
      </Link>
    </div>
  );
};

export default Sidebar;
