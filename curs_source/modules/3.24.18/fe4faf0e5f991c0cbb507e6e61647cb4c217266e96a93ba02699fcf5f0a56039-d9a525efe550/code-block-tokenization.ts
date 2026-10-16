import { i } from "./plugin-brand-icon.js";
function D0r(r, e, a, s) {
    const l = e ? F0r : 0;
    switch(r){
        case void 0:
            return {
                sync: !e,
                asyncDebounceMs: l
            };
        case "sync":
            return {
                tokenization: {
                    kind: "inline"
                }
            };
        case "async":
        case "worker":
            {
                if (e) return {
                    tokenization: {
                        kind: "worker",
                        debounceMs: l,
                        onRefusal: "plain"
                    }
                };
                const u = r === "worker" ? null : a;
                return {
                    tokenization: {
                        kind: "inline-when-warm",
                        ...u === void 0 ? {} : {
                            scheduleWarmup: u
                        },
                        ...s === void 0 ? {} : {
                            scheduleApply: s
                        }
                    }
                };
            }
    }
}
var F0r;
export { D0r, F0r };
var __wakaru_K4i_initialized = false;
export function K4i() {
if (__wakaru_K4i_initialized) return;
__wakaru_K4i_initialized = true;
"use strict";
F0r = 120, i(D0r, "defaultCodeTokenizationProps");

}
