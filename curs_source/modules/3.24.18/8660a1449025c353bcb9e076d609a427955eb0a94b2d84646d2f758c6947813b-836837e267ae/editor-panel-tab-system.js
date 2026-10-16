import { $T_, JT_, VT_, ZT_ } from "./$T_.js";
import { Ao_ } from "./Ao_.js";
import { FT_, UT_ } from "./FT_.js";
import { MRv } from "./MRv.js";
import { Oo_ } from "./Oo_.js";
import { NJv, QQv } from "./QQv.js";
import { Zo_ } from "./Zo_.js";
import { WGv, oQv, wQv } from "./_Hv.js";
import { qCC } from "./agent-changes-tab-content.react.js";
import { Ue0, Ylv } from "./agent-changes-tab-content.schema.js";
import { WaT } from "./agent-chat-tab-content.react.js";
import { Xlv, je0 } from "./agent-chat-tab-content.schema.js";
import { Jlv, qe0 } from "./agent-chat-tab-icon.react.js";
import { ilT } from "./agent-context-tab-content.react.js";
import { ecv, ze0 } from "./agent-context-tab-content.schema.js";
import { am_ } from "./am_.js";
import { k20 } from "./browser-tab-content.react.js";
import { Ve0, tcv } from "./browser-tab-content.schema.js";
import { Ze0, rcv } from "./browser-tab-icon.react.js";
import { mFC } from "./canvas-tab-content.react_2.js";
import { Qe0, scv } from "./canvas-tab-content.schema.js";
import { shC } from "./color-reference-tab-content.react.js";
import { Je0, ocv } from "./color-reference-tab-content.schema.js";
import { ifc } from "./diff-tab-content.react.js";
import { Klv, xql } from "./diff-tab-content.schema.js";
import { jt, k_ } from "./editor-panel-tab-kind.js";
import { DmC } from "./environment-setup-tab-content.react.js";
import { acv, et0 } from "./environment-setup-tab-content.schema.js";
import { goC } from "./file-tab-content.react.js";
import { nt0, ucv } from "./file-tab-content.schema.js";
import { hcv, ot0 } from "./file-tab-icon.react.js";
import { vdC } from "./gallery-tab-content.react.js";
import { at0, pcv } from "./gallery-tab-content.schema.js";
import { bee, eEe, oQt } from "./glass-editor-panel-app-registry.js";
import { gpc } from "./gpc.js";
import { Mt } from "./index_197.js";
import { ZUr } from "./ipa.js";
import { mE_, sH } from "./mE_.js";
import { mlT } from "./machine-tab-content.react.js";
import { lt0, mcv } from "./machine-tab-content.schema.js";
import { ZlT } from "./main-bot-tasks-app.react.js";
import { Be0, Vlv } from "./main-bot-tasks-tab-content.schema.js";
import { mm_ } from "./mm_.js";
import { ofv } from "./ofv.js";
import { wTC } from "./output-tab-content.react.js";
import { ct0, gcv } from "./output-tab-content.schema.js";
import { rpC } from "./plan-tab-content.react.js";
import { fcv, ut0 } from "./plan-tab-content.schema.js";
import { q5C } from "./pr-tab-content.react.js";
import { _cv, dt0 } from "./pr-tab-content.schema.js";
import { ht0, kcv } from "./project-tab-content.schema.js";
import { Ol0, zmv } from "./project-tab-shell.react.js";
import { MaT } from "./side-chat-tab-content.react.js";
import { Fl0, Vmv } from "./side-chat-tab-content.schema.js";
import { $l0, Ymv } from "./side-chat-tab-icon.react.js";
import { elT } from "./suggestion-tab-content.react.js";
import { Oe0, qlv } from "./suggestion-tab-content.schema.js";
import { R5i, hRt } from "./terminal-icon.js";
import { hd0 } from "./terminal-tab-content.react.js";
import { Hl0, Xmv } from "./terminal-tab-content.schema.js";
import { E } from "./tslib.es6.js";
import { ft_ } from "./vnc-tab-content.react.js";
import { Qmv, Wl0, Zmv } from "./vnc-tab-content.schema.js";
import { _lT } from "./voice-call-transcript-tab-content.react.js";
import { Gl0, Jmv } from "./voice-call-transcript-tab-content.schema.js";
var UU, ann, Zkc, sMt;
export { UU, Zkc, ann, sMt };
var __wakaru_h9s_initialized = false;
export function h9s() {
if (__wakaru_h9s_initialized) return;
__wakaru_h9s_initialized = true;
"use strict";
E(), Mt(), Oe0(), oQt(), k_(), Be0(), Ue0(), je0(), qe0(), ze0(), Ve0(), Ze0(), Qe0(), Je0(), Klv(), et0(), nt0(), ot0(), at0(), lt0(), ct0(), ut0(), dt0(), ht0(), Ol0(), Fl0(), $l0(), R5i(), Hl0(), Wl0(), Gl0(), UU = {
    [jt.Terminal]: Xmv,
    [jt.Browser]: tcv,
    [jt.File]: ucv,
    [jt.Gallery]: pcv,
    [jt.ColorReference]: ocv,
    [jt.Plan]: fcv,
    [jt.EnvironmentSetup]: acv,
    [jt.Vnc]: Zmv,
    [jt.AgentVnc]: Qmv,
    [jt.Diff]: xql,
    [jt.AgentChanges]: Ylv,
    [jt.Output]: gcv,
    [jt.Pr]: _cv,
    [jt.Canvas]: scv,
    [jt.SideChat]: Vmv,
    [jt.AgentChat]: Xlv,
    [jt.Suggestion]: qlv,
    [jt.Context]: kcv,
    [jt.AgentContext]: ecv,
    [jt.Machine]: mcv,
    [jt.VoiceCallTranscript]: Jmv,
    [jt.MainBotTasks]: Vlv
}, ann = {
    [jt.Terminal]: {
        icon: hRt,
        defaultLabel: "Terminal",
        schema: UU[jt.Terminal],
        renderer: sH(()=>Promise.resolve().then(()=>(hd0(), ofv)).then((t)=>t.TerminalTabContent))
    },
    [jt.Browser]: {
        icon: "globe",
        defaultLabel: "Browser",
        schema: UU[jt.Browser],
        renderer: sH(()=>Promise.resolve().then(()=>(k20(), MRv)).then((t)=>t.BrowserTabContent)),
        iconRenderer: rcv,
        alwaysMounted: !0
    },
    [jt.File]: {
        icon: "file",
        defaultLabel: "Files",
        schema: UU[jt.File],
        renderer: sH(()=>Promise.resolve().then(()=>(goC(), WGv)).then((t)=>t.FileTabContent)),
        iconRenderer: hcv,
        alwaysMounted: !0
    },
    [jt.Gallery]: {
        icon: "compass",
        defaultLabel: "Gallery",
        schema: UU[jt.Gallery],
        renderer: sH(()=>Promise.resolve().then(()=>(vdC(), oQv)).then((t)=>t.GalleryTabContent))
    },
    [jt.ColorReference]: {
        icon: "color-mode",
        defaultLabel: "Colors",
        schema: UU[jt.ColorReference],
        renderer: sH(()=>Promise.resolve().then(()=>(shC(), wQv)).then((t)=>t.ColorReferenceTabContent))
    },
    [jt.Plan]: {
        icon: "list-todo",
        defaultLabel: "Plan",
        schema: UU[jt.Plan],
        renderer: sH(()=>Promise.resolve().then(()=>(rpC(), QQv)).then((t)=>t.PlanTabContent))
    },
    [jt.EnvironmentSetup]: {
        icon: "settings-gear",
        defaultLabel: "Environment",
        schema: UU[jt.EnvironmentSetup],
        renderer: sH(()=>Promise.resolve().then(()=>(DmC(), NJv)).then((t)=>t.EnvironmentSetupTabContent))
    },
    [jt.Vnc]: {
        icon: "device-desktop",
        defaultLabel: "Desktop",
        schema: UU[jt.Vnc],
        renderer: sH(()=>Promise.resolve().then(()=>(ft_(), gpc)).then((t)=>t.VncTabContent)),
        keepMountedAfterFirstActivation: !0
    },
    [jt.AgentVnc]: {
        icon: "device-desktop",
        defaultLabel: "Desktop",
        schema: UU[jt.AgentVnc],
        renderer: sH(()=>Promise.resolve().then(()=>(ft_(), gpc)).then((t)=>t.VncTabContent)),
        keepMountedAfterFirstActivation: !0
    },
    [jt.Diff]: {
        icon: "plus-minus",
        defaultLabel: "Changes",
        schema: UU[jt.Diff],
        renderer: sH(()=>Promise.resolve().then(()=>(ifc(), Ao_)).then((t)=>t.DiffTabContent)),
        alwaysMounted: !0
    },
    [jt.AgentChanges]: {
        icon: "plus-minus",
        defaultLabel: "Changes",
        schema: UU[jt.AgentChanges],
        renderer: sH(()=>Promise.resolve().then(()=>(qCC(), Oo_)).then((t)=>t.AgentChangesTabContent))
    },
    [jt.Output]: {
        icon: "file-list",
        defaultLabel: "Output",
        schema: UU[jt.Output],
        renderer: sH(()=>Promise.resolve().then(()=>(wTC(), Zo_)).then((t)=>t.OutputTabContent))
    },
    [jt.Pr]: {
        icon: "github",
        defaultLabel: "Pull Request",
        schema: UU[jt.Pr],
        renderer: sH(()=>Promise.resolve().then(()=>(q5C(), am_)).then((t)=>t.PrTabContent)),
        keepMountedAfterFirstActivation: !0
    },
    [jt.Canvas]: {
        icon: "brush",
        defaultLabel: "Canvas",
        schema: UU[jt.Canvas],
        renderer: sH(()=>Promise.resolve().then(()=>(mFC(), mm_)).then((t)=>t.CanvasTabContent)),
        alwaysMounted: !0
    },
    [jt.SideChat]: {
        icon: "chat-bubble",
        iconRenderer: Ymv,
        defaultLabel: "Side Chat",
        schema: UU[jt.SideChat],
        renderer: sH(()=>Promise.resolve().then(()=>(MaT(), FT_)).then((t)=>t.SideChatTabContent)),
        keepMountedAfterFirstActivation: !0
    },
    [jt.AgentChat]: {
        icon: "laptop",
        iconRenderer: Jlv,
        defaultLabel: "Chat",
        schema: UU[jt.AgentChat],
        renderer: sH(()=>Promise.resolve().then(()=>(WaT(), UT_)).then((t)=>t.AgentChatTabContent)),
        keepMountedAfterFirstActivation: !0
    },
    [jt.Suggestion]: {
        icon: "lightbulb",
        defaultLabel: "Suggestion",
        schema: UU[jt.Suggestion],
        renderer: sH(()=>Promise.resolve().then(()=>(elT(), $T_)).then((t)=>t.SuggestionTabContent)),
        keepMountedAfterFirstActivation: !0
    },
    [jt.Context]: {
        icon: bee.icon,
        defaultLabel: bee.label,
        schema: UU[jt.Context],
        renderer: zmv,
        scrollOwner: "renderer",
        keepMountedAfterFirstActivation: !0
    },
    [jt.AgentContext]: {
        icon: "book",
        defaultLabel: "Context",
        schema: UU[jt.AgentContext],
        renderer: sH(()=>Promise.resolve().then(()=>(ilT(), VT_)).then((t)=>t.AgentContextTabContent))
    },
    [jt.Machine]: {
        icon: "chart-line",
        defaultLabel: "Machine Metrics",
        schema: UU[jt.Machine],
        renderer: sH(()=>Promise.resolve().then(()=>(mlT(), ZT_)).then((t)=>t.MachineTabContent))
    },
    [jt.VoiceCallTranscript]: {
        icon: "waveform",
        defaultLabel: "Voice call",
        schema: UU[jt.VoiceCallTranscript],
        renderer: sH(()=>Promise.resolve().then(()=>(_lT(), JT_)).then((t)=>t.VoiceCallTranscriptTabContent))
    },
    [jt.MainBotTasks]: {
        icon: eEe.icon,
        defaultLabel: eEe.label,
        schema: UU[jt.MainBotTasks],
        renderer: sH(()=>Promise.resolve().then(()=>(ZlT(), mE_)).then((t)=>t.MainBotTasksApp)),
        scrollOwner: "renderer",
        keepMountedAfterFirstActivation: !0
    }
}, Zkc = {
    ...ann,
    [jt.File]: {
        ...ann[jt.File],
        alwaysMounted: !1,
        keepMountedAfterFirstActivation: !0
    }
}, sMt = ZUr(ann);

}
