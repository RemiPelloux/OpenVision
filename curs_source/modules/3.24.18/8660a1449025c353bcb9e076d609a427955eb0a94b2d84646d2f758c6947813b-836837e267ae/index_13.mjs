import { ag0 } from "./color-regex.mjs";
import { DYl } from "./float-regex.mjs";
import { jG, qAs } from "./index_12.mjs";
import { cg0, dg0, lg0, ug0 } from "./ofv.js";
import { MYl } from "./sanitize.mjs";
import { E } from "./tslib.es6.js";
var BYl, UYl, Abv, Rbv, jYl, Pbv, Mbv, Dbv, $De;
export { $De, Abv, BYl, Dbv, Mbv, Pbv, Rbv, UYl, jYl };
var __wakaru_Uut_initialized = false;
export function Uut() {
if (__wakaru_Uut_initialized) return;
__wakaru_Uut_initialized = true;
E(), qAs(), ag0(), DYl(), MYl(), BYl = "number", UYl = "color", Abv = "var", Rbv = "var(", jYl = "${}", Pbv = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu, Mbv = (t)=>typeof t == "number" ? 0 : jG.test(t) ? jG.getAnimatableNone(t) : t, Dbv = (t, e)=>typeof t == "number" ? e?.trim().endsWith("/") ? t : 0 : Mbv(t), $De = {
    test: lg0,
    parse: cg0,
    createTransformer: ug0,
    getAnimatableNone: dg0
};

}
