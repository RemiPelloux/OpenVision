import { cvw } from "./BA.js";
import { E } from "./tslib.es6.js";
var r5l;
export { r5l };
var __wakaru_DMf_initialized = false;
export function DMf() {
if (__wakaru_DMf_initialized) return;
__wakaru_DMf_initialized = true;
"use strict";
E(), r5l = class {
    constructor(t, e = cvw){
        this.emit = t, this.now = e, this.session = null;
    }
    get isSelected() {
        return this.session?.selected ?? !1;
    }
    get availableSources() {
        return this.session === null ? [] : [
            ...this.session.availableSources
        ];
    }
    begin() {
        this.session === null && (this.session = {
            startedAtMs: this.now(),
            lastElapsedMs: 0,
            availableSources: new Set,
            hadUsableRow: !1,
            selected: !1
        }, this.emitSafely({
            kind: "access_started"
        }));
    }
    observeSources(t, e) {
        const n = this.session;
        if (n === null) return;
        n.hadUsableRow ||= e;
        const i = this.elapsedMs();
        for (const r of t)n.availableSources.has(r) || (n.availableSources.add(r), this.emitSafely({
            kind: "source_available",
            source: r,
            timeToFirstUsableMs: i
        }));
    }
    select() {
        this.session !== null && (this.session.selected = !0);
    }
    elapsedMs() {
        const t = this.session;
        return t === null ? 0 : (t.lastElapsedMs = Math.max(t.lastElapsedMs, this.now() - t.startedAtMs, 0), t.lastElapsedMs);
    }
    end() {
        const t = this.session;
        if (t === null) return;
        const e = this.elapsedMs();
        this.session = null;
        const n = t.selected ? "selected" : t.hadUsableRow ? "abandoned" : "closed_without_items";
        this.emitSafely({
            kind: "access_completed",
            outcome: n,
            durationMs: e,
            hadUsableRow: t.hadUsableRow,
            availableSources: [
                ...t.availableSources
            ]
        });
    }
    abort() {
        this.session = null;
    }
    emitSafely(t) {
        try {
            this.emit(t);
        } catch  {}
    }
};

}
