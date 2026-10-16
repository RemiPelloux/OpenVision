import { A6, AR } from "./context_pb.js";
import { Ze } from "./instantiation.js";
import { vn } from "./qIc.js";
import { x } from "./tslib.es6.js";
import { SRe, hu } from "./utils_pb.js";
import { Js, zn } from "./uuid.js";
var jCt, lPh, Cxo;
export { Cxo, jCt, lPh };
var __wakaru_Xjt_initialized = false;
export function Xjt() {
if (__wakaru_Xjt_initialized) return;
__wakaru_Xjt_initialized = true;
"use strict";
x(), Ze(), A6(), hu(), Js(), jCt = vn("aiContextSessionService"), lPh = ()=>({
        case: "terminal-cmd-k",
        defaultIntents: [
            {
                uuid: zn(),
                type: AR.AUTOMATIC,
                intent: {
                    case: "terminalCmdKDefaults",
                    value: {}
                }
            },
            {
                uuid: zn(),
                type: AR.AUTOMATIC,
                intent: {
                    case: "recentLocations",
                    value: {}
                }
            }
        ]
    }), Cxo = ()=>({
        case: "cmd-k",
        defaultIntents: [
            {
                uuid: zn(),
                type: AR.AUTOMATIC,
                intent: {
                    case: "cmdKCurrentFile",
                    value: {}
                }
            },
            {
                uuid: zn(),
                type: AR.AUTOMATIC,
                intent: {
                    case: "cmdKQueryEtc",
                    value: {}
                }
            },
            {
                uuid: zn(),
                type: AR.AUTOMATIC,
                intent: {
                    case: "lints",
                    value: {
                        scope: {
                            case: "cmdkScope",
                            value: {}
                        },
                        filterToSeverities: [
                            SRe.ERROR
                        ]
                    }
                }
            },
            {
                uuid: zn(),
                type: AR.AUTOMATIC,
                intent: {
                    case: "recentLocations",
                    value: {}
                }
            },
            {
                uuid: zn(),
                type: AR.AUTOMATIC,
                intent: {
                    case: "visibleTabs",
                    value: {}
                }
            },
            {
                uuid: zn(),
                type: AR.AUTOMATIC,
                intent: {
                    case: "diffHistory",
                    value: {}
                }
            },
            {
                uuid: zn(),
                type: AR.AUTOMATIC,
                intent: {
                    case: "pastCmdkMessagesInDiffSessions",
                    value: {}
                }
            },
            {
                uuid: zn(),
                type: AR.AUTOMATIC,
                intent: {
                    case: "chatHistory",
                    value: {}
                }
            },
            {
                uuid: zn(),
                type: AR.AUTOMATIC,
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
