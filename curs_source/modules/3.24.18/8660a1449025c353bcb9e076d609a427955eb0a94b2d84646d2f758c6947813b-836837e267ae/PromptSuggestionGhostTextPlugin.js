import { yaf } from "./ComposerAutocomplete.css";
import { cI, t1 } from "./LexicalComposerContext.js";
import { Gr, Pfs, Raf, sVe } from "./Ycg.js";
import { oVe } from "./aiConfigHelper.js";
import { A_t, pa } from "./constants_8.js";
import { Paf } from "./insertParsedPromptSuggestionIntoLexical.js";
import { Ak, JGe, M6e, q2e } from "./ipa.js";
import { Mfs } from "./parsePromptSuggestionSlashCommands.js";
import { vo } from "./solidContext.js";
import { E } from "./tslib.es6.js";
import { Cn, On, pi } from "./ze.js";
var Daf;
export { Daf };
var __wakaru_qUk_initialized = false;
export function qUk() {
if (__wakaru_qUk_initialized) return;
__wakaru_qUk_initialized = true;
"use strict";
E(), pi(), cI(), Ak(), pa(), oVe(), vo(), yaf(), Paf(), Mfs(), Daf = (t)=>{
    const e = Gr(), [n] = t1(), [i] = sVe(A_t, e.configurationService, !1);
    let r = 0;
    return Cn(()=>{
        const s = i(), o = t.inputDelegate, a = t.insertCursorCommand, l = t.insertCursorRule, c = async (d)=>{
            const h = ++r, [p, g] = await Promise.all([
                e.cursorCommandsService.getCommands(),
                e.cursorRulesService.getAllRules()
            ]);
            if (h !== r) return;
            const f = Pfs(d, p, g);
            Raf({
                editor: n,
                parsed: f,
                callbacks: {
                    insertCursorCommand: a,
                    insertCursorRule: l
                },
                ensureTrailingSpaceAfterFinalMention: !0
            });
        }, u = n.registerCommand(JGe, (d)=>{
            if (s === !1) return !1;
            const h = o.getSuggestionText();
            if (!h) return !1;
            const p = o.getSuggestionReqId();
            c(h);
            try {
                e.analyticsService.trackEvent("composer.prompt_suggestion.accepted", {
                    suggestionLength: h.length,
                    reqId: p
                });
            } catch  {}
            return d.preventDefault(), d.stopPropagation(), !0;
        }, q2e);
        On(()=>{
            u();
        });
    }), Cn(()=>{
        const s = i(), o = t.inputDelegate, a = n.registerCommand(M6e, (l)=>{
            if (s === !1 || !o.getSuggestionText()) return !1;
            const u = o.getSuggestionReqId();
            o.clearSuggestionText();
            try {
                e.analyticsService.trackEvent("composer.prompt_suggestion.dismissed", {
                    reqId: u
                });
            } catch  {}
            return l.preventDefault(), l.stopPropagation(), !0;
        }, q2e);
        On(()=>{
            a();
        });
    }), null;
};

}
