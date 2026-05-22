import React from 'react'
import { SquareArrowOutUpRight } from 'lucide-react';
const Card = ({id, repos}) => {
  const date = new Date(repos.updated_at)
  const formatted = date.toLocaleString()
  return (
    <div className=' bg-[#78787822] backdrop-blur-xl h-[70%] shrink-0 px-3 rounded-xl flex flex-col justify-evenly font-semibold'>
      <div className='flex justify-between'>
        
        <p className='font-medium text-lg'>{repos.name}</p>
        <a href={repos.clone_url} target='_blank'><SquareArrowOutUpRight className='' /></a>
      </div>            
      <p className={`leading-tight text-sm line-clamp-4 text-gray-300 font-medium ${repos.description ? "block" : "hidden"}`}>{repos.description}</p>
      <p>Language : {repos.language}</p>
      <p>Stars : {repos.stargazers_count}</p>
      <p>Updated at : {formatted} </p> 
    </div>
  )
}

export default Card