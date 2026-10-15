import { useParams, Link } from 'react-router-dom';
import { coffee } from '../data/coffee-obj'; // Импортируем твой массив с кофе

function ProductPage() {
   // 1. Вытаскиваем хвостик ссылки (например, "lavazza-qualita")
   const { id } = useParams();

   // 2. Ищем этот кофе в нашей базе данных
   const currentProduct = coffee.find(
      (item) => item.name.toLowerCase().replace(/\s+/g, '-') === id
   );

   // 3. Защита: если товар по ссылке не найден
   if (!currentProduct) {
      return <h2>Product not found</h2>;
   }

   console.log(currentProduct);

   const discount = Math.round((1 - currentProduct.size[0].price / currentProduct.size[0].oldPrice) * 100);

   return (
      <div className="body-container-card ">
         <div className="_container">
            <section className="section-1">
               <div className="section-1__left-block left-block">
                  <div className="left-block__big-foto">
                     <img src={currentProduct.img} alt={currentProduct.name} className="left-block__big-foto-photo">
                     </img>
                  </div>
                  <ul className="left-block__another-fotos">
                     <li className="left-block__another-fotos__foto"></li>
                     <li className="left-block__another-fotos__foto"></li>
                     <li className="left-block__another-fotos__foto"></li>
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
                        ${currentProduct.size[0].price.toFixed(2)}
                     </div>
                     <div className="card__action">
                        ${currentProduct.size[0].oldPrice.toFixed(2)}
                     </div>
                     <div className="card__actia">
                        -{discount} %
                     </div>
                  </div>
                  <div className="right-block__subtitle">{currentProduct.description}</div>
                  <h2 className='right-block__subtitle__text'>PACKAGE SIZE</h2>
                  <div className="right-block__package-size-block package-size-block">
                     <button className="package-size-block__button">{currentProduct.size[0].size} * {currentProduct.size[0].price}</button>
                     <button className="package-size-block__button">{currentProduct.size[1].size} * {currentProduct.size[1].price}</button>
                     <button className="package-size-block__button">{currentProduct.size[2].size} * {currentProduct.size[2].price}</button>
                  </div>
                  <div className="right-block__count-block">
                     <div className="right-block__count-block  block-count">
                        <button className="block-count__minus">-</button>
                        <button className="block-count__count">1</button>
                        <button className="block-count__plus">+</button>
                     </div>
                     <button className="right-block__count-block__add-to-cart-btn">
                        ADD TO CART
                     </button>
                     <button className="right-block__count-block__favourite-btn">♡</button>
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