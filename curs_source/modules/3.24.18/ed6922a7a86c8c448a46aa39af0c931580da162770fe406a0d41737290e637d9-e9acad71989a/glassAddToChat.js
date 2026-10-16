import { Ps } from "./HVr.js";
import { Rb } from "./agentRepositoryServiceTypes.js";
import { g__ } from "./agentWindowDiffSelectionAddToChat.js";
import { p__ } from "./agentWindowEditor.js";
import { Bzt } from "./agentWindowTabPersistence.js";
import { Sg } from "./aiService.js";
import { S__ } from "./browser-picked-element-types.js";
import { md } from "./codeEditorService.js";
import { uoe } from "./composerContextServiceTypes.js";
import { yC } from "./composerEventService.js";
import { rE } from "./composerViews.js";
import { R2 } from "./cursorIgnoreService.js";
import { en } from "./dom_2.js";
import { gHh } from "./focusedPromptTarget.js";
import { cG } from "./glassActiveAgentService.js";
import { kHh } from "./glassChatSelectionAddToChat.js";
import { Igh } from "./glassDisplayedConversation.js";
import { LLo } from "./glassFocusedConversation.js";
import { w__ } from "./glassPendingPrompt.js";
import { mi } from "./index_188.js";
import { Ll } from "./model.js";
import { li } from "./network.js";
import { Krr } from "./pr-lifecycle-presentation.js";
import { d__ } from "./prCommentChatHeaderValue.js";
import { Y1e } from "./prLifecycle.js";
import { YUe } from "./promptInputUriPayload.js";
import { eG } from "./pullRequestIdentity.js";
import { qi } from "./range.js";
import { Li } from "./resources.js";
import { ng } from "./terminal.js";
import { OLo } from "./terminalCodeSelection.js";
import { vzt } from "./terminalService.js";
import { QO } from "./tiptapRichText.js";
import { x } from "./tslib.es6.js";
import { Qt } from "./uri.js";
import { b1 } from "./utils_16.js";
import { Js } from "./uuid.js";
import { ci } from "./workspace.js";
import { Yv } from "./workspaceCollectionService.js";
var ULo, $Lo, HLo, WLo, GLo, VLo, jLo, THh, L__, qLo, N__;
export { $Lo, GLo, HLo, L__, N__, THh, ULo, VLo, WLo, jLo, qLo };
var __wakaru_zLo_initialized = false;
export function zLo() {
if (__wakaru_zLo_initialized) return;
__wakaru_zLo_initialized = true;
"use strict";
x(), mi(), en(), Li(), Qt(), Js(), li(), Ps(), qi(), Ll(), ci(), md(), gHh(), d__(), Krr(), p__(), g__(), Bzt(), Sg(), Rb(), cG(), Yv(), eG(), Y1e(), YUe(), R2(), rE(), b1(), OLo(), uoe(), yC(), QO(), ng(), vzt(), S__(), kHh(), LLo(), Igh(), w__(), ULo = (e, t)=>(t = Symbol[e]) ? t : Symbol.for("Symbol." + e), $Lo = (e)=>{
    throw TypeError(e);
}, HLo = (e, t, n)=>{
    if (t != null) {
        typeof t != "object" && typeof t != "function" && $Lo("Object expected");
        var i, r;
        n && (i = t[ULo("asyncDispose")]), i === void 0 && (i = t[ULo("dispose")], n && (r = i)), typeof i != "function" && $Lo("Object not disposable"), r && (i = function() {
            try {
                r.call(this);
            } catch (s) {
                return Promise.reject(s);
            }
        }), e.push([
            n,
            i,
            t
        ]);
    } else n && e.push([
        n
    ]);
    return t;
}, WLo = (e, t, n)=>{
    var i = typeof SuppressedError == "function" ? SuppressedError : function(o, a, c, l) {
        return l = Error(c), l.name = "SuppressedError", l.error = o, l.suppressed = a, l;
    }, r = (o)=>t = n ? new i(o, t, "An error was suppressed during disposal") : (n = !0, o), s = (o)=>{
        for(; o = e.pop();)try {
            var a = o[1] && o[1].call(o[2]);
            if (o[0]) return Promise.resolve(a).then(s, (c)=>(r(c), s()));
        } catch (c) {
            r(c);
        }
        if (n) throw t;
    };
    return s();
}, GLo = 400, VLo = 12e4, jLo = 2e4, THh = "data-project-notes-agent-id", L__ = `[${THh}]`, qLo = {
    BrowserPreview: "browserPreview",
    Canvas: "canvas"
}, N__ = {
    [qLo.BrowserPreview]: {
        fence: "browser_element",
        headerLines: [
            "The user selected this node in the browser preview."
        ]
    },
    [qLo.Canvas]: {
        fence: "canvas_element",
        headerLines: [
            "The user selected this element in the rendered Cursor Canvas.",
            "Before doing anything else, if you have not already read the canvas skill, read and follow the Cursor Canvas skill at ~/.cursor/skills-cursor/canvas/SKILL.md.",
            "Use this selection to identify and update the corresponding React/canvas component in the canvas source file."
        ],
        includeCanvasPath: !0
    }
};

}
