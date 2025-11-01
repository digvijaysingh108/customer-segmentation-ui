import React from "react";
import "remixicon/fonts/remixicon.css";
import RightCardContent from "./RightCardContent";

const RightCard = (props) => {
  return (
    <div className="h-full shrink-0 relative w-80 rounded-4xl overflow-hidden">
      <img className="h-full w-full object-cover" src={props.img} alt="working" />
      <RightCardContent id={props.id} intro = {props.intro} cta = {props.cta} />
    </div>
  );
};

export default RightCard;
