import React, { useState, useEffect } from 'react';
import ImageShuffler from './components/ImageShuffler';
import './App.css';

function App() {
  const [gameActive, setGameActive] = useState(true)

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
    document.querySelectorAll(".toggle").forEach(a => a.style.display = "block")
  }

  function newGame() {
    setGameActive(true)
    document.querySelectorAll(".toggle").forEach(a => a.style.display = "none")
    setScore(0)
  }

  return (
    <div className="App">
      <header className="App-header">
        <p id="bestScore">Best Score: {bestScore}</p>
        <p id="currentScore">Score: {score}</p>
        <p className={"toggle"} id="gameOver">Game Over</p>
        <button className={"toggle"} id="btnGameOver" onClick={newGame}>Play Again</button>
      </header>
      <main>
        <ImageShuffler
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
