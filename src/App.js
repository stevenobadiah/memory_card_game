import React, { useState, useEffect } from 'react';
import Images from './components/Images';
import './App.css';

function App() {
  const [gameActive, setGameActive] = useState(true)
  /*
  useEffect(() => {
  if (gameActive === false) {
    document.querySelectorAll(".toggle").forEach(a => a.style.visibility = "visible")
  }
  return (
    document.querySelectorAll(".toggle").forEach(a => a.style.visibility = "hidden")
  )
  }, [gameActive]);
  */

  const [score, setScore] = useState(0);
  useEffect(() => {
    if (score === 12) {
      setGameActive(false)
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

  function endGame() {
    setGameActive(false)
    document.querySelectorAll(".toggle").forEach(a => a.style.visibility = "visible")
    document.getElementById("popUp").classList.add('active')
  }

  function newGame() {
    setGameActive(true)
    document.querySelectorAll(".toggle").forEach(a => a.style.visibility = "hidden")
    document.getElementById("popUp").classList.remove('active')
    setScore(0)
  }

  return (
    <div>
      <header>
        <button className={"toggle"} id="btnGameOver" onClick={newGame}>Play Again</button>
        <h1>Memory Game</h1>
        <div id="scores">
          <p id="bestScore">Best Score: {bestScore}</p>
          <p id="currentScore">Score: {score}</p>
        </div>
      </header>
      <div id="popUp">
        <p id="gameOver">Game Over</p>
      </div>
      <main>
        <Images
          gameActive={gameActive}
          addScore={addScore}
          score={score}
          endGame={endGame}
        />
      </main>
    </div>
  );
}

export default App;
