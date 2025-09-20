// Array amigos
let amigos = []

// Boas vindas
alert ("Bem-Vindo ao site Amigo secreto!")
alert ("Adicione todos os nomes que deseja sortear e depois click em 'sortear amigo'.")

// Função para adicionar amigo
function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim();

    if (nome === "") {
        alert("Digite um nome válido!");
        return;
    }

    amigos.push(nome);
    // teste saida da lista
    console.log(`Lista: ${amigos}`);

    input.value = "";
}