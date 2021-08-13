let cadastro = [];


function cadastraPessoa() {
    console.log(cadastro);
    var pessoa = {
        nome: document.getElementById("nome").value,
        sobrenome: document.getElementById("sobrenome").value,
        fone: document.getElementById("telefone").value,
        nasc: document.getElementById("nasc").value,
        email: document.getElementById("email").value,
        genero: document.querySelector('input[name="genero"]:checked').value,
        estado: document.getElementById("estado").value,
        opiniao: document.getElementById("opiniao").value,
    }
    document.getElementById("nome").value = "";
    document.getElementById("sobrenome").value = "";
    document.getElementById("telefone").value = "";
    document.getElementById("nasc").value = "";
    document.getElementById("email").value = "";
    document.getElementById("estado").value = "";
    document.getElementById("opiniao").value = "";

    cadastro.push(pessoa);
    console.log("Cadastro efetuado com sucesso!")
    alert("Cadastro efetuado com sucesso!")

}



function encontrarNome() {
    let encontraNome = document.getElementById("encontraNome").value;
    let nomePesquisa = [];

    console.log(encontraNome);
    for (let i = 0; i < cadastro.length; i++) {
        console.log(cadastro[i]);

        if (encontraNome == cadastro[i].nome) {
            nomePesquisa[i] = cadastro[i];
        }
    }


    console.log(nomePesquisa);
}

//ABAIXO TESTE PRA PEGAR OS DADOS DO INPUT: FUNCIONANDO

/*function clicouBotao() {
    let nomepessoa = document.getElementById('nome').value;
    console.log(nomepessoa)
}
*/