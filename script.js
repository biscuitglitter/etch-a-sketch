"use strict";

const gridcontainer = document.getElementById("grid-container");
const blackbtn = document.getElementById("blackbtn")
const controls = document.querySelector(".controls")

/* function makegrid() {
 for (let i = 1; i < 17; i++) {
 const cells = document.createElement("div");
 cells.classList.add("cell");
 gridcontainer.appendChild(cells);
  }
}
makegrid(); */
let cols
let rows

const makebutton = document.createElement("button")
makebutton.setAttribute("id", "blackbtn");




function makegrid(cols, rows) {
for (let i = 0 ; i < (cols * rows); i++) {
const divs = document.createElement("div");
divs.style.border = "1px solid black"
gridcontainer.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
gridcontainer.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
gridcontainer.appendChild(divs);
divs.classList.add("cell");
}}

makegrid(16, 16);

function blackcolor() {
  let boxes = gridcontainer.querySelectorAll(".cell")
  for (let i = 0 ; i < (cols * rows); i++) {
  boxes.addEventListener("click", () => {
    boxes[i].forEach(box => box.addEventListener("mouseover", () => {
         box.style.background = "black";
    }))
  })
}}
blackcolor();
