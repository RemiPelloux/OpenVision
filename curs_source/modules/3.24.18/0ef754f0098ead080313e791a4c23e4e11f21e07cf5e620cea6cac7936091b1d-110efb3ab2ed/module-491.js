"use strict";
const a = new TextDecoder("utf-8"), n = new Map([
    [
        "utf-8",
        a
    ],
    [
        "utf8",
        a
    ]
]);
const t = {
    utf8: (e, a)=>0 === e.length ? "" : ("string" == typeof e && (e = Buffer.from(e, a)), e.utf8Slice(0, e.length)),
    latin1: (e, a)=>0 === e.length ? "" : "string" == typeof e ? e : e.latin1Slice(0, e.length),
    utf16le: (e, a)=>0 === e.length ? "" : ("string" == typeof e && (e = Buffer.from(e, a)), e.ucs2Slice(0, e.length)),
    base64: (e, a)=>0 === e.length ? "" : ("string" == typeof e && (e = Buffer.from(e, a)), e.base64Slice(0, e.length)),
    other: (e, a)=>{
        if (0 === e.length) return "";
        if ("string" == typeof e && (e = Buffer.from(e, a)), n.has(this.toString())) try {
            return n.get(this).decode(e);
        } catch  {}
        return "string" == typeof e ? e : e.toString();
    }
};
module.exports = function(e, a, n) {
    return e ? (function(e) {
        let a;
        for(;;)switch(e){
            case "utf-8":
            case "utf8":
                return t.utf8;
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
                return t.latin1;
            case "utf16le":
            case "utf-16le":
            case "ucs2":
            case "ucs-2":
                return t.utf16le;
            case "base64":
                return t.base64;
            default:
                if (void 0 === a) {
                    a = !0, e = e.toLowerCase();
                    continue;
                }
                return t.other.bind(e);
        }
    })(n)(e, a) : e;
};
