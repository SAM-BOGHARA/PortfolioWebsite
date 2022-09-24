import React from "react";

function Coursework(props) {
    return (
        <div className="text-xs">
            <div className="inline-flex bg-neutral-600 mt-2 items-center px-2 text-xs leading-6 mr-3 rounded-full text-label-3 dark:text-dark-label-3 bg-fill-3 dark:bg-dark-fill-3">
                {props.course}
            </div>
        </div>
    )
}

export default Coursework;