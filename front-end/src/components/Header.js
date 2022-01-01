import React, { useContext, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { FaWindowClose } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';
import './css/Header.css';
import { commentContextData } from '../contexts/CommentsContext';

const Header = () => {
   const { dispatch } = useContext(commentContextData);
   const [toggleMenu, setToggleMenu] = useState(false);
   const [showNav, setShowNav] = useState(false);

   const handleToggleMenu = () => {
      setToggleMenu(!toggleMenu);
      setShowNav(!showNav);
   };
   return (
      <header>
         <div id="brand">
            <a href="/">MyCompany</a>
         </div>
         <nav id="nav" style={showNav ? { right: 0 } : null}>
            <FaWindowClose
               id="navbar_button_close"
               onClick={handleToggleMenu}
            />

            <div className="search_bar_container">
               <input type="text" className="search_bar" placeholder='Search' />
               <button className="search_button">
                  <FaSearch className="search_icon" />
               </button>
            </div>

            <ul className="nav_list" id='nav_list'>
               <li className="dropdown nav_item">
                  <button className="dropbtn">Categories</button>
                  <div className="dropdown-content">
                     <a href="*">Linux</a>
                     <a href="*">Windows</a>
                     <a href="*">Mac OS</a>
                     <a href="*">Android</a>
                     <a href="*">IOS</a>
                  </div>
               </li>
               <li
                  onClick={() => dispatch({ type: 'TOGGLE_LOGIN' })}
                  className="nav_item"
               >
                  Login
               </li>
               <li
                  onClick={() => dispatch({ type: 'TOGGLE_REGISTER' })}
                  className="nav_item"
               >
                  Register
               </li>
            </ul>
         </nav>

         <FaBars id="navbar_button_hamburger" onClick={handleToggleMenu} />
      </header>
   );
};

export default Header;
