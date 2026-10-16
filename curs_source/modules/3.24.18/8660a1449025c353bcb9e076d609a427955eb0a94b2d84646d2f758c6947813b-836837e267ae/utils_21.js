import { V31 } from "./baggage-impl.js";
import { BCn } from "./diag.js";
import { K31 } from "./symbol.js";
import { E } from "./tslib.es6.js";
var __wakaru_O6p_cache;
export function O6p() {
if (__wakaru_O6p_cache) return __wakaru_O6p_cache;
var t = {};
__wakaru_O6p_cache = t;
"use strict";
E(), Object.defineProperty(t, "__esModule", {
    value: !0
}), t.baggageEntryMetadataFromString = t.createBaggage = void 0;
var e = BCn(), n = V31(), i = K31(), r = e.DiagAPI.instance();
function s(a = {}) {
    return new n.BaggageImpl(new Map(Object.entries(a)));
}
t.createBaggage = s;
function o(a) {
    return typeof a != "string" && (r.error(`Cannot create baggage metadata from unknown type: ${typeof a}`), a = ""), {
        __TYPE__: i.baggageEntryMetadataSymbol,
        toString () {
            return a;
        }
    };
}
t.baggageEntryMetadataFromString = o;

return t;
}
