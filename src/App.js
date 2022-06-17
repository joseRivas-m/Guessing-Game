import React, { useState } from "react";
import GuessingGame from "./GuessingGame";

function App() {
  const [guess, setGuess] = useState(0);
  const [numGuesses, setnumGuesses] = useState(0);
  const [randomNum, setRandomNum] = useState(Math.floor(Math.random() * 100));

  function handleGuess(guess) {
    setGuess(guess);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <GuessingGame
        setRandom={setRandomNum}
        numberGuess={numGuesses}
        setGuess={setnumGuesses}
        guesses={guess}
        onGuess={setGuess}
        randomNumber={randomNum}
      />
    </div>
  );
}

export default App;
