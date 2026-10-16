import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
var XB;
export { XB };
var __wakaru_$Ri_initialized = false;
export function $Ri() {
if (__wakaru_$Ri_initialized) return;
__wakaru_$Ri_initialized = true;
"use strict";
E(), hr(), XB = x.makeMessageType("origin.v1.ActorWithDisplay", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "kind",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "display_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "avatar_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "performed_via",
            kind: "message",
            T: XB
        }
    ]);

}
