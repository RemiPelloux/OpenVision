import { D, Gt, Qe, en, st } from "./Iwo.js";
import { bn, jn } from "./SZu.js";
import { cy, fb } from "./environment.js";
import { Rn } from "./extensions.js";
import { It } from "./instantiation.js";
import { Ji, pA, sg } from "./log.js";
import { Bt } from "./nls.js";
import { Lr, Os } from "./resources.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { Sr, yr } from "./workspace.js";
var w1, dzr;
export { dzr, w1 };
var __wakaru_iI_initialized = false;
export function iI() {
if (__wakaru_iI_initialized) return;
__wakaru_iI_initialized = true;
"use strict";
E(), Gt(), Qe(), Lr(), Bt(), fb(), Rn(), It(), Ji(), Sr(), w1 = jn("composerLogService"), dzr = class extends st {
    constructor(t, e, n){
        super(), this._loggerService = t, this._logger = this._loggerService.createLogger(Os(n.logsHome, "composer.log"), {
            id: "composer",
            name: D(5257, null)
        }), this._register(en.runAndSubscribe(e.onDidChangeWorkspaceFolders, ()=>{
            this._workspaceId = e.getWorkspace().id.substring(0, 7);
        }));
    }
    get onDidChangeLogLevel() {
        return this._logger.onDidChangeLogLevel;
    }
    get isDisposed() {
        return this._store.isDisposed;
    }
    getLevel() {
        return this._logger.getLevel();
    }
    setLevel(t) {
        this._logger.setLevel(t);
    }
    flush() {
        this._logger.flush();
    }
    trace(t, ...e) {
        this._logger.trace(this._formatMessage(t), e);
    }
    debug(t, ...e) {
        this._logger.debug(this._formatMessage(t), e);
    }
    info(t, ...e) {
        this._logger.info(this._formatMessage(t), e);
    }
    warn(t, ...e) {
        this._logger.warn(this._formatMessage(t), e);
    }
    error(t, ...e) {
        if (t instanceof Error) {
            this._logger.error(this._formatMessage(""), t, e);
            return;
        }
        this._logger.error(this._formatMessage(t), e);
    }
    _formatMessage(t) {
        return this._logger.getLevel() === sg.Trace ? `[${this._workspaceId}] ${t}` : t;
    }
}, dzr = Re([
    F(0, pA),
    F(1, yr),
    F(2, cy)
], dzr), bn(w1, dzr, 1);

}
