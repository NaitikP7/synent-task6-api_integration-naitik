import React from 'react'
import './data.css'
import Card from './Card'
import Profile from './Profile'
import UserStats from './UserStats'
const User = (props) => {
  return (
    <div id='card-content' className='backdrop-blur-md m-2 p-1 h-[85%] absolute inset-2 top-[12%]
      flex flex-col justify-between gap-4 text-white w-auto min-[600px]:overflow-y-auto
    '>
      <Profile user={props.user}/>
      <UserStats user={props.user}/>
      <div id="bottom" className='h-[45%] p-2 rounded max-[600px]:overflow-y-auto flex flex-col gap-3'>
        {props.repos.map((elem,idx)=>{
          return <Card key={idx} id={idx} repos={elem}/>
        })}
      </div>
    </div>
  )
}

export default User