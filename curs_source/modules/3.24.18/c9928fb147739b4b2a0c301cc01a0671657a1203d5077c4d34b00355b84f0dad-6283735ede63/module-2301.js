Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.TestTools = exports.Immediate = void 0;
let n, s = 1;
const o = {};
function r(e) {
    return e in o && (delete o[e], !0);
}
exports.Immediate = {
    setImmediate (e) {
        const a = s++;
        return o[a] = !0, n || (n = Promise.resolve()), n.then(()=>r(a) && e()), a;
    },
    clearImmediate (e) {
        r(e);
    }
}, exports.TestTools = {
    pending: ()=>Object.keys(o).length
};
