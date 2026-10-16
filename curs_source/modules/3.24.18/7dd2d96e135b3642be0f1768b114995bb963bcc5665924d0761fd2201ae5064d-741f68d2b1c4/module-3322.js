"use strict";
const { Blob: a, File: s } = require("./module-181.js"), { types: o } = require("./module-9023.js"), { kState: r } = require("./module-5899.js"), { isBlobLike: i } = require("./module-5728.js"), { webidl: A } = require("./module-8005.js"), { parseMIMEType: c, serializeAMimeType: l } = require("./module-3631.js"), { kEnumerableProperty: d } = require("./module-9361.js"), m = new TextEncoder;
class u extends a {
    constructor(e, n, t = {}){
        A.argumentLengthCheck(arguments, 2, {
            header: "File constructor"
        }), e = A.converters["sequence<BlobPart>"](e);
        const a = n = A.converters.USVString(n);
        let s, d = (t = A.converters.FilePropertyBag(t)).type;
        e: {
            if (d) {
                if (d = c(d), "failure" === d) {
                    d = "";
                    break e;
                }
                d = l(d).toLowerCase();
            }
            s = t.lastModified;
        }
        super(function(e, n) {
            const t = [];
            for (const a of e)if ("string" == typeof a) {
                let e = a;
                "native" === n.endings && (e = p(e)), t.push(m.encode(e));
            } else o.isAnyArrayBuffer(a) || o.isTypedArray(a) ? a.buffer ? t.push(new Uint8Array(a.buffer, a.byteOffset, a.byteLength)) : t.push(new Uint8Array(a)) : i(a) && t.push(a);
            return t;
        }(e, t), {
            type: d
        }), this[r] = {
            name: a,
            lastModified: s,
            type: d
        };
    }
    get name() {
        return A.brandCheck(this, u), this[r].name;
    }
    get lastModified() {
        return A.brandCheck(this, u), this[r].lastModified;
    }
    get type() {
        return A.brandCheck(this, u), this[r].type;
    }
}
class g {
    constructor(e, n, t = {}){
        const a = n, s = t.type, o = t.lastModified ?? Date.now();
        this[r] = {
            blobLike: e,
            name: a,
            type: s,
            lastModified: o
        };
    }
    stream(...e) {
        return A.brandCheck(this, g), this[r].blobLike.stream(...e);
    }
    arrayBuffer(...e) {
        return A.brandCheck(this, g), this[r].blobLike.arrayBuffer(...e);
    }
    slice(...e) {
        return A.brandCheck(this, g), this[r].blobLike.slice(...e);
    }
    text(...e) {
        return A.brandCheck(this, g), this[r].blobLike.text(...e);
    }
    get size() {
        return A.brandCheck(this, g), this[r].blobLike.size;
    }
    get type() {
        return A.brandCheck(this, g), this[r].blobLike.type;
    }
    get name() {
        return A.brandCheck(this, g), this[r].name;
    }
    get lastModified() {
        return A.brandCheck(this, g), this[r].lastModified;
    }
    get [Symbol.toStringTag]() {
        return "File";
    }
}
function p(e) {
    let n = "\n";
    return "win32" === process.platform && (n = "\r\n"), e.replace(/\r?\n/g, n);
}
Object.defineProperties(u.prototype, {
    [Symbol.toStringTag]: {
        value: "File",
        configurable: !0
    },
    name: d,
    lastModified: d
}), A.converters.Blob = A.interfaceConverter(a), A.converters.BlobPart = function(e, n) {
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
    File: u,
    FileLike: g,
    isFileLike: function(e) {
        return s && e instanceof s || e instanceof u || e && ("function" == typeof e.stream || "function" == typeof e.arrayBuffer) && "File" === e[Symbol.toStringTag];
    }
};
