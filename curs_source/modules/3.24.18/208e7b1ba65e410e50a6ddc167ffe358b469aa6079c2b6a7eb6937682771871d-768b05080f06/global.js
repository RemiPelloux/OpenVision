import { Js, Rl } from "./buildFlags.js";
import { On } from "./spanCollector.js";
import { h } from "./tslib.es6.js";
function $Le() {
    return {
        send: function(t) {
            const n = On().buffer;
            return n.length < 64 && n.push(t), Promise.resolve({
                statusCode: 200
            });
        },
        flush: function(t) {
            return Promise.resolve(!0);
        }
    };
}
var Vx, $x;
export { $Le, $x, Vx };
var __wakaru_Ho_initialized = false;
export function Ho() {
if (__wakaru_Ho_initialized) return;
__wakaru_Ho_initialized = true;
"use strict";
h(), Rl(), Vx = "https://80ec2259ebfad12d8aa2afe6eb4f6dd5@metrics.cursor.sh/4508016051945472", $x = "https://0a7b82d23ca5f4635708bc8e9957e4bd@o4504648565915648.ingest.us.sentry.io/4509635758522369", globalThis._CURSOR_SENTRY === void 0 && (globalThis._CURSOR_SENTRY = {
    buffer: [],
    enabled: !0,
    allowCrashReportsWhenDisabled: !1,
    loggerSampleRate: 1,
    sentry: void 0,
    trace2SampleRate: Js.developmentTooling ? 1 : .01,
    internalSampleRate: 1,
    profilesSampleRate: 0,
    jsonStringifySampleRate: 0,
    replaysSessionSampleRate: 0,
    isInternalUser: !1,
    transport: $Le()
});

}
