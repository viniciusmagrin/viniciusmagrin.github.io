const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
<header>
	<!--Cabecalho-->
	<div id="cabecalho">
	    <h1>Engenharia de Sistemas</h1>
	    <h3>Um pequeno guia de consulta dos recursos mais usados</h3>
	</div>

	<!--Barra de navegacao-->
	<div id="barranavegacao">
	    <ul class="menu">
		<li class="menu"><a class="menu" href="/index.html">Home</a></li>
		<li class="menu"><a class="menu" href="/files/menu/backend.html">Back End</a></li>
		<li class="menu"><a class="menu" href="/files/menu/frontend.html">Front End</a></li>
		<li class="menu"><a class="menu" href="/files/menu/banco_dados.html">Banco de Dados</a></li>
		<li class="menu"><a class="menu" href="/files/menu/diversos.html">Diversos</a></li>
	    </ul>
	</div>
</header>
`;

const headerContainer = document.getElementById('tudo');
if (headerContainer) {
	headerContainer.prepend(headerTemplate.content);
}