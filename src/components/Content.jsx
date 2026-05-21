import React from 'react'
import Navbar from './Navbar'


const Content = (props) => {
  return (
    <div className="h-full w-full bg-black/50 text-white relative">
      <Navbar username={props.username} setUsername ={props.setUsername} fetchUser={props.fetchUser}/>

      
    </div>
    
  )
}

export default Content