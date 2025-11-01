import React from "react";
import 'remixicon/fonts/remixicon.css'
import Arrow from "./Arrow";

const LeftContent = () => {
  return (
    <div className="h-[80vh] w-1/4 p-4 flex flex-col justify-between">
      <div className="">
        <h4 className="flex flex-col text-5xl font-extrabold leading-snug">
          Prospective <span>customer</span> segmentation
        </h4>
        <p className="leading-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          inventore consequatur, quod dignissimos illo rem! Et, autem vitae?
          Maiores, unde.
        </p>
      </div>
        <Arrow />
    </div>
  );
};

export default LeftContent;
