import React, {useState} from 'react';

function Counter1(props) {
    const [count, setCount] = useState(0);

    const increase = () => {
        const value = count + 1;
        setCount(value);
    }
    return (
        <div>
            <div> Count: {count}</div>
            <div>
                <button onClick={increase}>Add 1</button>
            </div>
        </div>
    );
}

export default Counter1;