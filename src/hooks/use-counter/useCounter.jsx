import { useState } from "react";

const useCounter = ({initialCount = 0} = {initialCount: 0}) => {
    const [counter, setCounter] = useState(initialCount);
    const decrement = () => setCounter(counter - 1);
    const increment = () => setCounter(counter + 1);

    return {counter, decrement, increment};
}

export default useCounter;