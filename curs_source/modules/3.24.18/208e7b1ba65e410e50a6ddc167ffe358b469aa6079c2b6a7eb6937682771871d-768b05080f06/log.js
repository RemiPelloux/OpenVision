import { ZF, x0 } from "./contextkey.js";
import { bt } from "./diskFileSystemProviderServer_2.js";
import { Ka } from "./errorMessage.js";
import { N, se } from "./event.js";
import { Qa } from "./hash.js";
import { Q, ne } from "./instantiation.js";
import { J, j } from "./lifecycle.js";
import { Yn, mr } from "./map.js";
import { Ne } from "./nls.js";
import { ee, oe } from "./platform.js";
import { Ln } from "./platform_2.js";
import { Ae, Ft } from "./resources.js";
import { h } from "./tslib.es6.js";
import { Ze } from "./types.js";
import { x, ye } from "./uri.js";
function Xa(e) {
    return w0(e, 0);
}
function w0(e, t) {
    switch(typeof e){
        case "object":
            return e === null ? ga(349, t) : Array.isArray(e) ? G4e(e, t) : V4e(e, t);
        case "string":
            return NF(e, t);
        case "boolean":
            return B4e(e, t);
        case "number":
            return ga(e, t);
        case "undefined":
            return ga(937, t);
        default:
            return ga(617, t);
    }
}
function ga(e, t) {
    return (t << 5) - t + e | 0;
}
function B4e(e, t) {
    return ga(e ? 433 : 863, t);
}
function NF(e, t) {
    t = ga(149417, t);
    for(let n = 0, r = e.length; n < r; n++)t = ga(e.charCodeAt(n), t);
    return t;
}
function G4e(e, t) {
    return t = ga(104579, t), e.reduce((n, r)=>w0(r, n), t);
}
function V4e(e, t) {
    return t = ga(181387, t), Object.keys(e).sort().reduce((n, r)=>(n = NF(r, n), w0(e[r], n)), t);
}
function Ni() {
    return new Date().toISOString();
}
function i5e(e, t) {
    return e !== 0 && e <= t;
}
function nd(e, t = !1) {
    let n = "";
    for(let r = 0; r < e.length; r++){
        let s = e[r];
        if (s instanceof Error && (s = bt(s, t)), typeof s == "object") try {
            s = JSON.stringify(s);
        } catch  {}
        n += (r > 0 ? " " : "") + s;
    }
    return n;
}
function o5e(e) {
    switch(e){
        case 1:
            return "trace";
        case 2:
            return "debug";
        case 3:
            return "info";
        case 4:
            return "warn";
        case 5:
            return "error";
        case 0:
            return "off";
    }
}
var Z, rd, rn, op, xT, FT, t6, n6, r6, s6, i6, l5e;
export { B4e, FT, G4e, NF, Ni, V4e, Xa, Z, ga, i5e, i6, l5e, n6, nd, o5e, op, r6, rd, rn, s6, t6, w0, xT };
var __wakaru_te_initialized = false;
export function te() {
if (__wakaru_te_initialized) return;
__wakaru_te_initialized = true;
"use strict";
h(), Ne(), Ka(), se(), Qa(), j(), mr(), oe(), Ft(), Ze(), ye(), ZF(), ne(), Z = Q("logService"), rd = Q("loggerService"), rn = ((e)=>(e[e.Off = 0] = "Off", e[e.Trace = 1] = "Trace", e[e.Debug = 2] = "Debug", e[e.Info = 3] = "Info", e[e.Warning = 4] = "Warning", e[e.Error = 5] = "Error", e))(rn || {}), op = 3, xT = class extends J {
    constructor(){
        super(...arguments), this.level = op, this._onDidChangeLogLevel = this._register(new N), this.onDidChangeLogLevel = this._onDidChangeLogLevel.event;
    }
    get isDisposed() {
        return this._store.isDisposed;
    }
    setLevel(e) {
        this.level !== e && (this.level = e, this._onDidChangeLogLevel.fire(this.level));
    }
    getLevel() {
        return this.level;
    }
    checkLogLevel(e) {
        return i5e(this.level, e);
    }
    canLog(e) {
        return this._store.isDisposed ? !1 : this.checkLogLevel(e);
    }
}, FT = class extends xT {
    constructor(e){
        super(), this.logAlways = e;
    }
    checkLogLevel(e) {
        return this.logAlways || super.checkLogLevel(e);
    }
    trace(e, ...t) {
        this.canLog(1) && this.log(1, nd([
            e,
            ...t
        ], !0));
    }
    debug(e, ...t) {
        this.canLog(2) && this.log(2, nd([
            e,
            ...t
        ]));
    }
    info(e, ...t) {
        this.canLog(3) && this.log(3, nd([
            e,
            ...t
        ]));
    }
    warn(e, ...t) {
        this.canLog(4) && this.log(4, nd([
            e,
            ...t
        ]));
    }
    error(e, ...t) {
        if (this.canLog(5)) if (e instanceof Error) {
            const n = Array.prototype.slice.call(arguments);
            n[0] = e.stack, this.log(5, nd(n));
        } else this.log(5, nd([
            e,
            ...t
        ]));
    }
    flush() {}
}, t6 = class extends xT {
    constructor(e = op){
        super(), this.setLevel(e), this.useColors = !ee;
    }
    trace(e, ...t) {
        this.canLog(1) && (this.useColors ? console.log(`\x1B[90m[main ${Ni()}]\x1B[0m`, e, ...t) : console.log(`[main ${Ni()}]`, e, ...t));
    }
    debug(e, ...t) {
        this.canLog(2) && (this.useColors ? console.log(`\x1B[90m[main ${Ni()}]\x1B[0m`, e, ...t) : console.log(`[main ${Ni()}]`, e, ...t));
    }
    info(e, ...t) {
        this.canLog(3) && (this.useColors ? console.log(`\x1B[90m[main ${Ni()}]\x1B[0m`, e, ...t) : console.log(`[main ${Ni()}]`, e, ...t));
    }
    warn(e, ...t) {
        this.canLog(4) && (this.useColors ? console.warn(`\x1B[93m[main ${Ni()}]\x1B[0m`, e, ...t) : console.warn(`[main ${Ni()}]`, e, ...t));
    }
    error(e, ...t) {
        this.canLog(5) && (this.useColors ? console.error(`\x1B[91m[main ${Ni()}]\x1B[0m`, e, ...t) : console.error(`[main ${Ni()}]`, e, ...t));
    }
    flush() {}
}, n6 = class extends xT {
    constructor(e){
        super(), this.loggers = e, e.length && this.setLevel(e[0].getLevel());
    }
    setLevel(e) {
        for (const t of this.loggers)t.setLevel(e);
        super.setLevel(e);
    }
    trace(e, ...t) {
        for (const n of this.loggers)n.trace(e, ...t);
    }
    debug(e, ...t) {
        for (const n of this.loggers)n.debug(e, ...t);
    }
    info(e, ...t) {
        for (const n of this.loggers)n.info(e, ...t);
    }
    warn(e, ...t) {
        for (const n of this.loggers)n.warn(e, ...t);
    }
    error(e, ...t) {
        for (const n of this.loggers)n.error(e, ...t);
    }
    flush() {
        for (const e of this.loggers)e.flush();
    }
    dispose() {
        for (const e of this.loggers)e.dispose();
        super.dispose();
    }
}, r6 = class extends J {
    constructor(e, t, n){
        if (super(), this.logLevel = e, this.logsHome = t, this._loggers = new Yn, this._onDidChangeLoggers = this._register(new N), this.onDidChangeLoggers = this._onDidChangeLoggers.event, this._onDidChangeLogLevel = this._register(new N), this.onDidChangeLogLevel = this._onDidChangeLogLevel.event, this._onDidChangeVisibility = this._register(new N), this.onDidChangeVisibility = this._onDidChangeVisibility.event, n) for (const r of n)this._loggers.set(r.resource, {
            logger: void 0,
            info: r
        });
    }
    getLoggerEntry(e) {
        return Ln(e) ? [
            ...this._loggers.values()
        ].find((t)=>t.info.id === e) : this._loggers.get(e);
    }
    getLogger(e) {
        return this.getLoggerEntry(e)?.logger;
    }
    createLogger(e, t) {
        const n = this.toResource(e), r = Ln(e) ? e : t?.id ?? Xa(n.toString()).toString(16);
        let s = this._loggers.get(n)?.logger;
        const i = t?.logLevel === "always" ? 1 : t?.logLevel;
        s || (s = this.doCreateLogger(n, i ?? this.getLogLevel(n) ?? this.logLevel, {
            ...t,
            id: r
        }));
        const a = {
            logger: s,
            info: {
                resource: n,
                id: r,
                logLevel: i,
                name: t?.name,
                hidden: t?.hidden,
                group: t?.group,
                extensionId: t?.extensionId,
                workspaceId: t?.workspaceId,
                when: t?.when
            }
        };
        return this.registerLogger(a.info), this._loggers.set(n, a), s;
    }
    toResource(e) {
        return Ln(e) ? Ae(this.logsHome, `${e}.log`) : e;
    }
    setLogLevel(e, t) {
        if (x.isUri(e)) {
            const n = e, r = t, s = this._loggers.get(n);
            s && r !== s.info.logLevel && (s.info.logLevel = r === this.logLevel ? void 0 : r, s.logger?.setLevel(r), this._loggers.set(s.info.resource, s), this._onDidChangeLogLevel.fire([
                n,
                r
            ]));
        } else {
            this.logLevel = e;
            for (const [n, r] of this._loggers.entries())this._loggers.get(n)?.info.logLevel === void 0 && r.logger?.setLevel(this.logLevel);
            this._onDidChangeLogLevel.fire(this.logLevel);
        }
    }
    setVisibility(e, t) {
        const n = this.getLoggerEntry(e);
        n && t !== !n.info.hidden && (n.info.hidden = !t, this._loggers.set(n.info.resource, n), this._onDidChangeVisibility.fire([
            n.info.resource,
            t
        ]));
    }
    getLogLevel(e) {
        let t;
        return e && (t = this._loggers.get(e)?.info.logLevel), t ?? this.logLevel;
    }
    registerLogger(e) {
        const t = this._loggers.get(e.resource);
        t ? t.info.hidden !== e.hidden && this.setVisibility(e.resource, !e.hidden) : (this._loggers.set(e.resource, {
            info: e,
            logger: void 0
        }), this._onDidChangeLoggers.fire({
            added: [
                e
            ],
            removed: []
        }));
    }
    deregisterLogger(e) {
        const t = this.toResource(e), n = this._loggers.get(t);
        n && (n.logger && n.logger.dispose(), this._loggers.delete(t), this._onDidChangeLoggers.fire({
            added: [],
            removed: [
                n.info
            ]
        }));
    }
    *getRegisteredLoggers() {
        for (const e of this._loggers.values())yield e.info;
    }
    getRegisteredLogger(e) {
        return this._loggers.get(e)?.info;
    }
    dispose() {
        this._loggers.forEach((e)=>e.logger?.dispose()), this._loggers.clear(), super.dispose();
    }
}, s6 = class {
    constructor(){
        this._isDisposed = !1, this.onDidChangeLogLevel = new N().event;
    }
    get isDisposed() {
        return this._isDisposed;
    }
    setLevel(e) {}
    getLevel() {
        return 3;
    }
    trace(e, ...t) {}
    debug(e, ...t) {}
    info(e, ...t) {}
    warn(e, ...t) {}
    error(e, ...t) {}
    critical(e, ...t) {}
    dispose() {
        this._isDisposed = !0;
    }
    flush() {}
}, i6 = class extends s6 {
    get vscodeService() {
        return this;
    }
}, l5e = new x0("logLevel", o5e(3));

}
