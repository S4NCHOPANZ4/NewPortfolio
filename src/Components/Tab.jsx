import React from 'react'

const Tab = ({title, icon, selected, onClick, minimized}) => {
  return (
    <div 
    onClick={onClick}
    style={selected ? {backgroundColor: '#b0b0b0'} : {backgroundColor: '#c3c3c3'}}
    className={`h-[22px] min-w-[120px]  flex items-center justify-start ml-1  ${(selected && !minimized)? 'border-window-inset Sans-serif-bold ': 'border-window '} px-1 cursor-pointer`}>
        <img src={icon} alt="icon"  className='h-[18px] mr-1'/>
        <h1 className={` ${(selected && !minimized)? 'mb-1 text-[.67rem]': 'text-xs'}`}>{title}</h1>
    </div>
  )
}

export default Tab