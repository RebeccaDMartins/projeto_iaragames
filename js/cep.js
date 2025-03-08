function buscarEndereco() {

    var cep = document.getElementById("txtCEP").value;

    var url = "https://brasilapi.com.br/api/cep/v2/" + cep;

    fetch(url)
        .then(res => res.json ())
        .then(res => {
            montarResultado (res);
        })

}

function montarResultado(objetoEndereco) {

    var dados = "<h4>"

    dados += "Rua: " + objetoEndereco.street + "<br>";
    dados += "Bairro: " + objetoEndereco.neighborhood + "<br>";
    dados += "Cidade: " + objetoEndereco.city + "<br>";
    dados += "Estado: " + objetoEndereco.state + "<br>";
    dados += "CEP: " + objetoEndereco.cep + "<br>";

    dados += "</h4>";

    document.getElementById("dados-localizacao").innerHTML = dados;
}

// Hardcode: são informações inputadas manualmente 
// Exemplo de não hardcode: dados += "Rua: " + objetoEndereco.street + "<br>"; 
// Exemplo de hardcode: dados += "Rua: " + "Rua das Joias" + "<br>";