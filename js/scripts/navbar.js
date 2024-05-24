  var links = document.querySelectorAll(".navbar-nav .nav-link");
  var campoEmail = document.getElementById("campoEmail");
  var campoSenha = document.getElementById("campoSenha");
  var botaoEntrar = document.getElementById("botaoEntrar");
  var botaoRegistrar = document.getElementById("botaoRegistrar");
  var themeToggle = document.getElementById('themeToggle');
  var themeLabel = document.getElementById('themeLabel');
  const navLogo = document.getElementById('navLogo');

  //atualização da navbar
  links.forEach(function(link) {
      link.addEventListener("click", function() {
          links.forEach(function(item) {
              item.classList.remove("active");
          });

          this.classList.add("active");
      });
  });

  themeToggle.addEventListener('change', function() {
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
  

  //Login e Registro
  campoEmail.addEventListener("input", function() {
      
  });

  campoSenha.addEventListener("input", function() {
      
  });

  botaoEntrar.addEventListener("click", function(event) {
      
      event.preventDefault();
  });

  botaoRegistrar.addEventListener("click", function(event) {
      
      event.preventDefault();
  });