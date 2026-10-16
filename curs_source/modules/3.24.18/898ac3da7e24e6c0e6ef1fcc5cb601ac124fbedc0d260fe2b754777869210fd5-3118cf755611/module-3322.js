"use strict";
const { Blob: t, File: s } = require("./module-181.js"), { types: o } = require("./module-9023.js"), { kState: r } = require("./module-5899.js"), { isBlobLike: i } = require("./module-5728.js"), { webidl: A } = require("./module-8005.js"), { parseMIMEType: l, serializeAMimeType: c } = require("./module-3631.js"), { kEnumerableProperty: m } = require("./module-9361.js"), d = new TextEncoder;
class g extends t {
    constructor(e, n, a = {}){
        A.argumentLengthCheck(arguments, 2, {
            header: "File constructor"
        }), e = A.converters["sequence<BlobPart>"](e);
        const t = n = A.converters.USVString(n);
        let s, m = (a = A.converters.FilePropertyBag(a)).type;
        e: {
            if (m) {
                if (m = l(m), "failure" === m) {
                    m = "";
                    break e;
                }
                m = c(m).toLowerCase();
            }
            s = a.lastModified;
        }
        super(function(e, n) {
            const a = [];
            for (const t of e)if ("string" == typeof t) {
                let e = t;
                "native" === n.endings && (e = E(e)), a.push(d.encode(e));
            } else o.isAnyArrayBuffer(t) || o.isTypedArray(t) ? t.buffer ? a.push(new Uint8Array(t.buffer, t.byteOffset, t.byteLength)) : a.push(new Uint8Array(t)) : i(t) && a.push(t);
            return a;
        }(e, a), {
            type: m
        }), this[r] = {
            name: t,
            lastModified: s,
            type: m
        };
    }
    get name() {
        return A.brandCheck(this, g), this[r].name;
    }
    get lastModified() {
        return A.brandCheck(this, g), this[r].lastModified;
    }
    get type() {
        return A.brandCheck(this, g), this[r].type;
    }
}
class u {
    constructor(e, n, a = {}){
        const t = n, s = a.type, o = a.lastModified ?? Date.now();
        this[r] = {
            blobLike: e,
            name: t,
            type: s,
            lastModified: o
        };
    }
    stream(...e) {
        return A.brandCheck(this, u), this[r].blobLike.stream(...e);
    }
    arrayBuffer(...e) {
        return A.brandCheck(this, u), this[r].blobLike.arrayBuffer(...e);
    }
    slice(...e) {
        return A.brandCheck(this, u), this[r].blobLike.slice(...e);
    }
    text(...e) {
        return A.brandCheck(this, u), this[r].blobLike.text(...e);
    }
    get size() {
        return A.brandCheck(this, u), this[r].blobLike.size;
    }
    get type() {
        return A.brandCheck(this, u), this[r].blobLike.type;
    }
    get name() {
        return A.brandCheck(this, u), this[r].name;
    }
    get lastModified() {
        return A.brandCheck(this, u), this[r].lastModified;
    }
    get [Symbol.toStringTag]() {
        return "File";
    }
}
function E(e) {
    let n = "\n";
    return "win32" === process.platform && (n = "\r\n"), e.replace(/\r?\n/g, n);
}
Object.defineProperties(g.prototype, {
    [Symbol.toStringTag]: {
        value: "File",
        configurable: !0
    },
    name: m,
    lastModified: m
}), A.converters.Blob = A.interfaceConverter(t), A.converters.BlobPart = function(e, n) {
    if ("Object" === A.util.Type(e)) {
        if (i(e)) return A.converters.Blob(e, {
            strict: !1
        });
        if (ArrayBuffer.isView(e) || o.isAnyArrayBuffer(e)) return A.converters.BufferSource(e, n);
    }
    return A.converters.USVString(e, n);
}, A.converters["sequence<BlobPart>"] = A.sequenceConverter(A.converters.BlobPart), A.converters.FilePropertyBag = A.dictionaryConverter([
    {
        key: "lastModified",
        converter: A.converters["long long"],
        get defaultValue () {
            return Date.now();
        }
    },
    {
        key: "type",
        converter: A.converters.DOMString,
        defaultValue: ""
    },
    {
        key: "endings",
        converter: (e)=>("native" !== (e = (e = A.converters.DOMString(e)).toLowerCase()) && (e = "transparent"), e),
        defaultValue: "transparent"
    }
]), module.exports = {
    File: g,
    FileLike: u,
    isFileLike: function(e) {
        return s && e instanceof s || e instanceof g || e && ("function" == typeof e.stream || "function" == typeof e.arrayBuffer) && "File" === e[Symbol.toStringTag];
    }
};
