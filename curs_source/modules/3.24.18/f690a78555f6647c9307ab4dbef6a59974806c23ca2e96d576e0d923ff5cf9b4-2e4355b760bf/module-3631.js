const n = require("./module-2613.js"), { atob: r } = require("./module-181.js"), { isomorphicDecode: o } = require("./module-5728.js"), s = new TextEncoder, a = /^[!#$%&'*+-.^_|~A-Za-z0-9]+$/, i = /(\u000A|\u000D|\u0009|\u0020)/, c = /[\u0009|\u0020-\u007E|\u0080-\u00FF]/;
function l(e, A = !1) {
    if (!A) return e.href;
    const t = e.href, n = e.hash.length;
    return 0 === n ? t : t.substring(0, t.length - n);
}
function g(e, A, t) {
    let n = "";
    for(; t.position < A.length && e(A[t.position]);)n += A[t.position], t.position++;
    return n;
}
function E(e, A, t) {
    const n = A.indexOf(e, t.position), r = t.position;
    return -1 === n ? (t.position = A.length, A.slice(r)) : (t.position = n, A.slice(r, t.position));
}
function u(e) {
    return function(e) {
        const A = [];
        for(let t = 0; t < e.length; t++){
            const n = e[t];
            if (37 !== n) A.push(n);
            else if (37 !== n || /^[0-9A-Fa-f]{2}$/i.test(String.fromCharCode(e[t + 1], e[t + 2]))) {
                const n = String.fromCharCode(e[t + 1], e[t + 2]), r = Number.parseInt(n, 16);
                A.push(r), t += 2;
            } else A.push(37);
        }
        return Uint8Array.from(A);
    }(s.encode(e));
}
function d(e) {
    const A = {
        position: 0
    }, t = E("/", e = Q(e, !0, !0), A);
    if (0 === t.length || !a.test(t)) return "failure";
    if (A.position > e.length) return "failure";
    A.position++;
    let n = E(";", e, A);
    if (n = Q(n, !1, !0), 0 === n.length || !a.test(n)) return "failure";
    const r = t.toLowerCase(), o = n.toLowerCase(), s = {
        type: r,
        subtype: o,
        parameters: new Map,
        essence: `${r}/${o}`
    };
    for(; A.position < e.length;){
        A.position++, g((e)=>i.test(e), e, A);
        let t = g((e)=>";" !== e && "=" !== e, e, A);
        if (t = t.toLowerCase(), A.position < e.length) {
            if (";" === e[A.position]) continue;
            A.position++;
        }
        if (A.position > e.length) break;
        let n = null;
        if ('"' === e[A.position]) n = I(e, A, !0), E(";", e, A);
        else if (n = E(";", e, A), n = Q(n, !1, !0), 0 === n.length) continue;
        0 === t.length || !a.test(t) || 0 !== n.length && !c.test(n) || s.parameters.has(t) || s.parameters.set(t, n);
    }
    return s;
}
function I(e, A, t) {
    const r = A.position;
    let o = "";
    for(n('"' === e[A.position]), A.position++; o += g((e)=>'"' !== e && "\\" !== e, e, A), !(A.position >= e.length);){
        const t = e[A.position];
        if (A.position++, "\\" !== t) {
            n('"' === t);
            break;
        }
        if (A.position >= e.length) {
            o += "\\";
            break;
        }
        o += e[A.position], A.position++;
    }
    return t ? o : e.slice(r, A.position);
}
function h(e) {
    return "\r" === e || "\n" === e || "\t" === e || " " === e;
}
function Q(e, A = !0, t = !0) {
    let n = 0, r = e.length - 1;
    if (A) for(; n < e.length && h(e[n]); n++);
    if (t) for(; r > 0 && h(e[r]); r--);
    return e.slice(n, r + 1);
}
function m(e) {
    return "\r" === e || "\n" === e || "\t" === e || "\f" === e || " " === e;
}
module.exports = {
    dataURLProcessor: function(e) {
        n("data:" === e.protocol);
        let A = l(e, !0);
        A = A.slice(5);
        const t = {
            position: 0
        };
        let s = E(",", A, t);
        const a = s.length;
        if (s = function(e, A = !0, t = !0) {
            let n = 0, r = e.length - 1;
            if (A) for(; n < e.length && m(e[n]); n++);
            if (t) for(; r > 0 && m(e[r]); r--);
            return e.slice(n, r + 1);
        }(s, !0, !0), t.position >= A.length) return "failure";
        t.position++;
        let i = u(A.slice(a + 1));
        if (/;(\u0020){0,}base64$/i.test(s)) {
            if (i = function(e) {
                (e = e.replace(/[\u0009\u000A\u000C\u000D\u0020]/g, "")).length % 4 == 0 && (e = e.replace(/=?=$/, ""));
                if (e.length % 4 == 1) return "failure";
                if (/[^+/0-9A-Za-z]/.test(e)) return "failure";
                const A = r(e), t = new Uint8Array(A.length);
                for(let e = 0; e < A.length; e++)t[e] = A.charCodeAt(e);
                return t;
            }(o(i)), "failure" === i) return "failure";
            s = s.slice(0, -6), s = s.replace(/(\u0020)+$/, ""), s = s.slice(0, -1);
        }
        s.startsWith(";") && (s = "text/plain" + s);
        let c = d(s);
        return "failure" === c && (c = d("text/plain;charset=US-ASCII")), {
            mimeType: c,
            body: i
        };
    },
    URLSerializer: l,
    collectASequenceOfCodePoints: g,
    collectASequenceOfCodePointsFast: E,
    stringPercentDecode: u,
    parseMIMEType: d,
    collectAnHTTPQuotedString: I,
    serializeAMimeType: function(e) {
        n("failure" !== e);
        const { parameters: A, essence: t } = e;
        let r = t;
        for (let [e, t] of A.entries())r += ";", r += e, r += "=", a.test(t) || (t = t.replace(/(\\|")/g, "\\$1"), t = '"' + t, t += '"'), r += t;
        return r;
    }
};
