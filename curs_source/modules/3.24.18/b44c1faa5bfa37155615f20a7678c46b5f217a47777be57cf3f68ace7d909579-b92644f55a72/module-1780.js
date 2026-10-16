"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.NetworkChangeMonitor = void 0;
exports.NetworkChangeMonitor = class {
    constructor(e, t, r){
        this._networkId = 0;
    }
    get networkId() {
        return this._networkId;
    }
    async triggerCallbackIfDisconnected(e, t) {
        return {
            isDisconnected: !1
        };
    }
    dispose() {}
};
