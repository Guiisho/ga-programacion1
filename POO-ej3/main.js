import Comentario from "./comentarios.js"

const mostrar = () => {

    const fotos= new Comentario ()

    //ejecuté o llamé al método return
    fotos.obtenerFotografias()


}

const boton= document.getElementById("btn_boton")
boton.addEventListener("click", mostrar)


const mostrar2= ()=> {
    const fotos= new Comentario()
    fotos.obtenerFotografias()
}

const boton2= document.getElementById("btn_boton2")
boton2.addEventListener("click", mostrar2)
