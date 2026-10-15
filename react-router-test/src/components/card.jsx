import favImg from '../assets/fav.svg';
import imgLogo from '../assets/product1.svg'
import blackImg from '../assets/lavazza1.png';
import { Link } from 'react-router-dom';

import '../styles/components-styles/_card.scss'


function Card({ element }) {
   if (!element) return null;

   const defaultSize = element.size[0]; // берём первый размер как дефолтный на карточке каталога

   const productUrl = `/catalog/${element.name.toLowerCase().replace(/\s+/g, '-')}`;

   function handleAddToCart(e) {
      e.preventDefault();
      e.stopPropagation();

      console.log('Товар добавлен в корзину:', element.name);
   }

   function handleAddToFavorite(e) {
      e.preventDefault();
      e.stopPropagation();

      console.log('Товар добавлен в избранное:', element.name);
   }


   return (
      <Link to={productUrl} className="catalog-card card">
         <div className="card__logo">
            <img className="img-logo" src={element.img} alt={element.name} />
         </div>
         <div className="card__title">
            {element.name}
         </div>
         <div className="card__subtitle">
            <div className="card__subtitle__type">{element.roast} </div>
            <h2 className="card__subtitle__type"> · </h2>
            <div className="card__subtitle__country">{element.origin}</div>
         </div>
         <div className="card__price-block">
            <div className="card__price">
               ${defaultSize.price.toFixed(2)}
            </div>
            <div className="card__action">
               ${defaultSize.oldPrice.toFixed(2)}
            </div>
         </div>

         <div className="card-footer">
            <button className="card-footer__btn" onClick={handleAddToCart}>ADD TO CART</button>
            <a href='#' className="card-footer__emodzi" onClick={handleAddToFavorite}>♡</a>
         </div>
      </Link>

   );


}

export default Card;