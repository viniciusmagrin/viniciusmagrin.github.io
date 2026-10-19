// Google analytics 4 (GA4)
(function() {
    var script1 = document.createElement('script');
    script1.async = true;
    script1.src = "https://www.googletagmanager.com/gtag/js?id=G-DXK04KP83H";
    document.head.appendChild(script1);

    var script2 = document.createElement('script');
    script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-DXK04KP83H');
    `;

    document.head.appendChild(script2);
})();