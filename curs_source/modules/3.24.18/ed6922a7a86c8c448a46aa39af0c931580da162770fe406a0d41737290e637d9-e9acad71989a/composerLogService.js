import { Ct, S, Se, bt, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { nf, sv } from "./environment.js";
import { Pn } from "./extensions.js";
import { Ze } from "./instantiation.js";
import { Dh, Qn, h1 } from "./log.js";
import { rt } from "./nls.js";
import { mn, vn } from "./qIc.js";
import { Li, jr } from "./resources.js";
import { x } from "./tslib.es6.js";
import { Jn, ci } from "./workspace.js";
var lb, q8i;
export { lb, q8i };
var __wakaru_n0_initialized = false;
export function n0() {
if (__wakaru_n0_initialized) return;
__wakaru_n0_initialized = true;
"use strict";
x(), bt(), Se(), Li(), rt(), nf(), Pn(), Ze(), Qn(), ci(), lb = vn("composerLogService"), q8i = class extends we {
    constructor(e, t, n){
        super(), this._loggerService = e, this._logger = this._loggerService.createLogger(jr(n.logsHome, "composer.log"), {
            id: "composer",
            name: S(5257, null)
        }), this._register(Ct.runAndSubscribe(t.onDidChangeWorkspaceFolders, ()=>{
            this._workspaceId = t.getWorkspace().id.substring(0, 7);
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
    setLevel(e) {
        this._logger.setLevel(e);
    }
    flush() {
        this._logger.flush();
    }
    trace(e, ...t) {
        this._logger.trace(this._formatMessage(e), t);
    }
    debug(e, ...t) {
        this._logger.debug(this._formatMessage(e), t);
    }
    info(e, ...t) {
        this._logger.info(this._formatMessage(e), t);
    }
    warn(e, ...t) {
        this._logger.warn(this._formatMessage(e), t);
    }
    error(e, ...t) {
        if (e instanceof Error) {
            this._logger.error(this._formatMessage(""), e, t);
            return;
        }
        this._logger.error(this._formatMessage(e), t);
    }
    _formatMessage(e) {
        return this._logger.getLevel() === Dh.Trace ? `[${this._workspaceId}] ${e}` : e;
    }
}, q8i = ie([
    C(0, h1),
    C(1, Jn),
    C(2, sv)
], q8i), mn(lb, q8i, 1);

}
