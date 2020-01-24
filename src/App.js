import React from 'react';
import './App.css';
import Paddle from './components/Paddle';

function App() {
  return (
    <div className="container">
      <Paddle />
      <Paddle isPlayerTwo />
    </div>
  );
}

export default App;
