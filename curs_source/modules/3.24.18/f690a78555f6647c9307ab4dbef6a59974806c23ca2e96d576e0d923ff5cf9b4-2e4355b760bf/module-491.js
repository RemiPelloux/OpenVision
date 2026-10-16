"use strict";
const A = new TextDecoder("utf-8"), t = new Map([
    [
        "utf-8",
        A
    ],
    [
        "utf8",
        A
    ]
]);
const n = {
    utf8: (e, A)=>0 === e.length ? "" : ("string" == typeof e && (e = Buffer.from(e, A)), e.utf8Slice(0, e.length)),
    latin1: (e, A)=>0 === e.length ? "" : "string" == typeof e ? e : e.latin1Slice(0, e.length),
    utf16le: (e, A)=>0 === e.length ? "" : ("string" == typeof e && (e = Buffer.from(e, A)), e.ucs2Slice(0, e.length)),
    base64: (e, A)=>0 === e.length ? "" : ("string" == typeof e && (e = Buffer.from(e, A)), e.base64Slice(0, e.length)),
    other: (e, A)=>{
        if (0 === e.length) return "";
        if ("string" == typeof e && (e = Buffer.from(e, A)), t.has(this.toString())) try {
            return t.get(this).decode(e);
        } catch  {}
        return "string" == typeof e ? e : e.toString();
    }
};
module.exports = function(e, A, t) {
    return e ? (function(e) {
        let A;
        for(;;)switch(e){
            case "utf-8":
            case "utf8":
                return n.utf8;
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
                return n.latin1;
            case "utf16le":
            case "utf-16le":
            case "ucs2":
            case "ucs-2":
                return n.utf16le;
            case "base64":
                return n.base64;
            default:
                if (void 0 === A) {
                    A = !0, e = e.toLowerCase();
                    continue;
                }
                return n.other.bind(e);
        }
    })(t)(e, A) : e;
};
