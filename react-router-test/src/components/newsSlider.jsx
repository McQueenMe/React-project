import { useState, useEffect, useRef } from 'react';
import NewsCard from './newsCard';
import '../styles/components-styles/_news-slider.scss';

const CARDS_PER_VIEW = 3;

function NewsSlider({ news }) {
   const [currentIndex, setCurrentIndex] = useState(0);
   const intervalRef = useRef(null);

   const maxIndex = news.length - CARDS_PER_VIEW; // последняя позиция, где ещё влезает 3 карточки

   const goNext = () => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
   };

   const goPrev = () => {
      setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
   };

   useEffect(() => {
      if (news.length <= CARDS_PER_VIEW) return; // если карточек мало — крутить нечего
      intervalRef.current = setInterval(goNext, 5000);
      return () => clearInterval(intervalRef.current);
   }, [currentIndex, news.length]);

   const handlePrevClick = () => {
      clearInterval(intervalRef.current);
      goPrev();
   };

   const handleNextClick = () => {
      clearInterval(intervalRef.current);
      goNext();
   };

   if (news.length === 0) return null;

   return (
      <div className="news-slider">
         <button className="slider-btn slider-btn--prev" onClick={handlePrevClick}>
            ‹
         </button>

         <div className="slider-viewport">
            <div
               className="slider-track"
               style={{ transform: `translateX(-${currentIndex * (100 / CARDS_PER_VIEW)}%)` }}
            >
               {news.map((el) => (
                  <div className="slider-slide" key={el.id}>
                     <NewsCard el={el} />
                  </div>
               ))}
            </div>
         </div>

         <button className="slider-btn slider-btn--next" onClick={handleNextClick}>
            ›
         </button>
      </div>
   );
}

export default NewsSlider;