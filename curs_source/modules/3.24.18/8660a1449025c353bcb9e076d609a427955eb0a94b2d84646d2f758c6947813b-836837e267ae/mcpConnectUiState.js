import { E } from "./tslib.es6.js";
var Tks, Eks, w6f;
export { Eks, Tks, w6f };
var __wakaru_u4l_initialized = false;
export function u4l() {
if (__wakaru_u4l_initialized) return;
__wakaru_u4l_initialized = true;
"use strict";
E(), Tks = "editorWindow", Eks = {
    isConnecting: !1,
    authUrlOpened: !1,
    isExchangingToken: !1
}, w6f = class {
    constructor(){
        this.activeFlowsByConnectStateKey = new Map, this.listenersByConnectStateKey = new Map, this.anyChangeListeners = new Set, this.nextRun = 0;
    }
    getState(t) {
        return this.activeFlowsByConnectStateKey.get(t)?.state ?? Eks;
    }
    isActive(t) {
        return this.activeFlowsByConnectStateKey.has(t);
    }
    subscribeToAnyChange(t) {
        return this.anyChangeListeners.add(t), ()=>{
            this.anyChangeListeners.delete(t);
        };
    }
    subscribe(t, e) {
        let n = this.listenersByConnectStateKey.get(t);
        return n || (n = new Set, this.listenersByConnectStateKey.set(t, n)), n.add(e), e(this.getState(t)), ()=>{
            n.delete(e), n.size === 0 && this.listenersByConnectStateKey.delete(t);
        };
    }
    start(t) {
        this.activeFlowsByConnectStateKey.get(t.connectStateKey)?.abortController.abort();
        const n = this.nextRun + 1;
        return this.nextRun = n, this.activeFlowsByConnectStateKey.set(t.connectStateKey, {
            run: n,
            abortController: t.abortController,
            state: {
                isConnecting: !0,
                authUrlOpened: !1,
                isExchangingToken: !1
            }
        }), this.notifyListeners(t.connectStateKey, this.getState(t.connectStateKey)), n;
    }
    setState(t, e, n) {
        const i = this.activeFlowsByConnectStateKey.get(t);
        !i || i.run !== e || (i.state = n, this.notifyListeners(t, n));
    }
    finish(t, e) {
        const n = this.activeFlowsByConnectStateKey.get(t);
        !n || n.run !== e || (this.activeFlowsByConnectStateKey.delete(t), this.notifyListeners(t, Eks));
    }
    cancel(t) {
        const e = this.activeFlowsByConnectStateKey.get(t);
        e?.abortController.abort(), e && this.activeFlowsByConnectStateKey.delete(t), this.notifyListeners(t, Eks);
    }
    cancelIfUnobserved(t) {
        return (this.listenersByConnectStateKey.get(t)?.size ?? 0) > 0 || !this.activeFlowsByConnectStateKey.has(t) ? !1 : (this.cancel(t), !0);
    }
    dispose() {
        for (const t of this.activeFlowsByConnectStateKey.values())t.abortController.abort();
        this.activeFlowsByConnectStateKey.clear(), this.listenersByConnectStateKey.clear(), this.anyChangeListeners.clear();
    }
    notifyAnyChangeListeners() {
        for (const t of this.anyChangeListeners)t();
    }
    notifyListeners(t, e) {
        const n = this.listenersByConnectStateKey.get(t);
        if (n) for (const i of n)i(e);
        this.notifyAnyChangeListeners();
    }
};

}
