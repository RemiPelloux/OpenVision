"use strict";
require.r(exports), require.d(exports, {
    Hash: ()=>a
});
var n = require(90443), s = require("./module-15725.js"), i = require(20181), o = require(76982);
class a {
    algorithmIdentifier;
    secret;
    hash;
    constructor(e, t){
        this.algorithmIdentifier = e, this.secret = t, this.reset();
    }
    update(e, t) {
        this.hash.update((0, s.F)(c(e, t)));
    }
    digest() {
        return Promise.resolve(this.hash.digest());
    }
    reset() {
        this.hash = this.secret ? (0, o.createHmac)(this.algorithmIdentifier, c(this.secret)) : (0, o.createHash)(this.algorithmIdentifier);
    }
}
function c(e, t) {
    return i.Buffer.isBuffer(e) ? e : "string" == typeof e ? (0, n.s)(e, t) : ArrayBuffer.isView(e) ? (0, n.Q)(e.buffer, e.byteOffset, e.byteLength) : (0, n.Q)(e);
}
