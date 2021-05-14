
var btnLogin = $('#btnLogin')[0];
var email=document.getElementById('email').value;
var senha=document.getElementById('Senha');

function verificaCaracteres(email) {
    const caractes = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return caractes.test(String(email).toLowerCase());
}
btnLogin.addEventListener("click", (event) => {
    event.preventDefault();
    console.log(email)
   console.log(senha.value)
    if (verificaCaracteres(email) && senha.value.length > 3) {
        window.open("../index.html", "_self");
    }
    else {
        if (!verificaCaracteres(email)) {
            alert("email Inválido")
            
          
        } else  {
            alert("Senha incompleta");
            email.value=""
            password.value = "";
			email.focus();}
    }
});
$(window).scroll(function () {//mudar a navbar ao scrollar
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 100);
});