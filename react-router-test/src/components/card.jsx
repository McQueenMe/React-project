import favImg from '../assets/fav.svg';
import imgLogo from '../assets/product1.svg'

import '../styles/components-styles/_card.scss'


function Card() {
   return (
      <div className="catalog-card card">
         <div className="card__logo">
            <img className='img-logo' src={imgLogo} alt="" />
         </div>
         <div className="card__subtitle">
            LAVAZZA COFFEE
         </div>
         <div className="card__price-block">
            <div className="card__price">
               $19.99
            </div>
            <div className="card__action">
               $29.99
            </div>
            <div className="card__heart">
               <a href="#"><img src={favImg} alt="" /> </a>
            </div>
         </div>
      </div>
   );
}

export default Card;