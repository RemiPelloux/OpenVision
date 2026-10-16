"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.TestTools = exports.Immediate = void 0;
let r, n = 1;
const o = {};
function s(e) {
    return e in o && (delete o[e], !0);
}
exports.Immediate = {
    setImmediate (e) {
        const t = n++;
        return o[t] = !0, r || (r = Promise.resolve()), r.then(()=>s(t) && e()), t;
    },
    clearImmediate (e) {
        s(e);
    }
}, exports.TestTools = {
    pending: ()=>Object.keys(o).length
};
