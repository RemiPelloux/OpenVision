"use strict";
const { Blob: r, File: s } = require(20181), { types: o } = require(39023), { kState: n } = require("./module-35899.js"), { isBlobLike: i } = require("./module-75728.js"), { webidl: E } = require("./module-48005.js"), { parseMIMEType: Q, serializeAMimeType: g } = require("./module-3631.js"), { kEnumerableProperty: C } = require("./module-9361.js"), B = new TextEncoder;
class a extends r {
    constructor(A, e, t = {}){
        E.argumentLengthCheck(arguments, 2, {
            header: "File constructor"
        }), A = E.converters["sequence<BlobPart>"](A);
        const r = e = E.converters.USVString(e);
        let s, C = (t = E.converters.FilePropertyBag(t)).type;
        A: {
            if (C) {
                if (C = Q(C), "failure" === C) {
                    C = "";
                    break A;
                }
                C = g(C).toLowerCase();
            }
            s = t.lastModified;
        }
        super(function(A, e) {
            const t = [];
            for (const r of A)if ("string" == typeof r) {
                let A = r;
                "native" === e.endings && (A = c(A)), t.push(B.encode(A));
            } else o.isAnyArrayBuffer(r) || o.isTypedArray(r) ? r.buffer ? t.push(new Uint8Array(r.buffer, r.byteOffset, r.byteLength)) : t.push(new Uint8Array(r)) : i(r) && t.push(r);
            return t;
        }(A, t), {
            type: C
        }), this[n] = {
            name: r,
            lastModified: s,
            type: C
        };
    }
    get name() {
        return E.brandCheck(this, a), this[n].name;
    }
    get lastModified() {
        return E.brandCheck(this, a), this[n].lastModified;
    }
    get type() {
        return E.brandCheck(this, a), this[n].type;
    }
}
class I {
    constructor(A, e, t = {}){
        const r = e, s = t.type, o = t.lastModified ?? Date.now();
        this[n] = {
            blobLike: A,
            name: r,
            type: s,
            lastModified: o
        };
    }
    stream(...A) {
        return E.brandCheck(this, I), this[n].blobLike.stream(...A);
    }
    arrayBuffer(...A) {
        return E.brandCheck(this, I), this[n].blobLike.arrayBuffer(...A);
    }
    slice(...A) {
        return E.brandCheck(this, I), this[n].blobLike.slice(...A);
    }
    text(...A) {
        return E.brandCheck(this, I), this[n].blobLike.text(...A);
    }
    get size() {
        return E.brandCheck(this, I), this[n].blobLike.size;
    }
    get type() {
        return E.brandCheck(this, I), this[n].blobLike.type;
    }
    get name() {
        return E.brandCheck(this, I), this[n].name;
    }
    get lastModified() {
        return E.brandCheck(this, I), this[n].lastModified;
    }
    get [Symbol.toStringTag]() {
        return "File";
    }
}
function c(A) {
    let e = "\n";
    return "win32" === process.platform && (e = "\r\n"), A.replace(/\r?\n/g, e);
}
Object.defineProperties(a.prototype, {
    [Symbol.toStringTag]: {
        value: "File",
        configurable: !0
    },
    name: C,
    lastModified: C
}), E.converters.Blob = E.interfaceConverter(r), E.converters.BlobPart = function(A, e) {
    if ("Object" === E.util.Type(A)) {
        if (i(A)) return E.converters.Blob(A, {
            strict: !1
        });
        if (ArrayBuffer.isView(A) || o.isAnyArrayBuffer(A)) return E.converters.BufferSource(A, e);
    }
    return E.converters.USVString(A, e);
}, E.converters["sequence<BlobPart>"] = E.sequenceConverter(E.converters.BlobPart), E.converters.FilePropertyBag = E.dictionaryConverter([
    {
        key: "lastModified",
        converter: E.converters["long long"],
        get defaultValue () {
            return Date.now();
        }
    },
    {
        key: "type",
        converter: E.converters.DOMString,
        defaultValue: ""
    },
    {
        key: "endings",
        converter: (A)=>("native" !== (A = (A = E.converters.DOMString(A)).toLowerCase()) && (A = "transparent"), A),
        defaultValue: "transparent"
    }
]), module.exports = {
    File: a,
    FileLike: I,
    isFileLike: function(A) {
        return s && A instanceof s || A instanceof a || A && ("function" == typeof A.stream || "function" == typeof A.arrayBuffer) && "File" === A[Symbol.toStringTag];
    }
};
