import React, { useState } from 'react';
import './Dynamic.css';
const Dynamic = () => {
    const [number, setNumber] = useState(0)
    return (
        <div className='container'>
            <div className='card'>
                {number}
            </div>&nbsp;
            <div>
                <button type="button" className='btn btn-outline-success' onClick={() => setNumber(Num => Num + 1)}>Increament</button>&nbsp;
                <button type="button" class="btn btn-outline-danger" onClick={() => setNumber(Num => Num === 0 ? Num : Num - 1)}>Decrement</button>
            </div>
        </div>
    )
}

export default Dynamic