export default class Comentario {


    constructor() {}

    async obtenerFotografias()
    {
        const datos= await fetch("https://jsonplaceholder.typicode.com/photos?albumId=2")
        const fotos= await datos.json()

        let array_fotos = [];

        fotos.forEach(element => {
        
            let item = `
                <div class="col-3">
                 <div class="card">
                 <img src="${element.url}" class="card-img-top" alt="...">
                  <div class="card-body">
                  <h5 class="card-title">${element.id}</h5>
                  <p class="card-text"></p>
                  <a href="#" class="btn btn-primary">Ver</a>
             </div>
</div>

                </div>
            `
            array_fotos.push(item)
        });

        document.getElementById("lista_fotos").innerHTML=   array_fotos.join('')
    }
}

