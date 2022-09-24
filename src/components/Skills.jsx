import React from "react";
// import skills from "../skills";
// import SkillType from "../SkillType";

// function createSkillType(skill) {
//     return <SkillType {...skill} />
// }


function Skills() {
    return (
        <div>
            <div className="text-lg font-semibold leading-6">
                Skills
            </div>
            <div className="mt-4 flex flex-col space-y-4">
                <div>
                    <div class="flex items-center text-xs"><span class="mr-1.5 flex"><span class="inline-block h-1 w-1 rounded-full bg-yellow-300 dark:bg-dark-red-s"></span></span><span class="font-medium">Languages</span></div>
                </div>
                <div className="flex items-center text-xs text-label-1 dark:text-dark-label-1 flex-wrap ">
                    <div className="text-xs">
                        <span color="text-label-2 dark:text-dark-label-2"></span>
                        <div
                            className="inline-flex bg-neutral-600  mr-3 items-center px-2 text-xs leading-6 rounded-full text-label-3 dark:text-dark-label-3 bg-fill-3 dark:bg-dark-fill-3">
                            Python
                        </div>
                    </div>
                    <div className="text-xs">
                        <span color="text-label-2 dark:text-dark-label-2"></span>
                        <div
                            className="inline-flex bg-neutral-600  mr-3 items-center px-2 whitespace-nowrap text-xs leading-6 rounded-full text-label-3 dark:text-dark-label-3 bg-fill-3 dark:bg-dark-fill-3">
                            JavaScript
                        </div>
                    </div>
                    <div className="text-xs">
                        <span color="text-label-2 dark:text-dark-label-2"></span>
                        <div
                            className="inline-flex bg-neutral-600  mr-3 items-center px-2 whitespace-nowrap text-xs leading-6 rounded-full text-label-3 dark:text-dark-label-3 bg-fill-3 dark:bg-dark-fill-3">
                            NodeJS
                        </div>
                    </div>
                    <div className="text-xs">
                        <span color="text-label-2 dark:text-dark-label-2"></span>
                        <div
                            className="inline-flex bg-neutral-600  mr-3 items-center px-2 whitespace-nowrap text-xs leading-6 rounded-full text-label-3 dark:text-dark-label-3 bg-fill-3 dark:bg-dark-fill-3">
                            Java
                        </div>
                    </div>
                    <div className="text-xs">
                        <span color="text-label-2 dark:text-dark-label-2"></span>
                        <div
                            className="inline-flex  bg-neutral-600 items-center px-2 mr-3 whitespace-nowrap text-xs leading-6 rounded-full text-label-3 dark:text-dark-label-3  bg-fill-3 dark:bg-dark-fill-3">
                            SQL
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-4 flex flex-col space-y-4">
                <div>
                    <div class="flex items-center text-xs"><span class="mr-1.5 flex"><span class="inline-block h-1 w-1 rounded-full bg-red-500 dark:bg-dark-red-s"></span></span><span class="font-medium">Frameworks</span></div>
                </div>

                <div className="flex items-center text-xs text-label-1 dark:text-dark-label-1 flex-wrap ">
                    <div className="text-xs">
                        <span color="text-label-2 dark:text-dark-label-2"></span>
                        <div
                            className="inline-flex bg-neutral-600  mr-3 items-center px-2 text-xs leading-6 rounded-full text-label-3 dark:text-dark-label-3 bg-fill-3 dark:bg-dark-fill-3">
                            ExpressJS
                        </div>
                    </div>
                    <div className="text-xs">
                        <span color="text-label-2 dark:text-dark-label-2"></span>
                        <div
                            className="inline-flex bg-neutral-600  mr-3 items-center px-2 text-xs leading-6 rounded-full text-label-3 dark:text-dark-label-3 bg-fill-3 dark:bg-dark-fill-3">
                            RestAPI
                        </div>
                    </div>
                    <div className="text-xs">
                        <span color="text-label-2 dark:text-dark-label-2"></span>
                        <div
                            className="inline-flex bg-neutral-600  mr-3 items-center px-2 whitespace-nowrap text-xs leading-6 rounded-full text-label-3 dark:text-dark-label-3 bg-fill-3 dark:bg-dark-fill-3">
                            Flask
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="mt-4 flex flex-col space-y-4">
                <div>
                    <div class="flex items-center text-xs"><span class="mr-1.5 flex"><span class="inline-block h-1 w-1 rounded-full bg-blue-400 dark:bg-dark-red-s"></span></span><span class="font-medium">Frontend</span></div>
                </div>

                <div className="flex items-center text-xs text-label-1 dark:text-dark-label-1 flex-wrap  ">
                    <div className="text-xs">
                        <span color="text-label-2 dark:text-dark-label-2"></span>
                        <div
                            className="inline-flex bg-neutral-600  mr-3 items-center px-2 text-xs leading-6 rounded-full text-label-3 dark:text-dark-label-3 bg-fill-3 dark:bg-dark-fill-3">
                            React
                        </div>
                    </div>
                    <div className="text-xs">
                        <span color="text-label-2 dark:text-dark-label-2"></span>
                        <div
                            className="inline-flex bg-neutral-600  mr-3 items-center px-2 whitespace-nowrap text-xs leading-6 rounded-full text-label-3 dark:text-dark-label-3 bg-fill-3 dark:bg-dark-fill-3">
                            Astro
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-4 flex flex-col space-y-4">
                <div>
                    <div class="flex items-center text-xs"><span class="mr-1.5 flex"><span class="inline-block h-1 w-1 rounded-full bg-green-400 dark:bg-dark-red-s"></span></span><span class="font-medium">Databases</span></div>
                </div>

                <div className="flex items-center text-xs text-label-1 dark:text-dark-label-1 flex-wrap ">
                    <div className="text-xs">
                        <span color="text-label-2 dark:text-dark-label-2"></span>
                        <div
                            className="inline-flex bg-neutral-600  mr-3 items-center px-2 text-xs leading-6 rounded-full text-label-3 dark:text-dark-label-3 bg-fill-3 dark:bg-dark-fill-3">
                            MySQL
                        </div>
                    </div>
                    <div className="text-xs">
                        <span color="text-label-2 dark:text-dark-label-2"></span>
                        <div
                            className="inline-flex bg-neutral-600  mr-3 items-center px-2 whitespace-nowrap text-xs leading-6 rounded-full text-label-3 dark:text-dark-label-3 bg-fill-3 dark:bg-dark-fill-3">
                            MongoDB
                        </div>
                    </div>
                    <div className="text-xs">
                        <span color="text-label-2 dark:text-dark-label-2"></span>
                        <div
                            className="inline-flex bg-neutral-600  mr-3 items-center px-2 whitespace-nowrap text-xs leading-6 rounded-full text-label-3 dark:text-dark-label-3 bg-fill-3 dark:bg-dark-fill-3">
                            Redis
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;