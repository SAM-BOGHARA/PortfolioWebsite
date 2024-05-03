import React, {Suspense} from "react";
import profile from "../images/shubham-pic.jpeg"
function ProfileCard() {
    return (
        <Suspense>
        <div className="flex space-x-4 mt-0">
            <div className ="rounded-xl overflow-hidden  w-full my-1 mt-0 ">
                <div className ="flex justify-center mt-2">
                    <img src={profile} alt="" className ="rounded border-white border-2 md:-mt-1 md:w-22 h-22  sm:w-25 sm:h-25 shrink-0 "></img>
                </div>
                <div className="flex flex-col items-center">
                    <div className="flex items-center">
                        <div className="text-label-1 dark:text-dark-label-1 break-all text-xl font-bold  mt-1">
                            Shubham Boghara
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="text-label-1 dark:text-dark-label-1 text-base font-semibold">
                            Full Stack Developer
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </Suspense>
    )
}

export default ProfileCard;