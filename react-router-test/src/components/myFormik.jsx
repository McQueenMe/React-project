import { Formik, useFormik } from 'formik';
import CardToCart from './cardToCart';
import { useContext, useState } from 'react';
import { CartContext } from '../context/cartContext';
import Cart from './cart';
import Banknote from '../assets/banknote.png'
import money from '../assets/money.svg'
import apple from '../assets/apple-pay.png'
import card from '../assets/card-bank1.svg'
import 'bootstrap/dist/css/bootstrap.min.css'



function MyFormik() {


   const [isActiveButton, setActiveButton] = useState();

   // hook 

   const formik = useFormik({
      initialValues: {
         email: '',
         name: '',
         tel: '',
         city: '',
         post: '',
      },
      validate: (values) => {
         const errors = {};
         const regex = /\d/;

         if (!values.name) {
            errors.name = 'Required'
         } else if (values.name.length > 15 || regex.test(values.name)) {
            errors.name = 'Please normal name'
         }

         if (!values.email) {
            errors.email = 'Required'
         } else if (!values.email.includes('@') || (!values.email.includes('.'))) {
            errors.email = 'Invalid email'
         }

         if (!values.tel) {
            errors.tel = 'U dont have a tel?'
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
      onSubmit: (values) => {
         console.log('Values', values)
      },

   })

   const { cart } = useContext(CartContext);

   let summ = 0;

   for (let i = 0; i < cart.length; i++) {
      let summLocal = (cart[i].price * cart[i].count).toFixed(2);
      console.log(summLocal)

      summ = Number(summ) + Number(summLocal);

   }


   console.log(formik)

   return (
      <>
         <div className="main-block__container">
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
                     <button id='1' className={isActiveButton == 1 ? "payment__block active-btn" : 'payment__block'} onClick={() => setActiveButton('1')}>
                        <img className='payment__icon' src={money} alt="" />
                        <div className="payment__text">Cash</div>
                     </button>
                     <button id='2' className={isActiveButton == 2 ? "payment__block active-btn" : 'payment__block'} onClick={() => setActiveButton('2')}>
                        <img className='payment__icon' src={card} alt="" />
                        <div className="payment__text">Card</div>
                     </button>
                     <button id='3' className={isActiveButton == 3 ? "payment__block active-btn" : 'payment__block'} onClick={() => setActiveButton('3')}>
                        <img className='payment__icon' src={apple} alt="" />
                        <div className="payment__text">Apple Pay</div>
                     </button>
                  </div>



                  <button type="submit" className="btn-submit btn-solid theme-primary justify-self-start">Buy</button>

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