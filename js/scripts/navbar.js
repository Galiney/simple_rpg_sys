  var links = document.querySelectorAll(".navbar-nav .nav-link");
  var campoEmail = document.getElementById("campoEmail");
  var campoSenha = document.getElementById("campoSenha");
  var botaoEntrar = document.getElementById("botaoEntrar");
  var botaoRegistrar = document.getElementById("botaoRegistrar");

  //atualização da navbar
  links.forEach(function(link) {
      link.addEventListener("click", function() {
          links.forEach(function(item) {
              item.classList.remove("active");
          });

          this.classList.add("active");
      });
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