/* DCI sales agent widget. Embed:
 *   <div id="dci-sales-agent"></div>
 *   <script src="/sales-agent.js" data-endpoint="/api/sales-agent" defer></script>
 * Renders nothing unless the server route answers {ok:true} to a status check (SALES_AGENT_ENABLED=1).
 * Voice v1: browser Web Speech API (SpeechRecognition + speechSynthesis), free, no server audio. */
(function () {
  var s = document.currentScript; var ep = (s && s.getAttribute("data-endpoint")) || "/api/sales-agent";
  var root = document.getElementById("dci-sales-agent"); if (!root) return;
  var sid = Math.random().toString(36).slice(2) + Date.now().toString(36);
  var msgs = []; var speak = false;
  function post(b) { b.sessionId = sid; return fetch(ep, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(b) }).then(function (r) { return r.json(); }); }
  function el(t, c, txt) { var e = document.createElement(t); if (c) e.className = c; if (txt != null) e.textContent = txt; return e; }
  post({ action: "status" }).then(function (st) {
    if (!st || !st.ok) return;
    var css = el("style"); css.textContent = ".dsa{position:fixed;right:16px;bottom:16px;z-index:9999;font:14px/1.4 system-ui,sans-serif}.dsa-b{background:#111;color:#fff;border:0;border-radius:24px;padding:12px 18px;cursor:pointer}.dsa-p{display:none;width:320px;max-width:calc(100vw - 32px);background:#fff;color:#111;border:1px solid #ddd;border-radius:12px;box-shadow:0 8px 30px rgba(0,0,0,.2);margin-bottom:8px}.dsa.o .dsa-p{display:block}.dsa-l{height:300px;overflow:auto;padding:10px}.dsa-m{margin:6px 0;padding:8px 10px;border-radius:10px;background:#f2f2f2}.dsa-m.u{background:#111;color:#fff;margin-left:30px}.dsa-f{display:flex;gap:4px;padding:8px;border-top:1px solid #eee}.dsa-f input{flex:1;padding:8px;border:1px solid #ccc;border-radius:8px}.dsa-f button,.dsa-x button{padding:6px 10px;border:1px solid #111;border-radius:8px;background:#fff;cursor:pointer}.dsa-x{display:flex;flex-wrap:wrap;gap:4px;padding:0 8px 8px}.dsa-h{padding:8px 10px;font-size:12px;color:#555;border-bottom:1px solid #eee}";
    document.head.appendChild(css);
    var w = el("div", "dsa"); var p = el("div", "dsa-p"); var hd = el("div", "dsa-h", st.disclosure + " I can answer questions, email the rate card and set up a call.");
    var log = el("div", "dsa-l"); log.setAttribute("aria-live", "polite"); log.setAttribute("data-testid", "dsa-log");
    var f = el("form", "dsa-f"); var inp = el("input"); inp.placeholder = "Type or tap the mic"; inp.setAttribute("aria-label", "Message");
    var mic = el("button", null, "\uD83C\uDFA4"); mic.type = "button"; mic.title = "Talk"; var send = el("button", null, "Send");
    var x = el("div", "dsa-x"); var rc = el("button", null, "Email me the rate card"); var bk = el("button", null, "Set up a call"); var sp = el("button", null, "Voice replies: off");
    x.append(rc, bk, sp); f.append(inp, mic, send); p.append(hd, log, f, x);
    var btn = el("button", "dsa-b", "Talk to our agent"); btn.type = "button"; w.append(p, btn); root.appendChild(w);
    btn.onclick = function () { w.classList.toggle("o"); if (!msgs.length) add("assistant", "Hi! " + st.disclosure + " What brings you here today?"); };
    window.DCIAgent = { open: function () { if (!w.classList.contains("o")) btn.click(); } };
    function add(role, text) { var m = el("div", "dsa-m" + (role === "user" ? " u" : ""), text); log.appendChild(m); log.scrollTop = 1e6; msgs.push({ role: role, content: text }); if (role === "assistant" && speak && window.speechSynthesis) { window.speechSynthesis.cancel(); window.speechSynthesis.speak(new SpeechSynthesisUtterance(text)); } }
    function chat(text) { add("user", text); post({ messages: msgs }).then(function (r) { add("assistant", (r && r.text) || "Sorry, something went wrong."); if (r && r.nextQuestion && r.text.indexOf(r.nextQuestion) < 0 && !/\?\s*$/.test(r.text)) add("assistant", r.nextQuestion); }).catch(function () { add("assistant", "I'm offline for a moment. Please try again."); }); }
    f.onsubmit = function (e) { e.preventDefault(); var t = inp.value.trim(); if (!t) return; inp.value = ""; chat(t); };
    sp.onclick = function () { speak = !speak; sp.textContent = "Voice replies: " + (speak ? "on" : "off"); };
    var SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) mic.style.display = "none"; else mic.onclick = function () { var r = new SR(); r.lang = "en-US"; r.interimResults = false; r.onresult = function (ev) { var t = ev.results[0][0].transcript; if (t) { speak = true; sp.textContent = "Voice replies: on"; chat(t); } }; r.start(); };
    rc.onclick = function () { var em = prompt("Your email for the rate card:"); if (!em) return; var nm = prompt("Your name:") || ""; post({ action: "rate_card", email: em, name: nm }).then(function (r) { add("assistant", r.text || "Couldn't send that."); }); };
    bk.onclick = function () { post({ action: "slots", messages: msgs }).then(function (r) { if (!r.slots || !r.slots.length) { add("assistant", r.text || "Booking isn't connected yet. Leave your email and we'll reply."); return; } add("assistant", "Here are a few times. Pick one:"); r.slots.forEach(function (s) { var b = el("button", null, s.label); b.type = "button"; b.onclick = function () { var em = prompt("Email for the confirmation:"); if (!em) return; post({ action: "book", slot: s, email: em, messages: msgs }).then(function (o) { add("assistant", o.text || "Couldn't book that time. Leave your email and we'll reply."); }); }; x.appendChild(b); }); }); };
  }).catch(function () {});
})();
