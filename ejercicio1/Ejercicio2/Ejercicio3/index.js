

const mostrar= () => {

    const miobjeto = {
        nombre: "pepe",
        apellido: "argento",
        dni: 45016627
    }

    console.log (`

       Nombre: ${miobjeto.nombre}
       Apellido: ${miobjeto.apellido}
    `)

}


const boton= document.getElementById ("btn_mostrar")
boton.addEventListener ("click", mostrar)