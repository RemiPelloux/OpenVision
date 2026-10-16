const n = require("./module-2613.js"), { atob: r } = require("./module-181.js"), { isomorphicDecode: o } = require("./module-5728.js"), s = new TextEncoder, i = /^[!#$%&'*+-.^_|~A-Za-z0-9]+$/, a = /(\u000A|\u000D|\u0009|\u0020)/, c = /[\u0009|\u0020-\u007E|\u0080-\u00FF]/;
function l(e, t = !1) {
    if (!t) return e.href;
    const A = e.href, n = e.hash.length;
    return 0 === n ? A : A.substring(0, A.length - n);
}
function u(e, t, A) {
    let n = "";
    for(; A.position < t.length && e(t[A.position]);)n += t[A.position], A.position++;
    return n;
}
function g(e, t, A) {
    const n = t.indexOf(e, A.position), r = A.position;
    return -1 === n ? (A.position = t.length, t.slice(r)) : (A.position = n, t.slice(r, A.position));
}
function E(e) {
    return function(e) {
        const t = [];
        for(let A = 0; A < e.length; A++){
            const n = e[A];
            if (37 !== n) t.push(n);
            else if (37 !== n || /^[0-9A-Fa-f]{2}$/i.test(String.fromCharCode(e[A + 1], e[A + 2]))) {
                const n = String.fromCharCode(e[A + 1], e[A + 2]), r = Number.parseInt(n, 16);
                t.push(r), A += 2;
            } else t.push(37);
        }
        return Uint8Array.from(t);
    }(s.encode(e));
}
function h(e) {
    const t = {
        position: 0
    }, A = g("/", e = B(e, !0, !0), t);
    if (0 === A.length || !i.test(A)) return "failure";
    if (t.position > e.length) return "failure";
    t.position++;
    let n = g(";", e, t);
    if (n = B(n, !1, !0), 0 === n.length || !i.test(n)) return "failure";
    const r = A.toLowerCase(), o = n.toLowerCase(), s = {
        type: r,
        subtype: o,
        parameters: new Map,
        essence: `${r}/${o}`
    };
    for(; t.position < e.length;){
        t.position++, u((e)=>a.test(e), e, t);
        let A = u((e)=>";" !== e && "=" !== e, e, t);
        if (A = A.toLowerCase(), t.position < e.length) {
            if (";" === e[t.position]) continue;
            t.position++;
        }
        if (t.position > e.length) break;
        let n = null;
        if ('"' === e[t.position]) n = d(e, t, !0), g(";", e, t);
        else if (n = g(";", e, t), n = B(n, !1, !0), 0 === n.length) continue;
        0 === A.length || !i.test(A) || 0 !== n.length && !c.test(n) || s.parameters.has(A) || s.parameters.set(A, n);
    }
    return s;
}
function d(e, t, A) {
    const r = t.position;
    let o = "";
    for(n('"' === e[t.position]), t.position++; o += u((e)=>'"' !== e && "\\" !== e, e, t), !(t.position >= e.length);){
        const A = e[t.position];
        if (t.position++, "\\" !== A) {
            n('"' === A);
            break;
        }
        if (t.position >= e.length) {
            o += "\\";
            break;
        }
        o += e[t.position], t.position++;
    }
    return A ? o : e.slice(r, t.position);
}
function I(e) {
    return "\r" === e || "\n" === e || "\t" === e || " " === e;
}
function B(e, t = !0, A = !0) {
    let n = 0, r = e.length - 1;
    if (t) for(; n < e.length && I(e[n]); n++);
    if (A) for(; r > 0 && I(e[r]); r--);
    return e.slice(n, r + 1);
}
function Q(e) {
    return "\r" === e || "\n" === e || "\t" === e || "\f" === e || " " === e;
}
module.exports = {
    dataURLProcessor: function(e) {
        n("data:" === e.protocol);
        let t = l(e, !0);
        t = t.slice(5);
        const A = {
            position: 0
        };
        let s = g(",", t, A);
        const i = s.length;
        if (s = function(e, t = !0, A = !0) {
            let n = 0, r = e.length - 1;
            if (t) for(; n < e.length && Q(e[n]); n++);
            if (A) for(; r > 0 && Q(e[r]); r--);
            return e.slice(n, r + 1);
        }(s, !0, !0), A.position >= t.length) return "failure";
        A.position++;
        let a = E(t.slice(i + 1));
        if (/;(\u0020){0,}base64$/i.test(s)) {
            if (a = function(e) {
                (e = e.replace(/[\u0009\u000A\u000C\u000D\u0020]/g, "")).length % 4 == 0 && (e = e.replace(/=?=$/, ""));
                if (e.length % 4 == 1) return "failure";
                if (/[^+/0-9A-Za-z]/.test(e)) return "failure";
                const t = r(e), A = new Uint8Array(t.length);
                for(let e = 0; e < t.length; e++)A[e] = t.charCodeAt(e);
                return A;
            }(o(a)), "failure" === a) return "failure";
            s = s.slice(0, -6), s = s.replace(/(\u0020)+$/, ""), s = s.slice(0, -1);
        }
        s.startsWith(";") && (s = "text/plain" + s);
        let c = h(s);
        return "failure" === c && (c = h("text/plain;charset=US-ASCII")), {
            mimeType: c,
            body: a
        };
    },
    URLSerializer: l,
    collectASequenceOfCodePoints: u,
    collectASequenceOfCodePointsFast: g,
    stringPercentDecode: E,
    parseMIMEType: h,
    collectAnHTTPQuotedString: d,
    serializeAMimeType: function(e) {
        n("failure" !== e);
        const { parameters: t, essence: A } = e;
        let r = A;
        for (let [e, A] of t.entries())r += ";", r += e, r += "=", i.test(A) || (A = A.replace(/(\\|")/g, "\\$1"), A = '"' + A, A += '"'), r += A;
        return r;
    }
};
