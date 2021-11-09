import React, { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    // const increment = () => {
    //     setCounter(counter + 1);
    // }

    //Will return a memoized version of the callback that only changes if one of the dependencies has changed.
    const increment = useCallback((num) => {
        setCounter(c => c + num)
    }, [setCounter])

    return (
        <div>
            <h1>Callback Hook</h1>
            <h3>Counter: {counter}</h3>
            <hr/>
            <ShowIncrement increment={increment}/>
        </div>
    )
}
