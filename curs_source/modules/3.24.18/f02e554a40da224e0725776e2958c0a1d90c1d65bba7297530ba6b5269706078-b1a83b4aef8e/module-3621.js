"use strict";
function n() {
    return {
        get (t) {
            return t.id in this ? this[t.id] : t.defaultValue;
        },
        set (t, e) {
            return this[t.id] = e, this;
        },
        delete (t) {
            return delete this[t.id], this;
        }
    };
}
function s(t, e) {
    return {
        id: Symbol(null == e ? void 0 : e.description),
        defaultValue: t
    };
}
require.d(exports, {
    k: ()=>n,
    n: ()=>s
});
