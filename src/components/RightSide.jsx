import React from "react";
import Accord from "./Accord";
import projects from "../projectcontent"
import courses from "../coursedata"
import Coursework from "./Coursework";
import intro from "../about";
function createAccord(project) {
    return <Accord {...project} />
}

function createCoursework(course) {
    return <Coursework {...course} />
}

function RightSide() {
    return (
        <div className="right w-full lc-lg:max-w-[calc(100%_-_316px)] rounded-lg mt:5 xl:pl-6 mt-5 xl:mt-0">
            <div className="flex md:flex-col flex-col mb-8 rounded-lg">
                <div className="bg-stone-800 rounded-lg">
                    <div className="justify-between p-0 text-label-1 dark:text-dark-label-1 break-all text-base font-semibold">
                        <div className="text-black-900 flex items-center">
                            <h1 className="p-3 font-semibold text-lg ">
                                About
                            </h1>
                        </div>
                    </div>

                    <div className="text-lg pl-3 pr-3 mb-4">
                        <p>  
                            {intro}
                        </p>
                    </div>
                </div>

                <div className="w-full bg-stone-800  mt-4 mb-4 rounded-lg">
                    <div className="justify-between p-0 text-label-1 dark:text-dark-label-1 break-all text-base font-semibold">
                        <div className="text-black-900 flex items-center">
                            <h1 className="pt-3 pl-3 font-semibold text-lg">
                                Coursework
                            </h1>
                        </div>
                    </div>
                    <div className="flex flex-rows space-x-0 space-y-3 pb-4">
                        <div className="flex items-center m-0 p-0 text-xs text-label-1 dark:text-dark-label-1 flex-wrap ml-2.5">
                            {courses.map(createCoursework)}
                        </div>
                    </div>
                </div>

                <div className="w-full rounded-lg bg-stone-800 mr-3 mb-4">
                    <div className="text-black-900 flex items-center">
                        <h1 className="pt-3 pl-3 font-semibold text-lg">
                            Projects
                        </h1>
                    </div>
                    <div className="flex justify-between p-0 text-label-1 dark:text-dark-label-1 font-semibold">
                        <div className="w-full">
                            {projects.map(createAccord)}
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    );
}

export default RightSide;
