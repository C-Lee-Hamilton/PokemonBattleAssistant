import React from "react";

function TypeButtons({ handleButtonClick }) {
  const darkColor = [
    "#88887a",
    "#cc361b",
    "#297acc",
    "#cca329",
    "#5fa344",
    "#52a3cc",
    "#9e4839",
    "#88447a",
    "#b19644",
    "#6d7acc",
    "#cc447a",
    "#88961b",
    "#968852",
    "#525296",
    "#5f52be",
    "#5f4436",
    "#888896",
    "#be7abe",
  ];
  const colors = [
    "bg-1",
    "bg-2",
    "bg-3",
    "bg-4",
    "bg-5",
    "bg-6",
    "bg-7",
    "bg-8",
    "bg-9",
    "bg-10",
    "bg-11",
    "bg-12",
    "bg-13",
    "bg-14",
    "bg-15",
    "bg-16",
    "bg-17",
    "bg-18",
  ];

  const typeNames = [
    "NORMAL",
    "FIRE",
    "WATER",
    "ELECTRIC",
    "GRASS",
    "ICE",
    "FIGHTING",
    "POISON",
    "GROUND",
    "FLYING",
    "PSYCHIC",
    "BUG",
    "ROCK",
    "GHOST",
    "DRAGON",
    "DARK",
    "STEEL",
    "FAIRY",
  ];

  return (
    <div className="grid w-80 mt-40 mb-20 mx-auto grid-cols-3 gap-1 ">
      {colors.map((color, index) => (
        <button
          key={index}
          style={{
            border: `2px ${darkColor[index]} double`,
          }}
          className={`
        ${color}
        text-shadow-dark
        h-8
        text-lg
        text-white
        rounded-md  transition duration-300 hover:bg-opacity-80 hover:text-black `}
          onClick={() => handleButtonClick(typeNames[index])}
        >
          {typeNames[index]}
        </button>
      ))}
    </div>
  );
}

export default TypeButtons;
