import { JJd, NYo } from "./LYd.js";
import { Uai } from "./stringifyNumber.js";
import { E } from "./tslib.es6.js";
var LYo, OYo, Gai;
export { Gai, LYo, OYo };
var __wakaru_eeh_initialized = false;
export function eeh() {
if (__wakaru_eeh_initialized) return;
__wakaru_eeh_initialized = true;
E(), Uai(), LYo = {
    identify: (t)=>typeof t == "bigint" || Number.isInteger(t),
    default: !0,
    tag: "tag:yaml.org,2002:int",
    format: "TIME",
    test: /^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+$/,
    resolve: (t, e, { intAsBigInt: n })=>NYo(t, n),
    stringify: JJd
}, OYo = {
    identify: (t)=>typeof t == "number",
    default: !0,
    tag: "tag:yaml.org,2002:float",
    format: "TIME",
    test: /^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\.[0-9_]*$/,
    resolve: (t)=>NYo(t, !1),
    stringify: JJd
}, Gai = {
    identify: (t)=>t instanceof Date,
    default: !0,
    tag: "tag:yaml.org,2002:timestamp",
    test: RegExp("^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})(?:(?:t|T|[ \\t]+)([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}(\\.[0-9]+)?)(?:[ \\t]*(Z|[-+][012]?[0-9](?::[0-9]{2})?))?)?$"),
    resolve (t) {
        const e = t.match(Gai.test);
        if (!e) throw new Error("!!timestamp expects a date, starting with yyyy-mm-dd");
        const [, n, i, r, s, o, a] = e.map(Number), l = e[7] ? Number((e[7] + "00").substr(1, 3)) : 0;
        let c = Date.UTC(n, i - 1, r, s || 0, o || 0, a || 0, l);
        const u = e[8];
        if (u && u !== "Z") {
            let d = NYo(u, !1);
            Math.abs(d) < 30 && (d *= 60), c -= 6e4 * d;
        }
        return new Date(c);
    },
    stringify: ({ value: t })=>t?.toISOString().replace(/(T00:00:00)?\.000Z$/, "") ?? ""
};

}
