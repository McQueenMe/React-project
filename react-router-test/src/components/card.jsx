import favImg from '../assets/fav.svg';
import imgLogo from '../assets/lavazza-red/product1.svg'
import blackImg from '../assets/lav-grey/lavazza1.png';
import { Link } from 'react-router-dom';

import '../styles/components-styles/_card.scss'
import { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../context/cartContext';


function Card({ element }) {


   const { cart, addToCard } = useContext(CartContext);



   const defaultSize = element.size[0];

   const productUrl = `/catalog/${element.name.toLowerCase().replace(/\s+/g, '-')}`;
   const [like, setLike] = useState(() => {
      const savedLikes = JSON.parse(localStorage.getItem('liked-cards')) || [];
      return savedLikes.includes(element.id);
   });

   function handleAddToCart(e) {
      e.preventDefault();
      e.stopPropagation();
      console.log('Товар добавлен в корзину:', element);

      alert(`${element.name} added to cart`);

      addToCard(element);
   }

   function handleAddToFavorite(e) {
      e.preventDefault();
      e.stopPropagation();

      let actualDataLS = JSON.parse(localStorage.getItem('liked-cards')) || [];

      if (like) {
         actualDataLS = actualDataLS.filter((id) => id !== element.id);
         setLike(false);
      } else {
         actualDataLS.push(element.id);
         setLike(true);
      }

      localStorage.setItem('liked-cards', JSON.stringify(actualDataLS));
   }

   let liked = '❤️';
   let noliked = '🤍';


   if (!element) return null;


   return (
      <Link to={productUrl} className="catalog-card card" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
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
            <button className="card-footer__btn btn-pop" onClick={handleAddToCart}>ADD TO CART</button>
            <a href='#' className={like ? "card-footer__emodzi like" : "card-footer__emodzi"} onClick={handleAddToFavorite}>{like ? liked : noliked}</a>
         </div>
      </Link>

   );


}

export default Card;