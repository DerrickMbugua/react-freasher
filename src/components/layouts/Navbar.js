import { Link } from 'react-router-dom';

function Navbar() {

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to='/'>All Staff</Link>
          </li>
          <li>
            <Link to='/new-staff'>New Staff</Link>
          </li>
          <li>
            <Link to='/favorite-staff'>Favorite Staff</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;