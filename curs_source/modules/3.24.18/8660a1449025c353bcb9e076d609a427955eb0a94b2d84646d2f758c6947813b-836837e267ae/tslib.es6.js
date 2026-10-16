var t1o;
export { t1o };
var __wakaru_E_initialized = false;
export function E() {
if (__wakaru_E_initialized) return;
__wakaru_E_initialized = true;
t1o = Object.create ? (function(t, e, n, i) {
    i === void 0 && (i = n);
    var r = Object.getOwnPropertyDescriptor(e, n);
    (!r || ("get" in r ? !e.__esModule : r.writable || r.configurable)) && (r = {
        enumerable: !0,
        get: function() {
            return e[n];
        }
    }), Object.defineProperty(t, i, r);
}) : (function(t, e, n, i) {
    i === void 0 && (i = n), t[i] = e[n];
});

}
