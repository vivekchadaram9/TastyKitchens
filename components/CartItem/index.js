import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'
import {AiFillCloseCircle} from 'react-icons/ai'
import {FaRupeeSign} from 'react-icons/fa'
import CartContext from '../context/CartContext'

import './index.css'

const CartItem = props => (
  <CartContext.Consumer>
    {value => {
      const {deleteCartItem, addQuantity, decreaseQuantity} = value
      const {cartItemDetails} = props
      const {id, name, quantity, cost, imageUrl} = cartItemDetails
      const onDeleteCartItem = () => {
        deleteCartItem(id)
      }
      const onAddQuantity = () => {
        addQuantity(id)
      }
      const onDecreaseQuantity = () => {
        decreaseQuantity(id)
      }
      return (
        <li className="cart-item">
          <img className="cart-product-image" src={imageUrl} alt={name} />
          <div className="cart-item-details-container" testid="cartItem">
            <div className="cart-product-title-brand-container">
              <h1 className="cart-product-title">{name}</h1>
            </div>
            <div className="cart-quantity-container">
              <button
                testid="decrement-quantity"
                onClick={onDecreaseQuantity}
                type="button"
                className="quantity-controller-button"
              >
                <BsDashSquare color="#52606D" size={12} />
              </button>
              <p testid="item-quantity" className="cart-quantity">
                {quantity}
              </p>
              <button
                testid="increment-quantity"
                onClick={onAddQuantity}
                type="button"
                className="quantity-controller-button"
              >
                <BsPlusSquare color="#52606D" size={12} />
              </button>
            </div>
            <div className="total-price-delete-container">
              <p className="cart-total-price" testid="total-price">
                <FaRupeeSign /> {cost * quantity}/-
              </p>
            </div>
          </div>
          <button
            className="delete-button"
            type="button"
            onClick={onDeleteCartItem}
          >
            <AiFillCloseCircle color="#616E7C" size={20} />
          </button>
        </li>
      )
    }}
  </CartContext.Consumer>
)

export default CartItem
