const ejecutar = () => {
  const botonCambio = document.getElementById("cambio1");
  botonCambio.addEventListener("click", cambiarColoresPares);
  function cambiarColoresPares() {
    const lista = document.querySelector(".frutas");

    for (let i = 0; i < lista.children.length; i++) {
      if (i % 2 != 0) {
        lista.children[i].style.backgroundColor = "#FFFDE4";
        lista.children[i].style.border = "solid black 2px";
        lista.children[i].style.borderRadius = "10px";
      } else {
        lista.children[i].style.backgroundColor = "rgba(0, 0, 0, 0)";
        lista.children[i].style.border = "none";
      }
    }
  }

  const botonCambio2 = document.getElementById("cambio2");
  botonCambio2.addEventListener("click", cambiarColoresImpares);
  function cambiarColoresImpares() {
    const lista = document.querySelector(".frutas");

    for (let i = 0; i < lista.children.length; i++) {
      if (i % 2 === 0) {
        lista.children[i].style.backgroundColor = "#FFFDE4";
        lista.children[i].style.border = "solid black 2px";
        lista.children[i].style.borderRadius = "10px";
      } else {
        lista.children[i].style.backgroundColor = "rgba(0, 0, 0, 0)";
        lista.children[i].style.border = "none";
      }
    }
  }
};
