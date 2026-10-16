const { kFree: n, kConnected: r, kPending: o, kQueued: s, kRunning: i, kSize: a } = require("./module-8832.js"), c = Symbol("pool");
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
        return this[c][i];
    }
    get size() {
        return this[c][a];
    }
};
