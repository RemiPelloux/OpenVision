"use strict";
const { Blob: t, File: s } = require("./module-181.js"), { types: o } = require("./module-9023.js"), { kState: r } = require("./module-5899.js"), { isBlobLike: i } = require("./module-5728.js"), { webidl: l } = require("./module-8005.js"), { parseMIMEType: d, serializeAMimeType: m } = require("./module-3631.js"), { kEnumerableProperty: c } = require("./module-9361.js"), p = new TextEncoder;
class A extends t {
    constructor(e, a, n = {}){
        l.argumentLengthCheck(arguments, 2, {
            header: "File constructor"
        }), e = l.converters["sequence<BlobPart>"](e);
        const t = a = l.converters.USVString(a);
        let s, c = (n = l.converters.FilePropertyBag(n)).type;
        e: {
            if (c) {
                if (c = d(c), "failure" === c) {
                    c = "";
                    break e;
                }
                c = m(c).toLowerCase();
            }
            s = n.lastModified;
        }
        super(function(e, a) {
            const n = [];
            for (const t of e)if ("string" == typeof t) {
                let e = t;
                "native" === a.endings && (e = g(e)), n.push(p.encode(e));
            } else o.isAnyArrayBuffer(t) || o.isTypedArray(t) ? t.buffer ? n.push(new Uint8Array(t.buffer, t.byteOffset, t.byteLength)) : n.push(new Uint8Array(t)) : i(t) && n.push(t);
            return n;
        }(e, n), {
            type: c
        }), this[r] = {
            name: t,
            lastModified: s,
            type: c
        };
    }
    get name() {
        return l.brandCheck(this, A), this[r].name;
    }
    get lastModified() {
        return l.brandCheck(this, A), this[r].lastModified;
    }
    get type() {
        return l.brandCheck(this, A), this[r].type;
    }
}
class u {
    constructor(e, a, n = {}){
        const t = a, s = n.type, o = n.lastModified ?? Date.now();
        this[r] = {
            blobLike: e,
            name: t,
            type: s,
            lastModified: o
        };
    }
    stream(...e) {
        return l.brandCheck(this, u), this[r].blobLike.stream(...e);
    }
    arrayBuffer(...e) {
        return l.brandCheck(this, u), this[r].blobLike.arrayBuffer(...e);
    }
    slice(...e) {
        return l.brandCheck(this, u), this[r].blobLike.slice(...e);
    }
    text(...e) {
        return l.brandCheck(this, u), this[r].blobLike.text(...e);
    }
    get size() {
        return l.brandCheck(this, u), this[r].blobLike.size;
    }
    get type() {
        return l.brandCheck(this, u), this[r].blobLike.type;
    }
    get name() {
        return l.brandCheck(this, u), this[r].name;
    }
    get lastModified() {
        return l.brandCheck(this, u), this[r].lastModified;
    }
    get [Symbol.toStringTag]() {
        return "File";
    }
}
function g(e) {
    let a = "\n";
    return "win32" === process.platform && (a = "\r\n"), e.replace(/\r?\n/g, a);
}
Object.defineProperties(A.prototype, {
    [Symbol.toStringTag]: {
        value: "File",
        configurable: !0
    },
    name: c,
    lastModified: c
}), l.converters.Blob = l.interfaceConverter(t), l.converters.BlobPart = function(e, a) {
    if ("Object" === l.util.Type(e)) {
        if (i(e)) return l.converters.Blob(e, {
            strict: !1
        });
        if (ArrayBuffer.isView(e) || o.isAnyArrayBuffer(e)) return l.converters.BufferSource(e, a);
    }
    return l.converters.USVString(e, a);
}, l.converters["sequence<BlobPart>"] = l.sequenceConverter(l.converters.BlobPart), l.converters.FilePropertyBag = l.dictionaryConverter([
    {
        key: "lastModified",
        converter: l.converters["long long"],
        get defaultValue () {
            return Date.now();
        }
    },
    {
        key: "type",
        converter: l.converters.DOMString,
        defaultValue: ""
    },
    {
        key: "endings",
        converter: (e)=>("native" !== (e = (e = l.converters.DOMString(e)).toLowerCase()) && (e = "transparent"), e),
        defaultValue: "transparent"
    }
]), module.exports = {
    File: A,
    FileLike: u,
    isFileLike: function(e) {
        return s && e instanceof s || e instanceof A || e && ("function" == typeof e.stream || "function" == typeof e.arrayBuffer) && "File" === e[Symbol.toStringTag];
    }
};
