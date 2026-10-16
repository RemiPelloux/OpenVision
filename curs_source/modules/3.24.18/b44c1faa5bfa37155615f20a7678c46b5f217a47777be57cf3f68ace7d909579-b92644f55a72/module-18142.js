"use strict";
const { Blob: n, File: s } = require("./module-20181.js"), { types: o } = require("./module-39023.js"), { kState: i } = require("./module-77271.js"), { isBlobLike: a } = require("./module-98116.js"), { webidl: c } = require("./module-18193.js"), { parseMIMEType: l, serializeAMimeType: u } = require("./module-64387.js"), { kEnumerableProperty: d } = require("./module-83589.js"), p = new TextEncoder;
class m extends n {
    constructor(e, t, r = {}){
        c.argumentLengthCheck(arguments, 2, {
            header: "File constructor"
        }), e = c.converters["sequence<BlobPart>"](e);
        const n = t = c.converters.USVString(t);
        let s, d = (r = c.converters.FilePropertyBag(r)).type;
        e: {
            if (d) {
                if (d = l(d), "failure" === d) {
                    d = "";
                    break e;
                }
                d = u(d).toLowerCase();
            }
            s = r.lastModified;
        }
        super(function(e, t) {
            const r = [];
            for (const n of e)if ("string" == typeof n) {
                let e = n;
                "native" === t.endings && (e = f(e)), r.push(p.encode(e));
            } else o.isAnyArrayBuffer(n) || o.isTypedArray(n) ? n.buffer ? r.push(new Uint8Array(n.buffer, n.byteOffset, n.byteLength)) : r.push(new Uint8Array(n)) : a(n) && r.push(n);
            return r;
        }(e, r), {
            type: d
        }), this[i] = {
            name: n,
            lastModified: s,
            type: d
        };
    }
    get name() {
        return c.brandCheck(this, m), this[i].name;
    }
    get lastModified() {
        return c.brandCheck(this, m), this[i].lastModified;
    }
    get type() {
        return c.brandCheck(this, m), this[i].type;
    }
}
class h {
    constructor(e, t, r = {}){
        const n = t, s = r.type, o = r.lastModified ?? Date.now();
        this[i] = {
            blobLike: e,
            name: n,
            type: s,
            lastModified: o
        };
    }
    stream(...e) {
        return c.brandCheck(this, h), this[i].blobLike.stream(...e);
    }
    arrayBuffer(...e) {
        return c.brandCheck(this, h), this[i].blobLike.arrayBuffer(...e);
    }
    slice(...e) {
        return c.brandCheck(this, h), this[i].blobLike.slice(...e);
    }
    text(...e) {
        return c.brandCheck(this, h), this[i].blobLike.text(...e);
    }
    get size() {
        return c.brandCheck(this, h), this[i].blobLike.size;
    }
    get type() {
        return c.brandCheck(this, h), this[i].blobLike.type;
    }
    get name() {
        return c.brandCheck(this, h), this[i].name;
    }
    get lastModified() {
        return c.brandCheck(this, h), this[i].lastModified;
    }
    get [Symbol.toStringTag]() {
        return "File";
    }
}
function f(e) {
    let t = "\n";
    return "win32" === process.platform && (t = "\r\n"), e.replace(/\r?\n/g, t);
}
Object.defineProperties(m.prototype, {
    [Symbol.toStringTag]: {
        value: "File",
        configurable: !0
    },
    name: d,
    lastModified: d
}), c.converters.Blob = c.interfaceConverter(n), c.converters.BlobPart = function(e, t) {
    if ("Object" === c.util.Type(e)) {
        if (a(e)) return c.converters.Blob(e, {
            strict: !1
        });
        if (ArrayBuffer.isView(e) || o.isAnyArrayBuffer(e)) return c.converters.BufferSource(e, t);
    }
    return c.converters.USVString(e, t);
}, c.converters["sequence<BlobPart>"] = c.sequenceConverter(c.converters.BlobPart), c.converters.FilePropertyBag = c.dictionaryConverter([
    {
        key: "lastModified",
        converter: c.converters["long long"],
        get defaultValue () {
            return Date.now();
        }
    },
    {
        key: "type",
        converter: c.converters.DOMString,
        defaultValue: ""
    },
    {
        key: "endings",
        converter: (e)=>("native" !== (e = (e = c.converters.DOMString(e)).toLowerCase()) && (e = "transparent"), e),
        defaultValue: "transparent"
    }
]), module.exports = {
    File: m,
    FileLike: h,
    isFileLike: function(e) {
        return s && e instanceof s || e instanceof m || e && ("function" == typeof e.stream || "function" == typeof e.arrayBuffer) && "File" === e[Symbol.toStringTag];
    }
};
