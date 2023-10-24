import React from 'react'
import background from '../../assets/icons/iconParts/ProjectCardBg.png'

const ProjectBar = ({icon, name, icons}) => {
  return (
    <div 
    style={{
        backgroundImage: 'url('+background+')',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }}
    className='text-white h-[80px] my-[.01rem] w-full flex items-center justify-left pl-3  cursor-pointer p-6'>
        <img src={icon} alt="icon" className='h-[50px] mx-3'/>
        <div>
            <h1 className='text-sm'>
                {name}
            </h1>
            <div className='flex text-xs text-[#d7d7d7a4] italic'>
                {icons.map((icon, i)=>{
                    return (
                        <h1> {icon}{(icons.length-1 === i)? "" : "- "}</h1>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default ProjectBar