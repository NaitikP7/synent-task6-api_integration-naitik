import React from 'react'
import './data.css'
import Card from './Card'
import Profile from './Profile'
import UserStats from './UserStats'
const User = (props) => {
  return (
    <div className='backdrop-blur-md m-2 p-1 h-[85%] absolute inset-2 top-[12%]
      flex flex-col justify-between gap-4 text-white
    '>
      <Profile/>
      <UserStats/>
      <div id="bottom" className='h-[45%] p-2 rounded overflow-y-auto flex flex-col gap-3'>
        <Card/>
        <Card/> 
        <Card/>
        <Card/>
        
                
      </div>
    </div>
  )
}

export default User