import React from "react";
import Icon from "../../assets/icons/iconParts/itemSkills.png";

const Tool = ({ IconTool, name }) => {
  return (
    <div className="h-[70px] w-[70px] flex flex-col items-center justify-center">
      <div
        className="h-[55px] w-[55px] flex  items-center justify-center p-1"
        style={{
          backgroundImage: "url(" + Icon + ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          opacity: ".8",
        }}
      >
        <IconTool size={35} className="text-[#312b10]" />
      </div>
      <p className="text-[#ececec9c] text-xs mt-1">{name}</p>
    </div>
  );
};

export default Tool;
