import { useState } from 'react';
import SortDropdown from '../components/sortDropdown';
import Card from '../components/card';
import { coffee } from '../data/coffee-obj';
import FilterCards from '../components/filterCards';
import { useEffect } from 'react';
import RightFilterCard from '../components/right-filter-card';


function CatalogPage() {


   // filter cards


   if (!localStorage.getItem('filter-values')) {
      localStorage.setItem('filter-values', JSON.stringify([]));
   }

   const [sortBy, setSortBy] = useState('price-asc');
   const [options, setOptions] = useState(JSON.parse(localStorage.getItem('filter-values')));

   const [coffeeCard, setCoffeeCards] = useState(coffee);

   const FILTERDATA = [
      { id: 1, name: 'ROAST TYPE', text: ['Dark roast', 'Medium roast', 'Light roast'], checked: [false, false, false], },
      { id: 2, name: 'ORIGIN', text: ['Italy', 'Ethiopia', 'Brazil'], checked: [false, false, false], },
      { id: 3, name: 'PACKAGE SIZE', text: ['250g', '500g', '1kg'], checked: [false, false, false], },
   ]

   // filter data


   if (!localStorage.getItem('filters-data')) {
      localStorage.setItem('filters-data', JSON.stringify(FILTERDATA));
   }

   const [filtersData, setFiltersData] = useState(JSON.parse(localStorage.getItem('filters-data')))


   useEffect(() => {
      localStorage.setItem('filter-values', JSON.stringify(options));
      console.log('Сохранено в LS:', options);
   }, [options])



   useEffect(() => {
      localStorage.setItem('filters-data', JSON.stringify(filtersData));
      console.log('Сохранено в LS:', options);
   }, [filtersData])


   function addOptions(e) {
      e.preventDefault();

      let optionLocal = e.target.id;

      let localFiltersDataArray = structuredClone(filtersData);

      localFiltersDataArray.map((el) => {
         let elementIndex = 0;
         if (el.text.includes(optionLocal)) {
            elementIndex = el.text.indexOf((optionLocal));
            console.log(elementIndex);

            if (el.checked[elementIndex] === false) {
               el.checked[elementIndex] = true;
            } else {
               el.checked[elementIndex] = false;
            }

            console.log(filtersData)

         }
         setFiltersData(localFiltersDataArray);
      })


      if (options.includes(optionLocal)) {
         setOptions((prevOptions) => prevOptions.filter((el) => el !== optionLocal));
         e.target.classList.remove('chek');

      } else {
         setOptions((prevOptions) => [...prevOptions, optionLocal]);
         console.log(e.target);
         e.target.classList.add('chek');
      }
      console.log(options);
   }



   return (
      <div className="catalog">
         <section className="catalog__intro _container">
            <h1 className="catalog__title">
               OUR COFFEE
            </h1>
            <p className="catalog__subtitle">
               Freshly roasted blends, sourced from small farms and ground to order. Filter by roast, origin or price to find your cup.
            </p>
         </section>

         <section className="catalog__toolbar _container">
            <div className="catalog__search">
               <input type="text" className="catalog__search-input" placeholder="🔍 Search coffee by name..." />
            </div>
            <div className="catalog__toolbar-right">
               <div className="catalog__count">
                  24 products
               </div>
               <SortDropdown value={sortBy} onChange={setSortBy} />
            </div>
         </section>

         <section className="catalog__filters _container">
            <div className="catalog__filters-inner">

               {/*                <div className="filter-group">

                  <h2 className='roast-type filter-group__title'>ROAST TYPE</h2>
                  <ul className='roast-type__ul ul-roast'>
                     <li className="ul-roast__li li-element dark">
                        <a id='Dark roast' href='#' onClick={addOptions} className="li-element__square "></a>
                        <div className="li-element__text">Dark roast</div>
                     </li>
                     <li className="ul-roast__li medium">
                        <a id='Medium roast' href='#' onClick={addOptions} className="li-element__square "></a>
                        <div className="li-element__text">Medium roast</div>
                     </li>
                     <li className="ul-roast__li light">
                        <a id='Light roast' href='#' onClick={addOptions} className="li-element__square "></a>
                        <div className="li-element__text">Light roast</div>
                     </li>
                  </ul>
               </div> */}

               {filtersData.map((el) => (
                  <RightFilterCard key={el.id} element={el} addOptions={addOptions} />
               ))}

               {/*  <div className="filter-group">
                  <h2 className="filter-group__title">ORIGIN</h2>

                  <ul className='roast-type__ul ul-roast'>
                     <li className="ul-roast__li li-element dark">
                        <a id='Italy' href='#' onClick={addOptions} className="li-element__square "></a>
                        <div className="li-element__text">Italy</div>
                     </li>
                     <li className="ul-roast__li medium">
                        <a id='Ethiopia' href='#' onClick={addOptions} className="li-element__square "></a>
                        <div className="li-element__text">Ethiopia</div>
                     </li>
                     <li className="ul-roast__li light">
                        <a id='Brazil' href='#' onClick={addOptions} className="li-element__square "></a>
                        <div className="li-element__text">Brazil</div>
                     </li>
                  </ul>
               </div>

               <div className="filter-group">
                  <h2 className="filter-group__title">PACKAGE SIZE</h2>

                  <ul className='roast-type__ul ul-roast'>
                     <li className="ul-roast__li li-element dark">
                        <a id='250g' href='#' onClick={addOptions} className="li-element__square "></a>
                        <div className="li-element__text">250g</div>
                     </li>
                     <li className="ul-roast__li medium">
                        <a id='500g' href='#' onClick={addOptions} className="li-element__square "></a>
                        <div className="li-element__text">500g</div>
                     </li>
                     <li className="ul-roast__li light">
                        <a id='1kg' href='#' onClick={addOptions} className="li-element__square "></a>
                        <div className="li-element__text">1kg</div>
                     </li>
                  </ul>

               </div> */}

               <div className="filter-group filter-group--price">
                  <h2 className="filter-group__title">PRICE RANGE</h2>
                  <div className="filter-group__line"></div>
                  <div className="filter-group__price-inputs">
                     <input type="text" className="filter-group__price-input filter-group__price-input--start" placeholder="$5" />
                     <input type="text" className="filter-group__price-input filter-group__price-input--end" placeholder="$40" />
                  </div>
               </div>

               <button className="catalog__clear-btn">Clear all filters</button>

            </div>
            <div className="right-part">
               <div className="right-part__filter-products">
                  {options.map((el) => (
                     <FilterCards key={el} element={el} addOptions={addOptions} />
                  ))}
               </div>
               <div className="right-part__cards-area">
                  {coffeeCard.map((el) => (
                     <Card key={el.name} element={el} />
                  ))}
               </div>
            </div>
         </section>



      </div>
   );
}

export default CatalogPage;