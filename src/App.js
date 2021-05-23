import React, { Component, useState, useEffect } from 'react';
import ImageShuffler from './components/ImageShuffler';
import logo from './logo.svg';
import './App.css';

function App() {
  const [gameActive, setGameActive] = useState(true)

  const [score, setScore] = useState(0);
  useEffect(() => {
    if (score === 12) {
      setGameActive(false)
      document.getElementsByClassName("hidden").display = "block"
    }
    document.getElementById("currentScore").textContent = 'Score: ' + score;
  }, [score]);

  const addScore = () => {
    setScore(score + 1);
  };

  const [bestScore, setBestScore] = useState(0);
  useEffect(() => {
    if (score > bestScore) {
      setBestScore(score);
    }
    document.getElementById("bestScore").textContent = 'Best Score: ' + bestScore;
  }, [score, bestScore]);

  return (
    <div className="App">
      <header className="App-header">
        <p id="bestScore">Best Score: {bestScore}</p>
        <p id="currentScore">Score: {score}</p>
        <p className={"hidden"} id="gameOver">Game Over</p>
        <button className={"hidden"} id="btnGameOver">Play Again</button>
      </header>
      <main>
        <ImageShuffler
          gameActive={gameActive}
          addScore={addScore}
          score={score}
        />
      </main>
    </div>
  );
}

export default App;
