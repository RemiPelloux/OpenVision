import { ZM } from "./aiSettingsService.js";
import { Rs } from "./authenticationService.js";
import { wm } from "./buildFlags.js";
import { Mt } from "./index_197.js";
import { zEi } from "./localAgentGatewayConfiguration.js";
import { sEs } from "./models-config.helpers.js";
import { kVw } from "./models-provider-controls.react.js";
import { qc } from "./opener.js";
import { el } from "./reactiveStorageServiceTypes.js";
import { NTs } from "./settings-input-field.react.js";
import { FKe } from "./settings-switch.react.js";
import { E } from "./tslib.es6.js";
import { fS } from "./uiOverlayService.js";
import { CG } from "./use-observable.react.js";
import { YTe } from "./use-reactive-storage.react.js";
import { Lg } from "./use-service.react.js";
var rWl, xnv, Anv;
export { Anv, rWl, xnv };
var __wakaru_DVw_initialized = false;
export function DVw() {
if (__wakaru_DVw_initialized) return;
__wakaru_DVw_initialized = true;
"use strict";
E(), Mt(), wm(), CG(), el(), zEi(), ZM(), Rs(), fS(), sEs(), kVw(), NTs(), FKe(), YTe(), Lg(), qc(), rWl = "us.anthropic.claude-sonnet-4-20250514-v1:0", xnv = {
    apiKey: "",
    baseUrl: "",
    deployment: "",
    useAzure: !1
}, Anv = {
    accessKey: "",
    region: "",
    secretKey: "",
    testModel: rWl,
    useBedrock: !1
};

}
