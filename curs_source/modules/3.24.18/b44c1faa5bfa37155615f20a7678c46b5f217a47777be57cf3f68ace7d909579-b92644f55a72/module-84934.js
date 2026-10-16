"use strict";
function n() {
    return {
        get (e) {
            return e.id in this ? this[e.id] : e.defaultValue;
        },
        set (e, t) {
            return this[e.id] = t, this;
        },
        delete (e) {
            return delete this[e.id], this;
        }
    };
}
function s(e, t) {
    return {
        id: Symbol(null == t ? void 0 : t.description),
        defaultValue: e
    };
}
require.d(exports, {
    k: ()=>n,
    n: ()=>s
});
