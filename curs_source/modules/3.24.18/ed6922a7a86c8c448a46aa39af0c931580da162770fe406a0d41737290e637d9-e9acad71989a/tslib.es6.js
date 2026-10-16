var gWr;
export { gWr };
var __wakaru_x_initialized = false;
export function x() {
if (__wakaru_x_initialized) return;
__wakaru_x_initialized = true;
gWr = Object.create ? (function(e, t, n, i) {
    i === void 0 && (i = n);
    var r = Object.getOwnPropertyDescriptor(t, n);
    (!r || ("get" in r ? !t.__esModule : r.writable || r.configurable)) && (r = {
        enumerable: !0,
        get: function() {
            return t[n];
        }
    }), Object.defineProperty(e, i, r);
}) : (function(e, t, n, i) {
    i === void 0 && (i = n), e[i] = t[n];
});

}
