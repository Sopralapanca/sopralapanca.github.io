(() => {
    if (!document.getElementById("lb-panel")) {
        const e = document.createElement("a");
        document.body.appendChild(e), e.outerHTML = '<style>#lb-qs,#lb-u{-webkit-appearance:none;min-width:200px;width:200px!important;height:6px;max-height:6px!important;min-height:6px!important;background:#CCC;padding:0;border:0;display:block;margin:auto;box-shadow:none;overflow:visible}#lb-u::-webkit-slider-thumb{-webkit-appearance:none;width:10px;height:20px;background-color:#095}#lb-qs::-webkit-slider-thumb{-webkit-appearance:none;width:10px;height:20px;background-color:#88C}input:focus{outline:0;border:none}.lblactv{font-weight:700}.lb-qws{font:700 15px arial;color:#000;float:none}label.lb-f{font:700 13px arial;color:#000;display:inline;border:1px solid grey;padding:0 3px;clear:none;float:none;margin:0 2px;cursor:pointer}input[type=checkbox].lb-f{display:none}input[type=checkbox].lb-f:checked+label{background-color:#ffd5d8;border:1px solid #c41a28}.lb-tbl{border:none;text-align:center;padding:2px;margin:0!important;direction:ltr!important;background-color:#e5e5e5}.lb-sld{width:200px;min-width:200px;max-width:200px;height:22px;min-height:22px;max-height:22px;background-repeat:no-repeat;background-position:center;margin:auto;display:flex}</style><div style="position:fixed;bottom:0;top:initial!important;min-width:550px;max-height:150px;margin:0 30%;padding:5px;border:solid 2px grey;border-bottom-style:none;border-radius:5px 5px 0 0;background-color:#e5e5e5;z-index:2147483647"id=lb-panel><div style=position:absolute;left:0;top:0;color:#00F;cursor:pointer><span id=lb-rl title="Reload this LP">&#x27f3;</span></div><div style=position:absolute;left:initial!important;right:0;top:0;color:#00F;cursor:pointer><span id=lb-say title="Hide/show comment"data-on=0>&#64;</span> <span id=lb-hd title="Hide/show ratings">&#x25bc;</span></div><div style=text-align:center;float:none><span style=font-family:arial;font-size:15px;color:#000;display:inline;cursor:pointer;float:none id=lb-lbl class=lblactv></span><span style="font:15px arial;color:#000;display:none;float:none"id=lb-dvdr>/</span> <span style=font-family:arial;font-size:15px;color:#000;display:none;cursor:pointer;float:none id=lb-lbl2></span>- <span style=display:none;cursor:pointer;float:none id=lb-srchbfr>&lt;</span> <span style=display:inline;float:none id=lb-q></span><span style=display:none;cursor:pointer;float:none id=lb-srchaft>&gt;</span><br></div><table id=lb-rtng class=lb-tbl style=width:100% data-on=1><tr dir=ltr><td class="lb-tbl lb-util"><div class=lb-sld id=lb-u-div><input type=range min=0 max=9 step=1 id=lb-u value=0 style=direction:ltr!important;padding:0!important></div><td class="lb-tbl lb-qlty"><div class=lb-sld id=lb-q-div><input type=range min=0 max=9 step=1 id=lb-qs value=0 style=direction:ltr!important;padding:0!important></div><tr dir=ltr><td class="lb-tbl lb-util"><span style="font:700 16px arial;color:#095"id=lb-Ulbl>N/A</span><td class="lb-tbl lb-qlty"><span style="font:700 16px arial;color:#88C"id=lb-Qlbl>N/A</span><tr dir=ltr><td class=lb-tbl><div id=lb-flags-div style=text-align:left></div><td class=lb-tbl><span style="font:14px arial;color:#2196F3;cursor:pointer"id=seldup>select dupes</span> <span style="font:14px arial;color:#2196F3;cursor:pointer;display:none"id=findup>finish selecting dupes</span> <span id=mrkdup style=display:none><input type=checkbox class=lb-f id=chkdup><label class=lb-f for=chkdup>Dupe of:<span id=duplbl></span></label></span><tr dir=ltr><td class=lb-tbl colspan=2><textarea style=width:100%;display:none;background-color:#FFF;color:#000 id=lb-cmnt placeholder="Write your comment here..."></textarea></table></div>';
        const t = document.getElementById("lb-u"),
            l = document.getElementById("lb-qs"),
            n = document.getElementById("lb-cmnt"),
            o = document.getElementById("seldup"),
            s = document.getElementById("findup"),
            a = document.getElementById("chkdup");
        let d, i, A, r, c = "",
            p = "",
            m = [],
            b = [],
            u = [],
            g = -1;
        const y = () => {
                let e = [];
                for (let t = document.getElementsByClassName("lb-qws"), l = t.length; l--;) "1" == t[l].dataset.on && e.push(t[l].textContent);
                r = e.length ? new RegExp("(" + e.join("|") + ")", "i") : 0;
                for (let e, t = document.getElementsByClassName("lb-hltd"); t.length && (e = t[0]);) {
                    let t = e.parentNode;
                    t.replaceChild(e.firstChild, e), t.normalize()
                }
                document.getElementById("lb-srchbfr").style.display = document.getElementById("lb-srchaft").style.display = r ? "inline" : "none", r && h(document.body)
            },
            h = e => {
                if (e && r && !/^(?:SCRIPT|FORM|STYLE|TEXTAREA)$/i.test(e.nodeName) && "lb-hltd" !== e.className) {
                    if (e.hasChildNodes())
                        for (let t = 0; t < e.childNodes.length; t++) h(e.childNodes[t]);
                    if (3 === e.nodeType) {
                        let t = r.exec(e.textContent);
                        if (t) {
                            let l = document.createElement("span");
                            l.appendChild(document.createTextNode(t[0])), l.style.backgroundColor = "#fe5", l.className = "lb-hltd", l.style.fontStyle = "inherit", l.style.color = "#000";
                            let n = e.splitText(t.index);
                            n.textContent = n.textContent.substring(t[0].length), e.parentNode.insertBefore(l, n)
                        }
                    }
                }
            };
        t.oninput = () => {
            let e = t.value;
            document.getElementById("lb-Ulbl").textContent = b[e], chrome.runtime.sendMessage({
                command: "uorq",
                uorq: "u",
                side: d,
                result: i,
                val: e
            }), e /= t.max, t.style.backgroundImage = "-webkit-gradient(linear,0 0,100% 0,color-stop(" + e + ",#095),color-stop(" + e + ",#CCC))"
        }, l.oninput = () => {
            let e = l.value;
            document.getElementById("lb-Qlbl").textContent = u[e], chrome.runtime.sendMessage({
                command: "uorq",
                uorq: "q",
                side: d,
                result: i,
                val: e
            }), e /= l.max, l.style.backgroundImage = "-webkit-gradient(linear,0 0,100% 0,color-stop(" + e + ",#88C),color-stop(" + e + ",#CCC))"
        }, document.getElementById("lb-rl").onclick = () => {
            chrome.runtime.sendMessage({
                command: "rl",
                side: d,
                result: i
            })
        }, document.getElementById("lb-hd").onclick = function() {
            let e = document.getElementById("lb-rtng"),
                t = "1" == e.dataset.on;
            e.dataset.on = t ? "0" : "1", e.style.display = t ? "none" : "table", this.innerHTML = t ? "&#x25b2" : "&#x25bc"
        }, document.getElementById("lb-say").onclick = function() {
            let e = "0" == this.dataset.on;
            n.style.display = e ? "block" : "none", this.dataset.on = e ? "1" : "0", e && n.focus()
        }, document.getElementById("lb-srchbfr").onclick = () => {
            let e = document.getElementsByClassName("lb-hltd");
            0 > --g && (g = e.length - 1), e[g].scrollIntoView()
        }, document.getElementById("lb-srchaft").onclick = () => {
            let e = document.getElementsByClassName("lb-hltd");
            ++g >= e.length && (g = 0), e[g].scrollIntoView()
        }, n.oninput = () => {
            chrome.runtime.sendMessage({
                command: "comment",
                side: d,
                result: i,
                comment: n.value
            })
        }, o.onclick = () => {
            chrome.runtime.sendMessage({
                command: "seldup",
                side: d,
                result: i
            }), o.style.display = "none", s.style.display = "inline"
        }, s.onclick = () => {
            chrome.runtime.sendMessage({
                command: "findup",
                side: d,
                result: i
            }), s.style.display = "none"
        }, a.onchange = () => {
            chrome.runtime.sendMessage({
                command: "mrkdup",
                side: d,
                result: i
            }), a.checked ? m.push(A) : m.splice(m.indexOf(A), 1)
        }, chrome.runtime.onMessage.addListener((e => {
            const n = document.getElementById("mrkdup"),
                r = document.getElementById("lb-lbl"),
                g = document.getElementById("lb-lbl2"),
                h = document.getElementsByClassName("lb-qlty"),
                f = document.getElementsByClassName("lb-util"),
                x = {
                    3: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAAWAQMAAAC/okGCAAAAA3NCSVQICAjb4U/gAAAABlBMVEUAAAB3d3daxsy0AAAAAXRSTlMAQObYZgAAABdJREFUKFNjOMCAABJIbGaGUZlRGbwyAMz7EtOnllVVAAAAAElFTkSuQmCC)",
                    4: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAAWAQMAAAC/okGCAAAAA3NCSVQICAjb4U/gAAAABlBMVEUAAAB3d3daxsy0AAAAAXRSTlMAQObYZgAAABpJREFUKFNjOMAAARJQ2gBKMzOMyozK4JUBAGDGFvPGVZ90AAAAAElFTkSuQmCC)",
                    5: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAAWAQMAAAC/okGCAAAAA3NCSVQICAjb4U/gAAAABlBMVEUAAAB3d3daxsy0AAAAAXRSTlMAQObYZgAAABpJREFUKFNjOMAAAhJIpAGYZGYYlRmVwSsDAKqkGQOLI5KzAAAAAElFTkSuQmCC)",
                    6: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAAWAQMAAAC/okGCAAAAA3NCSVQICAjb4U/gAAAABlBMVEUAAAB3d3daxsy0AAAAAXRSTlMAQObYZgAAAB1JREFUKFNjOMAABAYgAsRiBjF4GMCsUZlRGbwyADIEJq1HrFshAAAAAElFTkSuQmCC)",
                    8: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAAWAgMAAAD4AjtSAAAAA3NCSVQICAjb4U/gAAAACVBMVEUAAAB3d3eZmZnzzOmPAAAAAXRSTlMAQObYZgAAAC9JREFUOI1jCGAAA0YHBiQggsxhCEDhsTIMhBamBmQtGshaoFKjWka1jGoZfBkZAKOEKD1I5X5dAAAAAElFTkSuQmCC)",
                    10: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAAWAgMAAAD4AjtSAAAAA3NCSVQICAjb4U/gAAAACVBMVEUAAAB3d3eZmZnzzOmPAAAAAXRSTlMAQObYZgAAADJJREFUOMtjCGAAAREGGGB0gDNZ4SyGAAYkUbpr4UJoWYDQsgCuhWtUy6iWUS2DMyMDAOubKysA1bU0AAAAAElFTkSuQmCC)"
                };
            if ("datapassing" === e.command && !c) {
                if (d = e.side, i = e.result, c = "LR" [d] + i, r.textContent = c, e.dupe) {
                    let t = d,
                        l = 1 - d,
                        n = i,
                        o = 1 + ~e.dupe;
                    document.getElementById("lb-dvdr").style.display = "inline", p = "RL" [d] + o, g.textContent = p, g.style.display = "inline", document.title = c + "/" + p, r.onclick = () => {
                        r.classList.add("lblactv"), g.classList.remove("lblactv"), d = t, i = n
                    }, g.onclick = () => {
                        g.classList.add("lblactv"), r.classList.remove("lblactv"), d = l, i = o
                    }
                } else document.title = c;
                for (let t = e.flags, l = t.length, n = 0, o = document.getElementById("lb-flags-div"); n < l; n++) {
                    let e = document.createElement("a"),
                        l = "lb-f" + n;
                    o.appendChild(e), e.outerHTML = '<input type=checkbox class=lb-f id="' + l + '" value="' + n + '"><label class=lb-f title="' + t[n] + '" for="' + l + '">' + t[n][0].toUpperCase() + "</label>", document.getElementById(l).onchange = function() {
                        chrome.runtime.sendMessage({
                            command: "fl",
                            side: d,
                            result: i,
                            fl: this.value
                        })
                    }
                }
                let n = e.query.split(/[\s,.]+/),
                    o = "";
                for (let e = 0, t = n.length; e < t; e++) n[e] && (o += " <span style=display:inline;cursor:pointer data-on=0 class=lb-qws>" + n[e] + "</span>");
                document.getElementById("lb-q").innerHTML = o, document.querySelectorAll(".lb-qws").forEach((e => {
                    e.onclick = function() {
                        this.dataset.on = 1 - this.dataset.on, y()
                    }
                })), t.max = e.sliderLength - 1, document.getElementById("lb-u-div").style.backgroundImage = x[e.sliderLength] || x[10], b = e.lblArray, e.isthereq ? (l.max = e.PQsliderLength - 1, document.getElementById("lb-q-div").style.backgroundImage = x[e.PQsliderLength] || x[10], u = e.PQlblArray) : (h[0].style.display = h[1].style.display = "none", f[0].colSpan = f[1].colSpan = 2)
            }
            "seldup" === e.command && (A = "LR" [e.side] + e.result, c != A && p != A && (o.style.display = "none", document.getElementById("duplbl").textContent = A, n.style.display = "inline", a.checked = !!~m.indexOf(A))), "findup" === e.command && (o.style.display = "inline", s.style.display = n.style.display = "none")
        }))
    }
})();