"use strict";
const e = new TextDecoder("utf-8"), r = new Map([
    [
        "utf-8",
        e
    ],
    [
        "utf8",
        e
    ]
]);
const n = {
    utf8: (t, e)=>0 === t.length ? "" : ("string" == typeof t && (t = Buffer.from(t, e)), t.utf8Slice(0, t.length)),
    latin1: (t, e)=>0 === t.length ? "" : "string" == typeof t ? t : t.latin1Slice(0, t.length),
    utf16le: (t, e)=>0 === t.length ? "" : ("string" == typeof t && (t = Buffer.from(t, e)), t.ucs2Slice(0, t.length)),
    base64: (t, e)=>0 === t.length ? "" : ("string" == typeof t && (t = Buffer.from(t, e)), t.base64Slice(0, t.length)),
    other: (t, e)=>{
        if (0 === t.length) return "";
        if ("string" == typeof t && (t = Buffer.from(t, e)), r.has(this.toString())) try {
            return r.get(this).decode(t);
        } catch  {}
        return "string" == typeof t ? t : t.toString();
    }
};
module.exports = function(t, e, r) {
    return t ? (function(t) {
        let e;
        for(;;)switch(t){
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
                if (void 0 === e) {
                    e = !0, t = t.toLowerCase();
                    continue;
                }
                return n.other.bind(t);
        }
    })(r)(t, e) : t;
};
