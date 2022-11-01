(() => {
    const e = /(\d+)\D(\d+)/;
    let t, l, n, i, o, a = [];

    function s(s) {
        n = s, l = document.querySelectorAll("SPAN > INPUT");
        const r = /(\d+)\D(\d+)\D(\d+)/;
        let c, d = r.exec(t[1].textContent),
            u = r.exec(t[2].textContent);
        if (d && u) {
            let e = 4;
            for (; d[--e].length <= 2 && e;);
            switch (e) {
                case 2:
                    d = [0, d[1], d[3], d[2]], u = [0, u[1], u[3], u[2]];
                    break;
                case 1:
                    d = [0, d[2], d[3], d[1]], u = [0, u[2], u[3], u[1]]
            }
            c = d[1] === u[1] ? new Date(d[3], d[1] - 1, d[2]) : d[2] === u[2] ? new Date(d[3], d[2] - 1, d[1]) : 12 < d[2] ? new Date(d[3], d[1] - 1, d[2]) : new Date(d[3], d[2] - 1, d[1])
        } else if (d = e.exec(t[1].textContent), u = e.exec(t[2].textContent), d && u) {
            const e = new Date;
            let t, l, n = ~~d[1],
                i = ~~d[2],
                o = ~~u[1],
                a = ~~u[2],
                s = e.getFullYear();
            n === o ? (l = n - 1, t = i) : i === a ? (l = i - 1, t = n) : 12 < i ? (l = n - 1, t = i) : (l = i - 1, t = n), c = new Date(s, l, t), c.getTime() > e.getTime() && (c = new Date(s - 1, l, t))
        }
        const h = l[0].closest("tr").parentNode.querySelectorAll("tr td:first-child"),
            f = h.length,
            m = [/DB/i, /EXP/i, /^IR/i, /\bRR/i, /SXS/i, /TTR/i, /URL/i];
        a = [];
        for (let e = 0; e < f; e++) {
            let t = m.findIndex((t => t.test(h[e].textContent)));
            ~t && a.push(~a.indexOf(t) ? -1 : t)
        }
        if (c) {
            i = /([,.])/.exec(l[0].value)[1];
            const e = e => e.getFullYear() + "/" + ("0" + (e.getMonth() + 1)).slice(-2) + "/" + ("0" + e.getDate()).slice(-2);
            o = [e(c)];
            for (let t = 6; c.setDate(c.getDate() + 1) && t--;) o.push(e(c));
            const t = o[0].slice(0, 7),
                s = o[6].slice(0, 7);
            chrome.runtime.sendMessage({
                command: "tsa",
                months: [t, s]
            }, (e => {
                let t;
                for (let s = 7; s--;) {
                    let r = e[o[s]];
                    if (r) {
                        let e = 2 * s;
                        if (!l[e].readOnly)
                            for (let o = 0; a.length > o; o++, e += 16) - 1 != a[o] ? (l[e].value = (r[n ? 2 * a[o] : 14 + a[o]] / 60).toFixed(2).replace(".", i), l[e++].click(), t = l[e], t.value = r[2 * a[o] + 1], t.click()) : e++
                    }
                }
                if (t && (t.blur(), document.getElementById("lbAuto").checked)) {
                    const e = [].find.call(document.querySelectorAll(".urTbarItmBtn:not(.lb)"), (e => /save/i.test(e.textContent)));
                    e && e.click()
                }
            }))
        }
    }! function l() {
        if (t = document.getElementsByTagName("TH"), !document.getElementById("lbf") && t.length > 1 && e.test(t[1].textContent)) {
            const e = document.createElement("a");
            document.querySelector(".urTbarItmBtn").parentNode.appendChild(e), e.outerHTML = '<style>#lbAuto{-webkit-appearance:none;position:relative;height:auto}#lbAuto:focus{outline:0}#lbAuto:after{transition:all .3s ease;content:"";position:absolute;left:-5px;top:-3px;width:5px;height:5px;border:1px dotted #ddd}#lbAuto:checked:after{transform:rotate(-45deg);height:3px;border:2px #000;border-style:none none solid solid}#lba{color:#000;opacity:.4}:checked+#lba{opacity:1}.lb img{content:url(\'data:image/svg+xml;utf8,<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><linearGradient id="a" y2="100%"><stop stop-color="%23f57c00" offset="0"/><stop stop-color="%23ffa000" offset=".4"/><stop offset=".65"/></linearGradient><path d="M50 5A44 45 0 1 1 7 45L15 5Z" fill="%23fff" stroke="url(%23a)" stroke-width="10"/><rect x="45" y="48" width="35" height="7" rx="3.5" ry="3.5"/><rect x="45" y="12" width="8" height="42" rx="4" ry="4"/></svg>\');width:14px;vertical-align:middle}</style><span class="urTbarItmBtn lb"style=max-height:20px canhide=false><span class="urBtnStd urBtnRadius urBtnStdValign"id=lbf title="Fill the Timesheet with LBTimer\'s AET data"><img> Fill AET</span><span class="urBtnStd urBtnRadius urBtnStdValign"id=lbr title="Fill the Timesheet with LBTimer\'s real time data"><img> Fill real</span><label class="urBtnStd urBtnRadius"style=line-height:15px><input type=checkbox id=lbAuto checked><span id=lba> auto-save</span></label></span>', document.getElementById("lbf").onclick = () => {
                s(1)
            }, document.getElementById("lbr").onclick = () => {
                s(0)
            }
        }
        setTimeout(l, 500)
    }()
})();