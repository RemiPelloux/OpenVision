import { Ei, Ya } from "./Iwo.js";
import { Ag } from "./connectErrors.js";
import { eh } from "./index_221.js";
import { bF } from "./multi-repo-cloud-targets.js";
import { Fie } from "./queryClient.js";
import { E } from "./tslib.es6.js";
import { ECt, OS } from "./yBp.js";
var HBv, Yoc, G4i, WBv, Xoc, GBv;
export { G4i, GBv, HBv, WBv, Xoc, Yoc };
var __wakaru_q4i_initialized = false;
export function q4i() {
if (__wakaru_q4i_initialized) return;
__wakaru_q4i_initialized = true;
"use strict";
E(), eh(), Ei(), Ag(), bF(), HBv = OS(2, (t)=>Ya(t) || ECt(t)), Yoc = new Fie({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: !1,
            retry: HBv,
            staleTime: 5 * 6e4
        }
    }
}), G4i = {
    all: [
        "cloud-logical-environments"
    ],
    list: ()=>[
            ...G4i.all,
            "list"
        ],
    search: (t, e)=>[
            ...G4i.all,
            "search",
            t,
            e
        ]
}, WBv = 3e4, Xoc = 300, GBv = [];

}
