
// Função para salvar os dados no localStorage quando o formulário for enviado
document.getElementById('cadastro').addEventListener('submit', function (e) {
    e.preventDefault();

    //Esta linha recebe os valores do formulário inseridos pelo usuário.
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;

    //Esta linha cria um objeto com os dados
    const usuario = {
        nome,
        email,
        telefone,
    };

    const dadosArmazenados = JSON.parse(localStorage.getItem('usuarios')) || [];
    dadosArmazenados.push(usuario);

    //Esta linha converte o objeto em JSON e armazena no localStorage do navegador.
    localStorage.setItem('usuarios', JSON.stringify(dadosArmazenados));

    //Esta linha limpa o formulário após enviar.
    document.getElementById('cadastro').reset();

    alert('Cadastro realizado com sucesso!');
});


