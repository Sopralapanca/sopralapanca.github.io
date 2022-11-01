(() => {
    function e() {
        chrome.storage.local.get({
            l: []
        }, (e => {
            let n = 0,
                o = 0;
            const t = ["#fc8", "#fb0"];
            document.getElementById("l").innerHTML = e.l.map((e => "<div style=background-color:" + (~e.indexOf("MAN") ? "#fff" : ~e.indexOf("dd") ? t[o++ % 2] + " data-num=" + ++n : ~e.indexOf("cq") ? t[o % 2] : ~e.indexOf("lea") ? (o++, "#f33") : "#fff") + ">" + e + "</div>")).join(""), scrollTo(0, document.body.scrollHeight)
        }))
    }
    document.getElementById("d").onclick = () => {
        chrome.storage.local.get({
            l: []
        }, (e => {
            const n = document.getElementById("p");
            n.href = "data:text/plain," + encodeURIComponent(e.l.join("\n")), n.click()
        }))
    }, chrome.storage.onChanged.addListener(e), document.body.addEventListener("keyup", (e => {
        "Escape" === e.code && close()
    })), e()
})();