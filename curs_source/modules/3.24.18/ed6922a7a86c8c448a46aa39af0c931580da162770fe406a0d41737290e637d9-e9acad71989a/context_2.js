import { Dgv } from "./NoopContextManager.js";
import { M$t } from "./diag.js";
import { D$t } from "./global-utils.js";
import { x } from "./tslib.es6.js";
var __wakaru_I8i_cache;
export function I8i() {
if (__wakaru_I8i_cache) return __wakaru_I8i_cache;
var e = {};
__wakaru_I8i_cache = e;
"use strict";
x(), Object.defineProperty(e, "__esModule", {
    value: !0
}), e.ContextAPI = void 0;
var t = Dgv(), n = D$t(), i = M$t(), r = "context", s = new t.NoopContextManager, o = class pCm {
    constructor(){}
    static getInstance() {
        return this._instance || (this._instance = new pCm), this._instance;
    }
    setGlobalContextManager(c) {
        return (0, n.registerGlobal)(r, c, i.DiagAPI.instance());
    }
    active() {
        return this._getContextManager().active();
    }
    with(c, l, u, ...h) {
        return this._getContextManager().with(c, l, u, ...h);
    }
    bind(c, l) {
        return this._getContextManager().bind(c, l);
    }
    _getContextManager() {
        return (0, n.getGlobal)(r) || s;
    }
    disable() {
        this._getContextManager().disable(), (0, n.unregisterGlobal)(r, i.DiagAPI.instance());
    }
};
e.ContextAPI = o;

return e;
}
