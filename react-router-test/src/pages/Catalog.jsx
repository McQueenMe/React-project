import { useState, useEffect } from 'react';
import SortDropdown from '../components/sortDropdown';
import Card from '../components/card';
import { coffee } from '../data/coffee-obj';
import FilterCards from '../components/filterCards';
import RightFilterCard from '../components/right-filter-card';

function CatalogPage() {
   const FILTERDATA = [
      { id: 1, name: 'ROAST TYPE', text: ['Dark roast', 'Medium roast', 'Light roast'], checked: [false, false, false], },
      { id: 2, name: 'ORIGIN', text: ['Italy', 'Ethiopia', 'Brazil'], checked: [false, false, false], },
      { id: 3, name: 'PACKAGE SIZE', text: ['250g', '500g', '1kg'], checked: [false, false, false], },
   ];

   const [sortBy, setSortBy] = useState('price-asc');
   const [searchTerm, setSearchTerm] = useState(''); // Стейт для текста в инпуте

   // Стейт для выбранных кнопками опций
   const [options, setOptions] = useState(() => {
      localStorage.getItem('filter-values')
      const saved = localStorage.getItem('filter-values');
      return saved ? JSON.parse(saved) : { roast: [], origin: [], size: [], price_start: [], price_end: [] };
   });

   // Стейт для отображения галочек в чекбоксах
   const [filtersData, setFiltersData] = useState(() => {
      const saved = localStorage.getItem('filters-data');
      return saved ? JSON.parse(saved) : FILTERDATA;
   });

   // Синхронизация с LocalStorage
   useEffect(() => {
      localStorage.setItem('filter-values', JSON.stringify(options));
   }, [options]);

   useEffect(() => {
      localStorage.setItem('filters-data', JSON.stringify(filtersData));
   }, [filtersData]);


   // Функция клика по кнопкам фильтра (теперь занимается ТОЛЬКО стейтом кнопок)
   function addOptions(e) {
      e.preventDefault();

      if (e.target.id === 'price-start' || e.target.id === 'price-end') {
         console.log(e.target.value);


         let localOptionPrice = structuredClone(options);

         if (e.target.id === 'price-start') {
            if (e.target.value.length > 0) {
               localOptionPrice.price_start = Number(e.target.value);
            } else {
               localOptionPrice.price_start = 0;

            }
         }

         if (e.target.id === 'price-end') {
            if (e.target.value.length > 0) {
               localOptionPrice.price_end = Number(e.target.value);
            } else {
               localOptionPrice.price_end = 0;

            }
         }

         if (e.target.id === 'price-end' && e.target.value.length > 0) {
            localOptionPrice.price_end = Number(e.target.value);

         } else {
            localOptionPrice.price_end = 0;

         }

         setOptions(localOptionPrice)



      } else {

         let optionLocal = e.target.id;
         console.log(optionLocal)

         // 1. Обновляем визуальные чекбоксы
         let localFiltersDataArray = structuredClone(filtersData);
         localFiltersDataArray.forEach((el) => {
            if (el.text.includes(optionLocal)) {
               let elementIndex = el.text.indexOf(optionLocal);
               el.checked[elementIndex] = !el.checked[elementIndex];
            }
         });
         setFiltersData(localFiltersDataArray);

         // 2. Обновляем выбранные категории в options
         let localOptions = structuredClone(options);
         let category = '';
         if (optionLocal.includes('roast')) {
            category = 'roast';
         } else if (optionLocal.includes('g') || optionLocal.includes('kg')) {
            category = 'size';
         } else {
            category = 'origin';
         }

         const targetArray = localOptions[category];
         if (targetArray.includes(optionLocal)) {
            localOptions[category] = targetArray.filter(el => el !== optionLocal);
         } else {
            localOptions[category].push(optionLocal);
         }
         setOptions(localOptions);


      }


   }

   function clearAllFilters() {
      setSearchTerm(''); // Очищаем текстовый поиск
      setOptions({ roast: [], origin: [], size: [], price_start: 0, price_end: Infinity }); // Сбрасываем выбранные опции и цены
      setFiltersData(FILTERDATA); // Гасим все галочки в чекбоксах
   }

   // =========================================================================
   // 🔥 ГЛАВНАЯ МАГИЯ: ЕДИНАЯ ФИЛЬТРАЦИЯ «НА ЛЕТУ» ДЛЯ ВСЕГО
   // =========================================================================
   const filteredCoffeeProducts = coffee.filter((item) => {
      // 1. Проверяем текстовый поиск (имя должно включатьsearchTerm)
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());

      // 2. Проверяем фильтр по обжарке (если в массиве пусто — подходят все, если нет — только совпадения)
      const matchesRoast = options.roast.length === 0 || options.roast.includes(item.roast);

      // 3. Проверяем фильтр по стране
      const matchesOrigin = options.origin.length === 0 || options.origin.includes(item.origin);

      // 4. Проверяем фильтр по размеру пакета
      const matchesSize = options.size.length === 0 || options.size.includes(item.size[0].size) || options.size.includes(item.size[1].size) || options.size.includes(item.size[2].size);

      const matchPriceLeft = options.price_start === 0 || options.price_start < item.size[0].price;

      const matchPriceRight = options.price_end === 0 || options.price_end > item.size[0].price;




      // Карточка проходит, только если ВСЕ 4 условия вернули true
      return matchesSearch && matchesRoast && matchesOrigin && matchesSize && matchPriceLeft && matchPriceRight;
   });

   return (
      <div className="catalog">
         <section className="catalog__intro _container">
            <h1 className="catalog__title">OUR COFFEE</h1>
            <p className="catalog__subtitle">
               Freshly roasted blends, sourced from small farms and ground to order. Filter by roast, origin or price to find your cup.
            </p>
         </section>

         <section className="catalog__toolbar _container">
            <div className="catalog__search">
               {/* 🔥 Привязываем инпут к стейту searchTerm */}
               <input
                  type="text"
                  className="catalog__search-input"
                  placeholder="🔍 Search coffee by name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
               />
            </div>
            <div className="catalog__toolbar-right">
               {/* Выводим количество отфильтрованных товаров динамически */}
               <div className="catalog__count">
                  {filteredCoffeeProducts.length} products
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
                     <input onChange={addOptions} id='price-start' type="text" className="filter-group__price-input filter-group__price-input--start" placeholder="$5" />
                     <input onChange={addOptions} id='price-end' type="text" className="filter-group__price-input filter-group__price-input--end" placeholder="$40" />
                  </div>
               </div>
               <button className="catalog__clear-btn" onClick={clearAllFilters}>Clear all filters</button>
            </div>

            <div className="right-part">
               <div className="right-part__filter-products">
                  {[...options.roast, ...options.origin, ...options.size].map((el) => (
                     <FilterCards key={el} element={el} addOptions={addOptions} />
                  ))}
               </div>
               <div className="right-part__cards-area">
                  {/* 🔥 Рендерим наш автоматически отфильтрованный массив */}
                  {filteredCoffeeProducts.map((el) => (
                     <Card key={el.name} element={el} />
                  ))}
               </div>
            </div>
         </section>
      </div>
   );
}

export default CatalogPage;
