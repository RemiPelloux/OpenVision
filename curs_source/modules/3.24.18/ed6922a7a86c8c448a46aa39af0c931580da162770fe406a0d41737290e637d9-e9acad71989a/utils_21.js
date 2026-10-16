import { xgv } from "./baggage-impl.js";
import { M$t } from "./diag.js";
import { Igv } from "./symbol.js";
import { x } from "./tslib.es6.js";
var __wakaru_hNu_cache;
export function hNu() {
if (__wakaru_hNu_cache) return __wakaru_hNu_cache;
var e = {};
__wakaru_hNu_cache = e;
"use strict";
x(), Object.defineProperty(e, "__esModule", {
    value: !0
}), e.baggageEntryMetadataFromString = e.createBaggage = void 0;
var t = M$t(), n = xgv(), i = Igv(), r = t.DiagAPI.instance();
function s(a = {}) {
    return new n.BaggageImpl(new Map(Object.entries(a)));
}
e.createBaggage = s;
function o(a) {
    return typeof a != "string" && (r.error(`Cannot create baggage metadata from unknown type: ${typeof a}`), a = ""), {
        __TYPE__: i.baggageEntryMetadataSymbol,
        toString () {
            return a;
        }
    };
}
e.baggageEntryMetadataFromString = o;

return e;
}
