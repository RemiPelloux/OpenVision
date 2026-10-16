import { wi } from "./errors.js";
import { Ho } from "./global.js";
import { On } from "./spanCollector.js";
import { gs } from "./storageMain.js";
import { Cs } from "./storage_3.js";
import { Uhe } from "./tracing_2.js";
import { h } from "./tslib.es6.js";
function Mhe(e, t) {
    Cs(e) || wi.isErrorNoTelemetry(e) || gs(e, t);
}
var A9e;
export { A9e, Mhe };
var __wakaru_Glt_initialized = false;
export function Glt() {
if (__wakaru_Glt_initialized) return;
__wakaru_Glt_initialized = true;
"use strict";
h(), Ho(), Uhe(), A9e = class {
    constructor(e){
        this.baseLogger = e, this.onDidChangeLogLevel = this.baseLogger.onDidChangeLogLevel;
    }
    get isDisposed() {
        return this.baseLogger.isDisposed;
    }
    getLevel() {
        return this.baseLogger.getLevel();
    }
    setLevel(e) {
        this.baseLogger.setLevel(e);
    }
    trace(e, ...t) {
        this.baseLogger.trace(e, ...t);
    }
    debug(e, ...t) {
        this.baseLogger.debug(e, ...t);
    }
    info(e, ...t) {
        this.baseLogger.info(e, ...t);
    }
    warn(e, ...t) {
        this.baseLogger.warn(e, ...t);
    }
    error(e, ...t) {
        if (this.baseLogger.error(e, ...t), !(On().enabled && Math.random() >= On().loggerSampleRate)) {
            if (e instanceof Error) {
                Mhe(e);
                return;
            }
            for (const n of t)if (n instanceof Error) {
                Mhe(n);
                return;
            }
        }
    }
    flush() {
        this.baseLogger.flush();
    }
    dispose() {
        this.baseLogger.dispose();
    }
};

}
