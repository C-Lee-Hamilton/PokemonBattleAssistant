import "./App.css";
import Logo from "./logo.png";
import WeaknessesComponent from "./components/WeaknessesCalc";
import Weaknesses from "./components/WeakResults";
import TypeButtons from "./components/TypeButtons";
import Header from "./components/Header";
import { React, useState, useEffect } from "react";

const App = () => {
  const [type1, setType1] = useState("");
  const [type2, setType2] = useState("");
  const [typeName, setTypeName] = useState("");
  const [weak, setWeak] = useState([]);

  const handleButtonClick = (e) => {
    if (type1 === "") {
      setType1(e);
    } else if (type1 !== "") {
      if (type2 === "") {
        setType2(e);
      } else {
        setType1(e);
        setType2("");
      }
    }
  };
  useEffect(() => {
    if (type1 !== type2) {
      setTypeName(`${type1}${type2}`);
    } else if (type1 === type2) {
      setTypeName(type1);
    }
  }, [type1, type2]);

  const clear = () => {
    setType1("");
    setType2("");
  };

  return (
    <div className="font-KM relative overflow-hidden ">
      <Header type1={type1} type2={type2} clear={clear} />
      <Weaknesses weak={weak} />
      <WeaknessesComponent typeName={typeName} setWeak={setWeak} />
      <div className="absolute w-80 top-1/8 left-1/2 transform -translate-x-1/2 -translate-y-1/8">
        <img className="" src={Logo} alt="none" />
      </div>
      <TypeButtons handleButtonClick={handleButtonClick} />
    </div>
  );
};

export default App;
