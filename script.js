"use strict";

const gridcontainer = document.getElementById("grid-container");
const controls = document.querySelector(".controls")
const cell = document.getElementById(".cell")

let rows
let columns
let total = (rows * columns)
let input 

const blackbtn = document.createElement("button")
blackbtn.setAttribute("id", "blackbtn");
controls.appendChild(blackbtn)
blackbtn.textContent = "Black"

const rainbowbtn = document.createElement("button")
rainbowbtn.setAttribute("id", "rainbowbtn");
controls.appendChild(rainbowbtn)
rainbowbtn.textContent = "Rainbow"

const resetbtn = document.createElement("button")
resetbtn.setAttribute("id", "resetbtn");
controls.appendChild(resetbtn)
resetbtn.textContent = "Reset"

document.querySelector("#resetbtn").addEventListener('click', resetgrid);

 /* function resetgrid () {
   input = prompt("How many squares would you like?: ");
    makegrid(input, input) 
  }  */


function resetgrid () {
 const boxes = gridcontainer.querySelectorAll(".cell");
 boxes.forEach(box => box.remove())
 }



function resizegrid() {
resetbtn.addEventListener("click", () => {
input = prompt("How many squares would you like?: ")
resetgrid()
makegrid(input, input)
defaultcolor()
rainbowgrid() 
})
}
resizegrid();




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


function defaultcolor() {
  let boxes = gridcontainer.querySelectorAll(".cell")
   blackbtn.addEventListener("click", () => {
     boxes.forEach(box => box.addEventListener("mousedown", () => {
          box.style.background = "black"; 
          boxes.forEach(box => box.addEventListener("mouseover", () => {
            box.style.background = "black";
          }))
     }))
   })
 }
 defaultcolor();

function rainbowgrid() {
  let boxes = gridcontainer.querySelectorAll(".cell")
  rainbowbtn.addEventListener("click", () => {  
    boxes.forEach(box => box.addEventListener("mousedown", () => {
      let r = Math.floor(Math.random() * 410);
      let g = Math.floor(Math.random() * 410);
      let b = Math.floor(Math.random() * 410);
      box.style.background = `rgb(${r}, ${g}, ${b})`
      boxes.forEach(box => box.addEventListener("mouseover", () => {
        let r = Math.floor(Math.random()  * 410);
        let g = Math.floor(Math.random()  * 410);
        let b = Math.floor(Math.random() * 410); 
      box.style.background = `rgb(${r}, ${g}, ${b})`       
      }))
    }))
  })
}
rainbowgrid();

