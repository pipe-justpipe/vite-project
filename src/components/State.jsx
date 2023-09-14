import React,{ useState} from 'react'

const State = () => {
const [name, setName] = useState("BOOK")
    // state value, updater value and initial value

const handleClick =()=> {
    setName('Pipe')
}
  return (
    <div className='w-4/5 mx-auto'>
        <div className="text-[#b5838d] font-bold text-3xl">{name}</div>
        <button className='bg-blue-400 p-5 rounded-xl' onClick={handleClick}  type="button">click me</button>
    </div>
  )
}
export default State