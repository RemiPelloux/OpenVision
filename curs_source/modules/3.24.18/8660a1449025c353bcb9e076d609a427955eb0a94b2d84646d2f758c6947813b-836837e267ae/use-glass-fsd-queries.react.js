import { nFs } from "./Zo_.js";
import { dp } from "./connect.js";
import { Ag } from "./connectErrors.js";
import { N5m } from "./fsdOutputKinds.js";
import { dX, l1i } from "./full_self_driving_pb.js";
import { PEe } from "./glass-fsd-pr-url.js";
import { eh } from "./index_221.js";
import { E } from "./tslib.es6.js";
import { A8i } from "./use-full-self-driving-client.react.js";
import { md_ } from "./use-glass-fsd-mutations.react.js";
import { OS } from "./yBp.js";
var bd_, yd_, Sd_, m8, R8i, kd_;
export { R8i, Sd_, bd_, kd_, m8, yd_ };
var __wakaru_MEe_initialized = false;
export function MEe() {
if (__wakaru_MEe_initialized) return;
__wakaru_MEe_initialized = true;
"use strict";
E(), eh(), dp(), dX(), Ag(), PEe(), A8i(), N5m(), md_(), bd_ = "full self driving is not enabled for this user", yd_ = 3, Sd_ = new Set([
    l1i.NO_CHANGES,
    l1i.READY,
    l1i.NOT_SUGGEST_MODE
]), m8 = {
    all: [
        "glass-fsd"
    ],
    byPrUrl: (t)=>[
            ...m8.all,
            "pr",
            t ?? ""
        ],
    config: (t)=>[
            ...m8.byPrUrl(t),
            "config"
        ],
    runs: (t)=>[
            ...m8.byPrUrl(t),
            "runs"
        ],
    suggestion: (t, e)=>[
            ...m8.byPrUrl(t),
            "suggestion",
            e ?? ""
        ],
    findings: (t, e, n, i, r)=>[
            ...m8.byPrUrl(t),
            "findings",
            e ?? "",
            n ?? "",
            [
                ...i ?? []
            ].sort().join(","),
            r
        ]
}, R8i = OS(yd_, nFs), kd_ = "RUNNING";

}
