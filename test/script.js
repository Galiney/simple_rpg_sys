document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('nav a');
  links.forEach(link => {
      link.addEventListener('click', async (event) => {
          event.preventDefault();
          const componentUrl = link.getAttribute('data-component');
          const scriptUrl = link.getAttribute('data-script');
          
          // Carregar o HTML
          const container = document.getElementById('divConteudo');
          await loadHTML(componentUrl, container);
          
          // Carregar o Script
          await loadScript(scriptUrl);
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
