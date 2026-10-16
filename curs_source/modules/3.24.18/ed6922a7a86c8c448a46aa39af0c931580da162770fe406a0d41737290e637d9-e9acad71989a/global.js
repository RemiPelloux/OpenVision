import { Jug } from "./HVr.js";
import { am, kc } from "./buildFlags.js";
import { x } from "./tslib.es6.js";
var VIc, jIc;
export { VIc, jIc };
var __wakaru_Yie_initialized = false;
export function Yie() {
if (__wakaru_Yie_initialized) return;
__wakaru_Yie_initialized = true;
"use strict";
x(), am(), VIc = "https://80ec2259ebfad12d8aa2afe6eb4f6dd5@metrics.cursor.sh/4508016051945472", jIc = "https://0a7b82d23ca5f4635708bc8e9957e4bd@o4504648565915648.ingest.us.sentry.io/4509635758522369", globalThis._CURSOR_SENTRY === void 0 && (globalThis._CURSOR_SENTRY = {
    buffer: [],
    enabled: !0,
    allowCrashReportsWhenDisabled: !1,
    loggerSampleRate: 1,
    sentry: void 0,
    trace2SampleRate: kc.developmentTooling ? 1 : .01,
    internalSampleRate: 1,
    profilesSampleRate: 0,
    jsonStringifySampleRate: 0,
    replaysSessionSampleRate: 0,
    isInternalUser: !1,
    transport: Jug()
});

}
