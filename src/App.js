import React from "react";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";
function App() {
    return (

        <div className="bg-neutral-900">
            <div className="bg-neutral-900 text-white mx-auto md:mt-[50px] w-full grow px-4 pt-[72px] md:mt-0 md:max-w-[888px] md:p-6 lg:max-w-screen-xl">
                <div className="flex xl:flex-row flex-col sm:flex-col overflow-visible lc-lg:flex-row lc-lg:space-x-4">
                    <LeftSide />
                    <RightSide />
                </div>
            </div>
        </div>

    );
}

export default App;
