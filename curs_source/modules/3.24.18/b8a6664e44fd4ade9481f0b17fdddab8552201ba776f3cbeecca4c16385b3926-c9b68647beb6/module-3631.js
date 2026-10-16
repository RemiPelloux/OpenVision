const r = require(42613), { atob: s } = require(20181), { isomorphicDecode: o } = require("./module-75728.js"), n = new TextEncoder, i = /^[!#$%&'*+-.^_|~A-Za-z0-9]+$/, E = /(\u000A|\u000D|\u0009|\u0020)/, Q = /[\u0009|\u0020-\u007E|\u0080-\u00FF]/;
function g(A, e = !1) {
    if (!e) return A.href;
    const t = A.href, r = A.hash.length;
    return 0 === r ? t : t.substring(0, t.length - r);
}
function C(A, e, t) {
    let r = "";
    for(; t.position < e.length && A(e[t.position]);)r += e[t.position], t.position++;
    return r;
}
function B(A, e, t) {
    const r = e.indexOf(A, t.position), s = t.position;
    return -1 === r ? (t.position = e.length, e.slice(s)) : (t.position = r, e.slice(s, t.position));
}
function a(A) {
    return function(A) {
        const e = [];
        for(let t = 0; t < A.length; t++){
            const r = A[t];
            if (37 !== r) e.push(r);
            else if (37 !== r || /^[0-9A-Fa-f]{2}$/i.test(String.fromCharCode(A[t + 1], A[t + 2]))) {
                const r = String.fromCharCode(A[t + 1], A[t + 2]), s = Number.parseInt(r, 16);
                e.push(s), t += 2;
            } else e.push(37);
        }
        return Uint8Array.from(e);
    }(n.encode(A));
}
function I(A) {
    const e = {
        position: 0
    }, t = B("/", A = l(A, !0, !0), e);
    if (0 === t.length || !i.test(t)) return "failure";
    if (e.position > A.length) return "failure";
    e.position++;
    let r = B(";", A, e);
    if (r = l(r, !1, !0), 0 === r.length || !i.test(r)) return "failure";
    const s = t.toLowerCase(), o = r.toLowerCase(), n = {
        type: s,
        subtype: o,
        parameters: new Map,
        essence: `${s}/${o}`
    };
    for(; e.position < A.length;){
        e.position++, C((A)=>E.test(A), A, e);
        let t = C((A)=>";" !== A && "=" !== A, A, e);
        if (t = t.toLowerCase(), e.position < A.length) {
            if (";" === A[e.position]) continue;
            e.position++;
        }
        if (e.position > A.length) break;
        let r = null;
        if ('"' === A[e.position]) r = c(A, e, !0), B(";", A, e);
        else if (r = B(";", A, e), r = l(r, !1, !0), 0 === r.length) continue;
        0 === t.length || !i.test(t) || 0 !== r.length && !Q.test(r) || n.parameters.has(t) || n.parameters.set(t, r);
    }
    return n;
}
function c(A, e, t) {
    const s = e.position;
    let o = "";
    for(r('"' === A[e.position]), e.position++; o += C((A)=>'"' !== A && "\\" !== A, A, e), !(e.position >= A.length);){
        const t = A[e.position];
        if (e.position++, "\\" !== t) {
            r('"' === t);
            break;
        }
        if (e.position >= A.length) {
            o += "\\";
            break;
        }
        o += A[e.position], e.position++;
    }
    return t ? o : A.slice(s, e.position);
}
function h(A) {
    return "\r" === A || "\n" === A || "\t" === A || " " === A;
}
function l(A, e = !0, t = !0) {
    let r = 0, s = A.length - 1;
    if (e) for(; r < A.length && h(A[r]); r++);
    if (t) for(; s > 0 && h(A[s]); s--);
    return A.slice(r, s + 1);
}
function u(A) {
    return "\r" === A || "\n" === A || "\t" === A || "\f" === A || " " === A;
}
module.exports = {
    dataURLProcessor: function(A) {
        r("data:" === A.protocol);
        let e = g(A, !0);
        e = e.slice(5);
        const t = {
            position: 0
        };
        let n = B(",", e, t);
        const i = n.length;
        if (n = function(A, e = !0, t = !0) {
            let r = 0, s = A.length - 1;
            if (e) for(; r < A.length && u(A[r]); r++);
            if (t) for(; s > 0 && u(A[s]); s--);
            return A.slice(r, s + 1);
        }(n, !0, !0), t.position >= e.length) return "failure";
        t.position++;
        let E = a(e.slice(i + 1));
        if (/;(\u0020){0,}base64$/i.test(n)) {
            if (E = function(A) {
                (A = A.replace(/[\u0009\u000A\u000C\u000D\u0020]/g, "")).length % 4 == 0 && (A = A.replace(/=?=$/, ""));
                if (A.length % 4 == 1) return "failure";
                if (/[^+/0-9A-Za-z]/.test(A)) return "failure";
                const e = s(A), t = new Uint8Array(e.length);
                for(let A = 0; A < e.length; A++)t[A] = e.charCodeAt(A);
                return t;
            }(o(E)), "failure" === E) return "failure";
            n = n.slice(0, -6), n = n.replace(/(\u0020)+$/, ""), n = n.slice(0, -1);
        }
        n.startsWith(";") && (n = "text/plain" + n);
        let Q = I(n);
        return "failure" === Q && (Q = I("text/plain;charset=US-ASCII")), {
            mimeType: Q,
            body: E
        };
    },
    URLSerializer: g,
    collectASequenceOfCodePoints: C,
    collectASequenceOfCodePointsFast: B,
    stringPercentDecode: a,
    parseMIMEType: I,
    collectAnHTTPQuotedString: c,
    serializeAMimeType: function(A) {
        r("failure" !== A);
        const { parameters: e, essence: t } = A;
        let s = t;
        for (let [A, t] of e.entries())s += ";", s += A, s += "=", i.test(t) || (t = t.replace(/(\\|")/g, "\\$1"), t = '"' + t, t += '"'), s += t;
        return s;
    }
};
