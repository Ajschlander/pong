import React, {useEffect, useReducer} from 'react';
import './App.css';
import Paddle from './components/Paddle';
import Ball from './components/Ball';

const initialState = {
  paddle: {
    y: 0
  },
  ball: {
    x: 0,
    y: 0,
    dx: 5,
    dy: 5
  }
};

function reducer(state, action) {
  switch (action.type) {
    case "MOVE_PADDLE":
      return { ...state, paddle: action.payload };
    case "MOVE_BALL":
      return { ...state, ball: action.payload };
    default:
      throw new Error();
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleMouse(e) {
    let boundedY;
    const offset = (window.innerWidth - 600) / 2;
    if (e.y - offset < 0) {
      boundedY = 0;
    } else if (e.y - offset > 450) {
      boundedY = 450;
    } else {
      boundedY = e.y - offset;
    }
    dispatch({
      type: "MOVE_PADDLE",
      payload: {
        y: boundedY
      }
    });
  }
  useEffect(() => {
    window.addEventListener("mousemove", handleMouse);
  }, []);

  useEffect(() => {
    const handle = setTimeout(() => {
      let x = state.ball.x;
      let y = state.ball.y;
      let dx = state.ball.dx;
      let dy = state.ball.dy;

      let paddleY = state.paddle.y;

      if (dx + dx > 1200 - 20 || dx + dx < 0) {
        dx = -dx;
      }
      if (y + dy > 800 - 20 || y + dy < 0) {
        dy = -dy;
      }

      if((x > 340 || x < 340) && paddleY < y + dy && paddleY + 100 > y + dy){
        dx = -dx;
      }

      dispatch({
        type: "MOVE_BALL",
        payload: {
          dx,
          dy,
          x: state.ball.x,
          y: state.ball.y
        }
      });
    }, 50);
    return () => clearTimeout(handle);
  }, [state.ball]);
  return (
    <div className="container">
      <Paddle />
      <Paddle isPlayerTwo />
      <Ball />
    </div>
  );
}

export default App;
