import { Ei } from "./Iwo.js";
import { Rs } from "./authenticationService.js";
import { Du } from "./dashboard_pb.js";
import { eh } from "./index_221.js";
import { Psc } from "./profile-settings-utils.js";
import { XDi } from "./profileUtils.js";
import { E } from "./tslib.es6.js";
import { In } from "./use-service.react_2.js";
import { dKe } from "./use-team.react.js";
var S4i, $Fv;
export { $Fv, S4i };
var __wakaru_NU0_initialized = false;
export function NU0() {
if (__wakaru_NU0_initialized) return;
__wakaru_NU0_initialized = true;
"use strict";
E(), eh(), Du(), Ei(), Rs(), XDi(), In(), dKe(), Psc(), S4i = {
    all: [
        "glass",
        "profile-settings"
    ],
    byTeam: (t)=>[
            ...S4i.all,
            t ?? "personal"
        ]
}, $Fv = 15e3;

}
