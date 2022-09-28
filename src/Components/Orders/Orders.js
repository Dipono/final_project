import './Orders.css'
import SideBar from '../SideBar/SideBar'
// import filter from '../assets/icons/edit.png'
// import starRating from '../assets/icons/star.png'
// import cart from '../assets/icons/cart-svgrepo-com.svg'
import order from '../assets/images/undraw_empty_cart_co35.svg'
import { useNavigate } from 'react-router-dom'

// import producData from '../data/productData'
import { useEffect, useState } from 'react'
function Orders() {
    const navigate = useNavigate()

    const [/* OrderAvailable, */ setOrderAvailable] = useState(false)
    const ordered = [
        {
            refNo: 1234567895, quantity: 2, orderDate: '27 Sep 2022', items: [
                { productName: 'Cherry Cream Cheese', price: '58.23' },
                { productName: 'Cherry Cream Cheese', price: '58.23' }
            ]
        },
        {
            refNo: 1234531895, quantity: 2, orderDate: '27 Sep 2022', items: [
                { productName: 'Cherry Cream Cheese', price: '58.23' },
                { productName: 'Cherry Cream Cheese', price: '58.23' }
            ]
        },
    ]
    const CountOrder = 2
    useEffect(() => {
        if (CountOrder !== 0) {
            return setOrderAvailable(true)
        }
    })

    let orders = (
        <table>
            <tr>
                {ordered.map((order, xid) => (
                    <tr key={xid} className='order-card'>
                        <label className='refNo'><b>Reference Number</b>: {order.refNo} </label>

                        <thead>
                            <th><label className='productName'>Products</label></th>
                            <th><label className='productprice'>Price</label></th>
                        </thead>

                        {order.items.map((item, yid) => (
                            <tbody key={yid}>
                                <tr >
                                    <td><label className='productOrderName'>{item.productName}</label></td>
                                    <td><label className='productOrderPrice'>R{item.price}</label></td>

                                </tr>
                            </tbody>
                        ))}

                        <label className='orderDate'><b>Date</b>: {order.orderDate} </label>

                    </tr>
                ))}
            </tr>
        </table>
    )
    return (
        <div className='homePage'>
            <SideBar />
            <div style={{ backgroundColor: 'rgba(234, 225, 225, 1)', backgroundAttachment: 'fixed', minHeight: '95vh', paddingTop: '50px' }} className="homeHeader">
                <div style={{ textAlign: 'center' }}>
                    <h1 style={{ fontFamily: 'Emblema One', fontSize: '36px' }}>Order</h1>

                </div>

                {(CountOrder === 0) &&
                    (<div className='empty-order'>
                        <div>
                            <img src={order} alt='order' className="image" />
                        </div>
                        <div className='container'>
                            <h2 style={{ fontFamily: 'Emblema One', fontSize: '16px', alignItems: 'center' }}>You have no Order or Order History</h2>
                            <br>
                            </br>
                            <button className="btnShopping" onClick={() => navigate('/')} >Start shopping</button>
                        </div>
                    </div>)}

                {(CountOrder !== 0) && <span>{orders}</span>}

            </div>
        </div>


    )
}

export default Orders;