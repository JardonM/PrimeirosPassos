//alert("Funcionou!")

function ConsultaCep() {
    var cep = document.getElementById("cep").value;
    console.log(cep);
    $.ajax({
        url: "https://viacep.com.br/ws/" + cep + "/json/",
        type: "GET",
        success: function(response) {
            console.log(response); // TAMBEM PODE COLOCAR RESPONSE.BAIRRO,.CIDADE,.LOGRADOURO E ETC PARA PEGAR APENAS UMA INFORMAÇÃO
            document.getElementById("logradouro").innerHTML = "Rua: " + response.logradouro; // PODE SER FEITO TAMBEM ASSIM   $(#logradouro).html(response.logradouro);
            document.getElementById("bairro").innerHTML = "Bairro: " + response.bairro;
            document.getElementById("localidade").innerHTML = "Cidade: " + response.localidade;
            document.getElementById("uf").innerHTML = "Estado: " + response.uf;
            document.getElementById("ibge").innerHTML = "IBGE: " + response.ibge;
        }
    })
}