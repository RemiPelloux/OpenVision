import { Se, Xr, bt, jn, ve, we } from "./HVr.js";
import { At, dn } from "./contextkey.js";
import { GS } from "./errorMessage.js";
import { T_ } from "./hash.js";
import { Ze } from "./instantiation.js";
import { Mc, oc } from "./map.js";
import { rt } from "./nls.js";
import { Bg, Rge, XYr, cC, v2t, vn } from "./qIc.js";
import { Li, jr } from "./resources.js";
import { x } from "./tslib.es6.js";
import { gr } from "./types_2.js";
import { Ee, Qt } from "./uri.js";
var Wn, h1, Dh, Gmn, _2t, QYr, TMc, EMc, xMc, IMc, JYr, AMc, RMc;
export { AMc, Dh, EMc, Gmn, IMc, JYr, QYr, RMc, TMc, Wn, _2t, h1, xMc };
var __wakaru_Qn_initialized = false;
export function Qn() {
if (__wakaru_Qn_initialized) return;
__wakaru_Qn_initialized = true;
"use strict";
x(), rt(), GS(), bt(), T_(), Se(), oc(), jn(), Li(), gr(), Qt(), dn(), Ze(), Wn = vn("logService"), h1 = vn("loggerService"), Dh = ((e)=>(e[e.Off = 0] = "Off", e[e.Trace = 1] = "Trace", e[e.Debug = 2] = "Debug", e[e.Info = 3] = "Info", e[e.Warning = 4] = "Warning", e[e.Error = 5] = "Error", e))(Dh || {}), Gmn = 3, _2t = class extends we {
    constructor(){
        super(...arguments), this.level = Gmn, this._onDidChangeLogLevel = this._register(new ve), this.onDidChangeLogLevel = this._onDidChangeLogLevel.event;
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
        return XYr(this.level, e);
    }
    canLog(e) {
        return this._store.isDisposed ? !1 : this.checkLogLevel(e);
    }
}, QYr = class extends _2t {
    constructor(e){
        super(), this.logAlways = e;
    }
    checkLogLevel(e) {
        return this.logAlways || super.checkLogLevel(e);
    }
    trace(e, ...t) {
        this.canLog(1) && this.log(1, v2t([
            e,
            ...t
        ], !0));
    }
    debug(e, ...t) {
        this.canLog(2) && this.log(2, v2t([
            e,
            ...t
        ]));
    }
    info(e, ...t) {
        this.canLog(3) && this.log(3, v2t([
            e,
            ...t
        ]));
    }
    warn(e, ...t) {
        this.canLog(4) && this.log(4, v2t([
            e,
            ...t
        ]));
    }
    error(e, ...t) {
        if (this.canLog(5)) if (e instanceof Error) {
            const n = Array.prototype.slice.call(arguments);
            n[0] = e.stack, this.log(5, v2t(n));
        } else this.log(5, v2t([
            e,
            ...t
        ]));
    }
    flush() {}
}, TMc = class extends _2t {
    constructor(e = Gmn, t = !0){
        super(), this.useColors = t, this.setLevel(e);
    }
    trace(e, ...t) {
        this.canLog(1) && (this.useColors ? console.log("%cTRACE", "color: #888", e, ...t) : console.log(e, ...t));
    }
    debug(e, ...t) {
        this.canLog(2) && (this.useColors ? console.log("%cDEBUG", "background: #eee; color: #888", e, ...t) : console.log(e, ...t));
    }
    info(e, ...t) {
        this.canLog(3) && (this.useColors ? console.log("%c INFO", "color: #33f", e, ...t) : console.log(e, ...t));
    }
    warn(e, ...t) {
        this.canLog(4) && (this.useColors ? console.warn("%c WARN", "color: #993", e, ...t) : console.log(e, ...t));
    }
    error(e, ...t) {
        this.canLog(5) && (this.useColors ? console.error("%c  ERR", "color: #f33", e, ...t) : console.error(e, ...t));
    }
    flush() {}
}, EMc = class extends _2t {
    constructor(e, t = Gmn){
        super(), this.adapter = e, this.setLevel(t);
    }
    trace(e, ...t) {
        this.canLog(1) && this.adapter.log(1, [
            this.extractMessage(e),
            ...t
        ]);
    }
    debug(e, ...t) {
        this.canLog(2) && this.adapter.log(2, [
            this.extractMessage(e),
            ...t
        ]);
    }
    info(e, ...t) {
        this.canLog(3) && this.adapter.log(3, [
            this.extractMessage(e),
            ...t
        ]);
    }
    warn(e, ...t) {
        this.canLog(4) && this.adapter.log(4, [
            this.extractMessage(e),
            ...t
        ]);
    }
    error(e, ...t) {
        this.canLog(5) && this.adapter.log(5, [
            this.extractMessage(e),
            ...t
        ]);
    }
    extractMessage(e) {
        return typeof e == "string" ? e : Bg(e, this.canLog(1));
    }
    flush() {}
}, xMc = class extends _2t {
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
}, IMc = class extends we {
    constructor(e, t, n){
        if (super(), this.logLevel = e, this.logsHome = t, this._loggers = new Mc, this._onDidChangeLoggers = this._register(new ve), this.onDidChangeLoggers = this._onDidChangeLoggers.event, this._onDidChangeLogLevel = this._register(new ve), this.onDidChangeLogLevel = this._onDidChangeLogLevel.event, this._onDidChangeVisibility = this._register(new ve), this.onDidChangeVisibility = this._onDidChangeVisibility.event, n) for (const i of n)this._loggers.set(i.resource, {
            logger: void 0,
            info: i
        });
    }
    getLoggerEntry(e) {
        return Xr(e) ? [
            ...this._loggers.values()
        ].find((t)=>t.info.id === e) : this._loggers.get(e);
    }
    getLogger(e) {
        return this.getLoggerEntry(e)?.logger;
    }
    createLogger(e, t) {
        const n = this.toResource(e), i = Xr(e) ? e : t?.id ?? cC(n.toString()).toString(16);
        let r = this._loggers.get(n)?.logger;
        const s = t?.logLevel === "always" ? 1 : t?.logLevel;
        r || (r = this.doCreateLogger(n, s ?? this.getLogLevel(n) ?? this.logLevel, {
            ...t,
            id: i
        }));
        const o = {
            logger: r,
            info: {
                resource: n,
                id: i,
                logLevel: s,
                name: t?.name,
                hidden: t?.hidden,
                group: t?.group,
                extensionId: t?.extensionId,
                workspaceId: t?.workspaceId,
                when: t?.when
            }
        };
        return this.registerLogger(o.info), this._loggers.set(n, o), r;
    }
    toResource(e) {
        return Xr(e) ? jr(this.logsHome, `${e}.log`) : e;
    }
    setLogLevel(e, t) {
        if (Ee.isUri(e)) {
            const n = e, i = t, r = this._loggers.get(n);
            r && i !== r.info.logLevel && (r.info.logLevel = i === this.logLevel ? void 0 : i, r.logger?.setLevel(i), this._loggers.set(r.info.resource, r), this._onDidChangeLogLevel.fire([
                n,
                i
            ]));
        } else {
            this.logLevel = e;
            for (const [n, i] of this._loggers.entries())this._loggers.get(n)?.info.logLevel === void 0 && i.logger?.setLevel(this.logLevel);
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
}, JYr = class {
    constructor(){
        this._isDisposed = !1, this.onDidChangeLogLevel = new ve().event;
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
}, AMc = class extends JYr {
    get vscodeService() {
        return this;
    }
}, RMc = new At("logLevel", Rge(3));

}
