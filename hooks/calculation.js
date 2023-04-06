import { useState } from 'react';

const useCounter = () => {
    const [counter, setCounter] = useState(0);
    
    const add = () => {
        setCounter(counter + 1);
    };
    
    return { counter, add };
}

export default useCounter;