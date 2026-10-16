import { Z31 } from "./NoopContextManager.js";
import { BCn } from "./diag.js";
import { FCn } from "./global-utils.js";
import { E } from "./tslib.es6.js";
var __wakaru_Qqr_cache;
export function Qqr() {
if (__wakaru_Qqr_cache) return __wakaru_Qqr_cache;
var t = {};
__wakaru_Qqr_cache = t;
"use strict";
E(), Object.defineProperty(t, "__esModule", {
    value: !0
}), t.ContextAPI = void 0;
var e = Z31(), n = FCn(), i = BCn(), r = "context", s = new e.NoopContextManager, o = class Z2b {
    constructor(){}
    static getInstance() {
        return this._instance || (this._instance = new Z2b), this._instance;
    }
    setGlobalContextManager(l) {
        return (0, n.registerGlobal)(r, l, i.DiagAPI.instance());
    }
    active() {
        return this._getContextManager().active();
    }
    with(l, c, u, ...d) {
        return this._getContextManager().with(l, c, u, ...d);
    }
    bind(l, c) {
        return this._getContextManager().bind(l, c);
    }
    _getContextManager() {
        return (0, n.getGlobal)(r) || s;
    }
    disable() {
        this._getContextManager().disable(), (0, n.unregisterGlobal)(r, i.DiagAPI.instance());
    }
};
t.ContextAPI = o;

return t;
}
