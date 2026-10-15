import blackImg from '../assets/lavazza1.png';
import lavJng from '../assets/lavazza-blue.png';
import grandImg from '../assets/bonney1.png';
import pulImg from '../assets/pul.png';
import redImg from '../assets/lavazza2.svg';
import lavazzaBlue from '../assets/product1.svg';




export const coffee = [
   {
      id: 1,
      name: 'Lavazza Black',
      img: blackImg,
      origin: 'Italy',
      roast: 'Medium roast',
      description: 'A bold, full-bodied espresso blend with notes of dark chocolate and roasted nuts. Perfect for those who love an intense morning kick.',
      size: [
         { size: '250g', price: 12.99, oldPrice: 15.99 },
         { size: '500g', price: 22.99, oldPrice: 27.99 },
         { size: '1kg', price: 39.99, oldPrice: 47.99 },
      ],
   },
   {
      id: 2,
      name: 'Grand Coffee',
      img: grandImg,
      origin: 'Brazil',
      roast: 'Dark roast',
      description: 'A smooth medium roast with a balanced flavor profile — hints of caramel and toasted almond, easy on the palate any time of day.',
      size: [
         { size: '250g', price: 9.99, oldPrice: 12.99 },
         { size: '500g', price: 17.99, oldPrice: 22.99 },
         { size: '1kg', price: 31.99, oldPrice: 38.99 },
      ],
   },
   {
      id: 3,
      name: 'Pull Coffee',
      img: pulImg,
      origin: 'Ethiopia',
      roast: 'Light roast',
      description: 'A light, aromatic roast with bright citrus undertones and a clean, crisp finish. Ideal for pour-over or filter brewing.',
      size: [
         { size: '250g', price: 5.99, oldPrice: 7.99 },
         { size: '500g', price: 10.99, oldPrice: 13.99 },
         { size: '1kg', price: 19.99, oldPrice: 24.99 },
      ],
   },
   {
      id: 4,
      name: 'Lavazza Red',
      img: lavJng,
      origin: 'Italy',
      roast: 'Medium roast',
      description: 'A rich, aromatic blend with warm spice notes and a velvety crema — a classic Italian favorite for espresso lovers.',
      size: [
         { size: '250g', price: 5.99, oldPrice: 8.99 },
         { size: '500g', price: 10.99, oldPrice: 15.99 },
         { size: '1kg', price: 18.99, oldPrice: 26.99 },
      ],
   },
   {
      id: 5,
      name: 'Settecento espresso ricco',
      img: redImg,
      origin: 'Brazil',
      roast: 'Dark roast',
      description: 'A rich, aromatic blend with warm spice notes and a velvety crema — a classic Italian favorite for espresso lovers.',
      size: [
         { size: '250g', price: 8.99, oldPrice: 10.99 },
         { size: '500g', price: 12.99, oldPrice: 18.99 },
         { size: '1kg', price: 15.99, oldPrice: 26.99 },
      ],
   },
   {
      id: 6,
      name: 'Lavazza Blue Light',
      img: lavazzaBlue,
      origin: 'Ethiopia',
      roast: 'Light roast',
      description: 'A rich, aromatic blend with warm spice notes and a velvety crema — a classic Italian favorite for espresso lovers.',
      size: [
         { size: '250g', price: 5.99, oldPrice: 8.99 },
         { size: '500g', price: 10.99, oldPrice: 15.99 },
         { size: '1kg', price: 18.99, oldPrice: 26.99 },
      ],
   },
];