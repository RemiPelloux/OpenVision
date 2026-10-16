"use strict";
require.d(exports, {
    Et: ()=>w,
    SQ: ()=>_,
    SR: ()=>f,
    eU: ()=>p,
    nH: ()=>g,
    pI: ()=>u,
    sG: ()=>A,
    y8: ()=>h
});
var n = require("./module-6688.js"), s = require("./module-37949.js"), o = require("./module-33002.js"), i = require("./module-69584.js"), a = require("./module-52774.js"), c = require("./module-51635.js");
const l = (0, s.h)("@anysphere/agent-host:managed-local-mode-config");
function u(e) {
    if (0 === e.agentModeConfigs.length) return;
    const t = new Map;
    for (const r of e.agentModeConfigs){
        const e = (0, n.qiv)(r.modeId);
        void 0 !== e && t.set(e, {
            enableAskQuestionTool: r.enableAskQuestionTool,
            switchModeToolConfig: void 0 === r.switchModeToolConfig ? void 0 : {
                targetModes: [
                    ...r.switchModeToolConfig.targetModes
                ]
            }
        });
    }
    return {
        modes: t,
        useNewPlanModePrompts: e.useNewPlanModePrompts ?? !1
    };
}
const d = {
    modes: new Map([
        [
            i.xyI.AGENT,
            {
                enableAskQuestionTool: !0,
                switchModeToolConfig: void 0
            }
        ]
    ]),
    useNewPlanModePrompts: !1
};
function p(e, t, r, n) {
    if (void 0 !== e) {
        if (!e.modes.has(t)) throw l.warn(n, "run_ready agent_mode_configs has no row for the turn's mode; failing the turn", {
            mode: i.xyI[t]
        }), new a.F("mode-config-unavailable", r);
        return e;
    }
    if (t !== i.xyI.AGENT) throw l.warn(n, "run_ready carried no agent_mode_configs; failing the non-Agent turn", {
        mode: i.xyI[t]
    }), new a.F("mode-config-unavailable", r);
    return l.warn(n, "run_ready carried no agent_mode_configs; Agent turn keeps the pre-field tool decisions"), d;
}
function m(e, t) {
    const r = t === i.xyI.UNSPECIFIED ? i.xyI.AGENT : t, n = e.modes.get(r);
    if (void 0 === n) throw new Error(`run_ready agent_mode_configs has no row for mode ${i.xyI[r]}`);
    return n;
}
function h(e, t) {
    return m(e, t).enableAskQuestionTool;
}
function f(e) {
    return !m(e, i.xyI.PLAN).enableAskQuestionTool;
}
function g(e) {
    const t = e.askQuestionConfig;
    if (void 0 !== t && "" !== t.toolName) return {
        toolName: t.toolName,
        autoRejectFirst: t.autoRejectFirst,
        shippedOnRunReady: !0
    };
}
const y = {
    toolName: "AskQuestion",
    autoRejectFirst: !1,
    shippedOnRunReady: !1
};
function w(e, t) {
    return void 0 !== e ? e : (l.warn(t, "run_ready carried no ask_question_config; keeping the AskQuestion name and no first-ask rejection"), y);
}
const v = new Set([
    ...c.nn
].map(n.m3O));
function _(e, t) {
    const r = m(e, t).switchModeToolConfig;
    if (void 0 === r) return;
    const n = r.targetModes.filter((e)=>v.has(e));
    return 0 === n.length ? void 0 : {
        enabled: !0,
        targetModes: n
    };
}
function A(e, t, r) {
    const { planSystemReminderGenerator: n, askSystemReminderGenerator: s, debugSystemReminderGenerator: a } = e;
    let c;
    const u = (e, t, r, n)=>{
        c = {
            mode: i.xyI[e],
            prevTurnMode: void 0 === t ? void 0 : i.xyI[t],
            included: r.length > 0,
            chars: r.length,
            ...n
        };
    };
    return {
        ...e,
        toolsGenerator: (n)=>{
            const s = e.toolsGenerator(n), a = c;
            return c = void 0, l.info(n.loggingContext ?? (0, o.q6)(), "Local loop mode tool set", {
                mode: i.xyI[n.mode],
                modeConfigRows: t.modes.size,
                askQuestionTool: h(t, n.mode),
                switchModeTargetModes: _(t, n.mode)?.targetModes ?? [],
                useNewPlanModePrompts: t.useNewPlanModePrompts,
                askQuestionToolName: r.toolName,
                autoRejectFirstAskQuestion: r.autoRejectFirst,
                askQuestionConfigShipped: r.shippedOnRunReady,
                modeReminder: a,
                dynamicToolProfile: e.featureFlags?.dynamicToolProfile,
                staticTools: s.getStaticTools().map((e)=>e.name),
                dynamicTools: s.getDynamicTools().map((e)=>e.name)
            }), s;
        },
        ...n && {
            planSystemReminderGenerator: (e)=>{
                const t = n(e);
                return u(i.xyI.PLAN, e, t), t;
            }
        },
        ...s && {
            askSystemReminderGenerator: (e)=>{
                const t = s(e);
                return u(i.xyI.ASK, e.prevTurnMode, t), t;
            }
        },
        ...a && {
            debugSystemReminderGenerator: (...e)=>{
                const [t, r] = e, n = a(...e);
                return u(i.xyI.DEBUG, void 0, n, {
                    firstDebugTurn: r,
                    debugConfigPresent: void 0 !== t
                }), n;
            }
        }
    };
}
