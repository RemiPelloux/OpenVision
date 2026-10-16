import { BBl } from "./hash-string.js";
import { x } from "./tslib.es6.js";
import { UBl } from "./use-isomorphic-layout-effect.js";
var $Bl, HBl, SXe, WBl, GBl;
export { $Bl, GBl, HBl, SXe, WBl };
var __wakaru_VBl_initialized = false;
export function VBl() {
if (__wakaru_VBl_initialized) return;
__wakaru_VBl_initialized = true;
"use strict";
x(), BBl(), UBl(), $Bl = Object.defineProperty, HBl = (e, t, n)=>t in e ? $Bl(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : e[t] = n, SXe = (e, t, n)=>HBl(e, typeof t != "symbol" ? t + "" : t, n), WBl = class {
    constructor(){
        SXe(this, "subscribers", new Set), SXe(this, "removeGlobalSyncListeners"), SXe(this, "sharedTimestampMs"), SXe(this, "pendingResyncFrame"), SXe(this, "emitCurrentSync", ()=>{
            this.emitSharedSync(this.getSharedTimestampMs());
        }), SXe(this, "scheduleResync", ()=>{
            if (this.pendingResyncFrame === void 0) {
                if (typeof requestAnimationFrame != "function") {
                    this.emitCurrentSync();
                    return;
                }
                this.pendingResyncFrame = requestAnimationFrame(()=>{
                    this.pendingResyncFrame = void 0, this.emitCurrentSync();
                });
            }
        }), SXe(this, "handleVisibilityChange", ()=>{
            document.visibilityState === "visible" && this.scheduleResync();
        });
    }
    getSharedTimestampMs() {
        return this.sharedTimestampMs !== void 0 ? this.sharedTimestampMs : (this.sharedTimestampMs = Date.now(), queueMicrotask(()=>{
            this.sharedTimestampMs = void 0;
        }), this.sharedTimestampMs);
    }
    subscribeAndSync(e) {
        return this.ensureGlobalSyncListeners(), this.subscribers.add(e), e(this.getSharedTimestampMs()), ()=>{
            this.subscribers.delete(e), this.subscribers.size === 0 && this.removeGlobalSyncListeners?.();
        };
    }
    emitSharedSync(e) {
        this.subscribers.forEach((t)=>{
            t(e);
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
}, GBl = new WBl;

}
