import { Q$, z_ } from "./helpers.js";
import { $u } from "./index_10.js";
import { x } from "./tslib.es6.js";
var vjh, h2o;
export { h2o, vjh };
var __wakaru__jh_initialized = false;
export function _jh() {
if (__wakaru__jh_initialized) return;
__wakaru__jh_initialized = true;
x(), $u(), Q$(), vjh = {
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
}, h2o = z_;

}
