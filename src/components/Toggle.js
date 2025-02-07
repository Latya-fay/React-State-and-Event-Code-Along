import React, { useState } from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false);

  function handleClick() {
    setIsOn((prevIsOn) => !prevIsOn);
  }

  return (
    <button 
      style={{ background: isOn ? "red" : "white" }} 
      onClick={handleClick}
    >
      {isOn ? "ON" : "OFF"}
    </button>
  );
}

export default Toggle;
