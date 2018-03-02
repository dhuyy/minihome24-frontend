import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
  return(
    <div className="header-wrapper">
      <Link to="/orders" className="point-click" />
      <img src="images/header.png" alt="Header"/>
    </div>
  );
};

export default Header;