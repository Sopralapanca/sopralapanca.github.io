(() => {
    "use strict";
    const e = ["-DB ", "-EXP ", "-IRR ", "-RR ", "-SXS ", "-TTR ", "-URL "],
        t = e.find,
        l = e.findIndex,
        n = document.querySelector("[name=addRow]");
    let c, r, o, s;

    function i(e) {
        c = e, r = "";
        let t = document.querySelector("select[name=selectedPeriodStart]");
        if (t = t ? t[t.selectedIndex] : document.querySelector("h2"), t = t ? /(\d+)\/(\d+)\/(\d+)-(\d+)\/(\d+)\/(\d+)/.exec(t.textContent.replace(/\s/g, "")) : "", t && (r = function(e, t) {
            const l = [];
            for (; e <= t; e.setDate(e.getDate() + 1)) l.push((n = e).getFullYear() + "/" + ("0" + (n.getMonth() + 1)).slice(-2) + "/" + ("0" + n.getDate()).slice(-2));
            var n;
            return l
        }(new Date(t[3], t[1] - 1, t[2]), new Date(t[6], t[4] - 1, t[5]))), r[0]) {
            u(1);
            const e = r[0].slice(0, 7),
                t = r[r.length - 1].slice(0, 7);
            chrome.runtime.sendMessage({
                command: "tsa",
                months: [e, t]
            }, a)
        }
    }

    function a(t) {
        s = {}, r.forEach((l => {
            if (t[l]) {
                let n = t[l],
                    r = 0,
                    o = "";
                for (let t = 0; t < 7; t++) n[2 * t + 1] && (r += n[c ? 2 * t : 14 + t], o += n[2 * t + 1] + e[t]);
                r && (r = r / 60 + .5 | 0, s[~~l.slice(5, 7) + "/" + ~~l.slice(8) + "/" + l.slice(2, 4)] = {
                    h: 0 | r / 60,
                    m: r % 60,
                    n: o
                })
            }
        })), Object.keys(s).length ? (sessionStorage.LBF = JSON.stringify(s), d()) : u()
    }

    function d() {
        for (let e in s) {
            let c = s[e],
                r = t.call(o, (t => {
                    let l = t.querySelector("select[name$=projectId]");
                    return l && (t.querySelector("[value=PROJECT]").checked || "PROJECT" == t.querySelector("select[name$=type]").value) && t.querySelector("input[type=text]").value.split("/").map((e => ~~e > 2e3 ? ~~e - 2e3 : ~~e)).join("/") == e && /yukon/i.test(l[l.selectedIndex].textContent)
                })) || t.call(o, (e => e.querySelector("[type=text]") && !e.querySelector("[type=text]").value));
            if (!r) return void n.click(); {
                let t = r.querySelector("select[name$=type]"),
                    n = r.querySelector("select[name$=projectId]"),
                    o = r.querySelectorAll(".hours-minutes-picker");
                if (r.querySelector("input[type=text]").value = e, t ? t.selectedIndex = l.call(t, (e => e.matches("[value=PROJECT]"))) : r.querySelector("[value=PROJECT]").checked = !0, n.selectedIndex = l.call(n, (e => /yukon/i.test(e.textContent))), sessionStorage.lbc) {
                    let e = r.querySelector(".entry-description");
                    r.querySelector("[class^=desc]").style.display = e.parentNode.style.display = "block", r.querySelector("a").style.display = "none", e.value = e.value.trim() || c.n
                }
                o[0].selectedIndex = l.call(o[0], (e => e.value == c.h)), o[1].selectedIndex = l.call(o[1], (e => e.value == c.m)), n.dispatchEvent(new Event("change"))
            }
        }
        sessionStorage.removeItem("LBF"), u()
    }

    function u(e) {
        let t = document.querySelector(".lbf");
        if (!t) {
            const e = document.querySelector(".buttons.right");
            if (!e) return;
            t = document.createElement("a"), e.insertBefore(t, e.firstChild)
        }
        e ? t.outerHTML = "<span class=lbf style=color:red;font-weight:700>LBTimer working, please wait</span>" : (t.outerHTML = '<span class=lbf><style>.lbb{padding:8px;margin-right:6px}.lbb img{content:url(\'data:image/svg+xml;utf8,<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><linearGradient id="a" y2="100%"><stop stop-color="%23f57c00" offset="0"/><stop stop-color="%23ffa000" offset=".4"/><stop offset=".65"/></linearGradient><path d="M50 5A44 45 0 1 1 7 45L15 5Z" fill="%23fff" stroke="url(%23a)" stroke-width="10"/><rect x="45" y="48" width="35" height="7" rx="3.5" ry="3.5"/><rect x="45" y="12" width="8" height="42" rx="4" ry="4"/></svg>\');width:16px;margin-right:3px;vertical-align:middle}</style><label><input type=checkbox id=lbc ' + (sessionStorage.lbc ? "checked" : "") + '>Add notes</label><button class=lbb title="Fill using AET times"id=lba><img>AET<button class=lbb title="Fill using real times"id=lbr><img>Real</span>', document.getElementById("lba").onclick = () => {
            i(1)
        }, document.getElementById("lbr").onclick = () => {
            i(0)
        }, document.getElementById("lbc").onchange = function() {
            this.checked ? sessionStorage.lbc = 1 : sessionStorage.removeItem("lbc")
        })
    }
    if (n && (o = document.querySelectorAll(".invoice-entry"), o.length || (o = document.querySelectorAll(".invoice-builder tr:not(:first-child)")), o.length)) {
        let e = l.call(o, (e => e.querySelector("select[name$=projectId]")));
        ~e && /yukon/i.test(o[e].querySelector("select[name$=projectId]").textContent) && (s = JSON.parse(sessionStorage.getItem("LBF")), s ? (u(1), d()) : u())
    }
})();