import '../styles/components-styles/_news-card.scss'

function NewsCard({ el }) {
   const elImg = el.image;
   const date = el.publishedAt;

   return (
      <a className="news-card" href={el.url}>
         <div className="card__logo">
            <img className='img-logo image-logo' src={elImg} alt="" />
         </div>
         <div className="card__subtitle">
            {el.title}
         </div>
         <div className="card__subtitle">
            <div className='url'>Read more</div>
         </div>
         <div className="card__price-block">
            <div className="card__date">
               {date.split('T')[0]}
            </div>
         </div>
      </a>
   );
}

export default NewsCard;