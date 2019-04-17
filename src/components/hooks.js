import React, { useState } from 'react';

function Example(){
    const price = 1000;
    const [count, setCount] = useState (0);
    return(
        <div className="hookCounter">
            <p> If you have {count} shares of Lorem the present value is {count * price}</p>
            <button onClick={() => setCount(count - 1 )}>
                Less
            </button>
            <button onClick={() => setCount(count + 1)}>
                More
            </button>
        </div>
    );
}

export default Example