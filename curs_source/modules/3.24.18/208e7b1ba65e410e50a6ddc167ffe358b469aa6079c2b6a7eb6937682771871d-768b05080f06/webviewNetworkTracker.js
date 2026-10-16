import { h } from "./tslib.es6.js";
var Vfe;
export { Vfe };
var __wakaru_uZe_initialized = false;
export function uZe() {
if (__wakaru_uZe_initialized) return;
__wakaru_uZe_initialized = true;
"use strict";
h(), Vfe = class {
    constructor(){
        this.requests = new Map, this.pendingBySession = new Map, this.setupSessions = new Set;
    }
    setup(e, t) {
        return this.requests.set(t, []), this.setupSessions.has(e) ? !1 : (this.setupSessions.add(e), this.pendingBySession.set(e, new Map), !0);
    }
    onBeforeRequest(e, t, n, r, s) {
        const i = this.pendingBySession.get(e);
        i && i.set(t, {
            url: n,
            method: r,
            timestamp: Date.now(),
            resourceType: s
        });
    }
    onRequestCompleted(e, t, n, r) {
        const s = this.pendingBySession.get(e);
        if (!s) return;
        const i = s.get(t);
        if (i) {
            if (n !== void 0) {
                const a = this.requests.get(n);
                a && a.push({
                    ...i,
                    statusCode: r
                });
            }
            s.delete(t);
        }
    }
    onRequestErrored(e, t, n) {
        const r = this.pendingBySession.get(e);
        if (!r) return;
        const s = r.get(t);
        if (s) {
            if (n !== void 0) {
                const i = this.requests.get(n);
                i && i.push({
                    ...s,
                    statusCode: void 0
                });
            }
            r.delete(t);
        }
    }
    getRequests(e) {
        return this.requests.get(e) ?? [];
    }
    clear(e) {
        this.requests.has(e) && this.requests.set(e, []);
    }
    remove(e) {
        this.requests.delete(e);
    }
};

}
