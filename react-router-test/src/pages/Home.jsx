import { useEffect } from 'react';
import coffee from '../assets/coffee.png';
import Card from '../components/card';


function HomePage() {

   const scrollToCatalog = () => {
      document.getElementById('3').scrollIntoView({ behavior: 'smooth' });
   };

   const scrollToRead = () => {
      document.getElementById('2').scrollIntoView({ behavior: 'smooth' });
   };




   return (
      <>
         <section id="1" className="first-section">
            <div className="block-body">
               <div className="body-container">
                  <div className="body-text-block">
                     <div className="block-title">
                        ROASTED COFFEE BEST CHOICE
                     </div>
                     <div className="block-subtitle">
                        The coffee is brewed by first roasting the green coffee beans over hot
                        coals in a brazier. given an opportunity to sample.
                     </div>
                     <div className="block-body-btns">
                        <button className="btn-left" onClick={scrollToCatalog}>BUY NOW</button>
                        <button className="btn-right" onClick={scrollToRead}>READ MORE</button>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <section id="2" className="second-section">
            <div className="block-container center-container">
               <div className="block-left">
                  <img src={coffee} alt="" />
               </div>
               <div className="block-right">
                  <div className="block-right__title">
                     ROASTED COFFEE
                  </div>
                  <div className="block-right__subtitle">
                     There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
                  </div>
               </div>
            </div>
         </section>
         <section id='3' className='third-section catalog'>
            <div className="catalog-block container">
               <div className='catalog__title'>
                  CATALOG
               </div>
               <div className="catalog-cards-block">
                  <Card />
                  <Card />
                  <Card />
               </div>
               <div className="view-more ">
                  <button className='btn-right'>VIEW MORE</button>
               </div>
            </div>
         </section>
      </>
   );
}

export default HomePage;