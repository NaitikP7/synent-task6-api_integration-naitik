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
    setLoading(true)

    try{
        const response = await fetch(
            `https://api.github.com/users/${trimmedName}`
        )
        if(response.status===404){
            setError(trimmedName)
            setUser(null)
            setLoading(false)
            return
        }
        const data = await response.json()
        
        try{
          const repository = await fetch(`https://api.github.com/users/${trimmedName}/repos`)
          if(repository.status !== 200){
            setError(trimmedName)
            setUser(null)
            setLoading(false)
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
        setLoading(false)
    }

    catch(err){
        setError("Something went wrong")
        setLoading(false)
    }
}

const resetApp = () => {
  setUsername('');
  setUser(null);
  setRepos([]);
  setError('');
  setLoading(false);
};

  return (
    <div
      className="h-screen w-full bg-cover bg-center"
      style={{
        backgroundImage: `url(${mainBack})`
      }}
    >
      <Content username={username} setUsername={setUsername} fetchUser={fetchUser} resetApp={resetApp} />
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="flex flex-col items-center gap-4">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-white border-t-blue-500"></div>
            <p className="text-white text-lg font-semibold">Fetching user data...</p>
          </div>
        </div>
      )}
      {error && <ErrorPage name={error}/>}      
      {user && <User user={user} repos={repos}/>}
      
    </div>
  )
}

export default App