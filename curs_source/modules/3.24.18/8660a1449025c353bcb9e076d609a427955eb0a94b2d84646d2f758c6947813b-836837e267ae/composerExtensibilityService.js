import { Qe, st } from "./Iwo.js";
import { bn, jn } from "./SZu.js";
import { mTk } from "./Ycg.js";
import { XEi, _An } from "./agentSkills.js";
import { Yh, vS } from "./composer.js";
import { l0, mV } from "./composerChatServiceInterface.js";
import { Xpe, ple } from "./composerContextServiceTypes.js";
import { Pl, no } from "./composerDataServiceTypes.js";
import { Fb, LS } from "./composerEventService.js";
import { iI, w1 } from "./composerLogService.js";
import { Bb, Ux } from "./composerViews.js";
import { a0, qbe, xA } from "./cursorRules.js";
import { Rn } from "./extensions.js";
import { It } from "./instantiation.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { rC } from "./utils_23.js";
import { Xo } from "./uuid_2.js";
var lRn, Bls;
export { Bls, lRn };
var __wakaru_hxi_initialized = false;
export function hxi() {
if (__wakaru_hxi_initialized) return;
__wakaru_hxi_initialized = true;
"use strict";
E(), Qe(), Xo(), Rn(), It(), XEi(), a0(), vS(), mV(), Xpe(), Pl(), LS(), Ux(), rC(), iI(), lRn = jn("composerExtensibilityService"), Bls = class extends st {
    constructor(t, e, n, i, r, s, o, a, l){
        super(), this.composerService = t, this.composerContextService = e, this.composerDataService = n, this.composerEventService = i, this.composerViewsService = r, this.agentSkillsService = s, this.cursorRulesService = o, this.composerChatService = a, this._composerLogService = l, this.openComposerWithSkillMention = async (c)=>{
            const { skillId: u, initialPrompt: d, logPrefix: h } = c, p = h ?? "composerExtensibilityService", g = (k)=>(c.onUnavailable?.(k), !1), f = c.skillFilename ?? await this.resolveSkillFilename(u);
            if (c.requireBuiltinSkill === !0) {
                const k = this.cursorRulesService.getRuleUriByFilename(f);
                if (k === void 0) return g("builtin_skill_missing");
                if (!qbe(k.fsPath)) return g("builtin_skill_untrusted");
            }
            const _ = await this.composerService.createComposer({
                partialState: {
                    unifiedMode: "agent"
                },
                openInNewTab: !0
            });
            if (!_) return this._composerLogService.error(`[${p}] Failed to create composer for skill`), g("composer_create_failed");
            const { composerId: b, weakHandle: y } = _, S = mTk(c);
            if (this.composerContextService.addContext({
                composerHandle: y,
                contextType: "cursorRules",
                value: {
                    filename: f
                },
                uuid: S.uuid
            }), this.composerDataService.updateComposerData(y, {
                text: S.text,
                richText: S.richText
            }), this.composerEventService.fireShouldForceText({
                composerId: b
            }), await this.composerViewsService.showAndFocus(b), c.autoSubmit === !0) {
                let k = !1;
                if (await this.composerChatService.submitChatMaybeAbortCurrent(b, S.text, {
                    richText: S.richText,
                    onDidSendRequest: ()=>{
                        k = !0;
                    }
                }), !k) return await this.composerService.deleteComposer(b), g("submit_not_sent");
            }
            return !0;
        }, this.openCreateSubagentComposer = async (c)=>{
            const u = "create-subagent";
            await this.openComposerWithSkillMention({
                skillId: u,
                skillFilename: await this.resolveSkillFilename(u),
                initialPrompt: "Help me create this subagent for Cursor: ",
                logPrefix: c
            });
        }, this.openCreateRuleComposer = async (c)=>{
            const u = "create-rule";
            await this.openComposerWithSkillMention({
                skillId: u,
                skillFilename: await this.resolveSkillFilename(u),
                initialPrompt: "Help me create this rule for Cursor: ",
                logPrefix: c
            });
        }, this.openCreateSkillComposer = async (c)=>{
            const u = "create-skill";
            await this.openComposerWithSkillMention({
                skillId: u,
                skillFilename: await this.resolveSkillFilename(u),
                initialPrompt: "Help me create this skill for Cursor: ",
                logPrefix: c
            });
        };
    }
    async resolveSkillFilename(t) {
        const e = `${t}/SKILL.md`, n = this.agentSkillsService.getAgentSkills(), i = `/${e}`, r = `\\${t}\\SKILL.md`, s = n.find((a)=>a.fullPath.endsWith(i) || a.fullPath.endsWith(r));
        if (!s) return e;
        const o = s.fullPath.split(/[\\/]/).filter(Boolean).slice(-2);
        return o.length !== 2 ? e : `${o[0]}/${o[1]}`;
    }
}, Bls = Re([
    F(0, Yh),
    F(1, ple),
    F(2, no),
    F(3, Fb),
    F(4, Bb),
    F(5, _An),
    F(6, xA),
    F(7, l0),
    F(8, w1)
], Bls), bn(lRn, Bls, 1);

}
