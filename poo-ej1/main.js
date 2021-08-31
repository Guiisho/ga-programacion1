import Bhaskara from "./bhaskara.js"

const mostrar= () => {

    const a= document.getElementById("inp_a").value
    const b= document.getElementById("inp_b").value
    const c= document.getElementById("inp_c").value

    const instancia= new Bhaskara()

    instancia.coef_a= a;
    instancia.coef_b= b;
    instancia.ti_c= c;

    //ejecuté la función que calcula raiz 1
    const r1= instancia.calcularRaiz1()
    const r2= instancia.calcularRaiz2()

    document.getElementById("r1").textContent= 'r1=' + r1
    document.getElementById("r2").textContent= 'r2=' + r2
}

const boton= document.getElementById("btn_calcular")
boton.addEventListener("click", mostrar)