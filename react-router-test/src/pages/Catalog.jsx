import { useState } from 'react';
import SortDropdown from '../components/sortDropdown';
import Card from '../components/card';
import { coffee } from '../data/coffee-obj';
import FilterCards from '../components/filterCards';
import { useEffect } from 'react';
import RightFilterCard from '../components/right-filter-card';


function CatalogPage() {

   const [sortBy, setSortBy] = useState('price-asc');

   const [options, setOptions] = useState(() => {
      const saved = localStorage.getItem('filter-values');
      return saved ? JSON.parse(saved) : { roast: [], origin: [], size: [] };
   });

   const [filtersData, setFiltersData] = useState(JSON.parse(localStorage.getItem('filters-data')))
   const [coffeeCard, setCoffeeCards] = useState(coffee);
   const [filterCoffee, setFilterCoffee] = useState(JSON.parse(localStorage.getItem('choosen-filters-cards')).length > 0 ? JSON.parse(localStorage.getItem('choosen-filters-cards')) : coffee);

   const FILTERDATA = [
      { id: 1, name: 'ROAST TYPE', text: ['Dark roast', 'Medium roast', 'Light roast'], checked: [false, false, false], },
      { id: 2, name: 'ORIGIN', text: ['Italy', 'Ethiopia', 'Brazil'], checked: [false, false, false], },
      { id: 3, name: 'PACKAGE SIZE', text: ['250g', '500g', '1kg'], checked: [false, false, false], },
   ]

   if (!localStorage.getItem('filters-data')) {
      localStorage.setItem('filters-data', JSON.stringify(FILTERDATA));
   }

   useEffect(() => {
      localStorage.setItem('filter-values', JSON.stringify(options));
      console.log('Сохранено в LS:', options);
   }, [options])

   useEffect(() => {
      localStorage.setItem('filters-data', JSON.stringify(filtersData));
      console.log('Сохранено в LS:', options);
   }, [filtersData])

   useEffect(() => {
      localStorage.setItem('choosen-filters-cards', JSON.stringify(filterCoffee));
      console.log('Fuck, is this shit', filterCoffee);
   }, [filterCoffee])


   function addOptions(e) {
      e.preventDefault();
      let optionLocal = e.target.id;

      // --- 1. ОБНОВЛЕНИЕ ЧЕКБОКСОВ (filtersData) ---
      let localFiltersDataArray = structuredClone(filtersData);
      localFiltersDataArray.forEach((el) => {
         if (el.text.includes(optionLocal)) {
            let elementIndex = el.text.indexOf(optionLocal);
            el.checked[elementIndex] = !el.checked[elementIndex];
         }
      });
      setFiltersData(localFiltersDataArray);

      // --- 2. ОБНОВЛЕНИЕ ВЫБРАННЫХ ЗНАЧЕНИЙ (options) ---
      let localOptions = structuredClone(options);

      // Определяем, к какой категории относится кликнутый ID
      let category = '';
      if (optionLocal.includes('roast')) {
         category = 'roast';
      } else if (optionLocal.includes('g') || optionLocal.includes('kg')) {
         category = 'size';
      } else {
         category = 'origin';
      }

      // Добавляем или удаляем значение из конкретной категории
      const targetArray = localOptions[category];
      if (targetArray.includes(optionLocal)) {
         localOptions[category] = targetArray.filter(el => el !== optionLocal);
      } else {
         localOptions[category].push(optionLocal);
      }

      setOptions(localOptions);

      // logic for cards
      let localCardArray = structuredClone(coffeeCard);

      let arrayCard = [];

      localCardArray.forEach((element) => {

         localOptions.roast.forEach((el) => {

            if (element.roast === el) {

               arrayCard.push(element);

            }
            console.log(el)
         })

         localOptions.origin.forEach((el) => {

            if (element.origin === el) {

               arrayCard.push(element);

            }
            console.log(el)
         })


         localOptions.size.forEach((el) => {
            if (el.length > 0) {
               arrayCard.push(element)

            }
         })

         // console.log(arrayCard)


      })

      let uniqueArray = [...new Set(arrayCard)];

      if (uniqueArray.length > 0) {
         setFilterCoffee(uniqueArray);

      } else {
         setFilterCoffee(coffee)

      }



   }

   function enterCoffeeNames(e) {
      e.preventDefault();



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
               <input type="text" className="catalog__search-input" placeholder="🔍 Search coffee by name..." onClick={enterCoffeeNames} />
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

               {filtersData.map((el) => (
                  <RightFilterCard key={el.id} element={el} addOptions={addOptions} />
               ))}

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
                  {[...options.roast, ...options.origin, ...options.size].map((el) => (
                     <FilterCards key={el} element={el} addOptions={addOptions} />
                  ))}
               </div>
               <div className="right-part__cards-area">
                  {filterCoffee.map((el) => (
                     <Card key={el.name} element={el} />
                  ))}
               </div>
            </div>
         </section>



      </div>
   );
}

export default CatalogPage;