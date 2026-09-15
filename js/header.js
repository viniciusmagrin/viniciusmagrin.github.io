const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
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
`;

const cabecalho = document.getElementById('cabecalho');
if (cabecalho) {
	cabecalho.after(headerTemplate.content.cloneNode(true));
}