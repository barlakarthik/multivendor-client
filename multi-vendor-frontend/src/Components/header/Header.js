import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faShoppingBag, faShoppingCart, faHome, faCoins, faLock } from '@fortawesome/free-solid-svg-icons';
import '../pages/Home/Home.css';
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div className='header-row'>
            <div className='header-top'>
                <span><FontAwesomeIcon icon={faPhone} />+91 7989400868</span>
                <span><FontAwesomeIcon icon={faEnvelope} />karthikyadav1727@gmailcom</span>
            </div>
            <div className='header-menu'>
                <div className='header-logo'>
                    <Link to='/'><h2 className='header-logo-title'>Karthikyadav</h2></Link>
                </div>
                <div className='header-nav'>
                    <NavLink to='/'><FontAwesomeIcon icon={faHome} activeClassName='active' />Home</NavLink>
                    <NavLink to='/shop'><FontAwesomeIcon icon={faShoppingCart} />Shop</NavLink>
                    <NavLink to='/seller'><FontAwesomeIcon icon={faCoins} />Seller</NavLink>
                    {/* <a href='#' ><FontAwesomeIcon icon={faHome} />Home</a>
                    <a href='#'><FontAwesomeIcon icon={faShoppingCart} />Shop</a>
                    <a href='#'><FontAwesomeIcon icon={faCoins} />Seller</a> */}
                </div>
                <div className='header-action'>
                    <Link to='/cart'><FontAwesomeIcon icon={faShoppingBag} /><span className='header-cart-badge'>0</span></Link>
                    <Link to='/login'><FontAwesomeIcon icon={faLock} />Login</Link>

                    {/* <a href='#'><FontAwesomeIcon icon={faShoppingBag} /><span className='header-cart-badge'>0</span></a>
                    <a href='#'><FontAwesomeIcon icon={faLock} />Login</a> */}
                </div>
            </div>
        </div>
    )
}

export default Header