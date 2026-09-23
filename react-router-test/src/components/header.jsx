

import userLogo from '../assets/user.svg';
import favLogo from '../assets/fav.svg';
import cartLogo from '../assets/cart.svg';
import logo from '../assets/logo.svg';
import { Link, useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';



function Header() {


   const location = useLocation();

   const isActive = (path) => location.pathname === path ? 'btns-nav active' : 'btns-nav'


   return (
      <div className="container">
         <div className="header-block">

            <div className="header-block__top">
               <div className="block-top__block">
                  <div className="buttons-container">
                     <button className="ru-btn btns">RU</button>
                     <button className="en-btn btns active">EN</button>
                  </div>


                  <div className="tel-block">
                     <a href="#" className="tel">+38099720222122121</a>
                  </div>
               </div>
            </div>
            <div className="header-block__bottom">
               <ul className="left-menu">
                  <li className="links"><Link to="/home" className={isActive('/home')}>HOME</Link></li>
                  <li className="links"><Link to="/about" className={isActive('/about')}>ABOUT</Link></li>
                  <li className="links"><Link to="/menu" className={isActive('/menu')}>MENU</Link></li>
                  <li className="links"><Link to="/reservation" className={isActive('/reservation')}>RESERVATION</Link></li>
               </ul>
               <div className="logo">
                  <img src={logo} alt=""></img>
               </div>
               <div className="buttons-menu">
                  <a className="menu-button"><img className="img-class" src={userLogo} alt="" /></a>
                  <a className="menu-button"><img className="img-class" src={favLogo} alt="" /></a>
                  <a className="menu-button"><img className="img-class" src={cartLogo} alt="" /></a>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Header;