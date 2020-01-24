import React, {useEffect, useState} from 'react';
import "./Paddle.css";

export default function Paddle({isPlayerTwo}){
    let [paddleY, setPaddleY] = useState(0);

    let handleMouse = e => {
        setPaddleY(e.y);
    }

    useEffect(() => {
        window.addEventListener("mousemove", handleMouse)
    }, [])

    return (
        <div className={isPlayerTwo ? "paddle player2" : "paddle"} style={{top: `${paddleY}px`}}>

        </div>
    )
}