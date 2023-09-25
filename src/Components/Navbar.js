import React from 'react';
import { useSelector } from 'react-redux';

function Navbar() {
  
  const amount = useSelector((state) => state);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      {/* ... other Navbar code ... */}
      <div>
        <div>
          <button className="btn btn-primary m-5">
            Your balance is: {amount}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
