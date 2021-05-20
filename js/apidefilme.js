//ano, diretor, duração, avaliação, data de estreia, sinopse, genero, atores, poster, imdb rating, metascore
$(window).scroll(function () {//mudar a navbar ao scrollar
	$('nav').toggleClass('scrolled', $(this).scrollTop() > 100);
})


function pesquisaFilme(movie) {
    const key = "1502d474"

    $.ajax({
        method: 'GET', 
        dataType: 'json',
        url: `https://www.omdbapi.com/?apikey=${key}&t=${movie}`,
        success: function(dados) {
            let result=$('#result');
           
            document.getElementById('imagemdofilme').src = dados.Poster;
            document.getElementById('titlemovie').innerHTML = dados.Title;
            document.getElementById('director').innerHTML=`Diretor: ${dados.Director}`;
            document.getElementById('year').innerHTML=`Ano: ${dados.Year}`;
            document.getElementById('released').innerHTML=`Data de Lançamento: ${dados.Released}`;
            document.getElementById('runtime').innerHTML=`Tempo de Duração: ${dados.Runtime}`;
            document.getElementById('genre').innerHTML=`Gênero: ${dados.Genre}`;
            document.getElementById('plot').innerHTML= `Sinopse: ${dados.Plot}`;
            document.getElementById('imdbRating').innerHTML= `Avaliação IMDb: ${dados.imdbRating}`
            result.removeClass('some')
            },
        error: function (request, error) {
            alert(request.responseText);
        }
    });
}

$('#botao-enviar').click(function (evento) {
    let filme = $("#movie").val();
    evento.preventDefault()
    if(filme.length>0) pesquisaFilme (filme);
    else alert("Insira um filme válido")
   
    
    
 
});
$('#bt').click(function (evento) {
    evento.preventDefault()
    result.addClass('some')})
