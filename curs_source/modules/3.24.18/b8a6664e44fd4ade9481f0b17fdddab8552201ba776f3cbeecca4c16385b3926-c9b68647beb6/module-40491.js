"use strict";
const e = new TextDecoder("utf-8"), t = new Map([
    [
        "utf-8",
        e
    ],
    [
        "utf8",
        e
    ]
]);
const r = {
    utf8: (A, e)=>0 === A.length ? "" : ("string" == typeof A && (A = Buffer.from(A, e)), A.utf8Slice(0, A.length)),
    latin1: (A, e)=>0 === A.length ? "" : "string" == typeof A ? A : A.latin1Slice(0, A.length),
    utf16le: (A, e)=>0 === A.length ? "" : ("string" == typeof A && (A = Buffer.from(A, e)), A.ucs2Slice(0, A.length)),
    base64: (A, e)=>0 === A.length ? "" : ("string" == typeof A && (A = Buffer.from(A, e)), A.base64Slice(0, A.length)),
    other: (A, e)=>{
        if (0 === A.length) return "";
        if ("string" == typeof A && (A = Buffer.from(A, e)), t.has(this.toString())) try {
            return t.get(this).decode(A);
        } catch  {}
        return "string" == typeof A ? A : A.toString();
    }
};
module.exports = function(A, e, t) {
    return A ? (function(A) {
        let e;
        for(;;)switch(A){
            case "utf-8":
            case "utf8":
                return r.utf8;
            case "latin1":
            case "ascii":
            case "us-ascii":
            case "iso-8859-1":
            case "iso8859-1":
            case "iso88591":
            case "iso_8859-1":
            case "windows-1252":
            case "iso_8859-1:1987":
            case "cp1252":
            case "x-cp1252":
                return r.latin1;
            case "utf16le":
            case "utf-16le":
            case "ucs2":
            case "ucs-2":
                return r.utf16le;
            case "base64":
                return r.base64;
            default:
                if (void 0 === e) {
                    e = !0, A = A.toLowerCase();
                    continue;
                }
                return r.other.bind(A);
        }
    })(t)(A, e) : A;
};
