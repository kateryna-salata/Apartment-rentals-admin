import {Link} from 'react-router-dom'
import Filter from './Filter';
const Sidebar = ({data, setData}) => {
  return (
    <div className="sidebar">
      <Link to="/" className='btn'>      
      Home
      </Link>
      <Link to="/about" className='btn'>
      About Us
      </Link>
      <Link to="/filters" className='btn'>
        Filters
      </Link>
    </div>
  );
};

export default Sidebar;
