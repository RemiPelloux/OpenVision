import { d40 } from "./BPv.js";
import { zt } from "./LYd.js";
import { hOi } from "./agentAppearanceSettings.js";
import { Ss } from "./aiMiscServices.js";
import { k70 } from "./chat-max-width-slider.react.js";
import { pa } from "./constants_8.js";
import { G5v, bsc } from "./conversation-density-preview.react.js";
import { ROv } from "./fun-config.react.js";
import { _sc, fsc, gsc } from "./glass-appearance.shared.js";
import { pJt } from "./glass-display-service.js";
import { I5n, aZ } from "./glass-theme-constants.js";
import { ZDe } from "./glass-theme-service.js";
import { n4i } from "./glass-theme-utils.js";
import { Mt } from "./index_197.js";
import { cp } from "./objects.js";
import { $ye } from "./settingsTabContainer.react.js";
import { $70 } from "./theme-selection-section.react.js";
import { E } from "./tslib.es6.js";
import { iU0 } from "./typography-settings-section.react.js";
import { msc } from "./use-appearance-config.react.js";
import { D6i } from "./use-config-value-read-write.react_2.js";
import { hEe } from "./use-delayer.react.js";
import { Ru } from "./use-feature-gate.react_2.js";
import { l70 } from "./use-reduce-motion-setting.react.js";
import { In } from "./use-service.react_2.js";
import { R6 } from "./workbenchThemeService.js";
import { m2y } from "./ze.js";
import { jsx as _C } from "./react-runtime/react/esm-jsx-runtime-production.js";
var CFv, V5n, TFv, yDs, EFv;
export { CFv, EFv, TFv, V5n, yDs };
var __wakaru_uU0_initialized = false;
export function uU0() {
if (__wakaru_uU0_initialized) return;
__wakaru_uU0_initialized = true;
"use strict";
E(), Mt(), pa(), cp(), hOi(), Ss(), R6(), msc(), D6i(), hEe(), Ru(), l70(), In(), pJt(), ZDe(), n4i(), _sc(), G5v(), k70(), ROv(), $ye(), $70(), iU0(), CFv = 250, V5n = bsc.filter((t)=>t.value === "detailed" || t.value === "compact-ungrouped" || t.value === "compact-all-grouped"), TFv = {
    "compact-shells": "compact-ungrouped",
    "compact-grouped": "compact-all-grouped"
}, yDs = [
    {
        value: I5n,
        label: gsc.label,
        leading: _C(zt, {
            "aria-hidden": !0,
            color: "tertiary",
            name: gsc.icon
        })
    },
    ...m2y(fsc).filter((t)=>!d40(t)).map((t)=>{
        const e = fsc[t];
        return {
            value: aZ[t],
            label: e.label,
            leading: _C(zt, {
                "aria-hidden": !0,
                color: "tertiary",
                name: e.icon
            })
        };
    })
], EFv = [
    {
        value: "on",
        label: "On"
    },
    {
        value: "off",
        label: "Off"
    },
    {
        value: "auto",
        label: "System"
    }
];

}
