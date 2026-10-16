import { Ag } from "./connectErrors.js";
import { eh } from "./index_221.js";
import { Fie } from "./queryClient.js";
import { Z2n } from "./recommended_actions_pb.js";
import { E } from "./tslib.es6.js";
import { OS } from "./yBp.js";
var QA_, fXe;
export { QA_, fXe };
var __wakaru_x0c_initialized = false;
export function x0c() {
if (__wakaru_x0c_initialized) return;
__wakaru_x0c_initialized = true;
"use strict";
E(), eh(), Ag(), Z2n(), QA_ = [
    "glass-empty-state-recommended-actions"
], fXe = new Fie({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: !1,
            retry: OS(2),
            staleTime: 300 * 1e3
        }
    }
});

}
