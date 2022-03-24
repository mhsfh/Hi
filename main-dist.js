sk = document.querySelectorAll(".statistice>div"), section = document.querySelectorAll(".table")[0], ui = document.getElementsByTagName("style");
let started = !1;

function startCount(e, t) {
    let o = e.dataset.pr,
        n = setInterval((() => { x >= o && clearInterval(n), x += .5, ui[t].innerHTML = `.statistice>div:nth-of-type(${t+1}) {\n            background-image: conic-gradient(var(--orange) ${x}%, var(--second-color) ${x}%);}` }), 50)
}
x = 0, window.onscroll = function() { window.scrollY - 100 >= section.offsetTop && location.href.includes("aboutme0") && (started || sk.forEach(((e, t) => startCount(e, t))), started = !0) }
    // "https://mhsfh.github.io/cv/" != window.document.URL && "https://mhsfh.github.io/cv" != window.document.URL && "https://mhsfh.github.io/cv/index.html" != window.document.URL || window.location.assign(" https://mhsfh.github.io/cv/#home ");
var form = document.getElementById("my-form");
async function handleSubmit(e) {
    e.preventDefault();
    var t = document.getElementById("my-form-status"),
        o = new FormData(e.target);
    fetch(e.target.action, { method: form.method, body: o, headers: { Accept: "application/json" } }).then((e => { t.innerHTML += "Thanks for your submission! &nbsp; ", t.style.display = "block", setTimeout((() => { t.style.display = "none" }), 4e3), form.reset() })).catch((e => { t.innerHTML = "Oops! There was a problem submitting your form" }))
}
form.addEventListener("submit", handleSubmit);
var el = document.getElementById("down"),
    el1 = document.body;

function reset_animation() { el.style.animation = "none", el.offsetHeight, el.style.animation = null, el1.style.animation = "none", el1.offsetHeight, el1.style.animation = null, setTimeout((() => { window.scrollTo(0, 0) }), 500) }

function closemeq() { ifram = window.parent.document.getElementsByTagName("iframe")[0], home = window.parent.document.getElementById("home"), ifram.style.display = "none", home.style.opacity = "1", home.style.filter = "blur(0)" }
closeme = document.getElementsByClassName("closeme")[0], closeme.addEventListener("click", closemeq), show9.addEventListener("click", (function() { ifram = document.getElementsByTagName("iframe")[0], home = document.getElementById("home"), nav = ifram.contentDocument.querySelector("nav"), closeme = ifram.contentDocument.querySelector(".closeme"), nav.style.display = "none", ifram.style.display = "block", closeme.style.display = "block", home.style.opacity = "0.2", home.style.filter = "blur(6px)" })),
    navv0.addEventListener("click", (function() { ifram = document.getElementsByTagName("iframe")[0], home = document.getElementById("home"), ifram.style.display = "none", home.style.opacity = "1", home.style.filter = "blur(0)" })), navlist = document.querySelectorAll("#navv0 a");
for (let e = 0; e < navlist.length; e++) navlist[e].addEventListener("click", reset_animation);