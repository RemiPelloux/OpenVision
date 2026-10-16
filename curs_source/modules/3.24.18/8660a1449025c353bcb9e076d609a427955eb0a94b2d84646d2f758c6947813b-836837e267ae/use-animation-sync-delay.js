import { y9h } from "./hash-string.js";
import { E } from "./tslib.es6.js";
import { m5r } from "./use-isomorphic-layout-effect.js";
var S9h, k9h, J1t, w9h, C9h;
export { C9h, J1t, S9h, k9h, w9h };
var __wakaru__ga_initialized = false;
export function _ga() {
if (__wakaru__ga_initialized) return;
__wakaru__ga_initialized = true;
"use strict";
E(), y9h(), m5r(), S9h = Object.defineProperty, k9h = (t, e, n)=>e in t ? S9h(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : t[e] = n, J1t = (t, e, n)=>k9h(t, typeof e != "symbol" ? e + "" : e, n), w9h = class {
    constructor(){
        J1t(this, "subscribers", new Set), J1t(this, "removeGlobalSyncListeners"), J1t(this, "sharedTimestampMs"), J1t(this, "pendingResyncFrame"), J1t(this, "emitCurrentSync", ()=>{
            this.emitSharedSync(this.getSharedTimestampMs());
        }), J1t(this, "scheduleResync", ()=>{
            if (this.pendingResyncFrame === void 0) {
                if (typeof requestAnimationFrame != "function") {
                    this.emitCurrentSync();
                    return;
                }
                this.pendingResyncFrame = requestAnimationFrame(()=>{
                    this.pendingResyncFrame = void 0, this.emitCurrentSync();
                });
            }
        }), J1t(this, "handleVisibilityChange", ()=>{
            document.visibilityState === "visible" && this.scheduleResync();
        });
    }
    getSharedTimestampMs() {
        return this.sharedTimestampMs !== void 0 ? this.sharedTimestampMs : (this.sharedTimestampMs = Date.now(), queueMicrotask(()=>{
            this.sharedTimestampMs = void 0;
        }), this.sharedTimestampMs);
    }
    subscribeAndSync(t) {
        return this.ensureGlobalSyncListeners(), this.subscribers.add(t), t(this.getSharedTimestampMs()), ()=>{
            this.subscribers.delete(t), this.subscribers.size === 0 && this.removeGlobalSyncListeners?.();
        };
    }
    emitSharedSync(t) {
        this.subscribers.forEach((e)=>{
            e(t);
        });
    }
    cancelPendingResync() {
        this.pendingResyncFrame !== void 0 && (cancelAnimationFrame(this.pendingResyncFrame), this.pendingResyncFrame = void 0);
    }
    ensureGlobalSyncListeners() {
        this.removeGlobalSyncListeners !== void 0 || typeof window > "u" || typeof document > "u" || (window.addEventListener("pageshow", this.scheduleResync), document.addEventListener("visibilitychange", this.handleVisibilityChange), this.removeGlobalSyncListeners = ()=>{
            window.removeEventListener("pageshow", this.scheduleResync), document.removeEventListener("visibilitychange", this.handleVisibilityChange), this.cancelPendingResync(), this.removeGlobalSyncListeners = void 0;
        });
    }
}, C9h = new w9h;

}
