"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.NetworkChangeMonitor = void 0;
exports.NetworkChangeMonitor = class {
    constructor(t, e, r){
        this._networkId = 0;
    }
    get networkId() {
        return this._networkId;
    }
    async triggerCallbackIfDisconnected(t, e) {
        return {
            isDisconnected: !1
        };
    }
    dispose() {}
};
