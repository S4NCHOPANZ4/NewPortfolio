import React from "react";

const Navbar = ({setClicked}) => {
  return (
    <div
    
      className="absolute w-full h-[35px] bg-[#c3c3c3] bottom-0 navBar py-1"
    >
      <div
      onClick={() =>setClicked(false)}
      className="flex h-full items-center justify-left ml-2 border-navbarIcon w-[100px] py-1 cursor-pointer">
        <img
          src="https://win98icons.alexmeub.com/icons/png/windows-0.png"
          className="h-[25px]"
          alt="icon"
        />
        <h1 className="font-semibold ml-1">Start</h1>
      </div>
    </div>
  );
};

export default Navbar;
