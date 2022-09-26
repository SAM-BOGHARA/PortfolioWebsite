import React from "react";
import ProfileCard from "./ProfileCard";
import Buttons from "./Buttons";
import Links from "./Links";
import Hr from "./Hr"
import Skills from "./Skills"

function LeftSide() {
    return (
        <div  className="bg-neutral-900 rounded-xl">

            <div
                className="left bg-stone-800 shadow-level3 dark:shadow-dark-level3 bg-layer-1 dark:bg-dark-layer-1 rounded-xl flex w-full min-w-[300px] flex-col px-4 md:pt-[21px] pb-[16px] lc-lg:w-[300px]">

                <div className="text-label-2 dark:text-dark-label-2 flex flex-col space-y-4">
                    <ProfileCard />
                    <Buttons />
                    <Links />
                </div>
                <div>
                    <Hr />
                </div>
                <div>
                    <Skills />
                </div>
            </div>
        </div>
    )
}

export default LeftSide;