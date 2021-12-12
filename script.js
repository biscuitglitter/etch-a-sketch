"use strict";

const gridcontainer = document.getElementById("grid-container");
const controls = document.querySelector(".controls")
const cell = document.getElementById(".cell")


let rows
let columns
let total = (rows * columns)
let input 
let colorpicker 

const applybtn = document.createElement("button")
applybtn.setAttribute("id", "applybtn");
controls.appendChild(applybtn)
applybtn.textContent = "Apply color"

const blackbtn = document.createElement("button")
blackbtn.setAttribute("id", "blackbtn");
controls.appendChild(blackbtn)
blackbtn.textContent = "Black"

const resetbtn = document.createElement("button")
resetbtn.setAttribute("id", "resetbtn");
controls.appendChild(resetbtn)
resetbtn.textContent = "Reset"

const rainbowbtn = document.createElement("button")
rainbowbtn.setAttribute("id", "rainbowbtn");
controls.appendChild(rainbowbtn)
rainbowbtn.textContent = "Rainbow"

function cleargrid () {
  const boxes = gridcontainer.querySelectorAll(".cell");
  boxes.forEach(box => box.remove())
 }

function resizegrid() {
resetbtn.addEventListener("click", () => {
  cleargrid()
input = (prompt("How many squares would you like?: "))
  if (input > 0 && input < 65) {
  makegrid(input, input)
  defaultcolor()
  rainbowgrid() 
  colorchoice()
  } else if (input > 64) {
    makegrid(16, 16)
    defaultcolor()
    rainbowgrid() 
    alert("Max is 64")
  } else if (input === null || input != Number) {
  alert("Please enter a valid number");
  makegrid(16, 16)
  defaultcolor()
  rainbowgrid() 
  colorchoice()
  }
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
          box.style.background =  `hsl(${Math.random() * 360}, 100%, 64%)`
      boxes.forEach(box => box.addEventListener("mouseover", () => {    
        box.style.background =  `hsl(${Math.random() * 360}, 100%, 64%)`
      }))
    }))
  })
}
rainbowgrid();



function colorchoice() {
  let boxes = gridcontainer.querySelectorAll(".cell")
  applybtn.addEventListener("click", () => {  
    getcolorvalue()
    boxes.forEach(box => box.addEventListener("mousedown", () => {
       box.style.background = document.querySelector("#color").value
       console.log(colorpicker)
      boxes.forEach(box => box.addEventListener("mouseover", () => {    
        box.style.background = document.querySelector("#color").value
        console.log(colorpicker)
      }))
    }))
  })
}
colorchoice()

function getcolorvalue() {
  colorpicker = document.querySelector("#color").value
}


  