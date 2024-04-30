/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Counter } from '../../../components'
import { decrement, increment, removeCart } from '../../../store/slices/cart'
import { useDispatch } from 'react-redux'

function CartProduct({ product }) {
  const { id, title, mainImage, model, price, qty } = product
  const dispatch = useDispatch()
  
  const handleRemove = () => {
    dispatch(removeCart(id))
  }

  const handleIncrement = () => {
    dispatch(increment(id))
  }

  const handleDecrement = () => {
    dispatch(decrement(id))
  }

  console.log(product)

  return (
    <div className="cart-main">
      <div className='cart-product'>
        <div className="cart-product__image">
          <img src={mainImage} alt={title} />
        </div>
        <div className="cart-product__content">
          <div className="cart-product__row">
            <p className="cart-product__title">{title}</p>
            <p className="cart-product__price">{price.toLocaleString()} UZS</p>
          </div>
          <div className="cart-product__row">
            <p className="cart-product__subtitle">{model}</p>
            <Counter onIncrement={handleIncrement} onDecrement={handleDecrement} count={qty} />
          </div>
          <div className="cart-product__row">
            <button className="cart-product__button" onClick={handleRemove}>Remove</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartProduct