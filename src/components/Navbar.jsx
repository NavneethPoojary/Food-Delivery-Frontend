import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className='navbar-container'>
      <div className="items-container">
        <div className="logo-container">
          <h1>Food Delivery</h1>
        </div>

        <div className="link-container">
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </nav>
  );
}