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
};
textArea.addEventListener('keyup', updateCounter);

const main = document.getElementById('main');
const form = document.getElementsByTagName('form');
const formData = document.createElement('p');
formData.setAttribute('id', 'form-data');

botaoEnviar.addEventListener('click', (event) => {
  event.preventDefault();

  const nome = document.getElementById('input-name').value;
  const sobrenome = document.getElementById('input-lastname').value;
  const email = document.getElementById('input-email').value;
  const casa = document.getElementById('house').value;
  const familia = document.querySelector('input[name="family"]:checked').value;
  const conteudos = document.querySelectorAll('.subject');
  const avaliacao = document.querySelector('input[name="rate"]:checked').value;
  const observacoes = document.getElementById('textarea').value;

  // Percorre NodeList de conteudos selecionados
  let conteudosStr = 'Matérias:';
  for (let i = 0; i < conteudos.length; i += 1) {
    if (conteudos[i].checked === true) {
      if (conteudosStr === 'Matérias:') {
        conteudosStr = conteudosStr + ' ' + conteudos[i].value;
      } else {
        conteudosStr = conteudosStr + ', ' + conteudos[i].value;
      }
    }
  }

  const strFinal = `Nome: ${nome} ${sobrenome} <br>
  Email: ${email} <br>
  Casa: ${casa} <br>
  Família: ${familia} <br>
  ${conteudosStr} <br>
  Avaliação: ${avaliacao} <br>
  Observações: ${observacoes} <br>
  `;

  formData.innerHTML = strFinal;
  formData.id = 'form-data';
  main.childNodes[1].style.display = 'none';
  main.prepend(formData);

});