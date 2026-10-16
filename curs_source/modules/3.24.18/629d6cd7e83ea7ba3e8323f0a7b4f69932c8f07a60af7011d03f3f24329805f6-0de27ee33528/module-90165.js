"use strict";
const { Blob: r, File: s } = require(4573), { kState: o } = require("./module-15978.js"), { webidl: n } = require("./module-43290.js");
class i {
    constructor(A, e, t = {}){
        const r = e, s = t.type, n = t.lastModified ?? Date.now();
        this[o] = {
            blobLike: A,
            name: r,
            type: s,
            lastModified: n
        };
    }
    stream(...A) {
        return n.brandCheck(this, i), this[o].blobLike.stream(...A);
    }
    arrayBuffer(...A) {
        return n.brandCheck(this, i), this[o].blobLike.arrayBuffer(...A);
    }
    slice(...A) {
        return n.brandCheck(this, i), this[o].blobLike.slice(...A);
    }
    text(...A) {
        return n.brandCheck(this, i), this[o].blobLike.text(...A);
    }
    get size() {
        return n.brandCheck(this, i), this[o].blobLike.size;
    }
    get type() {
        return n.brandCheck(this, i), this[o].blobLike.type;
    }
    get name() {
        return n.brandCheck(this, i), this[o].name;
    }
    get lastModified() {
        return n.brandCheck(this, i), this[o].lastModified;
    }
    get [Symbol.toStringTag]() {
        return "File";
    }
}
n.converters.Blob = n.interfaceConverter(r), module.exports = {
    FileLike: i,
    isFileLike: function(A) {
        return A instanceof s || A && ("function" == typeof A.stream || "function" == typeof A.arrayBuffer) && "File" === A[Symbol.toStringTag];
    }
};
