function CatalogPage() {

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
               <input type="checkbox" className="catalog__sort-toggle" value="" />
            </div>
         </section>

         <section className="catalog__filters _container">
            <div className="catalog__filters-inner">

               <div className="filter-group">
                  <h2 className="filter-group__title">ROAST TYPE</h2>
                  <label className="filter-group__option">
                     <input type="checkbox" className="filter-group__checkbox" /> Dark roast
                  </label>
                  <label className="filter-group__option">
                     <input type="checkbox" className="filter-group__checkbox" /> Medium roast
                  </label>
                  <label className="filter-group__option">
                     <input type="checkbox" className="filter-group__checkbox" /> Light roast
                  </label>
               </div>

               <div className="filter-group">
                  <h2 className="filter-group__title">ORIGIN</h2>
                  <label className="filter-group__option">
                     <input type="checkbox" className="filter-group__checkbox" /> Italy
                  </label>
                  <label className="filter-group__option">
                     <input type="checkbox" className="filter-group__checkbox" /> Ethiopia
                  </label>
                  <label className="filter-group__option">
                     <input type="checkbox" className="filter-group__checkbox" /> Brazil
                  </label>
               </div>

               <div className="filter-group">
                  <h2 className="filter-group__title">PACKAGE SIZE</h2>
                  <label className="filter-group__option">
                     <input type="checkbox" className="filter-group__checkbox" /> 250g
                  </label>
                  <label className="filter-group__option">
                     <input type="checkbox" className="filter-group__checkbox" /> 500g
                  </label>
                  <label className="filter-group__option">
                     <input type="checkbox" className="filter-group__checkbox" /> 1kg
                  </label>
               </div>

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
         </section>
      </div>
   );
}

export default CatalogPage;