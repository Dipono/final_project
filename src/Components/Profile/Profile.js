import './Profile.css'
import SideBar from '../SideBar/SideBar'
// import filter from '../assets/icons/edit.png'
// import starRating from '../assets/icons/star.png'
import cart from '../assets/icons/cart-svgrepo-com.svg'
// import notification from '../assets/images/undraw_my_notifications_re_ehmk.svg'
import { NavLink } from 'react-router-dom';
// import producData from '../data/productData'
// import { useEffect, useState } from 'react'
import profile from '../assets/icons/avatar-svgrepo-com.svg';
import edit from '../assets/icons/edit-svgrepo-com.svg'
import chev from '../assets/icons/right-thin-chevron-svgrepo-com.svg'
import notification from '../assets/icons/notification-svgrepo-com.svg'
import address from '../assets/icons/address-svgrepo-com.svg'
import payment from '../assets/icons/payment-svgrepo-com.svg'
import contact from '../assets/icons/contact-details-svgrepo-com.svg'
function Profile() {
    return (
        <div className='homePage'>
            <SideBar />
            <div style={{ backgroundColor: 'rgba(234, 225, 225, 1)', backgroundAttachment: 'fixed', minHeight: '95vh', paddingTop: '50px' }} className="homeHeader">
                <div style={{ textAlign: 'center' }}>
                    <h1 style={{ fontFamily: 'Emblema One', fontSize: '36px' }}>Profile</h1>

                </div>
                <div className='header'>
                    <div className="leftPanel">
                        <img src={profile} alt="avator" style={{ width: '10vw', height: '8vh' }} />
                    </div>
                    <div className="middelPanel"><h1>Biriviri</h1><h6>0123456789</h6></div>
                    <div className="leftRight"><img src={edit} alt="avator" style={{ width: '2.5vw' }} /></div>
                </div>
                <div className='itemsList'>
                    <div className='items'>

                        <div className="lefticon">
                            <img src={cart} alt="cart" style={{ width: '2vw' }} />
                        </div>
                        <div className="middelItem">
                            <NavLink to={'/order'}  className='navlint'><h3>My Orders</h3></NavLink>
                        </div>
                        <div className="rightIcon"><img src={chev} alt="avator" style={{ width: '1vw' }} /></div>

                    </div>
                    <div className='items'>

                        <div className="lefticon">
                            <img src={notification} alt="cart" style={{ width: '2vw' }} />
                        </div>
                        <div className="middelItem">
                           <NavLink to={'/notification'} className='navlint'><h3>Notifications</h3></NavLink></div>
                        <div className="rightIcon"><img src={chev} alt="avator" style={{ width: '1vw' }} /></div>

                    </div>
                    <div className='items'>

                        <div className="lefticon">
                            <img src={address} alt="cart" style={{ width: '2vw' }} />
                        </div>
                        <div className="middelItem"><h3>Address Book</h3></div>
                        <div className="rightIcon"><img src={chev} alt="avator" style={{ width: '1vw' }} /></div>

                    </div>
                    <div className='items'>

                        <div className="lefticon">
                            <img src={payment} alt="cart" style={{ width: '2vw' }} />
                        </div>
                        <div className="middelItem"><h3>Payment Method</h3></div>
                        <div className="rightIcon"><img src={chev} alt="avator" style={{ width: '1vw' }} /></div>

                    </div>
                    <div className='items'>

                        <div className="lefticon">
                            <img src={contact} alt="cart" style={{ width: '2vw' }} />
                        </div>
                        <div className="middelItem"><h3>Contact Details</h3></div>
                        <div className="rightIcon"><img src={chev} alt="avator" style={{ width: '1vw' }} /></div>

                    </div>
                </div>


            </div>




        </div>


    )
}

export default Profile;