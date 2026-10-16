const { kFree: t, kConnected: s, kPending: o, kQueued: r, kRunning: i, kSize: l } = require("./module-8832.js"), d = Symbol("pool");
module.exports = class {
    constructor(e){
        this[d] = e;
    }
    get connected() {
        return this[d][s];
    }
    get free() {
        return this[d][t];
    }
    get pending() {
        return this[d][o];
    }
    get queued() {
        return this[d][r];
    }
    get running() {
        return this[d][i];
    }
    get size() {
        return this[d][l];
    }
};
