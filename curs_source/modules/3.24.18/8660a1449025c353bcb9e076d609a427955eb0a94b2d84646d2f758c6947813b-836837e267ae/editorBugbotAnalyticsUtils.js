import { E } from "./tslib.es6.js";
var RNf, PNf, MNf, DNf;
export { DNf, MNf, PNf, RNf };
var __wakaru_NNf_initialized = false;
export function NNf() {
if (__wakaru_NNf_initialized) return;
__wakaru_NNf_initialized = true;
"use strict";
E(), RNf = (t)=>{
    t.analyticsService.trackEvent("bug_bot.fix_ide_bug_sidebar", void 0);
}, PNf = (t, e)=>{
    t.analyticsService.trackEvent("bug_bot.fix_in_cursor", e);
}, MNf = (t, e)=>{
    t.analyticsService.trackEvent("bug_bot.dismiss_ide_bug_sidebar", e);
}, DNf = (t)=>{
    t.analyticsService.trackEvent("bug_bot.fix_all_ide_bugs_sidebar", void 0);
};

}
