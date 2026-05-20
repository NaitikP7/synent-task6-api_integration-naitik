import React from 'react'
import Navbar from './Navbar'
const Content = (props) => {
  return (
    <div className="h-full w-full bg-black/50 text-white ">
      <Navbar username={props.username} setUsername ={props.setUsername} />
    </div>
  )
}

export default Content