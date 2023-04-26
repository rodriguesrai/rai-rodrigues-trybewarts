const botaoLogin = document.querySelector('#botao-login');
const alertaLogin = () => {

  const pegaEmail = document.querySelector('#email');
  const pegaSenha = document.querySelector('#senha');
  if (pegaEmail.value === 'tryber@teste.com' && pegaSenha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
botaoLogin.addEventListener('click', alertaLogin);
