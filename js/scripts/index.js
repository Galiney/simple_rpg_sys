document.addEventListener("DOMContentLoaded", function () {
    var navbarUrl = "components/navbar.html";

    fetch(navbarUrl)
        .then(response => response.text())
        .then(html => {
            document.getElementById("navbarContainer").innerHTML = html;
        })
        .catch(error => {
            console.error("Erro ao carregar o navbar:", error);
        });

    
});
