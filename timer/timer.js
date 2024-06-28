import React, { useEffect, useState } from "react";


let n = 0
const Timer = () => {

    const [seconds, setSeconds] = useState(n)
    const [minutes, setMinutess] = useState(0)
    const [isrunning, setisRunning] = useState(false)


    const handleStart = () => {
        setisRunning(true);


    };

    const handleStop = () => {
        console.log('====calll====')
        setisRunning(false);
        setSeconds(n)

    };

    const handleReset = () => {
        setisRunning(false);
        setSeconds(0);
        setMinutess(0);
        n = 0;

    };

    useEffect(() => {
        console.log(isrunning)
        if (isrunning) {
             interval()
        } 

    }, [n, isrunning])

    const interval = () => {
        setTimeout(() => {
            n = n + 1;
            setSeconds(seconds + 1);
        }, 1000)
        // setisRunning(false);
    }





    return (

        <div style={{ backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div style={{ backgroundColor: '#00ffff', width: '50vh', height: '50vh', display: 'flex', justifyContent: 'center', }}>
                <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        {/* <h2>Stop Watcher</h2> */}
                        <h2>{seconds}</h2>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div>
                            <button onClick={handleStart}>start</button>
                            <button onClick={handleStop}>stop</button>
                            <button onClick={handleReset}>Reset</button>
                        </div>
                    </div>
                </div>


            </div>
        </div>

    )
}

export default Timer;


