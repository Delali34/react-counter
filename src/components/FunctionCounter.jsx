import React, {useState} from 'react'

function FunctionCounter() {
    const [count,setCount] = useState(0);
    const myClick =()=>{
        setCount(count +1);
    };
    const yourClick =()=>{
        setCount(count -1);
    };
  return (
    <div>
        <h1>Count {count}</h1>
        <button onClick={myClick}>Increment</button>
        <button onClick={yourClick}>Decrement</button>
    </div>
  )
}

export default FunctionCounter