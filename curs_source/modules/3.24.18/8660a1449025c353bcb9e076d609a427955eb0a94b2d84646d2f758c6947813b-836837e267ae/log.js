import { Di, Gt, Qe, Yo, st, tt } from "./Iwo.js";
import { DTo, Hdn, jn, nv, oAe, tR } from "./SZu.js";
import { Hi, cn } from "./contextkey.js";
import { tT } from "./errorMessage.js";
import { Xy } from "./hash.js";
import { It } from "./instantiation.js";
import { du, gd } from "./map.js";
import { Bt } from "./nls.js";
import { Lr, Os } from "./resources.js";
import { E } from "./tslib.es6.js";
import { To } from "./types_2.js";
import { fn, rt } from "./uri.js";
var Li, pA, sg, EZn, Wdn, LTo, wQu, CQu, TQu, EQu, OTo, IQu, xQu;
export { CQu, EQu, EZn, IQu, LTo, Li, OTo, TQu, Wdn, pA, sg, wQu, xQu };
var __wakaru_Ji_initialized = false;
export function Ji() {
if (__wakaru_Ji_initialized) return;
__wakaru_Ji_initialized = true;
"use strict";
E(), Bt(), tT(), Gt(), Xy(), Qe(), du(), Di(), Lr(), To(), fn(), Hi(), It(), Li = jn("logService"), pA = jn("loggerService"), sg = ((t)=>(t[t.Off = 0] = "Off", t[t.Trace = 1] = "Trace", t[t.Debug = 2] = "Debug", t[t.Info = 3] = "Info", t[t.Warning = 4] = "Warning", t[t.Error = 5] = "Error", t))(sg || {}), EZn = 3, Wdn = class extends st {
    constructor(){
        super(...arguments), this.level = EZn, this._onDidChangeLogLevel = this._register(new tt), this.onDidChangeLogLevel = this._onDidChangeLogLevel.event;
    }
    get isDisposed() {
        return this._store.isDisposed;
    }
    setLevel(t) {
        this.level !== t && (this.level = t, this._onDidChangeLogLevel.fire(this.level));
    }
    getLevel() {
        return this.level;
    }
    checkLogLevel(t) {
        return DTo(this.level, t);
    }
    canLog(t) {
        return this._store.isDisposed ? !1 : this.checkLogLevel(t);
    }
}, LTo = class extends Wdn {
    constructor(t){
        super(), this.logAlways = t;
    }
    checkLogLevel(t) {
        return this.logAlways || super.checkLogLevel(t);
    }
    trace(t, ...e) {
        this.canLog(1) && this.log(1, Hdn([
            t,
            ...e
        ], !0));
    }
    debug(t, ...e) {
        this.canLog(2) && this.log(2, Hdn([
            t,
            ...e
        ]));
    }
    info(t, ...e) {
        this.canLog(3) && this.log(3, Hdn([
            t,
            ...e
        ]));
    }
    warn(t, ...e) {
        this.canLog(4) && this.log(4, Hdn([
            t,
            ...e
        ]));
    }
    error(t, ...e) {
        if (this.canLog(5)) if (t instanceof Error) {
            const n = Array.prototype.slice.call(arguments);
            n[0] = t.stack, this.log(5, Hdn(n));
        } else this.log(5, Hdn([
            t,
            ...e
        ]));
    }
    flush() {}
}, wQu = class extends Wdn {
    constructor(t = EZn, e = !0){
        super(), this.useColors = e, this.setLevel(t);
    }
    trace(t, ...e) {
        this.canLog(1) && (this.useColors ? console.log("%cTRACE", "color: #888", t, ...e) : console.log(t, ...e));
    }
    debug(t, ...e) {
        this.canLog(2) && (this.useColors ? console.log("%cDEBUG", "background: #eee; color: #888", t, ...e) : console.log(t, ...e));
    }
    info(t, ...e) {
        this.canLog(3) && (this.useColors ? console.log("%c INFO", "color: #33f", t, ...e) : console.log(t, ...e));
    }
    warn(t, ...e) {
        this.canLog(4) && (this.useColors ? console.warn("%c WARN", "color: #993", t, ...e) : console.log(t, ...e));
    }
    error(t, ...e) {
        this.canLog(5) && (this.useColors ? console.error("%c  ERR", "color: #f33", t, ...e) : console.error(t, ...e));
    }
    flush() {}
}, CQu = class extends Wdn {
    constructor(t, e = EZn){
        super(), this.adapter = t, this.setLevel(e);
    }
    trace(t, ...e) {
        this.canLog(1) && this.adapter.log(1, [
            this.extractMessage(t),
            ...e
        ]);
    }
    debug(t, ...e) {
        this.canLog(2) && this.adapter.log(2, [
            this.extractMessage(t),
            ...e
        ]);
    }
    info(t, ...e) {
        this.canLog(3) && this.adapter.log(3, [
            this.extractMessage(t),
            ...e
        ]);
    }
    warn(t, ...e) {
        this.canLog(4) && this.adapter.log(4, [
            this.extractMessage(t),
            ...e
        ]);
    }
    error(t, ...e) {
        this.canLog(5) && this.adapter.log(5, [
            this.extractMessage(t),
            ...e
        ]);
    }
    extractMessage(t) {
        return typeof t == "string" ? t : nv(t, this.canLog(1));
    }
    flush() {}
}, TQu = class extends Wdn {
    constructor(t){
        super(), this.loggers = t, t.length && this.setLevel(t[0].getLevel());
    }
    setLevel(t) {
        for (const e of this.loggers)e.setLevel(t);
        super.setLevel(t);
    }
    trace(t, ...e) {
        for (const n of this.loggers)n.trace(t, ...e);
    }
    debug(t, ...e) {
        for (const n of this.loggers)n.debug(t, ...e);
    }
    info(t, ...e) {
        for (const n of this.loggers)n.info(t, ...e);
    }
    warn(t, ...e) {
        for (const n of this.loggers)n.warn(t, ...e);
    }
    error(t, ...e) {
        for (const n of this.loggers)n.error(t, ...e);
    }
    flush() {
        for (const t of this.loggers)t.flush();
    }
    dispose() {
        for (const t of this.loggers)t.dispose();
        super.dispose();
    }
}, EQu = class extends st {
    constructor(t, e, n){
        if (super(), this.logLevel = t, this.logsHome = e, this._loggers = new gd, this._onDidChangeLoggers = this._register(new tt), this.onDidChangeLoggers = this._onDidChangeLoggers.event, this._onDidChangeLogLevel = this._register(new tt), this.onDidChangeLogLevel = this._onDidChangeLogLevel.event, this._onDidChangeVisibility = this._register(new tt), this.onDidChangeVisibility = this._onDidChangeVisibility.event, n) for (const i of n)this._loggers.set(i.resource, {
            logger: void 0,
            info: i
        });
    }
    getLoggerEntry(t) {
        return Yo(t) ? [
            ...this._loggers.values()
        ].find((e)=>e.info.id === t) : this._loggers.get(t);
    }
    getLogger(t) {
        return this.getLoggerEntry(t)?.logger;
    }
    createLogger(t, e) {
        const n = this.toResource(t), i = Yo(t) ? t : e?.id ?? tR(n.toString()).toString(16);
        let r = this._loggers.get(n)?.logger;
        const s = e?.logLevel === "always" ? 1 : e?.logLevel;
        r || (r = this.doCreateLogger(n, s ?? this.getLogLevel(n) ?? this.logLevel, {
            ...e,
            id: i
        }));
        const o = {
            logger: r,
            info: {
                resource: n,
                id: i,
                logLevel: s,
                name: e?.name,
                hidden: e?.hidden,
                group: e?.group,
                extensionId: e?.extensionId,
                workspaceId: e?.workspaceId,
                when: e?.when
            }
        };
        return this.registerLogger(o.info), this._loggers.set(n, o), r;
    }
    toResource(t) {
        return Yo(t) ? Os(this.logsHome, `${t}.log`) : t;
    }
    setLogLevel(t, e) {
        if (rt.isUri(t)) {
            const n = t, i = e, r = this._loggers.get(n);
            r && i !== r.info.logLevel && (r.info.logLevel = i === this.logLevel ? void 0 : i, r.logger?.setLevel(i), this._loggers.set(r.info.resource, r), this._onDidChangeLogLevel.fire([
                n,
                i
            ]));
        } else {
            this.logLevel = t;
            for (const [n, i] of this._loggers.entries())this._loggers.get(n)?.info.logLevel === void 0 && i.logger?.setLevel(this.logLevel);
            this._onDidChangeLogLevel.fire(this.logLevel);
        }
    }
    setVisibility(t, e) {
        const n = this.getLoggerEntry(t);
        n && e !== !n.info.hidden && (n.info.hidden = !e, this._loggers.set(n.info.resource, n), this._onDidChangeVisibility.fire([
            n.info.resource,
            e
        ]));
    }
    getLogLevel(t) {
        let e;
        return t && (e = this._loggers.get(t)?.info.logLevel), e ?? this.logLevel;
    }
    registerLogger(t) {
        const e = this._loggers.get(t.resource);
        e ? e.info.hidden !== t.hidden && this.setVisibility(t.resource, !t.hidden) : (this._loggers.set(t.resource, {
            info: t,
            logger: void 0
        }), this._onDidChangeLoggers.fire({
            added: [
                t
            ],
            removed: []
        }));
    }
    deregisterLogger(t) {
        const e = this.toResource(t), n = this._loggers.get(e);
        n && (n.logger && n.logger.dispose(), this._loggers.delete(e), this._onDidChangeLoggers.fire({
            added: [],
            removed: [
                n.info
            ]
        }));
    }
    *getRegisteredLoggers() {
        for (const t of this._loggers.values())yield t.info;
    }
    getRegisteredLogger(t) {
        return this._loggers.get(t)?.info;
    }
    dispose() {
        this._loggers.forEach((t)=>t.logger?.dispose()), this._loggers.clear(), super.dispose();
    }
}, OTo = class {
    constructor(){
        this._isDisposed = !1, this.onDidChangeLogLevel = new tt().event;
    }
    get isDisposed() {
        return this._isDisposed;
    }
    setLevel(t) {}
    getLevel() {
        return 3;
    }
    trace(t, ...e) {}
    debug(t, ...e) {}
    info(t, ...e) {}
    warn(t, ...e) {}
    error(t, ...e) {}
    critical(t, ...e) {}
    dispose() {
        this._isDisposed = !0;
    }
    flush() {}
}, IQu = class extends OTo {
    get vscodeService() {
        return this;
    }
}, xQu = new cn("logLevel", oAe(3));

}
