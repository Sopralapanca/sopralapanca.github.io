(() => {
    let e, t, l, o, r, n, c, s, i, u = [],
        a = [],
        d = [],
        m = "",
        f = [],
        h = [],
        p = 0,
        y = 10,
        k = [],
        g = [],
        b = [],
        q = [];

    function S(e, t, l, o) {
        e.dispatchEvent(new MouseEvent(t, {
            view: window,
            bubbles: !0,
            cancelable: !0,
            clientX: l,
            clientY: o,
            button: 0
        }))
    }

    function w(e, t) {
        chrome.runtime.sendMessage({
            command: "opensides",
            side: e,
            shifted: t
        })
    }

    function A(e) {
        let t = Date.now() - c;
        if (2e3 < t) {
            let t = document.getElementById("ewok-task-submit-" + (e ? "done-" : "") + "button");
            t ? (t.focus(), t.click()) : (t = document.querySelectorAll(".submit"), t.length && t[t.length - 1].click())
        } else setTimeout(A, 2e3 - t, e)
    }

    function v() {
        c = Date.now()
    }
    window.addEventListener("message", (e => {
        if ("LBT" == e.data.from) {
            let t = document.querySelector(".ewok-buds-query-container i");
            t && (t.textContent = e.data.loc)
        }
    }));
    const x = document.createElement("script");

    function E(e) {
        (e.shiftKey || e.ctrlKey) && chrome.runtime.sendMessage({
            command: "op",
            link: this.dataset.oldhref || this.getAttribute("oldhref") || this.href
        })
    }
    x.src = chrome.runtime.getURL("loc.js"), document.body.appendChild(x), x.remove(), NodeList && !NodeList.prototype.forEach && (NodeList.prototype.forEach = Array.prototype.forEach), document.body.addEventListener("keyup", v),
        function() {
            if (document.getElementById("task_action-show") || location.href.includes("/rater/task/show")) {
                let c = document.querySelector(".ewok-estimated-task-weight") || document.querySelector("#ewok-estimated-task-time") || document.querySelector(".ewok-rater-header"),
                    x = document.querySelectorAll(".ewok-task-action-header h1"),
                    L = x[0] && /certification/i.test(x[0].textContent),
                    C = document.getElementById("taskIds");
                if (c = c ? c.textContent : "", x = x[1] ? x[1].textContent : "", C = C ? C.value : "", v(), C)
                    if (document.getElementById("ewok-task-submit-button")) {
                        if (s = document.querySelector(".pq-task-main-info a"), i = s ? s.textContent : "", !i) try {
                            ! function() {
                                let c = {
                                        u: [],
                                        q: [],
                                        flags: [],
                                        comment: [],
                                        selDup: [],
                                        finDup: [],
                                        markDup: []
                                    },
                                    s = {
                                        u: [],
                                        q: [],
                                        flags: [],
                                        comment: [],
                                        selDup: [],
                                        finDup: [],
                                        markDup: []
                                    };
                                l = document.querySelectorAll(".ewok-task-query"), l.length ? (o = u.map.call(l, (e => e.textContent)), m = o[o.length - 1]) : (l = document.querySelectorAll(".query-info-query"), l.length && (o = u.map.call(l, (e => e.querySelector("strong").textContent)), m = o[o.length - 1]));
                                const i = document.querySelectorAll(".ewok-buds-side");
                                if (i.length) {
                                    let l = u.find.call(document.querySelectorAll(".ewok-buds-result-controls"), (e => e.querySelector(".evl-slider2")));
                                    if (l) {
                                        d = d.map.call(l.querySelectorAll(".ewok-buds-flag"), (e => e.querySelector(".ewok-buds-flag-label").textContent));
                                        let e = l.querySelector(".evl-slider2-slider").querySelectorAll(".evl-slider2-tick-big"),
                                            t = l.querySelector(".evl-slider2-slider").querySelectorAll(".evl-slider2-tick-small");
                                        if (e.length) {
                                            if (t.length) {
                                                u[0] = .1, u[1] = parseFloat(e[1].style.left) / 100;
                                                for (let l = e.length - 2, o = 0; o < l; o++) u.push(parseFloat(t[o].style.left) / 100), u.push(parseFloat(e[o + 2].style.left) / 100);
                                                p = 2 * e.length - 2;
                                                let o = l.querySelectorAll(".evl-slider2-tick-labels .evl-slider2-tick-label"),
                                                    r = o.length,
                                                    n = d.map.call(o, (e => e.textContent)),
                                                    c = 0;
                                                b[0] = "N/A" == n[0] || "NA" == n[0] ? n[c++] : "N/A", b[1] = n[c];
                                                for (let e = 2; e < r; e++) b.push(n[c++] + "+"), b.push(n[c])
                                            } else {
                                                p = e.length, u = u.map.call(e, (e => parseFloat(e.style.left) / 100));
                                                let t = l.querySelectorAll(".evl-slider2-tick-labels .evl-slider2-tick-label"),
                                                    o = t.length,
                                                    r = 0,
                                                    n = d.map.call(t, (e => e.textContent));
                                                "N/A" == n[0] || "NA" == n[0] ? b[0] = n[r++] : (b[0] = "N/A", o++);
                                                for (let e = 1; e < o; e++) b[e] = n[r++]
                                            }
                                            u[0] = .1, u[u.length - 1] = .99
                                        }
                                    }
                                    if (l = document.querySelector(".ewok-buds-result-controls .ewok-buds-slider:nth-child(2) .evl-slider2"), l) {
                                        a = [];
                                        let e = l.querySelectorAll(".evl-slider2-tick-big"),
                                            t = l.querySelectorAll(".evl-slider2-tick-small");
                                        if (e.length) {
                                            if (t.length) {
                                                a[0] = .1, a[1] = parseFloat(e[1].style.left) / 100;
                                                for (let l = e.length - 2, o = 0; o < l; o++) a.push(parseFloat(t[o].style.left) / 100), a.push(parseFloat(e[o + 2].style.left) / 100);
                                                let o = l.querySelectorAll(".evl-slider2-tick-label"),
                                                    r = o.length,
                                                    n = 0,
                                                    c = d.map.call(o, (e => e.textContent));
                                                q[0] = "N/A" == c[0] || "NA" == c[0] ? c[n++] : "N/A", q[1] = c[n];
                                                for (let e = 2; e < r; e++) q.push(c[n++] + "+"), q.push(c[n])
                                            } else {
                                                a = a.map.call(e, (e => parseFloat(e.style.left) / 100));
                                                let t = l.querySelectorAll(".evl-slider2-tick-label"),
                                                    o = t.length,
                                                    r = 0,
                                                    n = d.map.call(t, (e => e.textContent));
                                                "N/A" == n[0] || "NA" == n[0] ? q[0] = n[r++] : (q[0] = "N/A", o++);
                                                for (let e = 1; e < o; e++) q[e] = n[r++]
                                            }
                                            y = a.length, a[0] = .1, a[y - 1] = .99
                                        }
                                    }
                                    let o = i[0].querySelectorAll(".ewok-buds-result-html:not([id^=context])"),
                                        n = i[0].querySelectorAll(".ewok-buds-result-controls"),
                                        m = i[0].querySelectorAll(".ewok-buds-result-header"),
                                        S = o.length;
                                    for (let e = 0; e < S; e++) {
                                        let t = o[e].querySelector(".landing-page-block a") || o[e].querySelector(".va-landing-page-block a") || o[e].querySelector("a");
                                        if (f[e] = "nolp.html", t) f[e] = t.dataset.oldhref || t.getAttribute("oldhref") || t.href;
                                        else if (t = o[e].querySelector("iframe")) {
                                            let l = document.createElement("div"),
                                                o = t.src;
                                            o.includes("64,") && (l.innerHTML = atob(o.slice(o.indexOf("64,") + 3)), (o = l.querySelector("a")) && (f[e] = o.href))
                                        }
                                        n[e] && (n[e].matches(".ewok-buds-is-inline-contextual") && (f[e] = 0 + f[e]), c.u[e] = n[e].querySelector(".evl-slider2-slider"), k[e] = !!(c.q[e] = n[e].querySelectorAll(".evl-slider2-slider")[1] || null), c.flags[e] = n[e].querySelectorAll(".ewok-buds-flag"), c.comment[e] = n[e].querySelector(".ewok-buds-comment-textarea") || n[e].querySelector("textarea"), c.selDup[e] = m[e].querySelector(".ewok-buds-result-edit-dupes-link"), c.finDup[e] = m[e].querySelector(".ewok-buds-result-finish-dupes-link"), c.markDup[e] = m[e].querySelector(".ewok-buds-result-dupes-checkbox"))
                                    }
                                    if (i[1]) {
                                        o = i[1].querySelectorAll(".ewok-buds-result-html:not([id^=context])"), n = i[1].querySelectorAll(".ewok-buds-result-controls"), m = i[1].querySelectorAll(".ewok-buds-result-header"), S = o.length;
                                        for (let e = 0; e < S; e++) {
                                            let t = o[e].querySelector(".landing-page-block a") || o[e].querySelector(".va-landing-page-block a") || o[e].querySelector("a");
                                            if (h[e] = "nolp.html", t) h[e] = t.dataset.oldhref || t.getAttribute("oldhref") || t.href;
                                            else if (t = o[e].querySelector("iframe")) {
                                                let l = document.createElement("div"),
                                                    o = t.src;
                                                o.includes("64,") && (l.innerHTML = atob(o.slice(o.indexOf("64,") + 3)), (o = l.querySelector("a")) && (h[e] = o.href))
                                            }
                                            n[e] && (n[e].matches(".ewok-buds-is-inline-contextual") && (h[e] = 0 + h[e]), s.u[e] = n[e].querySelector(".evl-slider2-slider"), g[e] = !!(s.q[e] = n[e].querySelectorAll(".evl-slider2-slider")[1] || null), s.flags[e] = n[e].querySelectorAll(".ewok-buds-flag"), s.comment[e] = n[e].querySelector(".ewok-buds-comment-textarea") || n[e].querySelector("textarea"), s.selDup[e] = m[e].querySelector(".ewok-buds-result-edit-dupes-link"), s.finDup[e] = m[e].querySelector(".ewok-buds-result-finish-dupes-link"), s.markDup[e] = m[e].querySelector(".ewok-buds-result-dupes-checkbox"))
                                        }
                                    }
                                    t = document.querySelector(".ewok-buds-query-container"), r = document.getElementById("ewok-buds-validation-nomoredupes"), e = [c, s]
                                }
                                r && (n = r.querySelector("input")), e && document.querySelectorAll("a").forEach((e => {
                                    e.addEventListener("click", E)
                                }))
                            }()
                        } catch (e) {
                            chrome.runtime.sendMessage({
                                command: "toLog",
                                error: e.message
                            }), console.log(e.stack)
                        }
                        chrome.runtime.onMessage.addListener((t => {
                            const l = t.side,
                                o = t.result - 1;
                            switch (t.command) {
                                case "click":
                                    A(t.stop);
                                    break;
                                case "uorq":
                                    ! function(t, l, o, r) {
                                        let n = e[t][o][l];
                                        if (n) {
                                            let e = n.getBoundingClientRect(),
                                                t = e.left + (e.right - e.left) * ("u" === o ? u[r] : a[r]),
                                                l = e.top + (e.bottom - e.top) / 2;
                                            S(n, "mousedown", t, l), S(n, "mouseup", t, l)
                                        }
                                    }(l, o, t.uorq, t.val);
                                    break;
                                case "fl":
                                    ! function(t, l, o) {
                                        let r = e[t].flags[l][o];
                                        r && r.click()
                                    }(l, o, t.fl);
                                    break;
                                case "comment":
                                    ! function(t, l, o) {
                                        let r = e[t].comment[l];
                                        r && (r.style.display = "initial", r.value = o, r.dispatchEvent(new KeyboardEvent("keyup", {
                                            bubbles: !0,
                                            cancelable: !0,
                                            key: "ArrowRight"
                                        })))
                                    }(l, o, t.comment);
                                    break;
                                case "seldup":
                                    ! function(t, l) {
                                        let o = e[t].selDup[l];
                                        o && o.click()
                                    }(l, o);
                                    break;
                                case "findup":
                                    ! function(t, l) {
                                        let o = e[t].finDup[l];
                                        o && o.click()
                                    }(l, o);
                                    break;
                                case "mrkdup":
                                    ! function(t, l) {
                                        let o = e[t].markDup[l];
                                        o && o.click()
                                    }(l, o);
                                    break;
                                case "crl":
                                    i && function(e) {
                                        const t = document.createElement("a");
                                        t.href = i;
                                        let l = t.protocol + "//" + t.host,
                                            o = t.host.replace(/^(?:www|m)\./, "");
                                        const r = e => {
                                            let t = e.replace(/\%url/gi, i).replace(/\%host/gi, o).replace(/\%main/gi, l);
                                            return t.indexOf("http") ? "https://www.google.com/search?q=" + encodeURIComponent(t) : t
                                        };
                                        let n = "";
                                        for (let t = 0; t < 5; t++) e[t][1] && (n += ' - <a href="' + r(e[t][1]) + '" target=_blank>' + (e[t][0] || "no label") + "</a>");
                                        if (n) {
                                            n = "<b style=color:#f40>LBTimer</b>" + n;
                                            let e = document.getElementById("lbpq");
                                            e || (e = document.createElement("div"), e.id = "lbpq", s.parentNode.insertBefore(e, s.nextSibling)), e.innerHTML = n
                                        }
                                    }(t.crl);
                                    break;
                                case "as":
                                    let r = document.querySelectorAll("[type=submit]");
                                    r[0].classList.toggle("lbf", 128 & t.as && 16384 & !t.as), r[1].classList.toggle("lbf", 16384 & t.as)
                            }
                        })), chrome.runtime.sendMessage({
                            command: "startTimer",
                            task: x,
                            isCert: L,
                            mxtime: c,
                            taskId: C,
                            leftURLs: f,
                            rightURLs: h,
                            query: m,
                            flags: d,
                            lqsliders: k,
                            rqsliders: g,
                            sliderLength: p,
                            PQsliderLength: y,
                            lblArray: b,
                            PQlblArray: q,
                            PQ: i
                        }),
                            function() {
                                if (e && t) {
                                    let l = document.createElement("div"),
                                        o = e[1].u.length,
                                        r = e[0].u.length;
                                    l.innerHTML = "<span style=color:#F40><b>LBTimer</b></span> open: " + (r ? '<span style=color:#006;cursor:pointer title="Open left side results"id=lb-rtl>Left</span> - ' : "") + (o && r ? '<span style=color:#006;cursor:pointer title="Open both sides results"id=lb-rtb>Both</span> - ' : "") + (o ? '<span style=color:#006;cursor:pointer title="Open right side results"id=lb-rtr>Right</span> - ' : "") + '<span style=color:#006;cursor:pointer title="Close opened results"id=lb-x>X</span>', t.firstElementChild.appendChild(l), r && (document.getElementById("lb-rtl").onclick = e => {
                                        w(1, e.ctrlKey || e.shiftKey)
                                    }), o && r && (document.getElementById("lb-rtb").onclick = e => {
                                        w(3, e.ctrlKey || e.shiftKey)
                                    }), o && (document.getElementById("lb-rtr").onclick = e => {
                                        w(2, e.ctrlKey || e.shiftKey)
                                    }), document.getElementById("lb-x").onclick = () => {
                                        chrome.runtime.sendMessage({
                                            command: "closeAll"
                                        })
                                    }
                                }
                                if (r && (n.onchange = () => {
                                    r.style.border = n.checked ? "solid 1px #ccc" : "solid 2px red"
                                }, n.checked = !0), l && l.length) {
                                    for (let e = l.length; e--;) {
                                        let t = document.createElement("a");
                                        l[e].parentNode.insertBefore(t, l[e].nextSibling), t.outerHTML = '<a target=_blank title="Search result using Google"style=text-decoration:none;color:#006;cursor:pointer;font-size:15px;font-weight:bold href=https://www.google.com/search?q=' + encodeURIComponent(o[e]) + "&filter=0>&nbsp;&larr;&nbsp;google it!</a>"
                                    }
                                    l[0].getBoundingClientRect().bottom > innerHeight && l[0].scrollIntoView()
                                }
                                document.querySelectorAll("#hiddenSection input,input[name*=confirm]:not([name$=dnl])").forEach((e => {
                                    e.checked = !0
                                })), document.querySelectorAll("[name$=visited],input[name*=clicked]").forEach((e => {
                                    e.value = !0
                                }))
                            }()
                    } else document.querySelectorAll(".submit").length ? (chrome.runtime.onMessage.addListener((e => {
                        "click" === e.command && A()
                    })), chrome.runtime.sendMessage({
                        command: "startTimer",
                        task: x,
                        mxtime: c,
                        taskId: C
                    })) : alert("LBTimer WARNING: Submit button not detected. NO TIME OR TASK TRACKING!")
            } else if (document.getElementById("task-index")) {
                let e = !!document.querySelector(".ewok-rater-task-option"),
                    t = /continue/i.test(document.querySelector(".container").innerHTML);
                chrome.runtime.onMessage.addListener((e => {
                    if ("acquire" === e.command) {
                        let e = document.querySelector(".ewok-rater-task-option li .button");
                        e && e.click()
                    }
                })), chrome.runtime.sendMessage({
                    command: "stopTimer",
                    tasks: e,
                    incomplete: t
                })
            }
        }(), !/error/i.test(document.title) && document.title || setTimeout((() => {
        /static|pdf$/i.test(location.href) || location.reload(!0)
    }), 1e4)
})();