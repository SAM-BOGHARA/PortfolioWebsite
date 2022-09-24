import React from "react";
import profile from "../images/profile.jpg"
function ProfileCard() {
    return (
        <div className="flex space-x-4 ">
            <div class="rounded-xl overflow-hidden  w-full my-3 ">
                <img src="https://wallpapercave.com/dwp1x/wp11301620.jpg" class="w-full" alt="" />
                <div class="flex justify-center -mt-8">
                    <img src={profile} alt="" class="rounded-full border-solid border-white border-2  md:-mt-1 md:w-20 h-20  sm:w-25 sm:h-25 shrink-0 "></img>
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
    )
}

export default ProfileCard;