

const mostrar = () => {
    
    const nombre= document.querySelector ("#inp_nombre").value
    const apellido= document.querySelector ("#inp_apellido").value

    console.log (`
        Mi nombre es: ${nombre}
        Mi apellido es: ${apellido}    
    `)
}


const boton= document.getElementById ("btn_mostrar")

boton.addEventListener ("click", mostrar)
