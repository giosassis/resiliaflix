//ano, diretor, duração, avaliação, data de estreia, sinopse, genero, atores, poster, imdb rating, metascore

function mostrarFilme(movie) {
    const key = "1502d474"

    $.ajax({
        method: 'GET', 
        dataType: 'json',
        url: `http://www.omdbapi.com/?apikey=${key}&t=${movie}`,
        success: function(dados) {
            console.log(dados)
            document.getElementById('imagemdofilme').src = dados.Poster;
            document.getElementById('titlemovie').innerText+=dados.Title;
            document.getElementById('director').innerText+=dados.Director;
            document.getElementById('year').innerText+=dados.Year;
            document.getElementById('released').innerText+=dados.Released;
            document.getElementById('runtime').innerText+=dados.Runtime;
            document.getElementById('genre').innerText+=dados.Genre;
            document.getElementById('plot').innerText+=dados.Plot;
            document.getElementById('imdbRating').innerText+=dados.imdbRating;
    
        }
    })
}

$('#botao-enviar').click(function (evento) {
    evento.preventDefault()
    let filme = $("#movie").val();
    mostrarFilme (filme);
});
