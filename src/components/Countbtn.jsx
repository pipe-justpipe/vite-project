import React, { useState } from 'react'
const Countbtn =()=>{
    const[name, setName] = useState("Book")
    const[count, setCount] = useState(0)
    
    const handleClick = ()=>{
        setName("Pipe")
    }
    // const increment = () =>{
    //     setCount(count+1)
    // }

    // const decrement = () =>{
    //     setCount(count <= 0 ? 0: count -1)
    // }

    const increment= ()=>{
        setCount(prev => prev + 1)
    }

    const decrement= ()=>{
        setCount(prev => prev - 1)
    }

  return (
    <div className='flex justify-center items-center'>
        <button className='bg-[#b5838d] text-white bo text-2xl rounded-xl p-5' onClick={increment}>+</button>
        <div className='text-4xl font-extrabold text-black m-7'>{count}</div>
        <button className='bg-[#b5838d] text-white text-2xl rounded-xl p-5' onClick={decrement}>-</button>
    </div>
  )
}
export default Countbtn
