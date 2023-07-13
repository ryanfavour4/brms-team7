import React from "react";
import { Link } from "react-router-dom";
import NavigationMenuDemo from "./NavigationMenu";
import logo from "../../assets/images/tcn-ikorodu-logo.png"

function Navbar() {
  return <div className="bg-brand-light p-2 border-b-2 mb-4 border-brand-orange">
    <div className="max-w-[1200px] w-[90%] m-auto">
      <div className="flex justify-between items-center">
        <Link to="/">
          <img src={logo} width="180px" alt="" />
        </Link>
        <div className="flex justify-center items-center gap-1">
          <NavigationMenuDemo />
          <ul className="flex items-center gap-3 font-[500] text-brand-orange">
            <li className="p-[8px]"><Link to="/">Home</Link></li>
            <li className="p-[8px]"><Link to="/">Home</Link></li>
          </ul>
        </div>
      </div>
    </div>
  </div>;
}

export default Navbar;
