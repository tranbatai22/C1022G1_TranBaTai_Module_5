import React, {useState} from 'react';

function Times(props) {
    const [times, setTimes] = useState(10);

    setInterval(() => {
        setTimes(times - 1)
        if (times === 0) {
            alert("Time's up");
            return times;
        }
    }, 1000);

    return (
        <div>
            <h1>Times: {times}</h1>
        </div>
    );
}

export default Times;