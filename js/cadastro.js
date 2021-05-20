const cep = document.getElementById("cep");


cep.addEventListener("blur", (e) => {
    let procurar = cep.value.replace("-", "");
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }
    fetch(`https://viacep.com.br/ws/${procurar}/json`, options)
        .then(response => {
            response.json()
                .then(data => Showdata(data))
        })
        .catch(e => console.log(alert("O CEP: " + cep.value + " Não é válido")));
})

const Showdata = (result) => {
    for (const campo in result) {
        if (document.querySelector("#" + campo)) {
            document.querySelector("#" + campo).value = result[campo];
        }
    }
}


/* Função Validar */
function validar() {
    // pegando o valor do nome pelos names
    var nome = document.getElementById("nome");
    var email = document.getElementById("email");
    var senha = document.getElementById("senha");
    var confiSenha = document.getElementById("confiSenha");
    var cep = document.getElementById("cep");

    // verificar se o nome está vazio
    if (nome.value == "") {
        alert("Nome não informado");
        nome.focus();
        return;
    }
    if (email.value == "") {
        alert("E-mail não informado");
        email.focus();
        return;
    }

    if (senha.value == "") {
        alert("Digite Alguma senha")
        email.focus()
        return
    }
    if (senha.value != confiSenha.value) {
        alert("As senhas estão diferentes!")
        confiSenha.focus()
        return
    }

    if (cep.value == "") {
        alert("CEP não informado");
        cep.focus();
        return;
    }

    window.open("paginaInicial.html", "_self")

}

$('#btn').click(function(evento) {
    evento.preventDefault()
    validar();
});