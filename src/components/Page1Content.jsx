```javascript
import React from "react";

const Page1Content = ({ head, para }) => {
  return (
    <div className="w-full sm:w-[50%] lg:w-[40%] flex flex-col items-end">
      <div className="border-6 border-zinc-200 w-[90%] p-2 mx-4">
        <div className="bg-white relative right-5 p-4 flex flex-col items-center gap-4 ">
          <h2 className="slide-head text-[#01345B] text-[1.4rem] text-center lg:text-[] sm:text-[1.7rem]  font-semibold">
            {head}
          </h2>
          <p className="slide-para text-[1rem] text-center sm:text-[1rem]">
            {para}
          </p>
          <button className='group cursor-pointer relative z-[0]  mt-
# Auto improvement by Melius