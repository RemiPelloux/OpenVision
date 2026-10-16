import { Iia, dzy, hzy, lzy, pzy, uzy } from "./LYd.js";
import { mWe } from "./default.js";
import { lui } from "./find.js";
import { qbn } from "./index_47.js";
import { SMr } from "./index_48.js";
import { kMr } from "./index_50.js";
import { wMr } from "./index_53.js";
import { Aia } from "./index_55.js";
import { E } from "./tslib.es6.js";
var Emh, Imh, Pia;
export { Emh, Imh, Pia };
var __wakaru_gzy_initialized = false;
export function gzy() {
if (__wakaru_gzy_initialized) return;
__wakaru_gzy_initialized = true;
E(), SMr(), mWe(), qbn(), kMr(), wMr(), Aia(), lui(), Emh = {}, Imh = {}.hasOwnProperty, Pia = Iia("type", {
    handlers: {
        root: lzy,
        element: pzy,
        text: dzy,
        comment: hzy,
        doctype: uzy
    }
});

}
