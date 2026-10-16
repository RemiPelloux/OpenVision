import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
var Oc, Dps;
export { Dps, Oc };
var __wakaru_kG_initialized = false;
export function kG() {
if (__wakaru_kG_initialized) return;
__wakaru_kG_initialized = true;
"use strict";
E(), hr(), Oc = x.makeMessageType("origin.v1.ClientRepoIdentifier", ()=>[
        {
            no: 1,
            name: "org",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "name",
            kind: "scalar",
            T: 9
        }
    ]), Dps = x.makeMessageType("origin.v1.GithubRepoIdentifier", ()=>[
        {
            no: 1,
            name: "owner",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "repo",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "enterprise_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]);

}
