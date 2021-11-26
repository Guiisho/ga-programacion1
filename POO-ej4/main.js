import Anime from "./anime.js"

const mostrar = () => {

    const fotos= new Anime ()

    fotos.obtenerCatalogo()


}

const boton= document.getElementById("btn_boton")
boton.addEventListener("click", mostrar)