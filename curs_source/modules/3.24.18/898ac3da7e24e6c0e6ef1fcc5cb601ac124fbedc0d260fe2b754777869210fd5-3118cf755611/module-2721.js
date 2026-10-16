const { kFree: t, kConnected: s, kPending: o, kQueued: r, kRunning: i, kSize: A } = require("./module-8832.js"), l = Symbol("pool");
module.exports = class {
    constructor(e){
        this[l] = e;
    }
    get connected() {
        return this[l][s];
    }
    get free() {
        return this[l][t];
    }
    get pending() {
        return this[l][o];
    }
    get queued() {
        return this[l][r];
    }
    get running() {
        return this[l][i];
    }
    get size() {
        return this[l][A];
    }
};
