const footerTemplate = document.createElement('template');

footerTemplate.innerHTML = `

<div id="rodape">
	<ul class="menu_rodape">
		<li class="menu_rodape">Duvidas e sugestoes: <a href="mailto:">vinicius@magrin.eco.br</a></li>
		<li class="menu_rodape"><a href="/licencaMIT.html">Licença MIT</a></li>
		<li class="menu_rodape"><a href="/files/menu/sobre.html">Sobre</a></li>
	</ul>
</div>   
`;

const footerContainer = document.getElementById('tudo');
if (footerContainer) {
	footerContainer.appendChild(footerTemplate.content.cloneNode(true));
}