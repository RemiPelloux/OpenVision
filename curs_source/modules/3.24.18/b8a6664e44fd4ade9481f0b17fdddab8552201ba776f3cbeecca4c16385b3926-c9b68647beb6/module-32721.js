const { kFree: r, kConnected: s, kPending: o, kQueued: n, kRunning: i, kSize: E } = require("./module-58832.js"), Q = Symbol("pool");
module.exports = class {
    constructor(A){
        this[Q] = A;
    }
    get connected() {
        return this[Q][s];
    }
    get free() {
        return this[Q][r];
    }
    get pending() {
        return this[Q][o];
    }
    get queued() {
        return this[Q][n];
    }
    get running() {
        return this[Q][i];
    }
    get size() {
        return this[Q][E];
    }
};
