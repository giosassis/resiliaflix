var result=$('#result');
function mostrarFilme(idFilme) {
    const key = "1502d474"

    $.ajax({
        method: 'GET', 
        dataType: 'json',
        url: `https://www.omdbapi.com/?apikey=${key}&i=${idFilme}`,
        success: function(dados) {
            
            
            document.getElementById('imagemdofilme').src = dados.Poster;
            document.getElementById('titlemovie').innerHtml = dados.Title;
            document.getElementById('director').innerHTML=`Diretor: ${dados.Director}`;
            document.getElementById('year').innerHTML=`Ano: ${dados.Year}`;
            document.getElementById('released').innerHTML=`Data de Lançamento: ${dados.Released}`;
            document.getElementById('runtime').innerHTML=`Tempo de Duração: ${dados.Runtime}`;
            document.getElementById('genre').innerHTML=`Gênero: ${dados.Genre}`;
            document.getElementById('plot').innerHTML= `Sinopse: ${dados.Plot}`;
            document.getElementById('imdbRating').innerHTML= `Avaliação IMDb: ${dados.imdbRating}`;
            result.removeClass('some')
        },

    });
}

$('#bt').click(function (evento) {
    evento.preventDefault()
    result.addClass('some')})
   
