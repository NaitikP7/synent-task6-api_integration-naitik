import React, { useState } from 'react'
import mainBack from './assets/main-back.jpg'
import Content from './components/Content'
const App = () => {

  const [username, setUsername] = useState('')

  const fetchUser = (user)=>{
    const trimmedName = user.trim();
    const response = fetch(`https://api.github.com/users/${trimmedName}`)
  }

  return (
    <div
      className="h-screen w-full bg-cover bg-center"
      style={{
        backgroundImage: `url(${mainBack})`
      }}
    >
      <Content username={username}  setUsername={setUsername}/>
    </div>
  )
}

export default App