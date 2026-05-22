import React from 'react'
import './data.css'
const Profile = (props) => {
  return (
    <div id='top' className=' max-h-[25%] p-1 flex gap-1 justify-between items-start'>
        {/** img container*/}
        <div className='h-25 w-25 rounded-full overflow-hidden border border-[rgba(111,111,111,0.32)]'>
          <img className='h-full w-full object-cover'
          src={props.user.avatar_url} alt="" />
        </div>

        <div id='bio' className='bg-[#48484822]
            backdrop-blur-xl flex-1 px-3 py-3 pt-3 h-auto max-h-full flex flex-col justify-start max-[600px]:gap-2 rounded-xl' >
          <div>
              <h3 className='text-xl font-medium leading-5'>{props.user.name}</h3>
              <h4 className='text-[#dadada] italic'>&#64;{props.user.login}</h4>
            </div>        
            <div>
              <p className='leading-tight text-[14px] text-justify line-clamp-6 text-gray-300'>{props.user.bio || `User has not added any bio`}</p>
          </div>
        </div>
    </div>
  )
}

export default Profile