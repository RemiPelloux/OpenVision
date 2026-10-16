import { z0e } from "./A3u.js";
import { Se, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { L3n, _jt } from "./agentSkills.js";
import { Hh, Xy } from "./composer.js";
import { OR, loe } from "./composerChatServiceInterface.js";
import { qX, uoe } from "./composerContextServiceTypes.js";
import { Zs, nl } from "./composerDataServiceTypes.js";
import { Zy, yC } from "./composerEventService.js";
import { lb, n0 } from "./composerLogService.js";
import { Hv, rE } from "./composerViews.js";
import { Bw, LR, eoe } from "./cursorRules.js";
import { Pn } from "./extensions.js";
import { Ze } from "./instantiation.js";
import { mn, vn } from "./qIc.js";
import { x } from "./tslib.es6.js";
import { _C } from "./utils_23.js";
import { Js, zn } from "./uuid.js";
function Zs_(e) {
    return e.root.children.find((t)=>t.type === "paragraph" && Array.isArray(t.children));
}
function Qs_(e) {
    const { skillId: t, initialPrompt: n } = e, i = zn(), r = `/${t}`, s = z0e(void 0, [
        {
            display: r,
            mentionName: t,
            typeaheadType: "cursor_skill",
            uuid: i,
            storedKey: i
        }
    ]), o = JSON.parse(s), a = Zs_(o);
    return a && a.children.push({
        type: "text",
        version: 1,
        detail: 0,
        format: 0,
        mode: "normal",
        style: "",
        text: ` ${n}`
    }), {
        uuid: i,
        text: `${r} ${n}`,
        richText: JSON.stringify(o)
    };
}
var lqt, rtr;
export { Qs_, Zs_, lqt, rtr };
var __wakaru_RBn_initialized = false;
export function RBn() {
if (__wakaru_RBn_initialized) return;
__wakaru_RBn_initialized = true;
"use strict";
x(), Se(), Js(), Pn(), Ze(), L3n(), Bw(), Xy(), loe(), uoe(), nl(), yC(), rE(), _C(), n0(), lqt = vn("composerExtensibilityService"), rtr = class extends we {
    constructor(e, t, n, i, r, s, o, a, c){
        super(), this.composerService = e, this.composerContextService = t, this.composerDataService = n, this.composerEventService = i, this.composerViewsService = r, this.agentSkillsService = s, this.cursorRulesService = o, this.composerChatService = a, this._composerLogService = c, this.openComposerWithSkillMention = async (l)=>{
            const { skillId: u, initialPrompt: h, logPrefix: p } = l, g = p ?? "composerExtensibilityService", f = (A)=>(l.onUnavailable?.(A), !1), v = l.skillFilename ?? await this.resolveSkillFilename(u);
            if (l.requireBuiltinSkill === !0) {
                const A = this.cursorRulesService.getRuleUriByFilename(v);
                if (A === void 0) return f("builtin_skill_missing");
                if (!eoe(A.fsPath)) return f("builtin_skill_untrusted");
            }
            const b = await this.composerService.createComposer({
                partialState: {
                    unifiedMode: "agent"
                },
                openInNewTab: !0
            });
            if (!b) return this._composerLogService.error(`[${g}] Failed to create composer for skill`), f("composer_create_failed");
            const { composerId: y, weakHandle: T } = b, E = Qs_(l);
            if (this.composerContextService.addContext({
                composerHandle: T,
                contextType: "cursorRules",
                value: {
                    filename: v
                },
                uuid: E.uuid
            }), this.composerDataService.updateComposerData(T, {
                text: E.text,
                richText: E.richText
            }), this.composerEventService.fireShouldForceText({
                composerId: y
            }), await this.composerViewsService.showAndFocus(y), l.autoSubmit === !0) {
                let A = !1;
                if (await this.composerChatService.submitChatMaybeAbortCurrent(y, E.text, {
                    richText: E.richText,
                    onDidSendRequest: ()=>{
                        A = !0;
                    }
                }), !A) return await this.composerService.deleteComposer(y), f("submit_not_sent");
            }
            return !0;
        }, this.openCreateSubagentComposer = async (l)=>{
            const u = "create-subagent";
            await this.openComposerWithSkillMention({
                skillId: u,
                skillFilename: await this.resolveSkillFilename(u),
                initialPrompt: "Help me create this subagent for Cursor: ",
                logPrefix: l
            });
        }, this.openCreateRuleComposer = async (l)=>{
            const u = "create-rule";
            await this.openComposerWithSkillMention({
                skillId: u,
                skillFilename: await this.resolveSkillFilename(u),
                initialPrompt: "Help me create this rule for Cursor: ",
                logPrefix: l
            });
        }, this.openCreateSkillComposer = async (l)=>{
            const u = "create-skill";
            await this.openComposerWithSkillMention({
                skillId: u,
                skillFilename: await this.resolveSkillFilename(u),
                initialPrompt: "Help me create this skill for Cursor: ",
                logPrefix: l
            });
        };
    }
    async resolveSkillFilename(e) {
        const t = `${e}/SKILL.md`, n = this.agentSkillsService.getAgentSkills(), i = `/${t}`, r = `\\${e}\\SKILL.md`, s = n.find((a)=>a.fullPath.endsWith(i) || a.fullPath.endsWith(r));
        if (!s) return t;
        const o = s.fullPath.split(/[\\/]/).filter(Boolean).slice(-2);
        return o.length !== 2 ? t : `${o[0]}/${o[1]}`;
    }
}, rtr = ie([
    C(0, Hh),
    C(1, qX),
    C(2, Zs),
    C(3, Zy),
    C(4, Hv),
    C(5, _jt),
    C(6, LR),
    C(7, OR),
    C(8, lb)
], rtr), mn(lqt, rtr, 1);

}
