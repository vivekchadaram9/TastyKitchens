import {Link} from 'react-router-dom'
import {BiRupee} from 'react-icons/bi'

import CartContext from '../context/CartContext'

import './index.css'

const CartTotal = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let totalOrderCost = 0
      cartList.forEach(eachCartItem => {
        totalOrderCost += eachCartItem.cost * eachCartItem.quantity
      })

      return (
        <>
          <hr />
          <div className="cart-summary-container">
            <h1 className="order-total-value">Order Total:</h1>
            <div className="total-container" testid="total-price">
              <p className="total">
                <BiRupee /> {totalOrderCost}
              </p>
              <Link to="/payment">
                <button type="button" className="order-button">
                  Place Order
                </button>
              </Link>
            </div>
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartTotal
