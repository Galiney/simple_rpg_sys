const links = document.querySelectorAll(".navbar-nav .nav-link");
const campoEmail = document.getElementById("campoEmail");
const campoSenha = document.getElementById("campoSenha");
const botaoEntrar = document.getElementById("botaoEntrar");
const botaoRegistrar = document.getElementById("botaoRegistrar");
const themeToggle = document.getElementById('themeToggle');
const themeLabel = document.getElementById('themeLabel');
const navbar = document.getElementById('navbar');
const navbarNav = document.getElementById("navbarNav");
const navLogo = document.getElementById('navLogo');
const formTheme = document.getElementById('formTheme');
const extraContent = document.getElementById('extraContent');
const toggleFormTheme = document.getElementById('toggleFormTheme');
const toggleNavbarNav = document.getElementById('toggleNavbarNav');

toggleNavbarNav.addEventListener('click', function () {
  if (extraContent.contains(navbarNav)) {
    navbar.appendChild(navbarNav);
    navbarNav.classList.add('visually-hidden');
  } else {
    extraContent.appendChild(navbarNav);
    navbarNav.classList.remove('visually-hidden');
  }
});

toggleFormTheme.addEventListener('click', function () {
  if (extraContent.contains(formTheme)) {
    navbar.appendChild(formTheme);
    formTheme.classList.add('visually-hidden');
  } else {
    extraContent.appendChild(formTheme);
    formTheme.classList.remove('visually-hidden');
  }
});

// Função para atualizar a navbar com base no tamanho da tela
function updateNavbar() {
  const width = window.innerWidth;

  if (width >= 1200) {
    showFullNavbar();
  } else {
    hideFormTheme();

    if (width < 992) {
      hideNavbarNav();
    } else {
      showNavbarNav();
    }
  }
}

// Mostra a navbar completa
function showFullNavbar() {
  formTheme.classList.remove('visually-hidden');
  navbarNav.classList.remove('visually-hidden');
  extraContent.innerHTML = '';
}

// Esconde a navbar completa
function hideFormTheme() {
  formTheme.classList.add('visually-hidden');
}

// Esconde o navbarNav
function hideNavbarNav() {
  navbarNav.classList.add('visually-hidden');
}

// Mostra o navbarNav
function showNavbarNav() {
  navbarNav.classList.remove('visually-hidden');
}

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

// Adicione a lógica de autenticação no botão "Entrar"
botaoEntrar.addEventListener("click", function (event) {
  event.preventDefault();
  // Adicione aqui a lógica de autenticação
});

// Adicione a lógica de registro no botão "Registrar"
botaoRegistrar.addEventListener("click", function (event) {
  event.preventDefault();
  // Adicione aqui a lógica de registro
});

// Adiciona classes "active" aos links da navbar quando clicados
links.forEach(function (link) {
  link.addEventListener("click", function () {
    links.forEach(function (item) {
      item.classList.remove("active");
    });
    this.classList.add("active");
  });
});

// Adicione o evento de atualização da navbar ao redimensionar a janela
window.addEventListener('resize', updateNavbar);

// Atualiza a navbar inicialmente
updateNavbar();