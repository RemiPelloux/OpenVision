"use strict";
const { Blob: n, File: r } = require("./module-181.js"), { types: o } = require("./module-9023.js"), { kState: s } = require("./module-5899.js"), { isBlobLike: a } = require("./module-5728.js"), { webidl: i } = require("./module-8005.js"), { parseMIMEType: c, serializeAMimeType: l } = require("./module-3631.js"), { kEnumerableProperty: g } = require("./module-9361.js"), E = new TextEncoder;
class u extends n {
    constructor(e, A, t = {}){
        i.argumentLengthCheck(arguments, 2, {
            header: "File constructor"
        }), e = i.converters["sequence<BlobPart>"](e);
        const n = A = i.converters.USVString(A);
        let r, g = (t = i.converters.FilePropertyBag(t)).type;
        e: {
            if (g) {
                if (g = c(g), "failure" === g) {
                    g = "";
                    break e;
                }
                g = l(g).toLowerCase();
            }
            r = t.lastModified;
        }
        super(function(e, A) {
            const t = [];
            for (const n of e)if ("string" == typeof n) {
                let e = n;
                "native" === A.endings && (e = I(e)), t.push(E.encode(e));
            } else o.isAnyArrayBuffer(n) || o.isTypedArray(n) ? n.buffer ? t.push(new Uint8Array(n.buffer, n.byteOffset, n.byteLength)) : t.push(new Uint8Array(n)) : a(n) && t.push(n);
            return t;
        }(e, t), {
            type: g
        }), this[s] = {
            name: n,
            lastModified: r,
            type: g
        };
    }
    get name() {
        return i.brandCheck(this, u), this[s].name;
    }
    get lastModified() {
        return i.brandCheck(this, u), this[s].lastModified;
    }
    get type() {
        return i.brandCheck(this, u), this[s].type;
    }
}
class d {
    constructor(e, A, t = {}){
        const n = A, r = t.type, o = t.lastModified ?? Date.now();
        this[s] = {
            blobLike: e,
            name: n,
            type: r,
            lastModified: o
        };
    }
    stream(...e) {
        return i.brandCheck(this, d), this[s].blobLike.stream(...e);
    }
    arrayBuffer(...e) {
        return i.brandCheck(this, d), this[s].blobLike.arrayBuffer(...e);
    }
    slice(...e) {
        return i.brandCheck(this, d), this[s].blobLike.slice(...e);
    }
    text(...e) {
        return i.brandCheck(this, d), this[s].blobLike.text(...e);
    }
    get size() {
        return i.brandCheck(this, d), this[s].blobLike.size;
    }
    get type() {
        return i.brandCheck(this, d), this[s].blobLike.type;
    }
    get name() {
        return i.brandCheck(this, d), this[s].name;
    }
    get lastModified() {
        return i.brandCheck(this, d), this[s].lastModified;
    }
    get [Symbol.toStringTag]() {
        return "File";
    }
}
function I(e) {
    let A = "\n";
    return "win32" === process.platform && (A = "\r\n"), e.replace(/\r?\n/g, A);
}
Object.defineProperties(u.prototype, {
    [Symbol.toStringTag]: {
        value: "File",
        configurable: !0
    },
    name: g,
    lastModified: g
}), i.converters.Blob = i.interfaceConverter(n), i.converters.BlobPart = function(e, A) {
    if ("Object" === i.util.Type(e)) {
        if (a(e)) return i.converters.Blob(e, {
            strict: !1
        });
        if (ArrayBuffer.isView(e) || o.isAnyArrayBuffer(e)) return i.converters.BufferSource(e, A);
    }
    return i.converters.USVString(e, A);
}, i.converters["sequence<BlobPart>"] = i.sequenceConverter(i.converters.BlobPart), i.converters.FilePropertyBag = i.dictionaryConverter([
    {
        key: "lastModified",
        converter: i.converters["long long"],
        get defaultValue () {
            return Date.now();
        }
    },
    {
        key: "type",
        converter: i.converters.DOMString,
        defaultValue: ""
    },
    {
        key: "endings",
        converter: (e)=>("native" !== (e = (e = i.converters.DOMString(e)).toLowerCase()) && (e = "transparent"), e),
        defaultValue: "transparent"
    }
]), module.exports = {
    File: u,
    FileLike: d,
    isFileLike: function(e) {
        return r && e instanceof r || e instanceof u || e && ("function" == typeof e.stream || "function" == typeof e.arrayBuffer) && "File" === e[Symbol.toStringTag];
    }
};
