import React from 'react'
import Navbar from './Navbar'


const Content = ({ username, setUsername, fetchUser, resetApp }) => {
  return (
    <div className="h-full w-full bg-black/50 text-white relative">
      <Navbar username={username} setUsername={setUsername} fetchUser={fetchUser} resetApp={resetApp} />

      
    </div>
    
  )
}

export default Content