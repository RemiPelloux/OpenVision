import { Rs } from "./authenticationService.js";
import { dp } from "./connect.js";
import { Du } from "./dashboard_pb.js";
import { eh } from "./index_221.js";
import { KMe } from "./planUsage.js";
import { el } from "./reactiveStorageServiceTypes.js";
import { Um } from "./reactiveStorageTypes_2.js";
import { E } from "./tslib.es6.js";
import { Jpe } from "./usageDataService.js";
import { YZt } from "./use-auth-membership-snapshot.react.js";
import { Lg } from "./use-service.react.js";
import { ZB } from "./use-solid-selector.react.js";
import { Hu } from "./utils_pb.js";
var bOi, Yev, Xev;
export { Xev, Yev, bOi };
var __wakaru_NHl_initialized = false;
export function NHl() {
if (__wakaru_NHl_initialized) return;
__wakaru_NHl_initialized = true;
"use strict";
E(), eh(), dp(), Du(), Hu(), el(), Um(), KMe(), Jpe(), Rs(), YZt(), Lg(), ZB(), bOi = {
    hardLimit: (t)=>[
            "glass",
            "plan-usage",
            "hard-limit",
            t ?? ""
        ],
    stripeProfile: (t, e, n)=>[
            "glass",
            "plan-usage",
            "stripe-profile",
            t ?? "",
            e,
            n ?? ""
        ]
}, Yev = {
    hardLimit: null,
    inputValue: "",
    cannotEnableOnDemand: !1
}, Xev = "Failed to save on-demand limit";

}
