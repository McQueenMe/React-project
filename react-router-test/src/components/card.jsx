import favImg from '../assets/fav.svg';
import imgLogo from '../assets/product1.svg'
import blackImg from '../assets/lavazza1.png';

import '../styles/components-styles/_card.scss'


function Card({ element }) {

   console.log(element)
   return (
      <div className="catalog-card card">
         <div className="card__logo">
            <img className='img-logo' src={element.img} alt="" />
         </div>
         <div className="card__subtitle">
            {element.name}
         </div>
         <div className="card__price-block">
            <div className="card__price">
               {element.price}
            </div>
            <div className="card__action">
               29.99
            </div>
            <div className="card__heart">
               <a href="#"><img src={favImg} alt="" /> </a>
            </div>
         </div>
      </div>
   );
}

export default Card;