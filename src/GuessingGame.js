import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { propTypes } from "react-bootstrap/esm/Image";
import GuessList from "./GuessList";
import styles from "./GuessingGame.css";

function GuessingGame() {
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("Start Guessing");
  const [randomNumber, setRandomNumber] = useState(null);
  const [timesGuessed, setTimesGuessed] = useState(null);

  useEffect(() => {
    if (randomNumber === null) {
      setRandomNumber(
        JSON.parse(localStorage.getItem("randomNumber")) || getRandom()
      );
    }

    if (timesGuessed === null) {
      setTimesGuessed(JSON.parse(localStorage.getItem("timesGuessed")) || 0);
    }
  }, [guess, randomNumber, timesGuessed]);

  // function to get random number
  function getRandom() {
    const randomNumber = Math.floor(Math.random() * 100);

    localStorage.setItem("randomNumber", JSON.stringify(randomNumber));

    return randomNumber;
  }

  function handleSubmit(e) {
    e.preventDefault();

    const parsedNum = parseInt(guess);

    if (parsedNum === randomNumber) {
      setMessage("congrats you guessed it!");
      setTimesGuessed(timesGuessed + 1);
      localStorage.setItem("timesGuessed", JSON.stringify(timesGuessed + 1));
    } else if (parsedNum > randomNumber) {
      setMessage("that is too high");
      setTimesGuessed(timesGuessed + 1);
      localStorage.setItem("timesGuessed", JSON.stringify(timesGuessed + 1));
    } else {
      setMessage("that is too low");
      setTimesGuessed(timesGuessed + 1);
      localStorage.setItem("timesGuessed", JSON.stringify(timesGuessed + 1));
    }
  }

  function handleChange(event) {
    if (!isNaN(event.target.value)) {
      setGuess(event.target.value);
    } else {
      alert("Please type in a number");
    }
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Guess a number</Form.Label>
          <Form.Control onChange={handleChange} />
          <Form.Label>{message}</Form.Label>
        </Form.Group>

        <Button type="submit">Submit</Button>
      </Form>
    </>
  );
}

export default GuessingGame;

// const [buttonClick, setButton] = useState(false);

// function updateClick(event) {
//   setButton(true);
//   props.setGuess((prevNumberGuesses) => {
//     return prevNumberGuesses + 1;
//   });
// }

// function DisplayGuess(event) {
//   setButton(false);
//   props.onGuess(event.target.value);
//   localStorage.setItem("guess", JSON.stringify(props.numberGuess));
//   return (props.numberGuess = JSON.parse(localStorage.getItem("guess")));
// }
// console.log(props.randomNumber);
// function Reset() {
//   props.setRandom(Math.floor(Math.random() * 100));
//   setButton(false);
//   props.setGuess(0);
//   props.onGuess("");
// }

// <div className="form1">
//   <p>
//     I am thinking of a number between 1 and 100. Guess the Lucky Number...
//     {<p>You have made {props.numberGuess} guesses </p>}
//   </p>
//   <Form.Control type="text" value={props.guesses} onChange={DisplayGuess} />
//   <br />
//   <Button onClick={updateClick} variant="outline-primary">
//     Guess
//   </Button>
//   <br />
//   <br />
//   <Button onClick={Reset} variant="outline-danger">
//     Reset
//   </Button>
//   {buttonClick && props.randomNumber == props.guesses && (
//     <p>Correct number!</p>
//   )}
//   {buttonClick && props.randomNumber > props.guesses && <p>Too Low</p>}
//   {buttonClick && props.randomNumber < props.guesses && <p>Too High</p>}
// </div>
