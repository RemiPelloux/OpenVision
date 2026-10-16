"use strict";
const { kConnected: a, kSize: s } = require("./module-8832.js");
class o {
    constructor(e){
        this.value = e;
    }
    deref() {
        return 0 === this.value[a] && 0 === this.value[s] ? void 0 : this.value;
    }
}
class r {
    constructor(e){
        this.finalizer = e;
    }
    register(e, n) {
        e.on && e.on("disconnect", ()=>{
            0 === e[a] && 0 === e[s] && this.finalizer(n);
        });
    }
}
module.exports = function() {
    return process.env.NODE_V8_COVERAGE ? {
        WeakRef: o,
        FinalizationRegistry: r
    } : {
        WeakRef: global.WeakRef || o,
        FinalizationRegistry: global.FinalizationRegistry || r
    };
};
