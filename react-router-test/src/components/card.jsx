import favImg from '../assets/fav.svg';
import imgLogo from '../assets/product1.svg'
import blackImg from '../assets/lavazza1.png';

import '../styles/components-styles/_card.scss'


function Card({ element }) {
   if (!element) return null;

   const defaultSize = element.size[0]; // берём первый размер как дефолтный на карточке каталога

   return (
      <a href='#' className="catalog-card card">
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
               ${defaultSize.price}
            </div>
            <div className="card__action">
               ${defaultSize.oldPrice}
            </div>
         </div>

         <div className="card-footer">
            <button className="card-footer__btn">ADD TO CART</button>
            <a href='#' className="card-footer__emodzi">♡</a>
         </div>

      </a>
   );
}

export default Card;