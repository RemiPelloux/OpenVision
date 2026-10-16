import { mv } from "./editor-panel-context.react.js";
import { jy } from "./extensionManagement.js";
import { Pw } from "./extensions_3.js";
import { YI } from "./filesConfigurationService.js";
import { Dme } from "./glass-editor-service.types.js";
import { Jye } from "./glass-language-service.js";
import { HA } from "./glass-menu-dimensions.js";
import { Mt } from "./index_197.js";
import { el } from "./reactiveStorageServiceTypes.js";
import { dv } from "./storage-keys.js";
import { E } from "./tslib.es6.js";
import { fn } from "./uri.js";
import { D6i } from "./use-config-value-read-write.react_2.js";
import { z6 } from "./use-glass-persistent-state.react.js";
import { In } from "./use-service.react_2.js";
var Enc, Inc;
export { Enc, Inc };
var __wakaru_xnc_initialized = false;
export function xnc() {
if (__wakaru_xnc_initialized) return;
__wakaru_xnc_initialized = true;
"use strict";
E(), Jye(), Mt(), fn(), jy(), Pw(), el(), YI(), HA(), dv(), D6i(), z6(), In(), Dme(), mv(), Enc = [
    {
        value: "default",
        label: "Default"
    },
    {
        value: "vim",
        label: "Vim"
    },
    {
        value: "emacs",
        label: "Emacs"
    }
], Inc = [
    {
        value: "unified",
        label: "Unified"
    },
    {
        value: "split",
        label: "Split"
    }
];

}
