import React, {useState, useEffect} from 'react';

const Counter=() =>{

const  [counter,setCounter] = useState(0);
const [isAlert, setIsAlert] = useState(false);


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


  // ComponentDidMount
useEffect(()=>{
    alert("ComponentDidMount");
},[]);

  // ComponentDidUpdate
  useEffect(()=>{
    if (isAlert) {
        alert("ComponentDidUpdate");
        setIsAlert(false);
    }
  },[]);

  // ComponentWillUnmount
  useEffect(()=>{
    return()=>{
        alert("ComponentWillUnmount");
    };
  },[]);


return (
  <div>
    <h3>Counter: {counter}</h3>
    <button onClick={addCount}>+</button>
      <button onClick={minusCount}>-</button>
      <button onClick={setAlert}>Alert</button>
  </div>
);
}

export default Counter;

