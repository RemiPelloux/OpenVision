import { Di, _r } from "./Iwo.js";
import { Zse, n2 } from "./aiserver_pb.js";
import { pa } from "./constants_8.js";
import { yp } from "./glass-command-service.js";
import { Zu } from "./glass-log-service.js";
import { Mt } from "./index_197.js";
import { BgT } from "./report-issue-screenshot-field.react.js";
import { HgT } from "./report-issue-screenshots.js";
import { E } from "./tslib.es6.js";
import { fS } from "./uiOverlayService.js";
import { Sge } from "./use-listenable-property-value.react_2.js";
import { In } from "./use-service.react_2.js";
import { Xo } from "./uuid_2.js";
var J2_, xBs, ABs;
export { ABs, J2_, xBs };
var __wakaru_KgT_initialized = false;
export function KgT() {
if (__wakaru_KgT_initialized) return;
__wakaru_KgT_initialized = true;
"use strict";
E(), Mt(), n2(), pa(), Di(), Xo(), fS(), Sge(), In(), yp(), Zu(), BgT(), HgT(), J2_ = _r ? "\u2318\u23CE" : "^\u23CE", xBs = [
    {
        kind: "idea",
        type: Zse.IDEA,
        title: "Idea"
    },
    {
        kind: "bug",
        type: Zse.LOW,
        title: "Bug"
    },
    {
        kind: "urgent",
        type: Zse.URGENT,
        title: "Urgent"
    }
], ABs = {
    dialogRoot: {
        kzqmXN: "glass-16jmvr8",
        $$css: !0
    },
    content: {
        k1xSpc: "glass-78zum5",
        kXwgrk: "glass-dt5ytf",
        kOIVth: "glass-1jlwbde",
        $$css: !0
    },
    footer: {
        kOIVth: "glass-ehausa",
        kjj79g: "glass-13a6bvl",
        $$css: !0
    }
};

}
