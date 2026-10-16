const { kFree: n, kConnected: r, kPending: o, kQueued: s, kRunning: a, kSize: i } = require("./module-8832.js"), c = Symbol("pool");
module.exports = class {
    constructor(e){
        this[c] = e;
    }
    get connected() {
        return this[c][r];
    }
    get free() {
        return this[c][n];
    }
    get pending() {
        return this[c][o];
    }
    get queued() {
        return this[c][s];
    }
    get running() {
        return this[c][a];
    }
    get size() {
        return this[c][i];
    }
};
