class ModalModel {
    constructor() {
        this.img = "";
        this.titulo = "";
        this.diretor = "";
        this.ano = "";
        this.data = "";
        this.tempo = "";
        this.genero = "";
        this.sinopse = "";
        this.avaliacao = "";
    }
    requereDados() {
        let request = new XMLHttpRequest;
        request.open("GET",
            `http://www.omdbapi.com/?apikey=1502d474&t=avengers`, false);

        request.addEventListener("load", () => {
            if (request.status == 200) {

                let response = JSON.parse(request.responseText);
                this.img =response.Poster;
                this.titulo = response.Title;
                this.diretor = response.Director;
                this.ano = response.Year;
                this.data = response.Released;
                this.tempo = response.Runtime;
                this.genero =response.Genre;
                this.sinopse = response.Plot;
                this.avaliacao = response.imdbRating;
                
            }
            else {
                console.log(`Algo deu errado :/ Erro:[${request.status}] ${request.statusText}`);
            }
        })

        request.send();
    }

}
let ola = new ModalModel();
ola.requereDados();
console.log(ola);

