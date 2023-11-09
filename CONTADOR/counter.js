const counter = document.querySelector(".counter");
let contador = 0;

const aumentar = (event) => {
  //alert("has hecho click en el boton aumentar");
  contador += 1;
  counter.innerText = contador;
  if (contador > 0) {
    counter.classList.add("positivo");
  }
  if (contador === 13) {
    alert("aqui las tengo para que me las bese");
  }
};
const decrementar = (event) => {
  //alert("has hecho click en el boton decrementar");
  contador -= 1;
  counter.innerText = contador;
  if (contador < 0) {
    counter.classList.add("negativo");
  }
};

const reset = (event) => {
  //alert("has hecho click en el boton reset");
  contador = 0;
  counter.textContent = contador;
  counter.classList.remove("positivo");
  counter.classList.remove("negativo");
};

module.exports = { aumentar, decrementar, reset };

//module.exports = { counter, aumentar, decrementar, reset };
