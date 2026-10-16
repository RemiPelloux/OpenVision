"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.TestTools = exports.Immediate = void 0;
let r, n = 1;
const s = {};
function o(e) {
    return e in s && (delete s[e], !0);
}
exports.Immediate = {
    setImmediate (e) {
        const t = n++;
        return s[t] = !0, r || (r = Promise.resolve()), r.then(()=>o(t) && e()), t;
    },
    clearImmediate (e) {
        o(e);
    }
}, exports.TestTools = {
    pending: ()=>Object.keys(s).length
};
