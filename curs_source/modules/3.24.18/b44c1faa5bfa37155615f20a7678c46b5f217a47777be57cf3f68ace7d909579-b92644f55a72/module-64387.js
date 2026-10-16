const n = require("./module-42613.js"), { atob: s } = require("./module-20181.js"), { isomorphicDecode: o } = require("./module-98116.js"), i = new TextEncoder, a = /^[!#$%&'*+-.^_|~A-Za-z0-9]+$/, c = /(\u000A|\u000D|\u0009|\u0020)/, l = /[\u0009|\u0020-\u007E|\u0080-\u00FF]/;
function u(e, t = !1) {
    if (!t) return e.href;
    const r = e.href, n = e.hash.length;
    return 0 === n ? r : r.substring(0, r.length - n);
}
function d(e, t, r) {
    let n = "";
    for(; r.position < t.length && e(t[r.position]);)n += t[r.position], r.position++;
    return n;
}
function p(e, t, r) {
    const n = t.indexOf(e, r.position), s = r.position;
    return -1 === n ? (r.position = t.length, t.slice(s)) : (r.position = n, t.slice(s, r.position));
}
function m(e) {
    return function(e) {
        const t = [];
        for(let r = 0; r < e.length; r++){
            const n = e[r];
            if (37 !== n) t.push(n);
            else if (37 !== n || /^[0-9A-Fa-f]{2}$/i.test(String.fromCharCode(e[r + 1], e[r + 2]))) {
                const n = String.fromCharCode(e[r + 1], e[r + 2]), s = Number.parseInt(n, 16);
                t.push(s), r += 2;
            } else t.push(37);
        }
        return Uint8Array.from(t);
    }(i.encode(e));
}
function h(e) {
    const t = {
        position: 0
    }, r = p("/", e = y(e, !0, !0), t);
    if (0 === r.length || !a.test(r)) return "failure";
    if (t.position > e.length) return "failure";
    t.position++;
    let n = p(";", e, t);
    if (n = y(n, !1, !0), 0 === n.length || !a.test(n)) return "failure";
    const s = r.toLowerCase(), o = n.toLowerCase(), i = {
        type: s,
        subtype: o,
        parameters: new Map,
        essence: `${s}/${o}`
    };
    for(; t.position < e.length;){
        t.position++, d((e)=>c.test(e), e, t);
        let r = d((e)=>";" !== e && "=" !== e, e, t);
        if (r = r.toLowerCase(), t.position < e.length) {
            if (";" === e[t.position]) continue;
            t.position++;
        }
        if (t.position > e.length) break;
        let n = null;
        if ('"' === e[t.position]) n = f(e, t, !0), p(";", e, t);
        else if (n = p(";", e, t), n = y(n, !1, !0), 0 === n.length) continue;
        0 === r.length || !a.test(r) || 0 !== n.length && !l.test(n) || i.parameters.has(r) || i.parameters.set(r, n);
    }
    return i;
}
function f(e, t, r) {
    const s = t.position;
    let o = "";
    for(n('"' === e[t.position]), t.position++; o += d((e)=>'"' !== e && "\\" !== e, e, t), !(t.position >= e.length);){
        const r = e[t.position];
        if (t.position++, "\\" !== r) {
            n('"' === r);
            break;
        }
        if (t.position >= e.length) {
            o += "\\";
            break;
        }
        o += e[t.position], t.position++;
    }
    return r ? o : e.slice(s, t.position);
}
function g(e) {
    return "\r" === e || "\n" === e || "\t" === e || " " === e;
}
function y(e, t = !0, r = !0) {
    let n = 0, s = e.length - 1;
    if (t) for(; n < e.length && g(e[n]); n++);
    if (r) for(; s > 0 && g(e[s]); s--);
    return e.slice(n, s + 1);
}
function w(e) {
    return "\r" === e || "\n" === e || "\t" === e || "\f" === e || " " === e;
}
module.exports = {
    dataURLProcessor: function(e) {
        n("data:" === e.protocol);
        let t = u(e, !0);
        t = t.slice(5);
        const r = {
            position: 0
        };
        let i = p(",", t, r);
        const a = i.length;
        if (i = function(e, t = !0, r = !0) {
            let n = 0, s = e.length - 1;
            if (t) for(; n < e.length && w(e[n]); n++);
            if (r) for(; s > 0 && w(e[s]); s--);
            return e.slice(n, s + 1);
        }(i, !0, !0), r.position >= t.length) return "failure";
        r.position++;
        let c = m(t.slice(a + 1));
        if (/;(\u0020){0,}base64$/i.test(i)) {
            if (c = function(e) {
                (e = e.replace(/[\u0009\u000A\u000C\u000D\u0020]/g, "")).length % 4 == 0 && (e = e.replace(/=?=$/, ""));
                if (e.length % 4 == 1) return "failure";
                if (/[^+/0-9A-Za-z]/.test(e)) return "failure";
                const t = s(e), r = new Uint8Array(t.length);
                for(let e = 0; e < t.length; e++)r[e] = t.charCodeAt(e);
                return r;
            }(o(c)), "failure" === c) return "failure";
            i = i.slice(0, -6), i = i.replace(/(\u0020)+$/, ""), i = i.slice(0, -1);
        }
        i.startsWith(";") && (i = "text/plain" + i);
        let l = h(i);
        return "failure" === l && (l = h("text/plain;charset=US-ASCII")), {
            mimeType: l,
            body: c
        };
    },
    URLSerializer: u,
    collectASequenceOfCodePoints: d,
    collectASequenceOfCodePointsFast: p,
    stringPercentDecode: m,
    parseMIMEType: h,
    collectAnHTTPQuotedString: f,
    serializeAMimeType: function(e) {
        n("failure" !== e);
        const { parameters: t, essence: r } = e;
        let s = r;
        for (let [e, r] of t.entries())s += ";", s += e, s += "=", a.test(r) || (r = r.replace(/(\\|")/g, "\\$1"), r = '"' + r, r += '"'), s += r;
        return s;
    }
};
