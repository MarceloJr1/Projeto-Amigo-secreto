function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nomeOriginal = input.value.trim();
    let nome = nomeOriginal.toLowerCase();
    let listaAmigos = document.getElementById("listaAmigos");

    if (nome !== "") {
        let nomesExistentes = Array.from(listaAmigos.children).map(li => li.textContent.toLowerCase());

        if (!nomesExistentes.includes(nome)) {
            let li = document.createElement("li");
            li.textContent = nomeOriginal; // Mantém o formato original
            listaAmigos.appendChild(li);
            input.value = "";
        } else {
            alert("Este nome já foi adicionado.");
        }
    } else {
        alert("Por favor, digite um nome antes de adicionar.");
    }
}

function sortearAmigo() {
    let lista = document.querySelectorAll("#listaAmigos li");
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    if (lista.length > 0) {
        let index = Math.floor(Math.random() * lista.length);
        let sorteado = lista[index].textContent;
        lista[index].remove(); // Remove o nome sorteado da lista

        let li = document.createElement("li");
        li.textContent = `O amigo secreto é ${sorteado}`;
        resultado.appendChild(li);
    } else {
        alert("Adicione pelo menos um amigo antes de sortear.");
    }
}
