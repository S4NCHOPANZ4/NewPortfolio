import React from 'react'
import CloseImg from '../assets/icons/ui/closeIcon.png'

const GeneralNotification = ({title = '', children, setOpen}) => {
  return (
    <div className='absolute top-0 left-0 w-full h-full z-50 flex items-center justify-center '>
        <div className='w-[400px] h-[120px] bg-[#c3c3c3]  flex flex-col justify-start items-center border-window'>
            <div className='h-[25px] w-[99%] mt-[.1rem] bg-[#010081] flex items-center justify-between pl-1'>
            <p className='text-white font-thin text-xs'>{title}</p>
            <img 
              onClick={() => setOpen(false)}
              src={CloseImg} alt="icon" className='h-[14px] bg-[#c3c3c3] hover:bg-[#989898] mr-1 cursor-pointer'/>
            </div>
            <div className='h-full w-full flex items-center justify-center'>
                <div className='w-[99%] h-[95%] bg-stone-400 flex items-center justify-center'>
                    {children}
                </div>
            </div>
        </div>
    </div>
  )
}
//

export default GeneralNotification