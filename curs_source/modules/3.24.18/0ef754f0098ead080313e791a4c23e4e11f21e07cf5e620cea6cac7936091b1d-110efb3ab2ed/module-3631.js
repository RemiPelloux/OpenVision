const t = require("./module-2613.js"), { atob: s } = require("./module-181.js"), { isomorphicDecode: o } = require("./module-5728.js"), r = new TextEncoder, i = /^[!#$%&'*+-.^_|~A-Za-z0-9]+$/, l = /(\u000A|\u000D|\u0009|\u0020)/, d = /[\u0009|\u0020-\u007E|\u0080-\u00FF]/;
function m(e, a = !1) {
    if (!a) return e.href;
    const n = e.href, t = e.hash.length;
    return 0 === t ? n : n.substring(0, n.length - t);
}
function c(e, a, n) {
    let t = "";
    for(; n.position < a.length && e(a[n.position]);)t += a[n.position], n.position++;
    return t;
}
function p(e, a, n) {
    const t = a.indexOf(e, n.position), s = n.position;
    return -1 === t ? (n.position = a.length, a.slice(s)) : (n.position = t, a.slice(s, n.position));
}
function A(e) {
    return function(e) {
        const a = [];
        for(let n = 0; n < e.length; n++){
            const t = e[n];
            if (37 !== t) a.push(t);
            else if (37 !== t || /^[0-9A-Fa-f]{2}$/i.test(String.fromCharCode(e[n + 1], e[n + 2]))) {
                const t = String.fromCharCode(e[n + 1], e[n + 2]), s = Number.parseInt(t, 16);
                a.push(s), n += 2;
            } else a.push(37);
        }
        return Uint8Array.from(a);
    }(r.encode(e));
}
function u(e) {
    const a = {
        position: 0
    }, n = p("/", e = h(e, !0, !0), a);
    if (0 === n.length || !i.test(n)) return "failure";
    if (a.position > e.length) return "failure";
    a.position++;
    let t = p(";", e, a);
    if (t = h(t, !1, !0), 0 === t.length || !i.test(t)) return "failure";
    const s = n.toLowerCase(), o = t.toLowerCase(), r = {
        type: s,
        subtype: o,
        parameters: new Map,
        essence: `${s}/${o}`
    };
    for(; a.position < e.length;){
        a.position++, c((e)=>l.test(e), e, a);
        let n = c((e)=>";" !== e && "=" !== e, e, a);
        if (n = n.toLowerCase(), a.position < e.length) {
            if (";" === e[a.position]) continue;
            a.position++;
        }
        if (a.position > e.length) break;
        let t = null;
        if ('"' === e[a.position]) t = g(e, a, !0), p(";", e, a);
        else if (t = p(";", e, a), t = h(t, !1, !0), 0 === t.length) continue;
        0 === n.length || !i.test(n) || 0 !== t.length && !d.test(t) || r.parameters.has(n) || r.parameters.set(n, t);
    }
    return r;
}
function g(e, a, n) {
    const s = a.position;
    let o = "";
    for(t('"' === e[a.position]), a.position++; o += c((e)=>'"' !== e && "\\" !== e, e, a), !(a.position >= e.length);){
        const n = e[a.position];
        if (a.position++, "\\" !== n) {
            t('"' === n);
            break;
        }
        if (a.position >= e.length) {
            o += "\\";
            break;
        }
        o += e[a.position], a.position++;
    }
    return n ? o : e.slice(s, a.position);
}
function T(e) {
    return "\r" === e || "\n" === e || "\t" === e || " " === e;
}
function h(e, a = !0, n = !0) {
    let t = 0, s = e.length - 1;
    if (a) for(; t < e.length && T(e[t]); t++);
    if (n) for(; s > 0 && T(e[s]); s--);
    return e.slice(t, s + 1);
}
function k(e) {
    return "\r" === e || "\n" === e || "\t" === e || "\f" === e || " " === e;
}
module.exports = {
    dataURLProcessor: function(e) {
        t("data:" === e.protocol);
        let a = m(e, !0);
        a = a.slice(5);
        const n = {
            position: 0
        };
        let r = p(",", a, n);
        const i = r.length;
        if (r = function(e, a = !0, n = !0) {
            let t = 0, s = e.length - 1;
            if (a) for(; t < e.length && k(e[t]); t++);
            if (n) for(; s > 0 && k(e[s]); s--);
            return e.slice(t, s + 1);
        }(r, !0, !0), n.position >= a.length) return "failure";
        n.position++;
        let l = A(a.slice(i + 1));
        if (/;(\u0020){0,}base64$/i.test(r)) {
            if (l = function(e) {
                (e = e.replace(/[\u0009\u000A\u000C\u000D\u0020]/g, "")).length % 4 == 0 && (e = e.replace(/=?=$/, ""));
                if (e.length % 4 == 1) return "failure";
                if (/[^+/0-9A-Za-z]/.test(e)) return "failure";
                const a = s(e), n = new Uint8Array(a.length);
                for(let e = 0; e < a.length; e++)n[e] = a.charCodeAt(e);
                return n;
            }(o(l)), "failure" === l) return "failure";
            r = r.slice(0, -6), r = r.replace(/(\u0020)+$/, ""), r = r.slice(0, -1);
        }
        r.startsWith(";") && (r = "text/plain" + r);
        let d = u(r);
        return "failure" === d && (d = u("text/plain;charset=US-ASCII")), {
            mimeType: d,
            body: l
        };
    },
    URLSerializer: m,
    collectASequenceOfCodePoints: c,
    collectASequenceOfCodePointsFast: p,
    stringPercentDecode: A,
    parseMIMEType: u,
    collectAnHTTPQuotedString: g,
    serializeAMimeType: function(e) {
        t("failure" !== e);
        const { parameters: a, essence: n } = e;
        let s = n;
        for (let [e, n] of a.entries())s += ";", s += e, s += "=", i.test(n) || (n = n.replace(/(\\|")/g, "\\$1"), n = '"' + n, n += '"'), s += n;
        return s;
    }
};
