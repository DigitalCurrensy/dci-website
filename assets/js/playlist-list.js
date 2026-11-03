(function () {
  function bind(form) {
    if (!form || form.dataset.bound) return;
    form.dataset.bound = "1";
    var msg = form.querySelector("[data-list-msg]");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var data = {};
      new FormData(form).forEach(function (v, k) { data[k] = v; });
      data.consent = !!(form.elements.consent && form.elements.consent.checked);
      if (msg) msg.textContent = "Sending…";
      fetch("/api/newsletter", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      })
        .then(function (r) { return r.json().then(function (j) { return j || {}; }); })
        .then(function (j) {
          if (j.ok) {
            form.reset();
            if (msg) msg.textContent = "You are on the list. Watch your inbox.";
          } else if (msg) {
            msg.textContent = j.message || "Something went wrong. Please try again later.";
          }
        })
        .catch(function () {
          if (msg) msg.textContent = "Something went wrong. Please try again later.";
        });
    });
  }
  function run() {
    document.querySelectorAll("form.playlist-list").forEach(bind);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", run);
  else run();
})();
