"use strict";
const { kConnected: n, kSize: s } = require("./module-15532.js");
class o {
    constructor(e){
        this.value = e;
    }
    deref() {
        return 0 === this.value[n] && 0 === this.value[s] ? void 0 : this.value;
    }
}
class i {
    constructor(e){
        this.finalizer = e;
    }
    register(e, t) {
        e.on && e.on("disconnect", ()=>{
            0 === e[n] && 0 === e[s] && this.finalizer(t);
        });
    }
}
module.exports = function() {
    return process.env.NODE_V8_COVERAGE ? {
        WeakRef: o,
        FinalizationRegistry: i
    } : {
        WeakRef: global.WeakRef || o,
        FinalizationRegistry: global.FinalizationRegistry || i
    };
};
