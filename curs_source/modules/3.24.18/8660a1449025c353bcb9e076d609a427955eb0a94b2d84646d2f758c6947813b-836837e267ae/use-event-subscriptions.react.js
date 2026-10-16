import { Dc } from "./aiService.js";
import { Rs } from "./authenticationService.js";
import { pd } from "./background_composer_pb.js";
import { Hx } from "./cloudAgentRepositoryService.js";
import { Ag } from "./connectErrors.js";
import { xSc } from "./event-subscriptions-scope.js";
import { eh } from "./index_221.js";
import { ANn } from "./localSubscriptions.js";
import { Fie } from "./queryClient.js";
import { E } from "./tslib.es6.js";
import { JM } from "./use-now.react.js";
import { In } from "./use-service.react_2.js";
import { OS } from "./yBp.js";
var iht, Wk_, y4s, T1c;
export { T1c, Wk_, iht, y4s };
var __wakaru_Gk__initialized = false;
export function Gk_() {
if (__wakaru_Gk__initialized) return;
__wakaru_Gk__initialized = true;
"use strict";
E(), eh(), pd(), ANn(), Hx(), Dc(), Ag(), Rs(), xSc(), JM(), In(), iht = new Fie({
    defaultOptions: {
        queries: {
            retry: OS(2),
            staleTime: 3e4
        }
    }
}), Wk_ = 5 * 6e4, y4s = "glass-event-subscriptions", T1c = [
    y4s,
    "none",
    ""
];

}
