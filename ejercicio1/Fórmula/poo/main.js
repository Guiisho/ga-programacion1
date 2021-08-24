import Pitagoras from "./Pitágoras.js"

const ejecutar= () => {

    const instancia= new Pitagoras()
    
    //ejecuté el método calcular
    instancia.calcular()
}

 const boton= document.getElementById("btn_calcular")
boton.addEventListener("click", ejecutar)