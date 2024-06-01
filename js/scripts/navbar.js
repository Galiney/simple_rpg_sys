const navbar = document.getElementById('navbar');
const logo = document.getElementById('logo');
const navLogo = document.getElementById('navLogo');
const divLinks = document.getElementById('divLinks');
const divUserForm = document.getElementById('divUserForm');
const toggleUserForm = document.getElementById('toggleUserForm');
const toggleNavbarNav = document.getElementById('toggleNavbarNav');
const themeToggle = document.getElementById('themeToggle');
const themeLabel = document.getElementById('themeLabel');

// Adiciona a lógica para mudança de tema
themeToggle.addEventListener('change', function () {
  document.body.classList.toggle('dark-theme');
  document.body.classList.toggle('light-theme');

  if (document.body.classList.contains('dark-theme')) {
    navLogo.src = '../../assets/icons/logo-empty-dark.png'; // Caminho para o logotipo do tema escuro
    themeLabel.textContent = '\u263E'; // Unicode para a lua
  } else {
    navLogo.src = '../../assets/icons/logo-empty-light.png'; // Caminho para o logotipo do tema claro
    themeLabel.textContent = '\u2600'; // Unicode para o sol
  }
});

// Mostra ou esconde o formulário de usuário quando o botão de toggle é clicado
toggleUserForm.addEventListener('click', function () {
  const width = window.innerWidth;
  if (divUserForm.classList.contains('d-none')) {
    divUserForm.classList.remove('d-none');
    divUserForm.classList.add('fixed-card');
    divLinks.classList.remove('fixed-card');
    if (width < 992) {
      divLinks.classList.add('d-none');
    } 
  } else {
    divUserForm.classList.add('d-none');
    divUserForm.classList.remove('fixed-card');
  }
});

// Mostra ou esconde os links da navbar quando o botão de toggle é clicado
toggleNavbarNav.addEventListener('click', function () {
  if (divLinks.classList.contains('d-none')) {
    divLinks.classList.remove('d-none');
    divLinks.classList.add('fixed-card');
    divUserForm.classList.remove('fixed-card');
    divUserForm.classList.add('d-none');
  } else {
    divLinks.classList.add('d-none');
    divLinks.classList.remove('fixed-card');
  }
});

// Função para atualizar a navbar com base no tamanho da tela
function updateNavbar() {
  const width = window.innerWidth;
  divLinks.classList.remove('fixed-card');
  divUserForm.classList.remove('fixed-card');
  if (width < 1200) {
    divUserForm.classList.add('d-none');
    toggleUserForm.classList.remove('d-none');
  } else {
    divUserForm.classList.remove('d-none');
    toggleNavbarNav.classList.add('d-none');
    toggleUserForm.classList.add('d-none');
  }

  if (width < 992) {
    divLinks.classList.add('d-none');
    toggleNavbarNav.classList.remove('d-none');
  } else {
    divLinks.classList.remove('d-none');
    toggleNavbarNav.classList.add('d-none');
  }
}

// Adicione o evento de atualização da navbar ao redimensionar a janela
window.addEventListener('resize', updateNavbar);

// Atualiza a navbar inicialmente
updateNavbar();