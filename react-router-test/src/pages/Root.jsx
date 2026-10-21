
import { Outlet } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';
import { CartContext } from '../context/cartContext';
import { useEffect, useState } from 'react';


function RootPage() {

   const [cart, setCart] = useState(localStorage.getItem('Cart') ? JSON.parse(localStorage.getItem('Cart')) : []);
   const [showToast, setShowToast] = useState(false);


   const addToCard = (product, idPrice, count) => {

      console.log(count);

      if (!count) {
         count = 1;
      }
      const nextCart = cart.map(item => ({ ...item }));

      const targetPrice = product.size[idPrice].price;
      const productSize = product.size[idPrice].size;

      const existingItem = nextCart.find(
         (item) => (item.elId === product.id && item.price == targetPrice)
      );

      let activePrice = (targetPrice * count).toFixed(2)

      if (existingItem) {
         existingItem.count = existingItem.count + count;
         console.log('Количество товара увеличено');
      } else {
         nextCart.push({
            elId: product.id,
            count: count,
            price: activePrice,
            size: productSize,
            id: crypto.randomUUID(),
         });
         console.log('Добавлен новый товар');
      }

      setCart(nextCart);
      localStorage.setItem('Cart', JSON.stringify(nextCart));

      setShowToast(true);

      window.toastTimer = setTimeout(() => {
         setShowToast(false);
      }, 3000);
   };

   function deleteProduct(currentEl) {
      let productLocal = structuredClone(cart);
      console.log(productLocal)

      const right = productLocal.filter((el) => !(el.elId == currentEl.elId && el.price == currentEl.price));

      localStorage.setItem('Cart', JSON.stringify(right));
      setCart(right);


   }




   return (
      <div>
         <CartContext.Provider value={{ cart, setCart, addToCard, deleteProduct }}>
            <Header />
            <div className={`cart-toast ${showToast ? 'cart-toast--visible' : ''}`}>
               Product have added to cart! 🎉

            </div>
            <main className='margin-bottom '>
               <Outlet />
            </main>
            <Footer />

         </CartContext.Provider>
      </div>
   );
}

export default RootPage;
