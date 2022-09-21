
import './cart.css';
import SideBar from '../SideBar/SideBar'

import img1 from './images/images.jpg'
function Cart() {
  return (
      <div className='cart'>
        <SideBar/>
      <div className="cartBody" style={{backgroundColor:'#EAE1E1'}}>

          <h1 className='cartHeader'>CART</h1> 
           <div className='container'>
            <div className='containerItems'>
              <img src={img1} alt='heels' className=''></img>
            </div>

            <div className='containerItems'>
              <h3 className='itemName'>Red Heels</h3>
              <h6 className='itemAvailability'>In Stock</h6>
              <h4 className='itemPrice'>R 150</h4>
            </div>
            <div className='containerItems' id='containerButtons'>
              <button className='minusButton'>-</button>
              <h5 className='count'>01</h5>
              <button className='plusButton'>+</button>
            </div>

          </div> 
    
        </div> 

        {/* <div className='bottom'>
          <div className='bottomContainer'>
            <div className='bottomItems' id='totalItems'>
              <h4>Items total</h4>
              <h4>Delivery</h4>
              <h4>Total</h4>
            </div>
            <h1 className='line'></h1>
            <div className='bottomItems' id='totalPrices'>
              <h4>R 365</h4>
              <h4>R 567</h4>
              <h4>R 346</h4>
            </div>
          </div>
          <button>Check out</button>
        </div> */}
      </div>


  )
}

export default Cart