// Array amigos
let amigos = []

// Boas vindas
alert ("Bem-Vindo ao site Amigo secreto!")
alert ("Adicione todos os nomes que deseja sortear e depois click em 'sortear amigo'.")

// Função para adicionar amigo
function adicionarAmigo() {
    // Pega nome do amigo
    let adiNome = document.getElementById("amigo");
    let nome = adiNome.value.trim();
    // Verifica campo
    if (nome === "") {
        alert("Por favor, insira um nome válido!");
        return;
    }
    // Insere novo nome no array
    amigos.push(nome);
    // Teste saida da lista
    console.log(`Lista: ${amigos}`);
    // Atualiza lista 
    atualizarLista();
    // Limpa campo
    adiNome.value = "";
}

// Função para atualizar a lista na tela
function atualizarLista() {
    // Pega tag da lista
    let lista = document.getElementById("listaAmigos");
    // limpa a lista antes de recriar
    lista.innerHTML = "";
    // Loop para inserir os amigos na lista
    for (let i = 0; i < amigos.length; i++) {
        let novoAmigo = document.createElement("li");
        novoAmigo.textContent = amigos[i];
        lista.appendChild(novoAmigo);
    }
}