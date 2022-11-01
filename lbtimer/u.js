(() => {
    "use strict";

    function e(e) {
        return e.getFullYear() + "/" + ("0" + (e.getMonth() + 1)).slice(-2) + "/" + ("0" + e.getDate()).slice(-2)
    }
    let t, l;
    const i = /(\d+\/\d+\/\d+)-\d+\/\d+\/\d+/;

    function r(e) {
        l = e;
        let t = [].filter.call(document.querySelectorAll("table.timesheetgrid"), (e => {
            let t = e.querySelector("th");
            return t && i.test(t.textContent)
        }));
        for (let e = t.length; e--;) o(t[e])
    }

    function o(t) {
        let r = new Date(i.exec(t.querySelector("th").textContent)[1]),
            o = [e(r)];
        for (let t = 6; r.setDate(r.getDate() + 1) && t--;) o.push(e(r));
        const n = o[0].slice(0, 7),
            s = o[6].slice(0, 7);
        chrome.runtime.sendMessage({
            command: "tsa",
            months: [n, s]
        }, (e => {
            let i = o.map((t => {
                let i = 0;
                if (e[t]) {
                    for (let r = 7; r--;) i += e[t][l ? 2 * r : 14 + r];
                    i = (i / 3600).toFixed(2)
                }
                return i
            }));
            i.some((e => e)) && function(e, t) {
                let l = t.find.call(e.querySelectorAll("tr:not(.RowNotVisible)"), (e => {
                    let t = e.querySelectorAll("select"),
                        l = {
                            "-1": 1,
                            10: 1,
                            RATING: 1,
                            Z: 1
                        };
                    return 3 == t.length && t[0].value in l && t[1].value in l && t[2].value in l
                })) || e.querySelector("tr.RowNotVisible");
                if (l) {
                    l.classList.remove("RowNotVisible");
                    let e = l.querySelectorAll("select"),
                        i = l.querySelectorAll("input");
                    e[0].value = 10, e[1].value = e[2].value = "RATING";
                    for (let e = 0; e < 7; e++) t[e] && !i[e].disabled && (i[e].value = t[e], i[e].click())
                }
            }(t, i)
        }))
    }! function e() {
        if (t = document.querySelectorAll("table.timesheetgrid tr:first-child th:first-child"), !document.getElementById("lbf") && t.length && i.test(t[t.length - 1].textContent)) {
            let e = document.querySelector("#tdACTIONICON");
            if (e) {
                let t = document.createElement("a");
                e.insertBefore(t, e.firstElementChild), t.outerHTML = '<style>.lb img{content:url(\'data:image/svg+xml;utf8,<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><linearGradient id="a" y2="100%"><stop stop-color="%23f57c00" offset="0"/><stop stop-color="%23ffa000" offset=".4"/><stop offset=".65"/></linearGradient><path d="M50 5A44 45 0 1 1 7 45L15 5Z" fill="%23fff" stroke="url(%23a)" stroke-width="10"/><rect x="45" y="48" width="35" height="7" rx="3.5" ry="3.5"/><rect x="45" y="12" width="8" height="42" rx="4" ry="4"/></svg>\');width:16px;vertical-align:middle}</style><a class="timesheet button icon lb"><img><span id=lbf title="Fill the Timesheet with LBTimer\'s AET data">Fill AET</span></a><a class="timesheet button icon lb"><img><span id=lbr title="Fill the Timesheet with LBTimer\'s real time data">Fill real</span></a>', document.getElementById("lbf").onclick = () => {
                    r(1)
                }, document.getElementById("lbr").onclick = () => {
                    r(0)
                }
            }
        } else setTimeout(e, 500)
    }()
})();