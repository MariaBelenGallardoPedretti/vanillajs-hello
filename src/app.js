/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const button = document.getElementById("botonContarClicks");

  button.addEventListener("click", event => {
    button.textContent = `Recuento de clics: ${event.detail}`;
    excusa();
  });

  function excusa() {
    let resultado;
    let who = ["El caballo", "Mi mamá", "Mi perro", "El loro", "La hormiga"];
    let action = ["comió", "destruyó", "lanzó", "mordió", "pateó", "rompió"];
    let what = [
      "mi ordenador",
      "mi trabajo",
      "mis apuntes",
      "mi teléfono",
      "mi auto",
      "mis pantalones"
    ];
    let when = [
      "cuando estaba en el gimnasio",
      "cuando volvía de pasear",
      "cuando me estaba bañando",
      "mientras cocinaba"
    ];
    resultado =
      who[Math.floor(Math.random() * (who.length - 1))] +
      " " +
      action[Math.floor(Math.random() * (when.length - 1))] +
      " " +
      what[Math.floor(Math.random() * (what.length - 1))] +
      " " +
      when[Math.floor(Math.random() * (when.length - 1))];

    document.getElementById("excuse").innerHTML = resultado;
  }
  let contadorDeClicks = 0;
  function contarClicks() {
    contadorDeClicks++;
    if (contadorDeClicks > 6) {
      alert(
        "¡Has superado las excusas posibles por el día de hoy! ¡A trabajar!"
      );
    }
  }

  document
    .getElementById("botonContarClicks")
    .addEventListener("click", excusa);
  document
    .getElementById("botonContarClicks")
    .addEventListener("click", contarClicks);

  return excusa();
};
