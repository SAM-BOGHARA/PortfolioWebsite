import React from "react";

function Buttons() {
    return (
        <div class="buttons align-middle">
            <div className="buttons flex flex-rows">
                <a href="mailto:shubhamboghara444@gmail.com" className="w-full items-center ">
                    <button
                        className=" bg-neutral-600 text-white font-bold  py-2 px-4 w-full rounded inline-flex justify-center  hover:bg-neutral-700 hover:shadow-lg focus:bg-neutral-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-800 active:shadow-lg transition duration-150 ease-in-out">
                        <span >@ Contact Me</span>
                    </button>
                </a>    
            </div>
        </div>


    )
}


export default Buttons;