import React from 'react'

import Searchbar from './Searchbar'
const Navbar = (props) => {
  return (
    <div id='navbar' className='flex justify-between py-4 px-2 lg:px-20 items-center backdrop-blur-xl'>
        <h2 className='text-[20px]'>DevSearch</h2>
        <Searchbar username={props.username} setUsername ={props.setUsername}/>
        <a href="https://github.com/" className='h-12 w-12 rounded-full flex items-center justify-center shadow-[0_0_25px_rgba(255,63,0,0.7)]'>
          <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/github-white-icon.png" alt=""
            className='h-9 w-9'
            />
        </a>
      </div>
  )
}

export default Navbar