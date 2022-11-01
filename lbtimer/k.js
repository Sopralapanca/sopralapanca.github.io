(() => {
    const e = document.getElementById("tasktype"),
        t = document.querySelectorAll(".aet"),
        n = document.getElementById("mainclock"),
        o = document.getElementById("startstop");
    let c, a, m, s = 1,
        d = 0,
        l = 0,
        r = 0,
        u = 0,
        i = -1;

    function g() {
        const e = Date.now() - c - 1e3 * r++,
            t = u ? Math.abs(m - d) : d;
        document.title = n.textContent = (0 | t / 60) + ":" + ("0" + t % 60).slice(-2), d++, a = setTimeout(g, 1e3 - e)
    }
    chrome.runtime.onMessage.addListener((c => {
        switch (c.command) {
            case "tick":
                n.textContent = document.title = c.t, n.style.backgroundColor = c.c;
                break;
            case "reset":
                s = 0, clearTimeout(a), i = c.tasktype, e.selectedIndex = i + 1, o.textContent = "AUTO", m = c.AET, t[0].value = 0 | m / 60, t[1].value = m % 60, document.querySelectorAll(".disab").forEach((e => {
                    e.disabled = !0
                })), l = 1;
                break;
            case "release":
                s && l || (s = 1, n.style.backgroundColor = "#fff", n.textContent = document.title = "-:--", document.querySelectorAll(".disab").forEach((e => {
                    e.disabled = !1
                })))
        }
    })), document.getElementById("submit").onclick = () => {
        s && l ? (clearTimeout(a), chrome.runtime.sendMessage({
            command: "addThis",
            time: d,
            AET: m,
            tasktype: i
        }), d = r = 0, c = Date.now(), g()) : chrome.runtime.sendMessage({
            command: "doSubmit"
        })
    }, document.getElementById("reset").onclick = () => {
        s ? (clearTimeout(a), l = r = d = 0, n.textContent = document.title = "0:00", o.textContent = "START") : chrome.runtime.sendMessage({
            command: "reset"
        })
    }, o.onclick = n.onclick = function() {
        s ? l ? (clearTimeout(a), r = l = 0, o.textContent = "START") : (c = Date.now(), g(), l = 1, o.textContent = "PAUSE") : chrome.runtime.sendMessage({
            command: "timer"
        })
    }, e.onchange = () => {
        i = 0 | e.value
    }, t[0].onchange = t[1].onchange = () => {
        m = 60 * t[0].value + (0 | t[1].value)
    }, chrome.runtime.sendMessage({
        command: "cdown"
    }, (e => {
        u = e
    }))
})();