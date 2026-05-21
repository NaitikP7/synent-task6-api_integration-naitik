import React from 'react'

const Profile = () => {
  return (
    <div id='top' className='h-[25%] p-1 flex gap-1 justify-between items-start'>
        {/** img container*/}
        <div className='h-25 w-25 rounded-full overflow-hidden border border-[rgba(111,111,111,0.32)]'>
          <img className='h-full w-full object-cover'
          src="https://plus.unsplash.com/premium_photo-1673326630848-fecf43ae8db1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>

        <div className='bg-[#48484822]
            backdrop-blur-xl flex-1 px-3 py-2 pt-3 h-full flex flex-col justify-between rounded-xl' >
        <div>
            <h3 className='text-xl font-medium leading-5'>Naitik Patel</h3>
            <h4 className='text-[#dadada] italic'>&#64;NaitikP7</h4>
          </div>        
          <div>
            <p className='leading-tight text-[14px] text-justify line-clamp-6'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora odit eius voluptatem dicta ipsum sequi provident quibusdam, recusandae, veniam, odio culpa neque iure optio corporis ex alias debitis consectetur repellat.</p>
          </div>
        </div>
    </div>
  )
}

export default Profile