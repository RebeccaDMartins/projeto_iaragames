
document.addEventListener("DOMContentLoaded", function () {
    const jogoForm = document.getElementById("jogo-form");
    const jogosLista = document.getElementById("jogos-lista");
    let jogos = [];

    jogoForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const titulo = document.getElementById("titulo").value;
        const genero = document.getElementById("genero").value;
        
        const novoJogo = { id: jogos.length + 1, titulo, genero };
        jogos.push(novoJogo);
        atualizarTabela();
        jogoForm.reset();
    });

    function atualizarTabela() {
        jogosLista.innerHTML = "";
        jogos.forEach(jogo => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${jogo.id}</td>
                <td>${jogo.titulo}</td>
                <td>${jogo.genero}</td>
                <td>
                    <button class="btn btn-warning btn-sm" onclick="editarJogo(${jogo.id})">Editar</button>
                    <button class="btn btn-success btn-sm" onclick="adicionarJogo(${jogo.id})">Adicionar</button>
                    <button class="btn btn-danger btn-sm" onclick="excluirJogo(${jogo.id})">Excluir</button>
                </td>
            `;
            jogosLista.appendChild(row);
        });
    }

    window.editarJogo = function (id) {
        const jogo = jogos.find(j => j.id === id);
        if (jogo) {
            document.getElementById("titulo").value = jogo.titulo;
            document.getElementById("genero").value = jogo.genero;
            jogos = jogos.filter(j => j.id !== id);
            atualizarTabela();
        }
    };

    window.excluirJogo = function (id) {
        jogos = jogos.filter(j => j.id !== id);
        atualizarTabela();
    };

    window.comprarJogo = function (id) {
        jogos = jogos.filter(j => j.id !== id);
        atualizarTabela();
    };
});
