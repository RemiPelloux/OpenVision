const { kFree: a, kConnected: s, kPending: o, kQueued: r, kRunning: i, kSize: A } = require("./module-8832.js"), c = Symbol("pool");
module.exports = class {
    constructor(e){
        this[c] = e;
    }
    get connected() {
        return this[c][s];
    }
    get free() {
        return this[c][a];
    }
    get pending() {
        return this[c][o];
    }
    get queued() {
        return this[c][r];
    }
    get running() {
        return this[c][i];
    }
    get size() {
        return this[c][A];
    }
};
