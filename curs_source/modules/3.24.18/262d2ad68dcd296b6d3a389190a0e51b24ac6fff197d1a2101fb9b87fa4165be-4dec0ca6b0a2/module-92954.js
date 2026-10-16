"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.ROOT_CONTEXT = exports.createContextKey = void 0, exports.createContextKey = function(e) {
    return Symbol.for(e);
};
class r {
    constructor(e){
        const t = this;
        t._currentContext = e ? new Map(e) : new Map, t.getValue = (e)=>t._currentContext.get(e), t.setValue = (e, n)=>{
            const o = new r(t._currentContext);
            return o._currentContext.set(e, n), o;
        }, t.deleteValue = (e)=>{
            const n = new r(t._currentContext);
            return n._currentContext.delete(e), n;
        };
    }
}
exports.ROOT_CONTEXT = new r;
