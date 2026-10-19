
import { Outlet } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';
import { CartContext } from '../context/cartContext';
import { useState } from 'react';


function RootPage() {

   const [cart, setCart] = useState(localStorage.getItem('Cart') ? JSON.parse(localStorage.getItem('Cart')) : []);

   const addToCard = (product) => {
      const nextCart = [...cart];

      const existingItem = nextCart.find((item) => item.elId === product.id);

      if (existingItem) {
         existingItem.count += 1;
      } else {
         nextCart.push({ elId: product.id, count: 1 });
      }

      setCart(nextCart);

      localStorage.setItem('Cart', JSON.stringify(nextCart));
   };



   return (
      <div>
         <CartContext.Provider value={{ cart, addToCard }}>
            <Header />
            <main className='margin-bottom'>
               <Outlet />
            </main>
            <Footer />
         </CartContext.Provider>
      </div>
   );
}

export default RootPage;
