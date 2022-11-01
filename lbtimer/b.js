/*For license information please see LICENSE*/
(() => {
    "use strict";
    ! function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }();
    const e = function(e, n) {
            if (!e) throw t(n)
        },
        t = function(e) {
            return new Error("Firebase Database (${JSCORE_VERSION}) INTERNAL ASSERT FAILED: " + e)
        },
        n = function(e) {
            const t = [];
            let n = 0;
            for (let i = 0; i < e.length; i++) {
                let s = e.charCodeAt(i);
                s < 128 ? t[n++] = s : s < 2048 ? (t[n++] = s >> 6 | 192, t[n++] = 63 & s | 128) : 55296 == (64512 & s) && i + 1 < e.length && 56320 == (64512 & e.charCodeAt(i + 1)) ? (s = 65536 + ((1023 & s) << 10) + (1023 & e.charCodeAt(++i)), t[n++] = s >> 18 | 240, t[n++] = s >> 12 & 63 | 128, t[n++] = s >> 6 & 63 | 128, t[n++] = 63 & s | 128) : (t[n++] = s >> 12 | 224, t[n++] = s >> 6 & 63 | 128, t[n++] = 63 & s | 128)
            }
            return t
        },
        i = {
            byteToCharMap_: null,
            charToByteMap_: null,
            byteToCharMapWebSafe_: null,
            charToByteMapWebSafe_: null,
            ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
            get ENCODED_VALS() {
                return this.ENCODED_VALS_BASE + "+/="
            },
            get ENCODED_VALS_WEBSAFE() {
                return this.ENCODED_VALS_BASE + "-_."
            },
            HAS_NATIVE_SUPPORT: "function" == typeof atob,
            encodeByteArray(e, t) {
                if (!Array.isArray(e)) throw Error("encodeByteArray takes an array as a parameter");
                this.init_();
                const n = t ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
                    i = [];
                for (let t = 0; t < e.length; t += 3) {
                    const s = e[t],
                        r = t + 1 < e.length,
                        o = r ? e[t + 1] : 0,
                        a = t + 2 < e.length,
                        c = a ? e[t + 2] : 0,
                        l = s >> 2,
                        h = (3 & s) << 4 | o >> 4;
                    let u = (15 & o) << 2 | c >> 6,
                        d = 63 & c;
                    a || (d = 64, r || (u = 64)), i.push(n[l], n[h], n[u], n[d])
                }
                return i.join("")
            },
            encodeString(e, t) {
                return this.HAS_NATIVE_SUPPORT && !t ? btoa(e) : this.encodeByteArray(n(e), t)
            },
            decodeString(e, t) {
                return this.HAS_NATIVE_SUPPORT && !t ? atob(e) : function(e) {
                    const t = [];
                    let n = 0,
                        i = 0;
                    for (; n < e.length;) {
                        const s = e[n++];
                        if (s < 128) t[i++] = String.fromCharCode(s);
                        else if (s > 191 && s < 224) {
                            const r = e[n++];
                            t[i++] = String.fromCharCode((31 & s) << 6 | 63 & r)
                        } else if (s > 239 && s < 365) {
                            const r = ((7 & s) << 18 | (63 & e[n++]) << 12 | (63 & e[n++]) << 6 | 63 & e[n++]) - 65536;
                            t[i++] = String.fromCharCode(55296 + (r >> 10)), t[i++] = String.fromCharCode(56320 + (1023 & r))
                        } else {
                            const r = e[n++],
                                o = e[n++];
                            t[i++] = String.fromCharCode((15 & s) << 12 | (63 & r) << 6 | 63 & o)
                        }
                    }
                    return t.join("")
                }(this.decodeStringToByteArray(e, t))
            },
            decodeStringToByteArray(e, t) {
                this.init_();
                const n = t ? this.charToByteMapWebSafe_ : this.charToByteMap_,
                    i = [];
                for (let t = 0; t < e.length;) {
                    const s = n[e.charAt(t++)],
                        r = t < e.length ? n[e.charAt(t)] : 0;
                    ++t;
                    const o = t < e.length ? n[e.charAt(t)] : 64;
                    ++t;
                    const a = t < e.length ? n[e.charAt(t)] : 64;
                    if (++t, null == s || null == r || null == o || null == a) throw Error();
                    const c = s << 2 | r >> 4;
                    if (i.push(c), 64 !== o) {
                        const e = r << 4 & 240 | o >> 2;
                        if (i.push(e), 64 !== a) {
                            const e = o << 6 & 192 | a;
                            i.push(e)
                        }
                    }
                }
                return i
            },
            init_() {
                if (!this.byteToCharMap_) {
                    this.byteToCharMap_ = {}, this.charToByteMap_ = {}, this.byteToCharMapWebSafe_ = {}, this.charToByteMapWebSafe_ = {};
                    for (let e = 0; e < this.ENCODED_VALS.length; e++) this.byteToCharMap_[e] = this.ENCODED_VALS.charAt(e), this.charToByteMap_[this.byteToCharMap_[e]] = e, this.byteToCharMapWebSafe_[e] = this.ENCODED_VALS_WEBSAFE.charAt(e), this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]] = e, e >= this.ENCODED_VALS_BASE.length && (this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)] = e, this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)] = e)
                }
            }
        },
        s = function(e) {
            const t = n(e);
            return i.encodeByteArray(t, !0)
        },
        r = function(e) {
            return s(e).replace(/\./g, "")
        },
        o = function(e) {
            try {
                return i.decodeString(e, !0)
            } catch (e) {
                console.error("base64Decode failed: ", e)
            }
            return null
        };

    function a(e) {
        return c(void 0, e)
    }

    function c(e, t) {
        if (!(t instanceof Object)) return t;
        switch (t.constructor) {
            case Date:
                return new Date(t.getTime());
            case Object:
                void 0 === e && (e = {});
                break;
            case Array:
                e = [];
                break;
            default:
                return t
        }
        for (const n in t) t.hasOwnProperty(n) && "__proto__" !== n && (e[n] = c(e[n], t[n]));
        return e
    }
    class l {
        constructor() {
            this.reject = () => {}, this.resolve = () => {}, this.promise = new Promise(((e, t) => {
                this.resolve = e, this.reject = t
            }))
        }
        wrapCallback(e) {
            return (t, n) => {
                t ? this.reject(t) : this.resolve(n), "function" == typeof e && (this.promise.catch((() => {})), 1 === e.length ? e(t) : e(t, n))
            }
        }
    }

    function h() {
        return "undefined" != typeof navigator && "string" == typeof navigator.userAgent ? navigator.userAgent : ""
    }

    function u() {
        return "undefined" != typeof window && !!(window.cordova || window.phonegap || window.PhoneGap) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(h())
    }

    function d() {
        return "object" == typeof navigator && "ReactNative" === navigator.product
    }
    class p extends Error {
        constructor(e, t, n) {
            super(t), this.code = e, this.customData = n, this.name = "FirebaseError", Object.setPrototypeOf(this, p.prototype), Error.captureStackTrace && Error.captureStackTrace(this, f.prototype.create)
        }
    }
    class f {
        constructor(e, t, n) {
            this.service = e, this.serviceName = t, this.errors = n
        }
        create(e, ...t) {
            const n = t[0] || {},
                i = `${this.service}/${e}`,
                s = this.errors[e],
                r = s ? function(e, t) {
                    return e.replace(m, ((e, n) => {
                        const i = t[n];
                        return null != i ? String(i) : `<${n}?>`
                    }))
                }(s, n) : "Error",
                o = `${this.serviceName}: ${r} (${i}).`;
            return new p(i, o, n)
        }
    }
    const m = /\{\$([^}]+)}/g;

    function g(e) {
        return JSON.parse(e)
    }

    function _(e) {
        return JSON.stringify(e)
    }
    const v = function(e) {
        let t = {},
            n = {},
            i = {},
            s = "";
        try {
            const r = e.split(".");
            t = g(o(r[0]) || ""), n = g(o(r[1]) || ""), s = r[2], i = n.d || {}, delete n.d
        } catch (e) {}
        return {
            header: t,
            claims: n,
            data: i,
            signature: s
        }
    };

    function y(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }

    function w(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t) ? e[t] : void 0
    }

    function b(e) {
        for (const t in e)
            if (Object.prototype.hasOwnProperty.call(e, t)) return !1;
        return !0
    }

    function I(e, t, n) {
        const i = {};
        for (const s in e) Object.prototype.hasOwnProperty.call(e, s) && (i[s] = t.call(n, e[s], s, e));
        return i
    }

    function C(e, t) {
        if (e === t) return !0;
        const n = Object.keys(e),
            i = Object.keys(t);
        for (const s of n) {
            if (!i.includes(s)) return !1;
            const n = e[s],
                r = t[s];
            if (T(n) && T(r)) {
                if (!C(n, r)) return !1
            } else if (n !== r) return !1
        }
        for (const e of i)
            if (!n.includes(e)) return !1;
        return !0
    }

    function T(e) {
        return null !== e && "object" == typeof e
    }

    function k(e) {
        const t = [];
        for (const [n, i] of Object.entries(e)) Array.isArray(i) ? i.forEach((e => {
            t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e))
        })) : t.push(encodeURIComponent(n) + "=" + encodeURIComponent(i));
        return t.length ? "&" + t.join("&") : ""
    }

    function E(e) {
        const t = {};
        return e.replace(/^\?/, "").split("&").forEach((e => {
            if (e) {
                const [n, i] = e.split("=");
                t[decodeURIComponent(n)] = decodeURIComponent(i)
            }
        })), t
    }

    function S(e) {
        const t = e.indexOf("?");
        if (!t) return "";
        const n = e.indexOf("#", t);
        return e.substring(t, n > 0 ? n : void 0)
    }
    class N {
        constructor() {
            this.chain_ = [], this.buf_ = [], this.W_ = [], this.pad_ = [], this.inbuf_ = 0, this.total_ = 0, this.blockSize = 64, this.pad_[0] = 128;
            for (let e = 1; e < this.blockSize; ++e) this.pad_[e] = 0;
            this.reset()
        }
        reset() {
            this.chain_[0] = 1732584193, this.chain_[1] = 4023233417, this.chain_[2] = 2562383102, this.chain_[3] = 271733878, this.chain_[4] = 3285377520, this.inbuf_ = 0, this.total_ = 0
        }
        compress_(e, t) {
            t || (t = 0);
            const n = this.W_;
            if ("string" == typeof e)
                for (let i = 0; i < 16; i++) n[i] = e.charCodeAt(t) << 24 | e.charCodeAt(t + 1) << 16 | e.charCodeAt(t + 2) << 8 | e.charCodeAt(t + 3), t += 4;
            else
                for (let i = 0; i < 16; i++) n[i] = e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3], t += 4;
            for (let e = 16; e < 80; e++) {
                const t = n[e - 3] ^ n[e - 8] ^ n[e - 14] ^ n[e - 16];
                n[e] = 4294967295 & (t << 1 | t >>> 31)
            }
            let i, s, r = this.chain_[0],
                o = this.chain_[1],
                a = this.chain_[2],
                c = this.chain_[3],
                l = this.chain_[4];
            for (let e = 0; e < 80; e++) {
                e < 40 ? e < 20 ? (i = c ^ o & (a ^ c), s = 1518500249) : (i = o ^ a ^ c, s = 1859775393) : e < 60 ? (i = o & a | c & (o | a), s = 2400959708) : (i = o ^ a ^ c, s = 3395469782);
                const t = (r << 5 | r >>> 27) + i + l + s + n[e] & 4294967295;
                l = c, c = a, a = 4294967295 & (o << 30 | o >>> 2), o = r, r = t
            }
            this.chain_[0] = this.chain_[0] + r & 4294967295, this.chain_[1] = this.chain_[1] + o & 4294967295, this.chain_[2] = this.chain_[2] + a & 4294967295, this.chain_[3] = this.chain_[3] + c & 4294967295, this.chain_[4] = this.chain_[4] + l & 4294967295
        }
        update(e, t) {
            if (null == e) return;
            void 0 === t && (t = e.length);
            const n = t - this.blockSize;
            let i = 0;
            const s = this.buf_;
            let r = this.inbuf_;
            for (; i < t;) {
                if (0 === r)
                    for (; i <= n;) this.compress_(e, i), i += this.blockSize;
                if ("string" == typeof e) {
                    for (; i < t;)
                        if (s[r] = e.charCodeAt(i), ++r, ++i, r === this.blockSize) {
                            this.compress_(s), r = 0;
                            break
                        }
                } else
                    for (; i < t;)
                        if (s[r] = e[i], ++r, ++i, r === this.blockSize) {
                            this.compress_(s), r = 0;
                            break
                        }
            }
            this.inbuf_ = r, this.total_ += t
        }
        digest() {
            const e = [];
            let t = 8 * this.total_;
            this.inbuf_ < 56 ? this.update(this.pad_, 56 - this.inbuf_) : this.update(this.pad_, this.blockSize - (this.inbuf_ - 56));
            for (let e = this.blockSize - 1; e >= 56; e--) this.buf_[e] = 255 & t, t /= 256;
            this.compress_(this.buf_);
            let n = 0;
            for (let t = 0; t < 5; t++)
                for (let i = 24; i >= 0; i -= 8) e[n] = this.chain_[t] >> i & 255, ++n;
            return e
        }
    }
    class R {
        constructor(e, t) {
            this.observers = [], this.unsubscribes = [], this.observerCount = 0, this.task = Promise.resolve(), this.finalized = !1, this.onNoObservers = t, this.task.then((() => {
                e(this)
            })).catch((e => {
                this.error(e)
            }))
        }
        next(e) {
            this.forEachObserver((t => {
                t.next(e)
            }))
        }
        error(e) {
            this.forEachObserver((t => {
                t.error(e)
            })), this.close(e)
        }
        complete() {
            this.forEachObserver((e => {
                e.complete()
            })), this.close()
        }
        subscribe(e, t, n) {
            let i;
            if (void 0 === e && void 0 === t && void 0 === n) throw new Error("Missing Observer.");
            i = function(e, t) {
                if ("object" != typeof e || null === e) return !1;
                for (const t of ["next", "error", "complete"])
                    if (t in e && "function" == typeof e[t]) return !0;
                return !1
            }(e) ? e : {
                next: e,
                error: t,
                complete: n
            }, void 0 === i.next && (i.next = P), void 0 === i.error && (i.error = P), void 0 === i.complete && (i.complete = P);
            const s = this.unsubscribeOne.bind(this, this.observers.length);
            return this.finalized && this.task.then((() => {
                try {
                    this.finalError ? i.error(this.finalError) : i.complete()
                } catch (e) {}
            })), this.observers.push(i), s
        }
        unsubscribeOne(e) {
            void 0 !== this.observers && void 0 !== this.observers[e] && (delete this.observers[e], this.observerCount -= 1, 0 === this.observerCount && void 0 !== this.onNoObservers && this.onNoObservers(this))
        }
        forEachObserver(e) {
            if (!this.finalized)
                for (let t = 0; t < this.observers.length; t++) this.sendOne(t, e)
        }
        sendOne(e, t) {
            this.task.then((() => {
                if (void 0 !== this.observers && void 0 !== this.observers[e]) try {
                    t(this.observers[e])
                } catch (e) {
                    "undefined" != typeof console && console.error && console.error(e)
                }
            }))
        }
        close(e) {
            this.finalized || (this.finalized = !0, void 0 !== e && (this.finalError = e), this.task.then((() => {
                this.observers = void 0, this.onNoObservers = void 0
            })))
        }
    }

    function P() {}

    function O(e, t) {
        return `${e} failed: ${t} argument `
    }
    const x = function(e) {
        let t = 0;
        for (let n = 0; n < e.length; n++) {
            const i = e.charCodeAt(n);
            i < 128 ? t++ : i < 2048 ? t += 2 : i >= 55296 && i <= 56319 ? (t += 4, n++) : t += 3
        }
        return t
    };

    function A(e) {
        return e && e._delegate ? e._delegate : e
    }
    class D {
        constructor(e, t, n) {
            this.name = e, this.instanceFactory = t, this.type = n, this.multipleInstances = !1, this.serviceProps = {}, this.instantiationMode = "LAZY", this.onInstanceCreated = null
        }
        setInstantiationMode(e) {
            return this.instantiationMode = e, this
        }
        setMultipleInstances(e) {
            return this.multipleInstances = e, this
        }
        setServiceProps(e) {
            return this.serviceProps = e, this
        }
        setInstanceCreatedCallback(e) {
            return this.onInstanceCreated = e, this
        }
    }
    const L = "[DEFAULT]";
    class M {
        constructor(e, t) {
            this.name = e, this.container = t, this.component = null, this.instances = new Map, this.instancesDeferred = new Map, this.instancesOptions = new Map, this.onInitCallbacks = new Map
        }
        get(e) {
            const t = this.normalizeInstanceIdentifier(e);
            if (!this.instancesDeferred.has(t)) {
                const e = new l;
                if (this.instancesDeferred.set(t, e), this.isInitialized(t) || this.shouldAutoInitialize()) try {
                    const n = this.getOrInitializeService({
                        instanceIdentifier: t
                    });
                    n && e.resolve(n)
                } catch (e) {}
            }
            return this.instancesDeferred.get(t).promise
        }
        getImmediate(e) {
            var t;
            const n = this.normalizeInstanceIdentifier(null == e ? void 0 : e.identifier),
                i = null !== (t = null == e ? void 0 : e.optional) && void 0 !== t && t;
            if (!this.isInitialized(n) && !this.shouldAutoInitialize()) {
                if (i) return null;
                throw Error(`Service ${this.name} is not available`)
            }
            try {
                return this.getOrInitializeService({
                    instanceIdentifier: n
                })
            } catch (e) {
                if (i) return null;
                throw e
            }
        }
        getComponent() {
            return this.component
        }
        setComponent(e) {
            if (e.name !== this.name) throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);
            if (this.component) throw Error(`Component for ${this.name} has already been provided`);
            if (this.component = e, this.shouldAutoInitialize()) {
                if (function(e) {
                    return "EAGER" === e.instantiationMode
                }(e)) try {
                    this.getOrInitializeService({
                        instanceIdentifier: L
                    })
                } catch (e) {}
                for (const [e, t] of this.instancesDeferred.entries()) {
                    const n = this.normalizeInstanceIdentifier(e);
                    try {
                        const e = this.getOrInitializeService({
                            instanceIdentifier: n
                        });
                        t.resolve(e)
                    } catch (e) {}
                }
            }
        }
        clearInstance(e = "[DEFAULT]") {
            this.instancesDeferred.delete(e), this.instancesOptions.delete(e), this.instances.delete(e)
        }
        async delete() {
            const e = Array.from(this.instances.values());
            await Promise.all([...e.filter((e => "INTERNAL" in e)).map((e => e.INTERNAL.delete())), ...e.filter((e => "_delete" in e)).map((e => e._delete()))])
        }
        isComponentSet() {
            return null != this.component
        }
        isInitialized(e = "[DEFAULT]") {
            return this.instances.has(e)
        }
        getOptions(e = "[DEFAULT]") {
            return this.instancesOptions.get(e) || {}
        }
        initialize(e = {}) {
            const {
                options: t = {}
            } = e, n = this.normalizeInstanceIdentifier(e.instanceIdentifier);
            if (this.isInitialized(n)) throw Error(`${this.name}(${n}) has already been initialized`);
            if (!this.isComponentSet()) throw Error(`Component ${this.name} has not been registered yet`);
            const i = this.getOrInitializeService({
                instanceIdentifier: n,
                options: t
            });
            for (const [e, t] of this.instancesDeferred.entries()) n === this.normalizeInstanceIdentifier(e) && t.resolve(i);
            return i
        }
        onInit(e, t) {
            var n;
            const i = this.normalizeInstanceIdentifier(t),
                s = null !== (n = this.onInitCallbacks.get(i)) && void 0 !== n ? n : new Set;
            s.add(e), this.onInitCallbacks.set(i, s);
            const r = this.instances.get(i);
            return r && e(r, i), () => {
                s.delete(e)
            }
        }
        invokeOnInitCallbacks(e, t) {
            const n = this.onInitCallbacks.get(t);
            if (n)
                for (const i of n) try {
                    i(e, t)
                } catch (e) {}
        }
        getOrInitializeService({
                                   instanceIdentifier: e,
                                   options: t = {}
                               }) {
            let n = this.instances.get(e);
            if (!n && this.component && (n = this.component.instanceFactory(this.container, {
                instanceIdentifier: (i = e, i === L ? void 0 : i),
                options: t
            }), this.instances.set(e, n), this.instancesOptions.set(e, t), this.invokeOnInitCallbacks(n, e), this.component.onInstanceCreated)) try {
                this.component.onInstanceCreated(this.container, e, n)
            } catch (e) {}
            var i;
            return n || null
        }
        normalizeInstanceIdentifier(e = "[DEFAULT]") {
            return this.component ? this.component.multipleInstances ? e : L : e
        }
        shouldAutoInitialize() {
            return !!this.component && "EXPLICIT" !== this.component.instantiationMode
        }
    }
    class F {
        constructor(e) {
            this.name = e, this.providers = new Map
        }
        addComponent(e) {
            const t = this.getProvider(e.name);
            if (t.isComponentSet()) throw new Error(`Component ${e.name} has already been registered with ${this.name}`);
            t.setComponent(e)
        }
        addOrOverwriteComponent(e) {
            this.getProvider(e.name).isComponentSet() && this.providers.delete(e.name), this.addComponent(e)
        }
        getProvider(e) {
            if (this.providers.has(e)) return this.providers.get(e);
            const t = new M(e, this);
            return this.providers.set(e, t), t
        }
        getProviders() {
            return Array.from(this.providers.values())
        }
    }
    const U = [];
    var q;
    ! function(e) {
        e[e.DEBUG = 0] = "DEBUG", e[e.VERBOSE = 1] = "VERBOSE", e[e.INFO = 2] = "INFO", e[e.WARN = 3] = "WARN", e[e.ERROR = 4] = "ERROR", e[e.SILENT = 5] = "SILENT"
    }(q || (q = {}));
    const W = {
            debug: q.DEBUG,
            verbose: q.VERBOSE,
            info: q.INFO,
            warn: q.WARN,
            error: q.ERROR,
            silent: q.SILENT
        },
        j = q.INFO,
        B = {
            [q.DEBUG]: "log",
            [q.VERBOSE]: "log",
            [q.INFO]: "info",
            [q.WARN]: "warn",
            [q.ERROR]: "error"
        },
        H = (e, t, ...n) => {
            if (t < e.logLevel) return;
            const i = (new Date).toISOString(),
                s = B[t];
            if (!s) throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);
            console[s](`[${i}]  ${e.name}:`, ...n)
        };
    class V {
        constructor(e) {
            this.name = e, this._logLevel = j, this._logHandler = H, this._userLogHandler = null, U.push(this)
        }
        get logLevel() {
            return this._logLevel
        }
        set logLevel(e) {
            if (!(e in q)) throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);
            this._logLevel = e
        }
        setLogLevel(e) {
            this._logLevel = "string" == typeof e ? W[e] : e
        }
        get logHandler() {
            return this._logHandler
        }
        set logHandler(e) {
            if ("function" != typeof e) throw new TypeError("Value assigned to `logHandler` must be a function");
            this._logHandler = e
        }
        get userLogHandler() {
            return this._userLogHandler
        }
        set userLogHandler(e) {
            this._userLogHandler = e
        }
        debug(...e) {
            this._userLogHandler && this._userLogHandler(this, q.DEBUG, ...e), this._logHandler(this, q.DEBUG, ...e)
        }
        log(...e) {
            this._userLogHandler && this._userLogHandler(this, q.VERBOSE, ...e), this._logHandler(this, q.VERBOSE, ...e)
        }
        info(...e) {
            this._userLogHandler && this._userLogHandler(this, q.INFO, ...e), this._logHandler(this, q.INFO, ...e)
        }
        warn(...e) {
            this._userLogHandler && this._userLogHandler(this, q.WARN, ...e), this._logHandler(this, q.WARN, ...e)
        }
        error(...e) {
            this._userLogHandler && this._userLogHandler(this, q.ERROR, ...e), this._logHandler(this, q.ERROR, ...e)
        }
    }
    let z, $;
    const K = new WeakMap,
        G = new WeakMap,
        Y = new WeakMap,
        J = new WeakMap,
        Q = new WeakMap;
    let X = {
        get(e, t, n) {
            if (e instanceof IDBTransaction) {
                if ("done" === t) return G.get(e);
                if ("objectStoreNames" === t) return e.objectStoreNames || Y.get(e);
                if ("store" === t) return n.objectStoreNames[1] ? void 0 : n.objectStore(n.objectStoreNames[0])
            }
            return ee(e[t])
        },
        set: (e, t, n) => (e[t] = n, !0),
        has: (e, t) => e instanceof IDBTransaction && ("done" === t || "store" === t) || t in e
    };

    function Z(e) {
        return "function" == typeof e ? (t = e) !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? ($ || ($ = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(t) ? function(...e) {
            return t.apply(te(this), e), ee(K.get(this))
        } : function(...e) {
            return ee(t.apply(te(this), e))
        } : function(e, ...n) {
            const i = t.call(te(this), e, ...n);
            return Y.set(i, e.sort ? e.sort() : [e]), ee(i)
        } : (e instanceof IDBTransaction && function(e) {
            if (G.has(e)) return;
            const t = new Promise(((t, n) => {
                const i = () => {
                        e.removeEventListener("complete", s), e.removeEventListener("error", r), e.removeEventListener("abort", r)
                    },
                    s = () => {
                        t(), i()
                    },
                    r = () => {
                        n(e.error || new DOMException("AbortError", "AbortError")), i()
                    };
                e.addEventListener("complete", s), e.addEventListener("error", r), e.addEventListener("abort", r)
            }));
            G.set(e, t)
        }(e), n = e, (z || (z = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])).some((e => n instanceof e)) ? new Proxy(e, X) : e);
        var t, n
    }

    function ee(e) {
        if (e instanceof IDBRequest) return function(e) {
            const t = new Promise(((t, n) => {
                const i = () => {
                        e.removeEventListener("success", s), e.removeEventListener("error", r)
                    },
                    s = () => {
                        t(ee(e.result)), i()
                    },
                    r = () => {
                        n(e.error), i()
                    };
                e.addEventListener("success", s), e.addEventListener("error", r)
            }));
            return t.then((t => {
                t instanceof IDBCursor && K.set(t, e)
            })).catch((() => {})), Q.set(t, e), t
        }(e);
        if (J.has(e)) return J.get(e);
        const t = Z(e);
        return t !== e && (J.set(e, t), Q.set(t, e)), t
    }
    const te = e => Q.get(e),
        ne = ["get", "getKey", "getAll", "getAllKeys", "count"],
        ie = ["put", "add", "delete", "clear"],
        se = new Map;

    function re(e, t) {
        if (!(e instanceof IDBDatabase) || t in e || "string" != typeof t) return;
        if (se.get(t)) return se.get(t);
        const n = t.replace(/FromIndex$/, ""),
            i = t !== n,
            s = ie.includes(n);
        if (!(n in (i ? IDBIndex : IDBObjectStore).prototype) || !s && !ne.includes(n)) return;
        const r = async function(e, ...t) {
            const r = this.transaction(e, s ? "readwrite" : "readonly");
            let o = r.store;
            return i && (o = o.index(t.shift())), (await Promise.all([o[n](...t), s && r.done]))[0]
        };
        return se.set(t, r), r
    }
    var oe;
    oe = X, X = {
        ...oe,
        get: (e, t, n) => re(e, t) || oe.get(e, t, n),
        has: (e, t) => !!re(e, t) || oe.has(e, t)
    };
    class ae {
        constructor(e) {
            this.container = e
        }
        getPlatformInfoString() {
            return this.container.getProviders().map((e => {
                if (function(e) {
                    const t = e.getComponent();
                    return "VERSION" === (null == t ? void 0 : t.type)
                }(e)) {
                    const t = e.getImmediate();
                    return `${t.library}/${t.version}`
                }
                return null
            })).filter((e => e)).join(" ")
        }
    }
    const ce = "@firebase/app",
        le = "0.7.25",
        he = new V("@firebase/app"),
        ue = {
            [ce]: "fire-core",
            "@firebase/app-compat": "fire-core-compat",
            "@firebase/analytics": "fire-analytics",
            "@firebase/analytics-compat": "fire-analytics-compat",
            "@firebase/app-check": "fire-app-check",
            "@firebase/app-check-compat": "fire-app-check-compat",
            "@firebase/auth": "fire-auth",
            "@firebase/auth-compat": "fire-auth-compat",
            "@firebase/database": "fire-rtdb",
            "@firebase/database-compat": "fire-rtdb-compat",
            "@firebase/functions": "fire-fn",
            "@firebase/functions-compat": "fire-fn-compat",
            "@firebase/installations": "fire-iid",
            "@firebase/installations-compat": "fire-iid-compat",
            "@firebase/messaging": "fire-fcm",
            "@firebase/messaging-compat": "fire-fcm-compat",
            "@firebase/performance": "fire-perf",
            "@firebase/performance-compat": "fire-perf-compat",
            "@firebase/remote-config": "fire-rc",
            "@firebase/remote-config-compat": "fire-rc-compat",
            "@firebase/storage": "fire-gcs",
            "@firebase/storage-compat": "fire-gcs-compat",
            "@firebase/firestore": "fire-fst",
            "@firebase/firestore-compat": "fire-fst-compat",
            "fire-js": "fire-js",
            firebase: "fire-js-all"
        },
        de = new Map,
        pe = new Map;

    function fe(e, t) {
        try {
            e.container.addComponent(t)
        } catch (n) {
            he.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`, n)
        }
    }

    function me(e) {
        const t = e.name;
        if (pe.has(t)) return he.debug(`There were multiple attempts to register component ${t}.`), !1;
        pe.set(t, e);
        for (const t of de.values()) fe(t, e);
        return !0
    }

    function ge(e, t) {
        const n = e.container.getProvider("heartbeat").getImmediate({
            optional: !0
        });
        return n && n.triggerHeartbeat(), e.container.getProvider(t)
    }
    const _e = new f("app", "Firebase", {
        "no-app": "No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",
        "bad-app-name": "Illegal App name: '{$appName}",
        "duplicate-app": "Firebase App named '{$appName}' already exists with different options or config",
        "app-deleted": "Firebase App named '{$appName}' already deleted",
        "invalid-app-argument": "firebase.{$appName}() takes either no argument or a Firebase App instance.",
        "invalid-log-argument": "First argument to `onLog` must be null or a function.",
        "storage-open": "Error thrown when opening storage. Original error: {$originalErrorMessage}.",
        "storage-get": "Error thrown when reading from storage. Original error: {$originalErrorMessage}.",
        "storage-set": "Error thrown when writing to storage. Original error: {$originalErrorMessage}.",
        "storage-delete": "Error thrown when deleting from storage. Original error: {$originalErrorMessage}."
    });
    class ve {
        constructor(e, t, n) {
            this._isDeleted = !1, this._options = Object.assign({}, e), this._config = Object.assign({}, t), this._name = t.name, this._automaticDataCollectionEnabled = t.automaticDataCollectionEnabled, this._container = n, this.container.addComponent(new D("app", (() => this), "PUBLIC"))
        }
        get automaticDataCollectionEnabled() {
            return this.checkDestroyed(), this._automaticDataCollectionEnabled
        }
        set automaticDataCollectionEnabled(e) {
            this.checkDestroyed(), this._automaticDataCollectionEnabled = e
        }
        get name() {
            return this.checkDestroyed(), this._name
        }
        get options() {
            return this.checkDestroyed(), this._options
        }
        get config() {
            return this.checkDestroyed(), this._config
        }
        get container() {
            return this._container
        }
        get isDeleted() {
            return this._isDeleted
        }
        set isDeleted(e) {
            this._isDeleted = e
        }
        checkDestroyed() {
            if (this.isDeleted) throw _e.create("app-deleted", {
                appName: this._name
            })
        }
    }
    const ye = "9.8.2";

    function we(e = "[DEFAULT]") {
        const t = de.get(e);
        if (!t) throw _e.create("no-app", {
            appName: e
        });
        return t
    }

    function be(e, t, n) {
        var i;
        let s = null !== (i = ue[e]) && void 0 !== i ? i : e;
        n && (s += `-${n}`);
        const r = s.match(/\s|\//),
            o = t.match(/\s|\//);
        if (r || o) {
            const e = [`Unable to register library "${s}" with version "${t}":`];
            return r && e.push(`library name "${s}" contains illegal characters (whitespace or "/")`), r && o && e.push("and"), o && e.push(`version name "${t}" contains illegal characters (whitespace or "/")`), void he.warn(e.join(" "))
        }
        me(new D(`${s}-version`, (() => ({
            library: s,
            version: t
        })), "VERSION"))
    }
    const Ie = "firebase-heartbeat-store";
    let Ce = null;

    function Te() {
        return Ce || (Ce = function(e, t, {
            blocked: n,
            upgrade: i,
            blocking: s,
            terminated: r
        } = {}) {
            const o = indexedDB.open(e, t),
                a = ee(o);
            return i && o.addEventListener("upgradeneeded", (e => {
                i(ee(o.result), e.oldVersion, e.newVersion, ee(o.transaction))
            })), n && o.addEventListener("blocked", (() => n())), a.then((e => {
                r && e.addEventListener("close", (() => r())), s && e.addEventListener("versionchange", (() => s()))
            })).catch((() => {})), a
        }("firebase-heartbeat-database", 1, {
            upgrade: (e, t) => {
                0 === t && e.createObjectStore(Ie)
            }
        }).catch((e => {
            throw _e.create("storage-open", {
                originalErrorMessage: e.message
            })
        }))), Ce
    }
    async function ke(e, t) {
        try {
            const n = (await Te()).transaction(Ie, "readwrite"),
                i = n.objectStore(Ie);
            return await i.put(t, Ee(e)), n.done
        } catch (e) {
            throw _e.create("storage-set", {
                originalErrorMessage: e.message
            })
        }
    }

    function Ee(e) {
        return `${e.name}!${e.options.appId}`
    }
    class Se {
        constructor(e) {
            this.container = e, this._heartbeatsCache = null;
            const t = this.container.getProvider("app").getImmediate();
            this._storage = new Re(t), this._heartbeatsCachePromise = this._storage.read().then((e => (this._heartbeatsCache = e, e)))
        }
        async triggerHeartbeat() {
            const e = this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),
                t = Ne();
            if (null === this._heartbeatsCache && (this._heartbeatsCache = await this._heartbeatsCachePromise), this._heartbeatsCache.lastSentHeartbeatDate !== t && !this._heartbeatsCache.heartbeats.some((e => e.date === t))) return this._heartbeatsCache.heartbeats.push({
                date: t,
                agent: e
            }), this._heartbeatsCache.heartbeats = this._heartbeatsCache.heartbeats.filter((e => {
                const t = new Date(e.date).valueOf();
                return Date.now() - t <= 2592e6
            })), this._storage.overwrite(this._heartbeatsCache)
        }
        async getHeartbeatsHeader() {
            if (null === this._heartbeatsCache && await this._heartbeatsCachePromise, null === this._heartbeatsCache || 0 === this._heartbeatsCache.heartbeats.length) return "";
            const e = Ne(),
                {
                    heartbeatsToSend: t,
                    unsentEntries: n
                } = function(e, t = 1024) {
                    const n = [];
                    let i = e.slice();
                    for (const s of e) {
                        const e = n.find((e => e.agent === s.agent));
                        if (e) {
                            if (e.dates.push(s.date), Pe(n) > t) {
                                e.dates.pop();
                                break
                            }
                        } else if (n.push({
                            agent: s.agent,
                            dates: [s.date]
                        }), Pe(n) > t) {
                            n.pop();
                            break
                        }
                        i = i.slice(1)
                    }
                    return {
                        heartbeatsToSend: n,
                        unsentEntries: i
                    }
                }(this._heartbeatsCache.heartbeats),
                i = r(JSON.stringify({
                    version: 2,
                    heartbeats: t
                }));
            return this._heartbeatsCache.lastSentHeartbeatDate = e, n.length > 0 ? (this._heartbeatsCache.heartbeats = n, await this._storage.overwrite(this._heartbeatsCache)) : (this._heartbeatsCache.heartbeats = [], this._storage.overwrite(this._heartbeatsCache)), i
        }
    }

    function Ne() {
        return (new Date).toISOString().substring(0, 10)
    }
    class Re {
        constructor(e) {
            this.app = e, this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck()
        }
        async runIndexedDBEnvironmentCheck() {
            return "object" == typeof indexedDB && new Promise(((e, t) => {
                try {
                    let n = !0;
                    const i = "validate-browser-context-for-indexeddb-analytics-module",
                        s = self.indexedDB.open(i);
                    s.onsuccess = () => {
                        s.result.close(), n || self.indexedDB.deleteDatabase(i), e(!0)
                    }, s.onupgradeneeded = () => {
                        n = !1
                    }, s.onerror = () => {
                        var e;
                        t((null === (e = s.error) || void 0 === e ? void 0 : e.message) || "")
                    }
                } catch (e) {
                    t(e)
                }
            })).then((() => !0)).catch((() => !1))
        }
        async read() {
            return await this._canUseIndexedDBPromise && await async function(e) {
                try {
                    return (await Te()).transaction(Ie).objectStore(Ie).get(Ee(e))
                } catch (e) {
                    throw _e.create("storage-get", {
                        originalErrorMessage: e.message
                    })
                }
            }(this.app) || {
                heartbeats: []
            }
        }
        async overwrite(e) {
            var t;
            if (await this._canUseIndexedDBPromise) {
                const n = await this.read();
                return ke(this.app, {
                    lastSentHeartbeatDate: null !== (t = e.lastSentHeartbeatDate) && void 0 !== t ? t : n.lastSentHeartbeatDate,
                    heartbeats: e.heartbeats
                })
            }
        }
        async add(e) {
            var t;
            if (await this._canUseIndexedDBPromise) {
                const n = await this.read();
                return ke(this.app, {
                    lastSentHeartbeatDate: null !== (t = e.lastSentHeartbeatDate) && void 0 !== t ? t : n.lastSentHeartbeatDate,
                    heartbeats: [...n.heartbeats, ...e.heartbeats]
                })
            }
        }
    }

    function Pe(e) {
        return r(JSON.stringify({
            version: 2,
            heartbeats: e
        })).length
    }
    me(new D("platform-logger", (e => new ae(e)), "PRIVATE")), me(new D("heartbeat", (e => new Se(e)), "PRIVATE")), be(ce, le, ""), be(ce, le, "esm2017"), be("fire-js", ""), be("firebase", "9.8.2", "app");
    const Oe = "@firebase/database",
        xe = "0.13.0";
    let Ae = "";
    class De {
        constructor(e) {
            this.domStorage_ = e, this.prefix_ = "firebase:"
        }
        set(e, t) {
            null == t ? this.domStorage_.removeItem(this.prefixedName_(e)) : this.domStorage_.setItem(this.prefixedName_(e), _(t))
        }
        get(e) {
            const t = this.domStorage_.getItem(this.prefixedName_(e));
            return null == t ? null : g(t)
        }
        remove(e) {
            this.domStorage_.removeItem(this.prefixedName_(e))
        }
        prefixedName_(e) {
            return this.prefix_ + e
        }
        toString() {
            return this.domStorage_.toString()
        }
    }
    class Le {
        constructor() {
            this.cache_ = {}, this.isInMemoryStorage = !0
        }
        set(e, t) {
            null == t ? delete this.cache_[e] : this.cache_[e] = t
        }
        get(e) {
            return y(this.cache_, e) ? this.cache_[e] : null
        }
        remove(e) {
            delete this.cache_[e]
        }
    }
    const Me = function(e) {
            try {
                if ("undefined" != typeof window && void 0 !== window[e]) {
                    const t = window[e];
                    return t.setItem("firebase:sentinel", "cache"), t.removeItem("firebase:sentinel"), new De(t)
                }
            } catch (e) {}
            return new Le
        },
        Fe = Me("localStorage"),
        Ue = Me("sessionStorage"),
        qe = new V("@firebase/database"),
        We = function() {
            let e = 1;
            return function() {
                return e++
            }
        }(),
        je = function(t) {
            const n = function(t) {
                    const n = [];
                    let i = 0;
                    for (let s = 0; s < t.length; s++) {
                        let r = t.charCodeAt(s);
                        if (r >= 55296 && r <= 56319) {
                            const n = r - 55296;
                            s++, e(s < t.length, "Surrogate pair missing trail surrogate."), r = 65536 + (n << 10) + (t.charCodeAt(s) - 56320)
                        }
                        r < 128 ? n[i++] = r : r < 2048 ? (n[i++] = r >> 6 | 192, n[i++] = 63 & r | 128) : r < 65536 ? (n[i++] = r >> 12 | 224, n[i++] = r >> 6 & 63 | 128, n[i++] = 63 & r | 128) : (n[i++] = r >> 18 | 240, n[i++] = r >> 12 & 63 | 128, n[i++] = r >> 6 & 63 | 128, n[i++] = 63 & r | 128)
                    }
                    return n
                }(t),
                s = new N;
            s.update(n);
            const r = s.digest();
            return i.encodeByteArray(r)
        },
        Be = function(...e) {
            let t = "";
            for (let n = 0; n < e.length; n++) {
                const i = e[n];
                Array.isArray(i) || i && "object" == typeof i && "number" == typeof i.length ? t += Be.apply(null, i) : t += "object" == typeof i ? _(i) : i, t += " "
            }
            return t
        };
    let He = null,
        Ve = !0;
    const ze = function(...t) {
            if (!0 === Ve && (Ve = !1, null === He && !0 === Ue.get("logging_enabled") && (n = !0, e(!i || !0 === n || !1 === n, "Can't turn on custom loggers persistently."), !0 === n ? (qe.logLevel = q.VERBOSE, He = qe.log.bind(qe), i && Ue.set("logging_enabled", !0)) : "function" == typeof n ? He = n : (He = null, Ue.remove("logging_enabled")))), He) {
                const e = Be.apply(null, t);
                He(e)
            }
            var n, i
        },
        $e = function(e) {
            return function(...t) {
                ze(e, ...t)
            }
        },
        Ke = function(...e) {
            const t = "FIREBASE INTERNAL ERROR: " + Be(...e);
            qe.error(t)
        },
        Ge = function(...e) {
            const t = `FIREBASE FATAL ERROR: ${Be(...e)}`;
            throw qe.error(t), new Error(t)
        },
        Ye = function(...e) {
            const t = "FIREBASE WARNING: " + Be(...e);
            qe.warn(t)
        },
        Je = function(e) {
            return "number" == typeof e && (e != e || e === Number.POSITIVE_INFINITY || e === Number.NEGATIVE_INFINITY)
        },
        Qe = "[MIN_NAME]",
        Xe = "[MAX_NAME]",
        Ze = function(e, t) {
            if (e === t) return 0;
            if (e === Qe || t === Xe) return -1;
            if (t === Qe || e === Xe) return 1; {
                const n = at(e),
                    i = at(t);
                return null !== n ? null !== i ? n - i == 0 ? e.length - t.length : n - i : -1 : null !== i ? 1 : e < t ? -1 : 1
            }
        },
        et = function(e, t) {
            return e === t ? 0 : e < t ? -1 : 1
        },
        tt = function(e, t) {
            if (t && e in t) return t[e];
            throw new Error("Missing required key (" + e + ") in object: " + _(t))
        },
        nt = function(e) {
            if ("object" != typeof e || null === e) return _(e);
            const t = [];
            for (const n in e) t.push(n);
            t.sort();
            let n = "{";
            for (let i = 0; i < t.length; i++) 0 !== i && (n += ","), n += _(t[i]), n += ":", n += nt(e[t[i]]);
            return n += "}", n
        },
        it = function(e, t) {
            const n = e.length;
            if (n <= t) return [e];
            const i = [];
            for (let s = 0; s < n; s += t) s + t > n ? i.push(e.substring(s, n)) : i.push(e.substring(s, s + t));
            return i
        };

    function st(e, t) {
        for (const n in e) e.hasOwnProperty(n) && t(n, e[n])
    }
    const rt = function(t) {
            e(!Je(t), "Invalid JSON number");
            let n, i, s, r, o;
            0 === t ? (i = 0, s = 0, n = 1 / t == -1 / 0 ? 1 : 0) : (n = t < 0, (t = Math.abs(t)) >= Math.pow(2, -1022) ? (r = Math.min(Math.floor(Math.log(t) / Math.LN2), 1023), i = r + 1023, s = Math.round(t * Math.pow(2, 52 - r) - Math.pow(2, 52))) : (i = 0, s = Math.round(t / Math.pow(2, -1074))));
            const a = [];
            for (o = 52; o; o -= 1) a.push(s % 2 ? 1 : 0), s = Math.floor(s / 2);
            for (o = 11; o; o -= 1) a.push(i % 2 ? 1 : 0), i = Math.floor(i / 2);
            a.push(n ? 1 : 0), a.reverse();
            const c = a.join("");
            let l = "";
            for (o = 0; o < 64; o += 8) {
                let e = parseInt(c.substr(o, 8), 2).toString(16);
                1 === e.length && (e = "0" + e), l += e
            }
            return l.toLowerCase()
        },
        ot = new RegExp("^-?(0*)\\d{1,10}$"),
        at = function(e) {
            if (ot.test(e)) {
                const t = Number(e);
                if (t >= -2147483648 && t <= 2147483647) return t
            }
            return null
        },
        ct = function(e) {
            try {
                e()
            } catch (e) {
                setTimeout((() => {
                    const t = e.stack || "";
                    throw Ye("Exception was thrown by user callback.", t), e
                }), Math.floor(0))
            }
        },
        lt = function(e, t) {
            const n = setTimeout(e, t);
            return "object" == typeof n && n.unref && n.unref(), n
        };
    class ht {
        constructor(e, t) {
            this.appName_ = e, this.appCheckProvider = t, this.appCheck = null == t ? void 0 : t.getImmediate({
                optional: !0
            }), this.appCheck || null == t || t.get().then((e => this.appCheck = e))
        }
        getToken(e) {
            return this.appCheck ? this.appCheck.getToken(e) : new Promise(((t, n) => {
                setTimeout((() => {
                    this.appCheck ? this.getToken(e).then(t, n) : t(null)
                }), 0)
            }))
        }
        addTokenChangeListener(e) {
            var t;
            null === (t = this.appCheckProvider) || void 0 === t || t.get().then((t => t.addTokenListener(e)))
        }
        notifyForInvalidToken() {
            Ye(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)
        }
    }
    class ut {
        constructor(e, t, n) {
            this.appName_ = e, this.firebaseOptions_ = t, this.authProvider_ = n, this.auth_ = null, this.auth_ = n.getImmediate({
                optional: !0
            }), this.auth_ || n.onInit((e => this.auth_ = e))
        }
        getToken(e) {
            return this.auth_ ? this.auth_.getToken(e).catch((e => e && "auth/token-not-initialized" === e.code ? (ze("Got auth/token-not-initialized error.  Treating as null token."), null) : Promise.reject(e))) : new Promise(((t, n) => {
                setTimeout((() => {
                    this.auth_ ? this.getToken(e).then(t, n) : t(null)
                }), 0)
            }))
        }
        addTokenChangeListener(e) {
            this.auth_ ? this.auth_.addAuthTokenListener(e) : this.authProvider_.get().then((t => t.addAuthTokenListener(e)))
        }
        removeTokenChangeListener(e) {
            this.authProvider_.get().then((t => t.removeAuthTokenListener(e)))
        }
        notifyForInvalidToken() {
            let e = 'Provided authentication credentials for the app named "' + this.appName_ + '" are invalid. This usually indicates your app was not initialized correctly. ';
            "credential" in this.firebaseOptions_ ? e += 'Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.' : "serviceAccount" in this.firebaseOptions_ ? e += 'Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.' : e += 'Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.', Ye(e)
        }
    }
    class dt {
        constructor(e) {
            this.accessToken = e
        }
        getToken(e) {
            return Promise.resolve({
                accessToken: this.accessToken
            })
        }
        addTokenChangeListener(e) {
            e(this.accessToken)
        }
        removeTokenChangeListener(e) {}
        notifyForInvalidToken() {}
    }
    dt.OWNER = "owner";
    const pt = /(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,
        ft = "websocket",
        mt = "long_polling";
    class gt {
        constructor(e, t, n, i, s = !1, r = "", o = !1) {
            this.secure = t, this.namespace = n, this.webSocketOnly = i, this.nodeAdmin = s, this.persistenceKey = r, this.includeNamespaceInQueryParams = o, this._host = e.toLowerCase(), this._domain = this._host.substr(this._host.indexOf(".") + 1), this.internalHost = Fe.get("host:" + e) || this._host
        }
        isCacheableHost() {
            return "s-" === this.internalHost.substr(0, 2)
        }
        isCustomHost() {
            return "firebaseio.com" !== this._domain && "firebaseio-demo.com" !== this._domain
        }
        get host() {
            return this._host
        }
        set host(e) {
            e !== this.internalHost && (this.internalHost = e, this.isCacheableHost() && Fe.set("host:" + this._host, this.internalHost))
        }
        toString() {
            let e = this.toURLString();
            return this.persistenceKey && (e += "<" + this.persistenceKey + ">"), e
        }
        toURLString() {
            const e = this.secure ? "https://" : "http://",
                t = this.includeNamespaceInQueryParams ? `?ns=${this.namespace}` : "";
            return `${e}${this.host}/${t}`
        }
    }

    function _t(t, n, i) {
        let s;
        if (e("string" == typeof n, "typeof type must == string"), e("object" == typeof i, "typeof params must == object"), n === ft) s = (t.secure ? "wss://" : "ws://") + t.internalHost + "/.ws?";
        else {
            if (n !== mt) throw new Error("Unknown connection type: " + n);
            s = (t.secure ? "https://" : "http://") + t.internalHost + "/.lp?"
        }(function(e) {
            return e.host !== e.internalHost || e.isCustomHost() || e.includeNamespaceInQueryParams
        })(t) && (i.ns = t.namespace);
        const r = [];
        return st(i, ((e, t) => {
            r.push(e + "=" + t)
        })), s + r.join("&")
    }
    class vt {
        constructor() {
            this.counters_ = {}
        }
        incrementCounter(e, t = 1) {
            y(this.counters_, e) || (this.counters_[e] = 0), this.counters_[e] += t
        }
        get() {
            return a(this.counters_)
        }
    }
    const yt = {},
        wt = {};

    function bt(e) {
        const t = e.toString();
        return yt[t] || (yt[t] = new vt), yt[t]
    }
    class It {
        constructor(e) {
            this.onMessage_ = e, this.pendingResponses = [], this.currentResponseNum = 0, this.closeAfterResponse = -1, this.onClose = null
        }
        closeAfter(e, t) {
            this.closeAfterResponse = e, this.onClose = t, this.closeAfterResponse < this.currentResponseNum && (this.onClose(), this.onClose = null)
        }
        handleResponse(e, t) {
            for (this.pendingResponses[e] = t; this.pendingResponses[this.currentResponseNum];) {
                const e = this.pendingResponses[this.currentResponseNum];
                delete this.pendingResponses[this.currentResponseNum];
                for (let t = 0; t < e.length; ++t) e[t] && ct((() => {
                    this.onMessage_(e[t])
                }));
                if (this.currentResponseNum === this.closeAfterResponse) {
                    this.onClose && (this.onClose(), this.onClose = null);
                    break
                }
                this.currentResponseNum++
            }
        }
    }
    class Ct {
        constructor(e, t, n, i, s, r, o) {
            this.connId = e, this.repoInfo = t, this.applicationId = n, this.appCheckToken = i, this.authToken = s, this.transportSessionId = r, this.lastSessionId = o, this.bytesSent = 0, this.bytesReceived = 0, this.everConnected_ = !1, this.log_ = $e(e), this.stats_ = bt(t), this.urlFn = e => (this.appCheckToken && (e.ac = this.appCheckToken), _t(t, mt, e))
        }
        open(e, t) {
            this.curSegmentNum = 0, this.onDisconnect_ = t, this.myPacketOrderer = new It(e), this.isClosed_ = !1, this.connectTimeoutTimer_ = setTimeout((() => {
                this.log_("Timed out trying to connect."), this.onClosed_(), this.connectTimeoutTimer_ = null
            }), Math.floor(3e4)),
                function(e) {
                    if ("complete" === document.readyState) e();
                    else {
                        let t = !1;
                        const n = function() {
                            document.body ? t || (t = !0, e()) : setTimeout(n, Math.floor(10))
                        };
                        document.addEventListener ? (document.addEventListener("DOMContentLoaded", n, !1), window.addEventListener("load", n, !1)) : document.attachEvent && (document.attachEvent("onreadystatechange", (() => {
                            "complete" === document.readyState && n()
                        })), window.attachEvent("onload", n))
                    }
                }((() => {
                    if (this.isClosed_) return;
                    this.scriptTagHolder = new Tt(((...e) => {
                        const [t, n, i, s, r] = e;
                        if (this.incrementIncomingBytes_(e), this.scriptTagHolder)
                            if (this.connectTimeoutTimer_ && (clearTimeout(this.connectTimeoutTimer_), this.connectTimeoutTimer_ = null), this.everConnected_ = !0, "start" === t) this.id = n, this.password = i;
                            else {
                                if ("close" !== t) throw new Error("Unrecognized command received: " + t);
                                n ? (this.scriptTagHolder.sendNewPolls = !1, this.myPacketOrderer.closeAfter(n, (() => {
                                    this.onClosed_()
                                }))) : this.onClosed_()
                            }
                    }), ((...e) => {
                        const [t, n] = e;
                        this.incrementIncomingBytes_(e), this.myPacketOrderer.handleResponse(t, n)
                    }), (() => {
                        this.onClosed_()
                    }), this.urlFn);
                    const e = {
                        start: "t"
                    };
                    e.ser = Math.floor(1e8 * Math.random()), this.scriptTagHolder.uniqueCallbackIdentifier && (e.cb = this.scriptTagHolder.uniqueCallbackIdentifier), e.v = "5", this.transportSessionId && (e.s = this.transportSessionId), this.lastSessionId && (e.ls = this.lastSessionId), this.applicationId && (e.p = this.applicationId), this.appCheckToken && (e.ac = this.appCheckToken), "undefined" != typeof location && location.hostname && pt.test(location.hostname) && (e.r = "f");
                    const t = this.urlFn(e);
                    this.log_("Connecting via long-poll to " + t), this.scriptTagHolder.addTag(t, (() => {}))
                }))
        }
        start() {
            this.scriptTagHolder.startLongPoll(this.id, this.password), this.addDisconnectPingFrame(this.id, this.password)
        }
        static forceAllow() {
            Ct.forceAllow_ = !0
        }
        static forceDisallow() {
            Ct.forceDisallow_ = !0
        }
        static isAvailable() {
            return !(!Ct.forceAllow_ && (Ct.forceDisallow_ || "undefined" == typeof document || null == document.createElement || "object" == typeof window && window.chrome && window.chrome.extension && !/^chrome/.test(window.location.href) || "object" == typeof Windows && "object" == typeof Windows.UI))
        }
        markConnectionHealthy() {}
        shutdown_() {
            this.isClosed_ = !0, this.scriptTagHolder && (this.scriptTagHolder.close(), this.scriptTagHolder = null), this.myDisconnFrame && (document.body.removeChild(this.myDisconnFrame), this.myDisconnFrame = null), this.connectTimeoutTimer_ && (clearTimeout(this.connectTimeoutTimer_), this.connectTimeoutTimer_ = null)
        }
        onClosed_() {
            this.isClosed_ || (this.log_("Longpoll is closing itself"), this.shutdown_(), this.onDisconnect_ && (this.onDisconnect_(this.everConnected_), this.onDisconnect_ = null))
        }
        close() {
            this.isClosed_ || (this.log_("Longpoll is being closed."), this.shutdown_())
        }
        send(e) {
            const t = _(e);
            this.bytesSent += t.length, this.stats_.incrementCounter("bytes_sent", t.length);
            const n = s(t),
                i = it(n, 1840);
            for (let e = 0; e < i.length; e++) this.scriptTagHolder.enqueueSegment(this.curSegmentNum, i.length, i[e]), this.curSegmentNum++
        }
        addDisconnectPingFrame(e, t) {
            this.myDisconnFrame = document.createElement("iframe");
            const n = {
                dframe: "t"
            };
            n.id = e, n.pw = t, this.myDisconnFrame.src = this.urlFn(n), this.myDisconnFrame.style.display = "none", document.body.appendChild(this.myDisconnFrame)
        }
        incrementIncomingBytes_(e) {
            const t = _(e).length;
            this.bytesReceived += t, this.stats_.incrementCounter("bytes_received", t)
        }
    }
    class Tt {
        constructor(e, t, n, i) {
            this.onDisconnect = n, this.urlFn = i, this.outstandingRequests = new Set, this.pendingSegs = [], this.currentSerial = Math.floor(1e8 * Math.random()), this.sendNewPolls = !0; {
                this.uniqueCallbackIdentifier = We(), window["pLPCommand" + this.uniqueCallbackIdentifier] = e, window["pRTLPCB" + this.uniqueCallbackIdentifier] = t, this.myIFrame = Tt.createIFrame_();
                let n = "";
                this.myIFrame.src && "javascript:" === this.myIFrame.src.substr(0, "javascript:".length) && (n = '<script>document.domain="' + document.domain + '";<\/script>');
                const i = "<html><body>" + n + "</body></html>";
                try {
                    this.myIFrame.doc.open(), this.myIFrame.doc.write(i), this.myIFrame.doc.close()
                } catch (e) {
                    ze("frame writing exception"), e.stack && ze(e.stack), ze(e)
                }
            }
        }
        static createIFrame_() {
            const e = document.createElement("iframe");
            if (e.style.display = "none", !document.body) throw "Document body has not initialized. Wait to initialize Firebase until after the document is ready.";
            document.body.appendChild(e);
            try {
                e.contentWindow.document || ze("No IE domain setting required")
            } catch (t) {
                const n = document.domain;
                e.src = "javascript:void((function(){document.open();document.domain='" + n + "';document.close();})())"
            }
            return e.contentDocument ? e.doc = e.contentDocument : e.contentWindow ? e.doc = e.contentWindow.document : e.document && (e.doc = e.document), e
        }
        close() {
            this.alive = !1, this.myIFrame && (this.myIFrame.doc.body.innerHTML = "", setTimeout((() => {
                null !== this.myIFrame && (document.body.removeChild(this.myIFrame), this.myIFrame = null)
            }), Math.floor(0)));
            const e = this.onDisconnect;
            e && (this.onDisconnect = null, e())
        }
        startLongPoll(e, t) {
            for (this.myID = e, this.myPW = t, this.alive = !0; this.newRequest_(););
        }
        newRequest_() {
            if (this.alive && this.sendNewPolls && this.outstandingRequests.size < (this.pendingSegs.length > 0 ? 2 : 1)) {
                this.currentSerial++;
                const e = {};
                e.id = this.myID, e.pw = this.myPW, e.ser = this.currentSerial;
                let t = this.urlFn(e),
                    n = "",
                    i = 0;
                for (; this.pendingSegs.length > 0 && this.pendingSegs[0].d.length + 30 + n.length <= 1870;) {
                    const e = this.pendingSegs.shift();
                    n = n + "&seg" + i + "=" + e.seg + "&ts" + i + "=" + e.ts + "&d" + i + "=" + e.d, i++
                }
                return t += n, this.addLongPollTag_(t, this.currentSerial), !0
            }
            return !1
        }
        enqueueSegment(e, t, n) {
            this.pendingSegs.push({
                seg: e,
                ts: t,
                d: n
            }), this.alive && this.newRequest_()
        }
        addLongPollTag_(e, t) {
            this.outstandingRequests.add(t);
            const n = () => {
                    this.outstandingRequests.delete(t), this.newRequest_()
                },
                i = setTimeout(n, Math.floor(25e3));
            this.addTag(e, (() => {
                clearTimeout(i), n()
            }))
        }
        addTag(e, t) {
            setTimeout((() => {
                try {
                    if (!this.sendNewPolls) return;
                    const n = this.myIFrame.doc.createElement("script");
                    n.type = "text/javascript", n.async = !0, n.src = e, n.onload = n.onreadystatechange = function() {
                        const e = n.readyState;
                        e && "loaded" !== e && "complete" !== e || (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), t())
                    }, n.onerror = () => {
                        ze("Long-poll script failed to load: " + e), this.sendNewPolls = !1, this.close()
                    }, this.myIFrame.doc.body.appendChild(n)
                } catch (e) {}
            }), Math.floor(1))
        }
    }
    let kt = null;
    "undefined" != typeof MozWebSocket ? kt = MozWebSocket : "undefined" != typeof WebSocket && (kt = WebSocket);
    class Et {
        constructor(e, t, n, i, s, r, o) {
            this.connId = e, this.applicationId = n, this.appCheckToken = i, this.authToken = s, this.keepaliveTimer = null, this.frames = null, this.totalFrames = 0, this.bytesSent = 0, this.bytesReceived = 0, this.log_ = $e(this.connId), this.stats_ = bt(t), this.connURL = Et.connectionURL_(t, r, o, i, n), this.nodeAdmin = t.nodeAdmin
        }
        static connectionURL_(e, t, n, i, s) {
            const r = {
                v: "5"
            };
            return "undefined" != typeof location && location.hostname && pt.test(location.hostname) && (r.r = "f"), t && (r.s = t), n && (r.ls = n), i && (r.ac = i), s && (r.p = s), _t(e, ft, r)
        }
        open(e, t) {
            this.onDisconnect = t, this.onMessage = e, this.log_("Websocket connecting to " + this.connURL), this.everConnected_ = !1, Fe.set("previous_websocket_failure", !0);
            try {
                let e;
                0, this.mySock = new kt(this.connURL, [], e)
            } catch (e) {
                this.log_("Error instantiating WebSocket.");
                const t = e.message || e.data;
                return t && this.log_(t), void this.onClosed_()
            }
            this.mySock.onopen = () => {
                this.log_("Websocket connected."), this.everConnected_ = !0
            }, this.mySock.onclose = () => {
                this.log_("Websocket connection was disconnected."), this.mySock = null, this.onClosed_()
            }, this.mySock.onmessage = e => {
                this.handleIncomingFrame(e)
            }, this.mySock.onerror = e => {
                this.log_("WebSocket error.  Closing connection.");
                const t = e.message || e.data;
                t && this.log_(t), this.onClosed_()
            }
        }
        start() {}
        static forceDisallow() {
            Et.forceDisallow_ = !0
        }
        static isAvailable() {
            let e = !1;
            if ("undefined" != typeof navigator && navigator.userAgent) {
                const t = /Android ([0-9]{0,}\.[0-9]{0,})/,
                    n = navigator.userAgent.match(t);
                n && n.length > 1 && parseFloat(n[1]) < 4.4 && (e = !0)
            }
            return !e && null !== kt && !Et.forceDisallow_
        }
        static previouslyFailed() {
            return Fe.isInMemoryStorage || !0 === Fe.get("previous_websocket_failure")
        }
        markConnectionHealthy() {
            Fe.remove("previous_websocket_failure")
        }
        appendFrame_(e) {
            if (this.frames.push(e), this.frames.length === this.totalFrames) {
                const e = this.frames.join("");
                this.frames = null;
                const t = g(e);
                this.onMessage(t)
            }
        }
        handleNewFrameCount_(e) {
            this.totalFrames = e, this.frames = []
        }
        extractFrameCount_(t) {
            if (e(null === this.frames, "We already have a frame buffer"), t.length <= 6) {
                const e = Number(t);
                if (!isNaN(e)) return this.handleNewFrameCount_(e), null
            }
            return this.handleNewFrameCount_(1), t
        }
        handleIncomingFrame(e) {
            if (null === this.mySock) return;
            const t = e.data;
            if (this.bytesReceived += t.length, this.stats_.incrementCounter("bytes_received", t.length), this.resetKeepAlive(), null !== this.frames) this.appendFrame_(t);
            else {
                const e = this.extractFrameCount_(t);
                null !== e && this.appendFrame_(e)
            }
        }
        send(e) {
            this.resetKeepAlive();
            const t = _(e);
            this.bytesSent += t.length, this.stats_.incrementCounter("bytes_sent", t.length);
            const n = it(t, 16384);
            n.length > 1 && this.sendString_(String(n.length));
            for (let e = 0; e < n.length; e++) this.sendString_(n[e])
        }
        shutdown_() {
            this.isClosed_ = !0, this.keepaliveTimer && (clearInterval(this.keepaliveTimer), this.keepaliveTimer = null), this.mySock && (this.mySock.close(), this.mySock = null)
        }
        onClosed_() {
            this.isClosed_ || (this.log_("WebSocket is closing itself"), this.shutdown_(), this.onDisconnect && (this.onDisconnect(this.everConnected_), this.onDisconnect = null))
        }
        close() {
            this.isClosed_ || (this.log_("WebSocket is being closed"), this.shutdown_())
        }
        resetKeepAlive() {
            clearInterval(this.keepaliveTimer), this.keepaliveTimer = setInterval((() => {
                this.mySock && this.sendString_("0"), this.resetKeepAlive()
            }), Math.floor(45e3))
        }
        sendString_(e) {
            try {
                this.mySock.send(e)
            } catch (e) {
                this.log_("Exception thrown from WebSocket.send():", e.message || e.data, "Closing connection."), setTimeout(this.onClosed_.bind(this), 0)
            }
        }
    }
    Et.responsesRequiredToBeHealthy = 2, Et.healthyTimeout = 3e4;
    class St {
        constructor(e) {
            this.initTransports_(e)
        }
        static get ALL_TRANSPORTS() {
            return [Ct, Et]
        }
        static get IS_TRANSPORT_INITIALIZED() {
            return this.globalTransportInitialized_
        }
        initTransports_(e) {
            const t = Et && Et.isAvailable();
            let n = t && !Et.previouslyFailed();
            if (e.webSocketOnly && (t || Ye("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."), n = !0), n) this.transports_ = [Et];
            else {
                const e = this.transports_ = [];
                for (const t of St.ALL_TRANSPORTS) t && t.isAvailable() && e.push(t);
                St.globalTransportInitialized_ = !0
            }
        }
        initialTransport() {
            if (this.transports_.length > 0) return this.transports_[0];
            throw new Error("No transports available")
        }
        upgradeTransport() {
            return this.transports_.length > 1 ? this.transports_[1] : null
        }
    }
    St.globalTransportInitialized_ = !1;
    class Nt {
        constructor(e, t, n, i, s, r, o, a, c, l) {
            this.id = e, this.repoInfo_ = t, this.applicationId_ = n, this.appCheckToken_ = i, this.authToken_ = s, this.onMessage_ = r, this.onReady_ = o, this.onDisconnect_ = a, this.onKill_ = c, this.lastSessionId = l, this.connectionCount = 0, this.pendingDataMessages = [], this.state_ = 0, this.log_ = $e("c:" + this.id + ":"), this.transportManager_ = new St(t), this.log_("Connection created"), this.start_()
        }
        start_() {
            const e = this.transportManager_.initialTransport();
            this.conn_ = new e(this.nextTransportId_(), this.repoInfo_, this.applicationId_, this.appCheckToken_, this.authToken_, null, this.lastSessionId), this.primaryResponsesRequired_ = e.responsesRequiredToBeHealthy || 0;
            const t = this.connReceiver_(this.conn_),
                n = this.disconnReceiver_(this.conn_);
            this.tx_ = this.conn_, this.rx_ = this.conn_, this.secondaryConn_ = null, this.isHealthy_ = !1, setTimeout((() => {
                this.conn_ && this.conn_.open(t, n)
            }), Math.floor(0));
            const i = e.healthyTimeout || 0;
            i > 0 && (this.healthyTimeout_ = lt((() => {
                this.healthyTimeout_ = null, this.isHealthy_ || (this.conn_ && this.conn_.bytesReceived > 102400 ? (this.log_("Connection exceeded healthy timeout but has received " + this.conn_.bytesReceived + " bytes.  Marking connection healthy."), this.isHealthy_ = !0, this.conn_.markConnectionHealthy()) : this.conn_ && this.conn_.bytesSent > 10240 ? this.log_("Connection exceeded healthy timeout but has sent " + this.conn_.bytesSent + " bytes.  Leaving connection alive.") : (this.log_("Closing unhealthy connection after timeout."), this.close()))
            }), Math.floor(i)))
        }
        nextTransportId_() {
            return "c:" + this.id + ":" + this.connectionCount++
        }
        disconnReceiver_(e) {
            return t => {
                e === this.conn_ ? this.onConnectionLost_(t) : e === this.secondaryConn_ ? (this.log_("Secondary connection lost."), this.onSecondaryConnectionLost_()) : this.log_("closing an old connection")
            }
        }
        connReceiver_(e) {
            return t => {
                2 !== this.state_ && (e === this.rx_ ? this.onPrimaryMessageReceived_(t) : e === this.secondaryConn_ ? this.onSecondaryMessageReceived_(t) : this.log_("message on old connection"))
            }
        }
        sendRequest(e) {
            const t = {
                t: "d",
                d: e
            };
            this.sendData_(t)
        }
        tryCleanupConnection() {
            this.tx_ === this.secondaryConn_ && this.rx_ === this.secondaryConn_ && (this.log_("cleaning up and promoting a connection: " + this.secondaryConn_.connId), this.conn_ = this.secondaryConn_, this.secondaryConn_ = null)
        }
        onSecondaryControl_(e) {
            if ("t" in e) {
                const t = e.t;
                "a" === t ? this.upgradeIfSecondaryHealthy_() : "r" === t ? (this.log_("Got a reset on secondary, closing it"), this.secondaryConn_.close(), this.tx_ !== this.secondaryConn_ && this.rx_ !== this.secondaryConn_ || this.close()) : "o" === t && (this.log_("got pong on secondary."), this.secondaryResponsesRequired_--, this.upgradeIfSecondaryHealthy_())
            }
        }
        onSecondaryMessageReceived_(e) {
            const t = tt("t", e),
                n = tt("d", e);
            if ("c" === t) this.onSecondaryControl_(n);
            else {
                if ("d" !== t) throw new Error("Unknown protocol layer: " + t);
                this.pendingDataMessages.push(n)
            }
        }
        upgradeIfSecondaryHealthy_() {
            this.secondaryResponsesRequired_ <= 0 ? (this.log_("Secondary connection is healthy."), this.isHealthy_ = !0, this.secondaryConn_.markConnectionHealthy(), this.proceedWithUpgrade_()) : (this.log_("sending ping on secondary."), this.secondaryConn_.send({
                t: "c",
                d: {
                    t: "p",
                    d: {}
                }
            }))
        }
        proceedWithUpgrade_() {
            this.secondaryConn_.start(), this.log_("sending client ack on secondary"), this.secondaryConn_.send({
                t: "c",
                d: {
                    t: "a",
                    d: {}
                }
            }), this.log_("Ending transmission on primary"), this.conn_.send({
                t: "c",
                d: {
                    t: "n",
                    d: {}
                }
            }), this.tx_ = this.secondaryConn_, this.tryCleanupConnection()
        }
        onPrimaryMessageReceived_(e) {
            const t = tt("t", e),
                n = tt("d", e);
            "c" === t ? this.onControl_(n) : "d" === t && this.onDataMessage_(n)
        }
        onDataMessage_(e) {
            this.onPrimaryResponse_(), this.onMessage_(e)
        }
        onPrimaryResponse_() {
            this.isHealthy_ || (this.primaryResponsesRequired_--, this.primaryResponsesRequired_ <= 0 && (this.log_("Primary connection is healthy."), this.isHealthy_ = !0, this.conn_.markConnectionHealthy()))
        }
        onControl_(e) {
            const t = tt("t", e);
            if ("d" in e) {
                const n = e.d;
                if ("h" === t) this.onHandshake_(n);
                else if ("n" === t) {
                    this.log_("recvd end transmission on primary"), this.rx_ = this.secondaryConn_;
                    for (let e = 0; e < this.pendingDataMessages.length; ++e) this.onDataMessage_(this.pendingDataMessages[e]);
                    this.pendingDataMessages = [], this.tryCleanupConnection()
                } else "s" === t ? this.onConnectionShutdown_(n) : "r" === t ? this.onReset_(n) : "e" === t ? Ke("Server Error: " + n) : "o" === t ? (this.log_("got pong on primary."), this.onPrimaryResponse_(), this.sendPingOnPrimaryIfNecessary_()) : Ke("Unknown control packet command: " + t)
            }
        }
        onHandshake_(e) {
            const t = e.ts,
                n = e.v,
                i = e.h;
            this.sessionId = e.s, this.repoInfo_.host = i, 0 === this.state_ && (this.conn_.start(), this.onConnectionEstablished_(this.conn_, t), "5" !== n && Ye("Protocol version mismatch detected"), this.tryStartUpgrade_())
        }
        tryStartUpgrade_() {
            const e = this.transportManager_.upgradeTransport();
            e && this.startUpgrade_(e)
        }
        startUpgrade_(e) {
            this.secondaryConn_ = new e(this.nextTransportId_(), this.repoInfo_, this.applicationId_, this.appCheckToken_, this.authToken_, this.sessionId), this.secondaryResponsesRequired_ = e.responsesRequiredToBeHealthy || 0;
            const t = this.connReceiver_(this.secondaryConn_),
                n = this.disconnReceiver_(this.secondaryConn_);
            this.secondaryConn_.open(t, n), lt((() => {
                this.secondaryConn_ && (this.log_("Timed out trying to upgrade."), this.secondaryConn_.close())
            }), Math.floor(6e4))
        }
        onReset_(e) {
            this.log_("Reset packet received.  New host: " + e), this.repoInfo_.host = e, 1 === this.state_ ? this.close() : (this.closeConnections_(), this.start_())
        }
        onConnectionEstablished_(e, t) {
            this.log_("Realtime connection established."), this.conn_ = e, this.state_ = 1, this.onReady_ && (this.onReady_(t, this.sessionId), this.onReady_ = null), 0 === this.primaryResponsesRequired_ ? (this.log_("Primary connection is healthy."), this.isHealthy_ = !0) : lt((() => {
                this.sendPingOnPrimaryIfNecessary_()
            }), Math.floor(5e3))
        }
        sendPingOnPrimaryIfNecessary_() {
            this.isHealthy_ || 1 !== this.state_ || (this.log_("sending ping on primary."), this.sendData_({
                t: "c",
                d: {
                    t: "p",
                    d: {}
                }
            }))
        }
        onSecondaryConnectionLost_() {
            const e = this.secondaryConn_;
            this.secondaryConn_ = null, this.tx_ !== e && this.rx_ !== e || this.close()
        }
        onConnectionLost_(e) {
            this.conn_ = null, e || 0 !== this.state_ ? 1 === this.state_ && this.log_("Realtime connection lost.") : (this.log_("Realtime connection failed."), this.repoInfo_.isCacheableHost() && (Fe.remove("host:" + this.repoInfo_.host), this.repoInfo_.internalHost = this.repoInfo_.host)), this.close()
        }
        onConnectionShutdown_(e) {
            this.log_("Connection shutdown command received. Shutting down..."), this.onKill_ && (this.onKill_(e), this.onKill_ = null), this.onDisconnect_ = null, this.close()
        }
        sendData_(e) {
            if (1 !== this.state_) throw "Connection is not connected";
            this.tx_.send(e)
        }
        close() {
            2 !== this.state_ && (this.log_("Closing realtime connection."), this.state_ = 2, this.closeConnections_(), this.onDisconnect_ && (this.onDisconnect_(), this.onDisconnect_ = null))
        }
        closeConnections_() {
            this.log_("Shutting down all connections"), this.conn_ && (this.conn_.close(), this.conn_ = null), this.secondaryConn_ && (this.secondaryConn_.close(), this.secondaryConn_ = null), this.healthyTimeout_ && (clearTimeout(this.healthyTimeout_), this.healthyTimeout_ = null)
        }
    }
    class Rt {
        put(e, t, n, i) {}
        merge(e, t, n, i) {}
        refreshAuthToken(e) {}
        refreshAppCheckToken(e) {}
        onDisconnectPut(e, t, n) {}
        onDisconnectMerge(e, t, n) {}
        onDisconnectCancel(e, t) {}
        reportStats(e) {}
    }
    class Pt {
        constructor(t) {
            this.allowedEvents_ = t, this.listeners_ = {}, e(Array.isArray(t) && t.length > 0, "Requires a non-empty array")
        }
        trigger(e, ...t) {
            if (Array.isArray(this.listeners_[e])) {
                const n = [...this.listeners_[e]];
                for (let e = 0; e < n.length; e++) n[e].callback.apply(n[e].context, t)
            }
        }
        on(e, t, n) {
            this.validateEventType_(e), this.listeners_[e] = this.listeners_[e] || [], this.listeners_[e].push({
                callback: t,
                context: n
            });
            const i = this.getInitialEvent(e);
            i && t.apply(n, i)
        }
        off(e, t, n) {
            this.validateEventType_(e);
            const i = this.listeners_[e] || [];
            for (let e = 0; e < i.length; e++)
                if (i[e].callback === t && (!n || n === i[e].context)) return void i.splice(e, 1)
        }
        validateEventType_(t) {
            e(this.allowedEvents_.find((e => e === t)), "Unknown event: " + t)
        }
    }
    class Ot extends Pt {
        constructor() {
            super(["online"]), this.online_ = !0, "undefined" == typeof window || void 0 === window.addEventListener || u() || (window.addEventListener("online", (() => {
                this.online_ || (this.online_ = !0, this.trigger("online", !0))
            }), !1), window.addEventListener("offline", (() => {
                this.online_ && (this.online_ = !1, this.trigger("online", !1))
            }), !1))
        }
        static getInstance() {
            return new Ot
        }
        getInitialEvent(t) {
            return e("online" === t, "Unknown event type: " + t), [this.online_]
        }
        currentlyOnline() {
            return this.online_
        }
    }
    class xt {
        constructor(e, t) {
            if (void 0 === t) {
                this.pieces_ = e.split("/");
                let t = 0;
                for (let e = 0; e < this.pieces_.length; e++) this.pieces_[e].length > 0 && (this.pieces_[t] = this.pieces_[e], t++);
                this.pieces_.length = t, this.pieceNum_ = 0
            } else this.pieces_ = e, this.pieceNum_ = t
        }
        toString() {
            let e = "";
            for (let t = this.pieceNum_; t < this.pieces_.length; t++) "" !== this.pieces_[t] && (e += "/" + this.pieces_[t]);
            return e || "/"
        }
    }

    function At() {
        return new xt("")
    }

    function Dt(e) {
        return e.pieceNum_ >= e.pieces_.length ? null : e.pieces_[e.pieceNum_]
    }

    function Lt(e) {
        return e.pieces_.length - e.pieceNum_
    }

    function Mt(e) {
        let t = e.pieceNum_;
        return t < e.pieces_.length && t++, new xt(e.pieces_, t)
    }

    function Ft(e) {
        return e.pieceNum_ < e.pieces_.length ? e.pieces_[e.pieces_.length - 1] : null
    }

    function Ut(e, t = 0) {
        return e.pieces_.slice(e.pieceNum_ + t)
    }

    function qt(e) {
        if (e.pieceNum_ >= e.pieces_.length) return null;
        const t = [];
        for (let n = e.pieceNum_; n < e.pieces_.length - 1; n++) t.push(e.pieces_[n]);
        return new xt(t, 0)
    }

    function Wt(e, t) {
        const n = [];
        for (let t = e.pieceNum_; t < e.pieces_.length; t++) n.push(e.pieces_[t]);
        if (t instanceof xt)
            for (let e = t.pieceNum_; e < t.pieces_.length; e++) n.push(t.pieces_[e]);
        else {
            const e = t.split("/");
            for (let t = 0; t < e.length; t++) e[t].length > 0 && n.push(e[t])
        }
        return new xt(n, 0)
    }

    function jt(e) {
        return e.pieceNum_ >= e.pieces_.length
    }

    function Bt(e, t) {
        const n = Dt(e),
            i = Dt(t);
        if (null === n) return t;
        if (n === i) return Bt(Mt(e), Mt(t));
        throw new Error("INTERNAL ERROR: innerPath (" + t + ") is not within outerPath (" + e + ")")
    }

    function Ht(e, t) {
        const n = Ut(e, 0),
            i = Ut(t, 0);
        for (let e = 0; e < n.length && e < i.length; e++) {
            const t = Ze(n[e], i[e]);
            if (0 !== t) return t
        }
        return n.length === i.length ? 0 : n.length < i.length ? -1 : 1
    }

    function Vt(e, t) {
        if (Lt(e) !== Lt(t)) return !1;
        for (let n = e.pieceNum_, i = t.pieceNum_; n <= e.pieces_.length; n++, i++)
            if (e.pieces_[n] !== t.pieces_[i]) return !1;
        return !0
    }

    function zt(e, t) {
        let n = e.pieceNum_,
            i = t.pieceNum_;
        if (Lt(e) > Lt(t)) return !1;
        for (; n < e.pieces_.length;) {
            if (e.pieces_[n] !== t.pieces_[i]) return !1;
            ++n, ++i
        }
        return !0
    }
    class $t {
        constructor(e, t) {
            this.errorPrefix_ = t, this.parts_ = Ut(e, 0), this.byteLength_ = Math.max(1, this.parts_.length);
            for (let e = 0; e < this.parts_.length; e++) this.byteLength_ += x(this.parts_[e]);
            Kt(this)
        }
    }

    function Kt(e) {
        if (e.byteLength_ > 768) throw new Error(e.errorPrefix_ + "has a key path longer than 768 bytes (" + e.byteLength_ + ").");
        if (e.parts_.length > 32) throw new Error(e.errorPrefix_ + "path specified exceeds the maximum depth that can be written (32) or object contains a cycle " + Gt(e))
    }

    function Gt(e) {
        return 0 === e.parts_.length ? "" : "in property '" + e.parts_.join(".") + "'"
    }
    class Yt extends Pt {
        constructor() {
            let e, t;
            super(["visible"]), "undefined" != typeof document && void 0 !== document.addEventListener && (void 0 !== document.hidden ? (t = "visibilitychange", e = "hidden") : void 0 !== document.mozHidden ? (t = "mozvisibilitychange", e = "mozHidden") : void 0 !== document.msHidden ? (t = "msvisibilitychange", e = "msHidden") : void 0 !== document.webkitHidden && (t = "webkitvisibilitychange", e = "webkitHidden")), this.visible_ = !0, t && document.addEventListener(t, (() => {
                const t = !document[e];
                t !== this.visible_ && (this.visible_ = t, this.trigger("visible", t))
            }), !1)
        }
        static getInstance() {
            return new Yt
        }
        getInitialEvent(t) {
            return e("visible" === t, "Unknown event type: " + t), [this.visible_]
        }
    }
    const Jt = 1e3;
    class Qt extends Rt {
        constructor(e, t, n, i, s, r, o, a) {
            if (super(), this.repoInfo_ = e, this.applicationId_ = t, this.onDataUpdate_ = n, this.onConnectStatus_ = i, this.onServerInfoUpdate_ = s, this.authTokenProvider_ = r, this.appCheckTokenProvider_ = o, this.authOverride_ = a, this.id = Qt.nextPersistentConnectionId_++, this.log_ = $e("p:" + this.id + ":"), this.interruptReasons_ = {}, this.listens = new Map, this.outstandingPuts_ = [], this.outstandingGets_ = [], this.outstandingPutCount_ = 0, this.outstandingGetCount_ = 0, this.onDisconnectRequestQueue_ = [], this.connected_ = !1, this.reconnectDelay_ = Jt, this.maxReconnectDelay_ = 3e5, this.securityDebugCallback_ = null, this.lastSessionId = null, this.establishConnectionTimer_ = null, this.visible_ = !1, this.requestCBHash_ = {}, this.requestNumber_ = 0, this.realtime_ = null, this.authToken_ = null, this.appCheckToken_ = null, this.forceTokenRefresh_ = !1, this.invalidAuthTokenCount_ = 0, this.invalidAppCheckTokenCount_ = 0, this.firstConnection_ = !0, this.lastConnectionAttemptTime_ = null, this.lastConnectionEstablishedTime_ = null, a) throw new Error("Auth override specified in options, but not supported on non Node.js platforms");
            Yt.getInstance().on("visible", this.onVisible_, this), -1 === e.host.indexOf("fblocal") && Ot.getInstance().on("online", this.onOnline_, this)
        }
        sendRequest(t, n, i) {
            const s = ++this.requestNumber_,
                r = {
                    r: s,
                    a: t,
                    b: n
                };
            this.log_(_(r)), e(this.connected_, "sendRequest call when we're not connected not allowed."), this.realtime_.sendRequest(r), i && (this.requestCBHash_[s] = i)
        }
        get(e) {
            this.initConnection_();
            const t = new l,
                n = {
                    p: e._path.toString(),
                    q: e._queryObject
                },
                i = {
                    action: "g",
                    request: n,
                    onComplete: e => {
                        const i = e.d;
                        "ok" === e.s ? (this.onDataUpdate_(n.p, i, !1, null), t.resolve(i)) : t.reject(i)
                    }
                };
            this.outstandingGets_.push(i), this.outstandingGetCount_++;
            const s = this.outstandingGets_.length - 1;
            return this.connected_ || setTimeout((() => {
                const e = this.outstandingGets_[s];
                void 0 !== e && i === e && (delete this.outstandingGets_[s], this.outstandingGetCount_--, 0 === this.outstandingGetCount_ && (this.outstandingGets_ = []), this.log_("get " + s + " timed out on connection"), t.reject(new Error("Client is offline.")))
            }), 3e3), this.connected_ && this.sendGet_(s), t.promise
        }
        listen(t, n, i, s) {
            this.initConnection_();
            const r = t._queryIdentifier,
                o = t._path.toString();
            this.log_("Listen called for " + o + " " + r), this.listens.has(o) || this.listens.set(o, new Map), e(t._queryParams.isDefault() || !t._queryParams.loadsAllData(), "listen() called for non-default but complete query"), e(!this.listens.get(o).has(r), "listen() called twice for same path/queryId.");
            const a = {
                onComplete: s,
                hashFn: n,
                query: t,
                tag: i
            };
            this.listens.get(o).set(r, a), this.connected_ && this.sendListen_(a)
        }
        sendGet_(e) {
            const t = this.outstandingGets_[e];
            this.sendRequest("g", t.request, (n => {
                delete this.outstandingGets_[e], this.outstandingGetCount_--, 0 === this.outstandingGetCount_ && (this.outstandingGets_ = []), t.onComplete && t.onComplete(n)
            }))
        }
        sendListen_(e) {
            const t = e.query,
                n = t._path.toString(),
                i = t._queryIdentifier;
            this.log_("Listen on " + n + " for " + i);
            const s = {
                p: n
            };
            e.tag && (s.q = t._queryObject, s.t = e.tag), s.h = e.hashFn(), this.sendRequest("q", s, (s => {
                const r = s.d,
                    o = s.s;
                Qt.warnOnListenWarnings_(r, t), (this.listens.get(n) && this.listens.get(n).get(i)) === e && (this.log_("listen response", s), "ok" !== o && this.removeListen_(n, i), e.onComplete && e.onComplete(o, r))
            }))
        }
        static warnOnListenWarnings_(e, t) {
            if (e && "object" == typeof e && y(e, "w")) {
                const n = w(e, "w");
                if (Array.isArray(n) && ~n.indexOf("no_index")) {
                    const e = '".indexOn": "' + t._queryParams.getIndex().toString() + '"',
                        n = t._path.toString();
                    Ye(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)
                }
            }
        }
        refreshAuthToken(e) {
            this.authToken_ = e, this.log_("Auth token refreshed"), this.authToken_ ? this.tryAuth() : this.connected_ && this.sendRequest("unauth", {}, (() => {})), this.reduceReconnectDelayIfAdminCredential_(e)
        }
        reduceReconnectDelayIfAdminCredential_(e) {
            (e && 40 === e.length || function(e) {
                const t = v(e).claims;
                return "object" == typeof t && !0 === t.admin
            }(e)) && (this.log_("Admin auth credential detected.  Reducing max reconnect time."), this.maxReconnectDelay_ = 3e4)
        }
        refreshAppCheckToken(e) {
            this.appCheckToken_ = e, this.log_("App check token refreshed"), this.appCheckToken_ ? this.tryAppCheck() : this.connected_ && this.sendRequest("unappeck", {}, (() => {}))
        }
        tryAuth() {
            if (this.connected_ && this.authToken_) {
                const e = this.authToken_,
                    t = function(e) {
                        const t = v(e).claims;
                        return !!t && "object" == typeof t && t.hasOwnProperty("iat")
                    }(e) ? "auth" : "gauth",
                    n = {
                        cred: e
                    };
                null === this.authOverride_ ? n.noauth = !0 : "object" == typeof this.authOverride_ && (n.authvar = this.authOverride_), this.sendRequest(t, n, (t => {
                    const n = t.s,
                        i = t.d || "error";
                    this.authToken_ === e && ("ok" === n ? this.invalidAuthTokenCount_ = 0 : this.onAuthRevoked_(n, i))
                }))
            }
        }
        tryAppCheck() {
            this.connected_ && this.appCheckToken_ && this.sendRequest("appcheck", {
                token: this.appCheckToken_
            }, (e => {
                const t = e.s,
                    n = e.d || "error";
                "ok" === t ? this.invalidAppCheckTokenCount_ = 0 : this.onAppCheckRevoked_(t, n)
            }))
        }
        unlisten(t, n) {
            const i = t._path.toString(),
                s = t._queryIdentifier;
            this.log_("Unlisten called for " + i + " " + s), e(t._queryParams.isDefault() || !t._queryParams.loadsAllData(), "unlisten() called for non-default but complete query"), this.removeListen_(i, s) && this.connected_ && this.sendUnlisten_(i, s, t._queryObject, n)
        }
        sendUnlisten_(e, t, n, i) {
            this.log_("Unlisten on " + e + " for " + t);
            const s = {
                p: e
            };
            i && (s.q = n, s.t = i), this.sendRequest("n", s)
        }
        onDisconnectPut(e, t, n) {
            this.initConnection_(), this.connected_ ? this.sendOnDisconnect_("o", e, t, n) : this.onDisconnectRequestQueue_.push({
                pathString: e,
                action: "o",
                data: t,
                onComplete: n
            })
        }
        onDisconnectMerge(e, t, n) {
            this.initConnection_(), this.connected_ ? this.sendOnDisconnect_("om", e, t, n) : this.onDisconnectRequestQueue_.push({
                pathString: e,
                action: "om",
                data: t,
                onComplete: n
            })
        }
        onDisconnectCancel(e, t) {
            this.initConnection_(), this.connected_ ? this.sendOnDisconnect_("oc", e, null, t) : this.onDisconnectRequestQueue_.push({
                pathString: e,
                action: "oc",
                data: null,
                onComplete: t
            })
        }
        sendOnDisconnect_(e, t, n, i) {
            const s = {
                p: t,
                d: n
            };
            this.log_("onDisconnect " + e, s), this.sendRequest(e, s, (e => {
                i && setTimeout((() => {
                    i(e.s, e.d)
                }), Math.floor(0))
            }))
        }
        put(e, t, n, i) {
            this.putInternal("p", e, t, n, i)
        }
        merge(e, t, n, i) {
            this.putInternal("m", e, t, n, i)
        }
        putInternal(e, t, n, i, s) {
            this.initConnection_();
            const r = {
                p: t,
                d: n
            };
            void 0 !== s && (r.h = s), this.outstandingPuts_.push({
                action: e,
                request: r,
                onComplete: i
            }), this.outstandingPutCount_++;
            const o = this.outstandingPuts_.length - 1;
            this.connected_ ? this.sendPut_(o) : this.log_("Buffering put: " + t)
        }
        sendPut_(e) {
            const t = this.outstandingPuts_[e].action,
                n = this.outstandingPuts_[e].request,
                i = this.outstandingPuts_[e].onComplete;
            this.outstandingPuts_[e].queued = this.connected_, this.sendRequest(t, n, (n => {
                this.log_(t + " response", n), delete this.outstandingPuts_[e], this.outstandingPutCount_--, 0 === this.outstandingPutCount_ && (this.outstandingPuts_ = []), i && i(n.s, n.d)
            }))
        }
        reportStats(e) {
            if (this.connected_) {
                const t = {
                    c: e
                };
                this.log_("reportStats", t), this.sendRequest("s", t, (e => {
                    if ("ok" !== e.s) {
                        const t = e.d;
                        this.log_("reportStats", "Error sending stats: " + t)
                    }
                }))
            }
        }
        onDataMessage_(e) {
            if ("r" in e) {
                this.log_("from server: " + _(e));
                const t = e.r,
                    n = this.requestCBHash_[t];
                n && (delete this.requestCBHash_[t], n(e.b))
            } else {
                if ("error" in e) throw "A server-side error has occurred: " + e.error;
                "a" in e && this.onDataPush_(e.a, e.b)
            }
        }
        onDataPush_(e, t) {
            this.log_("handleServerMessage", e, t), "d" === e ? this.onDataUpdate_(t.p, t.d, !1, t.t) : "m" === e ? this.onDataUpdate_(t.p, t.d, !0, t.t) : "c" === e ? this.onListenRevoked_(t.p, t.q) : "ac" === e ? this.onAuthRevoked_(t.s, t.d) : "apc" === e ? this.onAppCheckRevoked_(t.s, t.d) : "sd" === e ? this.onSecurityDebugPacket_(t) : Ke("Unrecognized action received from server: " + _(e) + "\nAre you using the latest client?")
        }
        onReady_(e, t) {
            this.log_("connection ready"), this.connected_ = !0, this.lastConnectionEstablishedTime_ = (new Date).getTime(), this.handleTimestamp_(e), this.lastSessionId = t, this.firstConnection_ && this.sendConnectStats_(), this.restoreState_(), this.firstConnection_ = !1, this.onConnectStatus_(!0)
        }
        scheduleConnect_(t) {
            e(!this.realtime_, "Scheduling a connect when we're already connected/ing?"), this.establishConnectionTimer_ && clearTimeout(this.establishConnectionTimer_), this.establishConnectionTimer_ = setTimeout((() => {
                this.establishConnectionTimer_ = null, this.establishConnection_()
            }), Math.floor(t))
        }
        initConnection_() {
            !this.realtime_ && this.firstConnection_ && this.scheduleConnect_(0)
        }
        onVisible_(e) {
            e && !this.visible_ && this.reconnectDelay_ === this.maxReconnectDelay_ && (this.log_("Window became visible.  Reducing delay."), this.reconnectDelay_ = Jt, this.realtime_ || this.scheduleConnect_(0)), this.visible_ = e
        }
        onOnline_(e) {
            e ? (this.log_("Browser went online."), this.reconnectDelay_ = Jt, this.realtime_ || this.scheduleConnect_(0)) : (this.log_("Browser went offline.  Killing connection."), this.realtime_ && this.realtime_.close())
        }
        onRealtimeDisconnect_() {
            if (this.log_("data client disconnected"), this.connected_ = !1, this.realtime_ = null, this.cancelSentTransactions_(), this.requestCBHash_ = {}, this.shouldReconnect_()) {
                this.visible_ ? this.lastConnectionEstablishedTime_ && ((new Date).getTime() - this.lastConnectionEstablishedTime_ > 3e4 && (this.reconnectDelay_ = Jt), this.lastConnectionEstablishedTime_ = null) : (this.log_("Window isn't visible.  Delaying reconnect."), this.reconnectDelay_ = this.maxReconnectDelay_, this.lastConnectionAttemptTime_ = (new Date).getTime());
                const e = (new Date).getTime() - this.lastConnectionAttemptTime_;
                let t = Math.max(0, this.reconnectDelay_ - e);
                t = Math.random() * t, this.log_("Trying to reconnect in " + t + "ms"), this.scheduleConnect_(t), this.reconnectDelay_ = Math.min(this.maxReconnectDelay_, 1.3 * this.reconnectDelay_)
            }
            this.onConnectStatus_(!1)
        }
        async establishConnection_() {
            if (this.shouldReconnect_()) {
                this.log_("Making a connection attempt"), this.lastConnectionAttemptTime_ = (new Date).getTime(), this.lastConnectionEstablishedTime_ = null;
                const t = this.onDataMessage_.bind(this),
                    n = this.onReady_.bind(this),
                    i = this.onRealtimeDisconnect_.bind(this),
                    s = this.id + ":" + Qt.nextConnectionId_++,
                    r = this.lastSessionId;
                let o = !1,
                    a = null;
                const c = function() {
                        a ? a.close() : (o = !0, i())
                    },
                    l = function(t) {
                        e(a, "sendRequest call when we're not connected not allowed."), a.sendRequest(t)
                    };
                this.realtime_ = {
                    close: c,
                    sendRequest: l
                };
                const h = this.forceTokenRefresh_;
                this.forceTokenRefresh_ = !1;
                try {
                    const [e, c] = await Promise.all([this.authTokenProvider_.getToken(h), this.appCheckTokenProvider_.getToken(h)]);
                    o ? ze("getToken() completed but was canceled") : (ze("getToken() completed. Creating connection."), this.authToken_ = e && e.accessToken, this.appCheckToken_ = c && c.token, a = new Nt(s, this.repoInfo_, this.applicationId_, this.appCheckToken_, this.authToken_, t, n, i, (e => {
                        Ye(e + " (" + this.repoInfo_.toString() + ")"), this.interrupt("server_kill")
                    }), r))
                } catch (e) {
                    this.log_("Failed to get token: " + e), o || (this.repoInfo_.nodeAdmin && Ye(e), c())
                }
            }
        }
        interrupt(e) {
            ze("Interrupting connection for reason: " + e), this.interruptReasons_[e] = !0, this.realtime_ ? this.realtime_.close() : (this.establishConnectionTimer_ && (clearTimeout(this.establishConnectionTimer_), this.establishConnectionTimer_ = null), this.connected_ && this.onRealtimeDisconnect_())
        }
        resume(e) {
            ze("Resuming connection for reason: " + e), delete this.interruptReasons_[e], b(this.interruptReasons_) && (this.reconnectDelay_ = Jt, this.realtime_ || this.scheduleConnect_(0))
        }
        handleTimestamp_(e) {
            const t = e - (new Date).getTime();
            this.onServerInfoUpdate_({
                serverTimeOffset: t
            })
        }
        cancelSentTransactions_() {
            for (let e = 0; e < this.outstandingPuts_.length; e++) {
                const t = this.outstandingPuts_[e];
                t && "h" in t.request && t.queued && (t.onComplete && t.onComplete("disconnect"), delete this.outstandingPuts_[e], this.outstandingPutCount_--)
            }
            0 === this.outstandingPutCount_ && (this.outstandingPuts_ = [])
        }
        onListenRevoked_(e, t) {
            let n;
            n = t ? t.map((e => nt(e))).join("$") : "default";
            const i = this.removeListen_(e, n);
            i && i.onComplete && i.onComplete("permission_denied")
        }
        removeListen_(e, t) {
            const n = new xt(e).toString();
            let i;
            if (this.listens.has(n)) {
                const e = this.listens.get(n);
                i = e.get(t), e.delete(t), 0 === e.size && this.listens.delete(n)
            } else i = void 0;
            return i
        }
        onAuthRevoked_(e, t) {
            ze("Auth token revoked: " + e + "/" + t), this.authToken_ = null, this.forceTokenRefresh_ = !0, this.realtime_.close(), "invalid_token" !== e && "permission_denied" !== e || (this.invalidAuthTokenCount_++, this.invalidAuthTokenCount_ >= 3 && (this.reconnectDelay_ = 3e4, this.authTokenProvider_.notifyForInvalidToken()))
        }
        onAppCheckRevoked_(e, t) {
            ze("App check token revoked: " + e + "/" + t), this.appCheckToken_ = null, this.forceTokenRefresh_ = !0, "invalid_token" !== e && "permission_denied" !== e || (this.invalidAppCheckTokenCount_++, this.invalidAppCheckTokenCount_ >= 3 && this.appCheckTokenProvider_.notifyForInvalidToken())
        }
        onSecurityDebugPacket_(e) {
            this.securityDebugCallback_ ? this.securityDebugCallback_(e) : "msg" in e && console.log("FIREBASE: " + e.msg.replace("\n", "\nFIREBASE: "))
        }
        restoreState_() {
            this.tryAuth(), this.tryAppCheck();
            for (const e of this.listens.values())
                for (const t of e.values()) this.sendListen_(t);
            for (let e = 0; e < this.outstandingPuts_.length; e++) this.outstandingPuts_[e] && this.sendPut_(e);
            for (; this.onDisconnectRequestQueue_.length;) {
                const e = this.onDisconnectRequestQueue_.shift();
                this.sendOnDisconnect_(e.action, e.pathString, e.data, e.onComplete)
            }
            for (let e = 0; e < this.outstandingGets_.length; e++) this.outstandingGets_[e] && this.sendGet_(e)
        }
        sendConnectStats_() {
            const e = {};
            let t = "js";
            e["sdk." + t + "." + Ae.replace(/\./g, "-")] = 1, u() ? e["framework.cordova"] = 1 : d() && (e["framework.reactnative"] = 1), this.reportStats(e)
        }
        shouldReconnect_() {
            const e = Ot.getInstance().currentlyOnline();
            return b(this.interruptReasons_) && e
        }
    }
    Qt.nextPersistentConnectionId_ = 0, Qt.nextConnectionId_ = 0;
    class Xt {
        constructor(e, t) {
            this.name = e, this.node = t
        }
        static Wrap(e, t) {
            return new Xt(e, t)
        }
    }
    class Zt {
        getCompare() {
            return this.compare.bind(this)
        }
        indexedValueChanged(e, t) {
            const n = new Xt(Qe, e),
                i = new Xt(Qe, t);
            return 0 !== this.compare(n, i)
        }
        minPost() {
            return Xt.MIN
        }
    }
    let en;
    class tn extends Zt {
        static get __EMPTY_NODE() {
            return en
        }
        static set __EMPTY_NODE(e) {
            en = e
        }
        compare(e, t) {
            return Ze(e.name, t.name)
        }
        isDefinedOn(e) {
            throw t("KeyIndex.isDefinedOn not expected to be called.")
        }
        indexedValueChanged(e, t) {
            return !1
        }
        minPost() {
            return Xt.MIN
        }
        maxPost() {
            return new Xt(Xe, en)
        }
        makePost(t, n) {
            return e("string" == typeof t, "KeyIndex indexValue must always be a string."), new Xt(t, en)
        }
        toString() {
            return ".key"
        }
    }
    const nn = new tn;
    class sn {
        constructor(e, t, n, i, s = null) {
            this.isReverse_ = i, this.resultGenerator_ = s, this.nodeStack_ = [];
            let r = 1;
            for (; !e.isEmpty();)
                if (e = e, r = t ? n(e.key, t) : 1, i && (r *= -1), r < 0) e = this.isReverse_ ? e.left : e.right;
                else {
                    if (0 === r) {
                        this.nodeStack_.push(e);
                        break
                    }
                    this.nodeStack_.push(e), e = this.isReverse_ ? e.right : e.left
                }
        }
        getNext() {
            if (0 === this.nodeStack_.length) return null;
            let e, t = this.nodeStack_.pop();
            if (e = this.resultGenerator_ ? this.resultGenerator_(t.key, t.value) : {
                key: t.key,
                value: t.value
            }, this.isReverse_)
                for (t = t.left; !t.isEmpty();) this.nodeStack_.push(t), t = t.right;
            else
                for (t = t.right; !t.isEmpty();) this.nodeStack_.push(t), t = t.left;
            return e
        }
        hasNext() {
            return this.nodeStack_.length > 0
        }
        peek() {
            if (0 === this.nodeStack_.length) return null;
            const e = this.nodeStack_[this.nodeStack_.length - 1];
            return this.resultGenerator_ ? this.resultGenerator_(e.key, e.value) : {
                key: e.key,
                value: e.value
            }
        }
    }
    class rn {
        constructor(e, t, n, i, s) {
            this.key = e, this.value = t, this.color = null != n ? n : rn.RED, this.left = null != i ? i : on.EMPTY_NODE, this.right = null != s ? s : on.EMPTY_NODE
        }
        copy(e, t, n, i, s) {
            return new rn(null != e ? e : this.key, null != t ? t : this.value, null != n ? n : this.color, null != i ? i : this.left, null != s ? s : this.right)
        }
        count() {
            return this.left.count() + 1 + this.right.count()
        }
        isEmpty() {
            return !1
        }
        inorderTraversal(e) {
            return this.left.inorderTraversal(e) || !!e(this.key, this.value) || this.right.inorderTraversal(e)
        }
        reverseTraversal(e) {
            return this.right.reverseTraversal(e) || e(this.key, this.value) || this.left.reverseTraversal(e)
        }
        min_() {
            return this.left.isEmpty() ? this : this.left.min_()
        }
        minKey() {
            return this.min_().key
        }
        maxKey() {
            return this.right.isEmpty() ? this.key : this.right.maxKey()
        }
        insert(e, t, n) {
            let i = this;
            const s = n(e, i.key);
            return i = s < 0 ? i.copy(null, null, null, i.left.insert(e, t, n), null) : 0 === s ? i.copy(null, t, null, null, null) : i.copy(null, null, null, null, i.right.insert(e, t, n)), i.fixUp_()
        }
        removeMin_() {
            if (this.left.isEmpty()) return on.EMPTY_NODE;
            let e = this;
            return e.left.isRed_() || e.left.left.isRed_() || (e = e.moveRedLeft_()), e = e.copy(null, null, null, e.left.removeMin_(), null), e.fixUp_()
        }
        remove(e, t) {
            let n, i;
            if (n = this, t(e, n.key) < 0) n.left.isEmpty() || n.left.isRed_() || n.left.left.isRed_() || (n = n.moveRedLeft_()), n = n.copy(null, null, null, n.left.remove(e, t), null);
            else {
                if (n.left.isRed_() && (n = n.rotateRight_()), n.right.isEmpty() || n.right.isRed_() || n.right.left.isRed_() || (n = n.moveRedRight_()), 0 === t(e, n.key)) {
                    if (n.right.isEmpty()) return on.EMPTY_NODE;
                    i = n.right.min_(), n = n.copy(i.key, i.value, null, null, n.right.removeMin_())
                }
                n = n.copy(null, null, null, null, n.right.remove(e, t))
            }
            return n.fixUp_()
        }
        isRed_() {
            return this.color
        }
        fixUp_() {
            let e = this;
            return e.right.isRed_() && !e.left.isRed_() && (e = e.rotateLeft_()), e.left.isRed_() && e.left.left.isRed_() && (e = e.rotateRight_()), e.left.isRed_() && e.right.isRed_() && (e = e.colorFlip_()), e
        }
        moveRedLeft_() {
            let e = this.colorFlip_();
            return e.right.left.isRed_() && (e = e.copy(null, null, null, null, e.right.rotateRight_()), e = e.rotateLeft_(), e = e.colorFlip_()), e
        }
        moveRedRight_() {
            let e = this.colorFlip_();
            return e.left.left.isRed_() && (e = e.rotateRight_(), e = e.colorFlip_()), e
        }
        rotateLeft_() {
            const e = this.copy(null, null, rn.RED, null, this.right.left);
            return this.right.copy(null, null, this.color, e, null)
        }
        rotateRight_() {
            const e = this.copy(null, null, rn.RED, this.left.right, null);
            return this.left.copy(null, null, this.color, null, e)
        }
        colorFlip_() {
            const e = this.left.copy(null, null, !this.left.color, null, null),
                t = this.right.copy(null, null, !this.right.color, null, null);
            return this.copy(null, null, !this.color, e, t)
        }
        checkMaxDepth_() {
            const e = this.check_();
            return Math.pow(2, e) <= this.count() + 1
        }
        check_() {
            if (this.isRed_() && this.left.isRed_()) throw new Error("Red node has red child(" + this.key + "," + this.value + ")");
            if (this.right.isRed_()) throw new Error("Right child of (" + this.key + "," + this.value + ") is red");
            const e = this.left.check_();
            if (e !== this.right.check_()) throw new Error("Black depths differ");
            return e + (this.isRed_() ? 0 : 1)
        }
    }
    rn.RED = !0, rn.BLACK = !1;
    class on {
        constructor(e, t = on.EMPTY_NODE) {
            this.comparator_ = e, this.root_ = t
        }
        insert(e, t) {
            return new on(this.comparator_, this.root_.insert(e, t, this.comparator_).copy(null, null, rn.BLACK, null, null))
        }
        remove(e) {
            return new on(this.comparator_, this.root_.remove(e, this.comparator_).copy(null, null, rn.BLACK, null, null))
        }
        get(e) {
            let t, n = this.root_;
            for (; !n.isEmpty();) {
                if (t = this.comparator_(e, n.key), 0 === t) return n.value;
                t < 0 ? n = n.left : t > 0 && (n = n.right)
            }
            return null
        }
        getPredecessorKey(e) {
            let t, n = this.root_,
                i = null;
            for (; !n.isEmpty();) {
                if (t = this.comparator_(e, n.key), 0 === t) {
                    if (n.left.isEmpty()) return i ? i.key : null;
                    for (n = n.left; !n.right.isEmpty();) n = n.right;
                    return n.key
                }
                t < 0 ? n = n.left : t > 0 && (i = n, n = n.right)
            }
            throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")
        }
        isEmpty() {
            return this.root_.isEmpty()
        }
        count() {
            return this.root_.count()
        }
        minKey() {
            return this.root_.minKey()
        }
        maxKey() {
            return this.root_.maxKey()
        }
        inorderTraversal(e) {
            return this.root_.inorderTraversal(e)
        }
        reverseTraversal(e) {
            return this.root_.reverseTraversal(e)
        }
        getIterator(e) {
            return new sn(this.root_, null, this.comparator_, !1, e)
        }
        getIteratorFrom(e, t) {
            return new sn(this.root_, e, this.comparator_, !1, t)
        }
        getReverseIteratorFrom(e, t) {
            return new sn(this.root_, e, this.comparator_, !0, t)
        }
        getReverseIterator(e) {
            return new sn(this.root_, null, this.comparator_, !0, e)
        }
    }

    function an(e, t) {
        return Ze(e.name, t.name)
    }

    function cn(e, t) {
        return Ze(e, t)
    }
    let ln;
    on.EMPTY_NODE = new class {
        copy(e, t, n, i, s) {
            return this
        }
        insert(e, t, n) {
            return new rn(e, t, null)
        }
        remove(e, t) {
            return this
        }
        count() {
            return 0
        }
        isEmpty() {
            return !0
        }
        inorderTraversal(e) {
            return !1
        }
        reverseTraversal(e) {
            return !1
        }
        minKey() {
            return null
        }
        maxKey() {
            return null
        }
        check_() {
            return 0
        }
        isRed_() {
            return !1
        }
    };
    const hn = function(e) {
            return "number" == typeof e ? "number:" + rt(e) : "string:" + e
        },
        un = function(t) {
            if (t.isLeafNode()) {
                const n = t.val();
                e("string" == typeof n || "number" == typeof n || "object" == typeof n && y(n, ".sv"), "Priority must be a string or number.")
            } else e(t === ln || t.isEmpty(), "priority of unexpected type.");
            e(t === ln || t.getPriority().isEmpty(), "Priority nodes can't have a priority of their own.")
        };
    let dn, pn, fn;
    class mn {
        constructor(t, n = mn.__childrenNodeConstructor.EMPTY_NODE) {
            this.value_ = t, this.priorityNode_ = n, this.lazyHash_ = null, e(void 0 !== this.value_ && null !== this.value_, "LeafNode shouldn't be created with null/undefined value."), un(this.priorityNode_)
        }
        static set __childrenNodeConstructor(e) {
            dn = e
        }
        static get __childrenNodeConstructor() {
            return dn
        }
        isLeafNode() {
            return !0
        }
        getPriority() {
            return this.priorityNode_
        }
        updatePriority(e) {
            return new mn(this.value_, e)
        }
        getImmediateChild(e) {
            return ".priority" === e ? this.priorityNode_ : mn.__childrenNodeConstructor.EMPTY_NODE
        }
        getChild(e) {
            return jt(e) ? this : ".priority" === Dt(e) ? this.priorityNode_ : mn.__childrenNodeConstructor.EMPTY_NODE
        }
        hasChild() {
            return !1
        }
        getPredecessorChildName(e, t) {
            return null
        }
        updateImmediateChild(e, t) {
            return ".priority" === e ? this.updatePriority(t) : t.isEmpty() && ".priority" !== e ? this : mn.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e, t).updatePriority(this.priorityNode_)
        }
        updateChild(t, n) {
            const i = Dt(t);
            return null === i ? n : n.isEmpty() && ".priority" !== i ? this : (e(".priority" !== i || 1 === Lt(t), ".priority must be the last token in a path"), this.updateImmediateChild(i, mn.__childrenNodeConstructor.EMPTY_NODE.updateChild(Mt(t), n)))
        }
        isEmpty() {
            return !1
        }
        numChildren() {
            return 0
        }
        forEachChild(e, t) {
            return !1
        }
        val(e) {
            return e && !this.getPriority().isEmpty() ? {
                ".value": this.getValue(),
                ".priority": this.getPriority().val()
            } : this.getValue()
        }
        hash() {
            if (null === this.lazyHash_) {
                let e = "";
                this.priorityNode_.isEmpty() || (e += "priority:" + hn(this.priorityNode_.val()) + ":");
                const t = typeof this.value_;
                e += t + ":", e += "number" === t ? rt(this.value_) : this.value_, this.lazyHash_ = je(e)
            }
            return this.lazyHash_
        }
        getValue() {
            return this.value_
        }
        compareTo(t) {
            return t === mn.__childrenNodeConstructor.EMPTY_NODE ? 1 : t instanceof mn.__childrenNodeConstructor ? -1 : (e(t.isLeafNode(), "Unknown node type"), this.compareToLeafNode_(t))
        }
        compareToLeafNode_(t) {
            const n = typeof t.value_,
                i = typeof this.value_,
                s = mn.VALUE_TYPE_ORDER.indexOf(n),
                r = mn.VALUE_TYPE_ORDER.indexOf(i);
            return e(s >= 0, "Unknown leaf type: " + n), e(r >= 0, "Unknown leaf type: " + i), s === r ? "object" === i ? 0 : this.value_ < t.value_ ? -1 : this.value_ === t.value_ ? 0 : 1 : r - s
        }
        withIndex() {
            return this
        }
        isIndexed() {
            return !0
        }
        equals(e) {
            if (e === this) return !0;
            if (e.isLeafNode()) {
                const t = e;
                return this.value_ === t.value_ && this.priorityNode_.equals(t.priorityNode_)
            }
            return !1
        }
    }
    mn.VALUE_TYPE_ORDER = ["object", "boolean", "number", "string"];
    const gn = new class extends Zt {
            compare(e, t) {
                const n = e.node.getPriority(),
                    i = t.node.getPriority(),
                    s = n.compareTo(i);
                return 0 === s ? Ze(e.name, t.name) : s
            }
            isDefinedOn(e) {
                return !e.getPriority().isEmpty()
            }
            indexedValueChanged(e, t) {
                return !e.getPriority().equals(t.getPriority())
            }
            minPost() {
                return Xt.MIN
            }
            maxPost() {
                return new Xt(Xe, new mn("[PRIORITY-POST]", fn))
            }
            makePost(e, t) {
                const n = pn(e);
                return new Xt(t, new mn("[PRIORITY-POST]", n))
            }
            toString() {
                return ".priority"
            }
        },
        _n = Math.log(2);
    class vn {
        constructor(e) {
            var t;
            this.count = (t = e + 1, parseInt(Math.log(t) / _n, 10)), this.current_ = this.count - 1;
            const n = (i = this.count, parseInt(Array(i + 1).join("1"), 2));
            var i;
            this.bits_ = e + 1 & n
        }
        nextBitIsOne() {
            const e = !(this.bits_ & 1 << this.current_);
            return this.current_--, e
        }
    }
    const yn = function(e, t, n, i) {
        e.sort(t);
        const s = function(t, i) {
                const r = i - t;
                let o, a;
                if (0 === r) return null;
                if (1 === r) return o = e[t], a = n ? n(o) : o, new rn(a, o.node, rn.BLACK, null, null); {
                    const c = parseInt(r / 2, 10) + t,
                        l = s(t, c),
                        h = s(c + 1, i);
                    return o = e[c], a = n ? n(o) : o, new rn(a, o.node, rn.BLACK, l, h)
                }
            },
            r = function(t) {
                let i = null,
                    r = null,
                    o = e.length;
                const a = function(t, i) {
                        const r = o - t,
                            a = o;
                        o -= t;
                        const l = s(r + 1, a),
                            h = e[r],
                            u = n ? n(h) : h;
                        c(new rn(u, h.node, i, null, l))
                    },
                    c = function(e) {
                        i ? (i.left = e, i = e) : (r = e, i = e)
                    };
                for (let e = 0; e < t.count; ++e) {
                    const n = t.nextBitIsOne(),
                        i = Math.pow(2, t.count - (e + 1));
                    n ? a(i, rn.BLACK) : (a(i, rn.BLACK), a(i, rn.RED))
                }
                return r
            }(new vn(e.length));
        return new on(i || t, r)
    };
    let wn;
    const bn = {};
    class In {
        constructor(e, t) {
            this.indexes_ = e, this.indexSet_ = t
        }
        static get Default() {
            return e(bn && gn, "ChildrenNode.ts has not been loaded"), wn = wn || new In({
                ".priority": bn
            }, {
                ".priority": gn
            }), wn
        }
        get(e) {
            const t = w(this.indexes_, e);
            if (!t) throw new Error("No index defined for " + e);
            return t instanceof on ? t : null
        }
        hasIndex(e) {
            return y(this.indexSet_, e.toString())
        }
        addIndex(t, n) {
            e(t !== nn, "KeyIndex always exists and isn't meant to be added to the IndexMap.");
            const i = [];
            let s = !1;
            const r = n.getIterator(Xt.Wrap);
            let o, a = r.getNext();
            for (; a;) s = s || t.isDefinedOn(a.node), i.push(a), a = r.getNext();
            o = s ? yn(i, t.getCompare()) : bn;
            const c = t.toString(),
                l = Object.assign({}, this.indexSet_);
            l[c] = t;
            const h = Object.assign({}, this.indexes_);
            return h[c] = o, new In(h, l)
        }
        addToIndexes(t, n) {
            const i = I(this.indexes_, ((i, s) => {
                const r = w(this.indexSet_, s);
                if (e(r, "Missing index implementation for " + s), i === bn) {
                    if (r.isDefinedOn(t.node)) {
                        const e = [],
                            i = n.getIterator(Xt.Wrap);
                        let s = i.getNext();
                        for (; s;) s.name !== t.name && e.push(s), s = i.getNext();
                        return e.push(t), yn(e, r.getCompare())
                    }
                    return bn
                } {
                    const e = n.get(t.name);
                    let s = i;
                    return e && (s = s.remove(new Xt(t.name, e))), s.insert(t, t.node)
                }
            }));
            return new In(i, this.indexSet_)
        }
        removeFromIndexes(e, t) {
            const n = I(this.indexes_, (n => {
                if (n === bn) return n; {
                    const i = t.get(e.name);
                    return i ? n.remove(new Xt(e.name, i)) : n
                }
            }));
            return new In(n, this.indexSet_)
        }
    }
    let Cn;
    class Tn {
        constructor(t, n, i) {
            this.children_ = t, this.priorityNode_ = n, this.indexMap_ = i, this.lazyHash_ = null, this.priorityNode_ && un(this.priorityNode_), this.children_.isEmpty() && e(!this.priorityNode_ || this.priorityNode_.isEmpty(), "An empty node cannot have a priority")
        }
        static get EMPTY_NODE() {
            return Cn || (Cn = new Tn(new on(cn), null, In.Default))
        }
        isLeafNode() {
            return !1
        }
        getPriority() {
            return this.priorityNode_ || Cn
        }
        updatePriority(e) {
            return this.children_.isEmpty() ? this : new Tn(this.children_, e, this.indexMap_)
        }
        getImmediateChild(e) {
            if (".priority" === e) return this.getPriority(); {
                const t = this.children_.get(e);
                return null === t ? Cn : t
            }
        }
        getChild(e) {
            const t = Dt(e);
            return null === t ? this : this.getImmediateChild(t).getChild(Mt(e))
        }
        hasChild(e) {
            return null !== this.children_.get(e)
        }
        updateImmediateChild(t, n) {
            if (e(n, "We should always be passing snapshot nodes"), ".priority" === t) return this.updatePriority(n); {
                const e = new Xt(t, n);
                let i, s;
                n.isEmpty() ? (i = this.children_.remove(t), s = this.indexMap_.removeFromIndexes(e, this.children_)) : (i = this.children_.insert(t, n), s = this.indexMap_.addToIndexes(e, this.children_));
                const r = i.isEmpty() ? Cn : this.priorityNode_;
                return new Tn(i, r, s)
            }
        }
        updateChild(t, n) {
            const i = Dt(t);
            if (null === i) return n; {
                e(".priority" !== Dt(t) || 1 === Lt(t), ".priority must be the last token in a path");
                const s = this.getImmediateChild(i).updateChild(Mt(t), n);
                return this.updateImmediateChild(i, s)
            }
        }
        isEmpty() {
            return this.children_.isEmpty()
        }
        numChildren() {
            return this.children_.count()
        }
        val(e) {
            if (this.isEmpty()) return null;
            const t = {};
            let n = 0,
                i = 0,
                s = !0;
            if (this.forEachChild(gn, ((r, o) => {
                t[r] = o.val(e), n++, s && Tn.INTEGER_REGEXP_.test(r) ? i = Math.max(i, Number(r)) : s = !1
            })), !e && s && i < 2 * n) {
                const e = [];
                for (const n in t) e[n] = t[n];
                return e
            }
            return e && !this.getPriority().isEmpty() && (t[".priority"] = this.getPriority().val()), t
        }
        hash() {
            if (null === this.lazyHash_) {
                let e = "";
                this.getPriority().isEmpty() || (e += "priority:" + hn(this.getPriority().val()) + ":"), this.forEachChild(gn, ((t, n) => {
                    const i = n.hash();
                    "" !== i && (e += ":" + t + ":" + i)
                })), this.lazyHash_ = "" === e ? "" : je(e)
            }
            return this.lazyHash_
        }
        getPredecessorChildName(e, t, n) {
            const i = this.resolveIndex_(n);
            if (i) {
                const n = i.getPredecessorKey(new Xt(e, t));
                return n ? n.name : null
            }
            return this.children_.getPredecessorKey(e)
        }
        getFirstChildName(e) {
            const t = this.resolveIndex_(e);
            if (t) {
                const e = t.minKey();
                return e && e.name
            }
            return this.children_.minKey()
        }
        getFirstChild(e) {
            const t = this.getFirstChildName(e);
            return t ? new Xt(t, this.children_.get(t)) : null
        }
        getLastChildName(e) {
            const t = this.resolveIndex_(e);
            if (t) {
                const e = t.maxKey();
                return e && e.name
            }
            return this.children_.maxKey()
        }
        getLastChild(e) {
            const t = this.getLastChildName(e);
            return t ? new Xt(t, this.children_.get(t)) : null
        }
        forEachChild(e, t) {
            const n = this.resolveIndex_(e);
            return n ? n.inorderTraversal((e => t(e.name, e.node))) : this.children_.inorderTraversal(t)
        }
        getIterator(e) {
            return this.getIteratorFrom(e.minPost(), e)
        }
        getIteratorFrom(e, t) {
            const n = this.resolveIndex_(t);
            if (n) return n.getIteratorFrom(e, (e => e)); {
                const n = this.children_.getIteratorFrom(e.name, Xt.Wrap);
                let i = n.peek();
                for (; null != i && t.compare(i, e) < 0;) n.getNext(), i = n.peek();
                return n
            }
        }
        getReverseIterator(e) {
            return this.getReverseIteratorFrom(e.maxPost(), e)
        }
        getReverseIteratorFrom(e, t) {
            const n = this.resolveIndex_(t);
            if (n) return n.getReverseIteratorFrom(e, (e => e)); {
                const n = this.children_.getReverseIteratorFrom(e.name, Xt.Wrap);
                let i = n.peek();
                for (; null != i && t.compare(i, e) > 0;) n.getNext(), i = n.peek();
                return n
            }
        }
        compareTo(e) {
            return this.isEmpty() ? e.isEmpty() ? 0 : -1 : e.isLeafNode() || e.isEmpty() ? 1 : e === kn ? -1 : 0
        }
        withIndex(e) {
            if (e === nn || this.indexMap_.hasIndex(e)) return this; {
                const t = this.indexMap_.addIndex(e, this.children_);
                return new Tn(this.children_, this.priorityNode_, t)
            }
        }
        isIndexed(e) {
            return e === nn || this.indexMap_.hasIndex(e)
        }
        equals(e) {
            if (e === this) return !0;
            if (e.isLeafNode()) return !1; {
                const t = e;
                if (this.getPriority().equals(t.getPriority())) {
                    if (this.children_.count() === t.children_.count()) {
                        const e = this.getIterator(gn),
                            n = t.getIterator(gn);
                        let i = e.getNext(),
                            s = n.getNext();
                        for (; i && s;) {
                            if (i.name !== s.name || !i.node.equals(s.node)) return !1;
                            i = e.getNext(), s = n.getNext()
                        }
                        return null === i && null === s
                    }
                    return !1
                }
                return !1
            }
        }
        resolveIndex_(e) {
            return e === nn ? null : this.indexMap_.get(e.toString())
        }
    }
    Tn.INTEGER_REGEXP_ = /^(0|[1-9]\d*)$/;
    const kn = new class extends Tn {
        constructor() {
            super(new on(cn), Tn.EMPTY_NODE, In.Default)
        }
        compareTo(e) {
            return e === this ? 0 : 1
        }
        equals(e) {
            return e === this
        }
        getPriority() {
            return this
        }
        getImmediateChild(e) {
            return Tn.EMPTY_NODE
        }
        isEmpty() {
            return !1
        }
    };

    function En(t, n = null) {
        if (null === t) return Tn.EMPTY_NODE;
        if ("object" == typeof t && ".priority" in t && (n = t[".priority"]), e(null === n || "string" == typeof n || "number" == typeof n || "object" == typeof n && ".sv" in n, "Invalid priority type found: " + typeof n), "object" == typeof t && ".value" in t && null !== t[".value"] && (t = t[".value"]), "object" != typeof t || ".sv" in t) return new mn(t, En(n));
        if (t instanceof Array) {
            let e = Tn.EMPTY_NODE;
            return st(t, ((n, i) => {
                if (y(t, n) && "." !== n.substring(0, 1)) {
                    const t = En(i);
                    !t.isLeafNode() && t.isEmpty() || (e = e.updateImmediateChild(n, t))
                }
            })), e.updatePriority(En(n))
        } {
            const e = [];
            let i = !1;
            if (st(t, ((t, n) => {
                if ("." !== t.substring(0, 1)) {
                    const s = En(n);
                    s.isEmpty() || (i = i || !s.getPriority().isEmpty(), e.push(new Xt(t, s)))
                }
            })), 0 === e.length) return Tn.EMPTY_NODE;
            const s = yn(e, an, (e => e.name), cn);
            if (i) {
                const t = yn(e, gn.getCompare());
                return new Tn(s, En(n), new In({
                    ".priority": t
                }, {
                    ".priority": gn
                }))
            }
            return new Tn(s, En(n), In.Default)
        }
    }
    Object.defineProperties(Xt, {
        MIN: {
            value: new Xt(Qe, Tn.EMPTY_NODE)
        },
        MAX: {
            value: new Xt(Xe, kn)
        }
    }), tn.__EMPTY_NODE = Tn.EMPTY_NODE, mn.__childrenNodeConstructor = Tn, ln = kn, fn = kn,
        function(e) {
            pn = e
        }(En);
    class Sn extends Zt {
        constructor(t) {
            super(), this.indexPath_ = t, e(!jt(t) && ".priority" !== Dt(t), "Can't create PathIndex with empty path or .priority key")
        }
        extractChild(e) {
            return e.getChild(this.indexPath_)
        }
        isDefinedOn(e) {
            return !e.getChild(this.indexPath_).isEmpty()
        }
        compare(e, t) {
            const n = this.extractChild(e.node),
                i = this.extractChild(t.node),
                s = n.compareTo(i);
            return 0 === s ? Ze(e.name, t.name) : s
        }
        makePost(e, t) {
            const n = En(e),
                i = Tn.EMPTY_NODE.updateChild(this.indexPath_, n);
            return new Xt(t, i)
        }
        maxPost() {
            const e = Tn.EMPTY_NODE.updateChild(this.indexPath_, kn);
            return new Xt(Xe, e)
        }
        toString() {
            return Ut(this.indexPath_, 0).join("/")
        }
    }
    const Nn = new class extends Zt {
        compare(e, t) {
            const n = e.node.compareTo(t.node);
            return 0 === n ? Ze(e.name, t.name) : n
        }
        isDefinedOn(e) {
            return !0
        }
        indexedValueChanged(e, t) {
            return !e.equals(t)
        }
        minPost() {
            return Xt.MIN
        }
        maxPost() {
            return Xt.MAX
        }
        makePost(e, t) {
            const n = En(e);
            return new Xt(t, n)
        }
        toString() {
            return ".value"
        }
    };

    function Rn(e) {
        return {
            type: "value",
            snapshotNode: e
        }
    }

    function Pn(e, t) {
        return {
            type: "child_added",
            snapshotNode: t,
            childName: e
        }
    }

    function On(e, t) {
        return {
            type: "child_removed",
            snapshotNode: t,
            childName: e
        }
    }

    function xn(e, t, n) {
        return {
            type: "child_changed",
            snapshotNode: t,
            childName: e,
            oldSnap: n
        }
    }
    class An {
        constructor(e) {
            this.index_ = e
        }
        updateChild(t, n, i, s, r, o) {
            e(t.isIndexed(this.index_), "A node must be indexed if only a child is updated");
            const a = t.getImmediateChild(n);
            return a.getChild(s).equals(i.getChild(s)) && a.isEmpty() === i.isEmpty() ? t : (null != o && (i.isEmpty() ? t.hasChild(n) ? o.trackChildChange(On(n, a)) : e(t.isLeafNode(), "A child remove without an old child only makes sense on a leaf node") : a.isEmpty() ? o.trackChildChange(Pn(n, i)) : o.trackChildChange(xn(n, i, a))), t.isLeafNode() && i.isEmpty() ? t : t.updateImmediateChild(n, i).withIndex(this.index_))
        }
        updateFullNode(e, t, n) {
            return null != n && (e.isLeafNode() || e.forEachChild(gn, ((e, i) => {
                t.hasChild(e) || n.trackChildChange(On(e, i))
            })), t.isLeafNode() || t.forEachChild(gn, ((t, i) => {
                if (e.hasChild(t)) {
                    const s = e.getImmediateChild(t);
                    s.equals(i) || n.trackChildChange(xn(t, i, s))
                } else n.trackChildChange(Pn(t, i))
            }))), t.withIndex(this.index_)
        }
        updatePriority(e, t) {
            return e.isEmpty() ? Tn.EMPTY_NODE : e.updatePriority(t)
        }
        filtersNodes() {
            return !1
        }
        getIndexedFilter() {
            return this
        }
        getIndex() {
            return this.index_
        }
    }
    class Dn {
        constructor(e) {
            this.indexedFilter_ = new An(e.getIndex()), this.index_ = e.getIndex(), this.startPost_ = Dn.getStartPost_(e), this.endPost_ = Dn.getEndPost_(e)
        }
        getStartPost() {
            return this.startPost_
        }
        getEndPost() {
            return this.endPost_
        }
        matches(e) {
            return this.index_.compare(this.getStartPost(), e) <= 0 && this.index_.compare(e, this.getEndPost()) <= 0
        }
        updateChild(e, t, n, i, s, r) {
            return this.matches(new Xt(t, n)) || (n = Tn.EMPTY_NODE), this.indexedFilter_.updateChild(e, t, n, i, s, r)
        }
        updateFullNode(e, t, n) {
            t.isLeafNode() && (t = Tn.EMPTY_NODE);
            let i = t.withIndex(this.index_);
            i = i.updatePriority(Tn.EMPTY_NODE);
            const s = this;
            return t.forEachChild(gn, ((e, t) => {
                s.matches(new Xt(e, t)) || (i = i.updateImmediateChild(e, Tn.EMPTY_NODE))
            })), this.indexedFilter_.updateFullNode(e, i, n)
        }
        updatePriority(e, t) {
            return e
        }
        filtersNodes() {
            return !0
        }
        getIndexedFilter() {
            return this.indexedFilter_
        }
        getIndex() {
            return this.index_
        }
        static getStartPost_(e) {
            if (e.hasStart()) {
                const t = e.getIndexStartName();
                return e.getIndex().makePost(e.getIndexStartValue(), t)
            }
            return e.getIndex().minPost()
        }
        static getEndPost_(e) {
            if (e.hasEnd()) {
                const t = e.getIndexEndName();
                return e.getIndex().makePost(e.getIndexEndValue(), t)
            }
            return e.getIndex().maxPost()
        }
    }
    class Ln {
        constructor(e) {
            this.rangedFilter_ = new Dn(e), this.index_ = e.getIndex(), this.limit_ = e.getLimit(), this.reverse_ = !e.isViewFromLeft()
        }
        updateChild(e, t, n, i, s, r) {
            return this.rangedFilter_.matches(new Xt(t, n)) || (n = Tn.EMPTY_NODE), e.getImmediateChild(t).equals(n) ? e : e.numChildren() < this.limit_ ? this.rangedFilter_.getIndexedFilter().updateChild(e, t, n, i, s, r) : this.fullLimitUpdateChild_(e, t, n, s, r)
        }
        updateFullNode(e, t, n) {
            let i;
            if (t.isLeafNode() || t.isEmpty()) i = Tn.EMPTY_NODE.withIndex(this.index_);
            else if (2 * this.limit_ < t.numChildren() && t.isIndexed(this.index_)) {
                let e;
                i = Tn.EMPTY_NODE.withIndex(this.index_), e = this.reverse_ ? t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(), this.index_) : t.getIteratorFrom(this.rangedFilter_.getStartPost(), this.index_);
                let n = 0;
                for (; e.hasNext() && n < this.limit_;) {
                    const t = e.getNext();
                    let s;
                    if (s = this.reverse_ ? this.index_.compare(this.rangedFilter_.getStartPost(), t) <= 0 : this.index_.compare(t, this.rangedFilter_.getEndPost()) <= 0, !s) break;
                    i = i.updateImmediateChild(t.name, t.node), n++
                }
            } else {
                let e, n, s, r;
                if (i = t.withIndex(this.index_), i = i.updatePriority(Tn.EMPTY_NODE), this.reverse_) {
                    r = i.getReverseIterator(this.index_), e = this.rangedFilter_.getEndPost(), n = this.rangedFilter_.getStartPost();
                    const t = this.index_.getCompare();
                    s = (e, n) => t(n, e)
                } else r = i.getIterator(this.index_), e = this.rangedFilter_.getStartPost(), n = this.rangedFilter_.getEndPost(), s = this.index_.getCompare();
                let o = 0,
                    a = !1;
                for (; r.hasNext();) {
                    const t = r.getNext();
                    !a && s(e, t) <= 0 && (a = !0), a && o < this.limit_ && s(t, n) <= 0 ? o++ : i = i.updateImmediateChild(t.name, Tn.EMPTY_NODE)
                }
            }
            return this.rangedFilter_.getIndexedFilter().updateFullNode(e, i, n)
        }
        updatePriority(e, t) {
            return e
        }
        filtersNodes() {
            return !0
        }
        getIndexedFilter() {
            return this.rangedFilter_.getIndexedFilter()
        }
        getIndex() {
            return this.index_
        }
        fullLimitUpdateChild_(t, n, i, s, r) {
            let o;
            if (this.reverse_) {
                const e = this.index_.getCompare();
                o = (t, n) => e(n, t)
            } else o = this.index_.getCompare();
            const a = t;
            e(a.numChildren() === this.limit_, "");
            const c = new Xt(n, i),
                l = this.reverse_ ? a.getFirstChild(this.index_) : a.getLastChild(this.index_),
                h = this.rangedFilter_.matches(c);
            if (a.hasChild(n)) {
                const e = a.getImmediateChild(n);
                let t = s.getChildAfterChild(this.index_, l, this.reverse_);
                for (; null != t && (t.name === n || a.hasChild(t.name));) t = s.getChildAfterChild(this.index_, t, this.reverse_);
                const u = null == t ? 1 : o(t, c);
                if (h && !i.isEmpty() && u >= 0) return null != r && r.trackChildChange(xn(n, i, e)), a.updateImmediateChild(n, i); {
                    null != r && r.trackChildChange(On(n, e));
                    const i = a.updateImmediateChild(n, Tn.EMPTY_NODE);
                    return null != t && this.rangedFilter_.matches(t) ? (null != r && r.trackChildChange(Pn(t.name, t.node)), i.updateImmediateChild(t.name, t.node)) : i
                }
            }
            return i.isEmpty() ? t : h && o(l, c) >= 0 ? (null != r && (r.trackChildChange(On(l.name, l.node)), r.trackChildChange(Pn(n, i))), a.updateImmediateChild(n, i).updateImmediateChild(l.name, Tn.EMPTY_NODE)) : t
        }
    }
    class Mn {
        constructor() {
            this.limitSet_ = !1, this.startSet_ = !1, this.startNameSet_ = !1, this.startAfterSet_ = !1, this.endSet_ = !1, this.endNameSet_ = !1, this.endBeforeSet_ = !1, this.limit_ = 0, this.viewFrom_ = "", this.indexStartValue_ = null, this.indexStartName_ = "", this.indexEndValue_ = null, this.indexEndName_ = "", this.index_ = gn
        }
        hasStart() {
            return this.startSet_
        }
        hasStartAfter() {
            return this.startAfterSet_
        }
        hasEndBefore() {
            return this.endBeforeSet_
        }
        isViewFromLeft() {
            return "" === this.viewFrom_ ? this.startSet_ : "l" === this.viewFrom_
        }
        getIndexStartValue() {
            return e(this.startSet_, "Only valid if start has been set"), this.indexStartValue_
        }
        getIndexStartName() {
            return e(this.startSet_, "Only valid if start has been set"), this.startNameSet_ ? this.indexStartName_ : Qe
        }
        hasEnd() {
            return this.endSet_
        }
        getIndexEndValue() {
            return e(this.endSet_, "Only valid if end has been set"), this.indexEndValue_
        }
        getIndexEndName() {
            return e(this.endSet_, "Only valid if end has been set"), this.endNameSet_ ? this.indexEndName_ : Xe
        }
        hasLimit() {
            return this.limitSet_
        }
        hasAnchoredLimit() {
            return this.limitSet_ && "" !== this.viewFrom_
        }
        getLimit() {
            return e(this.limitSet_, "Only valid if limit has been set"), this.limit_
        }
        getIndex() {
            return this.index_
        }
        loadsAllData() {
            return !(this.startSet_ || this.endSet_ || this.limitSet_)
        }
        isDefault() {
            return this.loadsAllData() && this.index_ === gn
        }
        copy() {
            const e = new Mn;
            return e.limitSet_ = this.limitSet_, e.limit_ = this.limit_, e.startSet_ = this.startSet_, e.indexStartValue_ = this.indexStartValue_, e.startNameSet_ = this.startNameSet_, e.indexStartName_ = this.indexStartName_, e.endSet_ = this.endSet_, e.indexEndValue_ = this.indexEndValue_, e.endNameSet_ = this.endNameSet_, e.indexEndName_ = this.indexEndName_, e.index_ = this.index_, e.viewFrom_ = this.viewFrom_, e
        }
    }

    function Fn(t) {
        const n = {};
        if (t.isDefault()) return n;
        let i;
        return t.index_ === gn ? i = "$priority" : t.index_ === Nn ? i = "$value" : t.index_ === nn ? i = "$key" : (e(t.index_ instanceof Sn, "Unrecognized index type!"), i = t.index_.toString()), n.orderBy = _(i), t.startSet_ && (n.startAt = _(t.indexStartValue_), t.startNameSet_ && (n.startAt += "," + _(t.indexStartName_))), t.endSet_ && (n.endAt = _(t.indexEndValue_), t.endNameSet_ && (n.endAt += "," + _(t.indexEndName_))), t.limitSet_ && (t.isViewFromLeft() ? n.limitToFirst = t.limit_ : n.limitToLast = t.limit_), n
    }

    function Un(e) {
        const t = {};
        if (e.startSet_ && (t.sp = e.indexStartValue_, e.startNameSet_ && (t.sn = e.indexStartName_)), e.endSet_ && (t.ep = e.indexEndValue_, e.endNameSet_ && (t.en = e.indexEndName_)), e.limitSet_) {
            t.l = e.limit_;
            let n = e.viewFrom_;
            "" === n && (n = e.isViewFromLeft() ? "l" : "r"), t.vf = n
        }
        return e.index_ !== gn && (t.i = e.index_.toString()), t
    }
    class qn extends Rt {
        constructor(e, t, n, i) {
            super(), this.repoInfo_ = e, this.onDataUpdate_ = t, this.authTokenProvider_ = n, this.appCheckTokenProvider_ = i, this.log_ = $e("p:rest:"), this.listens_ = {}
        }
        reportStats(e) {
            throw new Error("Method not implemented.")
        }
        static getListenId_(t, n) {
            return void 0 !== n ? "tag$" + n : (e(t._queryParams.isDefault(), "should have a tag if it's not a default query."), t._path.toString())
        }
        listen(e, t, n, i) {
            const s = e._path.toString();
            this.log_("Listen called for " + s + " " + e._queryIdentifier);
            const r = qn.getListenId_(e, n),
                o = {};
            this.listens_[r] = o;
            const a = Fn(e._queryParams);
            this.restRequest_(s + ".json", a, ((e, t) => {
                let a = t;
                if (404 === e && (a = null, e = null), null === e && this.onDataUpdate_(s, a, !1, n), w(this.listens_, r) === o) {
                    let t;
                    t = e ? 401 === e ? "permission_denied" : "rest_error:" + e : "ok", i(t, null)
                }
            }))
        }
        unlisten(e, t) {
            const n = qn.getListenId_(e, t);
            delete this.listens_[n]
        }
        get(e) {
            const t = Fn(e._queryParams),
                n = e._path.toString(),
                i = new l;
            return this.restRequest_(n + ".json", t, ((e, t) => {
                let s = t;
                404 === e && (s = null, e = null), null === e ? (this.onDataUpdate_(n, s, !1, null), i.resolve(s)) : i.reject(new Error(s))
            })), i.promise
        }
        refreshAuthToken(e) {}
        restRequest_(e, t = {}, n) {
            return t.format = "export", Promise.all([this.authTokenProvider_.getToken(!1), this.appCheckTokenProvider_.getToken(!1)]).then((([i, s]) => {
                i && i.accessToken && (t.auth = i.accessToken), s && s.token && (t.ac = s.token);
                const r = (this.repoInfo_.secure ? "https://" : "http://") + this.repoInfo_.host + e + "?ns=" + this.repoInfo_.namespace + k(t);
                this.log_("Sending REST request for " + r);
                const o = new XMLHttpRequest;
                o.onreadystatechange = () => {
                    if (n && 4 === o.readyState) {
                        this.log_("REST Response for " + r + " received. status:", o.status, "response:", o.responseText);
                        let e = null;
                        if (o.status >= 200 && o.status < 300) {
                            try {
                                e = g(o.responseText)
                            } catch (e) {
                                Ye("Failed to parse JSON response for " + r + ": " + o.responseText)
                            }
                            n(null, e)
                        } else 401 !== o.status && 404 !== o.status && Ye("Got unsuccessful REST response for " + r + " Status: " + o.status), n(o.status);
                        n = null
                    }
                }, o.open("GET", r, !0), o.send()
            }))
        }
    }
    class Wn {
        constructor() {
            this.rootNode_ = Tn.EMPTY_NODE
        }
        getNode(e) {
            return this.rootNode_.getChild(e)
        }
        updateSnapshot(e, t) {
            this.rootNode_ = this.rootNode_.updateChild(e, t)
        }
    }

    function jn() {
        return {
            value: null,
            children: new Map
        }
    }

    function Bn(e, t, n) {
        if (jt(t)) e.value = n, e.children.clear();
        else if (null !== e.value) e.value = e.value.updateChild(t, n);
        else {
            const i = Dt(t);
            e.children.has(i) || e.children.set(i, jn()), Bn(e.children.get(i), t = Mt(t), n)
        }
    }

    function Hn(e, t, n) {
        null !== e.value ? n(t, e.value) : function(e, t) {
            e.children.forEach(((e, n) => {
                t(n, e)
            }))
        }(e, ((e, i) => {
            Hn(i, new xt(t.toString() + "/" + e), n)
        }))
    }
    class Vn {
        constructor(e) {
            this.collection_ = e, this.last_ = null
        }
        get() {
            const e = this.collection_.get(),
                t = Object.assign({}, e);
            return this.last_ && st(this.last_, ((e, n) => {
                t[e] = t[e] - n
            })), this.last_ = e, t
        }
    }
    class zn {
        constructor(e, t) {
            this.server_ = t, this.statsToReport_ = {}, this.statsListener_ = new Vn(e);
            const n = 1e4 + 2e4 * Math.random();
            lt(this.reportStats_.bind(this), Math.floor(n))
        }
        reportStats_() {
            const e = this.statsListener_.get(),
                t = {};
            let n = !1;
            st(e, ((e, i) => {
                i > 0 && y(this.statsToReport_, e) && (t[e] = i, n = !0)
            })), n && this.server_.reportStats(t), lt(this.reportStats_.bind(this), Math.floor(2 * Math.random() * 3e5))
        }
    }
    var $n;

    function Kn(e) {
        return {
            fromUser: !1,
            fromServer: !0,
            queryId: e,
            tagged: !0
        }
    }! function(e) {
        e[e.OVERWRITE = 0] = "OVERWRITE", e[e.MERGE = 1] = "MERGE", e[e.ACK_USER_WRITE = 2] = "ACK_USER_WRITE", e[e.LISTEN_COMPLETE = 3] = "LISTEN_COMPLETE"
    }($n || ($n = {}));
    class Gn {
        constructor(e, t, n) {
            this.path = e, this.affectedTree = t, this.revert = n, this.type = $n.ACK_USER_WRITE, this.source = {
                fromUser: !0,
                fromServer: !1,
                queryId: null,
                tagged: !1
            }
        }
        operationForChild(t) {
            if (jt(this.path)) {
                if (null != this.affectedTree.value) return e(this.affectedTree.children.isEmpty(), "affectedTree should not have overlapping affected paths."), this; {
                    const e = this.affectedTree.subtree(new xt(t));
                    return new Gn(At(), e, this.revert)
                }
            }
            return e(Dt(this.path) === t, "operationForChild called for unrelated child."), new Gn(Mt(this.path), this.affectedTree, this.revert)
        }
    }
    class Yn {
        constructor(e, t) {
            this.source = e, this.path = t, this.type = $n.LISTEN_COMPLETE
        }
        operationForChild(e) {
            return jt(this.path) ? new Yn(this.source, At()) : new Yn(this.source, Mt(this.path))
        }
    }
    class Jn {
        constructor(e, t, n) {
            this.source = e, this.path = t, this.snap = n, this.type = $n.OVERWRITE
        }
        operationForChild(e) {
            return jt(this.path) ? new Jn(this.source, At(), this.snap.getImmediateChild(e)) : new Jn(this.source, Mt(this.path), this.snap)
        }
    }
    class Qn {
        constructor(e, t, n) {
            this.source = e, this.path = t, this.children = n, this.type = $n.MERGE
        }
        operationForChild(t) {
            if (jt(this.path)) {
                const e = this.children.subtree(new xt(t));
                return e.isEmpty() ? null : e.value ? new Jn(this.source, At(), e.value) : new Qn(this.source, At(), e)
            }
            return e(Dt(this.path) === t, "Can't get a merge for a child not on the path of the operation"), new Qn(this.source, Mt(this.path), this.children)
        }
        toString() {
            return "Operation(" + this.path + ": " + this.source.toString() + " merge: " + this.children.toString() + ")"
        }
    }
    class Xn {
        constructor(e, t, n) {
            this.node_ = e, this.fullyInitialized_ = t, this.filtered_ = n
        }
        isFullyInitialized() {
            return this.fullyInitialized_
        }
        isFiltered() {
            return this.filtered_
        }
        isCompleteForPath(e) {
            if (jt(e)) return this.isFullyInitialized() && !this.filtered_;
            const t = Dt(e);
            return this.isCompleteForChild(t)
        }
        isCompleteForChild(e) {
            return this.isFullyInitialized() && !this.filtered_ || this.node_.hasChild(e)
        }
        getNode() {
            return this.node_
        }
    }
    class Zn {
        constructor(e) {
            this.query_ = e, this.index_ = this.query_._queryParams.getIndex()
        }
    }

    function ei(e, n, i, s, r, o) {
        const a = s.filter((e => e.type === i));
        a.sort(((n, i) => function(e, n, i) {
            if (null == n.childName || null == i.childName) throw t("Should only compare child_ events.");
            const s = new Xt(n.childName, n.snapshotNode),
                r = new Xt(i.childName, i.snapshotNode);
            return e.index_.compare(s, r)
        }(e, n, i))), a.forEach((t => {
            const i = function(e, t, n) {
                return "value" === t.type || "child_removed" === t.type || (t.prevName = n.getPredecessorChildName(t.childName, t.snapshotNode, e.index_)), t
            }(e, t, o);
            r.forEach((s => {
                s.respondsTo(t.type) && n.push(s.createEvent(i, e.query_))
            }))
        }))
    }

    function ti(e, t) {
        return {
            eventCache: e,
            serverCache: t
        }
    }

    function ni(e, t, n, i) {
        return ti(new Xn(t, n, i), e.serverCache)
    }

    function ii(e, t, n, i) {
        return ti(e.eventCache, new Xn(t, n, i))
    }

    function si(e) {
        return e.eventCache.isFullyInitialized() ? e.eventCache.getNode() : null
    }

    function ri(e) {
        return e.serverCache.isFullyInitialized() ? e.serverCache.getNode() : null
    }
    let oi;
    class ai {
        constructor(e, t = (() => (oi || (oi = new on(et)), oi))()) {
            this.value = e, this.children = t
        }
        static fromObject(e) {
            let t = new ai(null);
            return st(e, ((e, n) => {
                t = t.set(new xt(e), n)
            })), t
        }
        isEmpty() {
            return null === this.value && this.children.isEmpty()
        }
        findRootMostMatchingPathAndValue(e, t) {
            if (null != this.value && t(this.value)) return {
                path: At(),
                value: this.value
            };
            if (jt(e)) return null; {
                const n = Dt(e),
                    i = this.children.get(n);
                if (null !== i) {
                    const s = i.findRootMostMatchingPathAndValue(Mt(e), t);
                    return null != s ? {
                        path: Wt(new xt(n), s.path),
                        value: s.value
                    } : null
                }
                return null
            }
        }
        findRootMostValueAndPath(e) {
            return this.findRootMostMatchingPathAndValue(e, (() => !0))
        }
        subtree(e) {
            if (jt(e)) return this; {
                const t = Dt(e),
                    n = this.children.get(t);
                return null !== n ? n.subtree(Mt(e)) : new ai(null)
            }
        }
        set(e, t) {
            if (jt(e)) return new ai(t, this.children); {
                const n = Dt(e),
                    i = (this.children.get(n) || new ai(null)).set(Mt(e), t),
                    s = this.children.insert(n, i);
                return new ai(this.value, s)
            }
        }
        remove(e) {
            if (jt(e)) return this.children.isEmpty() ? new ai(null) : new ai(null, this.children); {
                const t = Dt(e),
                    n = this.children.get(t);
                if (n) {
                    const i = n.remove(Mt(e));
                    let s;
                    return s = i.isEmpty() ? this.children.remove(t) : this.children.insert(t, i), null === this.value && s.isEmpty() ? new ai(null) : new ai(this.value, s)
                }
                return this
            }
        }
        get(e) {
            if (jt(e)) return this.value; {
                const t = Dt(e),
                    n = this.children.get(t);
                return n ? n.get(Mt(e)) : null
            }
        }
        setTree(e, t) {
            if (jt(e)) return t; {
                const n = Dt(e),
                    i = (this.children.get(n) || new ai(null)).setTree(Mt(e), t);
                let s;
                return s = i.isEmpty() ? this.children.remove(n) : this.children.insert(n, i), new ai(this.value, s)
            }
        }
        fold(e) {
            return this.fold_(At(), e)
        }
        fold_(e, t) {
            const n = {};
            return this.children.inorderTraversal(((i, s) => {
                n[i] = s.fold_(Wt(e, i), t)
            })), t(e, this.value, n)
        }
        findOnPath(e, t) {
            return this.findOnPath_(e, At(), t)
        }
        findOnPath_(e, t, n) {
            const i = !!this.value && n(t, this.value);
            if (i) return i;
            if (jt(e)) return null; {
                const i = Dt(e),
                    s = this.children.get(i);
                return s ? s.findOnPath_(Mt(e), Wt(t, i), n) : null
            }
        }
        foreachOnPath(e, t) {
            return this.foreachOnPath_(e, At(), t)
        }
        foreachOnPath_(e, t, n) {
            if (jt(e)) return this; {
                this.value && n(t, this.value);
                const i = Dt(e),
                    s = this.children.get(i);
                return s ? s.foreachOnPath_(Mt(e), Wt(t, i), n) : new ai(null)
            }
        }
        foreach(e) {
            this.foreach_(At(), e)
        }
        foreach_(e, t) {
            this.children.inorderTraversal(((n, i) => {
                i.foreach_(Wt(e, n), t)
            })), this.value && t(e, this.value)
        }
        foreachChild(e) {
            this.children.inorderTraversal(((t, n) => {
                n.value && e(t, n.value)
            }))
        }
    }
    class ci {
        constructor(e) {
            this.writeTree_ = e
        }
        static empty() {
            return new ci(new ai(null))
        }
    }

    function li(e, t, n) {
        if (jt(t)) return new ci(new ai(n)); {
            const i = e.writeTree_.findRootMostValueAndPath(t);
            if (null != i) {
                const s = i.path;
                let r = i.value;
                const o = Bt(s, t);
                return r = r.updateChild(o, n), new ci(e.writeTree_.set(s, r))
            } {
                const i = new ai(n),
                    s = e.writeTree_.setTree(t, i);
                return new ci(s)
            }
        }
    }

    function hi(e, t, n) {
        let i = e;
        return st(n, ((e, n) => {
            i = li(i, Wt(t, e), n)
        })), i
    }

    function ui(e, t) {
        if (jt(t)) return ci.empty(); {
            const n = e.writeTree_.setTree(t, new ai(null));
            return new ci(n)
        }
    }

    function di(e, t) {
        return null != pi(e, t)
    }

    function pi(e, t) {
        const n = e.writeTree_.findRootMostValueAndPath(t);
        return null != n ? e.writeTree_.get(n.path).getChild(Bt(n.path, t)) : null
    }

    function fi(e) {
        const t = [],
            n = e.writeTree_.value;
        return null != n ? n.isLeafNode() || n.forEachChild(gn, ((e, n) => {
            t.push(new Xt(e, n))
        })) : e.writeTree_.children.inorderTraversal(((e, n) => {
            null != n.value && t.push(new Xt(e, n.value))
        })), t
    }

    function mi(e, t) {
        if (jt(t)) return e; {
            const n = pi(e, t);
            return new ci(null != n ? new ai(n) : e.writeTree_.subtree(t))
        }
    }

    function gi(e) {
        return e.writeTree_.isEmpty()
    }

    function _i(e, t) {
        return vi(At(), e.writeTree_, t)
    }

    function vi(t, n, i) {
        if (null != n.value) return i.updateChild(t, n.value); {
            let s = null;
            return n.children.inorderTraversal(((n, r) => {
                ".priority" === n ? (e(null !== r.value, "Priority writes must always be leaf nodes"), s = r.value) : i = vi(Wt(t, n), r, i)
            })), i.getChild(t).isEmpty() || null === s || (i = i.updateChild(Wt(t, ".priority"), s)), i
        }
    }

    function yi(e, t) {
        return Pi(t, e)
    }

    function wi(e, t) {
        if (e.snap) return zt(e.path, t);
        for (const n in e.children)
            if (e.children.hasOwnProperty(n) && zt(Wt(e.path, n), t)) return !0;
        return !1
    }

    function bi(e) {
        return e.visible
    }

    function Ii(e, n, i) {
        let s = ci.empty();
        for (let r = 0; r < e.length; ++r) {
            const o = e[r];
            if (n(o)) {
                const e = o.path;
                let n;
                if (o.snap) zt(i, e) ? (n = Bt(i, e), s = li(s, n, o.snap)) : zt(e, i) && (n = Bt(e, i), s = li(s, At(), o.snap.getChild(n)));
                else {
                    if (!o.children) throw t("WriteRecord should have .snap or .children");
                    if (zt(i, e)) n = Bt(i, e), s = hi(s, n, o.children);
                    else if (zt(e, i))
                        if (n = Bt(e, i), jt(n)) s = hi(s, At(), o.children);
                        else {
                            const e = w(o.children, Dt(n));
                            if (e) {
                                const t = e.getChild(Mt(n));
                                s = li(s, At(), t)
                            }
                        }
                }
            }
        }
        return s
    }

    function Ci(e, t, n, i, s) {
        if (i || s) {
            const r = mi(e.visibleWrites, t);
            if (!s && gi(r)) return n;
            if (s || null != n || di(r, At())) {
                const r = function(e) {
                    return (e.visible || s) && (!i || !~i.indexOf(e.writeId)) && (zt(e.path, t) || zt(t, e.path))
                };
                return _i(Ii(e.allWrites, r, t), n || Tn.EMPTY_NODE)
            }
            return null
        } {
            const i = pi(e.visibleWrites, t);
            if (null != i) return i; {
                const i = mi(e.visibleWrites, t);
                return gi(i) ? n : null != n || di(i, At()) ? _i(i, n || Tn.EMPTY_NODE) : null
            }
        }
    }

    function Ti(e, t, n, i) {
        return Ci(e.writeTree, e.treePath, t, n, i)
    }

    function ki(e, t) {
        return function(e, t, n) {
            let i = Tn.EMPTY_NODE;
            const s = pi(e.visibleWrites, t);
            if (s) return s.isLeafNode() || s.forEachChild(gn, ((e, t) => {
                i = i.updateImmediateChild(e, t)
            })), i;
            if (n) {
                const s = mi(e.visibleWrites, t);
                return n.forEachChild(gn, ((e, t) => {
                    const n = _i(mi(s, new xt(e)), t);
                    i = i.updateImmediateChild(e, n)
                })), fi(s).forEach((e => {
                    i = i.updateImmediateChild(e.name, e.node)
                })), i
            }
            return fi(mi(e.visibleWrites, t)).forEach((e => {
                i = i.updateImmediateChild(e.name, e.node)
            })), i
        }(e.writeTree, e.treePath, t)
    }

    function Ei(t, n, i, s) {
        return function(t, n, i, s, r) {
            e(s || r, "Either existingEventSnap or existingServerSnap must exist");
            const o = Wt(n, i);
            if (di(t.visibleWrites, o)) return null; {
                const e = mi(t.visibleWrites, o);
                return gi(e) ? r.getChild(i) : _i(e, r.getChild(i))
            }
        }(t.writeTree, t.treePath, n, i, s)
    }

    function Si(e, t) {
        return function(e, t) {
            return pi(e.visibleWrites, t)
        }(e.writeTree, Wt(e.treePath, t))
    }

    function Ni(e, t, n) {
        return function(e, t, n, i) {
            const s = Wt(t, n),
                r = pi(e.visibleWrites, s);
            return null != r ? r : i.isCompleteForChild(n) ? _i(mi(e.visibleWrites, s), i.getNode().getImmediateChild(n)) : null
        }(e.writeTree, e.treePath, t, n)
    }

    function Ri(e, t) {
        return Pi(Wt(e.treePath, t), e.writeTree)
    }

    function Pi(e, t) {
        return {
            treePath: e,
            writeTree: t
        }
    }
    class Oi {
        constructor() {
            this.changeMap = new Map
        }
        trackChildChange(n) {
            const i = n.type,
                s = n.childName;
            e("child_added" === i || "child_changed" === i || "child_removed" === i, "Only child changes supported for tracking"), e(".priority" !== s, "Only non-priority child changes can be tracked.");
            const r = this.changeMap.get(s);
            if (r) {
                const e = r.type;
                if ("child_added" === i && "child_removed" === e) this.changeMap.set(s, xn(s, n.snapshotNode, r.snapshotNode));
                else if ("child_removed" === i && "child_added" === e) this.changeMap.delete(s);
                else if ("child_removed" === i && "child_changed" === e) this.changeMap.set(s, On(s, r.oldSnap));
                else if ("child_changed" === i && "child_added" === e) this.changeMap.set(s, Pn(s, n.snapshotNode));
                else {
                    if ("child_changed" !== i || "child_changed" !== e) throw t("Illegal combination of changes: " + n + " occurred after " + r);
                    this.changeMap.set(s, xn(s, n.snapshotNode, r.oldSnap))
                }
            } else this.changeMap.set(s, n)
        }
        getChanges() {
            return Array.from(this.changeMap.values())
        }
    }
    const xi = new class {
        getCompleteChild(e) {
            return null
        }
        getChildAfterChild(e, t, n) {
            return null
        }
    };
    class Ai {
        constructor(e, t, n = null) {
            this.writes_ = e, this.viewCache_ = t, this.optCompleteServerCache_ = n
        }
        getCompleteChild(e) {
            const t = this.viewCache_.eventCache;
            if (t.isCompleteForChild(e)) return t.getNode().getImmediateChild(e); {
                const t = null != this.optCompleteServerCache_ ? new Xn(this.optCompleteServerCache_, !0, !1) : this.viewCache_.serverCache;
                return Ni(this.writes_, e, t)
            }
        }
        getChildAfterChild(e, t, n) {
            const i = null != this.optCompleteServerCache_ ? this.optCompleteServerCache_ : ri(this.viewCache_),
                s = function(e, t, n, i, s, r) {
                    return function(e, t, n, i, s, r, o) {
                        let a;
                        const c = mi(e.visibleWrites, t),
                            l = pi(c, At());
                        if (null != l) a = l;
                        else {
                            if (null == n) return [];
                            a = _i(c, n)
                        }
                        if (a = a.withIndex(o), a.isEmpty() || a.isLeafNode()) return []; {
                            const e = [],
                                t = o.getCompare(),
                                n = r ? a.getReverseIteratorFrom(i, o) : a.getIteratorFrom(i, o);
                            let c = n.getNext();
                            for (; c && e.length < s;) 0 !== t(c, i) && e.push(c), c = n.getNext();
                            return e
                        }
                    }(e.writeTree, e.treePath, t, n, i, s, r)
                }(this.writes_, i, t, 1, n, e);
            return 0 === s.length ? null : s[0]
        }
    }

    function Di(t, n, i, s, r, o) {
        const a = n.eventCache;
        if (null != Si(s, i)) return n; {
            let c, l;
            if (jt(i))
                if (e(n.serverCache.isFullyInitialized(), "If change path is empty, we must have complete server data"), n.serverCache.isFiltered()) {
                    const e = ri(n),
                        i = ki(s, e instanceof Tn ? e : Tn.EMPTY_NODE);
                    c = t.filter.updateFullNode(n.eventCache.getNode(), i, o)
                } else {
                    const e = Ti(s, ri(n));
                    c = t.filter.updateFullNode(n.eventCache.getNode(), e, o)
                }
            else {
                const h = Dt(i);
                if (".priority" === h) {
                    e(1 === Lt(i), "Can't have a priority with additional path components");
                    const r = a.getNode();
                    l = n.serverCache.getNode();
                    const o = Ei(s, i, r, l);
                    c = null != o ? t.filter.updatePriority(r, o) : a.getNode()
                } else {
                    const e = Mt(i);
                    let u;
                    if (a.isCompleteForChild(h)) {
                        l = n.serverCache.getNode();
                        const t = Ei(s, i, a.getNode(), l);
                        u = null != t ? a.getNode().getImmediateChild(h).updateChild(e, t) : a.getNode().getImmediateChild(h)
                    } else u = Ni(s, h, n.serverCache);
                    c = null != u ? t.filter.updateChild(a.getNode(), h, u, e, r, o) : a.getNode()
                }
            }
            return ni(n, c, a.isFullyInitialized() || jt(i), t.filter.filtersNodes())
        }
    }

    function Li(e, t, n, i, s, r, o, a) {
        const c = t.serverCache;
        let l;
        const h = o ? e.filter : e.filter.getIndexedFilter();
        if (jt(n)) l = h.updateFullNode(c.getNode(), i, null);
        else if (h.filtersNodes() && !c.isFiltered()) {
            const e = c.getNode().updateChild(n, i);
            l = h.updateFullNode(c.getNode(), e, null)
        } else {
            const e = Dt(n);
            if (!c.isCompleteForPath(n) && Lt(n) > 1) return t;
            const s = Mt(n),
                r = c.getNode().getImmediateChild(e).updateChild(s, i);
            l = ".priority" === e ? h.updatePriority(c.getNode(), r) : h.updateChild(c.getNode(), e, r, s, xi, null)
        }
        const u = ii(t, l, c.isFullyInitialized() || jt(n), h.filtersNodes());
        return Di(e, u, n, s, new Ai(s, u, r), a)
    }

    function Mi(e, t, n, i, s, r, o) {
        const a = t.eventCache;
        let c, l;
        const h = new Ai(s, t, r);
        if (jt(n)) l = e.filter.updateFullNode(t.eventCache.getNode(), i, o), c = ni(t, l, !0, e.filter.filtersNodes());
        else {
            const s = Dt(n);
            if (".priority" === s) l = e.filter.updatePriority(t.eventCache.getNode(), i), c = ni(t, l, a.isFullyInitialized(), a.isFiltered());
            else {
                const r = Mt(n),
                    l = a.getNode().getImmediateChild(s);
                let u;
                if (jt(r)) u = i;
                else {
                    const e = h.getCompleteChild(s);
                    u = null != e ? ".priority" === Ft(r) && e.getChild(qt(r)).isEmpty() ? e : e.updateChild(r, i) : Tn.EMPTY_NODE
                }
                c = l.equals(u) ? t : ni(t, e.filter.updateChild(a.getNode(), s, u, r, h, o), a.isFullyInitialized(), e.filter.filtersNodes())
            }
        }
        return c
    }

    function Fi(e, t) {
        return e.eventCache.isCompleteForChild(t)
    }

    function Ui(e, t, n) {
        return n.foreach(((e, n) => {
            t = t.updateChild(e, n)
        })), t
    }

    function qi(e, t, n, i, s, r, o, a) {
        if (t.serverCache.getNode().isEmpty() && !t.serverCache.isFullyInitialized()) return t;
        let c, l = t;
        c = jt(n) ? i : new ai(null).setTree(n, i);
        const h = t.serverCache.getNode();
        return c.children.inorderTraversal(((n, i) => {
            if (h.hasChild(n)) {
                const c = Ui(0, t.serverCache.getNode().getImmediateChild(n), i);
                l = Li(e, l, new xt(n), c, s, r, o, a)
            }
        })), c.children.inorderTraversal(((n, i) => {
            const c = !t.serverCache.isCompleteForChild(n) && void 0 === i.value;
            if (!h.hasChild(n) && !c) {
                const c = Ui(0, t.serverCache.getNode().getImmediateChild(n), i);
                l = Li(e, l, new xt(n), c, s, r, o, a)
            }
        })), l
    }
    class Wi {
        constructor(e, t) {
            this.query_ = e, this.eventRegistrations_ = [];
            const n = this.query_._queryParams,
                i = new An(n.getIndex()),
                s = (r = n).loadsAllData() ? new An(r.getIndex()) : r.hasLimit() ? new Ln(r) : new Dn(r);
            var r;
            this.processor_ = function(e) {
                return {
                    filter: e
                }
            }(s);
            const o = t.serverCache,
                a = t.eventCache,
                c = i.updateFullNode(Tn.EMPTY_NODE, o.getNode(), null),
                l = s.updateFullNode(Tn.EMPTY_NODE, a.getNode(), null),
                h = new Xn(c, o.isFullyInitialized(), i.filtersNodes()),
                u = new Xn(l, a.isFullyInitialized(), s.filtersNodes());
            this.viewCache_ = ti(u, h), this.eventGenerator_ = new Zn(this.query_)
        }
        get query() {
            return this.query_
        }
    }

    function ji(e, t) {
        const n = ri(e.viewCache_);
        return n && (e.query._queryParams.loadsAllData() || !jt(t) && !n.getImmediateChild(Dt(t)).isEmpty()) ? n.getChild(t) : null
    }

    function Bi(e) {
        return 0 === e.eventRegistrations_.length
    }

    function Hi(t, n, i) {
        const s = [];
        if (i) {
            e(null == n, "A cancel should cancel all event registrations.");
            const r = t.query._path;
            t.eventRegistrations_.forEach((e => {
                const t = e.createCancelEvent(i, r);
                t && s.push(t)
            }))
        }
        if (n) {
            let e = [];
            for (let i = 0; i < t.eventRegistrations_.length; ++i) {
                const s = t.eventRegistrations_[i];
                if (s.matches(n)) {
                    if (n.hasAnyCallback()) {
                        e = e.concat(t.eventRegistrations_.slice(i + 1));
                        break
                    }
                } else e.push(s)
            }
            t.eventRegistrations_ = e
        } else t.eventRegistrations_ = [];
        return s
    }

    function Vi(n, i, s, r) {
        i.type === $n.MERGE && null !== i.source.queryId && (e(ri(n.viewCache_), "We should always have a full cache before handling merges"), e(si(n.viewCache_), "Missing event cache, even though we have a server cache"));
        const o = n.viewCache_,
            a = function(n, i, s, r, o) {
                const a = new Oi;
                let c, l;
                if (s.type === $n.OVERWRITE) {
                    const t = s;
                    t.source.fromUser ? c = Mi(n, i, t.path, t.snap, r, o, a) : (e(t.source.fromServer, "Unknown source."), l = t.source.tagged || i.serverCache.isFiltered() && !jt(t.path), c = Li(n, i, t.path, t.snap, r, o, l, a))
                } else if (s.type === $n.MERGE) {
                    const t = s;
                    t.source.fromUser ? c = function(e, t, n, i, s, r, o) {
                        let a = t;
                        return i.foreach(((i, c) => {
                            const l = Wt(n, i);
                            Fi(t, Dt(l)) && (a = Mi(e, a, l, c, s, r, o))
                        })), i.foreach(((i, c) => {
                            const l = Wt(n, i);
                            Fi(t, Dt(l)) || (a = Mi(e, a, l, c, s, r, o))
                        })), a
                    }(n, i, t.path, t.children, r, o, a) : (e(t.source.fromServer, "Unknown source."), l = t.source.tagged || i.serverCache.isFiltered(), c = qi(n, i, t.path, t.children, r, o, l, a))
                } else if (s.type === $n.ACK_USER_WRITE) {
                    const t = s;
                    c = t.revert ? function(t, n, i, s, r, o) {
                        let a;
                        if (null != Si(s, i)) return n; {
                            const c = new Ai(s, n, r),
                                l = n.eventCache.getNode();
                            let h;
                            if (jt(i) || ".priority" === Dt(i)) {
                                let i;
                                if (n.serverCache.isFullyInitialized()) i = Ti(s, ri(n));
                                else {
                                    const t = n.serverCache.getNode();
                                    e(t instanceof Tn, "serverChildren would be complete if leaf node"), i = ki(s, t)
                                }
                                i = i, h = t.filter.updateFullNode(l, i, o)
                            } else {
                                const e = Dt(i);
                                let r = Ni(s, e, n.serverCache);
                                null == r && n.serverCache.isCompleteForChild(e) && (r = l.getImmediateChild(e)), h = null != r ? t.filter.updateChild(l, e, r, Mt(i), c, o) : n.eventCache.getNode().hasChild(e) ? t.filter.updateChild(l, e, Tn.EMPTY_NODE, Mt(i), c, o) : l, h.isEmpty() && n.serverCache.isFullyInitialized() && (a = Ti(s, ri(n)), a.isLeafNode() && (h = t.filter.updateFullNode(h, a, o)))
                            }
                            return a = n.serverCache.isFullyInitialized() || null != Si(s, At()), ni(n, h, a, t.filter.filtersNodes())
                        }
                    }(n, i, t.path, r, o, a) : function(e, t, n, i, s, r, o) {
                        if (null != Si(s, n)) return t;
                        const a = t.serverCache.isFiltered(),
                            c = t.serverCache;
                        if (null != i.value) {
                            if (jt(n) && c.isFullyInitialized() || c.isCompleteForPath(n)) return Li(e, t, n, c.getNode().getChild(n), s, r, a, o);
                            if (jt(n)) {
                                let i = new ai(null);
                                return c.getNode().forEachChild(nn, ((e, t) => {
                                    i = i.set(new xt(e), t)
                                })), qi(e, t, n, i, s, r, a, o)
                            }
                            return t
                        } {
                            let l = new ai(null);
                            return i.foreach(((e, t) => {
                                const i = Wt(n, e);
                                c.isCompleteForPath(i) && (l = l.set(e, c.getNode().getChild(i)))
                            })), qi(e, t, n, l, s, r, a, o)
                        }
                    }(n, i, t.path, t.affectedTree, r, o, a)
                } else {
                    if (s.type !== $n.LISTEN_COMPLETE) throw t("Unknown operation type: " + s.type);
                    c = function(e, t, n, i, s) {
                        const r = t.serverCache;
                        return Di(e, ii(t, r.getNode(), r.isFullyInitialized() || jt(n), r.isFiltered()), n, i, xi, s)
                    }(n, i, s.path, r, a)
                }
                const h = a.getChanges();
                return function(e, t, n) {
                    const i = t.eventCache;
                    if (i.isFullyInitialized()) {
                        const s = i.getNode().isLeafNode() || i.getNode().isEmpty(),
                            r = si(e);
                        (n.length > 0 || !e.eventCache.isFullyInitialized() || s && !i.getNode().equals(r) || !i.getNode().getPriority().equals(r.getPriority())) && n.push(Rn(si(t)))
                    }
                }(i, c, h), {
                    viewCache: c,
                    changes: h
                }
            }(n.processor_, o, i, s, r);
        var c, l;
        return c = n.processor_, l = a.viewCache, e(l.eventCache.getNode().isIndexed(c.filter.getIndex()), "Event snap not indexed"), e(l.serverCache.getNode().isIndexed(c.filter.getIndex()), "Server snap not indexed"), e(a.viewCache.serverCache.isFullyInitialized() || !o.serverCache.isFullyInitialized(), "Once a server snap is complete, it should never go back"), n.viewCache_ = a.viewCache, zi(n, a.changes, a.viewCache.eventCache.getNode(), null)
    }

    function zi(e, t, n, i) {
        const s = i ? [i] : e.eventRegistrations_;
        return function(e, t, n, i) {
            const s = [],
                r = [];
            return t.forEach((t => {
                var n;
                "child_changed" === t.type && e.index_.indexedValueChanged(t.oldSnap, t.snapshotNode) && r.push((n = t.childName, {
                    type: "child_moved",
                    snapshotNode: t.snapshotNode,
                    childName: n
                }))
            })), ei(e, s, "child_removed", t, i, n), ei(e, s, "child_added", t, i, n), ei(e, s, "child_moved", r, i, n), ei(e, s, "child_changed", t, i, n), ei(e, s, "value", t, i, n), s
        }(e.eventGenerator_, t, n, s)
    }
    let $i, Ki;
    class Gi {
        constructor() {
            this.views = new Map
        }
    }

    function Yi(t, n, i, s) {
        const r = n.source.queryId;
        if (null !== r) {
            const o = t.views.get(r);
            return e(null != o, "SyncTree gave us an op for an invalid query."), Vi(o, n, i, s)
        } {
            let e = [];
            for (const r of t.views.values()) e = e.concat(Vi(r, n, i, s));
            return e
        }
    }

    function Ji(e, t, n, i, s, r) {
        const o = function(e, t, n, i, s) {
            const r = t._queryIdentifier,
                o = e.views.get(r);
            if (!o) {
                let e = Ti(n, s ? i : null),
                    r = !1;
                e ? r = !0 : i instanceof Tn ? (e = ki(n, i), r = !1) : (e = Tn.EMPTY_NODE, r = !1);
                const o = ti(new Xn(e, r, !1), new Xn(i, s, !1));
                return new Wi(t, o)
            }
            return o
        }(e, t, i, s, r);
        return e.views.has(t._queryIdentifier) || e.views.set(t._queryIdentifier, o),
            function(e, t) {
                e.eventRegistrations_.push(t)
            }(o, n),
            function(e, t) {
                const n = e.viewCache_.eventCache,
                    i = [];
                return n.getNode().isLeafNode() || n.getNode().forEachChild(gn, ((e, t) => {
                    i.push(Pn(e, t))
                })), n.isFullyInitialized() && i.push(Rn(n.getNode())), zi(e, i, n.getNode(), t)
            }(o, n)
    }

    function Qi(e) {
        const t = [];
        for (const n of e.views.values()) n.query._queryParams.loadsAllData() || t.push(n);
        return t
    }

    function Xi(e, t) {
        let n = null;
        for (const i of e.views.values()) n = n || ji(i, t);
        return n
    }

    function Zi(e, t) {
        if (t._queryParams.loadsAllData()) return ns(e); {
            const n = t._queryIdentifier;
            return e.views.get(n)
        }
    }

    function es(e, t) {
        return null != Zi(e, t)
    }

    function ts(e) {
        return null != ns(e)
    }

    function ns(e) {
        for (const t of e.views.values())
            if (t.query._queryParams.loadsAllData()) return t;
        return null
    }
    let is = 1;
    class ss {
        constructor(e) {
            this.listenProvider_ = e, this.syncPointTree_ = new ai(null), this.pendingWriteTree_ = {
                visibleWrites: ci.empty(),
                allWrites: [],
                lastWriteId: -1
            }, this.tagToQueryMap = new Map, this.queryToTagMap = new Map
        }
    }

    function rs(t, n, i, s, r) {
        return function(t, n, i, s, r) {
            e(s > t.lastWriteId, "Stacking an older write on top of newer ones"), void 0 === r && (r = !0), t.allWrites.push({
                path: n,
                snap: i,
                writeId: s,
                visible: r
            }), r && (t.visibleWrites = li(t.visibleWrites, n, i)), t.lastWriteId = s
        }(t.pendingWriteTree_, n, i, s, r), r ? us(t, new Jn({
            fromUser: !0,
            fromServer: !1,
            queryId: null,
            tagged: !1
        }, n, i)) : []
    }

    function os(t, n, i = !1) {
        const s = function(e, t) {
            for (let n = 0; n < e.allWrites.length; n++) {
                const i = e.allWrites[n];
                if (i.writeId === t) return i
            }
            return null
        }(t.pendingWriteTree_, n);
        if (function(t, n) {
            const i = t.allWrites.findIndex((e => e.writeId === n));
            e(i >= 0, "removeWrite called with nonexistent writeId.");
            const s = t.allWrites[i];
            t.allWrites.splice(i, 1);
            let r = s.visible,
                o = !1,
                a = t.allWrites.length - 1;
            for (; r && a >= 0;) {
                const e = t.allWrites[a];
                e.visible && (a >= i && wi(e, s.path) ? r = !1 : zt(s.path, e.path) && (o = !0)), a--
            }
            return !!r && (o ? (function(e) {
                e.visibleWrites = Ii(e.allWrites, bi, At()), e.allWrites.length > 0 ? e.lastWriteId = e.allWrites[e.allWrites.length - 1].writeId : e.lastWriteId = -1
            }(t), !0) : (s.snap ? t.visibleWrites = ui(t.visibleWrites, s.path) : st(s.children, (e => {
                t.visibleWrites = ui(t.visibleWrites, Wt(s.path, e))
            })), !0))
        }(t.pendingWriteTree_, n)) {
            let e = new ai(null);
            return null != s.snap ? e = e.set(At(), !0) : st(s.children, (t => {
                e = e.set(new xt(t), !0)
            })), us(t, new Gn(s.path, e, i))
        }
        return []
    }

    function as(e, t, n) {
        return us(e, new Jn({
            fromUser: !1,
            fromServer: !0,
            queryId: null,
            tagged: !1
        }, t, n))
    }

    function cs(t, n, i, s) {
        const r = n._path,
            o = t.syncPointTree_.get(r);
        let a = [];
        if (o && ("default" === n._queryIdentifier || es(o, n))) {
            const c = function(t, n, i, s) {
                const r = n._queryIdentifier,
                    o = [];
                let a = [];
                const c = ts(t);
                if ("default" === r)
                    for (const [e, n] of t.views.entries()) a = a.concat(Hi(n, i, s)), Bi(n) && (t.views.delete(e), n.query._queryParams.loadsAllData() || o.push(n.query));
                else {
                    const e = t.views.get(r);
                    e && (a = a.concat(Hi(e, i, s)), Bi(e) && (t.views.delete(r), e.query._queryParams.loadsAllData() || o.push(e.query)))
                }
                return c && !ts(t) && o.push(new(e($i, "Reference.ts has not been loaded"), $i)(n._repo, n._path)), {
                    removed: o,
                    events: a
                }
            }(o, n, i, s);
            0 === o.views.size && (t.syncPointTree_ = t.syncPointTree_.remove(r));
            const l = c.removed;
            a = c.events;
            const h = -1 !== l.findIndex((e => e._queryParams.loadsAllData())),
                u = t.syncPointTree_.findOnPath(r, ((e, t) => ts(t)));
            if (h && !u) {
                const e = t.syncPointTree_.subtree(r);
                if (!e.isEmpty()) {
                    const n = function(e) {
                        return e.fold(((e, t, n) => {
                            if (t && ts(t)) return [ns(t)]; {
                                let e = [];
                                return t && (e = Qi(t)), st(n, ((t, n) => {
                                    e = e.concat(n)
                                })), e
                            }
                        }))
                    }(e);
                    for (let e = 0; e < n.length; ++e) {
                        const i = n[e],
                            s = i.query,
                            r = fs(t, i);
                        t.listenProvider_.startListening(ws(s), ms(t, s), r.hashFn, r.onComplete)
                    }
                }
            }
            if (!u && l.length > 0 && !s)
                if (h) {
                    const e = null;
                    t.listenProvider_.stopListening(ws(n), e)
                } else l.forEach((e => {
                    const n = t.queryToTagMap.get(gs(e));
                    t.listenProvider_.stopListening(ws(e), n)
                }));
            ! function(e, t) {
                for (let n = 0; n < t.length; ++n) {
                    const i = t[n];
                    if (!i._queryParams.loadsAllData()) {
                        const t = gs(i),
                            n = e.queryToTagMap.get(t);
                        e.queryToTagMap.delete(t), e.tagToQueryMap.delete(n)
                    }
                }
            }(t, l)
        }
        return a
    }

    function ls(t, n, i) {
        const s = n._path;
        let r = null,
            o = !1;
        t.syncPointTree_.foreachOnPath(s, ((e, t) => {
            const n = Bt(e, s);
            r = r || Xi(t, n), o = o || ts(t)
        }));
        let a, c = t.syncPointTree_.get(s);
        c ? (o = o || ts(c), r = r || Xi(c, At())) : (c = new Gi, t.syncPointTree_ = t.syncPointTree_.set(s, c)), null != r ? a = !0 : (a = !1, r = Tn.EMPTY_NODE, t.syncPointTree_.subtree(s).foreachChild(((e, t) => {
            const n = Xi(t, At());
            n && (r = r.updateImmediateChild(e, n))
        })));
        const l = es(c, n);
        if (!l && !n._queryParams.loadsAllData()) {
            const i = gs(n);
            e(!t.queryToTagMap.has(i), "View does not exist, but we have a tag");
            const s = is++;
            t.queryToTagMap.set(i, s), t.tagToQueryMap.set(s, i)
        }
        let h = Ji(c, n, i, yi(t.pendingWriteTree_, s), r, a);
        if (!l && !o) {
            const i = Zi(c, n);
            h = h.concat(function(t, n, i) {
                const s = n._path,
                    r = ms(t, n),
                    o = fs(t, i),
                    a = t.listenProvider_.startListening(ws(n), r, o.hashFn, o.onComplete),
                    c = t.syncPointTree_.subtree(s);
                if (r) e(!ts(c.value), "If we're adding a query, it shouldn't be shadowed");
                else {
                    const e = c.fold(((e, t, n) => {
                        if (!jt(e) && t && ts(t)) return [ns(t).query]; {
                            let e = [];
                            return t && (e = e.concat(Qi(t).map((e => e.query)))), st(n, ((t, n) => {
                                e = e.concat(n)
                            })), e
                        }
                    }));
                    for (let n = 0; n < e.length; ++n) {
                        const i = e[n];
                        t.listenProvider_.stopListening(ws(i), ms(t, i))
                    }
                }
                return a
            }(t, n, i))
        }
        return h
    }

    function hs(e, t, n) {
        const i = e.pendingWriteTree_,
            s = e.syncPointTree_.findOnPath(t, ((e, n) => {
                const i = Xi(n, Bt(e, t));
                if (i) return i
            }));
        return Ci(i, t, s, n, !0)
    }

    function us(e, t) {
        return ds(t, e.syncPointTree_, null, yi(e.pendingWriteTree_, At()))
    }

    function ds(e, t, n, i) {
        if (jt(e.path)) return ps(e, t, n, i); {
            const s = t.get(At());
            null == n && null != s && (n = Xi(s, At()));
            let r = [];
            const o = Dt(e.path),
                a = e.operationForChild(o),
                c = t.children.get(o);
            if (c && a) {
                const e = n ? n.getImmediateChild(o) : null,
                    t = Ri(i, o);
                r = r.concat(ds(a, c, e, t))
            }
            return s && (r = r.concat(Yi(s, e, i, n))), r
        }
    }

    function ps(e, t, n, i) {
        const s = t.get(At());
        null == n && null != s && (n = Xi(s, At()));
        let r = [];
        return t.children.inorderTraversal(((t, s) => {
            const o = n ? n.getImmediateChild(t) : null,
                a = Ri(i, t),
                c = e.operationForChild(t);
            c && (r = r.concat(ps(c, s, o, a)))
        })), s && (r = r.concat(Yi(s, e, i, n))), r
    }

    function fs(e, t) {
        const n = t.query,
            i = ms(e, n);
        return {
            hashFn: () => {
                const e = function(e) {
                    return e.viewCache_.serverCache.getNode()
                }(t) || Tn.EMPTY_NODE;
                return e.hash()
            },
            onComplete: t => {
                if ("ok" === t) return i ? function(e, t, n) {
                    const i = _s(e, n);
                    if (i) {
                        const n = vs(i),
                            s = n.path,
                            r = n.queryId,
                            o = Bt(s, t);
                        return ys(e, s, new Yn(Kn(r), o))
                    }
                    return []
                }(e, n._path, i) : function(e, t) {
                    return us(e, new Yn({
                        fromUser: !1,
                        fromServer: !0,
                        queryId: null,
                        tagged: !1
                    }, t))
                }(e, n._path); {
                    const i = function(e, t) {
                        let n = "Unknown Error";
                        "too_big" === e ? n = "The data requested exceeds the maximum size that can be accessed with a single request." : "permission_denied" === e ? n = "Client doesn't have permission to access the desired data." : "unavailable" === e && (n = "The service is unavailable");
                        const i = new Error(e + " at " + t._path.toString() + ": " + n);
                        return i.code = e.toUpperCase(), i
                    }(t, n);
                    return cs(e, n, null, i)
                }
            }
        }
    }

    function ms(e, t) {
        const n = gs(t);
        return e.queryToTagMap.get(n)
    }

    function gs(e) {
        return e._path.toString() + "$" + e._queryIdentifier
    }

    function _s(e, t) {
        return e.tagToQueryMap.get(t)
    }

    function vs(t) {
        const n = t.indexOf("$");
        return e(-1 !== n && n < t.length - 1, "Bad queryKey."), {
            queryId: t.substr(n + 1),
            path: new xt(t.substr(0, n))
        }
    }

    function ys(t, n, i) {
        const s = t.syncPointTree_.get(n);
        return e(s, "Missing sync point for query tag that we're tracking"), Yi(s, i, yi(t.pendingWriteTree_, n), null)
    }

    function ws(t) {
        return t._queryParams.loadsAllData() && !t._queryParams.isDefault() ? new(e(Ki, "Reference.ts has not been loaded"), Ki)(t._repo, t._path) : t
    }
    class bs {
        constructor(e) {
            this.node_ = e
        }
        getImmediateChild(e) {
            const t = this.node_.getImmediateChild(e);
            return new bs(t)
        }
        node() {
            return this.node_
        }
    }
    class Is {
        constructor(e, t) {
            this.syncTree_ = e, this.path_ = t
        }
        getImmediateChild(e) {
            const t = Wt(this.path_, e);
            return new Is(this.syncTree_, t)
        }
        node() {
            return hs(this.syncTree_, this.path_)
        }
    }
    const Cs = function(t, n, i) {
            return t && "object" == typeof t ? (e(".sv" in t, "Unexpected leaf node or priority contents"), "string" == typeof t[".sv"] ? Ts(t[".sv"], n, i) : "object" == typeof t[".sv"] ? ks(t[".sv"], n) : void e(!1, "Unexpected server value: " + JSON.stringify(t, null, 2))) : t
        },
        Ts = function(t, n, i) {
            if ("timestamp" === t) return i.timestamp;
            e(!1, "Unexpected server value: " + t)
        },
        ks = function(t, n, i) {
            t.hasOwnProperty("increment") || e(!1, "Unexpected server value: " + JSON.stringify(t, null, 2));
            const s = t.increment;
            "number" != typeof s && e(!1, "Unexpected increment value: " + s);
            const r = n.node();
            if (e(null != r, "Expected ChildrenNode.EMPTY_NODE for nulls"), !r.isLeafNode()) return s;
            const o = r.getValue();
            return "number" != typeof o ? s : o + s
        },
        Es = function(e, t, n, i) {
            return Ns(t, new Is(n, e), i)
        },
        Ss = function(e, t, n) {
            return Ns(e, new bs(t), n)
        };

    function Ns(e, t, n) {
        const i = e.getPriority().val(),
            s = Cs(i, t.getImmediateChild(".priority"), n);
        let r;
        if (e.isLeafNode()) {
            const i = e,
                r = Cs(i.getValue(), t, n);
            return r !== i.getValue() || s !== i.getPriority().val() ? new mn(r, En(s)) : e
        } {
            const i = e;
            return r = i, s !== i.getPriority().val() && (r = r.updatePriority(new mn(s))), i.forEachChild(gn, ((e, i) => {
                const s = Ns(i, t.getImmediateChild(e), n);
                s !== i && (r = r.updateImmediateChild(e, s))
            })), r
        }
    }
    class Rs {
        constructor(e = "", t = null, n = {
            children: {},
            childCount: 0
        }) {
            this.name = e, this.parent = t, this.node = n
        }
    }

    function Ps(e, t) {
        let n = t instanceof xt ? t : new xt(t),
            i = e,
            s = Dt(n);
        for (; null !== s;) {
            const e = w(i.node.children, s) || {
                children: {},
                childCount: 0
            };
            i = new Rs(s, i, e), n = Mt(n), s = Dt(n)
        }
        return i
    }

    function Os(e) {
        return e.node.value
    }

    function xs(e, t) {
        e.node.value = t, Fs(e)
    }

    function As(e) {
        return e.node.childCount > 0
    }

    function Ds(e, t) {
        st(e.node.children, ((n, i) => {
            t(new Rs(n, e, i))
        }))
    }

    function Ls(e, t, n, i) {
        n && !i && t(e), Ds(e, (e => {
            Ls(e, t, !0, i)
        })), n && i && t(e)
    }

    function Ms(e) {
        return new xt(null === e.parent ? e.name : Ms(e.parent) + "/" + e.name)
    }

    function Fs(e) {
        null !== e.parent && function(e, t, n) {
            const i = function(e) {
                    return void 0 === Os(e) && !As(e)
                }(n),
                s = y(e.node.children, t);
            i && s ? (delete e.node.children[t], e.node.childCount--, Fs(e)) : i || s || (e.node.children[t] = n.node, e.node.childCount++, Fs(e))
        }(e.parent, e.name, e)
    }
    const Us = /[\[\].#$\/\u0000-\u001F\u007F]/,
        qs = /[\[\].#$\u0000-\u001F\u007F]/,
        Ws = 10485760,
        js = function(e) {
            return "string" == typeof e && 0 !== e.length && !Us.test(e)
        },
        Bs = function(e) {
            return "string" == typeof e && 0 !== e.length && !qs.test(e)
        },
        Hs = function(e, t, n) {
            const i = n instanceof xt ? new $t(n, e) : n;
            if (void 0 === t) throw new Error(e + "contains undefined " + Gt(i));
            if ("function" == typeof t) throw new Error(e + "contains a function " + Gt(i) + " with contents = " + t.toString());
            if (Je(t)) throw new Error(e + "contains " + t.toString() + " " + Gt(i));
            if ("string" == typeof t && t.length > Ws / 3 && x(t) > Ws) throw new Error(e + "contains a string greater than 10485760 utf8 bytes " + Gt(i) + " ('" + t.substring(0, 50) + "...')");
            if (t && "object" == typeof t) {
                let n = !1,
                    s = !1;
                if (st(t, ((t, r) => {
                    if (".value" === t) n = !0;
                    else if (".priority" !== t && ".sv" !== t && (s = !0, !js(t))) throw new Error(e + " contains an invalid key (" + t + ") " + Gt(i) + '.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');
                    ! function(e, t) {
                        e.parts_.length > 0 && (e.byteLength_ += 1), e.parts_.push(t), e.byteLength_ += x(t), Kt(e)
                    }(i, t), Hs(e, r, i),
                        function(e) {
                            const t = e.parts_.pop();
                            e.byteLength_ -= x(t), e.parts_.length > 0 && (e.byteLength_ -= 1)
                        }(i)
                })), n && s) throw new Error(e + ' contains ".value" child ' + Gt(i) + " in addition to actual children.")
            }
        },
        Vs = function(e, t, n, i) {
            if (i && void 0 === t) return;
            const s = O(e, "values");
            if (!t || "object" != typeof t || Array.isArray(t)) throw new Error(s + " must be an object containing the children to replace.");
            const r = [];
            st(t, ((e, t) => {
                const i = new xt(e);
                if (Hs(s, t, Wt(n, i)), ".priority" === Ft(i) && !(null === (o = t) || "string" == typeof o || "number" == typeof o && !Je(o) || o && "object" == typeof o && y(o, ".sv"))) throw new Error(s + "contains an invalid value for '" + i.toString() + "', which must be a valid Firebase priority (a string, finite number, server value, or null).");
                var o;
                r.push(i)
            })),
                function(e, t) {
                    let n, i;
                    for (n = 0; n < t.length; n++) {
                        i = t[n];
                        const s = Ut(i);
                        for (let t = 0; t < s.length; t++)
                            if (".priority" === s[t] && t === s.length - 1);
                            else if (!js(s[t])) throw new Error(e + "contains an invalid key (" + s[t] + ") in path " + i.toString() + '. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"')
                    }
                    t.sort(Ht);
                    let s = null;
                    for (n = 0; n < t.length; n++) {
                        if (i = t[n], null !== s && zt(s, i)) throw new Error(e + "contains a path " + s.toString() + " that is ancestor of another path " + i.toString());
                        s = i
                    }
                }(s, r)
        },
        zs = function(e, t, n, i) {
            if (!(i && void 0 === n || Bs(n))) throw new Error(O(e, t) + 'was an invalid path = "' + n + '". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')
        };
    class $s {
        constructor() {
            this.eventLists_ = [], this.recursionDepth_ = 0
        }
    }

    function Ks(e, t) {
        let n = null;
        for (let i = 0; i < t.length; i++) {
            const s = t[i],
                r = s.getPath();
            null === n || Vt(r, n.path) || (e.eventLists_.push(n), n = null), null === n && (n = {
                events: [],
                path: r
            }), n.events.push(s)
        }
        n && e.eventLists_.push(n)
    }

    function Gs(e, t, n) {
        Ks(e, n), Js(e, (e => Vt(e, t)))
    }

    function Ys(e, t, n) {
        Ks(e, n), Js(e, (e => zt(e, t) || zt(t, e)))
    }

    function Js(e, t) {
        e.recursionDepth_++;
        let n = !0;
        for (let i = 0; i < e.eventLists_.length; i++) {
            const s = e.eventLists_[i];
            s && (t(s.path) ? (Qs(e.eventLists_[i]), e.eventLists_[i] = null) : n = !1)
        }
        n && (e.eventLists_ = []), e.recursionDepth_--
    }

    function Qs(e) {
        for (let t = 0; t < e.events.length; t++) {
            const n = e.events[t];
            if (null !== n) {
                e.events[t] = null;
                const i = n.getEventRunner();
                He && ze("event: " + n.toString()), ct(i)
            }
        }
    }
    class Xs {
        constructor(e, t, n, i) {
            this.repoInfo_ = e, this.forceRestClient_ = t, this.authTokenProvider_ = n, this.appCheckProvider_ = i, this.dataUpdateCount = 0, this.statsListener_ = null, this.eventQueue_ = new $s, this.nextWriteId_ = 1, this.interceptServerDataCallback_ = null, this.onDisconnect_ = jn(), this.transactionQueueTree_ = new Rs, this.persistentConnection_ = null, this.key = this.repoInfo_.toURLString()
        }
        toString() {
            return (this.repoInfo_.secure ? "https://" : "http://") + this.repoInfo_.host
        }
    }

    function Zs(e, t, n) {
        if (e.stats_ = bt(e.repoInfo_), e.forceRestClient_ || ("object" == typeof window && window.navigator && window.navigator.userAgent || "").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i) >= 0) e.server_ = new qn(e.repoInfo_, ((t, n, i, s) => {
            nr(e, t, n, i, s)
        }), e.authTokenProvider_, e.appCheckProvider_), setTimeout((() => ir(e, !0)), 0);
        else {
            if (null != n) {
                if ("object" != typeof n) throw new Error("Only objects are supported for option databaseAuthVariableOverride");
                try {
                    _(n)
                } catch (e) {
                    throw new Error("Invalid authOverride provided: " + e)
                }
            }
            e.persistentConnection_ = new Qt(e.repoInfo_, t, ((t, n, i, s) => {
                nr(e, t, n, i, s)
            }), (t => {
                ir(e, t)
            }), (t => {
                ! function(e, t) {
                    st(t, ((t, n) => {
                        sr(e, t, n)
                    }))
                }(e, t)
            }), e.authTokenProvider_, e.appCheckProvider_, n), e.server_ = e.persistentConnection_
        }
        e.authTokenProvider_.addTokenChangeListener((t => {
            e.server_.refreshAuthToken(t)
        })), e.appCheckProvider_.addTokenChangeListener((t => {
            e.server_.refreshAppCheckToken(t.token)
        })), e.statsReporter_ = function(t, n) {
            const i = t.toString();
            return wt[i] || (wt[i] = new zn(e.stats_, e.server_)), wt[i]
        }(e.repoInfo_), e.infoData_ = new Wn, e.infoSyncTree_ = new ss({
            startListening: (t, n, i, s) => {
                let r = [];
                const o = e.infoData_.getNode(t._path);
                return o.isEmpty() || (r = as(e.infoSyncTree_, t._path, o), setTimeout((() => {
                    s("ok")
                }), 0)), r
            },
            stopListening: () => {}
        }), sr(e, "connected", !1), e.serverSyncTree_ = new ss({
            startListening: (t, n, i, s) => (e.server_.listen(t, i, n, ((n, i) => {
                const r = s(n, i);
                Ys(e.eventQueue_, t._path, r)
            })), []),
            stopListening: (t, n) => {
                e.server_.unlisten(t, n)
            }
        })
    }

    function er(e) {
        const t = e.infoData_.getNode(new xt(".info/serverTimeOffset")).val() || 0;
        return (new Date).getTime() + t
    }

    function tr(e) {
        return (t = (t = {
            timestamp: er(e)
        }) || {}).timestamp = t.timestamp || (new Date).getTime(), t;
        var t
    }

    function nr(e, t, n, i, s) {
        e.dataUpdateCount++;
        const r = new xt(t);
        n = e.interceptServerDataCallback_ ? e.interceptServerDataCallback_(t, n) : n;
        let o = [];
        if (s)
            if (i) {
                const t = I(n, (e => En(e)));
                o = function(e, t, n, i) {
                    const s = _s(e, i);
                    if (s) {
                        const i = vs(s),
                            r = i.path,
                            o = i.queryId,
                            a = Bt(r, t),
                            c = ai.fromObject(n);
                        return ys(e, r, new Qn(Kn(o), a, c))
                    }
                    return []
                }(e.serverSyncTree_, r, t, s)
            } else {
                const t = En(n);
                o = function(e, t, n, i) {
                    const s = _s(e, i);
                    if (null != s) {
                        const i = vs(s),
                            r = i.path,
                            o = i.queryId,
                            a = Bt(r, t);
                        return ys(e, r, new Jn(Kn(o), a, n))
                    }
                    return []
                }(e.serverSyncTree_, r, t, s)
            }
        else if (i) {
            const t = I(n, (e => En(e)));
            o = function(e, t, n) {
                const i = ai.fromObject(n);
                return us(e, new Qn({
                    fromUser: !1,
                    fromServer: !0,
                    queryId: null,
                    tagged: !1
                }, t, i))
            }(e.serverSyncTree_, r, t)
        } else {
            const t = En(n);
            o = as(e.serverSyncTree_, r, t)
        }
        let a = r;
        o.length > 0 && (a = ur(e, r)), Ys(e.eventQueue_, a, o)
    }

    function ir(e, t) {
        sr(e, "connected", t), !1 === t && function(e) {
            ar(e, "onDisconnectEvents");
            const t = tr(e),
                n = jn();
            Hn(e.onDisconnect_, At(), ((i, s) => {
                const r = Es(i, s, e.serverSyncTree_, t);
                Bn(n, i, r)
            }));
            let i = [];
            Hn(n, At(), ((t, n) => {
                i = i.concat(as(e.serverSyncTree_, t, n));
                const s = gr(e, t);
                ur(e, s)
            })), e.onDisconnect_ = jn(), Ys(e.eventQueue_, At(), i)
        }(e)
    }

    function sr(e, t, n) {
        const i = new xt("/.info/" + t),
            s = En(n);
        e.infoData_.updateSnapshot(i, s);
        const r = as(e.infoSyncTree_, i, s);
        Ys(e.eventQueue_, i, r)
    }

    function rr(e) {
        return e.nextWriteId_++
    }

    function or(e, t, n) {
        let i;
        i = ".info" === Dt(t._path) ? cs(e.infoSyncTree_, t, n) : cs(e.serverSyncTree_, t, n), Gs(e.eventQueue_, t._path, i)
    }

    function ar(e, ...t) {
        let n = "";
        e.persistentConnection_ && (n = e.persistentConnection_.id + ":"), ze(n, ...t)
    }

    function cr(e, t, n, i) {
        t && ct((() => {
            if ("ok" === n) t(null);
            else {
                const e = (n || "error").toUpperCase();
                let s = e;
                i && (s += ": " + i);
                const r = new Error(s);
                r.code = e, t(r)
            }
        }))
    }

    function lr(e, t, n) {
        return hs(e.serverSyncTree_, t, n) || Tn.EMPTY_NODE
    }

    function hr(t, n = t.transactionQueueTree_) {
        if (n || mr(t, n), Os(n)) {
            const i = pr(t, n);
            e(i.length > 0, "Sending zero length transaction queue"), i.every((e => 0 === e.status)) && function(t, n, i) {
                const s = i.map((e => e.currentWriteId)),
                    r = lr(t, n, s);
                let o = r;
                const a = r.hash();
                for (let t = 0; t < i.length; t++) {
                    const s = i[t];
                    e(0 === s.status, "tryToSendTransactionQueue_: items in queue should all be run."), s.status = 1, s.retryCount++;
                    const r = Bt(n, s.path);
                    o = o.updateChild(r, s.currentOutputSnapshotRaw)
                }
                const c = o.val(!0),
                    l = n;
                t.server_.put(l.toString(), c, (e => {
                    ar(t, "transaction put response", {
                        path: l.toString(),
                        status: e
                    });
                    let s = [];
                    if ("ok" === e) {
                        const e = [];
                        for (let n = 0; n < i.length; n++) i[n].status = 2, s = s.concat(os(t.serverSyncTree_, i[n].currentWriteId)), i[n].onComplete && e.push((() => i[n].onComplete(null, !0, i[n].currentOutputSnapshotResolved))), i[n].unwatcher();
                        mr(t, Ps(t.transactionQueueTree_, n)), hr(t, t.transactionQueueTree_), Ys(t.eventQueue_, n, s);
                        for (let t = 0; t < e.length; t++) ct(e[t])
                    } else {
                        if ("datastale" === e)
                            for (let e = 0; e < i.length; e++) 3 === i[e].status ? i[e].status = 4 : i[e].status = 0;
                        else {
                            Ye("transaction at " + l.toString() + " failed: " + e);
                            for (let t = 0; t < i.length; t++) i[t].status = 4, i[t].abortReason = e
                        }
                        ur(t, n)
                    }
                }), a)
            }(t, Ms(n), i)
        } else As(n) && Ds(n, (e => {
            hr(t, e)
        }))
    }

    function ur(t, n) {
        const i = dr(t, n),
            s = Ms(i);
        return function(t, n, i) {
            if (0 === n.length) return;
            const s = [];
            let r = [];
            const o = n.filter((e => 0 === e.status)).map((e => e.currentWriteId));
            for (let c = 0; c < n.length; c++) {
                const l = n[c],
                    h = Bt(i, l.path);
                let u, d = !1;
                if (e(null !== h, "rerunTransactionsUnderNode_: relativePath should not be null."), 4 === l.status) d = !0, u = l.abortReason, r = r.concat(os(t.serverSyncTree_, l.currentWriteId, !0));
                else if (0 === l.status)
                    if (l.retryCount >= 25) d = !0, u = "maxretry", r = r.concat(os(t.serverSyncTree_, l.currentWriteId, !0));
                    else {
                        const e = lr(t, l.path, o);
                        l.currentInputSnapshot = e;
                        const i = n[c].update(e.val());
                        if (void 0 !== i) {
                            Hs("transaction failed: Data returned ", i, l.path);
                            let n = En(i);
                            "object" == typeof i && null != i && y(i, ".priority") || (n = n.updatePriority(e.getPriority()));
                            const s = l.currentWriteId,
                                a = tr(t),
                                c = Ss(n, e, a);
                            l.currentOutputSnapshotRaw = n, l.currentOutputSnapshotResolved = c, l.currentWriteId = rr(t), o.splice(o.indexOf(s), 1), r = r.concat(rs(t.serverSyncTree_, l.path, c, l.currentWriteId, l.applyLocally)), r = r.concat(os(t.serverSyncTree_, s, !0))
                        } else d = !0, u = "nodata", r = r.concat(os(t.serverSyncTree_, l.currentWriteId, !0))
                    } Ys(t.eventQueue_, i, r), r = [], d && (n[c].status = 2, a = n[c].unwatcher, setTimeout(a, Math.floor(0)), n[c].onComplete && ("nodata" === u ? s.push((() => n[c].onComplete(null, !1, n[c].currentInputSnapshot))) : s.push((() => n[c].onComplete(new Error(u), !1, null)))))
            }
            var a;
            mr(t, t.transactionQueueTree_);
            for (let e = 0; e < s.length; e++) ct(s[e]);
            hr(t, t.transactionQueueTree_)
        }(t, pr(t, i), s), s
    }

    function dr(e, t) {
        let n, i = e.transactionQueueTree_;
        for (n = Dt(t); null !== n && void 0 === Os(i);) i = Ps(i, n), n = Dt(t = Mt(t));
        return i
    }

    function pr(e, t) {
        const n = [];
        return fr(e, t, n), n.sort(((e, t) => e.order - t.order)), n
    }

    function fr(e, t, n) {
        const i = Os(t);
        if (i)
            for (let e = 0; e < i.length; e++) n.push(i[e]);
        Ds(t, (t => {
            fr(e, t, n)
        }))
    }

    function mr(e, t) {
        const n = Os(t);
        if (n) {
            let e = 0;
            for (let t = 0; t < n.length; t++) 2 !== n[t].status && (n[e] = n[t], e++);
            n.length = e, xs(t, n.length > 0 ? n : void 0)
        }
        Ds(t, (t => {
            mr(e, t)
        }))
    }

    function gr(e, t) {
        const n = Ms(dr(e, t)),
            i = Ps(e.transactionQueueTree_, t);
        return function(e, t, n) {
            let i = e.parent;
            for (; null !== i;) {
                if (t(i)) return !0;
                i = i.parent
            }
        }(i, (t => {
            _r(e, t)
        })), _r(e, i), Ls(i, (t => {
            _r(e, t)
        })), n
    }

    function _r(t, n) {
        const i = Os(n);
        if (i) {
            const s = [];
            let r = [],
                o = -1;
            for (let n = 0; n < i.length; n++) 3 === i[n].status || (1 === i[n].status ? (e(o === n - 1, "All SENT items should be at beginning of queue."), o = n, i[n].status = 3, i[n].abortReason = "set") : (e(0 === i[n].status, "Unexpected transaction status in abort"), i[n].unwatcher(), r = r.concat(os(t.serverSyncTree_, i[n].currentWriteId, !0)), i[n].onComplete && s.push(i[n].onComplete.bind(null, new Error("set"), !1, null)))); - 1 === o ? xs(n, void 0) : i.length = o + 1, Ys(t.eventQueue_, Ms(n), r);
            for (let e = 0; e < s.length; e++) ct(s[e])
        }
    }
    const vr = function(e, t) {
            const n = yr(e),
                i = n.namespace;
            "firebase.com" === n.domain && Ge(n.host + " is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"), i && "undefined" !== i || "localhost" === n.domain || Ge("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"), n.secure || "undefined" != typeof window && window.location && window.location.protocol && -1 !== window.location.protocol.indexOf("https:") && Ye("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");
            const s = "ws" === n.scheme || "wss" === n.scheme;
            return {
                repoInfo: new gt(n.host, n.secure, i, s, t, "", i !== n.subdomain),
                path: new xt(n.pathString)
            }
        },
        yr = function(e) {
            let t = "",
                n = "",
                i = "",
                s = "",
                r = "",
                o = !0,
                a = "https",
                c = 443;
            if ("string" == typeof e) {
                let l = e.indexOf("//");
                l >= 0 && (a = e.substring(0, l - 1), e = e.substring(l + 2));
                let h = e.indexOf("/"); - 1 === h && (h = e.length);
                let u = e.indexOf("?"); - 1 === u && (u = e.length), t = e.substring(0, Math.min(h, u)), h < u && (s = function(e) {
                    let t = "";
                    const n = e.split("/");
                    for (let e = 0; e < n.length; e++)
                        if (n[e].length > 0) {
                            let i = n[e];
                            try {
                                i = decodeURIComponent(i.replace(/\+/g, " "))
                            } catch (e) {}
                            t += "/" + i
                        } return t
                }(e.substring(h, u)));
                const d = function(e) {
                    const t = {};
                    "?" === e.charAt(0) && (e = e.substring(1));
                    for (const n of e.split("&")) {
                        if (0 === n.length) continue;
                        const i = n.split("=");
                        2 === i.length ? t[decodeURIComponent(i[0])] = decodeURIComponent(i[1]) : Ye(`Invalid query segment '${n}' in query '${e}'`)
                    }
                    return t
                }(e.substring(Math.min(e.length, u)));
                l = t.indexOf(":"), l >= 0 ? (o = "https" === a || "wss" === a, c = parseInt(t.substring(l + 1), 10)) : l = t.length;
                const p = t.slice(0, l);
                if ("localhost" === p.toLowerCase()) n = "localhost";
                else if (p.split(".").length <= 2) n = p;
                else {
                    const e = t.indexOf(".");
                    i = t.substring(0, e).toLowerCase(), n = t.substring(e + 1), r = i
                }
                "ns" in d && (r = d.ns)
            }
            return {
                host: t,
                port: c,
                domain: n,
                subdomain: i,
                secure: o,
                scheme: a,
                pathString: s,
                namespace: r
            }
        };
    class wr {
        constructor(e, t, n, i) {
            this.eventType = e, this.eventRegistration = t, this.snapshot = n, this.prevName = i
        }
        getPath() {
            const e = this.snapshot.ref;
            return "value" === this.eventType ? e._path : e.parent._path
        }
        getEventType() {
            return this.eventType
        }
        getEventRunner() {
            return this.eventRegistration.getEventRunner(this)
        }
        toString() {
            return this.getPath().toString() + ":" + this.eventType + ":" + _(this.snapshot.exportVal())
        }
    }
    class br {
        constructor(e, t, n) {
            this.eventRegistration = e, this.error = t, this.path = n
        }
        getPath() {
            return this.path
        }
        getEventType() {
            return "cancel"
        }
        getEventRunner() {
            return this.eventRegistration.getEventRunner(this)
        }
        toString() {
            return this.path.toString() + ":cancel"
        }
    }
    class Ir {
        constructor(e, t) {
            this.snapshotCallback = e, this.cancelCallback = t
        }
        onValue(e, t) {
            this.snapshotCallback.call(null, e, t)
        }
        onCancel(t) {
            return e(this.hasCancelCallback, "Raising a cancel event on a listener with no cancel callback"), this.cancelCallback.call(null, t)
        }
        get hasCancelCallback() {
            return !!this.cancelCallback
        }
        matches(e) {
            return this.snapshotCallback === e.snapshotCallback || void 0 !== this.snapshotCallback.userCallback && this.snapshotCallback.userCallback === e.snapshotCallback.userCallback && this.snapshotCallback.context === e.snapshotCallback.context
        }
    }
    class Cr {
        constructor(e, t, n, i) {
            this._repo = e, this._path = t, this._queryParams = n, this._orderByCalled = i
        }
        get key() {
            return jt(this._path) ? null : Ft(this._path)
        }
        get ref() {
            return new Tr(this._repo, this._path)
        }
        get _queryIdentifier() {
            const e = Un(this._queryParams),
                t = nt(e);
            return "{}" === t ? "default" : t
        }
        get _queryObject() {
            return Un(this._queryParams)
        }
        isEqual(e) {
            if (!((e = A(e)) instanceof Cr)) return !1;
            const t = this._repo === e._repo,
                n = Vt(this._path, e._path),
                i = this._queryIdentifier === e._queryIdentifier;
            return t && n && i
        }
        toJSON() {
            return this.toString()
        }
        toString() {
            return this._repo.toString() + function(e) {
                let t = "";
                for (let n = e.pieceNum_; n < e.pieces_.length; n++) "" !== e.pieces_[n] && (t += "/" + encodeURIComponent(String(e.pieces_[n])));
                return t || "/"
            }(this._path)
        }
    }
    class Tr extends Cr {
        constructor(e, t) {
            super(e, t, new Mn, !1)
        }
        get parent() {
            const e = qt(this._path);
            return null === e ? null : new Tr(this._repo, e)
        }
        get root() {
            let e = this;
            for (; null !== e.parent;) e = e.parent;
            return e
        }
    }
    class kr {
        constructor(e, t, n) {
            this._node = e, this.ref = t, this._index = n
        }
        get priority() {
            return this._node.getPriority().val()
        }
        get key() {
            return this.ref.key
        }
        get size() {
            return this._node.numChildren()
        }
        child(e) {
            const t = new xt(e),
                n = Sr(this.ref, e);
            return new kr(this._node.getChild(t), n, gn)
        }
        exists() {
            return !this._node.isEmpty()
        }
        exportVal() {
            return this._node.val(!0)
        }
        forEach(e) {
            return !this._node.isLeafNode() && !!this._node.forEachChild(this._index, ((t, n) => e(new kr(n, Sr(this.ref, t), gn))))
        }
        hasChild(e) {
            const t = new xt(e);
            return !this._node.getChild(t).isEmpty()
        }
        hasChildren() {
            return !this._node.isLeafNode() && !this._node.isEmpty()
        }
        toJSON() {
            return this.exportVal()
        }
        val() {
            return this._node.val()
        }
    }

    function Er(e, t) {
        return (e = A(e))._checkNotDeleted("ref"), void 0 !== t ? Sr(e._root, t) : e._root
    }

    function Sr(e, t) {
        var n;
        return null === Dt((e = A(e))._path) ? ("child", "path", !1, (n = t) && (n = n.replace(/^\/*\.info(\/|$)/, "/")), zs("child", "path", n, false)) : zs("child", "path", t, !1), new Tr(e._repo, Wt(e._path, t))
    }

    function Nr(e, t) {
        (function(e, t) {
            if (".info" === Dt(t)) throw new Error(e + " failed = Can't modify data under /.info/")
        })("set", (e = A(e))._path),
            function(e, t, n, i) {
                i && void 0 === t || Hs(O(e, "value"), t, n)
            }("set", t, e._path, !1);
        const n = new l;
        return function(e, t, n, i, s) {
            ar(e, "set", {
                path: t.toString(),
                value: n,
                priority: i
            });
            const r = tr(e),
                o = En(n, i),
                a = hs(e.serverSyncTree_, t),
                c = Ss(o, a, r),
                l = rr(e),
                h = rs(e.serverSyncTree_, t, c, l, !0);
            Ks(e.eventQueue_, h), e.server_.put(t.toString(), o.val(!0), ((n, i) => {
                const r = "ok" === n;
                r || Ye("set at " + t + " failed: " + n);
                const o = os(e.serverSyncTree_, l, !r);
                Ys(e.eventQueue_, t, o), cr(0, s, n, i)
            }));
            const u = gr(e, t);
            ur(e, u), Ys(e.eventQueue_, u, [])
        }(e._repo, e._path, t, null, n.wrapCallback((() => {}))), n.promise
    }

    function Rr(t, n) {
        Vs("update", n, t._path, !1);
        const i = new l;
        return function(t, n, i, s) {
            ar(t, "update", {
                path: n.toString(),
                value: i
            });
            let r = !0;
            const o = tr(t),
                a = {};
            if (st(i, ((e, i) => {
                r = !1, a[e] = Es(Wt(n, e), En(i), t.serverSyncTree_, o)
            })), r) ze("update() called with empty data.  Don't do anything."), cr(0, s, "ok", void 0);
            else {
                const r = rr(t),
                    o = function(t, n, i, s) {
                        ! function(t, n, i, s) {
                            e(s > t.lastWriteId, "Stacking an older merge on top of newer ones"), t.allWrites.push({
                                path: n,
                                children: i,
                                writeId: s,
                                visible: !0
                            }), t.visibleWrites = hi(t.visibleWrites, n, i), t.lastWriteId = s
                        }(t.pendingWriteTree_, n, i, s);
                        const r = ai.fromObject(i);
                        return us(t, new Qn({
                            fromUser: !0,
                            fromServer: !1,
                            queryId: null,
                            tagged: !1
                        }, n, r))
                    }(t.serverSyncTree_, n, a, r);
                Ks(t.eventQueue_, o), t.server_.merge(n.toString(), i, ((e, i) => {
                    const o = "ok" === e;
                    o || Ye("update at " + n + " failed: " + e);
                    const a = os(t.serverSyncTree_, r, !o),
                        c = a.length > 0 ? ur(t, n) : n;
                    Ys(t.eventQueue_, c, a), cr(0, s, e, i)
                })), st(i, (e => {
                    const i = gr(t, Wt(n, e));
                    ur(t, i)
                })), Ys(t.eventQueue_, n, [])
            }
        }(t._repo, t._path, n, i.wrapCallback((() => {}))), i.promise
    }
    class Pr {
        constructor(e) {
            this.callbackContext = e
        }
        respondsTo(e) {
            return "value" === e
        }
        createEvent(e, t) {
            const n = t._queryParams.getIndex();
            return new wr("value", this, new kr(e.snapshotNode, new Tr(t._repo, t._path), n))
        }
        getEventRunner(e) {
            return "cancel" === e.getEventType() ? () => this.callbackContext.onCancel(e.error) : () => this.callbackContext.onValue(e.snapshot, null)
        }
        createCancelEvent(e, t) {
            return this.callbackContext.hasCancelCallback ? new br(this, e, t) : null
        }
        matches(e) {
            return e instanceof Pr && (!e.callbackContext || !this.callbackContext || e.callbackContext.matches(this.callbackContext))
        }
        hasAnyCallback() {
            return null !== this.callbackContext
        }
    }
    class Or {
        constructor(e, t) {
            this.eventType = e, this.callbackContext = t
        }
        respondsTo(e) {
            let t = "children_added" === e ? "child_added" : e;
            return t = "children_removed" === t ? "child_removed" : t, this.eventType === t
        }
        createCancelEvent(e, t) {
            return this.callbackContext.hasCancelCallback ? new br(this, e, t) : null
        }
        createEvent(t, n) {
            e(null != t.childName, "Child events should have a childName.");
            const i = Sr(new Tr(n._repo, n._path), t.childName),
                s = n._queryParams.getIndex();
            return new wr(t.type, this, new kr(t.snapshotNode, i, s), t.prevName)
        }
        getEventRunner(e) {
            return "cancel" === e.getEventType() ? () => this.callbackContext.onCancel(e.error) : () => this.callbackContext.onValue(e.snapshot, e.prevName)
        }
        matches(e) {
            return e instanceof Or && this.eventType === e.eventType && (!this.callbackContext || !e.callbackContext || this.callbackContext.matches(e.callbackContext))
        }
        hasAnyCallback() {
            return !!this.callbackContext
        }
    }

    function xr(e, t, n, i) {
        return function(e, t, n, i, s) {
            let r;
            if ("object" == typeof i && (r = void 0, s = i), "function" == typeof i && (r = i), s && s.onlyOnce) {
                const t = n,
                    i = (n, i) => {
                        or(e._repo, e, a), t(n, i)
                    };
                i.userCallback = n.userCallback, i.context = n.context, n = i
            }
            const o = new Ir(n, r || void 0),
                a = "value" === t ? new Pr(o) : new Or(t, o);
            return function(e, t, n) {
                let i;
                i = ".info" === Dt(t._path) ? ls(e.infoSyncTree_, t, n) : ls(e.serverSyncTree_, t, n), Gs(e.eventQueue_, t._path, i)
            }(e._repo, e, a), () => or(e._repo, e, a)
        }(e, "value", t, n, i)
    }! function(t) {
        e(!$i, "__referenceConstructor has already been defined"), $i = t
    }(Tr),
        function(t) {
            e(!Ki, "__referenceConstructor has already been defined"), Ki = t
        }(Tr);
    const Ar = {};

    function Dr(e, t, n, i, s) {
        let r = i || e.options.databaseURL;
        void 0 === r && (e.options.projectId || Ge("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."), ze("Using default host for project ", e.options.projectId), r = `${e.options.projectId}-default-rtdb.firebaseio.com`);
        let o, a, c = vr(r, s),
            l = c.repoInfo;
        "undefined" != typeof process && process.env && (a = process.env.FIREBASE_DATABASE_EMULATOR_HOST), a ? (o = !0, r = `http://${a}?ns=${l.namespace}`, c = vr(r, s), l = c.repoInfo) : o = !c.repoInfo.secure;
        const h = s && o ? new dt(dt.OWNER) : new ut(e.name, e.options, t);
        (function(e, t) {
            const n = t.path.toString();
            if ("string" != typeof t.repoInfo.host || 0 === t.repoInfo.host.length || !js(t.repoInfo.namespace) && "localhost" !== t.repoInfo.host.split(":")[0] || 0 !== n.length && ! function(e) {
                return e && (e = e.replace(/^\/*\.info(\/|$)/, "/")), Bs(e)
            }(n)) throw new Error(O(e, "url") + 'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')
        })("Invalid Firebase Database URL", c), jt(c.path) || Ge("Database URL must point to the root of a Firebase Database (not including a child path).");
        const u = function(e, t, n, i) {
            let s = Ar[t.name];
            s || (s = {}, Ar[t.name] = s);
            let r = s[e.toURLString()];
            return r && Ge("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."), r = new Xs(e, false, n, i), s[e.toURLString()] = r, r
        }(l, e, h, new ht(e.name, n));
        return new Lr(u, e)
    }
    class Lr {
        constructor(e, t) {
            this._repoInternal = e, this.app = t, this.type = "database", this._instanceStarted = !1
        }
        get _repo() {
            return this._instanceStarted || (Zs(this._repoInternal, this.app.options.appId, this.app.options.databaseAuthVariableOverride), this._instanceStarted = !0), this._repoInternal
        }
        get _root() {
            return this._rootInternal || (this._rootInternal = new Tr(this._repo, At())), this._rootInternal
        }
        _delete() {
            return null !== this._rootInternal && (function(e, t) {
                const n = Ar[t];
                n && n[e.key] === e || Ge(`Database ${t}(${e.repoInfo_}) has already been deleted.`),
                    function(e) {
                        e.persistentConnection_ && e.persistentConnection_.interrupt("repo_interrupt")
                    }(e), delete n[e.key]
            }(this._repo, this.app.name), this._repoInternal = null, this._rootInternal = null), Promise.resolve()
        }
        _checkNotDeleted(e) {
            null === this._rootInternal && Ge("Cannot call " + e + " on a deleted database.")
        }
    }

    function Mr(e, t) {
        var n = {};
        for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (n[i] = e[i]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var s = 0;
            for (i = Object.getOwnPropertySymbols(e); s < i.length; s++) t.indexOf(i[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[s]) && (n[i[s]] = e[i[s]])
        }
        return n
    }
    Qt.prototype.simpleListen = function(e, t) {
        this.sendRequest("q", {
            p: e
        }, t)
    }, Qt.prototype.echo = function(e, t) {
        this.sendRequest("echo", {
            d: e
        }, t)
    }, Ae = "9.8.2", me(new D("database", ((e, {
        instanceIdentifier: t
    }) => Dr(e.getProvider("app").getImmediate(), e.getProvider("auth-internal"), e.getProvider("app-check-internal"), t)), "PUBLIC").setMultipleInstances(!0)), be(Oe, xe, void 0), be(Oe, xe, "esm2017"), Object.create, Object.create;
    const Fr = function() {
            return {
                "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
            }
        },
        Ur = new f("auth", "Firebase", {
            "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
        }),
        qr = new V("@firebase/auth");

    function Wr(e, ...t) {
        qr.logLevel <= q.ERROR && qr.error(`Auth (9.8.2): ${e}`, ...t)
    }

    function jr(e, ...t) {
        throw Hr(e, ...t)
    }

    function Br(e, ...t) {
        return Hr(e, ...t)
    }

    function Hr(e, ...t) {
        if ("string" != typeof e) {
            const n = t[0],
                i = [...t.slice(1)];
            return i[0] && (i[0].appName = e.name), e._errorFactory.create(n, ...i)
        }
        return Ur.create(e, ...t)
    }

    function Vr(e, t, ...n) {
        if (!e) throw Hr(t, ...n)
    }

    function zr(e) {
        const t = "INTERNAL ASSERTION FAILED: " + e;
        throw Wr(t), new Error(t)
    }

    function $r(e, t) {
        e || zr(t)
    }
    const Kr = new Map;

    function Gr(e) {
        $r(e instanceof Function, "Expected a class definition");
        let t = Kr.get(e);
        return t ? ($r(t instanceof e, "Instance stored in cache mismatched with class"), t) : (t = new e, Kr.set(e, t), t)
    }

    function Yr() {
        var e;
        return "undefined" != typeof self && (null === (e = self.location) || void 0 === e ? void 0 : e.href) || ""
    }

    function Jr() {
        var e;
        return "undefined" != typeof self && (null === (e = self.location) || void 0 === e ? void 0 : e.protocol) || null
    }

    function Qr() {
        return !("undefined" != typeof navigator && navigator && "onLine" in navigator && "boolean" == typeof navigator.onLine && ("http:" === Jr() || "https:" === Jr() || function() {
            const e = "object" == typeof chrome ? chrome.runtime : "object" == typeof browser ? browser.runtime : void 0;
            return "object" == typeof e && void 0 !== e.id
        }() || "connection" in navigator)) || navigator.onLine
    }
    class Xr {
        constructor(e, t) {
            this.shortDelay = e, this.longDelay = t, $r(t > e, "Short delay should be less than long delay!"), this.isMobile = u() || d()
        }
        get() {
            return Qr() ? this.isMobile ? this.longDelay : this.shortDelay : Math.min(5e3, this.shortDelay)
        }
    }

    function Zr(e, t) {
        $r(e.emulator, "Emulator should always be set here");
        const {
            url: n
        } = e.emulator;
        return t ? `${n}${t.startsWith("/")?t.slice(1):t}` : n
    }
    class eo {
        static initialize(e, t, n) {
            this.fetchImpl = e, t && (this.headersImpl = t), n && (this.responseImpl = n)
        }
        static fetch() {
            return this.fetchImpl ? this.fetchImpl : "undefined" != typeof self && "fetch" in self ? self.fetch : void zr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
        }
        static headers() {
            return this.headersImpl ? this.headersImpl : "undefined" != typeof self && "Headers" in self ? self.Headers : void zr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
        }
        static response() {
            return this.responseImpl ? this.responseImpl : "undefined" != typeof self && "Response" in self ? self.Response : void zr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
        }
    }
    const to = {
            CREDENTIAL_MISMATCH: "custom-token-mismatch",
            MISSING_CUSTOM_TOKEN: "internal-error",
            INVALID_IDENTIFIER: "invalid-email",
            MISSING_CONTINUE_URI: "internal-error",
            INVALID_PASSWORD: "wrong-password",
            MISSING_PASSWORD: "internal-error",
            EMAIL_EXISTS: "email-already-in-use",
            PASSWORD_LOGIN_DISABLED: "operation-not-allowed",
            INVALID_IDP_RESPONSE: "invalid-credential",
            INVALID_PENDING_TOKEN: "invalid-credential",
            FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use",
            MISSING_REQ_TYPE: "internal-error",
            EMAIL_NOT_FOUND: "user-not-found",
            RESET_PASSWORD_EXCEED_LIMIT: "too-many-requests",
            EXPIRED_OOB_CODE: "expired-action-code",
            INVALID_OOB_CODE: "invalid-action-code",
            MISSING_OOB_CODE: "internal-error",
            CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login",
            INVALID_ID_TOKEN: "invalid-user-token",
            TOKEN_EXPIRED: "user-token-expired",
            USER_NOT_FOUND: "user-token-expired",
            TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests",
            INVALID_CODE: "invalid-verification-code",
            INVALID_SESSION_INFO: "invalid-verification-id",
            INVALID_TEMPORARY_PROOF: "invalid-credential",
            MISSING_SESSION_INFO: "missing-verification-id",
            SESSION_EXPIRED: "code-expired",
            MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name",
            UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri",
            INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id",
            ADMIN_ONLY_OPERATION: "admin-restricted-operation",
            INVALID_MFA_PENDING_CREDENTIAL: "invalid-multi-factor-session",
            MFA_ENROLLMENT_NOT_FOUND: "multi-factor-info-not-found",
            MISSING_MFA_ENROLLMENT_ID: "missing-multi-factor-info",
            MISSING_MFA_PENDING_CREDENTIAL: "missing-multi-factor-session",
            SECOND_FACTOR_EXISTS: "second-factor-already-in-use",
            SECOND_FACTOR_LIMIT_EXCEEDED: "maximum-second-factor-count-exceeded",
            BLOCKING_FUNCTION_ERROR_RESPONSE: "internal-error"
        },
        no = new Xr(3e4, 6e4);

    function io(e, t) {
        return e.tenantId && !t.tenantId ? Object.assign(Object.assign({}, t), {
            tenantId: e.tenantId
        }) : t
    }
    async function so(e, t, n, i, s = {}) {
        return ro(e, s, (async () => {
            let s = {},
                r = {};
            i && ("GET" === t ? r = i : s = {
                body: JSON.stringify(i)
            });
            const o = k(Object.assign({
                    key: e.config.apiKey
                }, r)).slice(1),
                a = await e._getAdditionalHeaders();
            return a["Content-Type"] = "application/json", e.languageCode && (a["X-Firebase-Locale"] = e.languageCode), eo.fetch()(ao(e, e.config.apiHost, n, o), Object.assign({
                method: t,
                headers: a,
                referrerPolicy: "no-referrer"
            }, s))
        }))
    }
    async function ro(e, t, n) {
        e._canInitEmulator = !1;
        const i = Object.assign(Object.assign({}, to), t);
        try {
            const t = new co(e),
                s = await Promise.race([n(), t.promise]);
            t.clearNetworkTimeout();
            const r = await s.json();
            if ("needConfirmation" in r) throw lo(e, "account-exists-with-different-credential", r);
            if (s.ok && !("errorMessage" in r)) return r; {
                const t = s.ok ? r.errorMessage : r.error.message,
                    [n, o] = t.split(" : ");
                if ("FEDERATED_USER_ID_ALREADY_LINKED" === n) throw lo(e, "credential-already-in-use", r);
                if ("EMAIL_EXISTS" === n) throw lo(e, "email-already-in-use", r);
                if ("USER_DISABLED" === n) throw lo(e, "user-disabled", r);
                const a = i[n] || n.toLowerCase().replace(/[_\s]+/g, "-");
                if (o) throw function(e, t, n) {
                    const i = Object.assign(Object.assign({}, Fr()), {
                        [t]: n
                    });
                    return new f("auth", "Firebase", i).create(t, {
                        appName: e.name
                    })
                }(e, a, o);
                jr(e, a)
            }
        } catch (t) {
            if (t instanceof p) throw t;
            jr(e, "network-request-failed")
        }
    }
    async function oo(e, t, n, i, s = {}) {
        const r = await so(e, t, n, i, s);
        return "mfaPendingCredential" in r && jr(e, "multi-factor-auth-required", {
            _serverResponse: r
        }), r
    }

    function ao(e, t, n, i) {
        const s = `${t}${n}?${i}`;
        return e.config.emulator ? Zr(e.config, s) : `${e.config.apiScheme}://${s}`
    }
    class co {
        constructor(e) {
            this.auth = e, this.timer = null, this.promise = new Promise(((e, t) => {
                this.timer = setTimeout((() => t(Br(this.auth, "network-request-failed"))), no.get())
            }))
        }
        clearNetworkTimeout() {
            clearTimeout(this.timer)
        }
    }

    function lo(e, t, n) {
        const i = {
            appName: e.name
        };
        n.email && (i.email = n.email), n.phoneNumber && (i.phoneNumber = n.phoneNumber);
        const s = Br(e, t, i);
        return s.customData._tokenResponse = n, s
    }

    function ho(e) {
        if (e) try {
            const t = new Date(Number(e));
            if (!isNaN(t.getTime())) return t.toUTCString()
        } catch (e) {}
    }

    function uo(e) {
        return 1e3 * Number(e)
    }

    function po(e) {
        const [t, n, i] = e.split(".");
        if (void 0 === t || void 0 === n || void 0 === i) return Wr("JWT malformed, contained fewer than 3 sections"), null;
        try {
            const e = o(n);
            return e ? JSON.parse(e) : (Wr("Failed to decode base64 JWT payload"), null)
        } catch (e) {
            return Wr("Caught error parsing JWT payload as JSON", e), null
        }
    }
    async function fo(e, t, n = !1) {
        if (n) return t;
        try {
            return await t
        } catch (t) {
            throw t instanceof p && function({
                                                 code: e
                                             }) {
                return "auth/user-disabled" === e || "auth/user-token-expired" === e
            }(t) && e.auth.currentUser === e && await e.auth.signOut(), t
        }
    }
    class mo {
        constructor(e) {
            this.user = e, this.isRunning = !1, this.timerId = null, this.errorBackoff = 3e4
        }
        _start() {
            this.isRunning || (this.isRunning = !0, this.schedule())
        }
        _stop() {
            this.isRunning && (this.isRunning = !1, null !== this.timerId && clearTimeout(this.timerId))
        }
        getInterval(e) {
            var t;
            if (e) {
                const e = this.errorBackoff;
                return this.errorBackoff = Math.min(2 * this.errorBackoff, 96e4), e
            } {
                this.errorBackoff = 3e4;
                const e = (null !== (t = this.user.stsTokenManager.expirationTime) && void 0 !== t ? t : 0) - Date.now() - 3e5;
                return Math.max(0, e)
            }
        }
        schedule(e = !1) {
            if (!this.isRunning) return;
            const t = this.getInterval(e);
            this.timerId = setTimeout((async () => {
                await this.iteration()
            }), t)
        }
        async iteration() {
            try {
                await this.user.getIdToken(!0)
            } catch (e) {
                return void("auth/network-request-failed" === e.code && this.schedule(!0))
            }
            this.schedule()
        }
    }
    class go {
        constructor(e, t) {
            this.createdAt = e, this.lastLoginAt = t, this._initializeTime()
        }
        _initializeTime() {
            this.lastSignInTime = ho(this.lastLoginAt), this.creationTime = ho(this.createdAt)
        }
        _copy(e) {
            this.createdAt = e.createdAt, this.lastLoginAt = e.lastLoginAt, this._initializeTime()
        }
        toJSON() {
            return {
                createdAt: this.createdAt,
                lastLoginAt: this.lastLoginAt
            }
        }
    }
    async function _o(e) {
        var t;
        const n = e.auth,
            i = await e.getIdToken(),
            s = await fo(e, async function(e, t) {
                return so(e, "POST", "/v1/accounts:lookup", t)
            }(n, {
                idToken: i
            }));
        Vr(null == s ? void 0 : s.users.length, n, "internal-error");
        const r = s.users[0];
        e._notifyReloadListener(r);
        const o = (null === (t = r.providerUserInfo) || void 0 === t ? void 0 : t.length) ? r.providerUserInfo.map((e => {
                var {
                    providerId: t
                } = e, n = Mr(e, ["providerId"]);
                return {
                    providerId: t,
                    uid: n.rawId || "",
                    displayName: n.displayName || null,
                    email: n.email || null,
                    phoneNumber: n.phoneNumber || null,
                    photoURL: n.photoUrl || null
                }
            })) : [],
            a = function(e, t) {
                const n = e.filter((e => !t.some((t => t.providerId === e.providerId))));
                return [...n, ...t]
            }(e.providerData, o),
            c = e.isAnonymous,
            l = !(e.email && r.passwordHash || (null == a ? void 0 : a.length)),
            h = !!c && l,
            u = {
                uid: r.localId,
                displayName: r.displayName || null,
                photoURL: r.photoUrl || null,
                email: r.email || null,
                emailVerified: r.emailVerified || !1,
                phoneNumber: r.phoneNumber || null,
                tenantId: r.tenantId || null,
                providerData: a,
                metadata: new go(r.createdAt, r.lastLoginAt),
                isAnonymous: h
            };
        Object.assign(e, u)
    }
    class vo {
        constructor() {
            this.refreshToken = null, this.accessToken = null, this.expirationTime = null
        }
        get isExpired() {
            return !this.expirationTime || Date.now() > this.expirationTime - 3e4
        }
        updateFromServerResponse(e) {
            Vr(e.idToken, "internal-error"), Vr(void 0 !== e.idToken, "internal-error"), Vr(void 0 !== e.refreshToken, "internal-error");
            const t = "expiresIn" in e && void 0 !== e.expiresIn ? Number(e.expiresIn) : function(e) {
                const t = po(e);
                return Vr(t, "internal-error"), Vr(void 0 !== t.exp, "internal-error"), Vr(void 0 !== t.iat, "internal-error"), Number(t.exp) - Number(t.iat)
            }(e.idToken);
            this.updateTokensAndExpiration(e.idToken, e.refreshToken, t)
        }
        async getToken(e, t = !1) {
            return Vr(!this.accessToken || this.refreshToken, e, "user-token-expired"), t || !this.accessToken || this.isExpired ? this.refreshToken ? (await this.refresh(e, this.refreshToken), this.accessToken) : null : this.accessToken
        }
        clearRefreshToken() {
            this.refreshToken = null
        }
        async refresh(e, t) {
            const {
                accessToken: n,
                refreshToken: i,
                expiresIn: s
            } = await async function(e, t) {
                const n = await ro(e, {}, (async () => {
                    const n = k({
                            grant_type: "refresh_token",
                            refresh_token: t
                        }).slice(1),
                        {
                            tokenApiHost: i,
                            apiKey: s
                        } = e.config,
                        r = ao(e, i, "/v1/token", `key=${s}`),
                        o = await e._getAdditionalHeaders();
                    return o["Content-Type"] = "application/x-www-form-urlencoded", eo.fetch()(r, {
                        method: "POST",
                        headers: o,
                        body: n
                    })
                }));
                return {
                    accessToken: n.access_token,
                    expiresIn: n.expires_in,
                    refreshToken: n.refresh_token
                }
            }(e, t);
            this.updateTokensAndExpiration(n, i, Number(s))
        }
        updateTokensAndExpiration(e, t, n) {
            this.refreshToken = t || null, this.accessToken = e || null, this.expirationTime = Date.now() + 1e3 * n
        }
        static fromJSON(e, t) {
            const {
                refreshToken: n,
                accessToken: i,
                expirationTime: s
            } = t, r = new vo;
            return n && (Vr("string" == typeof n, "internal-error", {
                appName: e
            }), r.refreshToken = n), i && (Vr("string" == typeof i, "internal-error", {
                appName: e
            }), r.accessToken = i), s && (Vr("number" == typeof s, "internal-error", {
                appName: e
            }), r.expirationTime = s), r
        }
        toJSON() {
            return {
                refreshToken: this.refreshToken,
                accessToken: this.accessToken,
                expirationTime: this.expirationTime
            }
        }
        _assign(e) {
            this.accessToken = e.accessToken, this.refreshToken = e.refreshToken, this.expirationTime = e.expirationTime
        }
        _clone() {
            return Object.assign(new vo, this.toJSON())
        }
        _performRefresh() {
            return zr("not implemented")
        }
    }

    function yo(e, t) {
        Vr("string" == typeof e || void 0 === e, "internal-error", {
            appName: t
        })
    }
    class wo {
        constructor(e) {
            var {
                uid: t,
                auth: n,
                stsTokenManager: i
            } = e, s = Mr(e, ["uid", "auth", "stsTokenManager"]);
            this.providerId = "firebase", this.proactiveRefresh = new mo(this), this.reloadUserInfo = null, this.reloadListener = null, this.uid = t, this.auth = n, this.stsTokenManager = i, this.accessToken = i.accessToken, this.displayName = s.displayName || null, this.email = s.email || null, this.emailVerified = s.emailVerified || !1, this.phoneNumber = s.phoneNumber || null, this.photoURL = s.photoURL || null, this.isAnonymous = s.isAnonymous || !1, this.tenantId = s.tenantId || null, this.providerData = s.providerData ? [...s.providerData] : [], this.metadata = new go(s.createdAt || void 0, s.lastLoginAt || void 0)
        }
        async getIdToken(e) {
            const t = await fo(this, this.stsTokenManager.getToken(this.auth, e));
            return Vr(t, this.auth, "internal-error"), this.accessToken !== t && (this.accessToken = t, await this.auth._persistUserIfCurrent(this), this.auth._notifyListenersIfCurrent(this)), t
        }
        getIdTokenResult(e) {
            return async function(e, t = !1) {
                const n = A(e),
                    i = await n.getIdToken(t),
                    s = po(i);
                Vr(s && s.exp && s.auth_time && s.iat, n.auth, "internal-error");
                const r = "object" == typeof s.firebase ? s.firebase : void 0,
                    o = null == r ? void 0 : r.sign_in_provider;
                return {
                    claims: s,
                    token: i,
                    authTime: ho(uo(s.auth_time)),
                    issuedAtTime: ho(uo(s.iat)),
                    expirationTime: ho(uo(s.exp)),
                    signInProvider: o || null,
                    signInSecondFactor: (null == r ? void 0 : r.sign_in_second_factor) || null
                }
            }(this, e)
        }
        reload() {
            return async function(e) {
                const t = A(e);
                await _o(t), await t.auth._persistUserIfCurrent(t), t.auth._notifyListenersIfCurrent(t)
            }(this)
        }
        _assign(e) {
            this !== e && (Vr(this.uid === e.uid, this.auth, "internal-error"), this.displayName = e.displayName, this.photoURL = e.photoURL, this.email = e.email, this.emailVerified = e.emailVerified, this.phoneNumber = e.phoneNumber, this.isAnonymous = e.isAnonymous, this.tenantId = e.tenantId, this.providerData = e.providerData.map((e => Object.assign({}, e))), this.metadata._copy(e.metadata), this.stsTokenManager._assign(e.stsTokenManager))
        }
        _clone(e) {
            return new wo(Object.assign(Object.assign({}, this), {
                auth: e,
                stsTokenManager: this.stsTokenManager._clone()
            }))
        }
        _onReload(e) {
            Vr(!this.reloadListener, this.auth, "internal-error"), this.reloadListener = e, this.reloadUserInfo && (this._notifyReloadListener(this.reloadUserInfo), this.reloadUserInfo = null)
        }
        _notifyReloadListener(e) {
            this.reloadListener ? this.reloadListener(e) : this.reloadUserInfo = e
        }
        _startProactiveRefresh() {
            this.proactiveRefresh._start()
        }
        _stopProactiveRefresh() {
            this.proactiveRefresh._stop()
        }
        async _updateTokensIfNecessary(e, t = !1) {
            let n = !1;
            e.idToken && e.idToken !== this.stsTokenManager.accessToken && (this.stsTokenManager.updateFromServerResponse(e), n = !0), t && await _o(this), await this.auth._persistUserIfCurrent(this), n && this.auth._notifyListenersIfCurrent(this)
        }
        async delete() {
            const e = await this.getIdToken();
            return await fo(this, async function(e, t) {
                return so(e, "POST", "/v1/accounts:delete", t)
            }(this.auth, {
                idToken: e
            })), this.stsTokenManager.clearRefreshToken(), this.auth.signOut()
        }
        toJSON() {
            return Object.assign(Object.assign({
                uid: this.uid,
                email: this.email || void 0,
                emailVerified: this.emailVerified,
                displayName: this.displayName || void 0,
                isAnonymous: this.isAnonymous,
                photoURL: this.photoURL || void 0,
                phoneNumber: this.phoneNumber || void 0,
                tenantId: this.tenantId || void 0,
                providerData: this.providerData.map((e => Object.assign({}, e))),
                stsTokenManager: this.stsTokenManager.toJSON(),
                _redirectEventId: this._redirectEventId
            }, this.metadata.toJSON()), {
                apiKey: this.auth.config.apiKey,
                appName: this.auth.name
            })
        }
        get refreshToken() {
            return this.stsTokenManager.refreshToken || ""
        }
        static _fromJSON(e, t) {
            var n, i, s, r, o, a, c, l;
            const h = null !== (n = t.displayName) && void 0 !== n ? n : void 0,
                u = null !== (i = t.email) && void 0 !== i ? i : void 0,
                d = null !== (s = t.phoneNumber) && void 0 !== s ? s : void 0,
                p = null !== (r = t.photoURL) && void 0 !== r ? r : void 0,
                f = null !== (o = t.tenantId) && void 0 !== o ? o : void 0,
                m = null !== (a = t._redirectEventId) && void 0 !== a ? a : void 0,
                g = null !== (c = t.createdAt) && void 0 !== c ? c : void 0,
                _ = null !== (l = t.lastLoginAt) && void 0 !== l ? l : void 0,
                {
                    uid: v,
                    emailVerified: y,
                    isAnonymous: w,
                    providerData: b,
                    stsTokenManager: I
                } = t;
            Vr(v && I, e, "internal-error");
            const C = vo.fromJSON(this.name, I);
            Vr("string" == typeof v, e, "internal-error"), yo(h, e.name), yo(u, e.name), Vr("boolean" == typeof y, e, "internal-error"), Vr("boolean" == typeof w, e, "internal-error"), yo(d, e.name), yo(p, e.name), yo(f, e.name), yo(m, e.name), yo(g, e.name), yo(_, e.name);
            const T = new wo({
                uid: v,
                auth: e,
                email: u,
                emailVerified: y,
                displayName: h,
                isAnonymous: w,
                photoURL: p,
                phoneNumber: d,
                tenantId: f,
                stsTokenManager: C,
                createdAt: g,
                lastLoginAt: _
            });
            return b && Array.isArray(b) && (T.providerData = b.map((e => Object.assign({}, e)))), m && (T._redirectEventId = m), T
        }
        static async _fromIdTokenResponse(e, t, n = !1) {
            const i = new vo;
            i.updateFromServerResponse(t);
            const s = new wo({
                uid: t.localId,
                auth: e,
                stsTokenManager: i,
                isAnonymous: n
            });
            return await _o(s), s
        }
    }
    class bo {
        constructor() {
            this.type = "NONE", this.storage = {}
        }
        async _isAvailable() {
            return !0
        }
        async _set(e, t) {
            this.storage[e] = t
        }
        async _get(e) {
            const t = this.storage[e];
            return void 0 === t ? null : t
        }
        async _remove(e) {
            delete this.storage[e]
        }
        _addListener(e, t) {}
        _removeListener(e, t) {}
    }
    bo.type = "NONE";
    const Io = bo;

    function Co(e, t, n) {
        return `firebase:${e}:${t}:${n}`
    }
    class To {
        constructor(e, t, n) {
            this.persistence = e, this.auth = t, this.userKey = n;
            const {
                config: i,
                name: s
            } = this.auth;
            this.fullUserKey = Co(this.userKey, i.apiKey, s), this.fullPersistenceKey = Co("persistence", i.apiKey, s), this.boundEventHandler = t._onStorageEvent.bind(t), this.persistence._addListener(this.fullUserKey, this.boundEventHandler)
        }
        setCurrentUser(e) {
            return this.persistence._set(this.fullUserKey, e.toJSON())
        }
        async getCurrentUser() {
            const e = await this.persistence._get(this.fullUserKey);
            return e ? wo._fromJSON(this.auth, e) : null
        }
        removeCurrentUser() {
            return this.persistence._remove(this.fullUserKey)
        }
        savePersistenceForRedirect() {
            return this.persistence._set(this.fullPersistenceKey, this.persistence.type)
        }
        async setPersistence(e) {
            if (this.persistence === e) return;
            const t = await this.getCurrentUser();
            return await this.removeCurrentUser(), this.persistence = e, t ? this.setCurrentUser(t) : void 0
        }
        delete() {
            this.persistence._removeListener(this.fullUserKey, this.boundEventHandler)
        }
        static async create(e, t, n = "authUser") {
            if (!t.length) return new To(Gr(Io), e, n);
            const i = (await Promise.all(t.map((async e => {
                if (await e._isAvailable()) return e
            })))).filter((e => e));
            let s = i[0] || Gr(Io);
            const r = Co(n, e.config.apiKey, e.name);
            let o = null;
            for (const n of t) try {
                const t = await n._get(r);
                if (t) {
                    const i = wo._fromJSON(e, t);
                    n !== s && (o = i), s = n;
                    break
                }
            } catch (e) {}
            const a = i.filter((e => e._shouldAllowMigration));
            return s._shouldAllowMigration && a.length ? (s = a[0], o && await s._set(r, o.toJSON()), await Promise.all(t.map((async e => {
                if (e !== s) try {
                    await e._remove(r)
                } catch (e) {}
            }))), new To(s, e, n)) : new To(s, e, n)
        }
    }

    function ko(e) {
        const t = e.toLowerCase();
        if (t.includes("opera/") || t.includes("opr/") || t.includes("opios/")) return "Opera";
        if (Ro(t)) return "IEMobile";
        if (t.includes("msie") || t.includes("trident/")) return "IE";
        if (t.includes("edge/")) return "Edge";
        if (Eo(t)) return "Firefox";
        if (t.includes("silk/")) return "Silk";
        if (Oo(t)) return "Blackberry";
        if (xo(t)) return "Webos";
        if (So(t)) return "Safari";
        if ((t.includes("chrome/") || No(t)) && !t.includes("edge/")) return "Chrome";
        if (Po(t)) return "Android"; {
            const t = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
                n = e.match(t);
            if (2 === (null == n ? void 0 : n.length)) return n[1]
        }
        return "Other"
    }

    function Eo(e = h()) {
        return /firefox\//i.test(e)
    }

    function So(e = h()) {
        const t = e.toLowerCase();
        return t.includes("safari/") && !t.includes("chrome/") && !t.includes("crios/") && !t.includes("android")
    }

    function No(e = h()) {
        return /crios\//i.test(e)
    }

    function Ro(e = h()) {
        return /iemobile/i.test(e)
    }

    function Po(e = h()) {
        return /android/i.test(e)
    }

    function Oo(e = h()) {
        return /blackberry/i.test(e)
    }

    function xo(e = h()) {
        return /webos/i.test(e)
    }

    function Ao(e = h()) {
        return /iphone|ipad|ipod/i.test(e)
    }

    function Do(e = h()) {
        return Ao(e) || Po(e) || xo(e) || Oo(e) || /windows phone/i.test(e) || Ro(e)
    }

    function Lo(e, t = []) {
        let n;
        switch (e) {
            case "Browser":
                n = ko(h());
                break;
            case "Worker":
                n = `${ko(h())}-${e}`;
                break;
            default:
                n = e
        }
        return `${n}/JsCore/9.8.2/${t.length?t.join(","):"FirebaseCore-web"}`
    }
    class Mo {
        constructor(e) {
            this.auth = e, this.queue = []
        }
        pushCallback(e, t) {
            const n = t => new Promise(((n, i) => {
                try {
                    n(e(t))
                } catch (e) {
                    i(e)
                }
            }));
            n.onAbort = t, this.queue.push(n);
            const i = this.queue.length - 1;
            return () => {
                this.queue[i] = () => Promise.resolve()
            }
        }
        async runMiddleware(e) {
            if (this.auth.currentUser === e) return;
            const t = [];
            try {
                for (const n of this.queue) await n(e), n.onAbort && t.push(n.onAbort)
            } catch (e) {
                t.reverse();
                for (const e of t) try {
                    e()
                } catch (e) {}
                throw this.auth._errorFactory.create("login-blocked", {
                    originalMessage: e.message
                })
            }
        }
    }
    class Fo {
        constructor(e, t, n) {
            this.app = e, this.heartbeatServiceProvider = t, this.config = n, this.currentUser = null, this.emulatorConfig = null, this.operations = Promise.resolve(), this.authStateSubscription = new qo(this), this.idTokenSubscription = new qo(this), this.beforeStateQueue = new Mo(this), this.redirectUser = null, this.isProactiveRefreshEnabled = !1, this._canInitEmulator = !0, this._isInitialized = !1, this._deleted = !1, this._initializationPromise = null, this._popupRedirectResolver = null, this._errorFactory = Ur, this.lastNotifiedUid = void 0, this.languageCode = null, this.tenantId = null, this.settings = {
                appVerificationDisabledForTesting: !1
            }, this.frameworks = [], this.name = e.name, this.clientVersion = n.sdkClientVersion
        }
        _initializeWithPersistence(e, t) {
            return t && (this._popupRedirectResolver = Gr(t)), this._initializationPromise = this.queue((async () => {
                var n, i;
                if (!this._deleted && (this.persistenceManager = await To.create(this, e), !this._deleted)) {
                    if (null === (n = this._popupRedirectResolver) || void 0 === n ? void 0 : n._shouldInitProactively) try {
                        await this._popupRedirectResolver._initialize(this)
                    } catch (e) {}
                    await this.initializeCurrentUser(t), this.lastNotifiedUid = (null === (i = this.currentUser) || void 0 === i ? void 0 : i.uid) || null, this._deleted || (this._isInitialized = !0)
                }
            })), this._initializationPromise
        }
        async _onStorageEvent() {
            if (this._deleted) return;
            const e = await this.assertedPersistence.getCurrentUser();
            return this.currentUser || e ? this.currentUser && e && this.currentUser.uid === e.uid ? (this._currentUser._assign(e), void await this.currentUser.getIdToken()) : void await this._updateCurrentUser(e, !0) : void 0
        }
        async initializeCurrentUser(e) {
            var t;
            const n = await this.assertedPersistence.getCurrentUser();
            let i = n,
                s = !1;
            if (e && this.config.authDomain) {
                await this.getOrInitRedirectPersistenceManager();
                const n = null === (t = this.redirectUser) || void 0 === t ? void 0 : t._redirectEventId,
                    r = null == i ? void 0 : i._redirectEventId,
                    o = await this.tryRedirectSignIn(e);
                n && n !== r || !(null == o ? void 0 : o.user) || (i = o.user, s = !0)
            }
            if (!i) return this.directlySetCurrentUser(null);
            if (!i._redirectEventId) {
                if (s) try {
                    await this.beforeStateQueue.runMiddleware(i)
                } catch (e) {
                    i = n, this._popupRedirectResolver._overrideRedirectResult(this, (() => Promise.reject(e)))
                }
                return i ? this.reloadAndSetCurrentUserOrClear(i) : this.directlySetCurrentUser(null)
            }
            return Vr(this._popupRedirectResolver, this, "argument-error"), await this.getOrInitRedirectPersistenceManager(), this.redirectUser && this.redirectUser._redirectEventId === i._redirectEventId ? this.directlySetCurrentUser(i) : this.reloadAndSetCurrentUserOrClear(i)
        }
        async tryRedirectSignIn(e) {
            let t = null;
            try {
                t = await this._popupRedirectResolver._completeRedirectFn(this, e, !0)
            } catch (e) {
                await this._setRedirectUser(null)
            }
            return t
        }
        async reloadAndSetCurrentUserOrClear(e) {
            try {
                await _o(e)
            } catch (e) {
                if ("auth/network-request-failed" !== e.code) return this.directlySetCurrentUser(null)
            }
            return this.directlySetCurrentUser(e)
        }
        useDeviceLanguage() {
            this.languageCode = function() {
                if ("undefined" == typeof navigator) return null;
                const e = navigator;
                return e.languages && e.languages[0] || e.language || null
            }()
        }
        async _delete() {
            this._deleted = !0
        }
        async updateCurrentUser(e) {
            const t = e ? A(e) : null;
            return t && Vr(t.auth.config.apiKey === this.config.apiKey, this, "invalid-user-token"), this._updateCurrentUser(t && t._clone(this))
        }
        async _updateCurrentUser(e, t = !1) {
            if (!this._deleted) return e && Vr(this.tenantId === e.tenantId, this, "tenant-id-mismatch"), t || await this.beforeStateQueue.runMiddleware(e), this.queue((async () => {
                await this.directlySetCurrentUser(e), this.notifyAuthListeners()
            }))
        }
        async signOut() {
            return await this.beforeStateQueue.runMiddleware(null), (this.redirectPersistenceManager || this._popupRedirectResolver) && await this._setRedirectUser(null), this._updateCurrentUser(null, !0)
        }
        setPersistence(e) {
            return this.queue((async () => {
                await this.assertedPersistence.setPersistence(Gr(e))
            }))
        }
        _getPersistence() {
            return this.assertedPersistence.persistence.type
        }
        _updateErrorMap(e) {
            this._errorFactory = new f("auth", "Firebase", e())
        }
        onAuthStateChanged(e, t, n) {
            return this.registerStateListener(this.authStateSubscription, e, t, n)
        }
        beforeAuthStateChanged(e, t) {
            return this.beforeStateQueue.pushCallback(e, t)
        }
        onIdTokenChanged(e, t, n) {
            return this.registerStateListener(this.idTokenSubscription, e, t, n)
        }
        toJSON() {
            var e;
            return {
                apiKey: this.config.apiKey,
                authDomain: this.config.authDomain,
                appName: this.name,
                currentUser: null === (e = this._currentUser) || void 0 === e ? void 0 : e.toJSON()
            }
        }
        async _setRedirectUser(e, t) {
            const n = await this.getOrInitRedirectPersistenceManager(t);
            return null === e ? n.removeCurrentUser() : n.setCurrentUser(e)
        }
        async getOrInitRedirectPersistenceManager(e) {
            if (!this.redirectPersistenceManager) {
                const t = e && Gr(e) || this._popupRedirectResolver;
                Vr(t, this, "argument-error"), this.redirectPersistenceManager = await To.create(this, [Gr(t._redirectPersistence)], "redirectUser"), this.redirectUser = await this.redirectPersistenceManager.getCurrentUser()
            }
            return this.redirectPersistenceManager
        }
        async _redirectUserForId(e) {
            var t, n;
            return this._isInitialized && await this.queue((async () => {})), (null === (t = this._currentUser) || void 0 === t ? void 0 : t._redirectEventId) === e ? this._currentUser : (null === (n = this.redirectUser) || void 0 === n ? void 0 : n._redirectEventId) === e ? this.redirectUser : null
        }
        async _persistUserIfCurrent(e) {
            if (e === this.currentUser) return this.queue((async () => this.directlySetCurrentUser(e)))
        }
        _notifyListenersIfCurrent(e) {
            e === this.currentUser && this.notifyAuthListeners()
        }
        _key() {
            return `${this.config.authDomain}:${this.config.apiKey}:${this.name}`
        }
        _startProactiveRefresh() {
            this.isProactiveRefreshEnabled = !0, this.currentUser && this._currentUser._startProactiveRefresh()
        }
        _stopProactiveRefresh() {
            this.isProactiveRefreshEnabled = !1, this.currentUser && this._currentUser._stopProactiveRefresh()
        }
        get _currentUser() {
            return this.currentUser
        }
        notifyAuthListeners() {
            var e, t;
            if (!this._isInitialized) return;
            this.idTokenSubscription.next(this.currentUser);
            const n = null !== (t = null === (e = this.currentUser) || void 0 === e ? void 0 : e.uid) && void 0 !== t ? t : null;
            this.lastNotifiedUid !== n && (this.lastNotifiedUid = n, this.authStateSubscription.next(this.currentUser))
        }
        registerStateListener(e, t, n, i) {
            if (this._deleted) return () => {};
            const s = "function" == typeof t ? t : t.next.bind(t),
                r = this._isInitialized ? Promise.resolve() : this._initializationPromise;
            return Vr(r, this, "internal-error"), r.then((() => s(this.currentUser))), "function" == typeof t ? e.addObserver(t, n, i) : e.addObserver(t)
        }
        async directlySetCurrentUser(e) {
            this.currentUser && this.currentUser !== e && (this._currentUser._stopProactiveRefresh(), e && this.isProactiveRefreshEnabled && e._startProactiveRefresh()), this.currentUser = e, e ? await this.assertedPersistence.setCurrentUser(e) : await this.assertedPersistence.removeCurrentUser()
        }
        queue(e) {
            return this.operations = this.operations.then(e, e), this.operations
        }
        get assertedPersistence() {
            return Vr(this.persistenceManager, this, "internal-error"), this.persistenceManager
        }
        _logFramework(e) {
            e && !this.frameworks.includes(e) && (this.frameworks.push(e), this.frameworks.sort(), this.clientVersion = Lo(this.config.clientPlatform, this._getFrameworks()))
        }
        _getFrameworks() {
            return this.frameworks
        }
        async _getAdditionalHeaders() {
            var e;
            const t = {
                "X-Client-Version": this.clientVersion
            };
            this.app.options.appId && (t["X-Firebase-gmpid"] = this.app.options.appId);
            const n = await (null === (e = this.heartbeatServiceProvider.getImmediate({
                optional: !0
            })) || void 0 === e ? void 0 : e.getHeartbeatsHeader());
            return n && (t["X-Firebase-Client"] = n), t
        }
    }

    function Uo(e) {
        return A(e)
    }
    class qo {
        constructor(e) {
            this.auth = e, this.observer = null, this.addObserver = function(e, t) {
                const n = new R(e, void 0);
                return n.subscribe.bind(n)
            }((e => this.observer = e))
        }
        get next() {
            return Vr(this.observer, this.auth, "internal-error"), this.observer.next.bind(this.observer)
        }
    }
    class Wo {
        constructor(e, t) {
            this.providerId = e, this.signInMethod = t
        }
        toJSON() {
            return zr("not implemented")
        }
        _getIdTokenResponse(e) {
            return zr("not implemented")
        }
        _linkToIdToken(e, t) {
            return zr("not implemented")
        }
        _getReauthenticationResolver(e) {
            return zr("not implemented")
        }
    }
    class jo extends Wo {
        constructor(e, t, n, i = null) {
            super("password", n), this._email = e, this._password = t, this._tenantId = i
        }
        static _fromEmailAndPassword(e, t) {
            return new jo(e, t, "password")
        }
        static _fromEmailAndCode(e, t, n = null) {
            return new jo(e, t, "emailLink", n)
        }
        toJSON() {
            return {
                email: this._email,
                password: this._password,
                signInMethod: this.signInMethod,
                tenantId: this._tenantId
            }
        }
        static fromJSON(e) {
            const t = "string" == typeof e ? JSON.parse(e) : e;
            if ((null == t ? void 0 : t.email) && (null == t ? void 0 : t.password)) {
                if ("password" === t.signInMethod) return this._fromEmailAndPassword(t.email, t.password);
                if ("emailLink" === t.signInMethod) return this._fromEmailAndCode(t.email, t.password, t.tenantId)
            }
            return null
        }
        async _getIdTokenResponse(e) {
            switch (this.signInMethod) {
                case "password":
                    return async function(e, t) {
                        return oo(e, "POST", "/v1/accounts:signInWithPassword", io(e, t))
                    }(e, {
                        returnSecureToken: !0,
                        email: this._email,
                        password: this._password
                    });
                case "emailLink":
                    return async function(e, t) {
                        return oo(e, "POST", "/v1/accounts:signInWithEmailLink", io(e, t))
                    }(e, {
                        email: this._email,
                        oobCode: this._password
                    });
                default:
                    jr(e, "internal-error")
            }
        }
        async _linkToIdToken(e, t) {
            switch (this.signInMethod) {
                case "password":
                    return async function(e, t) {
                        return so(e, "POST", "/v1/accounts:update", t)
                    }(e, {
                        idToken: t,
                        returnSecureToken: !0,
                        email: this._email,
                        password: this._password
                    });
                case "emailLink":
                    return async function(e, t) {
                        return oo(e, "POST", "/v1/accounts:signInWithEmailLink", io(e, t))
                    }(e, {
                        idToken: t,
                        email: this._email,
                        oobCode: this._password
                    });
                default:
                    jr(e, "internal-error")
            }
        }
        _getReauthenticationResolver(e) {
            return this._getIdTokenResponse(e)
        }
    }
    async function Bo(e, t) {
        return oo(e, "POST", "/v1/accounts:signInWithIdp", io(e, t))
    }
    class Ho extends Wo {
        constructor() {
            super(...arguments), this.pendingToken = null
        }
        static _fromParams(e) {
            const t = new Ho(e.providerId, e.signInMethod);
            return e.idToken || e.accessToken ? (e.idToken && (t.idToken = e.idToken), e.accessToken && (t.accessToken = e.accessToken), e.nonce && !e.pendingToken && (t.nonce = e.nonce), e.pendingToken && (t.pendingToken = e.pendingToken)) : e.oauthToken && e.oauthTokenSecret ? (t.accessToken = e.oauthToken, t.secret = e.oauthTokenSecret) : jr("argument-error"), t
        }
        toJSON() {
            return {
                idToken: this.idToken,
                accessToken: this.accessToken,
                secret: this.secret,
                nonce: this.nonce,
                pendingToken: this.pendingToken,
                providerId: this.providerId,
                signInMethod: this.signInMethod
            }
        }
        static fromJSON(e) {
            const t = "string" == typeof e ? JSON.parse(e) : e,
                {
                    providerId: n,
                    signInMethod: i
                } = t,
                s = Mr(t, ["providerId", "signInMethod"]);
            if (!n || !i) return null;
            const r = new Ho(n, i);
            return r.idToken = s.idToken || void 0, r.accessToken = s.accessToken || void 0, r.secret = s.secret, r.nonce = s.nonce, r.pendingToken = s.pendingToken || null, r
        }
        _getIdTokenResponse(e) {
            return Bo(e, this.buildRequest())
        }
        _linkToIdToken(e, t) {
            const n = this.buildRequest();
            return n.idToken = t, Bo(e, n)
        }
        _getReauthenticationResolver(e) {
            const t = this.buildRequest();
            return t.autoCreate = !1, Bo(e, t)
        }
        buildRequest() {
            const e = {
                requestUri: "http://localhost",
                returnSecureToken: !0
            };
            if (this.pendingToken) e.pendingToken = this.pendingToken;
            else {
                const t = {};
                this.idToken && (t.id_token = this.idToken), this.accessToken && (t.access_token = this.accessToken), this.secret && (t.oauth_token_secret = this.secret), t.providerId = this.providerId, this.nonce && !this.pendingToken && (t.nonce = this.nonce), e.postBody = k(t)
            }
            return e
        }
    }
    const Vo = {
        USER_NOT_FOUND: "user-not-found"
    };
    class zo extends Wo {
        constructor(e) {
            super("phone", "phone"), this.params = e
        }
        static _fromVerification(e, t) {
            return new zo({
                verificationId: e,
                verificationCode: t
            })
        }
        static _fromTokenResponse(e, t) {
            return new zo({
                phoneNumber: e,
                temporaryProof: t
            })
        }
        _getIdTokenResponse(e) {
            return async function(e, t) {
                return oo(e, "POST", "/v1/accounts:signInWithPhoneNumber", io(e, t))
            }(e, this._makeVerificationRequest())
        }
        _linkToIdToken(e, t) {
            return async function(e, t) {
                const n = await oo(e, "POST", "/v1/accounts:signInWithPhoneNumber", io(e, t));
                if (n.temporaryProof) throw lo(e, "account-exists-with-different-credential", n);
                return n
            }(e, Object.assign({
                idToken: t
            }, this._makeVerificationRequest()))
        }
        _getReauthenticationResolver(e) {
            return async function(e, t) {
                return oo(e, "POST", "/v1/accounts:signInWithPhoneNumber", io(e, Object.assign(Object.assign({}, t), {
                    operation: "REAUTH"
                })), Vo)
            }(e, this._makeVerificationRequest())
        }
        _makeVerificationRequest() {
            const {
                temporaryProof: e,
                phoneNumber: t,
                verificationId: n,
                verificationCode: i
            } = this.params;
            return e && t ? {
                temporaryProof: e,
                phoneNumber: t
            } : {
                sessionInfo: n,
                code: i
            }
        }
        toJSON() {
            const e = {
                providerId: this.providerId
            };
            return this.params.phoneNumber && (e.phoneNumber = this.params.phoneNumber), this.params.temporaryProof && (e.temporaryProof = this.params.temporaryProof), this.params.verificationCode && (e.verificationCode = this.params.verificationCode), this.params.verificationId && (e.verificationId = this.params.verificationId), e
        }
        static fromJSON(e) {
            "string" == typeof e && (e = JSON.parse(e));
            const {
                verificationId: t,
                verificationCode: n,
                phoneNumber: i,
                temporaryProof: s
            } = e;
            return n || t || i || s ? new zo({
                verificationId: t,
                verificationCode: n,
                phoneNumber: i,
                temporaryProof: s
            }) : null
        }
    }
    class $o {
        constructor(e) {
            var t, n, i, s, r, o;
            const a = E(S(e)),
                c = null !== (t = a.apiKey) && void 0 !== t ? t : null,
                l = null !== (n = a.oobCode) && void 0 !== n ? n : null,
                h = function(e) {
                    switch (e) {
                        case "recoverEmail":
                            return "RECOVER_EMAIL";
                        case "resetPassword":
                            return "PASSWORD_RESET";
                        case "signIn":
                            return "EMAIL_SIGNIN";
                        case "verifyEmail":
                            return "VERIFY_EMAIL";
                        case "verifyAndChangeEmail":
                            return "VERIFY_AND_CHANGE_EMAIL";
                        case "revertSecondFactorAddition":
                            return "REVERT_SECOND_FACTOR_ADDITION";
                        default:
                            return null
                    }
                }(null !== (i = a.mode) && void 0 !== i ? i : null);
            Vr(c && l && h, "argument-error"), this.apiKey = c, this.operation = h, this.code = l, this.continueUrl = null !== (s = a.continueUrl) && void 0 !== s ? s : null, this.languageCode = null !== (r = a.languageCode) && void 0 !== r ? r : null, this.tenantId = null !== (o = a.tenantId) && void 0 !== o ? o : null
        }
        static parseLink(e) {
            const t = function(e) {
                const t = E(S(e)).link,
                    n = t ? E(S(t)).deep_link_id : null,
                    i = E(S(e)).deep_link_id;
                return (i ? E(S(i)).link : null) || i || n || t || e
            }(e);
            try {
                return new $o(t)
            } catch (e) {
                return null
            }
        }
    }
    class Ko {
        constructor() {
            this.providerId = Ko.PROVIDER_ID
        }
        static credential(e, t) {
            return jo._fromEmailAndPassword(e, t)
        }
        static credentialWithLink(e, t) {
            const n = $o.parseLink(t);
            return Vr(n, "argument-error"), jo._fromEmailAndCode(e, n.code, n.tenantId)
        }
    }
    Ko.PROVIDER_ID = "password", Ko.EMAIL_PASSWORD_SIGN_IN_METHOD = "password", Ko.EMAIL_LINK_SIGN_IN_METHOD = "emailLink";
    class Go {
        constructor(e) {
            this.providerId = e, this.defaultLanguageCode = null, this.customParameters = {}
        }
        setDefaultLanguage(e) {
            this.defaultLanguageCode = e
        }
        setCustomParameters(e) {
            return this.customParameters = e, this
        }
        getCustomParameters() {
            return this.customParameters
        }
    }
    class Yo extends Go {
        constructor() {
            super(...arguments), this.scopes = []
        }
        addScope(e) {
            return this.scopes.includes(e) || this.scopes.push(e), this
        }
        getScopes() {
            return [...this.scopes]
        }
    }
    class Jo extends Yo {
        constructor() {
            super("facebook.com")
        }
        static credential(e) {
            return Ho._fromParams({
                providerId: Jo.PROVIDER_ID,
                signInMethod: Jo.FACEBOOK_SIGN_IN_METHOD,
                accessToken: e
            })
        }
        static credentialFromResult(e) {
            return Jo.credentialFromTaggedObject(e)
        }
        static credentialFromError(e) {
            return Jo.credentialFromTaggedObject(e.customData || {})
        }
        static credentialFromTaggedObject({
                                              _tokenResponse: e
                                          }) {
            if (!e || !("oauthAccessToken" in e)) return null;
            if (!e.oauthAccessToken) return null;
            try {
                return Jo.credential(e.oauthAccessToken)
            } catch (e) {
                return null
            }
        }
    }
    Jo.FACEBOOK_SIGN_IN_METHOD = "facebook.com", Jo.PROVIDER_ID = "facebook.com";
    class Qo extends Yo {
        constructor() {
            super("google.com"), this.addScope("profile")
        }
        static credential(e, t) {
            return Ho._fromParams({
                providerId: Qo.PROVIDER_ID,
                signInMethod: Qo.GOOGLE_SIGN_IN_METHOD,
                idToken: e,
                accessToken: t
            })
        }
        static credentialFromResult(e) {
            return Qo.credentialFromTaggedObject(e)
        }
        static credentialFromError(e) {
            return Qo.credentialFromTaggedObject(e.customData || {})
        }
        static credentialFromTaggedObject({
                                              _tokenResponse: e
                                          }) {
            if (!e) return null;
            const {
                oauthIdToken: t,
                oauthAccessToken: n
            } = e;
            if (!t && !n) return null;
            try {
                return Qo.credential(t, n)
            } catch (e) {
                return null
            }
        }
    }
    Qo.GOOGLE_SIGN_IN_METHOD = "google.com", Qo.PROVIDER_ID = "google.com";
    class Xo extends Yo {
        constructor() {
            super("github.com")
        }
        static credential(e) {
            return Ho._fromParams({
                providerId: Xo.PROVIDER_ID,
                signInMethod: Xo.GITHUB_SIGN_IN_METHOD,
                accessToken: e
            })
        }
        static credentialFromResult(e) {
            return Xo.credentialFromTaggedObject(e)
        }
        static credentialFromError(e) {
            return Xo.credentialFromTaggedObject(e.customData || {})
        }
        static credentialFromTaggedObject({
                                              _tokenResponse: e
                                          }) {
            if (!e || !("oauthAccessToken" in e)) return null;
            if (!e.oauthAccessToken) return null;
            try {
                return Xo.credential(e.oauthAccessToken)
            } catch (e) {
                return null
            }
        }
    }
    Xo.GITHUB_SIGN_IN_METHOD = "github.com", Xo.PROVIDER_ID = "github.com";
    class Zo extends Yo {
        constructor() {
            super("twitter.com")
        }
        static credential(e, t) {
            return Ho._fromParams({
                providerId: Zo.PROVIDER_ID,
                signInMethod: Zo.TWITTER_SIGN_IN_METHOD,
                oauthToken: e,
                oauthTokenSecret: t
            })
        }
        static credentialFromResult(e) {
            return Zo.credentialFromTaggedObject(e)
        }
        static credentialFromError(e) {
            return Zo.credentialFromTaggedObject(e.customData || {})
        }
        static credentialFromTaggedObject({
                                              _tokenResponse: e
                                          }) {
            if (!e) return null;
            const {
                oauthAccessToken: t,
                oauthTokenSecret: n
            } = e;
            if (!t || !n) return null;
            try {
                return Zo.credential(t, n)
            } catch (e) {
                return null
            }
        }
    }
    Zo.TWITTER_SIGN_IN_METHOD = "twitter.com", Zo.PROVIDER_ID = "twitter.com";
    class ea {
        constructor(e) {
            this.user = e.user, this.providerId = e.providerId, this._tokenResponse = e._tokenResponse, this.operationType = e.operationType
        }
        static async _fromIdTokenResponse(e, t, n, i = !1) {
            const s = await wo._fromIdTokenResponse(e, n, i),
                r = ta(n);
            return new ea({
                user: s,
                providerId: r,
                _tokenResponse: n,
                operationType: t
            })
        }
        static async _forOperation(e, t, n) {
            await e._updateTokensIfNecessary(n, !0);
            const i = ta(n);
            return new ea({
                user: e,
                providerId: i,
                _tokenResponse: n,
                operationType: t
            })
        }
    }

    function ta(e) {
        return e.providerId ? e.providerId : "phoneNumber" in e ? "phone" : null
    }
    class na extends p {
        constructor(e, t, n, i) {
            var s;
            super(t.code, t.message), this.operationType = n, this.user = i, Object.setPrototypeOf(this, na.prototype), this.customData = {
                appName: e.name,
                tenantId: null !== (s = e.tenantId) && void 0 !== s ? s : void 0,
                _serverResponse: t.customData._serverResponse,
                operationType: n
            }
        }
        static _fromErrorAndOperation(e, t, n, i) {
            return new na(e, t, n, i)
        }
    }

    function ia(e, t, n, i) {
        return ("reauthenticate" === t ? n._getReauthenticationResolver(e) : n._getIdTokenResponse(e)).catch((n => {
            if ("auth/multi-factor-auth-required" === n.code) throw na._fromErrorAndOperation(e, n, t, i);
            throw n
        }))
    }
    async function sa(e, t, n = !1) {
        const i = "signIn",
            s = await ia(e, i, t),
            r = await ea._fromIdTokenResponse(e, i, s);
        return n || await e._updateCurrentUser(r.user), r
    }
    new WeakMap;
    const ra = "__sak";
    class oa {
        constructor(e, t) {
            this.storageRetriever = e, this.type = t
        }
        _isAvailable() {
            try {
                return this.storage ? (this.storage.setItem(ra, "1"), this.storage.removeItem(ra), Promise.resolve(!0)) : Promise.resolve(!1)
            } catch (e) {
                return Promise.resolve(!1)
            }
        }
        _set(e, t) {
            return this.storage.setItem(e, JSON.stringify(t)), Promise.resolve()
        }
        _get(e) {
            const t = this.storage.getItem(e);
            return Promise.resolve(t ? JSON.parse(t) : null)
        }
        _remove(e) {
            return this.storage.removeItem(e), Promise.resolve()
        }
        get storage() {
            return this.storageRetriever()
        }
    }
    class aa extends oa {
        constructor() {
            super((() => window.localStorage), "LOCAL"), this.boundEventHandler = (e, t) => this.onStorageEvent(e, t), this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.safariLocalStorageNotSynced = function() {
                const e = h();
                return So(e) || Ao(e)
            }() && function() {
                try {
                    return !(!window || window === window.top)
                } catch (e) {
                    return !1
                }
            }(), this.fallbackToPolling = Do(), this._shouldAllowMigration = !0
        }
        forAllChangedKeys(e) {
            for (const t of Object.keys(this.listeners)) {
                const n = this.storage.getItem(t),
                    i = this.localCache[t];
                n !== i && e(t, i, n)
            }
        }
        onStorageEvent(e, t = !1) {
            if (!e.key) return void this.forAllChangedKeys(((e, t, n) => {
                this.notifyListeners(e, n)
            }));
            const n = e.key;
            if (t ? this.detachListener() : this.stopPolling(), this.safariLocalStorageNotSynced) {
                const i = this.storage.getItem(n);
                if (e.newValue !== i) null !== e.newValue ? this.storage.setItem(n, e.newValue) : this.storage.removeItem(n);
                else if (this.localCache[n] === e.newValue && !t) return
            }
            const i = () => {
                    const e = this.storage.getItem(n);
                    (t || this.localCache[n] !== e) && this.notifyListeners(n, e)
                },
                s = this.storage.getItem(n);
            ! function() {
                const e = h();
                return e.indexOf("MSIE ") >= 0 || e.indexOf("Trident/") >= 0
            }() || 10 !== document.documentMode || s === e.newValue || e.newValue === e.oldValue ? i() : setTimeout(i, 10)
        }
        notifyListeners(e, t) {
            this.localCache[e] = t;
            const n = this.listeners[e];
            if (n)
                for (const e of Array.from(n)) e(t ? JSON.parse(t) : t)
        }
        startPolling() {
            this.stopPolling(), this.pollTimer = setInterval((() => {
                this.forAllChangedKeys(((e, t, n) => {
                    this.onStorageEvent(new StorageEvent("storage", {
                        key: e,
                        oldValue: t,
                        newValue: n
                    }), !0)
                }))
            }), 1e3)
        }
        stopPolling() {
            this.pollTimer && (clearInterval(this.pollTimer), this.pollTimer = null)
        }
        attachListener() {
            window.addEventListener("storage", this.boundEventHandler)
        }
        detachListener() {
            window.removeEventListener("storage", this.boundEventHandler)
        }
        _addListener(e, t) {
            0 === Object.keys(this.listeners).length && (this.fallbackToPolling ? this.startPolling() : this.attachListener()), this.listeners[e] || (this.listeners[e] = new Set, this.localCache[e] = this.storage.getItem(e)), this.listeners[e].add(t)
        }
        _removeListener(e, t) {
            this.listeners[e] && (this.listeners[e].delete(t), 0 === this.listeners[e].size && delete this.listeners[e]), 0 === Object.keys(this.listeners).length && (this.detachListener(), this.stopPolling())
        }
        async _set(e, t) {
            await super._set(e, t), this.localCache[e] = JSON.stringify(t)
        }
        async _get(e) {
            const t = await super._get(e);
            return this.localCache[e] = JSON.stringify(t), t
        }
        async _remove(e) {
            await super._remove(e), delete this.localCache[e]
        }
    }
    aa.type = "LOCAL";
    const ca = aa;
    class la extends oa {
        constructor() {
            super((() => window.sessionStorage), "SESSION")
        }
        _addListener(e, t) {}
        _removeListener(e, t) {}
    }
    la.type = "SESSION";
    const ha = la;
    class ua {
        constructor(e) {
            this.eventTarget = e, this.handlersMap = {}, this.boundEventHandler = this.handleEvent.bind(this)
        }
        static _getInstance(e) {
            const t = this.receivers.find((t => t.isListeningto(e)));
            if (t) return t;
            const n = new ua(e);
            return this.receivers.push(n), n
        }
        isListeningto(e) {
            return this.eventTarget === e
        }
        async handleEvent(e) {
            const t = e,
                {
                    eventId: n,
                    eventType: i,
                    data: s
                } = t.data,
                r = this.handlersMap[i];
            if (!(null == r ? void 0 : r.size)) return;
            t.ports[0].postMessage({
                status: "ack",
                eventId: n,
                eventType: i
            });
            const o = Array.from(r).map((async e => e(t.origin, s))),
                a = await
                    function(e) {
                        return Promise.all(e.map((async e => {
                            try {
                                return {
                                    fulfilled: !0,
                                    value: await e
                                }
                            } catch (e) {
                                return {
                                    fulfilled: !1,
                                    reason: e
                                }
                            }
                        })))
                    }(o);
            t.ports[0].postMessage({
                status: "done",
                eventId: n,
                eventType: i,
                response: a
            })
        }
        _subscribe(e, t) {
            0 === Object.keys(this.handlersMap).length && this.eventTarget.addEventListener("message", this.boundEventHandler), this.handlersMap[e] || (this.handlersMap[e] = new Set), this.handlersMap[e].add(t)
        }
        _unsubscribe(e, t) {
            this.handlersMap[e] && t && this.handlersMap[e].delete(t), t && 0 !== this.handlersMap[e].size || delete this.handlersMap[e], 0 === Object.keys(this.handlersMap).length && this.eventTarget.removeEventListener("message", this.boundEventHandler)
        }
    }

    function da(e = "", t = 10) {
        let n = "";
        for (let e = 0; e < t; e++) n += Math.floor(10 * Math.random());
        return e + n
    }
    ua.receivers = [];
    class pa {
        constructor(e) {
            this.target = e, this.handlers = new Set
        }
        removeMessageHandler(e) {
            e.messageChannel && (e.messageChannel.port1.removeEventListener("message", e.onMessage), e.messageChannel.port1.close()), this.handlers.delete(e)
        }
        async _send(e, t, n = 50) {
            const i = "undefined" != typeof MessageChannel ? new MessageChannel : null;
            if (!i) throw new Error("connection_unavailable");
            let s, r;
            return new Promise(((o, a) => {
                const c = da("", 20);
                i.port1.start();
                const l = setTimeout((() => {
                    a(new Error("unsupported_event"))
                }), n);
                r = {
                    messageChannel: i,
                    onMessage(e) {
                        const t = e;
                        if (t.data.eventId === c) switch (t.data.status) {
                            case "ack":
                                clearTimeout(l), s = setTimeout((() => {
                                    a(new Error("timeout"))
                                }), 3e3);
                                break;
                            case "done":
                                clearTimeout(s), o(t.data.response);
                                break;
                            default:
                                clearTimeout(l), clearTimeout(s), a(new Error("invalid_response"))
                        }
                    }
                }, this.handlers.add(r), i.port1.addEventListener("message", r.onMessage), this.target.postMessage({
                    eventType: e,
                    eventId: c,
                    data: t
                }, [i.port2])
            })).finally((() => {
                r && this.removeMessageHandler(r)
            }))
        }
    }

    function fa() {
        return window
    }

    function ma() {
        return void 0 !== fa().WorkerGlobalScope && "function" == typeof fa().importScripts
    }
    const ga = "firebaseLocalStorageDb",
        _a = "firebaseLocalStorage",
        va = "fbase_key";
    class ya {
        constructor(e) {
            this.request = e
        }
        toPromise() {
            return new Promise(((e, t) => {
                this.request.addEventListener("success", (() => {
                    e(this.request.result)
                })), this.request.addEventListener("error", (() => {
                    t(this.request.error)
                }))
            }))
        }
    }

    function wa(e, t) {
        return e.transaction([_a], t ? "readwrite" : "readonly").objectStore(_a)
    }

    function ba() {
        const e = indexedDB.open(ga, 1);
        return new Promise(((t, n) => {
            e.addEventListener("error", (() => {
                n(e.error)
            })), e.addEventListener("upgradeneeded", (() => {
                const t = e.result;
                try {
                    t.createObjectStore(_a, {
                        keyPath: va
                    })
                } catch (e) {
                    n(e)
                }
            })), e.addEventListener("success", (async () => {
                const n = e.result;
                n.objectStoreNames.contains(_a) ? t(n) : (n.close(), await
                    function() {
                        const e = indexedDB.deleteDatabase(ga);
                        return new ya(e).toPromise()
                    }(), t(await ba()))
            }))
        }))
    }
    async function Ia(e, t, n) {
        const i = wa(e, !0).put({
            [va]: t,
            value: n
        });
        return new ya(i).toPromise()
    }

    function Ca(e, t) {
        const n = wa(e, !0).delete(t);
        return new ya(n).toPromise()
    }
    class Ta {
        constructor() {
            this.type = "LOCAL", this._shouldAllowMigration = !0, this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.pendingWrites = 0, this.receiver = null, this.sender = null, this.serviceWorkerReceiverAvailable = !1, this.activeServiceWorker = null, this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then((() => {}), (() => {}))
        }
        async _openDb() {
            return this.db || (this.db = await ba()), this.db
        }
        async _withRetries(e) {
            let t = 0;
            for (;;) try {
                const t = await this._openDb();
                return await e(t)
            } catch (e) {
                if (t++ > 3) throw e;
                this.db && (this.db.close(), this.db = void 0)
            }
        }
        async initializeServiceWorkerMessaging() {
            return ma() ? this.initializeReceiver() : this.initializeSender()
        }
        async initializeReceiver() {
            this.receiver = ua._getInstance(ma() ? self : null), this.receiver._subscribe("keyChanged", (async (e, t) => ({
                keyProcessed: (await this._poll()).includes(t.key)
            }))), this.receiver._subscribe("ping", (async (e, t) => ["keyChanged"]))
        }
        async initializeSender() {
            var e, t;
            if (this.activeServiceWorker = await async function() {
                if (!(null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker)) return null;
                try {
                    return (await navigator.serviceWorker.ready).active
                } catch (e) {
                    return null
                }
            }(), !this.activeServiceWorker) return;
            this.sender = new pa(this.activeServiceWorker);
            const n = await this.sender._send("ping", {}, 800);
            n && (null === (e = n[0]) || void 0 === e ? void 0 : e.fulfilled) && (null === (t = n[0]) || void 0 === t ? void 0 : t.value.includes("keyChanged")) && (this.serviceWorkerReceiverAvailable = !0)
        }
        async notifyServiceWorker(e) {
            var t;
            if (this.sender && this.activeServiceWorker && ((null === (t = null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker) || void 0 === t ? void 0 : t.controller) || null) === this.activeServiceWorker) try {
                await this.sender._send("keyChanged", {
                    key: e
                }, this.serviceWorkerReceiverAvailable ? 800 : 50)
            } catch (t) {}
        }
        async _isAvailable() {
            try {
                if (!indexedDB) return !1;
                const e = await ba();
                return await Ia(e, ra, "1"), await Ca(e, ra), !0
            } catch (e) {}
            return !1
        }
        async _withPendingWrite(e) {
            this.pendingWrites++;
            try {
                await e()
            } finally {
                this.pendingWrites--
            }
        }
        async _set(e, t) {
            return this._withPendingWrite((async () => (await this._withRetries((n => Ia(n, e, t))), this.localCache[e] = t, this.notifyServiceWorker(e))))
        }
        async _get(e) {
            const t = await this._withRetries((t => async function(e, t) {
                const n = wa(e, !1).get(t),
                    i = await new ya(n).toPromise();
                return void 0 === i ? null : i.value
            }(t, e)));
            return this.localCache[e] = t, t
        }
        async _remove(e) {
            return this._withPendingWrite((async () => (await this._withRetries((t => Ca(t, e))), delete this.localCache[e], this.notifyServiceWorker(e))))
        }
        async _poll() {
            const e = await this._withRetries((e => {
                const t = wa(e, !1).getAll();
                return new ya(t).toPromise()
            }));
            if (!e) return [];
            if (0 !== this.pendingWrites) return [];
            const t = [],
                n = new Set;
            for (const {
                fbase_key: i,
                value: s
            }
                of e) n.add(i), JSON.stringify(this.localCache[i]) !== JSON.stringify(s) && (this.notifyListeners(i, s), t.push(i));
            for (const e of Object.keys(this.localCache)) this.localCache[e] && !n.has(e) && (this.notifyListeners(e, null), t.push(e));
            return t
        }
        notifyListeners(e, t) {
            this.localCache[e] = t;
            const n = this.listeners[e];
            if (n)
                for (const e of Array.from(n)) e(t)
        }
        startPolling() {
            this.stopPolling(), this.pollTimer = setInterval((async () => this._poll()), 800)
        }
        stopPolling() {
            this.pollTimer && (clearInterval(this.pollTimer), this.pollTimer = null)
        }
        _addListener(e, t) {
            0 === Object.keys(this.listeners).length && this.startPolling(), this.listeners[e] || (this.listeners[e] = new Set, this._get(e)), this.listeners[e].add(t)
        }
        _removeListener(e, t) {
            this.listeners[e] && (this.listeners[e].delete(t), 0 === this.listeners[e].size && delete this.listeners[e]), 0 === Object.keys(this.listeners).length && this.stopPolling()
        }
    }
    Ta.type = "LOCAL";
    const ka = Ta;

    function Ea(e) {
        return `__${e}${Math.floor(1e6*Math.random())}`
    }
    Ea("rcb"), new Xr(3e4, 6e4);
    class Sa {
        constructor(e) {
            this.providerId = Sa.PROVIDER_ID, this.auth = Uo(e)
        }
        verifyPhoneNumber(e, t) {
            return async function(e, t, n) {
                var i;
                const s = await n.verify();
                try {
                    let r;
                    if (Vr("string" == typeof s, e, "argument-error"), Vr("recaptcha" === n.type, e, "argument-error"), r = "string" == typeof t ? {
                        phoneNumber: t
                    } : t, "session" in r) {
                        const t = r.session;
                        if ("phoneNumber" in r) {
                            Vr("enroll" === t.type, e, "internal-error");
                            const n = await
                                function(e, t) {
                                    return so(e, "POST", "/v2/accounts/mfaEnrollment:start", io(e, t))
                                }(e, {
                                    idToken: t.credential,
                                    phoneEnrollmentInfo: {
                                        phoneNumber: r.phoneNumber,
                                        recaptchaToken: s
                                    }
                                });
                            return n.phoneSessionInfo.sessionInfo
                        } {
                            Vr("signin" === t.type, e, "internal-error");
                            const n = (null === (i = r.multiFactorHint) || void 0 === i ? void 0 : i.uid) || r.multiFactorUid;
                            Vr(n, e, "missing-multi-factor-info");
                            const o = await
                                function(e, t) {
                                    return so(e, "POST", "/v2/accounts/mfaSignIn:start", io(e, t))
                                }(e, {
                                    mfaPendingCredential: t.credential,
                                    mfaEnrollmentId: n,
                                    phoneSignInInfo: {
                                        recaptchaToken: s
                                    }
                                });
                            return o.phoneResponseInfo.sessionInfo
                        }
                    } {
                        const {
                            sessionInfo: t
                        } = await async function(e, t) {
                            return so(e, "POST", "/v1/accounts:sendVerificationCode", io(e, t))
                        }(e, {
                            phoneNumber: r.phoneNumber,
                            recaptchaToken: s
                        });
                        return t
                    }
                } finally {
                    n._reset()
                }
            }(this.auth, e, A(t))
        }
        static credential(e, t) {
            return zo._fromVerification(e, t)
        }
        static credentialFromResult(e) {
            const t = e;
            return Sa.credentialFromTaggedObject(t)
        }
        static credentialFromError(e) {
            return Sa.credentialFromTaggedObject(e.customData || {})
        }
        static credentialFromTaggedObject({
                                              _tokenResponse: e
                                          }) {
            if (!e) return null;
            const {
                phoneNumber: t,
                temporaryProof: n
            } = e;
            return t && n ? zo._fromTokenResponse(t, n) : null
        }
    }
    Sa.PROVIDER_ID = "phone", Sa.PHONE_SIGN_IN_METHOD = "phone";
    class Na extends Wo {
        constructor(e) {
            super("custom", "custom"), this.params = e
        }
        _getIdTokenResponse(e) {
            return Bo(e, this._buildIdpRequest())
        }
        _linkToIdToken(e, t) {
            return Bo(e, this._buildIdpRequest(t))
        }
        _getReauthenticationResolver(e) {
            return Bo(e, this._buildIdpRequest())
        }
        _buildIdpRequest(e) {
            const t = {
                requestUri: this.params.requestUri,
                sessionId: this.params.sessionId,
                postBody: this.params.postBody,
                tenantId: this.params.tenantId,
                pendingToken: this.params.pendingToken,
                returnSecureToken: !0,
                returnIdpCredential: !0
            };
            return e && (t.idToken = e), t
        }
    }

    function Ra(e) {
        return sa(e.auth, new Na(e), e.bypassAuthState)
    }

    function Pa(e) {
        const {
            auth: t,
            user: n
        } = e;
        return Vr(n, t, "internal-error"), async function(e, t, n = !1) {
            const {
                auth: i
            } = e, s = "reauthenticate";
            try {
                const r = await fo(e, ia(i, s, t, e), n);
                Vr(r.idToken, i, "internal-error");
                const o = po(r.idToken);
                Vr(o, i, "internal-error");
                const {
                    sub: a
                } = o;
                return Vr(e.uid === a, i, "user-mismatch"), ea._forOperation(e, s, r)
            } catch (e) {
                throw "auth/user-not-found" === (null == e ? void 0 : e.code) && jr(i, "user-mismatch"), e
            }
        }(n, new Na(e), e.bypassAuthState)
    }
    async function Oa(e) {
        const {
            auth: t,
            user: n
        } = e;
        return Vr(n, t, "internal-error"), async function(e, t, n = !1) {
            const i = await fo(e, t._linkToIdToken(e.auth, await e.getIdToken()), n);
            return ea._forOperation(e, "link", i)
        }(n, new Na(e), e.bypassAuthState)
    }
    class xa {
        constructor(e, t, n, i, s = !1) {
            this.auth = e, this.resolver = n, this.user = i, this.bypassAuthState = s, this.pendingPromise = null, this.eventManager = null, this.filter = Array.isArray(t) ? t : [t]
        }
        execute() {
            return new Promise((async (e, t) => {
                this.pendingPromise = {
                    resolve: e,
                    reject: t
                };
                try {
                    this.eventManager = await this.resolver._initialize(this.auth), await this.onExecution(), this.eventManager.registerConsumer(this)
                } catch (e) {
                    this.reject(e)
                }
            }))
        }
        async onAuthEvent(e) {
            const {
                urlResponse: t,
                sessionId: n,
                postBody: i,
                tenantId: s,
                error: r,
                type: o
            } = e;
            if (r) return void this.reject(r);
            const a = {
                auth: this.auth,
                requestUri: t,
                sessionId: n,
                tenantId: s || void 0,
                postBody: i || void 0,
                user: this.user,
                bypassAuthState: this.bypassAuthState
            };
            try {
                this.resolve(await this.getIdpTask(o)(a))
            } catch (e) {
                this.reject(e)
            }
        }
        onError(e) {
            this.reject(e)
        }
        getIdpTask(e) {
            switch (e) {
                case "signInViaPopup":
                case "signInViaRedirect":
                    return Ra;
                case "linkViaPopup":
                case "linkViaRedirect":
                    return Oa;
                case "reauthViaPopup":
                case "reauthViaRedirect":
                    return Pa;
                default:
                    jr(this.auth, "internal-error")
            }
        }
        resolve(e) {
            $r(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.resolve(e), this.unregisterAndCleanUp()
        }
        reject(e) {
            $r(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.reject(e), this.unregisterAndCleanUp()
        }
        unregisterAndCleanUp() {
            this.eventManager && this.eventManager.unregisterConsumer(this), this.pendingPromise = null, this.cleanUp()
        }
    }
    const Aa = new Xr(2e3, 1e4);
    class Da extends xa {
        constructor(e, t, n, i, s) {
            super(e, t, i, s), this.provider = n, this.authWindow = null, this.pollId = null, Da.currentPopupAction && Da.currentPopupAction.cancel(), Da.currentPopupAction = this
        }
        async executeNotNull() {
            const e = await this.execute();
            return Vr(e, this.auth, "internal-error"), e
        }
        async onExecution() {
            $r(1 === this.filter.length, "Popup operations only handle one event");
            const e = da();
            this.authWindow = await this.resolver._openPopup(this.auth, this.provider, this.filter[0], e), this.authWindow.associatedEvent = e, this.resolver._originValidation(this.auth).catch((e => {
                this.reject(e)
            })), this.resolver._isIframeWebStorageSupported(this.auth, (e => {
                e || this.reject(Br(this.auth, "web-storage-unsupported"))
            })), this.pollUserCancellation()
        }
        get eventId() {
            var e;
            return (null === (e = this.authWindow) || void 0 === e ? void 0 : e.associatedEvent) || null
        }
        cancel() {
            this.reject(Br(this.auth, "cancelled-popup-request"))
        }
        cleanUp() {
            this.authWindow && this.authWindow.close(), this.pollId && window.clearTimeout(this.pollId), this.authWindow = null, this.pollId = null, Da.currentPopupAction = null
        }
        pollUserCancellation() {
            const e = () => {
                var t, n;
                (null === (n = null === (t = this.authWindow) || void 0 === t ? void 0 : t.window) || void 0 === n ? void 0 : n.closed) ? this.pollId = window.setTimeout((() => {
                    this.pollId = null, this.reject(Br(this.auth, "popup-closed-by-user"))
                }), 2e3): this.pollId = window.setTimeout(e, Aa.get())
            };
            e()
        }
    }
    Da.currentPopupAction = null;
    const La = new Map;
    class Ma extends xa {
        constructor(e, t, n = !1) {
            super(e, ["signInViaRedirect", "linkViaRedirect", "reauthViaRedirect", "unknown"], t, void 0, n), this.eventId = null
        }
        async execute() {
            let e = La.get(this.auth._key());
            if (!e) {
                try {
                    const t = await async function(e, t) {
                        const n = function(e) {
                                return Co("pendingRedirect", e.config.apiKey, e.name)
                            }(t),
                            i = function(e) {
                                return Gr(e._redirectPersistence)
                            }(e);
                        if (!await i._isAvailable()) return !1;
                        const s = "true" === await i._get(n);
                        return await i._remove(n), s
                    }(this.resolver, this.auth) ? await super.execute() : null;
                    e = () => Promise.resolve(t)
                } catch (t) {
                    e = () => Promise.reject(t)
                }
                La.set(this.auth._key(), e)
            }
            return this.bypassAuthState || La.set(this.auth._key(), (() => Promise.resolve(null))), e()
        }
        async onAuthEvent(e) {
            if ("signInViaRedirect" === e.type) return super.onAuthEvent(e);
            if ("unknown" !== e.type) {
                if (e.eventId) {
                    const t = await this.auth._redirectUserForId(e.eventId);
                    if (t) return this.user = t, super.onAuthEvent(e);
                    this.resolve(null)
                }
            } else this.resolve(null)
        }
        async onExecution() {}
        cleanUp() {}
    }

    function Fa(e, t) {
        La.set(e._key(), t)
    }
    async function Ua(e, t, n = !1) {
        const i = Uo(e),
            s = function(e, t) {
                return t ? Gr(t) : (Vr(e._popupRedirectResolver, e, "argument-error"), e._popupRedirectResolver)
            }(i, t),
            r = new Ma(i, s, n),
            o = await r.execute();
        return o && !n && (delete o.user._redirectEventId, await i._persistUserIfCurrent(o.user), await i._setRedirectUser(null, t)), o
    }
    class qa {
        constructor(e) {
            this.auth = e, this.cachedEventUids = new Set, this.consumers = new Set, this.queuedRedirectEvent = null, this.hasHandledPotentialRedirect = !1, this.lastProcessedEventTime = Date.now()
        }
        registerConsumer(e) {
            this.consumers.add(e), this.queuedRedirectEvent && this.isEventForConsumer(this.queuedRedirectEvent, e) && (this.sendToConsumer(this.queuedRedirectEvent, e), this.saveEventToCache(this.queuedRedirectEvent), this.queuedRedirectEvent = null)
        }
        unregisterConsumer(e) {
            this.consumers.delete(e)
        }
        onEvent(e) {
            if (this.hasEventBeenHandled(e)) return !1;
            let t = !1;
            return this.consumers.forEach((n => {
                this.isEventForConsumer(e, n) && (t = !0, this.sendToConsumer(e, n), this.saveEventToCache(e))
            })), this.hasHandledPotentialRedirect || ! function(e) {
                switch (e.type) {
                    case "signInViaRedirect":
                    case "linkViaRedirect":
                    case "reauthViaRedirect":
                        return !0;
                    case "unknown":
                        return ja(e);
                    default:
                        return !1
                }
            }(e) || (this.hasHandledPotentialRedirect = !0, t || (this.queuedRedirectEvent = e, t = !0)), t
        }
        sendToConsumer(e, t) {
            var n;
            if (e.error && !ja(e)) {
                const i = (null === (n = e.error.code) || void 0 === n ? void 0 : n.split("auth/")[1]) || "internal-error";
                t.onError(Br(this.auth, i))
            } else t.onAuthEvent(e)
        }
        isEventForConsumer(e, t) {
            const n = null === t.eventId || !!e.eventId && e.eventId === t.eventId;
            return t.filter.includes(e.type) && n
        }
        hasEventBeenHandled(e) {
            return Date.now() - this.lastProcessedEventTime >= 6e5 && this.cachedEventUids.clear(), this.cachedEventUids.has(Wa(e))
        }
        saveEventToCache(e) {
            this.cachedEventUids.add(Wa(e)), this.lastProcessedEventTime = Date.now()
        }
    }

    function Wa(e) {
        return [e.type, e.eventId, e.sessionId, e.tenantId].filter((e => e)).join("-")
    }

    function ja({
                    type: e,
                    error: t
                }) {
        return "unknown" === e && "auth/no-auth-event" === (null == t ? void 0 : t.code)
    }
    const Ba = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
        Ha = /^https?/;

    function Va(e) {
        const t = Yr(),
            {
                protocol: n,
                hostname: i
            } = new URL(t);
        if (e.startsWith("chrome-extension://")) {
            const s = new URL(e);
            return "" === s.hostname && "" === i ? "chrome-extension:" === n && e.replace("chrome-extension://", "") === t.replace("chrome-extension://", "") : "chrome-extension:" === n && s.hostname === i
        }
        if (!Ha.test(n)) return !1;
        if (Ba.test(e)) return i === e;
        const s = e.replace(/\./g, "\\.");
        return new RegExp("^(.+\\." + s + "|" + s + ")$", "i").test(i)
    }
    const za = new Xr(3e4, 6e4);

    function $a() {
        const e = fa().___jsl;
        if (null == e ? void 0 : e.H)
            for (const t of Object.keys(e.H))
                if (e.H[t].r = e.H[t].r || [], e.H[t].L = e.H[t].L || [], e.H[t].r = [...e.H[t].L], e.CP)
                    for (let t = 0; t < e.CP.length; t++) e.CP[t] = null
    }
    let Ka = null;

    function Ga(e) {
        return Ka = Ka || function(e) {
            return new Promise(((t, n) => {
                var i, s, r, o;

                function a() {
                    $a(), gapi.load("gapi.iframes", {
                        callback: () => {
                            t(gapi.iframes.getContext())
                        },
                        ontimeout: () => {
                            $a(), n(Br(e, "network-request-failed"))
                        },
                        timeout: za.get()
                    })
                }
                if (null === (s = null === (i = fa().gapi) || void 0 === i ? void 0 : i.iframes) || void 0 === s ? void 0 : s.Iframe) t(gapi.iframes.getContext());
                else {
                    if (!(null === (r = fa().gapi) || void 0 === r ? void 0 : r.load)) {
                        const t = Ea("iframefcb");
                        return fa()[t] = () => {
                            gapi.load ? a() : n(Br(e, "network-request-failed"))
                        }, (o = `https://apis.google.com/js/api.js?onload=${t}`, new Promise(((e, t) => {
                            const n = document.createElement("script");
                            var i, s;
                            n.setAttribute("src", o), n.onload = e, n.onerror = e => {
                                const n = Br("internal-error");
                                n.customData = e, t(n)
                            }, n.type = "text/javascript", n.charset = "UTF-8", (null !== (s = null === (i = document.getElementsByTagName("head")) || void 0 === i ? void 0 : i[0]) && void 0 !== s ? s : document).appendChild(n)
                        }))).catch((e => n(e)))
                    }
                    a()
                }
            })).catch((e => {
                throw Ka = null, e
            }))
        }(e), Ka
    }
    const Ya = new Xr(5e3, 15e3),
        Ja = {
            style: {
                position: "absolute",
                top: "-100px",
                width: "1px",
                height: "1px"
            },
            "aria-hidden": "true",
            tabindex: "-1"
        },
        Qa = new Map([
            ["identitytoolkit.googleapis.com", "p"],
            ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
            ["test-identitytoolkit.sandbox.googleapis.com", "t"]
        ]);

    function Xa(e) {
        const t = e.config;
        Vr(t.authDomain, e, "auth-domain-config-required");
        const n = t.emulator ? Zr(t, "emulator/auth/iframe") : `https://${e.config.authDomain}/__/auth/iframe`,
            i = {
                apiKey: t.apiKey,
                appName: e.name,
                v: ye
            },
            s = Qa.get(e.config.apiHost);
        s && (i.eid = s);
        const r = e._getFrameworks();
        return r.length && (i.fw = r.join(",")), `${n}?${k(i).slice(1)}`
    }
    const Za = {
        location: "yes",
        resizable: "yes",
        statusbar: "yes",
        toolbar: "no"
    };
    class ec {
        constructor(e) {
            this.window = e, this.associatedEvent = null
        }
        close() {
            if (this.window) try {
                this.window.close()
            } catch (e) {}
        }
    }

    function tc(e, t, n, i, s, r) {
        Vr(e.config.authDomain, e, "auth-domain-config-required"), Vr(e.config.apiKey, e, "invalid-api-key");
        const o = {
            apiKey: e.config.apiKey,
            appName: e.name,
            authType: n,
            redirectUrl: i,
            v: ye,
            eventId: s
        };
        if (t instanceof Go) {
            t.setDefaultLanguage(e.languageCode), o.providerId = t.providerId || "", b(t.getCustomParameters()) || (o.customParameters = JSON.stringify(t.getCustomParameters()));
            for (const [e, t] of Object.entries(r || {})) o[e] = t
        }
        if (t instanceof Yo) {
            const e = t.getScopes().filter((e => "" !== e));
            e.length > 0 && (o.scopes = e.join(","))
        }
        e.tenantId && (o.tid = e.tenantId);
        const a = o;
        for (const e of Object.keys(a)) void 0 === a[e] && delete a[e];
        return `${function({config:e}){return e.emulator?Zr(e,"emulator/auth/handler"):`
            https: //${e.authDomain}/__/auth/handler`}(e)}?${k(a).slice(1)}`}const nc="webStorageSupport",ic=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ha,this._completeRedirectFn=Ua,this._overrideRedirectResult=Fa}async _openPopup(e,t,n,i){var s;return $r(null===(s=this.eventManagers[e._key()])||void 0===s?void 0:s.manager,"_initialize() not called before _openPopup()"),function(e,t,n,i=500,s=600){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Za),{width:i.toString(),height:s.toString(),top:r,left:o}),l=h().toLowerCase();n&&(a=No(l)?"_blank":n),Eo(l)&&(t=t||"http://localhost",c.scrollbars="yes");const u=Object.entries(c).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=h()){var t;return Ao(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(l)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}(t||"",a),new ec(null);const d=window.open(t||"",a,u);Vr(d,e,"popup-blocked");try{d.focus()}catch(e){}return new ec(d)}(e,tc(e,t,n,Yr(),i),da())}async _openRedirect(e,t,n,i){var s;return await this._originValidation(e),s=tc(e,t,n,Yr(),i),fa().location.href=s,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):($r(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await async function(e){const t=await Ga(e),n=fa().gapi;return Vr(n,e,"internal-error"),t.open({where:document.body,url:Xa(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ja,dontclear:!0},(t=>new Promise((async(n,i)=>{await t.restyle({setHideOnLeave:!1});const s=Br(e,"network-request-failed"),r=fa().setTimeout((()=>{i(s)}),Ya.get());function o(){fa().clearTimeout(r),n(t)}t.ping(o).then(o,(()=>{i(s)}))}))))}(e),n=new qa(e);return t.register("authEvent",(t=>(Vr(null==t?void 0:t.authEvent,e,"invalid-auth-event"),{status:n.onEvent(t.authEvent)?"ACK":"ERROR"})),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(nc,{type:nc},(n=>{var i;const s=null===(i=null==n?void 0:n[0])||void 0===i?void 0:i.webStorageSupport;void 0!==s&&t(!!s),jr(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=async function(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return so(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(Va(e))return}catch(e){}jr(e,"unauthorized-domain")}(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Do()||So()||Ao()}};var sc,rc="@firebase/auth",oc="0.20.2";class ac{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Vr(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}function cc(e){return e.getFullYear()+"/"+("0"+(e.getMonth()+1)).slice(-2)+"/"+("0"+e.getDate()).slice(-2)}function lc(e){return e.getDate()+"-"+["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][e.getMonth()]+"-"+e.getFullYear()}function hc(e){return(e=e/60+.5|0)>=60?(0|e/60)+"h "+("0"+e%60).slice(-2)+"m":e+"m"}sc="Browser",me(new D("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:r}=n.options;return((e,n)=>{Vr(s&&!s.includes(":"),"invalid-api-key",{appName:e.name}),Vr(!(null==r?void 0:r.includes(":")),"argument-error",{appName:e.name});const i={apiKey:s,authDomain:r,clientPlatform:sc,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Lo(sc)},o=new Fo(e,n,i);return function(e,t){const n=(null==t?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Gr);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,null==t?void 0:t.popupRedirectResolver)}(o,t),o})(n,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),me(new D("auth-internal",(e=>{return t=Uo(e.getProvider("auth").getImmediate()),new ac(t);var t}),"PRIVATE").setInstantiationMode("EXPLICIT")),be(rc,oc,void 0),be(rc,oc,"esm2017");const uc={},dc=["DB","EXP","IRR","RR","SXS","TTR","URL"],pc=document.getElementById("bell"),fc={type:"basic",title:"LBTimer "+chrome.runtime.getManifest().version,iconUrl:"img/f.svg"};let mc,gc,_c,vc,yc,wc,bc,Ic,Cc,Tc,kc,Ec,Sc,Nc,Rc,Pc,Oc,xc,Ac,Dc,Lc=Array(21).fill(0),Mc=0,Fc=0,Uc=0,qc=-1,Wc=0,jc=1,Bc=0,Hc=8e3,Vc=0,zc=[],$c=[],Kc=[],Gc=[],Yc="",Jc=[],Qc=[],Xc=[],Zc=[],el={command:"save",warningFactor:.85,autoReloadTime:12e4,oflags:4199743,ast:100,sooner:5,later:5,payrate:10,dailyWarn:0,weeklyWarn:0,monthlyWarn:0,ct:8e3,mls:"",fdw:1,crl:[["",""],["",""],["",""],["",""],["",""]]},tl=[];function nl(e){setTimeout(chrome.notifications.clear,6e4,e)}function il(e){setTimeout(chrome.notifications.clear,5e3,e)}function sl(e,t){t&&console.log(e),t=(new Date).toLocaleTimeString()+" -> "+e,chrome.storage.local.get({l:[]},(e=>{e.l.push(t),chrome.storage.local.set(e)}))}function rl(e){Lc=e.val()||Array(21).fill(0),chrome.runtime.sendMessage({command:"updatesheet",w:wc,d:Lc,of:el.oflags,pr:el.payrate})}function ol(e,t){const n={};return Object.keys(t).forEach((i=>{n[e+"/"+i]=t[i]})),n}function al(e){const t={};for(let n in e)if("object"!=typeof e[n]||toString.call(e[n]).includes("rray"))t[n]=e[n];else{let i=al(e[n]);for(let e in i)t[n+"/"+e]=i[e]}return Object.keys(t).sort().reduce(((e,n)=>(e[n]=t[n],e)),{})}function cl(){Oc=0;const e=wc.slice(0,7),t=t=>{Ac=xc=0;for(let n in t)if(n!=wc){if(~i.indexOf(n))for(let e=7;e--;)xc+=t[n][1024&el.oflags?2*e:14+e];if(!n.indexOf(e))for(let e=7;e--;)Ac+=t[n][1024&el.oflags?2*e:14+e]}Ac/=60,xc/=60,Ac>=el.monthlyWarn&&(Oc|=4),xc>=el.weeklyWarn&&(Oc|=2)};let n=new Date(gc);n.setDate(n.getDate()-n.getDay()+(n.getDay()?1:-6)*el.fdw);let i=[cc(n)];for(;n.setDate(n.getDate()+1)&&n.getDay()!=el.fdw;)i.push(cc(n));const s=i[0].slice(0,7),r=i[6].slice(0,7);xr(Er(mc,vc+s),s==r?e=>{t(e.val()?ol(s,e.val()):{})}:e=>{let n=e.val()?ol(s,e.val()):{};xr(Er(mc,vc+r),(e=>{t(e.val()?Object.assign(n,ol(r,e.val())):n)}),{onlyOnce:!0})},{onlyOnce:!0})}function ll(e,t,n,i){uc[i]=1,Lc[2*e]+=t,Lc[2*e+1]++,Lc[14+e]+=n,Nr(Er(mc,vc+wc),Lc).then((()=>{!function(e,t){const n={type:"list",iconUrl:"img/g.svg",message:"",title:"LBTimer: +1 "+dc[e]+" ("+t+") task added"};if(sl(n.title),!(4&el.oflags||el.dailyWarn||el.weeklyWarn||el.monthlyWarn))return;const i=[{title:lc(gc),message:" Tasks completed:"}];let s=0;for(let e=0;7>e;e++)s+=1024&el.oflags?Lc[2*e]:Lc[14+e],Lc[2*e+1]&&i.push({title:dc[e]+":",message:(Lc[14+e]/60).toFixed(2)+" min(s). "+Lc[2*e+1]+" tasks"});s/=60,n.items=i,4&el.oflags&&chrome.notifications.create(n,il),el.dailyWarn&&!(1&Oc)&&s>=el.dailyWarn&&(chrome.notifications.create({type:"basic",iconUrl:'data:image/svg+xml;utf8,<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path stroke-width="10" stroke="gold" fill="%23fff" d="M50 5A44 45 0 1 1 7 45L15 5Z"/><rect fill="gold" x="45" y="48" width="35" height="7" rx="3.5" ry="3.5"/><rect fill="gold" x="45" y="12" width="8" height="42" rx="4" ry="4"/></svg>',title:"Daily goal achieved!",message:"You've worked "+(s>=60?(0|s/60)+"h ":"")+(s%60?(0|s%60)+"m":"")+" today"},nl),Oc|=1);let r=xc+s;el.weeklyWarn&&!(2&Oc)&&r>=el.weeklyWarn&&(chrome.notifications.create({type:"basic",iconUrl:'data:image/svg+xml;utf8,<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path stroke-width="10" stroke="gold" fill="%23fff" d="M50 5A44 45 0 1 1 7 45L15 5Z"/><text fill="gold" x="30" y="78" font-family="Ubuntu,sans-serif" font-size="75">7</text></svg>',title:"Weekly goal achieved!",message:"You've worked "+(r>=60?(0|r/60)+"h ":"")+(r%60?(0|r%60)+"m":"")+" this week"},nl),Oc|=2),r=Ac+s,el.monthlyWarn&&!(4&Oc)&&r>=el.monthlyWarn&&(chrome.notifications.create({type:"basic",iconUrl:'data:image/svg+xml;utf8,<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g fill="gold" font-family="Ubuntu,sans-serif" font-size="70"><path stroke-width="10" stroke="gold" fill="%23fff" d="M50 5A44 45 0 1 1 7 45L15 5Z"/><text fill="gold" x="18" y="75">3</text><text fill="gold" x="48" y="75">1</text></g></svg>',title:"Monthly goal achieved!",message:"You've worked "+(r>=60?(0|r/60)+"h ":"")+(r%60?(0|r%60)+"m":"")+" this month"},nl),Oc|=4)}(e,i)})).catch((e=>{sl("Error saving data:"+e),"PERMISSION_DENIED"==e.code&&fl("warnsub")}))}function hl(){let e=0,t=0,n="";for(let i=0;i<7;i++)Lc[2*i+1]&&(n+=Lc[2*i+1]+" "+dc[i]+" "),e+=Lc[2*i],t+=Lc[14+i];chrome.browserAction.setTitle({title:"LBTimer "+lc(gc)+(n?"\n"+n:"")+(e?"\nAET: "+hc(e):"")+(t?"\nReal: "+hc(t):"")})}function ul(){if(Nc)chrome.windows.remove(Nc);else for(let e=Kc.length;e--;)if(Kc[e]&&Kc[e]!=Ic){let t=Gc.indexOf(Kc[e]);chrome.tabs.remove(Kc[e]),~t&&Gc.splice(t,1)}Rc?chrome.windows.remove(Rc):Gc.forEach((e=>{e&&e!=Ic&&chrome.tabs.remove(e)})),Kc=[],Gc=[]}function dl(){clearTimeout(Bc),qc=-1,Vc=Ic=Uc=0,chrome.browserAction.setBadgeText({text:""}),hl(),chrome.runtime.sendMessage({command:"release"}),jc=1}function pl(e,t,n){switch(e.command){case"startTimer":if(Ic&&Ic!==t.tab.id&&!confirm("There is another task page open.\nUse this one instead?"))break;Ic=t.tab.id,Sc=t.tab.windowId;const s=e.mxtime.replace(/\s/g,"").replace(/,/,".");let r=/([\d.]+)min/i.exec(s)||0,o=/([\d.]+)sec/i.exec(s)||0;r&&(r=60*parseFloat(r[1])),o&&(o=parseFloat(o[1])),r+o==0&&(r=/([\d.]+)/.exec(s)||0,r&&(r=60*parseFloat(r[1]))),Mc=0|r+o+.5,Mc||e.isCert||(Mc=300,chrome.tabs.executeScript(Ic,{code:'encodeURIComponent(document.querySelector("html").outerHTML)'},(e=>{yl("No AET:"+e)}))),Ec=Mc*el.warningFactor,Uc&=17,1^Uc&&(Uc=1,bc=Date.now(),Vc=0,_l()),qc=[/di/i,/ex/i,/g/i,/re/i,/si/i,/ti/i,/ur/i].findIndex((t=>t.test(e.task))),~qc||e.isCert||(qc=1,chrome.tabs.executeScript(Ic,{code:'encodeURIComponent(document.querySelector("html").outerHTML)'},(e=>{yl("No TaskType: "+e)})));let a=Lc[14+qc]-Lc[2*qc];a=a>0&&el.oflags&1<<19?el.sooner<a?el.sooner:0>a?0:a:el.oflags&1<<21?-el.later>a?-el.later:0<a?0:a:0,Hc=(0|Mc*el.ast/100)-a;const c=60<=Mc?Mc%60?(0|Mc/60)+":"+("0"+Mc%60).slice(-2)+" min.":Mc/60+" min.":Mc+" seconds";if(Wc!=e.taskId&&(Wc=e.taskId,sl("Acquired "+dc[qc]+" ("+Wc+") - "+c)),chrome.browserAction.setTitle({title:dc[qc]+" - "+c}),2&el.oflags&&chrome.notifications.create({type:"basic",iconUrl:"img/g.svg",title:"LBTimer task type: "+dc[qc],message:"Average estimated time: "+c},60<=Mc?nl:il),jc=0,el.oflags&=-16385,chrome.runtime.sendMessage({command:"reset",tasktype:qc,AET:Mc,of:el.oflags}),ul(),zc=e.leftURLs,$c=e.rightURLs,Yc=e.query,Jc=e.flags,Qc=e.lqsliders,Xc=e.rqsliders,Pc=e.sliderLength,Zc=e.lblArray,Dc=e.PQsliderLength,tl=e.PQlblArray,e.PQ)chrome.tabs.sendMessage(Ic,{command:"crl",crl:el.crl});else if(Pc){const e=e=>decodeURIComponent(e.replace(/https?:\/\/www\.(?:google|raterhub)\.com\/evaluation\/url\?q=/i,"")),t={q:Yc};for(let n=zc.length;n;)t["L"+n--]=e(zc[n]);for(let n=$c.length;n;)t["R"+n--]=e($c[n]);Nr(Er(mc,"users/"+yc.uid+"/s2d"),t).catch((e=>{sl("Error updating S2D info: "+e)}))}break;case"stopTimer":if(Ic||(Uc|=64),Ic&&Ic!==t.tab.id&&!confirm("There is another task page open.\nUse this one instead?"))break;if(Ic=t.tab.id,Sc=t.tab.windowId,clearTimeout(Bc),Vc=0,chrome.browserAction.setBadgeText({text:e.tasks?"TSK":"NRT"}),chrome.browserAction.setBadgeBackgroundColor({color:e.tasks?"#70cf10":"#F44336"}),hl(),chrome.runtime.sendMessage({command:"release"}),e.tasks?(16&el.oflags&&(pc.play(),65536&el.oflags&&setTimeout(wl,2e4)),1&el.oflags&&chrome.notifications.create({type:"basic",iconUrl:"img/g.svg",title:"LBTimer",message:"There are tasks available"},il),e.incomplete?sl("Index page: There is a task to complete"):(Fc=0,ul(),Wc&&!uc[Wc]?(sl("Task ("+Wc+") released. There are tasks available"),Wc=0):sl("Index page: There are tasks available")),2048&el.oflags&&(1<<17&el.oflags&&(!jc||64&Uc)||chrome.tabs.sendMessage(Ic,{command:"acquire"})),jc&&(chrome.tabs.update(Ic,{active:!0},(()=>{chrome.windows.update(Sc,{focused:!0})})),1<<20&el.oflags&&el.mls.length&&fetch("https://lbtimer.com/sendmail.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({avail:el.mls,from:"lbtimer"})})),jc=0):(Fc=0,Wc&&!uc[Wc]?(sl("Task ("+Wc+") released. No more tasks available"),Wc=0):jc||sl("Index page: No tasks available"),jc=1,64&el.oflags&&setTimeout(bl,el.autoReloadTime||5e3)),Uc&=-66,4096&el.oflags){const e=el.oflags&1<<18?new Pacific.Date(new Date):new Date,t=cc(e);t!=wc&&(gc=e,wc=t,_c?.(),_c=xr(Er(mc,vc+wc),rl),chrome.notifications.create({type:"basic",iconUrl:"img/o.svg",title:"LBTimer NEW DAY",message:"Tasks will now be recorded on "+lc(gc)},il),sl("New day detected: "+lc(gc)),chrome.runtime.sendMessage({command:"refreshsheet"}),cl())}break;case"clock":Cc?chrome.tabs.get(Cc,(e=>{chrome.windows.update(e.windowId,{focused:!0})})):chrome.windows.create({url:"k.html",left:20,top:20,width:300,height:220,type:"popup"},(e=>{chrome.runtime.lastError||(Cc=e.tabs[0].id,setTimeout(chrome.tabs.sendMessage,500,Cc,{command:1&Uc?"reset":"release",tasktype:qc,AET:Mc}))}));break;case"popup":n([Uc,el.oflags,Mc,Fc,wc,Lc,el.payrate]);break;case"xprt":return xr(Er(mc,vc),(e=>{n(al(e.val()))}),{onlyOnce:!0}),!0;case"dK":n(wc);break;case"cdown":n(512&el.oflags);break;case"reset":Fc=0;break;case"op":chrome.tabs.create({url:e.link,openerTabId:Ic,active:!1});break;case"opensides":if(e.shifted)1&e.side&&zc.length&&chrome.windows.create({focused:!1,width:screen.availWidth,height:screen.availHeight},(e=>{Nc=e.id,zc.forEach(((e,t,n)=>{"0"!=e[0]&&n.indexOf(e)==t&&chrome.tabs.create({windowId:Nc,url:e})})),chrome.tabs.remove(e.tabs[0].id)})),2&e.side&&$c.length&&chrome.windows.create({focused:!1,width:screen.availWidth,height:screen.availHeight},(t=>{Rc=t.id,$c.forEach(((t,n,i)=>{"0"!=t[0]&&i.indexOf(t)==n&&(1&e.side&&~zc.indexOf(t)||chrome.tabs.create({windowId:Rc,url:t}))})),chrome.tabs.remove(t.tabs[0].id)}));else{const t=e=>{"0"!=e[0]&&chrome.tabs.create({url:e,active:!1,openerTabId:Ic})};1&e.side&&zc.forEach(t),2&e.side&&$c.forEach((n=>{1&e.side&&zc.includes(n)||t(n)}))}break;case"upd":return Nr(Er(mc,vc+e.name),e.data).then((()=>{n()})).catch((e=>{n(e)})),!0;case"del":const l={};return e.files.forEach((e=>{l[e]=null})),Rr(Er(mc,vc),l).then((()=>{n()})).catch((e=>{n(e)})),!0;case"cre":return Rr(Er(mc,vc),e.files).then((()=>{n()})).catch((e=>{n(e)})),!0;case"closeAll":ul();break;case"toLog":chrome.tabs.executeScript(Ic,{code:"encodeURIComponent(document.querySelector('html').outerHTML)"},(t=>{yl("Error parsing task: "+e.error+"; "+t)})),sl("Error parsing task: "+e.error);break;case"rprt":yl("Reported: "+e.rprt,1);break;case"uorq":case"fl":case"comment":case"mrkdup":chrome.tabs.sendMessage(Ic,e);break;case"rl":chrome.tabs.update(t.tab.id,{url:e.side?$c[e.result-1]:zc[e.result-1]});break;case"seldup":case"findup":const h=t=>{t&&chrome.tabs.sendMessage(t,e)};h(Ic),Kc.forEach(h),Gc.forEach(h);break;case"panel":n(el);break;case"save":const u=el.oflags^e.oflags;let d,p=el.dailyWarn^e.dailyWarn||el.weeklyWarn^e.weeklyWarn||el.monthlyWarn^e.monthlyWarn||el.fdw^e.fdw,f=el.fdw^e.fdw||8422400&u;if(el=e,ml(),~qc&&(d=Lc[14+qc]-Lc[2*qc],d=d>0&&el.oflags&1<<19?el.sooner<d?el.sooner:0>d?0:d:el.oflags&1<<21?-el.later>d?-el.later:0<d?0:d:0),Mc&&(Ec=Mc*el.warningFactor,Hc=(0|Mc*el.ast/100)-d),u&1<<18){const e=el.oflags&1<<18?new Pacific.Date(new Date):new Date,t=cc(e);t!=wc&&(gc=e,wc=t,_c?.(),_c=xr(Er(mc,vc+t),rl),f=1,p=1),fc.message=lc(gc)+(el.oflags&1<<18?"\nPacific Time":"\nLocal time"),chrome.notifications.create("welcome",fc,nl)}64&u&&64&el.oflags&&setTimeout(bl,el.autoReloadTime||5e3),p&&cl(),f&&chrome.runtime.sendMessage({command:"refreshsheet"}),Ic&&chrome.tabs.sendMessage(Ic,{command:"crl",crl:el.crl});break;case"panelopen":Tc=t.tab.id,chrome.tabs.sendMessage(Tc,{command:"init"});break;case"showPanel":gl();break;case"od":fl(e.which);break;case"toggleAuto":switch(e.auto){case 2:el.oflags|=16384;case 1:el.oflags|=128;break;default:el.oflags&=-16513}chrome.notifications.create("as",128&el.oflags?16384&el.oflags?{type:"basic",iconUrl:'data:image/svg+xml;utf8,<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M0 30 30 0 70 0 100 30 100 70 70 100 30 100 0 70z"/><path d="M8 32 32 08 68 8 92 32 92 68 68 92 32 92 08 68z" fill="%23f90"/><rect x="48" y="12" width="8" height="42" rx="4" ry="4"/><rect x="48" y="48" width="35" height="7" rx="3.5" ry="3.5"/></svg>',title:"LBTimer AUTO SUBMIT & STOP",message:"Current task will be submitted at AET and then return to homepage"}:{type:"basic",iconUrl:"img/g.svg",title:"LBTimer AUTO SUBMIT ON",message:"Tasks will be submitted at AET"}:{type:"basic",iconUrl:"img/r.svg",title:"LBTimer AUTO SUBMIT OFF",message:"Submit tasks manually"},nl),ml();break;case"toggleAcq":el.oflags^=2048,ml();break;case"toggleRel":el.oflags^=64,64&el.oflags&&setTimeout(bl,el.autoReloadTime||5e3),ml();break;case"timer":1&Uc&&(16&Uc?(Vc=0,bc=Date.now(),_l(),Uc&=-17,sl("Timer resumed"),n(1)):(clearTimeout(Bc),chrome.browserAction.setBadgeBackgroundColor({color:"#000"}),Uc|=16,sl("Timer paused"),n(0)));break;case"addThis":1&Uc||!~e.tasktype||ll(e.tasktype,e.AET,e.time,"MANUAL");break;case"doSubmit":32&Uc||(chrome.tabs.sendMessage(Ic,{command:"click",stop:16384&el.oflags}),Uc|=32);break;case"tsa":let m={};return e.months[1]&&e.months[1]!=e.months[0]?xr(Er(mc,vc+e.months[0]),(t=>{t.val()&&(m=ol(e.months[0],t.val())),xr(Er(mc,vc+e.months[1]),(t=>{t.val()&&Object.assign(m,ol(e.months[1],t.val())),n(m)}),{onlyOnce:!0})}),{onlyOnce:!0}):xr(Er(mc,vc+e.months[0]),(t=>{t.val()&&(m=ol(e.months[0],t.val())),n(m)}),{onlyOnce:!0}),!0;case"openLog":kc?chrome.tabs.get(kc,(e=>{chrome.windows.update(e.windowId,{focused:!0})})):chrome.windows.create({url:"l.html",type:"popup",width:600,height:400},(e=>{chrome.runtime.lastError||(kc=e.tabs[0].id)}));break;case"email":return i=e.msg,chrome.storage.local.get({l:[]},(e=>{fetch("https://lbtimer.com/sendmail.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({msg:i,log:e.l,ver:"LBTimer v."+chrome.runtime.getManifest().version,nav:navigator.userAgent,from:yc.providerData[0].email})}).then((e=>e.json())).then((e=>(e.error?(chrome.notifications.create({type:"basic",iconUrl:"img/r.svg",title:"email error",message:"Error trying to send the feedback"},nl),sl("Error trying to send email",1)):chrome.notifications.create({type:"basic",iconUrl:"img/c.svg",title:"email sent",message:"Thanks for your feedback!"},nl),void n())))})),!0;case"checksub":return xr(Er(mc,"subs/"+yc.uid),(e=>{n(e.val())}),{onlyOnce:!0}),!0;case"mngsub":xr(Er(mc,"subs/"+yc.uid+"/stripe"),(e=>{e.val()&&(chrome.notifications.create("bp",{type:"basic",iconUrl:'data:image/svg+xml;utf8,<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path stroke-width="10" stroke="gold" fill="%23fff" d="M50 5A44 45 0 1 1 7 45L15 5Z"/><rect fill="gold" x="45" y="48" width="35" height="7" rx="3.5" ry="3.5"/><rect fill="gold" x="45" y="12" width="8" height="42" rx="4" ry="4"/></svg>',title:"Opening Billing Portal",message:"Please wait..."},nl),fetch("https://lbtimer.com/subscription/cportal.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e.val()})}).then((e=>e.json())).then((e=>{e.url&&chrome.tabs.create({url:e.url},(()=>{chrome.notifications.clear("bp")}))})))}),{onlyOnce:!0});break;case"history":if(chrome.history){const t=el.oflags&1<<18?new Pacific.Date(e.when,1):new Date(e.when);return chrome.history.search({text:"raterhub taskId",startTime:t.getTime(),endTime:t.setHours(0)+864e5,maxResults:1e3},(e=>{n(e.sort(((e,t)=>e.lastVisitTime-t.lastVisitTime)))})),!0}confirm("To scan the browser's history, LBTimer needs to receive permission and then be restarted.\nDo you want to grant the permission and restart LBTimer now?")&&chrome.permissions.request({permissions:["history"]},(e=>{e&&chrome.runtime.reload()}))}var i}function fl(e){Tc?chrome.tabs.update(Tc,{active:!0},(t=>{chrome.windows.update(t.windowId,{focused:!0},(()=>{chrome.tabs.sendMessage(Tc,{command:"od",which:e})}))})):chrome.storage.local.set({o:e},(()=>{chrome.tabs.create({url:"m.html"})}))}function ml(){Nr(Er(mc,"users/"+yc.uid+"/settings"),el).catch((e=>{sl("Error saving settings: "+e)}))}function gl(){Tc?chrome.tabs.update(Tc,{active:!0},(e=>{chrome.windows.update(e.windowId,{focused:!0})})):chrome.tabs.create({url:"m.html"})}function _l(){const e=Date.now()-bc-1e3*Vc++,t=512&el.oflags?Math.abs(Mc-Fc):Fc,n={command:"tick",t:(0|t/60)+":"+("0"+t%60).slice(-2),c:"#70cf10"};!(32&Uc)&&128&el.oflags&&Fc>=Hc&&(chrome.tabs.sendMessage(Ic,{command:"click",stop:16384&el.oflags}),Uc|=32),Fc>=Mc?(n.c="#F44336",!(8&Uc)&&256&el.oflags&&(chrome.notifications.create("aet",{type:"basic",iconUrl:"img/r.svg",title:"LBTimer WARNING - AET",message:"You've reached the AET for this task",buttons:[{title:"Submit now",iconUrl:"img/f.svg"}]},il),Uc|=8),!(2&Uc)&&32&el.oflags&&(pc.play(),Uc|=2)):Fc>=Ec&&(n.c="#FFc300",!(4&Uc)&&8&el.oflags&&(chrome.notifications.create({type:"basic",iconUrl:"img/o.svg",title:"LBTimer WARNING",message:"You've reached "+100*el.warningFactor+"% of the AET"},il),Uc|=4)),chrome.browserAction.setBadgeBackgroundColor({color:n.c}),chrome.browserAction.setBadgeText({text:n.t}),chrome.runtime.sendMessage(n),Fc++,Bc=setTimeout(_l,1e3-e)}function vl(e){const t=e.val();t?t.invoice?chrome.storage.local.set({inv:t.invoice}):chrome.storage.local.remove("inv"):(chrome.tabs.create({url:"https://lbtimer.com/subscription/lbtimer"}),alert("LBTimer requires an active subscription to work.\nYou have been redirected to the subscription page"))}function yl(e,t){t&&chrome.notifications.create("rprt",{type:"basic",iconUrl:"img/f.svg",title:"LBTimer: Sending page...",message:""},il),fetch("https://lbtimer.com/api/",{method:"POST",body:btoa("LBTimer v."+chrome.runtime.getManifest().version+" "+yc.displayName+" ("+yc.providerData[0].email+") "+e)}).then((()=>{t&&chrome.notifications.create("rprt",{type:"basic",iconUrl:"img/f.svg",title:"LBTimer: Page sent",message:"Thanks for the feedback"},il)}))}function wl(){!(65536&el.oflags)||1&Uc||jc||(pc.play(),setTimeout(wl,2e4))}function bl(){jc&&Ic&&chrome.tabs.reload(Ic,{bypassCache:!0})}chrome.notifications.onButtonClicked.addListener((e=>{"updAvail"===e?chrome.runtime.reload():"aet"===e&&(32&Uc||(chrome.tabs.sendMessage(Ic,{command:"click",stop:16384&el.oflags}),Uc|=32))})),chrome.notifications.onClicked.addListener((()=>{Ic&&chrome.tabs.update(Ic,{active:!0},(e=>{chrome.windows.update(e.windowId,{focused:!0})}))})),chrome.runtime.onInstalled.addListener((e=>{"install"===e.reason?chrome.storage.local.set({u:1}):"update"===e.reason&&chrome.runtime.getManifest().version!=e.previousVersion&&chrome.storage.local.set({u:2})})),chrome.runtime.onUpdateAvailable.addListener((e=>{1&Uc?chrome.notifications.create("updAvail",{type:"basic",iconUrl:"img/t.svg",title:"LBTimer update available",message:"New version ("+e.version+") already available.",requireInteraction:!0,buttons:[{title:"Update now",iconUrl:"img/t.svg"}]}):chrome.runtime.reload()})),setTimeout((function(){localStorage.removeItem("firebase:previous_websocket_failure")}),1e3),chrome.storage.local.set({l:[]}),function e(t){chrome.identity.getAuthToken({interactive:!0},(n=>{if(n){const i=n,s=function(e,t={}){"object"!=typeof t&&(t={name:t});const n=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},t),i=n.name;if("string"!=typeof i||!i)throw _e.create("bad-app-name",{appName:String(i)});const s=de.get(i);if(s){if(C(e,s.options)&&C(n,s.config))return s;throw _e.create("duplicate-app",{appName:i})}const r=new F(i);for(const e of pe.values())r.addComponent(e);const o=new ve(e,n,r);return de.set(i,o),o}({apiKey:"AIzaSyDhbziuMBOqFSLWEJdBs_Y6XBdzo8fcEco",databaseURL:"https://lb-timer-dev.firebaseio.com"});mc=function(e=we(),t){return ge(e,"database").getImmediate({identifier:t})}(s);const r=function(e=we()){const t=ge(e,"auth");return t.isInitialized()?t.getImmediate():function(e,t){const n=ge(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(C(n.getOptions(),null!=t?t:{}))return e;jr(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:ic,persistence:[ka,ca,ha]})}(s);A(r).onAuthStateChanged((e=>{e&&yc&&e.uid==yc.uid||e&&(yc=e,vc="users/"+yc.uid+"/data/",t())}),void 0,void 0),async function(e,t){return sa(Uo(e),t)}(r,Qo.credential(null,i)).catch((n=>{sl(n,1),"auth/invalid-credential"===n.code&&(chrome.identity.removeCachedAuthToken({token:i}),e(t))}))}else chrome.runtime.lastError&&(navigator.onLine?confirm("LBTimer found the following problem while trying to connect to database:\n"+chrome.runtime.lastError.message+"\nDo you want to retry?")&&chrome.runtime.reload():(alert("No internet connection was found.\nLBTimer will try again in 1 minute"),setTimeout(chrome.runtime.reload,6e4)))}))}((function(){chrome.browserAction.setIcon({path:"img/f.svg"}),chrome.browserAction.setPopup({popup:"o.html"}),xr(Er(mc,"subs/"+yc.uid),vl),xr(Er(mc,"users/"+yc.uid+"/settings"),(e=>{if(e.val()){const t=e.val();for(let e in t)el[e]=t[e]}gc=el.oflags&1<<18?new Pacific.Date(new Date):new Date,wc=cc(gc),_c?.(),_c=xr(Er(mc,vc+wc),rl),fc.message=lc(gc)+(el.oflags&1<<18?" Pacific Time":" Local time"),sl("LBTimer started on "+fc.message,1),chrome.notifications.create("welcome",fc,nl),hl(),chrome.tabs.onRemoved.addListener((e=>{const t=Kc.indexOf(e),n=Gc.indexOf(e);~t&&(Kc[t]=0),~n&&(Gc[n]=0),e===Ic?dl():e===Cc?Cc=0:e===Tc?Tc=0:e===kc&&(kc=0)})),chrome.tabs.onUpdated.addListener(((e,t,n)=>{if(e===Ic)~n.url.indexOf("www.raterhub.com")||dl();else if(4202496&el.oflags&&"complete"===t.status){if(8192&el.oflags){const t=Kc.indexOf(e),i=Gc.indexOf(e);!~t||n.windowId!=Nc&&n.windowId!=Sc||chrome.tabs.executeScript(e,{file:"s.js"},(()=>{chrome.runtime.lastError||chrome.tabs.sendMessage(e,{command:"datapassing",side:0,dupe:~i,result:t+1,query:Yc,flags:Jc,isthereq:Qc[t],lblArray:Zc,sliderLength:Pc,PQlblArray:tl,PQsliderLength:Dc})})),!~i||n.windowId!=Rc&&n.windowId!=Sc||chrome.tabs.executeScript(e,{file:"s.js"},(()=>{chrome.runtime.lastError||chrome.tabs.sendMessage(e,{command:"datapassing",side:1,dupe:~t,result:i+1,query:Yc,flags:Jc,isthereq:Xc[i],lblArray:Zc,sliderLength:Pc,PQlblArray:tl,PQsliderLength:Dc})}))}1<<22&el.oflags&&(/sap\.lionbridge\.com/i.test(n.url)?chrome.tabs.executeScript(e,{file:"r.js",allFrames:!0}):/qrp\/core\/vendors\/invoice/i.test(n.url)?chrome.tabs.executeScript(e,{file:"e.js"}):/ultipro\.com/i.test(n.url)?chrome.tabs.executeScript(e,{file:"u.js",allFrames:!0,matchAboutBlank:!0}):/international.ai\/walrus\/worksheets/i.test(n.url)&&chrome.tabs.executeScript(e,{file:"filling_timesheet.js"}))}e!==Tc||~n.url.indexOf(chrome.runtime.id)||(Tc=0)})),chrome.windows.onRemoved.addListener((e=>{e===Nc&&(Nc=0),e===Rc&&(Rc=0),e===Sc&&(Sc=0)})),chrome.runtime.onMessage.addListener(pl),chrome.webRequest.onHeadersReceived.addListener((e=>{if(e.tabId===Ic&&1&Uc&&(~e.url.indexOf("task/commit")||~e.url.indexOf("new-task"))){const e=Fc-1;Mc>el.ct?bc=Date.now():(clearTimeout(Bc),Uc&=-2),Fc=Vc=0,uc[Wc]?sl("Task "+Wc+" already submitted"):ll(qc,Mc,e,Wc)}else{const t=zc.indexOf(e.url),n=$c.indexOf(e.url);~t&&(Kc[t]=e.tabId),~n&&(Gc[n]=e.tabId)}}),{urls:["<all_urls>"]}),chrome.tabs.query({},(e=>{for(let t=e.length;t--;)if(~e[t].url.indexOf(chrome.runtime.id+"/m")){Tc=e[t].id,chrome.tabs.sendMessage(Tc,{command:"init"});break}chrome.storage.local.get("u",(e=>{e.u&&gl()}))})),cl()}),{onlyOnce:!0})}))})();