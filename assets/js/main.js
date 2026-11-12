// Marca no índice do cabeçalho a seção que está sendo lida.
(function () {
  var links = document.querySelectorAll('.site-nav a[href^="#"]');
  if (!links.length) return;

  var items = [];
  for (var i = 0; i < links.length; i++) {
    var alvo = document.getElementById(links[i].getAttribute("href").slice(1));
    if (alvo) items.push({ link: links[i], alvo: alvo });
  }
  if (!items.length) return;

  var atual = null;
  var pendente = false;

  function marcar() {
    pendente = false;
    var linha = window.innerHeight * 0.3;
    var achado = null;
    for (var i = 0; i < items.length; i++) {
      if (items[i].alvo.getBoundingClientRect().top <= linha) achado = items[i];
    }
    var doc = document.documentElement;
    if (window.innerHeight + window.scrollY >= doc.scrollHeight - 2) achado = items[items.length - 1];
    if (achado === atual) return;
    if (atual) atual.link.removeAttribute("aria-current");
    if (achado) achado.link.setAttribute("aria-current", "true");
    atual = achado;
  }

  function agendar() {
    if (pendente) return;
    pendente = true;
    window.requestAnimationFrame(marcar);
  }

  window.addEventListener("scroll", agendar, { passive: true });
  window.addEventListener("resize", agendar);
  marcar();
})();
