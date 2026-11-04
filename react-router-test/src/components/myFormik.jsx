import { Formik, useFormik } from 'formik';
import CardToCart from './cardToCart';
import { useContext } from 'react';
import { CartContext } from '../context/cartContext';
import Cart from './cart';
import Banknote from '../assets/banknote.png'
import money from '../assets/money.svg'
import apple from '../assets/apple-pay.png'
import card from '../assets/card-bank1.svg'




function MyFormik() {

   // hook 

   const formik = useFormik({
      initialValues: {
         email: '',
         name: '',
      },
      validate: (values) => {
         const errors = {};

         if (!values.name) {
            errors.name = 'Required'
         } else if (values.name.length > 15) {
            errors.name = 'Must be less then 15'
         }

         if (!values.email) {
            errors.email = 'Required'
         } else if (!email.includes('@')) {
            errors.email = 'Invalid'
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
                     <label htmlFor="exampleInputName1" className="form-label">First name</label>
                     <input type="text"
                        className="form-input"
                        name='name'
                        id="exampleInputName1"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                     />
                  </div>

                  <div className="form-group">
                     <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                     <input type="email"
                        className="form-input"
                        name='email'

                        id="exampleInputEmail1"
                        value={formik.values.email}
                        onChange={formik.handleChange}

                        aria-describedby="emailHelp"
                     />
                  </div>

                  <div className="form-group">
                     <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                     <input type="email"
                        className="form-input"
                        name='email'

                        id="exampleInputEmail1"
                        value={formik.values.email}
                        onChange={formik.handleChange}

                        aria-describedby="emailHelp"
                     />
                  </div>

                  <h2 className="form-title">Enter your city and postcode</h2>

                  <div className="form-title__row-block">
                     <div className="form-group">
                        <label htmlFor="exampleInputName1" className="form-label">First name</label>
                        <input type="text"
                           className="form-input"
                           name='name'
                           id="exampleInputName1"
                           value={formik.values.name}
                           onChange={formik.handleChange}
                        />
                     </div>
                     <div className="form-group">
                        <label htmlFor="exampleInputName1" className="form-label">First name</label>
                        <input type="text"
                           className="form-input"
                           name='name'
                           id="exampleInputName1"
                           value={formik.values.name}
                           onChange={formik.handleChange}
                        />
                     </div>
                  </div>

                  <h2 className="form-title">Choose payment method</h2>
                  <div className="payment">
                     <button className="payment__block">
                        <img className='payment__icon' src={money} alt="" />
                        <div className="payment__text">Cash</div>
                     </button>
                     <button className="payment__block">
                        <img className='payment__icon' src={card} alt="" />
                        <div className="payment__text">Card</div>
                     </button>
                     <button className="payment__block">
                        <img className='payment__icon' src={apple} alt="" />
                        <div className="payment__text">Apple Pay</div>
                     </button>
                  </div>



                  <button type="submit" className="btn-submit">Buy</button>
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