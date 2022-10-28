// Logo and Cart
import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import logo from '../../assets/images/Logo.png'
import Cart from '../Cart';

function Header() {

  return (
    <div className="flex-row px-1">
      <Link to={`/`}>
        <img
          src={logo}
          alt="Logo"
          width="50px"
          height="50px"
        />
      </Link>
      <Cart />
    </div>
  );
}

export default Header;
