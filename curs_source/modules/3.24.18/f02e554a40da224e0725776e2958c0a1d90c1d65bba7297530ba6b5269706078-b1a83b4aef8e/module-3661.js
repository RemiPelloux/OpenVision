const { kFree: n, kConnected: s, kPending: i, kQueued: o, kRunning: a, kSize: u } = require("./module-5532.js"), c = Symbol("pool");
module.exports = class {
    constructor(t){
        this[c] = t;
    }
    get connected() {
        return this[c][s];
    }
    get free() {
        return this[c][n];
    }
    get pending() {
        return this[c][i];
    }
    get queued() {
        return this[c][o];
    }
    get running() {
        return this[c][a];
    }
    get size() {
        return this[c][u];
    }
};
