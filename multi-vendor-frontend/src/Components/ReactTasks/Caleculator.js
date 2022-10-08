import React, { useState } from 'react'
import './caleculator.css';
const Caleculator = () => {
    const [result, setResult] = useState('')
    // const handleClick = (e) => {
    //     setResult(result.concat(e.target.value))
    // }

    return (
        <>
            <div className='container'>
                <form>
                    <input type='text' value={result} />
                </form>
                <div className='keypad'>
                    <button className='highlight' onClick={() => setResult('')} id='clear'>Clear</button>
                    <button className='highlight' onClick={() => setResult(result.slice(0, result.length - 1))} id='backspace'>C</button>
                    <button className='highlight' name='/' onClick={(e) => setResult(result.concat(e.target.name))}>&divide;</button>
                    <button name='7' onClick={(e) => setResult(result.concat(e.target.name))}>7</button>
                    <button name='8' onClick={(e) => setResult(result.concat(e.target.name))}>8</button>
                    <button name='9' onClick={(e) => setResult(result.concat(e.target.name))}>9</button>
                    <button className='highlight' name='*' onClick={(e) => setResult(result.concat(e.target.name))}>&times;</button>
                    <button name='4' onClick={(e) => setResult(result.concat(e.target.name))}>4</button>
                    <button name='5' onClick={(e) => setResult(result.concat(e.target.name))}>5</button>
                    <button name='6' onClick={(e) => setResult(result.concat(e.target.name))}>6</button>
                    <button className='highlight' name='-' onClick={(e) => setResult(result.concat(e.target.name))}>&ndash;</button>
                    <button name='1' onClick={(e) => setResult(result.concat(e.target.name))}>1</button>
                    <button name='2' onClick={(e) => setResult(result.concat(e.target.name))}>2</button>
                    <button name='3' onClick={(e) => setResult(result.concat(e.target.name))}>3</button>
                    <button className='highlight' name='+' onClick={(e) => setResult(result.concat(e.target.name))}>+</button>
                    <button name='0' onClick={(e) => setResult(result.concat(e.target.name))}>0</button>
                    <button className='highlight' name='.' onClick={(e) => setResult(result.concat(e.target.name))}>.</button>
                    <button className='highlight' onClick={() => setResult(eval(result).toString())} id='result'>=</button>
                </div>
            </div>

        </>
    )
}

export default Caleculator