import React from "react";
import resume from "../images/ShubhamB-Resume.pdf";

function Buttons() {
    return (
      <div className="buttons align-middle">
        <div className="buttons flex flex-col ">
          <a
            href="mailto:shubhambogharajobs@gmail.com"
            className="w-full items-center p-1"
          >
            <button className=" bg-neutral-600 text-white font-bold  py-2 px-4 w-full rounded inline-flex justify-center  hover:bg-neutral-700 hover:shadow-lg focus:bg-neutral-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-800 active:shadow-lg transition duration-150 ease-in-out">
              <span>Email me!</span>
            </button>
          </a>
          <a
            href={resume}
  download="ShubhamB-Resume.pdf" 
            className="w-full items-center p-1"
          >
            <button className=" bg-green-600 text-white font-bold  py-2 px-4 w-full rounded inline-flex justify-center  hover:bg-green-400 hover:shadow-lg focus:bg-neutral-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-800 active:shadow-lg transition duration-150 ease-in-out">
              <span>Download Resume</span>
            </button>
          </a>
        </div>
      </div>
    );
}


export default Buttons;