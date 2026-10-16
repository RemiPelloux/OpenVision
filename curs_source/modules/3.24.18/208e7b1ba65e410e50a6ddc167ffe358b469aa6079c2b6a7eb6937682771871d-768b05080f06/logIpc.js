import { J, j } from "./lifecycle.js";
import { rn, te } from "./log.js";
import { e6 } from "./loggerService_2.js";
import { Yn, mr } from "./map.js";
import { h } from "./tslib.es6.js";
import { x, ye } from "./uri.js";
function F0(e, t, n) {
    switch(t){
        case 1:
            e.trace(n);
            break;
        case 2:
            e.debug(n);
            break;
        case 3:
            e.info(n);
            break;
        case 4:
            e.warn(n);
            break;
        case 5:
            e.error(n);
            break;
        case 0:
            break;
        default:
            throw new Error(`Invalid log level ${t}`);
    }
}
var m_e;
export { F0, m_e };
var __wakaru_set_initialized = false;
export function set() {
if (__wakaru_set_initialized) return;
__wakaru_set_initialized = true;
"use strict";
h(), j(), mr(), ye(), te(), m_e = class extends J {
    constructor(e){
        super(), this.loggerService = e, this.loggers = new Yn, this._register(this.loggerService.onDidChangeLoggers(({ removed: t })=>{
            for (const n of t)this.loggers.delete(n.resource);
        }));
    }
    listen(e, t, n) {
        switch(t){
            case "onDidChangeLoggers":
                return n ? this.loggerService.getOnDidChangeLoggersEvent(n) : this.loggerService.onDidChangeLoggers;
            case "onDidChangeLogLevel":
                return n ? this.loggerService.getOnDidChangeLogLevelEvent(n) : this.loggerService.onDidChangeLogLevel;
            case "onDidChangeVisibility":
                return n ? this.loggerService.getOnDidChangeVisibilityEvent(n) : this.loggerService.onDidChangeVisibility;
        }
        throw new Error(`Event not found: ${t}`);
    }
    async call(e, t, n) {
        switch(t){
            case "createLogger":
                this.createLogger(x.revive(n[0]), n[1], n[2]);
                return;
            case "log":
                return this.log(x.revive(n[0]), n[1]);
            case "consoleLog":
                return this.consoleLog(n[0], n[1]);
            case "setLogLevel":
                return e6(n[0]) ? this.loggerService.setLogLevel(n[0]) : this.loggerService.setLogLevel(x.revive(n[0]), n[1]);
            case "setVisibility":
                return this.loggerService.setVisibility(x.revive(n[0]), n[1]);
            case "registerLogger":
                return this.loggerService.registerLogger({
                    ...n[0],
                    resource: x.revive(n[0].resource)
                }, n[1]);
            case "deregisterLogger":
                return this.loggerService.deregisterLogger(x.revive(n[0]));
        }
        throw new Error(`Call not found: ${t}`);
    }
    createLogger(e, t, n) {
        this.loggers.set(e, this.loggerService.createLogger(e, t, n));
    }
    consoleLog(e, t) {
        let n = console.log;
        switch(e){
            case rn.Error:
                n = console.error;
                break;
            case rn.Warning:
                n = console.warn;
                break;
            case rn.Info:
                n = console.info;
                break;
        }
        n.call(console, ...t);
    }
    log(e, t) {
        const n = this.loggers.get(e);
        if (n) for (const [r, s] of t)F0(n, r, s);
    }
};

}
