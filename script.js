"use strict";

const container = document.getElementById("container");

const grid = document.createElement("div");
grid.setAttribute("id", "griddie");
container.appendChild(grid);

function createdivs() {
  for (let i = 0; i <= 16; i++) {
    grid.innerHTML += "<div class='cell'></div>";
  }
}
createdivs();

