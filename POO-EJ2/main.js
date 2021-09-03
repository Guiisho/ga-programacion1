import Area from "./area.js"


const mostrar= () => {

    const radio= document.getElementById("inp_radio").value
    const instancia= new Area ()
    instancia.radio= radio
    const resultado= instancia.calcularAreaCirc()
    document.getElementById("ac").textContent= resultado
}

const boton=document.getElementById("btn_calcular")
boton.addEventListener("click",mostrar)

const mostrar1= () => {

    const base= document.getElementById("inp_base").value
    const altura= document.getElementById("inp_altura").value
    const instancia= new Area ()
    instancia.altura= altura
    instancia.base= base
    const resultado1= instancia.calcularBaseAltura()
    document.getElementById("at").textContent= resultado1
}

const boton1=document.getElementById("btn_calcular1")
boton1.addEventListener("click",mostrar1)
