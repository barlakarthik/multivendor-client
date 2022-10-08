import React, { useEffect, useState } from 'react'
import './Timer.css';
const Timer = () => {
    const [time, setTime] = useState(0);
    const [timer, setTimer] = useState(false)
    useEffect(() => {
        let interval = null;
        if (timer) {
            interval = setInterval(() => {
                setTime(Time => Time + 1)
            }, 1000)
        } else {
            clearInterval(interval)
        }
        return () => clearInterval(interval)
    }, [timer])
    const Reset = () => {
        setTime(0)
        setTimer(false)
    }
    return (
        <div className='container'>
            <div className='ticket'>
                {time}
            </div><br />
            <div className='myutton'>
                <button className='btn btn-outline-success' onClick={() => setTimer(true)}>Start</button>&nbsp;
                <button className='btn btn-outline-danger' onClick={() => setTimer(false)}>Stop</button>&nbsp;
                <button className='btn btn-outline-warning' onClick={() => setTimer(true)}>Resume</button>&nbsp;
                <button className='btn btn-outline-secondary' onClick={Reset}>Reset</button>
            </div>
        </div>
    )
}

export default Timer