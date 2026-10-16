import { eZ, i1 } from "./BA.js";
import { fh } from "./index_10.js";
import { E } from "./tslib.es6.js";
var R$f, U8l;
export { R$f, U8l };
var __wakaru_P$f_initialized = false;
export function P$f() {
if (__wakaru_P$f_initialized) return;
__wakaru_P$f_initialized = true;
E(), fh(), eZ(), R$f = {
    replayIntegration: "replay",
    replayCanvasIntegration: "replay-canvas",
    feedbackIntegration: "feedback",
    feedbackModalIntegration: "feedback-modal",
    feedbackScreenshotIntegration: "feedback-screenshot",
    captureConsoleIntegration: "captureconsole",
    contextLinesIntegration: "contextlines",
    linkedErrorsIntegration: "linkederrors",
    dedupeIntegration: "dedupe",
    extraErrorDataIntegration: "extraerrordata",
    graphqlClientIntegration: "graphqlclient",
    httpClientIntegration: "httpclient",
    reportingObserverIntegration: "reportingobserver",
    rewriteFramesIntegration: "rewriteframes",
    browserProfilingIntegration: "browserprofiling",
    moduleMetadataIntegration: "modulemetadata",
    instrumentAnthropicAiClient: "instrumentanthropicaiclient",
    instrumentOpenAiClient: "instrumentopenaiclient",
    instrumentGoogleGenAIClient: "instrumentgooglegenaiclient"
}, U8l = i1;

}
