import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow p-4 flex justify-between">
      <Link to="/" className="font-bold text-xl">Matee</Link>
      <div>
        <Link to="/dashboard" className="mr-4 hover:underline">
          Dashboard
        </Link>
        <Link to="/logout" className="hover:underline">
          Logout
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;