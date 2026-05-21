import React, { useState } from 'react'
import mainBack from './assets/main-back.jpg'
import Content from './components/Content'
import ErrorPage from './ErrorPage'
import User from './components/User'
const App = () => {

  const [username, setUsername] = useState('')
  const [user, setUser] = useState(null)
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(false)
  const [error,setError] = useState("")


  const fetchUser = async(user)=>{

    const trimmedName = user.trim().toLowerCase();

    try{
        const response = await fetch(
            `https://api.github.com/users/${trimmedName}`
        )
        if(response.status===404){
            setError(trimmedName)
            setUser(null)
            return
        }
        const data = await response.json()
        setUser(data)
        setError("")
        console.log("HERE!!!")
    }

    catch(err){
        setError("Something went wrong")
    }
}

  return (
    <div
      className="h-screen w-full bg-cover bg-center"
      style={{
        backgroundImage: `url(${mainBack})`
      }}
    >
      <Content username={username}  setUsername={setUsername} fetchUser={fetchUser}/>
      {error && <ErrorPage name={error}/>}      
      {user && <User user={user} />}
      
    </div>
  )
}

export default App