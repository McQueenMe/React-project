import { useContext } from 'react';
import '../styles/components-styles/_card-to-cart.scss';
import { CartContext } from '../context/cartContext';
import CardToCart from './cardToCart';
import { Link } from 'react-router-dom';




function Cart({ openCart }) {


   const { cart } = useContext(CartContext);

   console.log(cart)

   let summ = 0;

   for (let i = 0; i < cart.length; i++) {
      let summLocal = (cart[i].price * cart[i].count).toFixed(2);
      console.log(summLocal)

      summ = Number(summ) + Number(summLocal);

   }

   console.log(summ)


   function goToCheck() {

   }



   return (
      <div className='cart-block'>
         <div className="cart-block__main">
            <div className='cart-block__header'>
               <h2 className='cart-block__title'>Your Cart</h2>
               <button className='cart-block__close' onClick={openCart}>✕</button>

            </div>

            <div className="cart-block__cards">
               {cart.map((el, id) => (
                  <CardToCart key={id} cartElement={el} />

               )

               )
               }
            </div>
            <div className="cart-block__footer block-footer">
               <div className="block-footer__subtitle">
                  <div className="block-footer__all-price-block all-price-block">
                     <div className="all-price-block__text">Total items</div>
                     <div className="all-price-block__price">{summ.toFixed(2) + ' $'}</div>
                  </div>
                  <div className="block-footer__all-price-block all-price-block">
                     <div className="all-price-block__text">Delivery</div>
                     <div className="all-price-block__price">Free</div>
                  </div>
               </div>
               <div className="block-footer__total">
                  <div className="block-footer__text">Total price:</div>
                  <div className="block-footer__price">{summ.toFixed(2) + ' $'}</div>
               </div>
               <button className="cart-block__btn" onClick={goToCheck}>
                  <Link to="/checkout"
                  > <span className="cart-block__btn-span">Continue to checkout</span>  </Link>
               </button>
            </div>
         </div>

      </div>

   );
}

export default Cart;