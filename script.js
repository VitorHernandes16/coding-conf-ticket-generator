const uploadArea = document.getElementById('upload-area');
const avatarInput = document.getElementById('avatar');
const form = document.querySelector('form');
const textSection = document.getElementById('text');
const ticketView = document.getElementById('ticket-view');

let avatarDataUrl = null;

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
  if (file.size > 500 * 1024) {
    alert('A imagem precisa ter no máximo 500KB.');
    return;
  }

  const reader = new FileReader();
  reader.onload = (event) => {
    avatarDataUrl = event.target.result;
    uploadArea.innerHTML = `<img src="${avatarDataUrl}" alt="Avatar" style="width:40px; height:40px; border-radius:8px; object-fit:cover;">`;
  };
  reader.readAsDataURL(file);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const nome = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const github = document.getElementById('github').value.trim();

  if (!nome || !email || !github) {
    alert('Preencha todos os campos.');
    return;
  }

  document.getElementById('out-name').textContent = nome;
  document.getElementById('out-email').textContent = email;

  document.getElementById('out-nome').textContent = nome;
  document.getElementById('out-github').textContent = github.startsWith('@') ? github : '@' + github;
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