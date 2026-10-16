const a = require("./module-2613.js"), { atob: s } = require("./module-181.js"), { isomorphicDecode: o } = require("./module-5728.js"), r = new TextEncoder, i = /^[!#$%&'*+-.^_|~A-Za-z0-9]+$/, A = /(\u000A|\u000D|\u0009|\u0020)/, c = /[\u0009|\u0020-\u007E|\u0080-\u00FF]/;
function l(e, n = !1) {
    if (!n) return e.href;
    const t = e.href, a = e.hash.length;
    return 0 === a ? t : t.substring(0, t.length - a);
}
function d(e, n, t) {
    let a = "";
    for(; t.position < n.length && e(n[t.position]);)a += n[t.position], t.position++;
    return a;
}
function m(e, n, t) {
    const a = n.indexOf(e, t.position), s = t.position;
    return -1 === a ? (t.position = n.length, n.slice(s)) : (t.position = a, n.slice(s, t.position));
}
function u(e) {
    return function(e) {
        const n = [];
        for(let t = 0; t < e.length; t++){
            const a = e[t];
            if (37 !== a) n.push(a);
            else if (37 !== a || /^[0-9A-Fa-f]{2}$/i.test(String.fromCharCode(e[t + 1], e[t + 2]))) {
                const a = String.fromCharCode(e[t + 1], e[t + 2]), s = Number.parseInt(a, 16);
                n.push(s), t += 2;
            } else n.push(37);
        }
        return Uint8Array.from(n);
    }(r.encode(e));
}
function g(e) {
    const n = {
        position: 0
    }, t = m("/", e = h(e, !0, !0), n);
    if (0 === t.length || !i.test(t)) return "failure";
    if (n.position > e.length) return "failure";
    n.position++;
    let a = m(";", e, n);
    if (a = h(a, !1, !0), 0 === a.length || !i.test(a)) return "failure";
    const s = t.toLowerCase(), o = a.toLowerCase(), r = {
        type: s,
        subtype: o,
        parameters: new Map,
        essence: `${s}/${o}`
    };
    for(; n.position < e.length;){
        n.position++, d((e)=>A.test(e), e, n);
        let t = d((e)=>";" !== e && "=" !== e, e, n);
        if (t = t.toLowerCase(), n.position < e.length) {
            if (";" === e[n.position]) continue;
            n.position++;
        }
        if (n.position > e.length) break;
        let a = null;
        if ('"' === e[n.position]) a = p(e, n, !0), m(";", e, n);
        else if (a = m(";", e, n), a = h(a, !1, !0), 0 === a.length) continue;
        0 === t.length || !i.test(t) || 0 !== a.length && !c.test(a) || r.parameters.has(t) || r.parameters.set(t, a);
    }
    return r;
}
function p(e, n, t) {
    const s = n.position;
    let o = "";
    for(a('"' === e[n.position]), n.position++; o += d((e)=>'"' !== e && "\\" !== e, e, n), !(n.position >= e.length);){
        const t = e[n.position];
        if (n.position++, "\\" !== t) {
            a('"' === t);
            break;
        }
        if (n.position >= e.length) {
            o += "\\";
            break;
        }
        o += e[n.position], n.position++;
    }
    return t ? o : e.slice(s, n.position);
}
function E(e) {
    return "\r" === e || "\n" === e || "\t" === e || " " === e;
}
function h(e, n = !0, t = !0) {
    let a = 0, s = e.length - 1;
    if (n) for(; a < e.length && E(e[a]); a++);
    if (t) for(; s > 0 && E(e[s]); s--);
    return e.slice(a, s + 1);
}
function T(e) {
    return "\r" === e || "\n" === e || "\t" === e || "\f" === e || " " === e;
}
module.exports = {
    dataURLProcessor: function(e) {
        a("data:" === e.protocol);
        let n = l(e, !0);
        n = n.slice(5);
        const t = {
            position: 0
        };
        let r = m(",", n, t);
        const i = r.length;
        if (r = function(e, n = !0, t = !0) {
            let a = 0, s = e.length - 1;
            if (n) for(; a < e.length && T(e[a]); a++);
            if (t) for(; s > 0 && T(e[s]); s--);
            return e.slice(a, s + 1);
        }(r, !0, !0), t.position >= n.length) return "failure";
        t.position++;
        let A = u(n.slice(i + 1));
        if (/;(\u0020){0,}base64$/i.test(r)) {
            if (A = function(e) {
                (e = e.replace(/[\u0009\u000A\u000C\u000D\u0020]/g, "")).length % 4 == 0 && (e = e.replace(/=?=$/, ""));
                if (e.length % 4 == 1) return "failure";
                if (/[^+/0-9A-Za-z]/.test(e)) return "failure";
                const n = s(e), t = new Uint8Array(n.length);
                for(let e = 0; e < n.length; e++)t[e] = n.charCodeAt(e);
                return t;
            }(o(A)), "failure" === A) return "failure";
            r = r.slice(0, -6), r = r.replace(/(\u0020)+$/, ""), r = r.slice(0, -1);
        }
        r.startsWith(";") && (r = "text/plain" + r);
        let c = g(r);
        return "failure" === c && (c = g("text/plain;charset=US-ASCII")), {
            mimeType: c,
            body: A
        };
    },
    URLSerializer: l,
    collectASequenceOfCodePoints: d,
    collectASequenceOfCodePointsFast: m,
    stringPercentDecode: u,
    parseMIMEType: g,
    collectAnHTTPQuotedString: p,
    serializeAMimeType: function(e) {
        a("failure" !== e);
        const { parameters: n, essence: t } = e;
        let s = t;
        for (let [e, t] of n.entries())s += ";", s += e, s += "=", i.test(t) || (t = t.replace(/(\\|")/g, "\\$1"), t = '"' + t, t += '"'), s += t;
        return s;
    }
};
