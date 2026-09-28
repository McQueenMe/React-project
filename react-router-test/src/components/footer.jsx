import '../styles/scss/_footer.scss'

import logo from '../assets/logo.svg';
import { Link, useLocation } from 'react-router-dom';




function Footer() {


   const location = useLocation();

   const isActive = (path) => location.pathname === path ? 'btns-nav active' : 'btns-nav'


   return (
      <div className="fot-container">
         <div className="footer-block">
            <div className="footer-left">
               <img className='img-logo' src={logo} alt="" />
               <div className='footer-text'>COFFEEMEET</div>
            </div>
            <div className="footer-menu">
               <ul className="left-menu">
                  <li className="links"><Link to="/home" className={isActive('/home')}>HOME</Link></li>
                  <li className="links"><Link to="/about" className={isActive('/about')}>ABOUT</Link></li>
                  <li className="links"><Link to="/menu" className={isActive('/menu')}>MENU</Link></li>
                  <li className="links"><Link to="/reservation" className={isActive('/reservation')}>RESERVATION</Link></li>
               </ul>
            </div>
            <div className="footer-right">
               <a href="#" className="footer-contacts">
                  CONTACTS
               </a>
               <a className="footer-police" href="#">
                  PRIVACY POLICE
               </a>
            </div>

         </div>
      </div>
   );
}

export default Footer;