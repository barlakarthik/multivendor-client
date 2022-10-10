import React from 'react'
import { Link } from 'react-router-dom';
const Latest = () => {
    return (
        <div className='latest-row'>
            <div className='latest-col'>
                <h2>New Fresh Products</h2>
                <div className='latest-products'>
                    <div className='latest-group'>
                        <div className='latest-header'>
                            {/* <img src='./assets/images/products/watermelon.jpg' alt='watermelon' /> */}
                            <img src='https://www.clipartmax.com/png/middle/93-936970_watermelon-png-transparent-images-transparent-background-watermelon-png.png' alt='watermelon' />
                        </div>
                        <div className='latest-body'>
                            <Link to='/'>Watermelon</Link>
                            <span>Fruit</span>
                            <span className='price'>2$</span>
                        </div>
                    </div>
                </div>

            </div>
            <div className='latest-col'>
                <h2>We provide support to newly registered sellers</h2>
                <div className='latest-sellers'>

                </div>
            </div>
        </div>
    )
}

export default Latest