import { Yb, uUi, zd } from "./agent_pb.js";
import { GVi, Suo, Yd, ado, cdo, g1e, gPe, hm, kuo, yuo } from "./background_composer_pb.js";
import { dqc } from "./cloud-agent-startup-errors.ts";
import { Ml } from "./index.ts";
import { x } from "./tslib.es6.js";
function V3n(e, t) {
    return {
        atMs: e,
        message: new g1e({
            message: {
                case: "transientErrorWithOffset",
                value: new kuo({
                    offsetKey: "",
                    transientError: new ado({
                        errorMessage: t
                    })
                })
            }
        })
    };
}
function Ott(e, t) {
    return {
        atMs: e,
        message: new g1e({
            message: {
                case: "workflowStatusWithOffset",
                value: new Suo({
                    offsetKey: "",
                    workflowStatus: t
                })
            }
        })
    };
}
function bxh(e) {
    return {
        atMs: e,
        message: new g1e({
            message: {
                case: "interactionUpdateWithOffset",
                value: new GVi({
                    offsetKey: "",
                    interactionUpdate: new Yb({
                        message: {
                            case: "heartbeat",
                            value: new uUi
                        }
                    })
                })
            }
        })
    };
}
function yxh({ atMs: e, errorMessage: t, errorCode: n }) {
    return {
        atMs: e,
        message: new g1e({
            message: {
                case: "cloudAgentStateWithIdAndOffset",
                value: new yuo({
                    offsetKey: "",
                    cloudAgentState: new gPe({
                        userFacingErrorDetails: new cdo({
                            errorMessage: t,
                            errorCode: n
                        })
                    }),
                    preFetchedBlobs: []
                })
            }
        })
    };
}
function we_() {
    return [
        Ott(0, Yd.RUNNING),
        V3n(500, pJi),
        V3n(5e3, Sxh),
        bxh(1e4),
        Ott(11e3, Yd.IDLE)
    ];
}
function Ce_() {
    return [
        Ott(0, Yd.RUNNING),
        V3n(500, pJi),
        V3n(5e3, pJi),
        yxh({
            atMs: 1e4,
            errorMessage: kxh,
            errorCode: "UNAVAILABLE"
        }),
        Ott(10100, Yd.ERROR)
    ];
}
function Te_() {
    return [
        Ott(0, Yd.RUNNING),
        yxh({
            atMs: 2e3,
            errorMessage: dqc,
            errorCode: "FAILED_PRECONDITION"
        }),
        Ott(2100, Yd.ERROR)
    ];
}
function Ee_() {
    return [
        Ott(0, Yd.RUNNING),
        V3n(500, wxh),
        bxh(8e3),
        Ott(9e3, Yd.IDLE)
    ];
}
var pJi, Sxh, kxh, wxh, Cxh;
export { Ce_, Cxh, Ee_, Ott, Sxh, Te_, V3n, bxh, kxh, pJi, we_, wxh, yxh };
var __wakaru_Ie__initialized = false;
export function Ie_() {
if (__wakaru_Ie__initialized) return;
__wakaru_Ie__initialized = true;
"use strict";
x(), Ml(), zd(), hm(), pJi = "We are having difficulties reaching the AI provider.", Sxh = "The AI provider is rate-limiting requests or is temporarily at capacity.", kxh = "We failed to reach the AI provider despite multiple retry attempts.", wxh = "We are having difficulties reaching the execution environment.", Cxh = {
    transientProviderErrorThenRecovers: we_,
    transientErrorsThenPermanentError: Ce_,
    environmentSetupFailedPermanently: Te_,
    environmentUnreachableThenRecovers: Ee_
};

}
