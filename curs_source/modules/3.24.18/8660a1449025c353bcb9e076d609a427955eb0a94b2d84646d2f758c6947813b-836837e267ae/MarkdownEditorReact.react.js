import { LMi } from "./ComposerMarkdownLinkContent.react.js";
import { Di } from "./Iwo.js";
import { FBw } from "./MarkdownEditorReact.css";
import { S9w } from "./MarkdownFrontmatterPanel.react.js";
import { PBw } from "./ProjectDatabasePlugin.js";
import { pDn } from "./Ycg.js";
import { Y6l } from "./citationLinkUtils.js";
import { a0 } from "./cursorRules.js";
import { Mt } from "./index_197.js";
import { k9w } from "./knownFrontmatterKeys.js";
import { OBw } from "./markdownEditorProjectDatabase.js";
import { w9w } from "./markdownEditorUndoStack.js";
import { DBw } from "./markdownImageSrc.js";
import { J1s } from "./richLinkPresentationProvider.js";
import { E } from "./tslib.es6.js";
import { SRn } from "./vscodeCodeLineTokenizer.js";
var kYf, wYf, CYf, TYf, EYf;
export { CYf, EYf, TYf, kYf, wYf };
var __wakaru_KBw_initialized = false;
export function KBw() {
if (__wakaru_KBw_initialized) return;
__wakaru_KBw_initialized = true;
"use strict";
E(), Mt(), Di(), S9w(), a0(), SRn(), k9w(), w9w(), PBw(), DBw(), Y6l(), J1s(), LMi(), OBw(), FBw(), kYf = (t, e)=>pDn(t, e, {
        showLinkFavicons: !0
    }), wYf = {}, CYf = [], TYf = new Set([
    "name",
    "icon",
    "color"
]), EYf = (t, e)=>pDn(t, e, {
        showAgentAge: !0,
        showLinkFavicons: !0
    });

}
