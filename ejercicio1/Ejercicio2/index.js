const calcular = () => {

    const CO= document.getElementById ("inp_C.Opuesto").value;
    const CA= document.getElementById ("inp_C.Adyacente").value;

    const bloque1= Math.pow (CO,2) + Math.pow (CA,2);
    const resultado= Math.sqrt (bloque1);

    console.log (`
        El resultado es: ${resultado}    
    `)
}
const boton= document.getElementById ("btn_calcular")

boton.addEventListener ("click", calcular)