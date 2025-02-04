function gerarJogo() {
    // Seleciona a lista de itens (<li>) dentro do container-jogo
    const listaNumeros = document.querySelectorAll('.container-jogo ul li');
    // Cria um array para armazenar os números gerados
    let numerosSorteados = [];
    // Gera 6 números aleatórios únicos
    while (numerosSorteados.length < 6) {
        const numero = Math.floor(Math.random() * 60) + 1; // Número entre 1 e 60
        if (!numerosSorteados.includes(numero)) {
            numerosSorteados.push(numero);
        }
    }
    // Ordena os números em ordem crescente
    numerosSorteados.sort((a, b) => a - b);
    // Preenche os itens da lista com os números sorteados
    listaNumeros.forEach((li, index) => {
        li.textContent = numerosSorteados[index];
    });
}

