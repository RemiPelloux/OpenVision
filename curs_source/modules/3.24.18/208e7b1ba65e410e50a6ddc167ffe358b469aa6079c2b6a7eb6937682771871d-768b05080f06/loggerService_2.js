import { O, se } from "./event.js";
import { Uv } from "./files.js";
import { ne } from "./instantiation.js";
import { rd, te } from "./log.js";
import { Ipe, lYe } from "./loggerService.js";
import { Yn, mr } from "./map.js";
import { h } from "./tslib.es6.js";
function e6(e) {
    return Uv(e);
}
var Aa, Ape;
export { Aa, Ape, e6 };
var __wakaru_Ro_initialized = false;
export function Ro() {
if (__wakaru_Ro_initialized) return;
__wakaru_Ro_initialized = true;
"use strict";
h(), mr(), se(), ne(), te(), lYe(), Aa = rd, Ape = class extends Ipe {
    constructor(){
        super(...arguments), this.loggerResourcesByWindow = new Yn;
    }
    createLogger(e, t, n) {
        n !== void 0 && this.loggerResourcesByWindow.set(this.toResource(e), n);
        try {
            return super.createLogger(e, t);
        } catch (r) {
            throw this.loggerResourcesByWindow.delete(this.toResource(e)), r;
        }
    }
    registerLogger(e, t) {
        t !== void 0 && this.loggerResourcesByWindow.set(e.resource, t), super.registerLogger(e);
    }
    deregisterLogger(e) {
        this.loggerResourcesByWindow.delete(e), super.deregisterLogger(e);
    }
    getGlobalLoggers() {
        const e = [];
        for (const t of super.getRegisteredLoggers())this.loggerResourcesByWindow.has(t.resource) || e.push(t);
        return e;
    }
    getOnDidChangeLogLevelEvent(e) {
        return O.filter(this.onDidChangeLogLevel, (t)=>e6(t) || this.isInterestedLoggerResource(t[0], e));
    }
    getOnDidChangeVisibilityEvent(e) {
        return O.filter(this.onDidChangeVisibility, ([t])=>this.isInterestedLoggerResource(t, e));
    }
    getOnDidChangeLoggersEvent(e) {
        return O.filter(O.map(this.onDidChangeLoggers, (t)=>({
                added: [
                    ...t.added
                ].filter((r)=>this.isInterestedLoggerResource(r.resource, e)),
                removed: [
                    ...t.removed
                ].filter((r)=>this.isInterestedLoggerResource(r.resource, e))
            })), (t)=>t.added.length > 0 || t.removed.length > 0);
    }
    deregisterLoggers(e) {
        for (const [t, n] of this.loggerResourcesByWindow)n === e && this.deregisterLogger(t);
    }
    isInterestedLoggerResource(e, t) {
        const n = this.loggerResourcesByWindow.get(e);
        return n === void 0 || n === t;
    }
    dispose() {
        super.dispose(), this.loggerResourcesByWindow.clear();
    }
};

}
