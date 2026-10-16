"use strict";
const { Blob: n, File: s } = require("./module-181.js"), { types: i } = require("./module-9023.js"), { kState: o } = require("./module-7271.js"), { isBlobLike: a } = require("./module-8116.js"), { webidl: u } = require("./module-8193.js"), { parseMIMEType: c, serializeAMimeType: l } = require("./module-4387.js"), { kEnumerableProperty: m } = require("./module-3589.js"), d = new TextEncoder;
class f extends n {
    constructor(t, e, r = {}){
        u.argumentLengthCheck(arguments, 2, {
            header: "File constructor"
        }), t = u.converters["sequence<BlobPart>"](t);
        const n = e = u.converters.USVString(e);
        let s, m = (r = u.converters.FilePropertyBag(r)).type;
        t: {
            if (m) {
                if (m = c(m), "failure" === m) {
                    m = "";
                    break t;
                }
                m = l(m).toLowerCase();
            }
            s = r.lastModified;
        }
        super(function(t, e) {
            const r = [];
            for (const n of t)if ("string" == typeof n) {
                let t = n;
                "native" === e.endings && (t = h(t)), r.push(d.encode(t));
            } else i.isAnyArrayBuffer(n) || i.isTypedArray(n) ? n.buffer ? r.push(new Uint8Array(n.buffer, n.byteOffset, n.byteLength)) : r.push(new Uint8Array(n)) : a(n) && r.push(n);
            return r;
        }(t, r), {
            type: m
        }), this[o] = {
            name: n,
            lastModified: s,
            type: m
        };
    }
    get name() {
        return u.brandCheck(this, f), this[o].name;
    }
    get lastModified() {
        return u.brandCheck(this, f), this[o].lastModified;
    }
    get type() {
        return u.brandCheck(this, f), this[o].type;
    }
}
class p {
    constructor(t, e, r = {}){
        const n = e, s = r.type, i = r.lastModified ?? Date.now();
        this[o] = {
            blobLike: t,
            name: n,
            type: s,
            lastModified: i
        };
    }
    stream(...t) {
        return u.brandCheck(this, p), this[o].blobLike.stream(...t);
    }
    arrayBuffer(...t) {
        return u.brandCheck(this, p), this[o].blobLike.arrayBuffer(...t);
    }
    slice(...t) {
        return u.brandCheck(this, p), this[o].blobLike.slice(...t);
    }
    text(...t) {
        return u.brandCheck(this, p), this[o].blobLike.text(...t);
    }
    get size() {
        return u.brandCheck(this, p), this[o].blobLike.size;
    }
    get type() {
        return u.brandCheck(this, p), this[o].blobLike.type;
    }
    get name() {
        return u.brandCheck(this, p), this[o].name;
    }
    get lastModified() {
        return u.brandCheck(this, p), this[o].lastModified;
    }
    get [Symbol.toStringTag]() {
        return "File";
    }
}
function h(t) {
    let e = "\n";
    return "win32" === process.platform && (e = "\r\n"), t.replace(/\r?\n/g, e);
}
Object.defineProperties(f.prototype, {
    [Symbol.toStringTag]: {
        value: "File",
        configurable: !0
    },
    name: m,
    lastModified: m
}), u.converters.Blob = u.interfaceConverter(n), u.converters.BlobPart = function(t, e) {
    if ("Object" === u.util.Type(t)) {
        if (a(t)) return u.converters.Blob(t, {
            strict: !1
        });
        if (ArrayBuffer.isView(t) || i.isAnyArrayBuffer(t)) return u.converters.BufferSource(t, e);
    }
    return u.converters.USVString(t, e);
}, u.converters["sequence<BlobPart>"] = u.sequenceConverter(u.converters.BlobPart), u.converters.FilePropertyBag = u.dictionaryConverter([
    {
        key: "lastModified",
        converter: u.converters["long long"],
        get defaultValue () {
            return Date.now();
        }
    },
    {
        key: "type",
        converter: u.converters.DOMString,
        defaultValue: ""
    },
    {
        key: "endings",
        converter: (t)=>("native" !== (t = (t = u.converters.DOMString(t)).toLowerCase()) && (t = "transparent"), t),
        defaultValue: "transparent"
    }
]), module.exports = {
    File: f,
    FileLike: p,
    isFileLike: function(t) {
        return s && t instanceof s || t instanceof f || t && ("function" == typeof t.stream || "function" == typeof t.arrayBuffer) && "File" === t[Symbol.toStringTag];
    }
};
