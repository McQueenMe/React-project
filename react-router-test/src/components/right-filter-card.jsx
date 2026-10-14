function RightFilterCard({ element, addOptions }) {





   return (
      <div className="filter-group">
         <h2 className="filter-group__title">{element.name}</h2>

         <ul className='roast-type__ul ul-roast'>
            <li className="ul-roast__li li-element dark">
               <a id={element.text[0]} href='#' onClick={addOptions} className={element.checked[0] === true ? "li-element__square chek" : "li-element__square "}></a>
               <div className="li-element__text">{element.text[0]}</div>
            </li>
            <li className="ul-roast__li medium">
               <a id={element.text[1]} href='#' onClick={addOptions} className={element.checked[1] === true ? "li-element__square chek" : "li-element__square "}></a>
               <div className="li-element__text">{element.text[1]}</div>
            </li>
            <li className="ul-roast__li light">
               <a id={element.text[2]} href='#' onClick={addOptions} className={element.checked[2] === true ? "li-element__square chek" : "li-element__square "}></a>
               <div className="li-element__text">{element.text[2]}</div>
            </li>
         </ul>
      </div>
   );
}

export default RightFilterCard;