export default class Anime {


    constructor()
    {}


        async obtenerCatalogo ()
        {
            const datos= await fetch("https://api.jikan.moe/v3/search/anime?q=Naruto")
            const fotos= await datos.json()
            const catalogo= fotos.results;
    
            let array_catalogo = [];
    
            catalogo.forEach(element => {
            
                let item = `
                    <div class="col-3">
                     <div class="card">
                     <img src="${element.image_url}" class="card-img-top" alt="...">
                      <div class="card-body">
                      <h5 class="card-title">${element.title}</h5>
                      <p class="card-text"></p>
                      <a href="#" class="btn btn-primary">Ver</a>
                 </div>
    </div>
    
                    </div>
                `
                array_catalogo.push(item)
            });
    
            document.getElementById("lista_fotos").innerHTML=   array_catalogo.join('')
        }
}