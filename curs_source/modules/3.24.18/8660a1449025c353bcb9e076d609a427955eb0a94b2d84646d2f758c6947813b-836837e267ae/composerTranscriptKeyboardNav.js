import { sd } from "./chat_pb.js";
import { E } from "./tslib.es6.js";
var Sct, $Dn, Wkf;
export { $Dn, Sct, Wkf };
var __wakaru_how_initialized = false;
export function how() {
if (__wakaru_how_initialized) return;
__wakaru_how_initialized = true;
"use strict";
E(), sd(), Sct = {
    kind: "none",
    consume: !1
}, $Dn = {
    kind: "none",
    consume: !0
}, Wkf = new Map([
    [
        "PageUp",
        {
            granularity: "page",
            direction: -1
        }
    ],
    [
        "PageDown",
        {
            granularity: "page",
            direction: 1
        }
    ],
    [
        "Home",
        {
            granularity: "document",
            direction: -1
        }
    ],
    [
        "End",
        {
            granularity: "document",
            direction: 1
        }
    ]
]);

}
