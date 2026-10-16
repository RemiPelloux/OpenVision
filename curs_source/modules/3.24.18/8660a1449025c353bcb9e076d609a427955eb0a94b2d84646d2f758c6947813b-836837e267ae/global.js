import { Oby } from "./Iwo.js";
import { vl, wm } from "./buildFlags.js";
import { E } from "./tslib.es6.js";
var bZu, yZu;
export { bZu, yZu };
var __wakaru_kve_initialized = false;
export function kve() {
if (__wakaru_kve_initialized) return;
__wakaru_kve_initialized = true;
"use strict";
E(), wm(), bZu = "https://80ec2259ebfad12d8aa2afe6eb4f6dd5@metrics.cursor.sh/4508016051945472", yZu = "https://0a7b82d23ca5f4635708bc8e9957e4bd@o4504648565915648.ingest.us.sentry.io/4509635758522369", globalThis._CURSOR_SENTRY === void 0 && (globalThis._CURSOR_SENTRY = {
    buffer: [],
    enabled: !0,
    allowCrashReportsWhenDisabled: !1,
    loggerSampleRate: 1,
    sentry: void 0,
    trace2SampleRate: vl.developmentTooling ? 1 : .01,
    internalSampleRate: 1,
    profilesSampleRate: 0,
    jsonStringifySampleRate: 0,
    replaysSessionSampleRate: 0,
    isInternalUser: !1,
    transport: Oby()
});

}
