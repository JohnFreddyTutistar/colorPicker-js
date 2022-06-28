const inputColor = document.querySelector("#inputColor")
const btnMostrar = document.querySelector("#btn-mostrar")
const colorParrafo = document.querySelector("#color")
const cajaColor = document.querySelector("#caja")
const modoOscuro = document.querySelector("#dark")
const fondoOscuro = document.querySelector("#fondoColor")
const titulo = document.querySelector("#titulo")
const botonLight = document.querySelector("#light")
const parrafoHex = document.querySelector("#color")
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

modoOscuro.addEventListener("click", () => {
    fondoOscuro.style.backgroundColor = "#222"
    titulo.style.color = "#fff"
    parrafoHex.style.color = "#fff"
})

botonLight.addEventListener("click", () => {
    fondoOscuro.style.backgroundColor = "#fff"
    titulo.style.color = "#255F85"
    parrafoHex.style.color = "#000"
});