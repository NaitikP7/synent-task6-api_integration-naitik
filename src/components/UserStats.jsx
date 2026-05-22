import React from 'react'

const UserStats = (props) => {
  return (
    <div id="center" className='max-h-[30%] grid grid-cols-2 gap-4 p-2 auto-rows-fr'>
      <div id='details'>
        <h1 className='text-3xl'>{props.user.followers}</h1>
        <p>FOLLOWERS</p>
      </div>

      <div id='details'>
        <h1 className='text-3xl'>{props.user.following}</h1>
        <p>FOLLOWING</p>
      </div>

      <div id='details'>
        <h1 className='text-3xl'>{props.user.public_repos}</h1>
        <p>PUBLIC REPOS</p>
      </div>

      <div id='details'>
        <h1 className='text-3xl'>{props.user.location || '-'}</h1>
        <p>LOCATION</p>
      </div>
    </div>
  )
}

export default UserStats