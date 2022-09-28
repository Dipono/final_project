import './SideBar.css';
import profileImage from '../assets/icons/avatar-svgrepo-com.svg';
import sideBar from '../assets/icons/home-svgrepo-com.svg';
import sideCart from '../assets/icons/cart-svgrepo-com.svg';
import sideProfile from '../assets/icons/user.png';
import sideSearch from '../assets/icons/search.png';
import siderestaurant from '../assets/icons/restaurant-svgrepo-com.svg';
import { NavLink } from 'react-router-dom'

function SideBar() {

    return (
        <div className="side-bar">
            <div className="side-bar-profile">
                <div className="side-bar-profile-image">
                    <img src={profileImage} alt="profile" className='profileImage' />
                </div>
                <div className="side-bar-profile-title">
                    <label className='side-bar-name'><b>Biribiri Mlab</b></label>
                    <label className='side-bar-contact'>0123456789</label>
                </div>
            </div>

            <div className='side-bar-content'>
                <div className="side-bar-form-group">
                    <div className="side-bar-icon">
                        <NavLink to="/" className='navlink'>
                            <img src={sideBar} alt="sideBar" />
                        </NavLink>
                    </div>
                    <div className="side-bar-label">
                        <NavLink to="/" className='navlink'><label>Home</label></NavLink>
                    </div>
                </div>

                <div className="side-bar-form-group">
                    <div className="side-bar-icon">
                        <img src={sideSearch} alt="sideBar" />
                    </div>
                    <div className="side-bar-label">
                        <label>Search</label>
                    </div>
                </div>

                <div className="side-bar-form-group">
                    <div className="side-bar-icon">
                        <NavLink to="/cart" className='navlink'>
                            <img src={sideCart} alt="sideBar" />
                        </NavLink>
                    </div>
                    <div className="side-bar-label" >
                        <NavLink to="/cart" className='navlink'><label>Cart</label></NavLink>
                    </div>
                </div>

                <div className="side-bar-form-group">
                    <div className="side-bar-icon">
                        <NavLink to="/profile" className='navlink'>
                            <img src={sideProfile} alt="sideBar" />
                        </NavLink>
                    </div>
                    <div className="side-bar-label">
                        <NavLink to="/profile" className='navlink'><label>Profile</label></NavLink>
                    </div>
                </div>

                <div className="side-bar-form-group">
                    <div className="side-bar-icon">
                        <img src={siderestaurant} alt="sideBar" />
                    </div>
                    <div className="side-bar-label">
                        <label>restaurant</label>
                    </div>
                </div>
            </div>

            <div className="side-bar-footer">
                <button className='sign-out'>SIGN OUT</button>
            </div>


        </div>
    )
}

export default SideBar;