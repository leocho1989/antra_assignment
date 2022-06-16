import React, {useState} from 'react';

const Counter=() =>{

const  [counter,setCounter] = useState(0);

const addCount =()=>{
    setCounter(counter +1);
};

const minusCount =()=>{ 
    setCounter(counter -1);
};

const setAlert =()=>{
    setTimeout(()=>{
        setCounter((count)=>{
            alert(count);
        });
    },5000);
};

return (
  <div>
    <h3>Counter: {counter}</h3>
    <button onClick={addCount}>Add</button>
      <button onClick={minusCount}>Minus</button>
      <button onClick={setAlert}>Alert</button>
  </div>
);
}

export default Counter;

