import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons'
const Slider = () => {
    return (
        <div className='slider-row'>
            <div className='slider-col'>
                <img src='https://mail.google.com/mail/u/0?ui=2&ik=82b7419683&attid=0.1.1&permmsgid=msg-f:1746212712405030415&th=183bcb35c92c560f&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ_cHJWWvzsn6FYcnNDuIDiB3WkmoCxr9psONWgwJvvtsIG8HaLq4QVqjAtHVQKSTJo1TJQGBu6IWxnMHo8tHHYwB-qgN3McxxBcBIvIe9IslmgxkQqyNkMFBQg&disp=emb' />
                <img src='./assets/images/Subject.png' alt='all-vegeies' />
            </div>
            <div className='slider-col'>
                <h2>the largest online market in vizag with large number of products and sellers</h2>
                <Link to='/shop'><FontAwesomeIcon icon={faEye} /> View More</Link>
            </div>
        </div>
    )
}

export default Slider