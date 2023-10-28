import React, { useState } from "react";
import { usePricing } from "./PricingContent";

const Toggle = ({ onToggle }) => {
  const { isYearly, togglePricing } = usePricing();
  return (
    <div className="flex  items-center    justify-center">
      <label className="cursor-pointer flex flex-row relative">
        <div>
          {" "}
          <span className="text-xs mr-2 font-bold">Monthly</span>
        </div>
       <div> <input
          type="checkbox"
          className="hidden py-7"
          onChange={togglePricing}
          checked={isYearly}
         
        /></div>
        <div className="w-12 h-6 bg-[#1A5402] rounded-full shadow-inner toggle-track">
          <div
            className={`toggle-thumb w-6 h-6 bg-white rounded-full shadow -left-0.5 transition-transform duration-300 ${
              isYearly ? "translate-x-full" : "translate-x-0"
            }`}
          ></div>
        </div>
        <div>
          <span className="text-xs ml-2 font-bold">Yearly</span>
        </div>
      </label>
    </div>
  );
};

export default Toggle;
