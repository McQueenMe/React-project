import { useParams, Link } from 'react-router-dom';
import { coffee } from '../data/coffee-obj';
import { useContext, useState } from 'react';
import { CartContext } from '../context/cartContext';

function ProductPage() {

   const { id } = useParams();
   const currentProduct = coffee.find(
      (item) => item.name.toLowerCase().replace(/\s+/g, '-') === id
   );
   if (!currentProduct) {
      return <h2>Product not found</h2>;
   }

   const [activePrice, setActivePrice] = useState(0);
   const [count, setCount] = useState(1);
   const [activePhoto, setActivePhoto] = useState(currentProduct.imgArray[0]);



   function addCount() {
      setCount((count) => count + 1);
   }

   function delCount() {
      if (count == 1) {
         return count
      }
      setCount((count) => count - 1);
   }

   const activeDiscount = Math.round(
      (1 - currentProduct.size[activePrice].price / currentProduct.size[activePrice].oldPrice) * 100
   );


   function showBigPhoto(e) {
      setActivePhoto(e.target.src)
      console.log(e.target)
   }

   const [like, setLike] = useState(() => {
      const savedLikes = JSON.parse(localStorage.getItem('liked-cards')) || [];
      return savedLikes.includes(currentProduct.id);
   })

   function handleAddToFavorite(e) {
      e.preventDefault();
      e.stopPropagation();

      let actualDataLS = JSON.parse(localStorage.getItem('liked-cards')) || [];

      if (like) {
         actualDataLS = actualDataLS.filter((id) => id !== currentProduct.id);
         setLike(false);
      } else {
         actualDataLS.push(currentProduct.id);
         setLike(true);
      }

      localStorage.setItem('liked-cards', JSON.stringify(actualDataLS));
   }


   function changePrice(e) {
      const button = e.target.closest('button');

      if (!button) return;

      const selectedId = Number(button.id);
      setActivePrice(selectedId);
   }

   const { cart, addToCard } = useContext(CartContext);

   /*    function addToCart(currentProduct, activePrice){
   
      } */



   let liked = '❤️';
   let noliked = '🤍';

   return (
      <div className="body-container-card ">
         <div className="_container">
            <section className="section-1">
               <div className="section-1__left-block left-block">
                  <div className="left-block__big-foto">
                     <img src={activePhoto} alt={currentProduct.name} className="left-block__big-foto-photo">
                     </img>
                  </div>
                  <ul className="left-block__another-fotos">
                     <button onClick={showBigPhoto} style={{ backgroundColor: 'var(--bg-color-page)' }}>
                        <li className="left-block__another-fotos__foto"><img className='left-block__another-fotos__foto__small' src={currentProduct.imgArray[0]} alt="" /></li>
                     </button>
                     <button onClick={showBigPhoto} style={{ backgroundColor: 'var(--bg-color-page)' }}>
                        <li className="left-block__another-fotos__foto"><img className='left-block__another-fotos__foto__small' src={currentProduct.imgArray[1]} alt="" /></li>
                     </button>
                     <button onClick={showBigPhoto} style={{ backgroundColor: 'var(--bg-color-page)' }}>
                        <li className="left-block__another-fotos__foto"><img className='left-block__another-fotos__foto__small' src={currentProduct.imgArray[2]} alt="" /></li>
                     </button>
                  </ul>
               </div>
               <div className="section-1__right-block right-block">
                  <div className="right-block__roast_country">
                     <div className="card__subtitle__type">{currentProduct.roast} </div>
                     <h2 className="card__subtitle__type"> · </h2>
                     <div className="card__subtitle__country">{currentProduct.origin}</div>
                  </div>
                  <h2 className="right-block__title">{currentProduct.name}</h2>
                  <div className="right-block__price-block">
                     <div className="card__price">
                        ${(currentProduct.size[activePrice].price.toFixed(2) * count).toFixed(2)}
                     </div>
                     <div className="card__action">
                        ${(currentProduct.size[activePrice].oldPrice.toFixed(2) * count).toFixed(2)}
                     </div>
                     <div className="card__actia">
                        -{activeDiscount} %
                     </div>
                  </div>
                  <div className="right-block__subtitle">{currentProduct.description}</div>
                  <h2 className='right-block__subtitle__text'>PACKAGE SIZE</h2>
                  <div className="right-block__package-size-block package-size-block" onClick={changePrice}>
                     <button id='0' className={activePrice == 0 ? "package-size-block__button active-card" : "package-size-block__button"} >{currentProduct.size[0].size} - {currentProduct.size[0].price.toFixed(2)}$</button>
                     <button id='1' className={activePrice == 1 ? "package-size-block__button active-card" : "package-size-block__button"} >{currentProduct.size[1].size} - {currentProduct.size[1].price.toFixed(2)}$</button>
                     <button id='2' className={activePrice == 2 ? "package-size-block__button active-card" : "package-size-block__button"}>{currentProduct.size[2].size} - {currentProduct.size[2].price.toFixed(2)}$</button>
                  </div>
                  <div className="right-block__count-block">
                     <div className="right-block__count-block  block-count">
                        <button className="block-count__minus" onClick={delCount}>-</button>
                        <button className="block-count__count">{count}</button>
                        <button className="block-count__plus" onClick={addCount}>+</button>
                     </div>
                     <button className="right-block__count-block__add-to-cart-btn" onClick={() => addToCard(currentProduct, activePrice)}>
                        ADD TO CART
                     </button>
                     <button className={like ? "right-block__count-block__favourite-btn like" : "right-block__count-block__favourite-btn"} onClick={handleAddToFavorite}>{like ? liked : noliked} </button>
                  </div>
                  <div className="right-block__information-block">
                     <div className="right-block__information-block__boxik">
                        <div className="right-block__information-block__boxik__title">Roast</div>
                        <div className="right-block__information-block__boxik__value">{currentProduct.roast.split(' ')[0]}</div>
                     </div>
                     <div className="right-block__information-block__boxik">
                        <div className="right-block__information-block__boxik__title">Origin</div>
                        <div className="right-block__information-block__boxik__value">{currentProduct.origin}</div>
                     </div>
                     <div className="right-block__information-block__boxik">
                        <div className="right-block__information-block__boxik__title">Form</div>
                        <div className="right-block__information-block__boxik__value">{currentProduct.form}</div>
                     </div>
                     <div className="right-block__information-block__boxik">
                        <div className="right-block__information-block__boxik__title">Bean type</div>
                        <div className="right-block__information-block__boxik__value">{currentProduct.beanType}</div>
                     </div>
                  </div>
               </div>
            </section>
         </div>


      </div>
   );
}

export default ProductPage;