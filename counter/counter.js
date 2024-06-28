import React, {useState} from "react";

const Count = () => {

    const [counter, setCounter] = useState(0)

    return(
        <div >

            <div style={{backgroundColor: 'gray',display: 'flex', alignItems: 'center'}}>
                <h1>Counter App</h1>
            </div>
            <div style={{backgroundColor: 'gray', display: 'flax', alignItems: 'center', justifyContent: 'center'}}>
                <h1>{counter}</h1>
            </div>

            <div style={{backgroundColor: '', display: 'flex', justifyContent: 'center' }}>
                <button onClick={() => setCounter(counter + 1)}>Increase</button>
                <button onClick={() => setCounter(0)}>Reset</button>
                <button onClick={() => {
                    if(counter > 0){
                        setCounter(counter -1)
                    }
                }}>Decrease</button>
            </div>
        </div>
        
    )
}

export default Count;


