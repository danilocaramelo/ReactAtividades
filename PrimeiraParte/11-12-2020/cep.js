fetch = require("node-fetch");
let cepBuscado;
console.log("Buscando CEP");
cepBuscado = buscarCep("13845373");
console.log("CEP buscado");
console.log("CEP encontrado ", cepBuscado);

function buscarCep(parametro) {
    let cep;
    fetch(`https://viacep.com.br/ws/${parametro}/json/`)
        .then(response => response.json)
        .then(data => {cep = data.cep
            console.log("CEP encontrado: ", cep)})
        .catch(console.error);
    return cep;
}