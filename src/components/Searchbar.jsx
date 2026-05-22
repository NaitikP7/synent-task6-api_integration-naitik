import React from 'react'
import { ArrowRight, CircleArrowRight, Search } from 'lucide-react'
import './navbar.css'
const Searchbar = ({username, setUsername, fetchUser}) => {
  return (
    <div id='searchBar' className='flex justify-between items-center lg:w-170 lg:rounded-xl shadow-[0_0_20px_rgba(168,85,247,0.8)] h-10 p-1 rounded-full lg:h-14
            transition-all duration-300
            min-[480px]:w-[70%]
            mx-4
            focus-within:shadow-[0_0_25px_rgba(255,63,0,0.7)]'>
        <button className='lg:p-4'><Search className='h-[17px] lg:h-[25px]'/></button>
        <input type=" text" className='bg-transparent w-[94%] text-white outline-0' placeholder='Type to search eg. @abc' value={username}
            onChange={(e)=>{
                setUsername(e.target.value)
            }}
        />
        <button className='lg:p-4 cursor-pointer'><CircleArrowRight className='hover:text-[#b0adad] transition-all duration-150 h-5 lg:h-[28px]'            
            onClick={()=>{
                fetchUser(username)
            }}
        /></button>
    </div>
  )
}
    
export default Searchbar