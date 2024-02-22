/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const randomSuit = generateRandomSuits();
  document.querySelectorAll(".uppersuit, .bottomsuit").forEach(element => {
    element.innerHTML = randomSuit;
    if (randomSuit === "♦" || randomSuit === "♥") {
      element.classList.add("red-symbol");
    }
  });

  document.querySelector(".number").innerHTML = generateRandomNumbers();
};

let generateRandomNumbers = () => {
  const numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let indexNumbers = Math.floor(Math.random() * numbers.length);
  return numbers[indexNumbers];
};

let generateRandomSuits = () => {
  const suits = ["♦", "♥", "♠", "♣"];
  let indexSuits = Math.floor(Math.random() * suits.length);
  return suits[indexSuits];
};

console.log("Hello Rigo from the console!");

//
