// import React from 'react'
// import {useState ,useEffect} from 'react'


// const Clock = () => {

//     const [Time , setTime] = useState(0)
//     const [running , Isrunning] = useState(false)


//  function handleclick(){
//     Isrunning((prev) => !prev);
//  }


//  useEffect(()=>{

//     if(running){
//         setInterval(()=>{
//            setTime((prev) => prev + 1);
//         },1000)
//     }
//   },[running])


//   return (
//     <div>
//         <button onClick={handleclick}>clock starts</button>
//         <h1>{Time}</h1>
//     </div>
//   )
// }

// export default Clock



import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  function handleClick() {
    setRunning((prev) => !prev); // 👈 toggle true/false
  }

  useEffect(() => {
    let timer;
    if (running) {
      timer = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(timer); // cleanup
  }, [running]);

  return (
    <div>
      <button onClick={handleClick}>
        {running ? 'Stop' : 'Start'}
      </button>
      <h1>{time}</h1>
    </div>
  );
};

export default Clock;
