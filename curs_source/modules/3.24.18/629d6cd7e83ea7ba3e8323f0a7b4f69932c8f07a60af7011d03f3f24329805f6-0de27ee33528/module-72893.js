"use strict";
const { isUSVString: r, bufferToLowerCasedHeaderName: s } = require("./module-55201.js"), { utf8DecodeBytes: o } = require("./module-48215.js"), { HTTP_TOKEN_CODEPOINTS: n, isomorphicDecode: i } = require("./module-52603.js"), { isFileLike: a } = require("./module-90165.js"), { makeEntry: Q } = require("./module-41445.js"), g = require(56970), { File: E } = require(4573), B = globalThis.File ?? E, c = Buffer.from('form-data; name="'), I = Buffer.from("; filename"), C = Buffer.from("--"), h = Buffer.from("--\r\n");
function l(A) {
    for(let e = 0; e < A.length; ++e)if (-128 & A.charCodeAt(e)) return !1;
    return !0;
}
function u(A, e) {
    let t = null, r = null, o = null, a = null;
    for(;;){
        if (13 === A[e.position] && 10 === A[e.position + 1]) return null === t ? "failure" : {
            name: t,
            filename: r,
            contentType: o,
            encoding: a
        };
        let Q = f((A)=>10 !== A && 13 !== A && 58 !== A, A, e);
        if (Q = w(Q, !0, !0, (A)=>9 === A || 32 === A), !n.test(Q.toString())) return "failure";
        if (58 !== A[e.position]) return "failure";
        switch(e.position++, f((A)=>32 === A || 9 === A, A, e), s(Q)){
            case "content-disposition":
                if (t = r = null, !y(A, c, e)) return "failure";
                if (e.position += 17, t = d(A, e), null === t) return "failure";
                if (y(A, I, e)) {
                    let t = e.position + I.length;
                    if (42 === A[t] && (e.position += 1, t += 1), 61 !== A[t] || 34 !== A[t + 1]) return "failure";
                    if (e.position += 12, r = d(A, e), null === r) return "failure";
                }
                break;
            case "content-type":
                {
                    let t = f((A)=>10 !== A && 13 !== A, A, e);
                    t = w(t, !1, !0, (A)=>9 === A || 32 === A), o = i(t);
                    break;
                }
            case "content-transfer-encoding":
                {
                    let t = f((A)=>10 !== A && 13 !== A, A, e);
                    t = w(t, !1, !0, (A)=>9 === A || 32 === A), a = i(t);
                    break;
                }
            default:
                f((A)=>10 !== A && 13 !== A, A, e);
        }
        if (13 !== A[e.position] && 10 !== A[e.position + 1]) return "failure";
        e.position += 2;
    }
}
function d(A, e) {
    g(34 === A[e.position - 1]);
    let t = f((A)=>10 !== A && 13 !== A && 34 !== A, A, e);
    return 34 !== A[e.position] ? null : (e.position++, t = (new TextDecoder).decode(t).replace(/%0A/gi, "\n").replace(/%0D/gi, "\r").replace(/%22/g, '"'), t);
}
function f(A, e, t) {
    let r = t.position;
    for(; r < e.length && A(e[r]);)++r;
    return e.subarray(t.position, t.position = r);
}
function w(A, e, t, r) {
    let s = 0, o = A.length - 1;
    if (e) for(; s < A.length && r(A[s]);)s++;
    if (t) for(; o > 0 && r(A[o]);)o--;
    return 0 === s && o === A.length - 1 ? A : A.subarray(s, o + 1);
}
function y(A, e, t) {
    if (A.length < e.length) return !1;
    for(let r = 0; r < e.length; r++)if (e[r] !== A[t.position + r]) return !1;
    return !0;
}
module.exports = {
    multipartFormDataParser: function(A, e) {
        g("failure" !== e && "multipart/form-data" === e.essence);
        const t = e.parameters.get("boundary");
        if (void 0 === t) return "failure";
        const s = Buffer.from(`--${t}`, "utf8"), n = [], i = {
            position: 0
        };
        for(; 13 === A[i.position] && 10 === A[i.position + 1];)i.position += 2;
        let E = A.length;
        for(; 10 === A[E - 1] && 13 === A[E - 2];)E -= 2;
        for(E !== A.length && (A = A.subarray(0, E));;){
            if (!A.subarray(i.position, i.position + s.length).equals(s)) return "failure";
            if (i.position += s.length, i.position === A.length - 2 && y(A, C, i) || i.position === A.length - 4 && y(A, h, i)) return n;
            if (13 !== A[i.position] || 10 !== A[i.position + 1]) return "failure";
            i.position += 2;
            const e = u(A, i);
            if ("failure" === e) return "failure";
            let t, E, { name: c, filename: I, contentType: d, encoding: f } = e;
            i.position += 2;
            {
                const e = A.indexOf(s.subarray(2), i.position);
                if (-1 === e) return "failure";
                t = A.subarray(i.position, e - 4), i.position += t.length, "base64" === f && (t = Buffer.from(t.toString(), "base64"));
            }
            if (13 !== A[i.position] || 10 !== A[i.position + 1]) return "failure";
            i.position += 2, null !== I ? (d ??= "text/plain", l(d) || (d = ""), E = new B([
                t
            ], I, {
                type: d
            })) : E = o(Buffer.from(t)), g(r(c)), g("string" == typeof E && r(E) || a(E)), n.push(Q(c, E, I));
        }
    },
    validateBoundary: function(A) {
        const e = A.length;
        if (e < 27 || e > 70) return !1;
        for(let t = 0; t < e; ++t){
            const e = A.charCodeAt(t);
            if (!(e >= 48 && e <= 57 || e >= 65 && e <= 90 || e >= 97 && e <= 122 || 39 === e || 45 === e || 95 === e)) return !1;
        }
        return !0;
    }
};
