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
        
        try{
          const repository = await fetch(`https://api.github.com/users/${trimmedName}/repos`)
          if(repository.status !== 200){
            setError(trimmedName)
            setUser(null)
            return
          }
          const repo_data = await repository.json()
          setRepos(repo_data)
          console.log(repo_data);
          
          
        }catch(err){
          setError("Repos could not be fetched")
        }
        setUser(data)
        setError("")
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
      {user && <User user={user} repos={repos}/>}
      
    </div>
  )
}

export default App