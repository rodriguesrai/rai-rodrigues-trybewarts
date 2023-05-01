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
  document.querySelector('.agreement-container').classList.add('was-validated');
};

document.querySelector('.send-button-container').addEventListener('click', () => {
  document.querySelector('.agreement-container').classList.add('was-validated');
});

checkbox.addEventListener('click', desabilitaBotao);

const textArea = document.querySelectorAll('.textarea')[1];
const counter = document.querySelector('#counter');
const updateCounter = () => {
  const charRemaining = 500 - textArea.value.length;
  counter.innerText = charRemaining;
  if (charRemaining <= 100) {
    counter.style.color = 'red';
  } else if (charRemaining > 100) {
    counter.style.color = 'black';
  }
};
textArea.addEventListener('keyup', updateCounter);

const constroiStringMaterias = (conteudos) => {
  const conteudosArr = [];
  for (let i = 0; i < conteudos.length; i += 1) {
    if (conteudos[i].checked === true) {
      conteudosArr.push(conteudos[i].value);
    }
  }
  const conteudosArrFormatoStr = ['<strong>Matérias:</strong>', ''];
  for (let i = 0; i < conteudosArr.length; i += 1) {
    conteudosArrFormatoStr.push(` ${conteudosArr[i]},`);
  }
  const lastItem = conteudosArrFormatoStr.pop();
  const lastItemSplit = lastItem.split('');
  lastItemSplit.pop();
  conteudosArrFormatoStr.push(lastItemSplit.join(''));
  const conteudosStrTemp = conteudosArrFormatoStr.join('');
  return conteudosStrTemp;
};

const constroiFormDataString = () => {
  // for (let i = 0; i < document.querySelectorAll('.main>input'));
  const nome = document.getElementById('input-name').value;
  const sobrenome = document.getElementById('input-lastname').value;
  const email = document.getElementById('input-email').value;
  const casa = document.getElementById('house').value;
  const familia = document.querySelector('input[name="family"]:checked').value;
  const conteudos = document.querySelectorAll('.subject');
  const avaliacao = document.querySelector('input[name="rate"]:checked').value;
  const observacoes = document.getElementById('textarea').value;

  const conteudosStr = constroiStringMaterias(conteudos);

  const strFinal = `<strong>Nome:</strong> ${nome} ${sobrenome}<br><strong>Email: </strong>${email} 
  <br><strong>Casa:</strong> ${casa} <br><strong>Família:</strong> ${familia} <br>${conteudosStr}
  <br><strong>Avaliação:</strong> ${avaliacao} <br><strong>Observações:</strong> ${observacoes} <br>
  `;
  return strFinal;
};

const main = document.getElementById('main');
const formDataContainer = document.createElement('div');
formDataContainer.id = 'form-data';
const formData = document.createElement('p');
formDataContainer.appendChild(formData);

botaoEnviar.addEventListener('click', (event) => {
  event.preventDefault();
  const pFormData = constroiFormDataString();
  formData.innerHTML = pFormData;
  main.childNodes[1].style.display = 'none';
  main.prepend(formDataContainer);
});

console.log(main.querySelectorAll('input'));
