import React, { useState } from "react";

function CircleOnClick() {
  const [circles, setCircles] = useState([]);


  const handleClick = (e) => {
    const { clientX, clientY } = e;
    setCircles((prevCircles) => [
      ...prevCircles,
      { x: clientX, y: clientY }
    ]);
  };

  return (
    <div
      onClick={handleClick}
      style={{
        width: "100vw",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#f0f0f0"
      }}
    >
      {circles.map((circle, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            top: circle.y - 10,
            left: circle.x - 10,
            width: 50,
            height: 50,
            borderRadius: "50%",
            backgroundColor: "blue",
          }}
        ></div>
      ))}
    </div>
  );
}

export default CircleOnClick;
