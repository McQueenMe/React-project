import { Link, useLocation } from 'react-router-dom';
import cartLogo from '../assets/cart.svg';
import '../styles/scss/_header.scss';
import { useContext, useState, useEffect } from 'react';
import { CartContext } from '../context/cartContext';
import Cart from './cart';

const ALT_HEADER_PATHS = ['/catalog', '/product', '/checkout'];

const NAV_LINKS = [
   { to: '/home', label: 'HOME' },
   { to: '/about', label: 'ABOUT' },
   { to: '/catalog', label: 'CATALOG', also: ['/product'] },
   { to: '/checkout', label: 'CHECKOUT' },
];

const ICON_BUTTONS = [
   { label: 'Cart', icon: cartLogo, isCart: true },
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
   const [isOpenCart, setIsOpenCart] = useState(false);
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const { cart } = useContext(CartContext);

   const isAlt = ALT_HEADER_PATHS.some((path) => pathname.startsWith(path));
   const isCurrent = ({ to, also = [] }) =>
      [to, ...also].some((path) => pathname.startsWith(path));

   function openCart() {
      setIsMenuOpen(false);
      setIsOpenCart((prev) => !prev);
   }

   const closeMenu = () => setIsMenuOpen(false);

   useEffect(() => {
      if (!isMenuOpen) return;
      const onKeyDown = (e) => {
         if (e.key === 'Escape') setIsMenuOpen(false);
      };
      document.addEventListener('keydown', onKeyDown);
      return () => document.removeEventListener('keydown', onKeyDown);
   }, [isMenuOpen]);

   useEffect(() => {
      document.body.style.overflow = isMenuOpen ? 'hidden' : '';
      return () => { document.body.style.overflow = ''; };
   }, [isMenuOpen]);

   return (
      <header className={`site-header ${isAlt ? 'site-header--alt' : ''}`}>
         <div className="site-header__inner _container">

            <Link to="/home" className="site-header__logo" aria-label="Coffeemeet — home" onClick={closeMenu}>
               <CupIcon />
               <span className="site-header__logo-text">COFFEEMEET</span>
            </Link>

            <nav
               id="main-menu"
               className={`site-header__menu ${isMenuOpen ? 'site-header__menu--open' : ''}`}
               aria-label="Main"
            >
               <ul className="site-header__nav">
                  {NAV_LINKS.map((link) => {
                     const current = isCurrent(link);
                     return (
                        <li key={link.to}>
                           <Link
                              to={link.to}
                              className={`site-header__link ${current ? 'site-header__link--active' : ''}`}
                              aria-current={current ? 'page' : undefined}
                              onClick={closeMenu}
                           >
                              {link.label}
                           </Link>
                        </li>
                     );
                  })}
               </ul>
            </nav>

            <div className="site-header__actions">
               {ICON_BUTTONS.map(({ label, icon, isCart }) => (
                  <button
                     key={label}
                     type="button"
                     className="site-header__icon-btn"
                     aria-label={label}
                     onClick={isCart ? openCart : undefined}
                  >
                     <img className="site-header__icon" src={icon} alt="" />
                  </button>
               ))}
               <div className={cart.length > 0 ? "cart-count" : ''}>
                  {cart.length > 0 ? cart.length : ''}
               </div>

               <button
                  type="button"
                  className="site-header__burger"
                  aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                  aria-expanded={isMenuOpen}
                  aria-controls="main-menu"
                  onClick={() => setIsMenuOpen((prev) => !prev)}
               >
                  <span className={`site-header__burger-lines ${isMenuOpen ? 'site-header__burger-lines--open' : ''}`} />
               </button>
            </div>

         </div>

         {isOpenCart ? <Cart openCart={openCart} /> : ''}
      </header>
   );
}

export default Header;
