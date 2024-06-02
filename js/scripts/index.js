document.addEventListener('DOMContentLoaded', async () => {
  const divConteudo = document.getElementById('divConteudo');
  const divNavbar = document.getElementById('divNavbar')
  
  // Carrega a barra de navegação primeiro
  await loadHTML('../../html/components/navbar.html', divNavbar);
  
  // Carrega os scripts iniciais
  await loadScript('../../js/modules/Action.js');
  await loadScript('../../js/modules/Personagem.js');
  await loadScript('../../js/modules/interface.js');
  await loadScript('../../js/scripts/navbar.js');
  
  // Adiciona event listeners aos botões na barra de navegação
  const links = document.querySelectorAll('#divLinks button');
  links.forEach(link => {
    link.addEventListener('click', async (event) => {
      event.preventDefault();
      const componentUrl = link.getAttribute('data-component');
      const scriptUrl = link.getAttribute('data-script');
      
      // Carregar o HTML
      await loadHTML(componentUrl, divConteudo);
      
      // Carregar o Script
      await loadScript(scriptUrl);

      links.forEach(btn => {
        btn.disabled = false;
      });
      link.disabled = true;
    });
  });
});

async function loadHTML(url, container) {
  try {
    console.log(`Loading HTML from ${url}`);
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to load HTML: ${url}`);
    }
    const html = await response.text();
    container.innerHTML = html;
    console.log(`HTML loaded from ${url}`);
  } catch (error) {
    console.error(error);
  }
}

function loadScript(url) {
  return new Promise((resolve, reject) => {
    console.log(`Loading script from ${url}`);
    const script = document.createElement('script');
    script.src = url;
    script.onload = () => {
      console.log(`Script loaded from ${url}`);
      resolve(script);
    };
    script.onerror = () => {
      console.error(`Failed to load script: ${url}`);
      reject(new Error(`Failed to load script: ${url}`));
    };
    document.head.appendChild(script);
  });
}
