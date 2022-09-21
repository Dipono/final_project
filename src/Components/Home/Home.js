import './Home.css'
import SideBar from '../SideBar/SideBar'
import filter from '../assets/icons/edit.png'
import starRating from '../assets/icons/star.png'
import cart from '../assets/icons/cart-svgrepo-com.svg'
import { useSelector, useDispatch } from 'react-redux';
import { displayProduct,addedToCart } from '../features/products';
import {increment,decrement,amountDecrement,amountIncrement} from '../features/counter'

import producData from '../data/productData'
import { useEffect, useState } from 'react'
function Home() {

    const product = useSelector((state) => state.product.products);
	const cartItem = useSelector((state) => state.product.cartItems);
	const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(displayProduct(producData))
        console.log(cartItem)
    })

    function add_to_cart(data){
		dispatch(increment())
		dispatch(amountIncrement(data.price))
		dispatch(addedToCart(data));
	}

    return (
        <div className='homePage'>
            <SideBar />
            <div style={{ backgroundColor: 'rgba(234, 225, 225, 1)', backgroundAttachment: 'fixed', minHeight: '95vh', paddingTop: '50px' }} className="homeHeader">
                <div style={{ textAlign: 'center' }}>
                    <h1 style={{ fontFamily: 'Emblema One', fontSize: '36px' }}>BIRIBIRI</h1>
                    <div className='home-search'>
                        <input type="text" placeholder='search product' style={{ textIndent: '15px', fontSize: '20px', width: '50vw', height: '48px', borderRadius: '10px' }} />
                        <div className='home-filter'>
                            <img src={filter} alt="filter" />
                        </div>
                    </div>
                </div>

                <div className='home-content' style={{ textAlign: 'center' }}>
                    <div className='home-categories' style={{ display: 'flex', justifyContent: 'center' }}>
                        <div style={{ backgroundColor: 'rgba(255, 255, 255, 1)' }} className='home-cat-item'>
                            <label style={{ fontSize: '40px', fontFamily: 'Engagement' }}>Trending</label>
                        </div>
                        <div style={{ backgroundColor: 'rgba(255, 255, 255, 1)' }} className='home-cat-item'>
                            <label style={{ fontSize: '40px', fontFamily: 'Engagement' }}>Women</label>
                        </div>
                        <div style={{ backgroundColor: 'rgba(255, 255, 255, 1)' }} className='home-cat-item'>
                            <label style={{ fontSize: '40px', fontFamily: 'Engagement' }}>Men</label>
                        </div>
                        <div style={{ backgroundColor: 'rgba(255, 255, 255, 1)' }} className='home-cat-item'>
                            <label style={{ fontSize: '40px', fontFamily: 'Engagement' }}>Kids</label>
                        </div>
                    </div>

                    <div className='home-products' style={{ display: 'flex', }}>
                        {product.map((product, xid) => (
                            <div key={xid} style={{ paddingTop: '20px', width: '182.39px', minHeight: '200px', borderRadius: '12px', background: 'white', margin: '10px' }}>
                                <div>
                                    <img src={product.image} width='131.32' height='145.51' alt='Product Image' />
                                </div>
                                <div><label>{product.name}</label></div>
                                <div style={{ textAlign: 'left', margin: '8px', display: 'flex' }}>
                                    <img src={starRating} alt="start rating" height="20px" width="20px" />
                                    <label style={{ marginLeft: '5px' }} > 5</label>
                                </div>
                                <div style={{ display: 'flex', margin: '5px' }}>
                                    <div style={{ width: '60%', textAlign: 'left', margin: '8px' }}>
                                        <label><b>R {product.price}</b></label>
                                    </div>
                                    <div style={{ width: '86.33px', height: '36.66px', display: 'flex', textAlign: 'right', backgroundColor: '#FFBD5A', borderRadius: '15px' }} onClick={()=>{add_to_cart(product)}}>
                                        <img src={cart} alt="cart" height='20px' width='20px' style={{ margin: '8px' }} />
                                        <label style={{ margin: '8px' }}><b>Add</b></label>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Home;