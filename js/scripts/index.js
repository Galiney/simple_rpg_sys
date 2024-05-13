function loadComponent(url) {
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Erro ao carregar o componente de URL: ${url}`);
      }
      return response.text();
    })
    .then(html => {
      document.getElementById("divConteudo").innerHTML = html;
    })
    .catch(error => {
      console.error(`Erro ao carregar o componente de URL: ${url}`, error);
    });
}

document.addEventListener("DOMContentLoaded", function () {
  fetch("../html/components/navbar.html")
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro ao carregar o navbar');
      }
      return response.text();
    })
    .then(html => {
      document.getElementById("divNavbar").innerHTML = html;

      document.getElementById("linkInstrucoes").addEventListener("click", function() {
        loadComponent("../html/components/instrucoes.html");
      });
      document.getElementById("linkBatalha").addEventListener("click", function() {
        loadComponent("../html/components/batalha.html");
      });
      document.getElementById("linkDesafio").addEventListener("click", function() {
        loadComponent("../html/components/desafio.html");
      });
      document.getElementById("linkSorte").addEventListener("click", function() {
        loadComponent("../html/components/sorte.html");
      });
      document.getElementById("linkPersonagens").addEventListener("click", function() {
        loadComponent("../html/components/personagens.html");
      });
    })
    .catch(error => {
      console.error("Erro ao carregar o navbar:", error);
    });
});
