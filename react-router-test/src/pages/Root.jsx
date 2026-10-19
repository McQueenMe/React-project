
import { Outlet } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';
import { CartContext } from '../context/cartContext';
import { useEffect, useState } from 'react';


function RootPage() {

   const [cart, setCart] = useState(localStorage.getItem('Cart') ? JSON.parse(localStorage.getItem('Cart')) : []);
   const [showToast, setShowToast] = useState(false);


   const addToCard = (product, idPrice) => {
      // Глубокое копирование, чтобы React корректно отслеживал изменения внутри объектов
      const nextCart = cart.map(item => ({ ...item }));

      // Выносим цену в переменную для удобства
      const targetPrice = product.size[idPrice].price;
      const productSize = product.size[idPrice].size;

      // Ищем, есть ли уже в корзине товар с таким же ID И такой же ценой/размером
      const existingItem = nextCart.find(
         (item) => item.elId === product.id && item.price === targetPrice
      );

      if (existingItem) {
         existingItem.count++;
         console.log('Количество товара увеличено');
      } else {
         nextCart.push({
            elId: product.id,
            count: 1,
            price: targetPrice,
            size: productSize,
         });
         console.log('Добавлен новый товар');
      }

      // Обновляем состояние и локальное хранилище ОДИН раз в конце функции
      setCart(nextCart);
      localStorage.setItem('Cart', JSON.stringify(nextCart));

      // Показываем уведомление
      setShowToast(true);

      // Защита от багов с таймерами: очищаем предыдущий таймер, если он был запущен
      if (window.toastTimer) {
         clearTimeout(window.toastTimer);
      }

      // Ставим новый таймер
      window.toastTimer = setTimeout(() => {
         setShowToast(false);
      }, 3000);
   };




   return (
      <div>
         <CartContext.Provider value={{ cart, addToCard }}>
            <Header />
            <div className={`cart-toast ${showToast ? 'cart-toast--visible' : ''}`}>
               Product have added to cart! 🎉

            </div>
            <main className='margin-bottom'>
               <Outlet />
            </main>
            <Footer />

         </CartContext.Provider>
      </div>
   );
}

export default RootPage;
