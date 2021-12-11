"use strict";

const gridcontainer = document.getElementById("grid-container");

function makegrid() {
 for (let i = 1; i < 17; i++) {
 const cells = document.createElement("div");
 cells.classList.add("cell");
 gridcontainer.appendChild(cells);
  }
}
makegrid();