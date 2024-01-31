/* eslint-disable react/prop-types */
import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

function Faq({ title, desc }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div
        className="faq_main container mx-auto px-5 lg:max-w-6xl md:max-w-6xl text-white mb-2"
        onClick={() => setOpen(!open)}
      >
        <div className="">
          <div className="main top bg-[#2d2d2d] hover:bg-[#414141] cursor-pointer flex  justify-between items-center px-5 py-4">
            {/* Left */}
            <div className="left">
              <h1 className="lg:text-2xl md:text-2xl text-xl">{title}</h1>
            </div>
            {/* Right */}
            <div className="right">
              {open ? (
                <AiOutlineMinus className="lg:text-4xl md:text-4xl text-2xl" />
              ) : (
                <AiOutlinePlus className="lg:text-4xl md:text-4xl text-2xl" />
              )}
            </div>
          </div>
          {open && (
            <div className="main bottom bg-[#2d2d2d] px-5 py-4 my-[1px] text-2xl">
              <p className="lg:text-start md:text-start text-justify cursor-pointer">
                {desc}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Faq;
