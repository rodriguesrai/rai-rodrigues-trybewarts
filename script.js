const botaoLogin = document.querySelector('#botao-login');
const alertaLogin = () => {
  const pegaEmail = document.querySelector('#email');
  const pegaSenha = document.querySelector('#senha');
  if (pegaEmail.value === 'tryber@teste.com' && pegaSenha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
};

botaoLogin.addEventListener('click', alertaLogin);

const botaoEnviar = document.querySelector('#submit-btn');
const checkbox = document.querySelector('#agreement');
const desabilitaBotao = () => {
  if (checkbox.checked === true) {
    botaoEnviar.disabled = false;
  } else {
    botaoEnviar.disabled = true;
  }
};

checkbox.addEventListener('click', desabilitaBotao);

const textArea = document.querySelectorAll('.textarea')[1];
const counter = document.querySelector('#counter');
const updateCounter = () => {
  counter.innerText = 500 - textArea.value.length;
  console.log(textArea.value.length);
}
textArea.addEventListener('keyup', updateCounter);