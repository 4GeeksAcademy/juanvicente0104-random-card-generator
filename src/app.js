/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { mapToStyles } from "@popperjs/core/lib/modifiers/computeStyles";

window.onload = function() {
  //write your code here
  //console.log("Hello Rigo from the console!");
  let numbers = [
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
  let figures = [
    { s: "♦", color: "red" },
    { s: "♥", color: "red" },
    { s: "♠", color: "black" },
    { s: "♣", color: "black" }
  ];

  let number = numbers[Math.floor(Math.random() * 13)];
  let figure = figures[Math.floor(Math.random() * 4)];

  document.querySelector(".number").innerHTML = number;
  document.querySelectorAll(".figure").forEach((element, index) => {
    element.innerHTML = figure.s;
    element.style.color = figure.color;
  });
};
