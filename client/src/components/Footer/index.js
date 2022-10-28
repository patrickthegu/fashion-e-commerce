// terms and conditions

import React from "react";
import { Link } from "react-router-dom";

function Footer() {

    return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/Terms">
              2022 Terms and Conditions
            </Link>
          </li>
        </ul>
    );

}
  

  
  export default Footer;
  