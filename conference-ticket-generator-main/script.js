const uploadArea = document.getElementById('upload-area');
const avatarInput = document.getElementById('avatar');
const form = document.querySelector('form');
const textSection = document.getElementById('text');
const ticketView = document.getElementById('ticket-view');

const email = document.getElementById('email');
const emailError = document.getElementById('emailError');

const name = document.getElementById('name');
const nameError = document.getElementById('nameError');

const github = document.getElementById('github');
const gitError = document.getElementById('gitError');

const sizeError = document.getElementById('sizeError');
const typeError = document.getElementById('typeError');

let avatarDataUrl = null;
let avatarValido = false;

uploadArea.addEventListener('click', () => avatarInput.click());

uploadArea.addEventListener('dragover', (e) => {
  e.preventDefault();
  uploadArea.classList.add('drag-over');
});

uploadArea.addEventListener('dragleave', () => {
  uploadArea.classList.remove('drag-over');
});

uploadArea.addEventListener('drop', (e) => {
  e.preventDefault();
  uploadArea.classList.remove('drag-over');
  const file = e.dataTransfer.files[0];
  if (file) handleAvatarFile(file);
});

avatarInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file) handleAvatarFile(file);
});

function handleAvatarFile(file) {
  if (!validarAvatar(file)) {
    avatarValido = false;
    return;
  }

  avatarValido = true;

  const reader = new FileReader();
  reader.onload = (event) => {
    avatarDataUrl = event.target.result;
    uploadArea.innerHTML = `<img src="${avatarDataUrl}" alt="Avatar" style="width:40px; height:40px; border-radius:8px; object-fit:cover;">`;
  };
  reader.readAsDataURL(file);
}

// Validação "ao vivo" ao sair dos campos
name.addEventListener('blur', validarNome);
email.addEventListener('blur', validarEmail);
github.addEventListener('blur', validarGithub);

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const nomeValido = validarNome();
  const emailValido = validarEmail();
  const githubValido = validarGithub();

  if (!nomeValido || !emailValido || !githubValido || !avatarValido) {
    return; // para aqui se algo estiver inválido
  }

  const nome = name.value.trim();
  const emailValor = email.value.trim();
  const githubValor = github.value.trim();

  document.getElementById('out-name').textContent = nome;
  document.getElementById('out-email').textContent = emailValor;

  document.getElementById('out-nome').textContent = nome;
  document.getElementById('out-github').textContent = githubValor.startsWith('@') ? githubValor : '@' + githubValor;
  document.getElementById('ticket-id').textContent = '#' + Math.floor(10000 + Math.random() * 90000);

  if (avatarDataUrl) {
    document.getElementById('out-avatar').src = avatarDataUrl;
  }

  textSection.hidden = true;
  form.hidden = true;
  ticketView.hidden = false;

  const hoje = new Date();
  const dataFormatada = hoje.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
  document.getElementById('date').textContent = dataFormatada;
});

function validarEmail() {
  const valor = email.value.trim();
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValido = regex.test(valor);

  emailError.style.display = isValido ? 'none' : 'flex';
  email.classList.toggle('invalid', !isValido);
  return isValido;
}

function validarNome() {
  const valor = name.value.trim();
  const isValido = valor.length > 5;

  nameError.style.display = isValido ? 'none' : 'flex';
  name.classList.toggle('invalid', !isValido);
  return isValido;
}

function validarGithub() {
  const valor = github.value.trim();
  const isValido = valor.length > 5;

  gitError.style.display = isValido ? 'none' : 'flex';
  github.classList.toggle('invalid', !isValido);
  return isValido;
}

function validarAvatar(file) {
  const tiposPermitidos = ['image/png', 'image/jpeg'];
  const tamanhoMaximo = 500 * 1024;

  sizeError.style.display = 'none';
  typeError.style.display = 'none';
  uploadArea.classList.remove('invalid');

  const isTipoValido = tiposPermitidos.includes(file.type);
  if (!isTipoValido) {
    typeError.style.display = 'flex';
    uploadArea.classList.add('invalid');
    return false;
  }

  const isTamanhoValido = file.size <= tamanhoMaximo;
  if (!isTamanhoValido) {
    sizeError.style.display = 'flex';
    uploadArea.classList.add('invalid');
    return false;
  }

  return true;
}