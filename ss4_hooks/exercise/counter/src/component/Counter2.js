import React, {useState} from 'react';

function Counter2(props) {
    const [count, setCount] = useState(0);

    const increase = () => {
        const value = count + 2;
        setCount(value);
    }

    return (
        <div>
            <div>Count: {count}</div>
            <div>
                <button onClick={increase}>Add 2</button>
            </div>
        </div>
    );
}

export default Counter2;