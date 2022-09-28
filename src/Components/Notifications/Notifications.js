import './Notifications.css'
import SideBar from '../SideBar/SideBar'
// import filter from '../assets/icons/edit.png'
// import starRating from '../assets/icons/star.png'
// import cart from '../assets/icons/cart-svgrepo-com.svg'
import notification from '../assets/images/undraw_my_notifications_re_ehmk.svg'
import {useNavigate} from 'react-router-dom'
// import producData from '../data/productData'
// import { useEffect, useState } from 'react'
function Notifications() {
    const navigate = useNavigate();  

    return (
        <div className='homePage'>
            <SideBar />
            <div style={{ backgroundColor: 'rgba(234, 225, 225, 1)', backgroundAttachment: 'fixed', minHeight: '95vh', paddingTop: '50px' }} className="homeHeader">
                <div style={{ textAlign: 'center' }}>
                    <h1 style={{ fontFamily: 'Emblema One', fontSize: '36px' }}>Notifications</h1>
                    
                </div>


                <div>
                     <img src={notification} alt='notifications' className="image"/>
                </div>
                <div className='notificationContainer'>
                <h2 style={{ fontFamily: 'Emblema One', fontSize: '16px' ,alignItems:'center'}}>You have no Notifications</h2>
                <br>
                </br>
                <button className="btnShopping" onClick={() => navigate('/')}>Start shopping</button>
                </div>
            </div>

                

                   
        </div>


    )
}

export default Notifications;