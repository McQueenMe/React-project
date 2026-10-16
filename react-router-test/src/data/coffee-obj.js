import blackImg from '../assets/lav-grey/lavazza1.png';
import lavJng from '../assets/lavazza-blue/lavazza-blue.png';
import grandImg from '../assets/bonney1.png';
import pulImg from '../assets/pul.png';
import redImg from '../assets/espresso-black/lavazza3-best1.png';
import lavazzaBlue from '../assets/lavazza-red/product2.png';

import espresso_black_4 from '../assets/espresso-black/lavazza-espresso-4.jpg';
import espresso_black_5 from '../assets/espresso-black/lavazza-best.png';
import espresso_black_front from '../assets/espresso-black/lavazza-espresso-front.png';


export const coffee = [
   {
      id: 1,
      name: 'Lavazza Black',
      img: blackImg,
      origin: 'Italy',
      roast: 'Dark roast',
      description: 'A bold, full-bodied espresso blend with notes of dark chocolate and roasted nuts. Perfect for those who love an intense morning kick.',
      brand: 'Lavazza',
      beanType: 'Arabica & Robusta',
      form: 'Whole beans',
      intensity: 4,
      acidity: 'Low',
      body: 'Full',
      flavorNotes: ['Dark chocolate', 'Roasted nuts'],
      brewMethods: ['Espresso', 'Moka pot'],
      rating: 4.7,
      reviews: 128,
      inStock: true,
      badge: null,
      sku: 'LVZ-BLK-001',
      liked: false,

      size: [
         { size: '250g', price: 9.00, oldPrice: 10.00 },  // Скидка 10%
         { size: '500g', price: 15.30, oldPrice: 18.00 }, // Скидка 15%
         { size: '1kg', price: 25.60, oldPrice: 32.00 },  // Скидка 20%
      ],
      imgArray: [
         blackImg,
         espresso_black_5,
         espresso_black_front,
      ]
   },
   {
      id: 2,
      name: 'Grand Coffee',
      img: grandImg,
      origin: 'Brazil',
      roast: 'Medium roast',
      description: 'A smooth medium roast with a balanced flavor profile — hints of caramel and toasted almond, easy on the palate any time of day.',
      brand: 'Grand Coffee',
      beanType: 'Arabica',
      form: 'Whole beans',
      intensity: 3,
      acidity: 'Medium',
      body: 'Medium',
      flavorNotes: ['Caramel', 'Toasted almond'],
      brewMethods: ['Espresso', 'Drip', 'French press'],
      rating: 4.5,
      reviews: 86,
      inStock: true,
      badge: 'Sale',
      sku: 'GRD-COF-002',
      liked: false,

      size: [
         { size: '250g', price: 9.35, oldPrice: 11.00 },  // Скидка 15%
         { size: '500g', price: 16.00, oldPrice: 20.00 }, // Скидка 20%
         { size: '1kg', price: 27.00, oldPrice: 36.00 },  // Скидка 25%
      ],
      imgArray: [
         grandImg,
         espresso_black_5,
         espresso_black_front,
      ]
   },
   {
      id: 3,
      name: 'Pull Coffee',
      img: pulImg,
      origin: 'Ethiopia',
      roast: 'Light roast',
      description: 'A light, aromatic roast with bright citrus undertones and a clean, crisp finish. Ideal for pour-over or filter brewing.',
      brand: 'Pull Coffee',
      beanType: 'Arabica',
      form: 'Whole beans',
      intensity: 2,
      acidity: 'High',
      body: 'Light',
      flavorNotes: ['Bright citrus', 'Crisp finish'],
      brewMethods: ['Pour-over', 'Filter', 'AeroPress'],
      rating: 4.6,
      reviews: 54,
      inStock: true,
      badge: 'New',
      sku: 'PLL-COF-003',
      liked: false,

      size: [
         { size: '250g', price: 12.60, oldPrice: 14.00 }, // Скидка 10%
         { size: '500g', price: 21.25, oldPrice: 25.00 }, // Скидка 15%
         { size: '1kg', price: 36.00, oldPrice: 45.00 },  // Скидка 20%
      ],
      imgArray: [
         pulImg,
         espresso_black_5,
         espresso_black_front,
      ]
   },
   {
      id: 4,
      name: 'Lavazza Red',
      img: lavJng,
      origin: 'Italy',
      roast: 'Medium roast',
      description: 'A medium-roasted Italian blend of arabica and robusta with warm spice and cocoa notes and a velvety crema. A classic for espresso and moka pot lovers.',
      brand: 'Lavazza',
      beanType: 'Arabica & Robusta',
      form: 'Whole beans',
      intensity: 3,
      acidity: 'Medium',
      body: 'Full',
      flavorNotes: ['Warm spice', 'Cocoa'],
      brewMethods: ['Espresso', 'Moka pot'],
      rating: 4.8,
      reviews: 203,
      inStock: true,
      badge: 'Sale',
      sku: 'LVZ-RED-004',
      liked: false,

      size: [
         { size: '250g', price: 9.60, oldPrice: 12.00 },  // Скидка 20%
         { size: '500g', price: 16.50, oldPrice: 22.00 }, // Скидка 25%
         { size: '1kg', price: 28.00, oldPrice: 40.00 },  // Скидка 30%
      ],
      imgArray: [
         lavJng,
         espresso_black_5,
         espresso_black_front,
      ]
   },
   {
      id: 5,
      name: 'Settecento espresso',
      img: redImg,
      origin: 'Brazil',
      roast: 'Dark roast',
      description: 'A dark-roasted espresso blend built on Brazilian beans: low acidity, a heavy body and deep notes of warm spice and dark cocoa under a thick crema.',
      brand: 'Settecento',
      beanType: 'Arabica & Robusta',
      form: 'Whole beans',
      intensity: 5,
      acidity: 'Low',
      body: 'Full',
      flavorNotes: ['Warm spice', 'Dark cocoa'],
      brewMethods: ['Espresso'],
      rating: 4.4,
      reviews: 41,
      inStock: false,
      badge: null,
      sku: 'STC-ESP-005',
      liked: false,
      size: [
         { size: '250g', price: 7.20, oldPrice: 8.00 },  // Скидка 10%
         { size: '500g', price: 11.90, oldPrice: 14.00 }, // Скидка 15%
         { size: '1kg', price: 20.00, oldPrice: 25.00 },  // Скидка 20%
      ],
      imgArray: [
         redImg,
         espresso_black_4,
         espresso_black_5,
      ]
   },
   {
      id: 6,
      name: 'Lavazza Blue Light',
      img: lavazzaBlue,
      origin: 'Ethiopia',
      roast: 'Light roast',
      description: 'A light-roasted Ethiopian arabica with soft honey sweetness and a gentle hint of spice. Smooth and easy-drinking, ideal for drip, pour-over or moka pot.',
      brand: 'Lavazza',
      beanType: 'Arabica',
      form: 'Whole beans',
      intensity: 2,
      acidity: 'Medium',
      body: 'Light',
      flavorNotes: ['Honey', 'Soft spice'],
      brewMethods: ['Drip', 'Pour-over', 'Moka pot'],
      rating: 4.3,
      reviews: 37,
      inStock: true,
      badge: 'New',
      sku: 'LVZ-BLU-006',
      liked: false,
      size: [
         { size: '250g', price: 7.65, oldPrice: 9.00 },  // Скидка 15%
         { size: '500g', price: 12.80, oldPrice: 16.00 }, // Скидка 20%
         { size: '1kg', price: 21.75, oldPrice: 29.00 },  // Скидка 25%
      ],
      imgArray: [
         lavazzaBlue,
         espresso_black_5,
         espresso_black_front,
      ]
   },
];
