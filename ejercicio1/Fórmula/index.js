const calcular = () => {

    const a= document.getElementById ("inp_a").value;
    const b= document.getElementById ("inp_b").value;
    const c= document.getElementById ("inp_c").value;

    let bloque1= (Math.pow(b,2)) - (4*a*c)

    let raiz= Math.sqrt(bloque1)

    let r1= (-b + raiz) / (2*a)
    let r2= (-b - raiz) / (2*a)
    
    let resultado= 'Raíz1='+r1+'  '+'Raíz 2='+r2

    const hr= document.getElementById("h_resultado").textContent= resultado;

}
const boton= document.getElementById ("btn_calcular")

boton.addEventListener ("click", calcular)