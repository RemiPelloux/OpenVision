"use strict";
const { kConnected: r, kSize: s } = require("./module-76992.js");
class o {
    constructor(A){
        this.value = A;
    }
    deref() {
        return 0 === this.value[r] && 0 === this.value[s] ? void 0 : this.value;
    }
}
class n {
    constructor(A){
        this.finalizer = A;
    }
    register(A, e) {
        A.on && A.on("disconnect", ()=>{
            0 === A[r] && 0 === A[s] && this.finalizer(e);
        });
    }
    unregister(A) {}
}
module.exports = function() {
    return process.env.NODE_V8_COVERAGE && process.version.startsWith("v18") ? (process._rawDebug("Using compatibility WeakRef and FinalizationRegistry"), {
        WeakRef: o,
        FinalizationRegistry: n
    }) : {
        WeakRef,
        FinalizationRegistry
    };
};
