import React from 'react'
import { ArrowRight, CircleArrowRight, Search } from 'lucide-react'
const Searchbar = ({username, setUsername}) => {
  return (
    <div className='flex justify-between items-center lg:w-170 rounded-xl shadow-[0_0_20px_rgba(168,85,247,0.8)]
            transition-all duration-300
            hover:shadow-[0_0_25px_rgba(255,63,0,0.7)]'>
        <button className='lg:p-4'><Search size={'25px'}/></button>
        <input type=" text" className='bg-transparent w-[94%] text-white outline-0' placeholder='Type to search eg. @abc' value={username}
            onChange={(e)=>{
                setUsername(e.target.value)
            }}
        />
        <button className='lg:p-4 cursor-pointer'><CircleArrowRight size={'28px'} className='hover:text-[#b0adad] transition-all duration-150'            
            onClick={()=>{
                fetchUser(username)
            }}
        /></button>
    </div>
  )
}
    
export default Searchbar