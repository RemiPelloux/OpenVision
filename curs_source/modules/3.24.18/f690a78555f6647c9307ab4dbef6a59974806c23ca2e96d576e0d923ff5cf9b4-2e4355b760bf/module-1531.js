"use strict";
const { kConnected: n, kSize: r } = require("./module-8832.js");
class o {
    constructor(e){
        this.value = e;
    }
    deref() {
        return 0 === this.value[n] && 0 === this.value[r] ? void 0 : this.value;
    }
}
class s {
    constructor(e){
        this.finalizer = e;
    }
    register(e, A) {
        e.on && e.on("disconnect", ()=>{
            0 === e[n] && 0 === e[r] && this.finalizer(A);
        });
    }
}
module.exports = function() {
    return process.env.NODE_V8_COVERAGE ? {
        WeakRef: o,
        FinalizationRegistry: s
    } : {
        WeakRef: global.WeakRef || o,
        FinalizationRegistry: global.FinalizationRegistry || s
    };
};
