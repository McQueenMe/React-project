import { useState, useRef, useEffect } from 'react';
import '../styles/components-styles/_sort-dropdown.scss';

const DEFAULT_OPTIONS = [
   { value: 'price-asc', label: 'Price — low to high' },
   { value: 'price-desc', label: 'Price — high to low' },
   { value: 'name-asc', label: 'Name A–Z' },
];

function SortDropdown({ value, onChange, options = DEFAULT_OPTIONS, label = 'Sort' }) {
   const [isOpen, setIsOpen] = useState(false);
   const dropdownRef = useRef(null);

   const selected = options.find((opt) => opt.value === value) || options[0];

   // закрытие по клику вне дропдауна и по Escape
   useEffect(() => {
      function handleClickOutside(e) {
         if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
            setIsOpen(false);
         }
      }

      function handleEscape(e) {
         if (e.key === 'Escape') setIsOpen(false);
      }

      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);

      return () => {
         document.removeEventListener('mousedown', handleClickOutside);
         document.removeEventListener('keydown', handleEscape);
      };
   }, []);

   const handleSelect = (optionValue) => {
      onChange(optionValue);
      setIsOpen(false);
   };

   return (
      <div className="sort-dropdown" ref={dropdownRef}>
         <button
            type="button"
            className="sort-dropdown__trigger"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-haspopup="listbox"
            aria-expanded={isOpen}
         >
            <span className="sort-dropdown__label">
               {label}: {selected.label}
            </span>
            <svg
               className={`sort-dropdown__arrow ${isOpen ? 'sort-dropdown__arrow--open' : ''}`}
               width="12"
               height="12"
               viewBox="0 0 24 24"
               fill="none"
               stroke="currentColor"
               strokeWidth="2"
            >
               <polyline points="6 9 12 15 18 9" />
            </svg>
         </button>

         {isOpen && (
            <ul className="sort-dropdown__list" role="listbox">
               {options.map((option) => (
                  <li
                     key={option.value}
                     role="option"
                     aria-selected={option.value === value}
                     className={`sort-dropdown__item ${option.value === value ? 'sort-dropdown__item--active' : ''
                        }`}
                     onClick={() => handleSelect(option.value)}
                  >
                     {option.label}
                  </li>
               ))}
            </ul>
         )}
      </div>
   );
}

export default SortDropdown;