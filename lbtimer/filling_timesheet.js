(() => {
    let e, t;

    function l(l) {
        e = l;
        const i = document.querySelector("table td");
        if (i) {
            const e = ["Und", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            let l = /(\w{3})/.exec(i.textContent),
                o = /(\d{4})/.exec(i.textContent);
            l = l ? ("0" + e.indexOf(l[1])).slice(-2) : "00", o = o ? o[1] : "0000", t = o + "/" + l, chrome.runtime.sendMessage({
                command: "tsa",
                months: [t]
            }, n)
        }
    }

    function n(l) {
        document.querySelectorAll("table tbody tr").forEach((n => {
            const i = n.querySelectorAll("input"),
                o = i.length,
                c = /(\d{2})/.exec(n.querySelector("td").textContent);
            let s = c ? ~~c[1] : 1;
            for (let n = 0; n < o; n++, s++) {
                let o = i[n];
                if (!o.disabled) {
                    let n = 0,
                        i = l[t + "/" + ("0" + s).slice(-2)];
                    if (i) {
                        for (let t = 0; t < 7; t++) n += i[e ? 2 * t : 14 + t];
                        n = n / 60 + .5 | 0, n = ("0" + (0 | n / 60)).slice(-2) + ":" + ("0" + n % 60).slice(-2)
                    } else n = "00:00";
                    if (o.value != n) {
                        o.focus(), o.click(), o.select(), !i && o.value || (o.value = n), o.dispatchEvent(new Event("change", {
                            bubbles: !0
                        }));
                        let e = o.closest("td").querySelector("button");
                        e && e.click()
                    }
                }
            }
        }))
    }! function e() {
        const t = document.querySelector(".sui-px-4");
        if (!document.getElementById("lbf") && t && document.querySelector("table")) {
            const e = document.createElement("a");
            t.parentNode.insertBefore(e, t), e.outerHTML = '<style>.lb img{content:url(\'data:image/svg+xml;utf8,<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><linearGradient id="a" y2="100%"><stop stop-color="%23f57c00" offset="0"/><stop stop-color="%23ffa000" offset=".4"/><stop offset=".65"/></linearGradient><path d="M50 5A44 45 0 1 1 7 45L15 5Z" fill="%23fff" stroke="url(%23a)" stroke-width="10"/><rect x="45" y="48" width="35" height="7" rx="3.5" ry="3.5"/><rect x="45" y="12" width="8" height="42" rx="4" ry="4"/></svg>\');width:20px;vertical-align:middle;display:inline;margin-left:10px}.lb span{cursor:pointer}</style><span class=lb><span id=lbf title="Fill the Timesheet with LBTimer\'s AET data"><img> Fill AET</span><span id=lbr title="Fill the Timesheet with LBTimer\'s real time data"><img> Fill real</span></span>', document.getElementById("lbf").onclick = () => {
                l(1)
            }, document.getElementById("lbr").onclick = () => {
                l(0)
            }
        }
        setTimeout(e, 500)
    }()
})();