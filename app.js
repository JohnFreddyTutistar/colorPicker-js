const inputColor = document.querySelector("#inputColor")
const btnMostrar = document.querySelector("#btn-mostrar")
const colorParrafo = document.querySelector("#color")
const cajaColor = document.querySelector("#caja")
console.log(inputColor.value)

btnMostrar.addEventListener("click", () => {
    // console.log("click"); probar el boton en la consola
    console.log(inputColor.value)
    colorParrafo.textContent = inputColor.value
    cajaColor.style.backgroundColor = inputColor.value
    navigator.clipboard
        .writeText(inputColor.value)
        .then(() => console.log("texto copiado"))
        .catch((e) => console.log(e));
});