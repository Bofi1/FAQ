// cargar imagen responsivo
let imagen = document.getElementById("miImagen");

function cargar() {
  if (window.innerWidth <= 375) {
    console.log("fondo para mobile");
    imagen.src = "images/background-pattern-mobile.svg";
  } else {
    console.log("fondo para desktop");
    imagen.src = "images/background-pattern-desktop.svg";
    imagen.style.width = "100%";
  }
}

function resize() {
  window.addEventListener("resize", () => {
    if (window.innerWidth <= 375) {
      console.log("fondo para mobile");
      imagen.src = "images/background-pattern-mobile.svg";
    } else {
      console.log("fondo para desktop");
      imagen.src = "images/background-pattern-desktop.svg";
    }
  });
}

cargar();

resize();

let minus = document.getElementsByClassName("minus");
let plus = document.getElementsByClassName("plus");

// funciones para el boton minus
for (let i = 0; i < minus.length; i++) {
  minus[i].addEventListener("click", function (e) {
    let content = e.target.parentElement.parentElement.children[1];
    let minusButton = e.target;
    let plusButton = e.target.parentElement.children[2];

    content.classList.add("hidden");
    minusButton.classList.add("hidden");
    plusButton.classList.remove("hidden");
  });
}

// funcion para el boton plus
for (let i = 0; i < plus.length; i++) {
  plus[i].addEventListener("click", function (e) {
    let content = e.target.parentElement.parentElement.children[1];
    let plusButton = e.target;
    let minusButton = e.target.parentElement.children[1];

    content.classList.remove("hidden");
    minusButton.classList.remove("hidden");
    plusButton.classList.add("hidden");
  });
}
