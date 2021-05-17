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



var password = document.getElementById("password"),
    confirm_password = document.getElementById("confirm_password");

function validatePassword() {
    if (password.value != confirm_password.value) {
        confirm_password.setCustomValidity("Senhas diferentes!");
    } else {
        confirm_password.setCustomValidity('');
    }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;