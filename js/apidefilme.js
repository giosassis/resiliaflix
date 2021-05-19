//ano, diretor, duração, avaliação, data de estreia, sinopse, genero, atores, poster, imdb rating, metascore
$(window).scroll(function () {//mudar a navbar ao scrollar
	$('nav').toggleClass('scrolled', $(this).scrollTop() > 100);
})
function pesquisaFilme(movie) {
    const key = "1502d474"

    $.ajax({
        method: 'GET', 
        dataType: 'json',
        url: `http://www.omdbapi.com/?apikey=${key}&t=${movie}`,
        success: function(dados) {
            console.log(dados)
            document.getElementById('imagemdofilme').src = dados.Poster;
            document.getElementById('titlemovie').innerHtml = dados.Title;
            document.getElementById('director').innerHTML=`Diretor: ${dados.Director}`;
            document.getElementById('year').innerHTML=`Ano: ${dados.Year}`;
            document.getElementById('released').innerHTML=`Data de Lançamento: ${dados.Released}`;
            document.getElementById('runtime').innerHTML=`Tempo de Duração: ${dados.Runtime}`;
            document.getElementById('genre').innerHTML=`Gênero: ${dados.Genre}`;
            document.getElementById('plot').innerHTML= `Sinopse: ${dados.Plot}`;
            document.getElementById('imdbRating').innerHTML= `Avaliação IMDb: ${dados.imdbRating}`;
        },
    });
}

var result=$('#result');
$('#botao-enviar').click(function (evento) {
    evento.preventDefault()
    let filme = $("#movie").val();
    pesquisaFilme (filme);
    result.removeClass('some')
    
    
 
});
$('#bt').click(function (evento) {
    evento.preventDefault()
    result.addClass('some')})
   