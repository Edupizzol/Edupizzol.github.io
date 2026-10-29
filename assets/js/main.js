// Rating do Codeforces lido ao vivo da API pública.
// Sem resposta válida em poucos segundos, a página mantém só o link do perfil.
(function () {
  var box = document.getElementById("cf-reading");
  if (!box || !window.fetch) return;

  var HANDLE = "EduPizzol";
  var TIMEOUT_MS = 4000;
  var url = "https://codeforces.com/api/user.info?handles=" + HANDLE;

  var controller = "AbortController" in window ? new AbortController() : null;
  var timer = setTimeout(function () {
    if (controller) controller.abort();
  }, TIMEOUT_MS);

  fetch(url, controller ? { signal: controller.signal } : {})
    .then(function (res) {
      if (!res.ok) throw new Error("HTTP " + res.status);
      return res.json();
    })
    .then(function (data) {
      clearTimeout(timer);
      var user = data && data.status === "OK" && data.result && data.result[0];
      if (!user || typeof user.rating !== "number" || typeof user.maxRating !== "number") return;

      var hora = new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
      var when = box.querySelectorAll("[data-cf=when]");

      box.querySelector("[data-cf=rating]").textContent = user.rating;
      box.querySelector("[data-cf=max]").textContent = user.maxRating;
      when[0].textContent = "lido agora da API pública do Codeforces, às " + hora;
      when[1].textContent = "mesma leitura";
      box.hidden = false;
    })
    .catch(function () {
      clearTimeout(timer);
    });
})();
