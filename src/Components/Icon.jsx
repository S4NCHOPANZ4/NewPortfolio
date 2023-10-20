import React from 'react'

const Icon = ({icon, name}) => {
  return (
    <div className='flex items-center justify-center flex-col h-[70px] w-[60px] cursor-pointer'>
        <img src={icon} alt="icon" />
        <h1 className='font-ligth text-[#fdffff] text-xs w-[70px] text-center mt-1'>{name}</h1>
    </div>
  )
}

export default Icon