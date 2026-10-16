const t = require("./module-2613.js"), { atob: s } = require("./module-181.js"), { isomorphicDecode: o } = require("./module-5728.js"), r = new TextEncoder, i = /^[!#$%&'*+-.^_|~A-Za-z0-9]+$/, A = /(\u000A|\u000D|\u0009|\u0020)/, l = /[\u0009|\u0020-\u007E|\u0080-\u00FF]/;
function c(e, n = !1) {
    if (!n) return e.href;
    const a = e.href, t = e.hash.length;
    return 0 === t ? a : a.substring(0, a.length - t);
}
function m(e, n, a) {
    let t = "";
    for(; a.position < n.length && e(n[a.position]);)t += n[a.position], a.position++;
    return t;
}
function d(e, n, a) {
    const t = n.indexOf(e, a.position), s = a.position;
    return -1 === t ? (a.position = n.length, n.slice(s)) : (a.position = t, n.slice(s, a.position));
}
function g(e) {
    return function(e) {
        const n = [];
        for(let a = 0; a < e.length; a++){
            const t = e[a];
            if (37 !== t) n.push(t);
            else if (37 !== t || /^[0-9A-Fa-f]{2}$/i.test(String.fromCharCode(e[a + 1], e[a + 2]))) {
                const t = String.fromCharCode(e[a + 1], e[a + 2]), s = Number.parseInt(t, 16);
                n.push(s), a += 2;
            } else n.push(37);
        }
        return Uint8Array.from(n);
    }(r.encode(e));
}
function u(e) {
    const n = {
        position: 0
    }, a = d("/", e = T(e, !0, !0), n);
    if (0 === a.length || !i.test(a)) return "failure";
    if (n.position > e.length) return "failure";
    n.position++;
    let t = d(";", e, n);
    if (t = T(t, !1, !0), 0 === t.length || !i.test(t)) return "failure";
    const s = a.toLowerCase(), o = t.toLowerCase(), r = {
        type: s,
        subtype: o,
        parameters: new Map,
        essence: `${s}/${o}`
    };
    for(; n.position < e.length;){
        n.position++, m((e)=>A.test(e), e, n);
        let a = m((e)=>";" !== e && "=" !== e, e, n);
        if (a = a.toLowerCase(), n.position < e.length) {
            if (";" === e[n.position]) continue;
            n.position++;
        }
        if (n.position > e.length) break;
        let t = null;
        if ('"' === e[n.position]) t = E(e, n, !0), d(";", e, n);
        else if (t = d(";", e, n), t = T(t, !1, !0), 0 === t.length) continue;
        0 === a.length || !i.test(a) || 0 !== t.length && !l.test(t) || r.parameters.has(a) || r.parameters.set(a, t);
    }
    return r;
}
function E(e, n, a) {
    const s = n.position;
    let o = "";
    for(t('"' === e[n.position]), n.position++; o += m((e)=>'"' !== e && "\\" !== e, e, n), !(n.position >= e.length);){
        const a = e[n.position];
        if (n.position++, "\\" !== a) {
            t('"' === a);
            break;
        }
        if (n.position >= e.length) {
            o += "\\";
            break;
        }
        o += e[n.position], n.position++;
    }
    return a ? o : e.slice(s, n.position);
}
function p(e) {
    return "\r" === e || "\n" === e || "\t" === e || " " === e;
}
function T(e, n = !0, a = !0) {
    let t = 0, s = e.length - 1;
    if (n) for(; t < e.length && p(e[t]); t++);
    if (a) for(; s > 0 && p(e[s]); s--);
    return e.slice(t, s + 1);
}
function k(e) {
    return "\r" === e || "\n" === e || "\t" === e || "\f" === e || " " === e;
}
module.exports = {
    dataURLProcessor: function(e) {
        t("data:" === e.protocol);
        let n = c(e, !0);
        n = n.slice(5);
        const a = {
            position: 0
        };
        let r = d(",", n, a);
        const i = r.length;
        if (r = function(e, n = !0, a = !0) {
            let t = 0, s = e.length - 1;
            if (n) for(; t < e.length && k(e[t]); t++);
            if (a) for(; s > 0 && k(e[s]); s--);
            return e.slice(t, s + 1);
        }(r, !0, !0), a.position >= n.length) return "failure";
        a.position++;
        let A = g(n.slice(i + 1));
        if (/;(\u0020){0,}base64$/i.test(r)) {
            if (A = function(e) {
                (e = e.replace(/[\u0009\u000A\u000C\u000D\u0020]/g, "")).length % 4 == 0 && (e = e.replace(/=?=$/, ""));
                if (e.length % 4 == 1) return "failure";
                if (/[^+/0-9A-Za-z]/.test(e)) return "failure";
                const n = s(e), a = new Uint8Array(n.length);
                for(let e = 0; e < n.length; e++)a[e] = n.charCodeAt(e);
                return a;
            }(o(A)), "failure" === A) return "failure";
            r = r.slice(0, -6), r = r.replace(/(\u0020)+$/, ""), r = r.slice(0, -1);
        }
        r.startsWith(";") && (r = "text/plain" + r);
        let l = u(r);
        return "failure" === l && (l = u("text/plain;charset=US-ASCII")), {
            mimeType: l,
            body: A
        };
    },
    URLSerializer: c,
    collectASequenceOfCodePoints: m,
    collectASequenceOfCodePointsFast: d,
    stringPercentDecode: g,
    parseMIMEType: u,
    collectAnHTTPQuotedString: E,
    serializeAMimeType: function(e) {
        t("failure" !== e);
        const { parameters: n, essence: a } = e;
        let s = a;
        for (let [e, a] of n.entries())s += ";", s += e, s += "=", i.test(a) || (a = a.replace(/(\\|")/g, "\\$1"), a = '"' + a, a += '"'), s += a;
        return s;
    }
};
