
import './cart.css';
import SideBar from '../SideBar/SideBar'
import { useSelector, useDispatch } from 'react-redux';
import { /* displayProduct */ removeToCart } from '../features/products';
//import { increment, decrement, amountDecrement, amountIncrement } from '../features/counter'
//import { useState } from 'react';
function Cart() {
  // come from the redux
  const cartItem = useSelector((state) => state.product.cartItems);
  const dispatch = useDispatch();
  // let [count, setCount] = useState([])
  // let [total, setTotal] = useState(0)

  function decreaseItemNumber(item) {
    console.log(item)
  }

  function increaseItemNumber(item) {
    console.log(item)
  }

  function cancelCart(cartItem) {
    console.log(cartItem)
    dispatch(removeToCart(cartItem))
  }

  return (
    <div className='cart'>
      <SideBar />
      <div>
      <div className="cartBody" style={{ backgroundColor: '#EAE1E1', minHeight: '50vh' }}>

<h1 className='cartHeader'>CART</h1>
<div className='container'>
  {/* Added mapper to loop through the items */}
  {cartItem.map((item, xid) => (
    // added div class to wrap all the items
    <div key={xid} className="cart-product-item">
      <div className='containerItems itemImage'>
        <img src={item.image} alt='heels' className=''></img>
      </div>

      <div className='containerItems itemData'>
        <h3 className='itemName'>{item.name}</h3>
        <h6 className='itemAvailability'>In Stock</h6>
        <h4 className='itemPrice'>R {item.price}</h4>
      </div>
      <div className='containerItems increaseDecrease' id='containerButtons'>
        <button className='minusButton xcount' onClick={() => decreaseItemNumber(item)}>-</button>
        <h5 className='count xcount'>01</h5>
        <button className='plusButton xcount' onClick={() => increaseItemNumber(item)}>+</button>
      </div>
      <div className='cancelCart' onClick={() => cancelCart(item)}>
        <label>X</label>
      </div>

    </div>
  ))}


</div>

</div>

<div className='bottom'>
<div className='bottomContainer'>
  <div className='bottomItems' id='totalItems'>
    <h4>Items total</h4>
    <h4>Delivery</h4>
    <h4>Total</h4>
  </div>
  <div className='bottomItems' id='totalPrices'>
    <h4>R 365</h4>
    <h4>R 567</h4>
    <h4>R 346</h4>
  </div>
</div>
<button>Check out</button>
</div>
      </div>
      
    </div>


  )
}

export default Cart