const n = require("./module-2613.js"), { atob: s } = require("./module-181.js"), { isomorphicDecode: i } = require("./module-8116.js"), o = new TextEncoder, a = /^[!#$%&'*+-.^_|~A-Za-z0-9]+$/, u = /(\u000A|\u000D|\u0009|\u0020)/, c = /[\u0009|\u0020-\u007E|\u0080-\u00FF]/;
function l(t, e = !1) {
    if (!e) return t.href;
    const r = t.href, n = t.hash.length;
    return 0 === n ? r : r.substring(0, r.length - n);
}
function m(t, e, r) {
    let n = "";
    for(; r.position < e.length && t(e[r.position]);)n += e[r.position], r.position++;
    return n;
}
function d(t, e, r) {
    const n = e.indexOf(t, r.position), s = r.position;
    return -1 === n ? (r.position = e.length, e.slice(s)) : (r.position = n, e.slice(s, r.position));
}
function f(t) {
    return function(t) {
        const e = [];
        for(let r = 0; r < t.length; r++){
            const n = t[r];
            if (37 !== n) e.push(n);
            else if (37 !== n || /^[0-9A-Fa-f]{2}$/i.test(String.fromCharCode(t[r + 1], t[r + 2]))) {
                const n = String.fromCharCode(t[r + 1], t[r + 2]), s = Number.parseInt(n, 16);
                e.push(s), r += 2;
            } else e.push(37);
        }
        return Uint8Array.from(e);
    }(o.encode(t));
}
function p(t) {
    const e = {
        position: 0
    }, r = d("/", t = A(t, !0, !0), e);
    if (0 === r.length || !a.test(r)) return "failure";
    if (e.position > t.length) return "failure";
    e.position++;
    let n = d(";", t, e);
    if (n = A(n, !1, !0), 0 === n.length || !a.test(n)) return "failure";
    const s = r.toLowerCase(), i = n.toLowerCase(), o = {
        type: s,
        subtype: i,
        parameters: new Map,
        essence: `${s}/${i}`
    };
    for(; e.position < t.length;){
        e.position++, m((t)=>u.test(t), t, e);
        let r = m((t)=>";" !== t && "=" !== t, t, e);
        if (r = r.toLowerCase(), e.position < t.length) {
            if (";" === t[e.position]) continue;
            e.position++;
        }
        if (e.position > t.length) break;
        let n = null;
        if ('"' === t[e.position]) n = h(t, e, !0), d(";", t, e);
        else if (n = d(";", t, e), n = A(n, !1, !0), 0 === n.length) continue;
        0 === r.length || !a.test(r) || 0 !== n.length && !c.test(n) || o.parameters.has(r) || o.parameters.set(r, n);
    }
    return o;
}
function h(t, e, r) {
    const s = e.position;
    let i = "";
    for(n('"' === t[e.position]), e.position++; i += m((t)=>'"' !== t && "\\" !== t, t, e), !(e.position >= t.length);){
        const r = t[e.position];
        if (e.position++, "\\" !== r) {
            n('"' === r);
            break;
        }
        if (e.position >= t.length) {
            i += "\\";
            break;
        }
        i += t[e.position], e.position++;
    }
    return r ? i : t.slice(s, e.position);
}
function g(t) {
    return "\r" === t || "\n" === t || "\t" === t || " " === t;
}
function A(t, e = !0, r = !0) {
    let n = 0, s = t.length - 1;
    if (e) for(; n < t.length && g(t[n]); n++);
    if (r) for(; s > 0 && g(t[s]); s--);
    return t.slice(n, s + 1);
}
function _(t) {
    return "\r" === t || "\n" === t || "\t" === t || "\f" === t || " " === t;
}
module.exports = {
    dataURLProcessor: function(t) {
        n("data:" === t.protocol);
        let e = l(t, !0);
        e = e.slice(5);
        const r = {
            position: 0
        };
        let o = d(",", e, r);
        const a = o.length;
        if (o = function(t, e = !0, r = !0) {
            let n = 0, s = t.length - 1;
            if (e) for(; n < t.length && _(t[n]); n++);
            if (r) for(; s > 0 && _(t[s]); s--);
            return t.slice(n, s + 1);
        }(o, !0, !0), r.position >= e.length) return "failure";
        r.position++;
        let u = f(e.slice(a + 1));
        if (/;(\u0020){0,}base64$/i.test(o)) {
            if (u = function(t) {
                (t = t.replace(/[\u0009\u000A\u000C\u000D\u0020]/g, "")).length % 4 == 0 && (t = t.replace(/=?=$/, ""));
                if (t.length % 4 == 1) return "failure";
                if (/[^+/0-9A-Za-z]/.test(t)) return "failure";
                const e = s(t), r = new Uint8Array(e.length);
                for(let t = 0; t < e.length; t++)r[t] = e.charCodeAt(t);
                return r;
            }(i(u)), "failure" === u) return "failure";
            o = o.slice(0, -6), o = o.replace(/(\u0020)+$/, ""), o = o.slice(0, -1);
        }
        o.startsWith(";") && (o = "text/plain" + o);
        let c = p(o);
        return "failure" === c && (c = p("text/plain;charset=US-ASCII")), {
            mimeType: c,
            body: u
        };
    },
    URLSerializer: l,
    collectASequenceOfCodePoints: m,
    collectASequenceOfCodePointsFast: d,
    stringPercentDecode: f,
    parseMIMEType: p,
    collectAnHTTPQuotedString: h,
    serializeAMimeType: function(t) {
        n("failure" !== t);
        const { parameters: e, essence: r } = t;
        let s = r;
        for (let [t, r] of e.entries())s += ";", s += t, s += "=", a.test(r) || (r = r.replace(/(\\|")/g, "\\$1"), r = '"' + r, r += '"'), s += r;
        return s;
    }
};
