"use strict";
const { kConnected: n, kSize: s } = require("./module-5532.js");
class i {
    constructor(t){
        this.value = t;
    }
    deref() {
        return 0 === this.value[n] && 0 === this.value[s] ? void 0 : this.value;
    }
}
class o {
    constructor(t){
        this.finalizer = t;
    }
    register(t, e) {
        t.on && t.on("disconnect", ()=>{
            0 === t[n] && 0 === t[s] && this.finalizer(e);
        });
    }
}
module.exports = function() {
    return process.env.NODE_V8_COVERAGE ? {
        WeakRef: i,
        FinalizationRegistry: o
    } : {
        WeakRef: global.WeakRef || i,
        FinalizationRegistry: global.FinalizationRegistry || o
    };
};
