let $ = document.querySelector.bind(document);
let buttonLogin = $("#btn");
let email = $("#emailr");

function vEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

buttonLogin.addEventListener("click", (event) => {
    event.preventDefault();
    if (!vEmail(email.value)) {
        (document.querySelector('.pInvi').style.visibility = 'visible')
    } else window.open("paginaInicial.html", "_self");
});