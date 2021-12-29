import React,{useContext} from 'react';
import { FaSearch } from 'react-icons/fa';
import './css/Header.css';
import { commentContextData } from '../contexts/CommentsContext';

const Header = () => {
   const {dispatch} = useContext(commentContextData);
   return (
      <header>
         <div id="brand">
            <a href="/">MyCompany</a>
         </div>
         <div className="search_bar">
            <input type="text" className="search_bar" />
            <button className="search_button">
               <FaSearch className="search_icon" />
            </button>
         </div>
         <nav id="nav">
            <ul>
               <li className="dropdown">
                  <button className="dropbtn">Dropdown</button>
                  <div className="dropdown-content">
                     <a href="*">Linux</a>
                     <a href="*">Windows</a>
                     <a href="*">Mac OS</a>
                     <a href="*">Android</a>
                     <a href="*">IOS</a>
                  </div>
               </li>
               <li onClick={()=>dispatch({type:'TOGGLE_LOGIN'})}>
                  Login
               </li>
               <li onClick={()=>dispatch({type:'TOGGLE_REGISTER'})}>
                  Register
               </li>
            </ul>
         </nav>
      </header>
   );
};

export default Header;
