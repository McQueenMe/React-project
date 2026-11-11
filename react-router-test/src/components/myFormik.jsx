import { Formik, useFormik } from 'formik';
import CardToCart from './cardToCart';
import { useContext, useState } from 'react';
import { CartContext } from '../context/cartContext';
import Cart from './cart';
import Banknote from '../assets/banknote.png'
import money from '../assets/money.svg'
import apple from '../assets/apple-pay.png'
import card from '../assets/card-bank1.svg'
import emailjs from '@emailjs/browser';
import 'bootstrap/dist/css/bootstrap.min.css'
import { coffee } from '../data/coffee-obj'

import imgLogo from '../assets/lavazza-red/product1.svg'



function MyFormik() {


   const [isActiveButton, setActiveButton] = useState('1');
   const { cart, setCart } = useContext(CartContext);
   const [toast, setToast] = useState(false);


   let summ = 0;

   for (let i = 0; i < cart.length; i++) {
      let summLocal = (cart[i].price * cart[i].count).toFixed(2);

      summ = Number(summ) + Number(summLocal);

   }


   // hook 

   const formik = useFormik({
      initialValues: {
         email: '',
         name: '',
         tel: '',
         city: '',
         post: '',
         method: isActiveButton,
      },
      validate: (values) => {
         const errors = {};
         const regex = /\d/;

         if (!values.name) {
            errors.name = 'Required name'
         } else if (values.name.length > 15 || regex.test(values.name)) {
            errors.name = 'Please normal name'
         }

         if (!values.email) {
            errors.email = 'Required email'
         } else if (!values.email.includes('@') || (!values.email.includes('.'))) {
            errors.email = 'Invalid email'
         }

         if (!values.tel) {
            errors.tel = 'You dont have a tel?'
         } else if (values.tel.length < 10 || values.tel.length > 13 || !Number(values.tel)) {
            errors.tel = 'Invalid number'
         }

         if (!values.city) {
            errors.city = 'U bomsh'
         } else if (values.city.length < 2) {
            errors.city = 'Live'
         }

         if (!values.post) {
            errors.post = 'U bomsh'
         } else if (values.post.length < 2 || !Number(values.post)) {
            errors.post = 'No problem'
         }

         return errors
      },
      onSubmit: (values, action) => {

         if (cart.length < 1) {
            alert('Your cart is empthy')
         } else {
            const itemsRowsHTML = cart
               .map((item) => {
                  const coffeeData = coffee.find(c => c.id === Number(item.elId)) || {};
                  const productName = coffeeData.name || `Coffee Product #${item.elId}`;
                  const itemTotal = (Number(item.price) * item.count).toFixed(2);

                  const imgSrc =
                     item.elId === 1 ? "https://res.cloudinary.com/ldiul6b6/image/upload/v1794391599/lavazza1.png"
                        : item.elId === 2 ? "https://res.cloudinary.com/ldiul6b6/image/upload/v1794391576/bonney1.png"
                           : item.elId === 3 ? "https://res.cloudinary.com/ldiul6b6/image/upload/v1794391553/pul.png"
                              : item.elId === 4 ? "https://res.cloudinary.com/ldiul6b6/image/upload/v1794391517/lavazza-blue.png"
                                 : item.elId === 5 ? "https://res.cloudinary.com/ldiul6b6/image/upload/v1794391476/lavazza3-best1.png"
                                    : item.elId === 6 ? "https://res.cloudinary.com/ldiul6b6/image/upload/f_auto,q_auto/product2"
                                       : "";

                  const imgTagHTML = `
                  <a href="#" target="_blank" style="text-decoration: none; display: block;">
                     <img src="${imgSrc}" alt="${productName}" width="50" style="display: block; width: 50px; max-width: 50px; height: auto; border-radius: 6px; border: 0;" />
                  </a>
               `;

                  return `
               <tr style="border-bottom: 1px solid #2a2a36;">
                  <!-- 1. Картинка -->
                  <td style="padding: 12px 0; width: 60px; text-align: left; vertical-align: middle;">
                     ${imgTagHTML}
                  </td>
                  
                  <!-- 2. Описание товара -->
                  <td style="padding: 12px 8px; text-align: left; vertical-align: middle;">
                     <div style="font-size: 15px; font-weight: 600; color: #ffffff; margin-bottom: 4px; line-height: 1.3;">
                        ${productName}
                     </div>
                     <div style="font-size: 12px; color: #8892b0;">
                        Size: <span style="color: wheat; font-weight: 500;">${item.size || 'std'}</span>
                        <span style="color: #2a2a36; margin: 0 6px;">|</span>
                        QTY: <span style="color: #ffffff; font-weight: 500;">${item.count}</span>
                     </div>
                  </td>
                  
                  <!-- 3. Цена -->
                  <td style="padding: 12px 0; text-align: right; vertical-align: middle; width: 80px; font-size: 15px; font-weight: bold; color: wheat;">
                     $${itemTotal}
                  </td>
               </tr>
               `;
               })
               .join('');

            const itemsListHTML = `
            <table role="presentation" style="width: 100%; border-collapse: collapse;">
               ${itemsRowsHTML}
            </table>
         `;


            const templateParams = {
               order_id: Math.floor(100000 + Math.random() * 900000),
               name: values.name,
               email: values.email,
               tel: values.tel,
               city: values.city,
               post: values.post,
               method: isActiveButton === '1' ? 'Cash' : isActiveButton === '2' ? 'Card' : 'Apple Pay',
               items_list: itemsListHTML,
               total_price: `${summ.toFixed(2)} $`,
            };

            emailjs.init('NRxrVAjx_RspJOjWw');

            emailjs.send('service_8emob99', 'template_mrb3o4f', templateParams, 'NRxrVAjx_RspJOjWw')
               .then((response) => {
                  console.log('SUCCESS!', response.status, response.text);
               })
               .catch((err) => console.error('FAILED...', err));

            action.resetForm();

            console.log(formik);

            setCart([]);
         }



      }


   })


   /*    const itemsListHTML = cart
         .map((item) => {
            const coffeeData =    coffee.find(c => c.id === Number(item.elId)) || {};
   
            console.log(coffeeData);
   
            const productName = coffeeData.name || `Coffee Product #${item.elId}`;
            const itemTotal = (Number(item.price) * item.count).toFixed(2);
   
            const textForImg = encodeURIComponent(productName);
   
            let localImg = <img src={coffeeData.img}></img>;
   
            console.log(localImg)
   
            const imgUrl = localImg;
         }) */


   function showSucced() {
      if (cart.length > 0) {
         setToast(true);

         setTimeout(() => {
            setToast(false);
         }, 5000);
      }
   }


   return (
      <>

         <div className="main-block__container">
            {toast ?
               <div style={{
                  position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
                  backgroundColor: 'rgba(11, 11, 16, 0.85)', display: 'flex',
                  justifyContent: 'center', alignItems: 'center', zIndex: 1000, backdropFilter: 'blur(5px)'
               }}>
                  <div style={{
                     backgroundColor: '#14141d', border: '1px solid #2a2a36', padding: '32px 24px',
                     borderRadius: '16px', textAlign: 'center', maxWidth: '340px', width: '90%',
                     boxShadow: '0 12px 40px rgba(0, 0, 0, 0.7)'
                  }}>
                     <div style={{ fontSize: '48px', marginBottom: '12px' }}>☕✨</div>
                     <h3 style={{ margin: '0 0 8px 0', color: 'wheat', fontSize: '20px', fontWeight: '600' }}>
                        Order Successful!
                     </h3>
                     <p style={{ margin: '0 0 24px 0', color: '#8892b0', fontSize: '14px', lineHeight: '1.5' }}>
                        Thanks, {formik.values.name || 'friend'}! We are already preparing your perfect coffee pack.
                     </p>
                     <button
                        onClick={() => setToast(false)}
                        style={{
                           width: '100%', padding: '12px', backgroundColor: 'wheat', color: '#0b0b10',
                           fontWeight: '700', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '14px'
                        }}
                     >
                        Got it!
                     </button>
                  </div>
               </div> : ''}
            <div className="form-container">
               <h2 className="form-title">Enter your information</h2>



               <form className="custom-form" onSubmit={formik.handleSubmit}>

                  <div className="form-group">
                     <label htmlFor="exampleInputName1" className="form-label is-invalid">First name</label>
                     <input
                        type="text"
                        className={`form-control form-input ${formik.touched.name
                           ? (formik.errors.name ? 'is-invalid' : 'is-valid')
                           : ''
                           }`}
                        name='name'
                        id="exampleInputName1"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                     />
                     {formik.touched.name && (
                        formik.errors.name
                           ? <div id="validationServer01Invalid" className="invalid-feedback">{formik.errors.name}</div>
                           : <div id="validationServer01Valid" className="valid-feedback">Good!</div>
                     )}
                  </div>

                  <div className="form-group">
                     <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                     <input type="email"
                        className={`form-control form-input ${formik.touched.email
                           ? (formik.errors.email ? 'is-invalid' : 'is-valid')
                           : ''
                           }`}
                        name='email'

                        id="exampleInputEmail1"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}

                        aria-describedby="emailHelp"
                     />
                     {formik.touched.email && (
                        formik.errors.email
                           ? <div id="validationServer01Invalid" className="invalid-feedback">{formik.errors.email}</div>
                           : <div id="validationServer01Valid" className="valid-feedback">Looks great!</div>
                     )}
                  </div>

                  <div className="form-group">
                     <label htmlFor="exampleInputTel" className="form-label">Phone number</label>
                     <input type="tel"
                        className={`form-control form-input ${formik.touched.tel
                           ? (formik.errors.tel ? 'is-invalid' : 'is-valid')
                           : ''
                           }`}
                        name='tel'

                        id="exampleInputTel"
                        value={formik.values.tel}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        aria-describedby="emailHelp"
                     />
                     {formik.touched.tel && (
                        formik.errors.tel
                           ? <div id="validationServer01Invalid" className="invalid-feedback">{formik.errors.tel}</div>
                           : <div id="validationServer01Valid" className="valid-feedback">Good!</div>
                     )}
                  </div>

                  <h2 className="form-title">Enter your city and postcode</h2>

                  <div className="form-title__row-block">
                     <div className="form-group">
                        <label htmlFor="exampleInputCity" className="form-label">City name</label>
                        <input type="text"
                           className={`form-control form-input ${formik.touched.city
                              ? (formik.errors.city ? 'is-invalid' : 'is-valid')
                              : ''
                              }`}
                           name='city'
                           id="exampleInputCity"
                           value={formik.values.city}
                           onChange={formik.handleChange}
                           onBlur={formik.handleBlur}

                        />
                        {formik.touched.city && (
                           formik.errors.city
                              ? <div id="validationServer01Invalid" className="invalid-feedback">{formik.errors.name}</div>
                              : <div id="validationServer01Valid" className="valid-feedback">Good!</div>
                        )}
                     </div>
                     <div className="form-group">
                        <label htmlFor="exampleInputPost" className="form-label">Post name</label>
                        <input type="text"
                           className={`form-control form-input ${formik.touched.post
                              ? (formik.errors.post ? 'is-invalid' : 'is-valid')
                              : ''
                              }`}
                           name='post'
                           id="exampleInputPost"
                           onBlur={formik.handleBlur}

                           value={formik.values.post}
                           onChange={formik.handleChange}
                        />

                        {formik.touched.post && (
                           formik.errors.post
                              ? <div id="validationServer01Invalid" className="invalid-feedback">{formik.errors.post}</div>
                              : <div id="validationServer01Valid" className="valid-feedback">Good!</div>
                        )}
                     </div>
                  </div>

                  <h2 className="form-title">Choose payment method</h2>

                  <div className="payment">
                     <button id='1' type='button' className={isActiveButton == 1 ? "payment__block active-btn" : 'payment__block'} onClick={() => setActiveButton('1')}>
                        <img className='payment__icon' src={money} alt="" />
                        <div className="payment__text">Cash</div>
                     </button>
                     <button id='2' type='button' className={isActiveButton == 2 ? "payment__block active-btn" : 'payment__block'} onClick={() => setActiveButton('2')}>
                        <img className='payment__icon' src={card} alt="" />
                        <div className="payment__text">Card</div>
                     </button>
                     <button id='3' type='button' className={isActiveButton == 3 ? "payment__block active-btn" : 'payment__block'} onClick={() => setActiveButton('3')}>
                        <img className='payment__icon' src={apple} alt="" />
                        <div className="payment__text">Apple Pay</div>
                     </button>
                  </div>



                  <button type="submit" className="btn-submit btn-solid theme-primary justify-self-start" onClick={showSucced}>Buy</button>

               </form>
            </div>
            <div className='card-block-formik'>
               <div className="card-block-formik__column">
                  {cart.length == 0 && (<div className="not-found-cart">
                     Your cart is empty
                  </div>)}
                  {cart.map((el, id) => (
                     <CardToCart key={id} cartElement={el} />

                  ))}
               </div>
               <div className="total-price-block">
                  <h2 className='total-price-title'>Total price:</h2>
                  <div className="total-price__price">{summ.toFixed(2) + ' $'}</div>
               </div>
            </div>

         </div>


      </>

   );

}

export default MyFormik;
