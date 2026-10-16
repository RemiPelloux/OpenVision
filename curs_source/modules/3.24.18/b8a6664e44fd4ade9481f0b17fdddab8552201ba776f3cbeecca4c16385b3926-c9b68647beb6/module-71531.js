"use strict";
const { kConnected: r, kSize: s } = require("./module-58832.js");
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
}
module.exports = function() {
    return process.env.NODE_V8_COVERAGE ? {
        WeakRef: o,
        FinalizationRegistry: n
    } : {
        WeakRef: global.WeakRef || o,
        FinalizationRegistry: global.FinalizationRegistry || n
    };
};
