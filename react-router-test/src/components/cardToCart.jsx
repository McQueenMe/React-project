
import '../styles/components-styles/_card-to-cart.scss';

import { coffee } from "../data/coffee-obj";
import trashIcon from '../assets/trash2.svg';
import trashIcon1 from '../assets/trash3.svg';
import { useContext, useState } from 'react';
import { CartContext } from '../context/cartContext';


//cartElement.price.toFixed(2)


function CardToCart({ cartElement }) {

   console.log(cartElement)

   const [cartEl, setCartEl] = useState(cartElement.count);
   const { cart, setCart, deleteProduct } = useContext(CartContext);


   let id = cartElement.elId - 1;
   let elId = cartElement.elId;
   let sizeLocal = 0;

   console.log(cartElement);

   if (cartElement.size === '250g') {
      sizeLocal = 0;
   } else if (cartElement.size === '500g') {
      sizeLocal = 1;
   } else sizeLocal = 2;

   console.log(coffee[id].size[sizeLocal]);


   let count = cartEl;
   let price = coffee[id].size[sizeLocal].price;
   let summ = (count * price).toFixed(2);

   console.log()


   function updateCart(newCount) {
      let localCart = structuredClone(cart);

      const gg = localCart.find(
         (item) => item.elId === cartElement.elId && item.price === cartElement.price
      );

      if (gg) {
         gg.count = newCount;
      }

      localStorage.setItem('Cart', JSON.stringify(localCart));
      setCart(localCart);
   }

   function minus() {
      if (cartEl > 1) {
         const nextCount = cartEl - 1;
         setCartEl(nextCount);
         updateCart(nextCount);
      }
   }

   function plus() {
      const nextCount = cartEl + 1;
      setCartEl(nextCount);
      updateCart(nextCount);
   }



   return (
      <>
         <div className="card-to-cart">
            <div className="card-to-cart-center">
               <div className="card-to-cart__logo">
                  <img className="img-logo-cart" src={coffee[id].img} alt={cartElement.elId} />
               </div>
               <div className="card-to-cart__block-top block-top">
                  <div className="block-top__title">
                     {coffee[id].name}
                  </div>
                  <div className="card-to-cart__block-down block-down">
                     <div className="block-down__count">{count}</div>
                     <h2 className='block-down__h2'>x</h2>
                     <div className="block-down__price">{coffee[id].size[sizeLocal].price.toFixed(2)}$</div>
                     <div className="block-down__size">{"(" + cartElement.size + ')'}</div>
                     <div className="block-down__size-sum">{"= " + summ}$</div>

                  </div>
                  <div className="block-top__btns">
                     <div className="block-down__counter counter">
                        <button className='counter__minus btn-downs' onClick={minus}>—</button>
                        <button className='counter__plus btn-downs' onClick={plus} >＋</button>
                     </div>
                  </div>
               </div>
            </div>
            <div className="card-to-cart__delete-btn">
               <button className='delete-btn__btn' onClick={() => deleteProduct(cartElement)}><img className='trash' src={trashIcon1} alt="" /></button>
            </div>
         </div>
      </>
   );
}

export default CardToCart;