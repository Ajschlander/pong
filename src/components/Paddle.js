import React, { useEffect, useState } from "react";
import "./Paddle.css";

export default function Paddle({isPlayerTwo}) {
  const [paddleY, setPaddleY] = useState(0);
  function handleMouse(e) {
    let boundedY;
    const offset = (window.innerHeight - 600) / 2;
    if (e.y - offset < 0) {
      boundedY = 0;
    } else if (e.y - offset > 450) {
      boundedY = 450;
    } else {
      boundedY = e.y - offset;
    }
    setPaddleY(boundedY);
  }
  useEffect(() => {
    window.addEventListener("mousemove", handleMouse);
  }, []);
  return (
    <div
    className={isPlayerTwo ? "paddle player2" : "paddle"}
      isPlayerTwo
      style={{
        top: `${paddleY}px`
        // transform: `translateX(calc(-50% + ${paddleX}px))`
      }}
    />
  );
}
