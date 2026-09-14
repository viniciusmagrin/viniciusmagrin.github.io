const container = document.querySelector('main') || document.body;

const script = document.createElement('script');
script.src = 'https://utteranc.es/client.js';
script.setAttribute('repo', 'viniciusmagrin/viniciusmagrin.github.io');
script.setAttribute('issue-term', 'pathname');
script.setAttribute('theme', 'preferred-color-scheme');
script.setAttribute('crossorigin', 'anonymous');
script.async = true;

container.appendChild(script);
