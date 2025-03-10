document.addEventListener("DOMContentLoaded", function () {
    const usuarioForm = document.getElementById("usuario-form");
    const usuariosLista = document.getElementById("usuarios-lista");
    let usuarios = [];

    usuarioForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;

        const novoUsuario = { id: usuarios.length + 1, nome, email };
        usuarios.push(novoUsuario);
        atualizarTabela();
        usuarioForm.reset();
    });

    function atualizarTabela() {
        usuariosLista.innerHTML = "";
        usuarios.forEach(usuario => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${usuario.id}</td>
                <td>${usuario.nome}</td>
                <td>${usuario.email}</td>
                    <button class="btn btn-warning btn-sm" onclick="editarUsuario(${usuario.id})">Editar</button>
                    <button class="btn btn-success btn-sm" onclick="consultarUsuario(${usuario.id})">Inserir</button>
                    <button class="btn btn-danger btn-sm" onclick="excluirUsuario(${usuario.id})">Excluir</button>
                </td>
            `;
            usuariosLista.appendChild(row);
        });
    }

    window.editarUsuario = function (id) {
        const usuario = usuarios.find(u => u.id === id);
        if (usuario) {
            document.getElementById("nome").value = usuario.nome;
            document.getElementById("email").value = usuario.email;
            usuarios = usuarios.filter(u => u.id !== id);
            atualizarTabela();
        }
    };

    window.excluirUsuario = function (id) {
        usuarios = usuarios.filter(u => u.id !== id);
        atualizarTabela();
    };
});