const { kFree: n, kConnected: s, kPending: o, kQueued: i, kRunning: a, kSize: c } = require("./module-15532.js"), l = Symbol("pool");
module.exports = class {
    constructor(e){
        this[l] = e;
    }
    get connected() {
        return this[l][s];
    }
    get free() {
        return this[l][n];
    }
    get pending() {
        return this[l][o];
    }
    get queued() {
        return this[l][i];
    }
    get running() {
        return this[l][a];
    }
    get size() {
        return this[l][c];
    }
};
