import { useState, useEffect, useRef } from 'react';
import NewsCard from './NewsCard';

function NewsSlider({ news }) {
   const [currentIndex, setCurrentIndex] = useState(0);
   const [cardsPerView, setCardsPerView] = useState(3);
   const intervalRef = useRef(null);

   useEffect(() => {
      const handleResize = () => {
         if (window.innerWidth <= 650) {
            setCardsPerView(1); // Телефоны — 1 карточка
         } else if (window.innerWidth <= 992) {
            setCardsPerView(2); // Планшеты — 2 карточки
         } else {
            setCardsPerView(3); // Компьютеры — 3 карточки
         }
      };

      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
   }, []);

   const maxIndex = Math.max(0, news.length - cardsPerView);

   useEffect(() => {
      if (currentIndex > maxIndex) {
         setCurrentIndex(maxIndex);
      }
   }, [cardsPerView, news.length, maxIndex, currentIndex]);

   const goNext = () => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
   };

   const goPrev = () => {
      setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
   };

   useEffect(() => {
      if (news.length <= cardsPerView) return;
      intervalRef.current = setInterval(goNext, 5000);
      return () => clearInterval(intervalRef.current);
   }, [currentIndex, news.length, cardsPerView, maxIndex]);

   const handlePrevClick = () => {
      clearInterval(intervalRef.current);
      goPrev();
   };

   const handleNextClick = () => {
      clearInterval(intervalRef.current);
      goNext();
   };

   if (news.length === 0) return null;

   const visibleNews = news.slice(currentIndex, currentIndex + cardsPerView);

   return (
      <div className="news-slider-box">
         <button className="news-arrow-btn" onClick={handlePrevClick}>
            ‹
         </button>

         <div
            className="news-cards-grid"
            style={{
               display: 'grid',
               gridTemplateColumns: `repeat(${cardsPerView}, minmax(0, 1fr))`,
               gap: '20px',
               width: '100%'
            }}
         >
            {visibleNews.map((el) => (
               <div key={el.id} style={{ minWidth: 0, width: '100%' }}>
                  <NewsCard el={el} />
               </div>
            ))}
         </div>

         <button className="news-arrow-btn" onClick={handleNextClick}>
            ›
         </button>
      </div>
   );
}

export default NewsSlider;
