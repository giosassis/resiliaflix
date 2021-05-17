$(window).scroll(function () {//mudar a navbar ao scrollar
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 100);
})
let buttonLogin = document.getElementById("btnLogin");
let senha = document.getElementById("Senha");
let email = document.getElementById("email");

function vEmail(email) {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}

buttonLogin.addEventListener("click", (event) => {
	event.preventDefault();
	if (!vEmail(email.value) && senha.value.length < 4) alert("email e Senha errados");
    else if(!vEmail(email.value) && senha.value.length>3) alert("Email errado");
    else if(vEmail(email.value) && senha.value.length<4) alert("Senha errada");
    else window.open("index.html", "_self");
	console.log(senha.values)	
	
});
