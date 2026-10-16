import { EZc, Pcs } from "./qIc.js";
import { wyn } from "./stringifyNumber.js";
import { x } from "./tslib.es6.js";
var Lcs, Ncs, Iyn;
export { Iyn, Lcs, Ncs };
var __wakaru_xZc_initialized = false;
export function xZc() {
if (__wakaru_xZc_initialized) return;
__wakaru_xZc_initialized = true;
x(), wyn(), Lcs = {
    identify: (e)=>typeof e == "bigint" || Number.isInteger(e),
    default: !0,
    tag: "tag:yaml.org,2002:int",
    format: "TIME",
    test: /^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+$/,
    resolve: (e, t, { intAsBigInt: n })=>Pcs(e, n),
    stringify: EZc
}, Ncs = {
    identify: (e)=>typeof e == "number",
    default: !0,
    tag: "tag:yaml.org,2002:float",
    format: "TIME",
    test: /^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\.[0-9_]*$/,
    resolve: (e)=>Pcs(e, !1),
    stringify: EZc
}, Iyn = {
    identify: (e)=>e instanceof Date,
    default: !0,
    tag: "tag:yaml.org,2002:timestamp",
    test: RegExp("^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})(?:(?:t|T|[ \\t]+)([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}(\\.[0-9]+)?)(?:[ \\t]*(Z|[-+][012]?[0-9](?::[0-9]{2})?))?)?$"),
    resolve (e) {
        const t = e.match(Iyn.test);
        if (!t) throw new Error("!!timestamp expects a date, starting with yyyy-mm-dd");
        const [, n, i, r, s, o, a] = t.map(Number), c = t[7] ? Number((t[7] + "00").substr(1, 3)) : 0;
        let l = Date.UTC(n, i - 1, r, s || 0, o || 0, a || 0, c);
        const u = t[8];
        if (u && u !== "Z") {
            let h = Pcs(u, !1);
            Math.abs(h) < 30 && (h *= 60), l -= 6e4 * h;
        }
        return new Date(l);
    },
    stringify: ({ value: e })=>e?.toISOString().replace(/(T00:00:00)?\.000Z$/, "") ?? ""
};

}
