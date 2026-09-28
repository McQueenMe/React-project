import { useEffect, useState } from 'react';
import coffeeImg from '../assets/coffee.png';
import Card from '../components/card';
import NewsCard from '../components/newsCard';
import NewsSlider from '../components/newsSlider';
import { coffee } from '../data/coffee-obj';

function HomePage() {
   const [news, setNews] = useState([]);

   console.log(coffee)




   /* 
      useEffect(() => {
         const apiKey = 'b457923849b2475e879b8a9f8bb08aad';
         const url = `https://api.worldnewsapi.com/search-news?api-key=${apiKey}&text=space&number=3`;
   
         fetch(url, { method: 'GET' })
            .then((response) => {
               if (!response.ok) throw new Error(`Ошибка: ${response.status}`);
               return response.json();
            })
            .then((data) => {
               setNews(data.news)
               console.log('Данные новостей:', data);
            })
            .catch((error) => {
               console.error('Ошибка авторизации или запроса:', error);
            });
      }, [news]); */

   useEffect(() => {

      const apiKey = '57312500838fe75fecb747eb68ad0645';
      const url = `https://gnews.io/api/v4/search?q=coffee&lang=en&max=6&apikey=${apiKey}`;

      fetch(url, { method: 'GET' })
         .then((response) => {
            if (!response.ok) throw new Error(`Ошибка: ${response.status}`);
            return response.json();
         })
         .then((data) => {
            console.log('Данные новостей:', data);
            setNews(data.articles);
         })
         .catch((error) => {
            console.error('Ошибка запроса:', error);
         });
   }, []);


   // console.log(news)



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
                  <img src={coffeeImg} alt="" />
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
                  <div className="catalog-cards-block">
                     {coffee.map((el) => (
                        <Card key={el.name} element={el} />
                     ))}
                  </div>
               </div>
               <div className="view-more ">
                  <button className='btn-right'>VIEW MORE</button>
               </div>
            </div>
         </section>
         <section id='4' className='third-section catalog'>
            <div className="catalog-block container">
               <div className='catalog__title'>
                  NEWS
               </div>
               <div className="catalog-cards-block">
                  <div className="news-slider-wrapper">
                     <NewsSlider news={news} />
                  </div>
               </div>
            </div>
         </section>
      </>
   );
}

export default HomePage;