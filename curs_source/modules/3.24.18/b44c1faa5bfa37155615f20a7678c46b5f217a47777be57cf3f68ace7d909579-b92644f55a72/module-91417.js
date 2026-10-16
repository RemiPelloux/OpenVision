"use strict";
require.d(exports, {
    S: ()=>o,
    h: ()=>a
});
var n = require("./module-92801.js"), s = require("./module-84959.js");
class o extends n.T {
    constructor(e, t){
        super(e, s.C.Unavailable), this.thresholdMs = t;
    }
}
const i = 10;
function a(e) {
    let t = e;
    for(let e = 0; e < i && void 0 !== t; e++){
        if (t instanceof o) return !0;
        t = t instanceof Error ? t.cause : void 0;
    }
    return !1;
}
