import { jn } from "./SZu.js";
import { cW, hO } from "./context_pb.js";
import { It } from "./instantiation.js";
import { E } from "./tslib.es6.js";
import { Hu, x$e } from "./utils_pb.js";
import { Ai, Xo } from "./uuid_2.js";
var VAn, zdl;
export { VAn, zdl };
var __wakaru_XIi_initialized = false;
export function XIi() {
if (__wakaru_XIi_initialized) return;
__wakaru_XIi_initialized = true;
"use strict";
E(), It(), cW(), Hu(), Xo(), VAn = jn("aiContextSessionService"), zdl = ()=>({
        case: "cmd-k",
        defaultIntents: [
            {
                uuid: Ai(),
                type: hO.AUTOMATIC,
                intent: {
                    case: "cmdKCurrentFile",
                    value: {}
                }
            },
            {
                uuid: Ai(),
                type: hO.AUTOMATIC,
                intent: {
                    case: "cmdKQueryEtc",
                    value: {}
                }
            },
            {
                uuid: Ai(),
                type: hO.AUTOMATIC,
                intent: {
                    case: "lints",
                    value: {
                        scope: {
                            case: "cmdkScope",
                            value: {}
                        },
                        filterToSeverities: [
                            x$e.ERROR
                        ]
                    }
                }
            },
            {
                uuid: Ai(),
                type: hO.AUTOMATIC,
                intent: {
                    case: "recentLocations",
                    value: {}
                }
            },
            {
                uuid: Ai(),
                type: hO.AUTOMATIC,
                intent: {
                    case: "visibleTabs",
                    value: {}
                }
            },
            {
                uuid: Ai(),
                type: hO.AUTOMATIC,
                intent: {
                    case: "diffHistory",
                    value: {}
                }
            },
            {
                uuid: Ai(),
                type: hO.AUTOMATIC,
                intent: {
                    case: "pastCmdkMessagesInDiffSessions",
                    value: {}
                }
            },
            {
                uuid: Ai(),
                type: hO.AUTOMATIC,
                intent: {
                    case: "chatHistory",
                    value: {}
                }
            },
            {
                uuid: Ai(),
                type: hO.AUTOMATIC,
                intent: {
                    case: "terminalHistory",
                    value: {
                        useActiveInstanceAsFallback: !0
                    }
                }
            }
        ]
    });

}
