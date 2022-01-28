
import { useEffect, useState } from "react";

const HooksInReact = () => {

    const [count, setCount] = useState(0);
    const [num, setNum] = useState(0);

    useEffect(() => {
        console.log('in use effect')
    })

    //[] -> useEffect runs on component mount
    //[state] -> useEffect runs on every state update
    //no [] -> useEffect runs on every state update

    return (
        <div>{console.log('in return ' + count)}
        <button onClick={() => setCount(count+1)}>++</button>
        </div>
        
    )

}

export default HooksInReact;