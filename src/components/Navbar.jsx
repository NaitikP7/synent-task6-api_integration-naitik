import React from 'react'
import git from '../assets/github.webp'
import Searchbar from './Searchbar'
import './navbar.css'
const Navbar = (props) => {
  return (
    <div id='navbar' className='flex justify-between 
    py-6 min-[480px]:px-8    
    lg:px-20 items-center backdrop-blur-xl'>
        <h2 className='lg:text-[20px]'>DevSearch</h2>
        <Searchbar username={props.username} setUsername ={props.setUsername} fetchUser={props.fetchUser} 
        />
        <a href="https://github.com/" className='h-12 w-12 rounded-full items-center justify-center shadow-[0_0_25px_rgba(255,63,0,0.7)]
          hidden min-[480px]:flex
        '>
          <img src={git} alt=""
            className='h-9 w-9'
            />
        </a>
      </div>
  )
}

export default Navbar