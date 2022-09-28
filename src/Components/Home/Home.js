import './Home.css'
import SideBar from '../SideBar/SideBar'
import filter from '../assets/icons/edit.png'
import starRating from '../assets/icons/star.png'
import cart from '../assets/icons/cart-svgrepo-com.svg'
import { useSelector, useDispatch } from 'react-redux';
import { displayProduct, addedToCart } from '../features/products';
import { increment, /* decrement, amountDecrement,  */amountIncrement } from '../features/counter'

import producData from '../data/productData'
import { useEffect, useState } from 'react'
function Home() {

    const product = useSelector((state) => state.product.products);
    //const [isSearch, setIsSearch] = useState(false);
    const [SearchedItem, setSearchedItem] = useState([])
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(displayProduct(producData))
    })

    function add_to_cart(data) {
        dispatch(increment())
        dispatch(amountIncrement(data.price))
        dispatch(addedToCart(data));
        console.log(data)
    }

    function categorySearch(word) {
        var searchWord = word.target.value;

        var filterProduct = product.filter((value) => {
            return value.category.toLowerCase().includes(searchWord.toLowerCase());
        })

        console.log(filterProduct)
        setSearchedItem(filterProduct)

    }

    function selectedItem(item) {
        console.log(item)
    }


    return (
        <div className='homePage'>
            <SideBar />
            <div style={{ backgroundColor: 'rgba(234, 225, 225, 1)', backgroundAttachment: 'fixed', minHeight: '95vh', paddingTop: '50px' }} className="homeHeader">
                <div style={{ textAlign: 'center' }}>
                    <h1 style={{ fontFamily: 'Emblema One', fontSize: '36px' }}>BIRIBIRI</h1>
                    <div className='home-search'>
                        <div className='search-product'>
                            <input type="text" onChange={(event) => categorySearch(event)} placeholder='search product' style={{ textIndent: '15px', fontSize: '20px', width: '50vw', height: '48px', borderRadius: '10px' }} />
                            <div className='foundItem' style={{ width: '50vw' }}>
                                {SearchedItem.map((searched, xid) => (
                                    <div className='searchResults' key={xid} onClick={() => selectedItem(searched)}>
                                        <p >{searched.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className='home-filter'>
                            <img src={filter} alt="filter" />
                        </div>
                    </div>
                </div>

                <div className='home-content' style={{ textAlign: 'center' }}>
                    <div className='home-categories' style={{ display: 'flex', justifyContent: 'center' }}>
                        <div className='home-cat-item'>
                            <button className='home-cat-button' style={{ fontSize: '20px', fontFamily: 'Engagement' }}>Trending</button>
                        </div>
                        <div className='home-cat-item'>
                            <button className='home-cat-button' style={{ fontSize: '20px', fontFamily: 'Engagement' }}>Women</button>
                        </div>
                        <div className='home-cat-item'>
                            <button className='home-cat-button' style={{ fontSize: '20px', fontFamily: 'Engagement' }}>Men</button>
                        </div>
                        <div className='home-cat-item'>
                            <button className='home-cat-button' style={{ fontSize: '20px', fontFamily: 'Engagement' }}>Kids</button>
                        </div>
                    </div>

                    <div className='home-products' style={{ display: 'flex', }}>
                        {product.map((product, xid) => (
                            <div key={xid} style={{ paddingTop: '20px', width: '182.39px', minHeight: '200px', borderRadius: '12px', background: 'white', margin: '10px' }}>
                                <div>
                                    <img src={product.image} width='131.32' height='145.51' alt='ProductImage' />
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
                                    <div className='add-to-cart' style={{ width: '86.33px', height: '36.66px', display: 'flex', textAlign: 'right', backgroundColor: '#FFBD5A', borderRadius: '15px' }} onClick={() => { add_to_cart(product) }}>
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