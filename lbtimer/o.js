(() => {
    let e, t, n, o;
    const c = document.getElementById("tmr"),
        m = document.querySelectorAll(".auto"),
        s = document.getElementById("pl"),
        r = document.getElementById("LB"),
        i = document.getElementById("tim"),
        a = ["OFF", "ON", "STOP"];

    function d() {
        e = ++e % 3, m[0].dataset.is = a[e]
    }

    function l() {
        t = 1 - t, m[1].dataset.is = a[t]
    }

    function u() {
        n = 1 - n, m[2].dataset.is = a[n]
    }

    function g(e) {
        s.innerHTML = ["&#9654;", "||"][e], s.title = ["Unp", "P"][e] + "ause the timer"
    }

    function h(e) {
        return (e = e + .5 | 0) >= 60 ? (0 | e / 60) + "h " + ("0" + e % 60).slice(-2) + "m" : e + "m"
    }

    function p(e, t, n, o) {
        let c = "<tr><td colspan=3>" + ~~e.slice(8) + " - " + "0Jan0Feb0Mar0Apr0May0Jun0Jul0Aug0Sep0Oct0Nov0Dec".split(0)[~~e.slice(5, 7)] + " - " + e.slice(0, 4),
            m = 0,
            s = 0;
        const r = ["DB", "EXP", "IRR", "RR", "SXS", "TTR", "URL"],
            i = 1024 & n;
        for (let e = 0; e < 7; e++) t[2 * e + 1] && (c += "<tr><td>" + r[e] + "<td>" + h((i ? t[2 * e] : t[14 + e]) / 60) + "<td>" + t[2 * e + 1], m += i ? t[2 * e] : t[14 + e], s += t[2 * e + 1]);
        c += '<tr><td>TOT<td title="Earnings: ' + (o * m / 3600).toFixed(2) + '">' + h(m / 60) + "<td>" + s, document.getElementById("ts").innerHTML = c
    }
    chrome.tabs.getCurrent((e => {
        e && (document.getElementById("extrn").remove(), o = 1)
    })), chrome.runtime.sendMessage({
        command: "popup"
    }, (a => {
        c.style.opacity = 1 & a[0], e = 128 & a[1] ? 16384 & a[1] ? 1 : 0 : 2, d(), t = 2048 & a[1] ? 0 : 1, l(), n = 64 & a[1] ? 0 : 1, u();
        let h = 512 & a[1] ? Math.abs(a[2] - a[3] + 1) : a[3] - 1;
        i.textContent = (0 | h / 60) + ":" + ("0" + h % 60).slice(-2), g(16 & a[0] ? 0 : 1), p(a[4], a[5], a[1], a[6]), m[0].onclick = () => {
            d(), chrome.runtime.sendMessage({
                command: "toggleAuto",
                auto: e
            })
        }, m[1].onclick = () => {
            l(), chrome.runtime.sendMessage({
                command: "toggleAcq"
            })
        }, m[2].onclick = () => {
            u(), chrome.runtime.sendMessage({
                command: "toggleRel"
            })
        }, r.onclick = () => {
            chrome.runtime.sendMessage({
                command: "showPanel"
            }), o || close()
        }, s.onclick = () => {
            chrome.runtime.sendMessage({
                command: "timer"
            }, g)
        }, i.onclick = () => {
            chrome.runtime.sendMessage({
                command: "clock"
            })
        }, document.getElementById("set").onclick = () => {
            chrome.runtime.sendMessage({
                command: "od",
                which: "settingsscreen"
            })
        }, document.getElementById("log").onclick = () => {
            chrome.runtime.sendMessage({
                command: "openLog"
            })
        }
    })), document.getElementById("hl").onclick = () => {
        chrome.tabs.executeScript({
            code: 'encodeURIComponent(location.href+document.querySelector("html").outerHTML)',
            allFrames: !0
        }, (e => {
            chrome.runtime.lastError ? chrome.notifications.create({
                type: "basic",
                iconUrl: "img/r.svg",
                title: "LBTimer: Cannot send page",
                message: "Chrome Web Store or extension pages cannot be sent"
            }) : chrome.runtime.sendMessage({
                command: "rprt",
                rprt: JSON.stringify(e)
            })
        }))
    }, document.getElementById("extrn").onclick = () => {
        chrome.windows.create({
            url: "o.html",
            width: 298,
            height: 278,
            type: "popup",
            top: 60,
            left: screen.availWidth - 358
        }), close()
    }, chrome.runtime.onMessage.addListener((o => {
        switch (o.command) {
            case "tick":
                i.textContent = o.t, i.style.backgroundColor = o.c, c.style.opacity = 1;
                break;
            case "updatesheet":
                p(o.w, o.d, o.of, o.pr);
                break;
            case "release":
                c.style.opacity = 0;
                break;
            case "reset":
                e = 128 & o.of ? 16384 & o.of ? 1 : 0 : 2, d(), t = 2048 & o.of ? 0 : 1, l(), n = 64 & o.of ? 0 : 1, u()
        }
    }))
})();