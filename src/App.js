import "./styles.css";
import React from "react";
import { useState } from "react";

var billAmount, cashGiven;

export default function App() {
  const [errorMessage, setErrorMessage] = useState(" ");
  const [errorMessage2, setErrorMessage2] = useState(" ");
  const [numOfNotes, setNumOfNotes] = useState(["", "", "", "", "", "", ""]);
  const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

  function clickHandler() {
    if (Number(billAmount) > 0) {
      if (Number(billAmount) <= Number(cashGiven)) {
        calculateChange(Number(cashGiven) - Number(billAmount));
      } else alert("Do You Wish To wash the dishes");
    } else alert("Enter a valid Bill Amount");
  }

  function calculateChange(amount) {
    var nNotes = [];
    for (var i = 0; i < availableNotes.length; i++) {
      nNotes[i] = Math.trunc(amount / availableNotes[i]);
      amount = amount % availableNotes[i];
    }
    setNumOfNotes(nNotes);
  }

  function validateBill(c) {
    setNumOfNotes(["", "", "", "", "", "", ""]);
    if (Number(c) <= 0) {
      setErrorMessage("The Bill Amount should be greater than 0.");
    } else setErrorMessage(" ");
  }
  function validateCash(c) {
    setNumOfNotes(["", "", "", "", "", "", ""]);
    if (Number(c) <= 0) {
      setErrorMessage2("The Bill Amount should be greater than 0.");
    } else setErrorMessage2(" ");
  }

  return (
    <div className="App">
      <h1>Cash Register</h1>
      <label>
        Bill Amount
        <input
          type="number"
          id=""
          onChange={(e) => {
            billAmount = e.target.value;
            validateBill(e.target.value);
          }}
        />
      </label>
      <p className="error-message">{errorMessage}</p>
      <label>
        Cash Given
        <input
          type="number"
          id=""
          onChange={(c) => {
            validateCash(c.target.value);
            cashGiven = c.target.value;
          }}
        />
      </label>
      <p className="error-message">{errorMessage2}</p>
      <button onClick={clickHandler}>Calculate</button>

      <table>
        <caption>Return Change</caption>
        <tbody>
          <tr>
            <th>No of Notes</th>
            {numOfNotes.map((items) => {
              return <td>{items}</td>;
            })}
          </tr>
          <tr>
            <th>Available Notes</th>
            {availableNotes.map(function (notes) {
              return <td>{notes}</td>;
            })}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
