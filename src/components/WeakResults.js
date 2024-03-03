import React from "react";

function WeakResults({ weak }) {
  return (
    <div className="grid w-80 mt-5  mx-auto grid-cols-3 gap-1 h-10 ">
      {weak.map((weaks, index) => (
        <button
          key={index}
          className={`
            text-shadow-dark
            h-8
            bg-19
            border-2
            border-white
            border-double
            pointer-events-none
            text-lg
            text-white
            rounded-md  `}
        >
          {weak[index]}
        </button>
      ))}
    </div>
  );
}

export default WeakResults;
