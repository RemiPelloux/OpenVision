"use strict";
const r = require(56970), s = new TextEncoder, o = /^[!#$%&'*+\-.^_|~A-Za-z0-9]+$/, n = /[\u000A\u000D\u0009\u0020]/, i = /[\u0009\u000A\u000C\u000D\u0020]/g, a = /^[\u0009\u0020-\u007E\u0080-\u00FF]+$/;
function Q(A, e = !1) {
    if (!e) return A.href;
    const t = A.href, r = A.hash.length, s = 0 === r ? t : t.substring(0, t.length - r);
    return !r && t.endsWith("#") ? s.slice(0, -1) : s;
}
function g(A, e, t) {
    let r = "";
    for(; t.position < e.length && A(e[t.position]);)r += e[t.position], t.position++;
    return r;
}
function E(A, e, t) {
    const r = e.indexOf(A, t.position), s = t.position;
    return -1 === r ? (t.position = e.length, e.slice(s)) : (t.position = r, e.slice(s, t.position));
}
function B(A) {
    return function(A) {
        const e = A.length, t = new Uint8Array(e);
        let r = 0;
        for(let s = 0; s < e; ++s){
            const e = A[s];
            37 !== e ? t[r++] = e : 37 !== e || c(A[s + 1]) && c(A[s + 2]) ? (t[r++] = I(A[s + 1]) << 4 | I(A[s + 2]), s += 2) : t[r++] = 37;
        }
        return e === r ? t : t.subarray(0, r);
    }(s.encode(A));
}
function c(A) {
    return A >= 48 && A <= 57 || A >= 65 && A <= 70 || A >= 97 && A <= 102;
}
function I(A) {
    return A >= 48 && A <= 57 ? A - 48 : (223 & A) - 55;
}
function C(A) {
    const e = {
        position: 0
    }, t = E("/", A = u(A, !0, !0), e);
    if (0 === t.length || !o.test(t)) return "failure";
    if (e.position > A.length) return "failure";
    e.position++;
    let r = E(";", A, e);
    if (r = u(r, !1, !0), 0 === r.length || !o.test(r)) return "failure";
    const s = t.toLowerCase(), i = r.toLowerCase(), Q = {
        type: s,
        subtype: i,
        parameters: new Map,
        essence: `${s}/${i}`
    };
    for(; e.position < A.length;){
        e.position++, g((A)=>n.test(A), A, e);
        let t = g((A)=>";" !== A && "=" !== A, A, e);
        if (t = t.toLowerCase(), e.position < A.length) {
            if (";" === A[e.position]) continue;
            e.position++;
        }
        if (e.position > A.length) break;
        let r = null;
        if ('"' === A[e.position]) r = h(A, e, !0), E(";", A, e);
        else if (r = E(";", A, e), r = u(r, !1, !0), 0 === r.length) continue;
        0 === t.length || !o.test(t) || 0 !== r.length && !a.test(r) || Q.parameters.has(t) || Q.parameters.set(t, r);
    }
    return Q;
}
function h(A, e, t) {
    const s = e.position;
    let o = "";
    for(r('"' === A[e.position]), e.position++; o += g((A)=>'"' !== A && "\\" !== A, A, e), !(e.position >= A.length);){
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
function l(A) {
    return 13 === A || 10 === A || 9 === A || 32 === A;
}
function u(A, e = !0, t = !0) {
    return f(A, e, t, l);
}
function d(A) {
    return 13 === A || 10 === A || 9 === A || 12 === A || 32 === A;
}
function f(A, e, t, r) {
    let s = 0, o = A.length - 1;
    if (e) for(; s < A.length && r(A.charCodeAt(s));)s++;
    if (t) for(; o > 0 && r(A.charCodeAt(o));)o--;
    return 0 === s && o === A.length - 1 ? A : A.slice(s, o + 1);
}
function w(A) {
    const e = A.length;
    if (65535 > e) return String.fromCharCode.apply(null, A);
    let t = "", r = 0, s = 65535;
    for(; r < e;)r + s > e && (s = e - r), t += String.fromCharCode.apply(null, A.subarray(r, r += s));
    return t;
}
module.exports = {
    dataURLProcessor: function(A) {
        r("data:" === A.protocol);
        let e = Q(A, !0);
        e = e.slice(5);
        const t = {
            position: 0
        };
        let s = E(",", e, t);
        const o = s.length;
        if (s = function(A, e = !0, t = !0) {
            return f(A, e, t, d);
        }(s, !0, !0), t.position >= e.length) return "failure";
        t.position++;
        let n = B(e.slice(o + 1));
        if (/;(\u0020){0,}base64$/i.test(s)) {
            if (n = function(A) {
                let e = (A = A.replace(i, "")).length;
                e % 4 == 0 && 61 === A.charCodeAt(e - 1) && (--e, 61 === A.charCodeAt(e - 1) && --e);
                if (e % 4 == 1) return "failure";
                if (/[^+/0-9A-Za-z]/.test(A.length === e ? A : A.substring(0, e))) return "failure";
                const t = Buffer.from(A, "base64");
                return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
            }(w(n)), "failure" === n) return "failure";
            s = s.slice(0, -6), s = s.replace(/(\u0020)+$/, ""), s = s.slice(0, -1);
        }
        s.startsWith(";") && (s = "text/plain" + s);
        let a = C(s);
        return "failure" === a && (a = C("text/plain;charset=US-ASCII")), {
            mimeType: a,
            body: n
        };
    },
    URLSerializer: Q,
    collectASequenceOfCodePoints: g,
    collectASequenceOfCodePointsFast: E,
    stringPercentDecode: B,
    parseMIMEType: C,
    collectAnHTTPQuotedString: h,
    serializeAMimeType: function(A) {
        r("failure" !== A);
        const { parameters: e, essence: t } = A;
        let s = t;
        for (let [A, t] of e.entries())s += ";", s += A, s += "=", o.test(t) || (t = t.replace(/(\\|")/g, "\\$1"), t = '"' + t, t += '"'), s += t;
        return s;
    },
    removeChars: f,
    removeHTTPWhitespace: u,
    minimizeSupportedMimeType: function(A) {
        switch(A.essence){
            case "application/ecmascript":
            case "application/javascript":
            case "application/x-ecmascript":
            case "application/x-javascript":
            case "text/ecmascript":
            case "text/javascript":
            case "text/javascript1.0":
            case "text/javascript1.1":
            case "text/javascript1.2":
            case "text/javascript1.3":
            case "text/javascript1.4":
            case "text/javascript1.5":
            case "text/jscript":
            case "text/livescript":
            case "text/x-ecmascript":
            case "text/x-javascript":
                return "text/javascript";
            case "application/json":
            case "text/json":
                return "application/json";
            case "image/svg+xml":
                return "image/svg+xml";
            case "text/xml":
            case "application/xml":
                return "application/xml";
        }
        return A.subtype.endsWith("+json") ? "application/json" : A.subtype.endsWith("+xml") ? "application/xml" : "";
    },
    HTTP_TOKEN_CODEPOINTS: o,
    isomorphicDecode: w
};
