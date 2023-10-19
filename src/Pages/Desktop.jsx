import React from 'react'
import Navbar from '../Components/Navbar'
import Icon from '../Components/Icon'
import MyPortfolioIcon from '../assets/icons/iconPortfolio.png'
import CaseJoltIcon from '../assets/icons/CaseJolt-Icon.png'
import filmfoliaIcon from '../assets/icons/filmfolia-Icon.png'
import FitHubIcon from '../assets/icons/FItHub-Icon.png'
import StereohIcon from '../assets/icons/Stereoh-Icon.png'

const Desktop = ({setClicked}) => {
  return (
    <div  className='Desktop h-[610px] w-[950px] bg-[#008080] relative'>
      {/* EXIT ICON  */}
      <div 
      onClick={() => setClicked(false)}
      className="absolute right-4 bottom-10">
        <Icon name={"Exit"} icon={"https://win98icons.alexmeub.com/icons/png/shut_down_normal-4.png"}/>
      </div>
      {/* MY PORTFOLIO ICON */}
      <div 
      className="absolute left-4 top-2">
        <Icon name={"My Portfolio"} icon={MyPortfolioIcon}/>
      </div>
      <div 
      className="absolute left-4 top-20">
        <Icon name={"Case Jolt"} icon={CaseJoltIcon}/>
      </div>
      <div 
      className="absolute left-4 top-40">
        <Icon name={"Film Folia"} icon={filmfoliaIcon}/>
      </div>
      <div 
      className="absolute left-4 top-60">
        <Icon name={"FitHub"} icon={FitHubIcon}/>
      </div>
      <div 
      className="absolute left-4 top-80">
        <Icon name={"Stereo"} icon={StereohIcon}/>
      </div>
        <Navbar setClicked={setClicked}/>
    </div>
  )
}

export default Desktop