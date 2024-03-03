import React from "react";

function Header({ type1, type2, clear }) {
  return (
    <div className="w-80 mx-auto">
      <h1
        className=" 
        w-100
        mx-auto
        mt-3
        text-center
        text-shadow-dark
        h-8
        bg-19
        border-2
        border-white
        border-double
        pointer-events-none
        text-lg
        text-white
        rounded-md"
      >
        {type2 ? `${type1}/${type2}` : type1}
      </h1>

      <button
        onClick={clear}
        style={{ marginLeft: "75%" }}
        className=" 
        w-20
        my-0
        h-6
        bg-white
        border-2
        border-black
        border-double
        text-sm
        text-black
        rounded-md
        transition duration-300 hover:bg-19 hover:text-white"
      >
        Clear
      </button>
    </div>
  );
}

export default Header;
