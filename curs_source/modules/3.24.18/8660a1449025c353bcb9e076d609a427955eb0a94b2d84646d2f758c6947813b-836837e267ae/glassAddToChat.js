import { Fa } from "./Iwo.js";
import { Jle } from "./Ycg.js";
import { wl } from "./agentRepositoryServiceTypes.js";
import { Ryf } from "./agentWindowDiffSelectionAddToChat.js";
import { Ayf } from "./agentWindowEditor.js";
import { fMn } from "./agentWindowTabPersistence.js";
import { Dc } from "./aiService.js";
import { Xyf } from "./browser-picked-element-types.js";
import { og } from "./codeEditorService.js";
import { Xpe } from "./composerContextServiceTypes.js";
import { LS } from "./composerEventService.js";
import { Ux } from "./composerViews.js";
import { S2 } from "./cursorIgnoreService.js";
import { Hn } from "./dom_2.js";
import { Hv } from "./glassActiveAgentService.js";
import { DDn } from "./glassChatSelectionAddToChat.js";
import { mzt } from "./glassDisplayedConversation.js";
import { vxt } from "./glassFocusedConversation.js";
import { $bs } from "./glassPendingPrompt.js";
import { Mt } from "./index_197.js";
import { xp } from "./model.js";
import { Ki } from "./network.js";
import { Nvs } from "./pr-lifecycle-presentation.js";
import { xyf } from "./prCommentChatHeaderValue.js";
import { sU } from "./prLifecycle.js";
import { D4e } from "./promptInputUriPayload.js";
import { Mk } from "./pullRequestIdentity.js";
import { Qs } from "./range.js";
import { Lr } from "./resources.js";
import { Mv } from "./terminal.js";
import { sPl } from "./terminalCodeSelection.js";
import { mKt } from "./terminalService.js";
import { Fx } from "./tiptapRichText.js";
import { E } from "./tslib.es6.js";
import { fn } from "./uri.js";
import { oT } from "./utils_16.js";
import { Xo } from "./uuid_2.js";
import { Sr } from "./workspace.js";
import { Cu } from "./workspaceCollectionService.js";
var APl, RPl, Gbs, qbs, hSf, PPl, MPl, DPl, NPl, zbs, bct, Vbs, rDi, LPl, OPl, FPl, Kbs, BPl, NDn, pSf;
export { APl, BPl, DPl, FPl, Gbs, Kbs, LPl, MPl, NDn, NPl, OPl, PPl, RPl, Vbs, bct, hSf, pSf, qbs, rDi, zbs };
var __wakaru_Gie_initialized = false;
export function Gie() {
if (__wakaru_Gie_initialized) return;
__wakaru_Gie_initialized = true;
"use strict";
E(), Mt(), Hn(), Lr(), fn(), Xo(), Ki(), Fa(), Qs(), xp(), Sr(), og(), Jle(), xyf(), Nvs(), Ayf(), Ryf(), fMn(), Dc(), wl(), Hv(), Cu(), Mk(), sU(), D4e(), S2(), Ux(), oT(), sPl(), Xpe(), LS(), Fx(), Mv(), mKt(), Xyf(), DDn(), vxt(), mzt(), $bs(), APl = (t, e)=>(e = Symbol[t]) ? e : Symbol.for("Symbol." + t), RPl = (t)=>{
    throw TypeError(t);
}, Gbs = (t, e, n)=>{
    if (e != null) {
        typeof e != "object" && typeof e != "function" && RPl("Object expected");
        var i, r;
        n && (i = e[APl("asyncDispose")]), i === void 0 && (i = e[APl("dispose")], n && (r = i)), typeof i != "function" && RPl("Object not disposable"), r && (i = function() {
            try {
                r.call(this);
            } catch (s) {
                return Promise.reject(s);
            }
        }), t.push([
            n,
            i,
            e
        ]);
    } else n && t.push([
        n
    ]);
    return e;
}, qbs = (t, e, n)=>{
    var i = typeof SuppressedError == "function" ? SuppressedError : function(o, a, l, c) {
        return c = Error(l), c.name = "SuppressedError", c.error = o, c.suppressed = a, c;
    }, r = (o)=>e = n ? new i(o, e, "An error was suppressed during disposal") : (n = !0, o), s = (o)=>{
        for(; o = t.pop();)try {
            var a = o[1] && o[1].call(o[2]);
            if (o[0]) return Promise.resolve(a).then(s, (l)=>(r(l), s()));
        } catch (l) {
            r(l);
        }
        if (n) throw e;
    };
    return s();
}, hSf = 1e3, PPl = 400, MPl = 12e4, DPl = 1e3, NPl = 40, zbs = 16, bct = 2e4, Vbs = "data-project-notes-agent-id", rDi = "data-project-task-chat-text", LPl = `[${Vbs}]`, OPl = 400, FPl = 120, Kbs = 18, BPl = 48e3, NDn = {
    BrowserPreview: "browserPreview",
    Canvas: "canvas"
}, pSf = {
    [NDn.BrowserPreview]: {
        fence: "browser_element",
        headerLines: [
            "The user selected this node in the browser preview."
        ]
    },
    [NDn.Canvas]: {
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
