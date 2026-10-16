import { Di, Qe } from "./Iwo.js";
import { KRn } from "./ModelNameDisplay.js";
import { qn } from "./async.js";
import { mgl } from "./bugbotAvailability.js";
import { GRk } from "./buildFileMentionOption.js";
import { yo } from "./cancellation.js";
import { gs } from "./codicons.js";
import { $Ce } from "./composerUriUtils.js";
import { a0 } from "./cursorRules.js";
import { kJ } from "./fuzzyScorer.js";
import { du } from "./map.js";
import { CCe } from "./mcpConstants.js";
import { jIg } from "./mentionFileEligibility.js";
import { VRk } from "./mentionsHandlerRegistry.js";
import { aTt } from "./mentionsQuery.js";
import { Ki } from "./network.js";
import { Um } from "./reactiveStorageTypes_2.js";
import { Lr } from "./resources.js";
import { vo } from "./solidContext.js";
import { VIi } from "./sourceFilesService.js";
import { v1 } from "./store.js";
import { ta } from "./themables.js";
import { M4e } from "./transcriptPaths.js";
import { E } from "./tslib.es6.js";
import { Sz } from "./types_4.js";
import { fn } from "./uri.js";
import { ZRn } from "./useIsUsingFileIconTheme.js";
import { Dgl } from "./utils_30.js";
import { at } from "./web.js";
import { C2 } from "./workspaceProjectPaths.js";
import { Oat } from "./worktreeUtils.js";
import { wt } from "./yBp.js";
import { pi } from "./ze.js";
var zB, KIg, YIg, Bgl;
export { Bgl, KIg, YIg, zB };
var __wakaru_XIg_initialized = false;
export function XIg() {
if (__wakaru_XIg_initialized) return;
__wakaru_XIg_initialized = true;
"use strict";
E(), at(), at(), at(), pi(), v1(), qn(), yo(), gs(), kJ(), Qe(), du(), Ki(), Di(), Lr(), ta(), fn(), Um(), CCe(), a0(), Oat(), C2(), M4e(), aTt(), VIi(), KRn(), $Ce(), vo(), mgl(), Dgl(), ZRn(), GRk(), jIg(), VRk(), Sz(), zB = wt("<i>"), KIg = [
    "node_modules",
    "__tests__",
    ".git",
    "dist",
    "out",
    "bin",
    "site-packages",
    "__pycache__"
], YIg = new RegExp("(^|\\/)" + KIg.join("|") + "(\\/|$)"), Bgl = /\.(png|jpg|jpeg|gif|tiff)$/i;

}
