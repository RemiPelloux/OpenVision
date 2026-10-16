import { es } from "./actions_2.js";
import { Hi, cn, mt } from "./contextkey.js";
import { Ch, vf } from "./contextkeys_2.js";
import { Hn } from "./dom_2.js";
import { Wo } from "./editorService.js";
import { Ma } from "./keyCodes.js";
import { $Ff } from "./markdownPlanEditor.js";
import { _xi } from "./markdownPlanEditorInput.js";
import { Bt } from "./nls.js";
import { yxi } from "./planEditorModeService.js";
import { E } from "./tslib.es6.js";
var qct, HFf, yks, WFf, GFf, qFf, zFf, VFf;
export { GFf, HFf, VFf, WFf, qFf, qct, yks, zFf };
var __wakaru_Sks_initialized = false;
export function Sks() {
if (__wakaru_Sks_initialized) return;
__wakaru_Sks_initialized = true;
"use strict";
E(), es(), Ma(), Hi(), Wo(), $Ff(), _xi(), yxi(), Bt(), Hn(), vf(), qct = new cn("markdownPlanEditorActive", !1), HFf = "planEditor.toggleMode", yks = "planEditor.acceptPlan", WFf = "planEditor.actions.find", GFf = "planEditor.findNext", qFf = "planEditor.findPrevious", zFf = "planEditor.closeFindWidget", VFf = mt.and(mt.or(mt.has(qct.key), mt.and(Ch.LangId.isEqualTo("markdown"), mt.regex(Ch.Path.key, /\.plan\.md$/i))));

}
