document.addEventListener("DOMContentLoaded", function() {
    // Injeta o arquivo css externo
    const linkCSS = document.createElement("link");
    linkCSS.rel  = "stylesheet";
    linkCSS.type = "text/css";
    linkCSS.href = "/css/busca_topo.css";
    document.head.appendChild(linkCSS);

    // Cria o HTML da barra de busca
    const barraBusca = document.createElement("div");
    barraBusca.className = "barra-busca-topo";
    barraBusca.innerHTML = `
        <div class="container-busca-input">
            <input
            type="text"
            id="inputBuscaTopo"
            class="input-busca-topo"
            placeholder="Buscar termo ou palavra-chave..."
            />
        </div>
    `;

    // Insere no começo da body
    document.body.insertBefore(barraBusca, document.body.firstChild);

    // Logica para busca e filtro
    const inputBusca = document.getElementById("inputBuscaTopo");

    inputBusca.addEventListener("input", function() {
        const termo = this.value.toLowerCase().trim();
        const elementos = document.querySelectorAll(".conteudo p, .conteudo h2, .conteudo h3, .conteudo pre");

        elementos.forEach((el) => {
            const texto = el.innerText.toLowerCase();
            if (termo === ""){
                el.style.display = "";
            } else if (texto.includes(termo)) {
                el.style.display = "";
            } else{
                el.style.display = "none";
            }
        });
    });
});