import { cS } from "./glass-clipboard-service.js";
import { Zu } from "./glass-log-service.js";
import { Mt } from "./index_197.js";
import { sNn } from "./shareChatUtils.js";
import { hjf } from "./shareDialogTitle.js";
import { E } from "./tslib.es6.js";
import { fS } from "./uiOverlayService.js";
import { Sge } from "./use-listenable-property-value.react_2.js";
import { In } from "./use-service.react_2.js";
import { yBe } from "./use-timed-flag.react_2.js";
var fCc, y9n;
export { fCc, y9n };
var __wakaru_ZgT_initialized = false;
export function ZgT() {
if (__wakaru_ZgT_initialized) return;
__wakaru_ZgT_initialized = true;
"use strict";
E(), Mt(), sNn(), hjf(), fS(), Sge(), In(), yBe(), cS(), Zu(), fCc = [
    {
        value: "private",
        label: "Private",
        fallbackDescription: "Only you can view this transcript."
    },
    {
        value: "team",
        label: "Team-only",
        fallbackDescription: "Anyone on your team can view this transcript."
    },
    {
        value: "public",
        label: "Public",
        fallbackDescription: "Anyone with the link can view this transcript."
    }
], y9n = {
    dialogBackdrop: {
        kY2c9j: "glass-ots6le",
        $$css: !0
    },
    dialogRoot: {
        kY2c9j: "glass-1wgdfok",
        $$css: !0
    },
    dialogHeader: {
        k7Eaqz: "glass-euugli",
        $$css: !0
    },
    copyButton: {
        kVAEAm: "glass-10l6tqk",
        k87sOh: "glass-8hg36d",
        kt4wiu: "glass-8v6s6i",
        kY2c9j: "glass-1vjfegm",
        kSiTet: "glass-g01cxk glass-16ah0xd glass-25t5g8",
        kfzvcC: "glass-47corl glass-p4ci0i glass-m29t2d",
        k1ekBW: "glass-19991ni",
        kIyJzY: "glass-7pq1vu glass-sagj69",
        kAMwcw: "glass-6ekqhr",
        $$css: !0
    },
    copyButtonVisible: {
        kSiTet: "glass-1hc1fzr",
        kfzvcC: "glass-67bb7w",
        $$css: !0
    }
};

}
