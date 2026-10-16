import { Ehe } from "./liveRequestTrace.js";
import { zx } from "./sleepWakeRecorder.js";
import { h } from "./tslib.es6.js";
function KLe(e) {
    Kx = e;
}
function zLe() {
    return Kx;
}
var Kx;
function AO(e) {
    return {
        traceId: e.traceId,
        spanId: e.spanId,
        parentSpanId: e.parentSpanId,
        name: e.name,
        startTime: e.startTime,
        endTime: e.endTime,
        attributes: e.attributes,
        error: e.status?.code === 2
    };
}
function gJe(e) {
    try {
        MO?.spanStarted(AO(e));
    } catch  {}
}
function fJe(e) {
    try {
        MO?.spanEnded(AO(e));
    } catch  {}
}
function whe(e) {
    try {
        MO?.spanUpdated(AO(e));
    } catch  {}
}
var MO;
function vJe() {
    const e = new Uint8Array(a1);
    crypto.getRandomValues(e);
    let t = "";
    for(let n = 0; n < a1; n++)t += i1[e[n]];
    DO = t, Iu = 0;
}
function Ihe(e) {
    if (e > o1) {
        const n = new Uint8Array(e / 2);
        crypto.getRandomValues(n);
        let r = "";
        for(let s = 0; s < n.length; s++)r += i1[n[s]];
        return r;
    }
    Iu + e > o1 && vJe();
    const t = DO.slice(Iu, Iu + e);
    return Iu += e, t;
}
var s1, NO, i1, a1, o1, DO, Iu, Ahe;
export { AO, Ahe, DO, Ihe, Iu, KLe, Kx, MO, NO, a1, fJe, gJe, i1, o1, s1, vJe, whe, zLe };
var __wakaru_TJe_initialized = false;
export function TJe() {
if (__wakaru_TJe_initialized) return;
__wakaru_TJe_initialized = true;
"use strict";
h(), Ehe(), zx(), s1 = ((e)=>(e[e.UNSPECIFIED = 0] = "UNSPECIFIED", e[e.OK = 1] = "OK", e[e.ERROR = 2] = "ERROR", e))(s1 || {}), i1 = new Array(256);
for(let e = 0; e < 256; e++)i1[e] = (e < 16 ? "0" : "") + e.toString(16);
a1 = 4096, o1 = a1 * 2, DO = "", Iu = o1, Ahe = class TLe {
    constructor(t){
        if (this._attributes = {}, this._inheritableAttributes = {}, this._kind = 1, this._links = [], this._traceFlags = 1, this._ended = !1, this._name = t.name, this._traceId = t.traceId || this._generateTraceId(), this._spanId = t.spanId || this._generateSpanId(), this._parentSpanId = t.parentSpanId, this._kind = t.kind || 1, this._startTime = t.startTime || Date.now(), this._traceFlags = t.traceFlags || 1, this._performanceTraceName = `span/${this._name}/${this._traceId}/${this._spanId}`, t.inheritableAttributes) {
            this._inheritableAttributes = {
                ...t.inheritableAttributes
            };
            for (const [n, r] of Object.entries(this._inheritableAttributes))this._attributes[n] = r;
        }
        try {
            NO?.mark(this._performanceTraceName, "start");
        } catch  {}
        gJe(this);
    }
    spanContext() {
        return {
            traceId: this._traceId,
            spanId: this._spanId,
            traceFlags: this._traceFlags,
            traceState: this._traceState,
            isRemote: !1
        };
    }
    end(t) {
        if (!this._ended) {
            this._endTime = t || Date.now(), this._ended = !0;
            try {
                this._attachOverlappingSleepSummary();
            } catch  {}
            try {
                NO?.mark(this._performanceTraceName, "end"), NO?.measure(this._performanceTraceName);
            } catch  {}
            fJe(this);
        }
    }
    _attachOverlappingSleepSummary() {
        const t = this._endTime;
        if (t === void 0) return;
        const n = zLe();
        if (n === void 0) return;
        const r = n.getEventsInRange(this._startTime, t);
        if (r.length === 0) return;
        let s = 0;
        const i = new Set;
        for (const l of r){
            const d = Math.max(this._startTime, l.suspendTime), u = Math.min(t, l.resumeTime);
            s += Math.max(0, u - d), i.add(l.source);
        }
        const a = Math.max(0, t - this._startTime), o = Math.max(0, a - s);
        this._attributes["cursor.os.suspended"] = "true", this._attributes["cursor.os.suspend_count"] = String(r.length), this._attributes["cursor.os.suspended_duration_ms"] = String(s), this._attributes["cursor.os.active_duration_ms"] = String(o), this._attributes["cursor.os.sleep_sources"] = [
            ...i
        ].sort().join(",");
    }
    setAttribute(t, n) {
        return n === void 0 ? delete this._attributes[t] : this._attributes[t] = String(n), whe(this), this;
    }
    setAttributes(t) {
        for (const [n, r] of Object.entries(t))this.setAttribute(n, r);
        return this;
    }
    setInheritableAttribute(t, n) {
        const r = String(n);
        return this._attributes[t] = r, this._inheritableAttributes[t] = r, whe(this), this;
    }
    setStatus(t) {
        return this._status = t, this;
    }
    updateName(t) {
        return this._name = t, this;
    }
    isRecording() {
        return !this._ended;
    }
    addLink(t) {
        return this._links.push(t), this;
    }
    createChild(t, n) {
        return new TLe({
            name: t,
            traceId: this._traceId,
            parentSpanId: this._spanId,
            kind: n || 1,
            inheritableAttributes: this._inheritableAttributes
        });
    }
    get name() {
        return this._name;
    }
    get traceId() {
        return this._traceId;
    }
    get spanId() {
        return this._spanId;
    }
    get parentSpanId() {
        return this._parentSpanId;
    }
    get startTime() {
        return this._startTime;
    }
    get endTime() {
        return this._endTime;
    }
    get attributes() {
        return {
            ...this._attributes
        };
    }
    get status() {
        return this._status;
    }
    get kind() {
        return this._kind;
    }
    get links() {
        return [
            ...this._links
        ];
    }
    get traceState() {
        return this._traceState;
    }
    get traceFlags() {
        return this._traceFlags;
    }
    get ended() {
        return this._ended;
    }
    _generateTraceId() {
        return Ihe(32);
    }
    _generateSpanId() {
        return Ihe(16);
    }
    addEvent(t) {
        return this;
    }
    addLinks(t) {
        return this;
    }
    recordException(t, n) {}
};

}
