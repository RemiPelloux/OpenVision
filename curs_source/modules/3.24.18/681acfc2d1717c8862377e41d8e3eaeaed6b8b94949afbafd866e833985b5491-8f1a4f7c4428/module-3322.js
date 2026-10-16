"use strict";
const { Blob: n, File: r } = require("./module-181.js"), { types: o } = require("./module-9023.js"), { kState: s } = require("./module-5899.js"), { isBlobLike: i } = require("./module-5728.js"), { webidl: a } = require("./module-8005.js"), { parseMIMEType: c, serializeAMimeType: l } = require("./module-3631.js"), { kEnumerableProperty: u } = require("./module-9361.js"), g = new TextEncoder;
class E extends n {
    constructor(e, t, A = {}){
        a.argumentLengthCheck(arguments, 2, {
            header: "File constructor"
        }), e = a.converters["sequence<BlobPart>"](e);
        const n = t = a.converters.USVString(t);
        let r, u = (A = a.converters.FilePropertyBag(A)).type;
        e: {
            if (u) {
                if (u = c(u), "failure" === u) {
                    u = "";
                    break e;
                }
                u = l(u).toLowerCase();
            }
            r = A.lastModified;
        }
        super(function(e, t) {
            const A = [];
            for (const n of e)if ("string" == typeof n) {
                let e = n;
                "native" === t.endings && (e = d(e)), A.push(g.encode(e));
            } else o.isAnyArrayBuffer(n) || o.isTypedArray(n) ? n.buffer ? A.push(new Uint8Array(n.buffer, n.byteOffset, n.byteLength)) : A.push(new Uint8Array(n)) : i(n) && A.push(n);
            return A;
        }(e, A), {
            type: u
        }), this[s] = {
            name: n,
            lastModified: r,
            type: u
        };
    }
    get name() {
        return a.brandCheck(this, E), this[s].name;
    }
    get lastModified() {
        return a.brandCheck(this, E), this[s].lastModified;
    }
    get type() {
        return a.brandCheck(this, E), this[s].type;
    }
}
class h {
    constructor(e, t, A = {}){
        const n = t, r = A.type, o = A.lastModified ?? Date.now();
        this[s] = {
            blobLike: e,
            name: n,
            type: r,
            lastModified: o
        };
    }
    stream(...e) {
        return a.brandCheck(this, h), this[s].blobLike.stream(...e);
    }
    arrayBuffer(...e) {
        return a.brandCheck(this, h), this[s].blobLike.arrayBuffer(...e);
    }
    slice(...e) {
        return a.brandCheck(this, h), this[s].blobLike.slice(...e);
    }
    text(...e) {
        return a.brandCheck(this, h), this[s].blobLike.text(...e);
    }
    get size() {
        return a.brandCheck(this, h), this[s].blobLike.size;
    }
    get type() {
        return a.brandCheck(this, h), this[s].blobLike.type;
    }
    get name() {
        return a.brandCheck(this, h), this[s].name;
    }
    get lastModified() {
        return a.brandCheck(this, h), this[s].lastModified;
    }
    get [Symbol.toStringTag]() {
        return "File";
    }
}
function d(e) {
    let t = "\n";
    return "win32" === process.platform && (t = "\r\n"), e.replace(/\r?\n/g, t);
}
Object.defineProperties(E.prototype, {
    [Symbol.toStringTag]: {
        value: "File",
        configurable: !0
    },
    name: u,
    lastModified: u
}), a.converters.Blob = a.interfaceConverter(n), a.converters.BlobPart = function(e, t) {
    if ("Object" === a.util.Type(e)) {
        if (i(e)) return a.converters.Blob(e, {
            strict: !1
        });
        if (ArrayBuffer.isView(e) || o.isAnyArrayBuffer(e)) return a.converters.BufferSource(e, t);
    }
    return a.converters.USVString(e, t);
}, a.converters["sequence<BlobPart>"] = a.sequenceConverter(a.converters.BlobPart), a.converters.FilePropertyBag = a.dictionaryConverter([
    {
        key: "lastModified",
        converter: a.converters["long long"],
        get defaultValue () {
            return Date.now();
        }
    },
    {
        key: "type",
        converter: a.converters.DOMString,
        defaultValue: ""
    },
    {
        key: "endings",
        converter: (e)=>("native" !== (e = (e = a.converters.DOMString(e)).toLowerCase()) && (e = "transparent"), e),
        defaultValue: "transparent"
    }
]), module.exports = {
    File: E,
    FileLike: h,
    isFileLike: function(e) {
        return r && e instanceof r || e instanceof E || e && ("function" == typeof e.stream || "function" == typeof e.arrayBuffer) && "File" === e[Symbol.toStringTag];
    }
};
