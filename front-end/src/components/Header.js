import React from 'react';
import { FaSearch } from 'react-icons/fa';
import './css/Header.css';

const Header = () => {
   return (
      <header>
         <div id="brand">
            <a href="/">MyCompany</a>
         </div>
         <div className="search_bar">
            <input type="text" className="search_bar" />
            <button className='search_button'>
               <FaSearch className="search_icon" />
            </button>
         </div>
         <nav>
            <ul>
               <li>
                  <a href="*">Category</a>
               </li>
               <li>
                  <a href="*">Login</a>
               </li>
               <li>
                  <a href="*">Register</a>
               </li>
            </ul>
         </nav>
      </header>
   );
};

export default Header;
