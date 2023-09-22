import React from "react";
import airbnbLogo from '../images/Airbnb.png';
import '../style.css'

export default function Navbar() {
  return (
    <nav>
      <img src={airbnbLogo} alt="Airbnb Logo" className="nav--logo"/>
    </nav>
  );
}
