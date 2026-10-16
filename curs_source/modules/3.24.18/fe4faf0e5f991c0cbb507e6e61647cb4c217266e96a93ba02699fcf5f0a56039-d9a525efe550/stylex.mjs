import { i } from "./plugin-brand-icon.js";
function AYn() {
    if (TYn) return RY;
    TYn = 1, Object.defineProperty(RY, "__esModule", {
        value: !0
    }), RY.styleq = void 0;
    var r = new WeakMap, e = "$$css";
    function a(l) {
        var u, p, m;
        return l != null && (u = l.disableCache === !0, p = l.disableMix === !0, m = l.transform), i(function() {
            for(var g = [], _ = "", v = null, x = "", C = u ? null : r, E = new Array(arguments.length), A = 0; A < arguments.length; A++)E[A] = arguments[A];
            for(; E.length > 0;){
                var $ = E.pop();
                if (!($ == null || $ === !1)) {
                    if (Array.isArray($)) {
                        for(var I = 0; I < $.length; I++)E.push($[I]);
                        continue;
                    }
                    var N = m != null ? m($) : $;
                    if (N.$$css != null) {
                        var R = "";
                        if (C != null && C.has(N)) {
                            var P = C.get(N);
                            P != null && (R = P[0], x = P[2], g.push.apply(g, P[1]), C = P[3]);
                        } else {
                            var L = [];
                            for(var j in N){
                                var z = N[j];
                                if (j === e) {
                                    var q = N[j];
                                    q !== !0 && (x = x ? q + "; " + x : q);
                                    continue;
                                }
                                typeof z == "string" || z === null ? g.includes(j) || (g.push(j), C != null && L.push(j), typeof z == "string" && (R += R ? " " + z : z)) : console.error("styleq: ".concat(j, " typeof ").concat(String(z), ' is not "string" or "null".'));
                            }
                            if (C != null) {
                                var O = new WeakMap;
                                C.set(N, [
                                    R,
                                    L,
                                    x,
                                    O
                                ]), C = O;
                            }
                        }
                        R && (_ = _ ? R + " " + _ : R);
                    } else if (p) v == null && (v = {}), v = Object.assign({}, N, v);
                    else {
                        var B = null;
                        for(var V in N){
                            var H = N[V];
                            H !== void 0 && (g.includes(V) || (H != null && (v == null && (v = {}), B == null && (B = {}), B[V] = H), g.push(V), C = null));
                        }
                        B != null && (v = Object.assign(B, v));
                    }
                }
            }
            var Z = [
                _,
                v,
                x
            ];
            return Z;
        }, "styleq");
    }
    i(a, "createStyleq");
    var s = RY.styleq = a();
    return s.factory = a, RY;
}
function wn(...r) {
    const [e, a, s] = $Yn.styleq(r), l = {};
    return e != null && e !== "" && (l.className = e), a != null && Object.keys(a).length > 0 && (l.style = a), s != null && s !== "" && (l["data-style-src"] = s), l;
}
var RY, TYn, $Yn, H_i;
export { $Yn, AYn, H_i, RY, TYn, wn };
var __wakaru_Ho_initialized = false;
export function Ho() {
if (__wakaru_Ho_initialized) return;
__wakaru_Ho_initialized = true;
RY = {}, i(AYn, "requireStyleq"), $Yn = AYn(), i(wn, "props"), H_i = Object.freeze({});

}
