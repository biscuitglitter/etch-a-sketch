"use strict";

const gridcontainer = document.getElementById("grid-container");
const controls = document.querySelector(".controls")
const cell = document.getElementById(".cell")

let rows
let columns
let total = (rows * columns)

const startbtn = document.createElement("button")
startbtn.setAttribute("id", "startbtn");
controls.appendChild(startbtn)
startbtn.textContent = "Start"

const resetbtn = document.createElement("button")
resetbtn.setAttribute("id", "resetbtn");
controls.appendChild(resetbtn)
resetbtn.textContent = "Reset"

const rainbowbtn = document.createElement("button")
rainbowbtn.setAttribute("id", "rainbowbtn");
controls.appendChild(rainbowbtn)
rainbowbtn.textContent = "Rainbow"

function makegrid(columns, rows) {
total = (rows * columns)
for (let i = 0 ; i < total; i++) {
const divs = document.createElement("div");
gridcontainer.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
gridcontainer.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
gridcontainer.appendChild(divs);
divs.classList.add("cell");
}}
makegrid(16, 16);


function startgame() {
 let boxes = gridcontainer.querySelectorAll(".cell")
  startbtn.addEventListener("click", () => {
    boxes.forEach(box => box.addEventListener("mousedown", () => {
         box.style.background = "black"; 
         boxes.forEach(box => box.addEventListener("mouseover", () => {
           box.style.background = "black";
         }))
    }))
  })
}
startgame();


function rainbowgrid() {
  let boxes = gridcontainer.querySelectorAll(".cell")
  rainbowbtn.addEventListener("click", () => {  
    boxes.forEach(box => box.addEventListener("mousedown", () => {
      let r = Math.floor(Math.random() * 500);
      let g = Math.floor(Math.random() * 500);
      let b = Math.floor(Math.random() * 500);
      box.style.background = `rgb(${r}, ${g}, ${b})`
      boxes.forEach(box => box.addEventListener("mouseover", () => {
        let r = Math.floor(Math.random()  * 500);
        let g = Math.floor(Math.random()  * 500);
        let b = Math.floor(Math.random() * 500); 
      box.style.background = `rgb(${r}, ${g}, ${b})`       
      }))
    }))
  })
}
rainbowgrid();



function cleargrid () {
  resetbtn.addEventListener("click", () => {
    gridcontainer.innerHTML = ""; 
    makegrid(16, 16);
    startgame();
  })}
cleargrid();
