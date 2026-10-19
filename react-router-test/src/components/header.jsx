import { Link, useLocation } from 'react-router-dom';
import userLogo from '../assets/user.svg';
import favLogo from '../assets/fav.svg';
import cartLogo from '../assets/cart.svg';
import '../styles/scss/_header.scss'
import { useContext } from 'react';
import { CartContext } from '../context/cartContext';

// страницы, на которых хедер тёмно-синий (на остальных — чёрный)
const ALT_HEADER_PATHS = ['/catalog', '/product'];

const NAV_LINKS = [
   { to: '/home', label: 'HOME' },
   { to: '/about', label: 'ABOUT' },
   { to: '/catalog', label: 'CATALOG', also: ['/product'] }, // CATALOG горит и на странице товара
   { to: '/reservation', label: 'RESERVATION' },
];

const ICON_BUTTONS = [
   { label: 'Account', icon: userLogo },
   { label: 'Favorites', icon: favLogo },
   { label: 'Cart', icon: cartLogo },
];

function CupIcon() {
   return (
      <svg className="site-header__logo-icon" viewBox="0 0 24 24" aria-hidden="true">
         <path d="M4 10h12v3a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5v-3z" />
         <path d="M16 11h1.5a2.5 2.5 0 0 1 0 5H15" />
         <path d="M8 4v3M12 3v4" />
      </svg>
   );
}


function Header() {
   const { pathname } = useLocation();


   const { cart } = useContext(CartContext);
   console.log(cart)

   const isAlt = ALT_HEADER_PATHS.some((path) => pathname.startsWith(path));
   const isCurrent = ({ to, also = [] }) =>
      [to, ...also].some((path) => pathname.startsWith(path));

   return (
      <header className={`site-header ${isAlt ? 'site-header--alt' : ''}`}>
         <div className="site-header__inner _container">

            <Link to="/home" className="site-header__logo" aria-label="Coffeemeet — home">
               <CupIcon />
               <span className="site-header__logo-text">COFFEEMEET</span>
            </Link>

            <nav aria-label="Main">
               <ul className="site-header__nav">
                  {NAV_LINKS.map((link) => {
                     const current = isCurrent(link);
                     return (
                        <li key={link.to}>
                           <Link
                              to={link.to}
                              className={`site-header__link ${current ? 'site-header__link--active' : ''}`}
                              aria-current={current ? 'page' : undefined}
                           >
                              {link.label}
                           </Link>
                        </li>
                     );
                  })}
               </ul>
            </nav>

            <div className="site-header__actions">



               {ICON_BUTTONS.map(({ label, icon }) => (
                  <button key={label} type="button" className="site-header__icon-btn" aria-label={label}>
                     <img className="site-header__icon" src={icon} alt="" />
                  </button>

               ))}
               <div className={cart.length > 0 ? "cart-count" : ''}>{cart.length > 0 ? cart.length : ''}</div>
            </div>

         </div>
      </header>
   );
}

export default Header;

