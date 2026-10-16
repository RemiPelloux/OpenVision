import { Dc } from "./aiService.js";
import { Rs } from "./authenticationService.js";
import { Ag } from "./connectErrors.js";
import { Du } from "./dashboard_pb.js";
import { eh } from "./index_221.js";
import { Fie } from "./queryClient.js";
import { E } from "./tslib.es6.js";
import { iSs } from "./use-auth-id.react.js";
import { D$ } from "./use-feature-gate.react.js";
import { Lg } from "./use-service.react.js";
import { OS } from "./yBp.js";
var HAt;
export { HAt };
var __wakaru_XZt_initialized = false;
export function XZt() {
if (__wakaru_XZt_initialized) return;
__wakaru_XZt_initialized = true;
"use strict";
E(), eh(), Du(), Dc(), Ag(), Rs(), iSs(), D$(), Lg(), HAt = new Fie({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: !1,
            retry: OS(2),
            staleTime: 300 * 1e3
        }
    }
});

}
