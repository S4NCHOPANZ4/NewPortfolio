import React, { useState } from 'react'
import CloseImg from '../assets/icons/ui/closeIcon.png'
import MaxIcon from '../assets/icons/ui/maximizeIcon.png'
import MinIcon from '../assets/icons/ui/minimizeIcon.png'

const WindowUI = ({children, title, icon, i, tabs, setTabs, minimized, tab}) => {

  const [bigPic, setBigPic] = useState(false)

  const minimize = () =>{
    let newList = [...tabs]

   newList[i] = {
        ...newList[i],
        minimized: true,
        selected: false,
    }
    setTabs(newList)
  }
  const close = () =>{
    let newList = [...tabs]

    newList.splice(i, 1)

    for(let i = newList.length - 1; i >= 0; i--){
      if(!newList[i].minimized){
        newList[i] = {
          ...newList[i],
          selected: true,
        }
        break
      }
    }

    setTabs(newList)
  }
  

  return (
    <div
    style={bigPic? {width: "100%" , height: "95.5%", top: 0, left: 0} : {width: "700px" , height: "500px"}}
    className={`absolute top-10 left-40  bg-[#c3c3c3] border-window ${minimized? "-z-20": (tab.selected?  "z-20": "z-10")}`}>
        <div className='h-[20px] w-auto bg-[#010081] m-[.15rem] flex items-center justify-between'>
          <div className='flex items-center'>
            <img src={icon} alt="icon" className='h-[15px] ml-1'/>
            <h1 className='text-white text-xs ml-2 Sans-serif-bold mb-1'>{title}</h1>
          </div>
          <div className='flex items-center justify-center'>
              <img 
              onClick={() => minimize()}
              src={MinIcon} alt="icon" className='h-[14px] bg-[#c3c3c3] hover:bg-[#989898] mr-1 cursor-pointer'/>
              <img 
              onClick={() => setBigPic(!bigPic)}
              src={MaxIcon} alt="icon" className='h-[14px] bg-[#c3c3c3] hover:bg-[#989898] mr-1 cursor-pointer'/>
              <img 
              onClick={() => close()}
              src={CloseImg} alt="icon" className='h-[14px] bg-[#c3c3c3] hover:bg-[#989898] mr-1 cursor-pointer'/>
          </div>
        </div>
        <div className='w-auto m-[.3rem] mt-2 h-[90%]  bg-[#fdffff] border-window-inset '>
          {children}
        </div>
        <h1 className='flex items-center justify-start text-[.6rem] ml-2'>© <span className='ml-1 mb-1'>Juan Buitrago - 2023</span></h1>
    </div>
  )
}

export default WindowUI  