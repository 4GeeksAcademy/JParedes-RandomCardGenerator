/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function generateCard() {
  //generar un numero aleatorio
  let num = Math.floor(Math.random() * 13) + 1;
  switch (num) {
    case 1:
      num = "A";
      break;
    case 11:
      num = "J";
      break;
    case 12:
      num = "Q";
      break;
    case 13:
      num = "K";
      break;
  }

  //obtener figura aleatoria
  var figuras = ["♠", "♣", "♥", "♦"];
  var figura = figuras[Math.floor(Math.random() * 4)];

  let numberDom = document.getElementById("number");
  numberDom.innerText = num;
  let figureDom = document.querySelectorAll(".figure");
  figureDom[0].innerText = figura;
  figureDom[1].innerText = figura;
  //Depende de la figura establecer el color
  let cardDom = document.querySelector(".card");
  changeCard(cardDom);

  cardDom.classList.add(figura == "♠" || figura == "♣" ? "negro" : "rojo");
  // numberDom.classList.add(figura == "♠" || figura == "♣" ? "negro" : "rojo");
  // figureDom[0].classList.add(figura == "♠" || figura == "♣" ? "negro" : "rojo");
  // figureDom[1].classList.add(figura == "♠" || figura == "♣" ? "negro" : "rojo");
}

function changeCard(e) {
  if (e.classList.contains("negro")) {
    e.classList.remove("negro");
  } else {
    e.classList.remove("rojo");
  }
}

// al cargar la página
window.onload = function() {
  generateCard();

  document.querySelector(".card").addEventListener("click", generateCard);
};

// cambie la carta cada 10 segundos
setInterval(generateCard, 1000);

function changeSize() {
  let width = document.getElementById("width").value;
  let height = document.getElementById("height").value;
  let cardSize = document.querySelector(".card");

  cardSize.style.width = width + "px";

  if (parseInt(height) >= 250) {
    cardSize.style.height = height + "px";
  } else {
    alert("Height debe ser mayor a 250");
  }
}

let button = document.querySelector("button");
button.addEventListener("click", changeSize);
