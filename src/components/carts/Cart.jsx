import React from 'react'
import './Cart.css'
const Cart = () => {
  return (
    <>
    <div className="Cart">
        <div className="CartLeft">
            {
                <img src="https://images.indianexpress.com/2021/09/amazon-google.jpeg" className='CartAd' alt="img" />
            }
            <div>
                <h1>Your Cart Is Empty </h1>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA6wDmBHRelg-UGHIXvf9ut-8VA6fCEAScMA&usqp=CAU" className='CartEmpty' alt="" />
            </div>
        </div>
    </div>
    </>
  )
}

export default Cart