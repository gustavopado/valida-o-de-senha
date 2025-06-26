// Função que será chamada ao clicar no botão
function validarLogin() {
    // Pega o valor digitado no input de usuário
    let usuario = document.getElementById("usuario").value;

    // Pega o valor digitado no input de senha
    let senha = document.getElementById("senha").value;

    // Pega o elemento onde será exibida a mensagem
    let mensagem = document.getElementById("mensagem");

    // Verifica se o usuário e senha estão corretos
    if (usuario === "admin" && senha === "123@456") {
        mensagem.innerHTML = "✅ Login realizado com sucesso!";
        mensagem.style.color = "green";
    } else {
        mensagem.innerHTML = "❌ Usuário ou senha incorretos!";
        mensagem.style.color = "red";
    }
}