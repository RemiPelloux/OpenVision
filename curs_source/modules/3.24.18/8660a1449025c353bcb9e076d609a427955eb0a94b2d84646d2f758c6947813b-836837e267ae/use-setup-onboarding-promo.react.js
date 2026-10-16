import { Rs } from "./authenticationService.js";
import { Ag } from "./connectErrors.js";
import { Du } from "./dashboard_pb.js";
import { EBi } from "./environment-setup-promo.js";
import { eh } from "./index_221.js";
import { Fie } from "./queryClient.js";
import { Um } from "./reactiveStorageTypes_2.js";
import { E } from "./tslib.es6.js";
import { In } from "./use-service.react_2.js";
import { Af } from "./use-solid-selector.react_2.js";
import { dKe } from "./use-team.react.js";
import { OS } from "./yBp.js";
var GLs, ghc;
export { GLs, ghc };
var __wakaru_IBi_initialized = false;
export function IBi() {
if (__wakaru_IBi_initialized) return;
__wakaru_IBi_initialized = true;
"use strict";
E(), eh(), Du(), Um(), Ag(), Rs(), EBi(), In(), Af(), dKe(), GLs = new Fie({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: !0,
            retry: OS(3),
            staleTime: 3e4
        }
    }
}), ghc = [
    "glass",
    "setupOnboardingPromoState"
];

}
