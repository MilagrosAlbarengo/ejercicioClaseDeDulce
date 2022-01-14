const elementoNumeroUno = document.getElementById("primer-input");
const elementoNumeroDos = document.getElementById("segundo-input");
const elementoBotonDescuento = document.getElementById("boton-descuento");

function descuentoPrecioIngresado() {
  let descuento = Number(elementoNumeroUno.value) - elementoNumeroDos.value;
  console.log("el precio con descuento es:", descuento);
}
elementoBotonDescuento?.addEventListener("click", descuentoPrecioIngresado);
