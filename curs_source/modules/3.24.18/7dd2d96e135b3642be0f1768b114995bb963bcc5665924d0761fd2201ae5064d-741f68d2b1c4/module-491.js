"use strict";
const n = new TextDecoder("utf-8"), t = new Map([
    [
        "utf-8",
        n
    ],
    [
        "utf8",
        n
    ]
]);
const a = {
    utf8: (e, n)=>0 === e.length ? "" : ("string" == typeof e && (e = Buffer.from(e, n)), e.utf8Slice(0, e.length)),
    latin1: (e, n)=>0 === e.length ? "" : "string" == typeof e ? e : e.latin1Slice(0, e.length),
    utf16le: (e, n)=>0 === e.length ? "" : ("string" == typeof e && (e = Buffer.from(e, n)), e.ucs2Slice(0, e.length)),
    base64: (e, n)=>0 === e.length ? "" : ("string" == typeof e && (e = Buffer.from(e, n)), e.base64Slice(0, e.length)),
    other: (e, n)=>{
        if (0 === e.length) return "";
        if ("string" == typeof e && (e = Buffer.from(e, n)), t.has(this.toString())) try {
            return t.get(this).decode(e);
        } catch  {}
        return "string" == typeof e ? e : e.toString();
    }
};
module.exports = function(e, n, t) {
    return e ? (function(e) {
        let n;
        for(;;)switch(e){
            case "utf-8":
            case "utf8":
                return a.utf8;
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
                return a.latin1;
            case "utf16le":
            case "utf-16le":
            case "ucs2":
            case "ucs-2":
                return a.utf16le;
            case "base64":
                return a.base64;
            default:
                if (void 0 === n) {
                    n = !0, e = e.toLowerCase();
                    continue;
                }
                return a.other.bind(e);
        }
    })(t)(e, n) : e;
};
