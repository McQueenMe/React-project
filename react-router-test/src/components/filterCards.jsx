

function FilterCards({ element, addOptions }) {



   return (
      <div className="card-block">
         <div className="card-block__text">
            {element}
         </div>
         <a href="#"
            id={element}
            onClick={addOptions}
            className="card-block__close">✕</a>
      </div>
   );
}

export default FilterCards;