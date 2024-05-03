import React from "react";

function Accord(props) {
  return (
    <div className="ml-1.5 mr-1.5 p-4 pl-3 mb-3 hover:shadow-2xl rounded-lg bg-stone-800 hover:bg-stone-700 text-white focus:bg-stone-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-800 active:shadow-lg transition duration-150 ease-in-out">
      <h2 className="font-semibold text-3xl mb-5">{props.title}</h2>
      <ul className="font-normal text-wrap">{props.description}</ul>
      <ul
        className=" font-bold  text-wrap"
      >
        {props.techstack}
      </ul>
      <div className="flex flex-rows space-x-5">
        {props.github && (
          <a
            href={props.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 mt-4 mr-15 bg-neutral-600 text-white font-medium text-xs uppercase rounded shadow-md hover:bg-neutral-700 hover:shadow-lg focus:bg-neutral-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-800 active:shadow-lg transition duration-150 ease-in-out"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
          >
            Github Repo
          </a>
        )}
        {props.link && (
          <a
            href={props.link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 mt-4 mr-15 bg-neutral-600 text-white font-medium text-xs uppercase rounded shadow-md hover:bg-neutral-700 hover:shadow-lg focus:bg-neutral-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-800 active:shadow-lg transition duration-150 ease-in-out"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}

export default Accord;
