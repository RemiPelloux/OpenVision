import { createContext } from "../storage/instruments.js";
import { init_dist } from "../../../context/dist/index.js";
var RequestContextOverlayMailbox;
export { RequestContextOverlayMailbox };
var __wakaru_init_request_context_overlay_mailbox_initialized = false;
export function init_request_context_overlay_mailbox() {
if (__wakaru_init_request_context_overlay_mailbox_initialized) return;
__wakaru_init_request_context_overlay_mailbox_initialized = true;
"use strict";
init_dist();
RequestContextOverlayMailbox = class {
    constructor(){
        this.entries = new Map();
        this.lastByComposer = new Map();
    }
    expect(requestId) {
        const entry = this.entry(requestId);
        entry.expected = true;
    }
    isExpected(requestId) {
        return this.entries.get(requestId)?.expected === true;
    }
    offer(requestId, overlay2) {
        const entry = this.entry(requestId);
        entry.overlay = overlay2;
        const waiters = entry.waiters.splice(0);
        for (const waiter of waiters){
            waiter.resolve(overlay2);
        }
    }
    peek(requestId) {
        return this.entries.get(requestId)?.overlay;
    }
    recordLast(composerId, overlay2) {
        this.lastByComposer.set(composerId, overlay2);
    }
    last(composerId) {
        return this.lastByComposer.get(composerId);
    }
    awaitOverlay(requestId, timeoutMs) {
        const existing = this.entries.get(requestId)?.overlay;
        if (existing !== void 0) {
            return Promise.resolve(existing);
        }
        if (timeoutMs !== void 0 && timeoutMs <= 0) {
            return Promise.resolve(void 0);
        }
        const entry = this.entry(requestId);
        return new Promise((resolve36)=>{
            let settled = false;
            let cancelDeadline;
            const finish = (overlay2)=>{
                if (settled) {
                    return;
                }
                settled = true;
                cancelDeadline?.();
                resolve36(overlay2);
            };
            const waiter = {
                resolve: finish
            };
            entry.waiters.push(waiter);
            if (timeoutMs === void 0) {
                return;
            }
            const [deadline, cancel] = createContext().withTimeoutAndCancel(timeoutMs);
            cancelDeadline = cancel;
            deadline.signal.addEventListener("abort", ()=>{
                const index = entry.waiters.indexOf(waiter);
                if (index >= 0) {
                    entry.waiters.splice(index, 1);
                }
                finish(void 0);
            }, {
                once: true
            });
        });
    }
    forget(requestId) {
        const entry = this.entries.get(requestId);
        if (entry === void 0) {
            return;
        }
        this.entries.delete(requestId);
        for (const waiter of entry.waiters){
            waiter.resolve(void 0);
        }
    }
    entry(requestId) {
        const existing = this.entries.get(requestId);
        if (existing !== void 0) {
            return existing;
        }
        const created = {
            expected: false,
            overlay: void 0,
            waiters: []
        };
        this.entries.set(requestId, created);
        return created;
    }
};

}
