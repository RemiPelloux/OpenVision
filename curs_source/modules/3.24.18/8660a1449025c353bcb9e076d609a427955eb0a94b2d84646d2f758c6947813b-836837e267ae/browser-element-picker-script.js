import { n20 } from "./browser-element-picker-annotation-anchors.js";
import { i20 } from "./browser-element-picker-css-inspect.js";
import { bRv } from "./browser-element-picker-framework-detection.js";
import { r20 } from "./browser-element-picker-launch-groups.js";
import { s20 } from "./browser-element-picker-text-edit.js";
import { Mut } from "./design-css-inspect.js";
import { hRv } from "./design-inspection-scripts.js";
import { c20 } from "./design-mode-element-path.js";
import { LIv } from "./design-mode-hue-palette.js";
import { d20 } from "./design-mode-scroll.js";
import { ece } from "./index_27.ts";
import { E } from "./tslib.es6.js";
import { h20 } from "./wTv.js";
var CRv, TRv;
export { CRv, TRv };
var __wakaru_p20_initialized = false;
export function p20() {
if (__wakaru_p20_initialized) return;
__wakaru_p20_initialized = true;
"use strict";
E(), ece(), n20(), i20(), bRv(), r20(), s20(), Mut(), hRv(), c20(), LIv(), d20(), CRv = `window.addEventListener('message', (e) => {
		if (e.source !== window) return;
		onPickerCommand(e.data);
	});`, TRv = h20({
    commandSubscriptionSource: "window.__cursorPickerCommand = onPickerCommand;"
});

}
