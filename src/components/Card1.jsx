import React, { useState } from "react";
import "./Card1.css";
import { usePricing } from "./PricingContent";

const Card1 = () => {
  const { isYearly } = usePricing();

  return (
    <div className=" py-12">
      <div className="container mx-auto flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Pricing Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md ">
            {isYearly ? (
              <p className="text-5xl font-bold text-black mt-2">$10</p>
            ) : (
              <p className="text-5xl font-bold text-black mt-2">$1</p>
            )}
            <h2 className="text-lg font-semibold pt-5 pb-1 text-gray-800">Lite</h2>
            {isYearly ? (
              <p className="text-sm  text-gray-500 ">Billed annually.</p>
            ) : (
              <p className="text-sm  text-gray-500 ">Billed monthly.</p>
            )}
            <ul className="mt-4  text-left space-y-2 pb-10">
              <li className="text-base  text-gray-500">
                <i className="fas fa-check fa-sm p-1 bg-[#9FDE6A] rounded-full  text-[#1A5402] mr-2"></i>{" "}
                CMS integration
              </li>
              <li className="text-base  text-gray-500">
                <i className="fas fa-check fa-sm p-1 bg-[#9FDE6A] rounded-full text-[#1A5402] mr-2"></i>{" "}
                Email & SMS reminders
              </li>
              <li className="text-base  text-gray-500">
                <i className="fas fa-check fa-sm p-1 bg-[#9FDE6A] rounded-full text-[#1A5402] mr-2"></i>{" "}
                Up to 10 individual users
              </li>
              <li className="text-base text-gray-500">
                <i className="fas fa-check fa-sm p-1 bg-[#9FDE6A] rounded-full text-[#1A5402] mr-2"></i>{" "}
                Basic chat and email support
              </li>
              <li className="text-base text-gray-500">
                <i className="fas fa-check fa-sm p-1 bg-[#9FDE6A] rounded-full text-[#1A5402] mr-2"></i>{" "}
                Lulu made this 😉
              </li>
            </ul>
            <button className="mt-10 bg-[#1A5402] text-lg   text-white rounded-lg px-20 py-3 hover:bg-[#9FDE6A] hover:text-black">
              Get started
            </button>
          </div>

          {/* Pricing Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            {isYearly ? (
              <p className="text-5xl font-bold text-black mt-2">$20</p>
            ) : (
              <p className="text-5xl font-bold text-black mt-2">$2</p>
            )}
            <h2 className="text-lg font-semibold pt-5 pb-1 text-gray-800">Pro</h2>
            {isYearly ? (
              <p className="text-sm  text-gray-500 ">Billed annually.</p>
            ) : (
              <p className="text-sm  text-gray-500 ">Billed monthly.</p>
            )}
          <ul className="mt-4  text-left space-y-2 pb-10">
              <li className="text-base  text-gray-500">
                <i className="fas fa-check fa-sm p-1 bg-[#9FDE6A] rounded-full  text-[#1A5402] mr-2"></i>{" "}
                Everything in Lite
              </li>
              <li className="text-base  text-gray-500">
                <i className="fas fa-check fa-sm p-1 bg-[#9FDE6A] rounded-full text-[#1A5402] mr-2"></i>{" "}
                Advance reporting & analytics
              </li>
              <li className="text-base  text-gray-500">
                <i className="fas fa-check fa-sm p-1 bg-[#9FDE6A] rounded-full text-[#1A5402] mr-2"></i>{" "}
                Up to 20 individual users
              </li>
              <li className="text-base text-gray-500">
                <i className="fas fa-check fa-sm p-1 bg-[#9FDE6A] rounded-full text-[#1A5402] mr-2"></i>{" "}
                Premium Templates
              </li>
              <li className="text-base text-gray-500">
                <i className="fas fa-check fa-sm p-1 bg-[#9FDE6A] rounded-full text-[#1A5402] mr-2"></i>{" "}
                Chat widget
              </li>
            </ul>
            <button className="mt-10 bg-[#1A5402] text-lg   text-white rounded-lg px-20 py-3 hover:bg-[#9FDE6A] hover:text-black">
              Get started
            </button>
          </div>

          {/* Pricing Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md   ">
            {isYearly ? (
              <p className="text-5xl font-bold text-black mt-2 ">$40</p>
            ) : (
              <p className="text-5xl font-bold text-black mt-2">$5</p>
            )}
            <h2 className="text-lg font-semibold pt-5 pb-1 text-gray-800">Enterprise Plan</h2>
            {isYearly ? (
              <p className="text-sm  text-gray-500 ">Billed annually.</p>
            ) : (
              <p className="text-sm  text-gray-500 ">Billed monthly.</p>
            )}
           <ul className="mt-4  text-left space-y-2 pb-10">
              <li className="text-base  text-gray-500">
                <i className="fas fa-check fa-sm p-1 bg-[#9FDE6A] rounded-full  text-[#1A5402] mr-2"></i>{" "}
                Advance reports
              </li>
              <li className="text-base  text-gray-500">
                <i className="fas fa-check fa-sm p-1 bg-[#9FDE6A] rounded-full text-[#1A5402] mr-2"></i>{" "}
                Dedicated assistant
              </li>
              <li className="text-base  text-gray-500">
                <i className="fas fa-check fa-sm p-1 bg-[#9FDE6A] rounded-full text-[#1A5402] mr-2"></i>{" "}
                Unlimited individual users
              </li>
              <li className="text-base text-gray-500">
                <i className="fas fa-check fa-sm p-1 bg-[#9FDE6A] rounded-full text-[#1A5402] mr-2"></i>{" "}
                Marketing tools  <button className="text-xs mx-3 rounded-full px-3 text-[#1A5402] bg-[#9FDE6A]">BETA</button>
              </li>
              <li className="text-base text-gray-500">
                <i className="fas fa-check fa-sm p-1 bg-[#9FDE6A] rounded-full text-[#1A5402] mr-2"></i>{" "}
                Basic chat and email support
              </li>
            </ul>
            <button className="mt-10 bg-[#1A5402] text-lg   text-white rounded-lg px-20 py-3 hover:bg-[#9FDE6A] hover:text-black">
              Get started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card1;
