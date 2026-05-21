import React from 'react'
import { SquareArrowOutUpRight } from 'lucide-react';
const Card = () => {
  return (
    // 
    <div className=' bg-[#78787822] backdrop-blur-xl h-[70%] shrink-0 px-3 rounded-xl flex flex-col justify-evenly font-semibold'>
      <div className='flex justify-between'>
        <p className='font-medium text-lg'>Repo Name</p>
        <a href="{link}"><SquareArrowOutUpRight className='' /></a>
      </div>            
      <p className='leading-tight text-sm line-clamp-4 text-gray-300'>Description Lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, quibusdam! ipsum dolor sit amet consectetur adipisicing elit. Tenetur, eius?</p>
      <p>Languages:</p>
      <p>Stars: </p>
      <p>Updated at: </p> 
    </div>
  )
}

export default Card