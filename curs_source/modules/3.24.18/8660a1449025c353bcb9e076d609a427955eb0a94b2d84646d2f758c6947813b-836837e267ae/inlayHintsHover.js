import { CC, D, Di, _r } from "./Iwo.js";
import { bo } from "./arrays.js";
import { Ote, qn } from "./async.js";
import { nr, rs } from "./commands.js";
import { or, yi } from "./configuration.js";
import { FVd } from "./getHover.js";
import { av, gS } from "./hover.js";
import { cRe, yvn } from "./hoverTypes.js";
import { Ek, zf } from "./htmlContent.js";
import { Azo } from "./inlayHints.js";
import { hbe, i3a, lWr } from "./inlayHintsController.js";
import { Al, ru } from "./keybinding.js";
import { Kp, Ph } from "./language.js";
import { Dg, Nd } from "./languageFeatures.js";
import { Boi, Cvn, Iwe } from "./markdownHoverParticipant.js";
import { Bt } from "./nls.js";
import { kc, qc } from "./opener.js";
import { er, jc } from "./position.js";
import { Em, Rh } from "./resolverService.js";
import { PC, gfn } from "./textModel.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { Gfn, oKd, vzo } from "./ze.js";
var r3a, Jbi;
export { Jbi, r3a };
var __wakaru_MPp_initialized = false;
export function MPp() {
if (__wakaru_MPp_initialized) return;
__wakaru_MPp_initialized = true;
"use strict";
E(), qn(), Ek(), jc(), PC(), cRe(), Kp(), Em(), FVd(), Boi(), i3a(), or(), qc(), Dg(), Bt(), Di(), Azo(), bo(), ru(), gS(), rs(), r3a = class extends yvn {
    constructor(t, e, n, i){
        super(10, e, t.item.anchor.range, n, i, !0), this.part = t;
    }
}, Jbi = class extends Cvn {
    constructor(t, e, n, i, r, s, o, a, l){
        super(t, e, n, s, a, i, r, l), this._resolverService = o, this.hoverOrdinal = 6;
    }
    suggestHoverAnchor(t) {
        if (!hbe.get(this._editor) || t.target.type !== 6) return null;
        const n = t.target.detail.injectedText?.options;
        return n instanceof gfn && n.attachedData instanceof lWr ? new r3a(n.attachedData, this, t.event.posx, t.event.posy) : null;
    }
    computeSync() {
        return [];
    }
    computeAsync(t, e, n, i) {
        return t instanceof r3a ? new Ote(async (r)=>{
            const { part: s } = t;
            if (await s.item.resolve(i), i.isCancellationRequested) return;
            let o;
            typeof s.item.hint.tooltip == "string" ? o = new zf().appendText(s.item.hint.tooltip) : s.item.hint.tooltip && (o = s.item.hint.tooltip), o && r.emitOne(new Iwe(this, t.range, [
                o
            ], !1, 0)), CC(s.item.hint.textEdits) && r.emitOne(new Iwe(this, t.range, [
                new zf().appendText(D(1306, null))
            ], !1, 10001));
            let a;
            if (typeof s.part.tooltip == "string" ? a = new zf().appendText(s.part.tooltip) : s.part.tooltip && (a = s.part.tooltip), a && r.emitOne(new Iwe(this, t.range, [
                a
            ], !1, 1)), s.part.location || s.part.command) {
                let c;
                const u = this._editor.getOption(79) === "altKey", d = D(u ? _r ? 1307 : 1308 : _r ? 1309 : 1310, null);
                s.part.location && s.part.command ? c = new zf().appendText(D(1311, null, d)) : s.part.location ? c = new zf().appendText(D(1312, null, d)) : s.part.command && (c = new zf(`[${D(1313, null)}](${oKd(s.part.command)} "${s.part.command.title}") (${d})`, {
                    isTrusted: !0
                })), c && r.emitOne(new Iwe(this, t.range, [
                    c
                ], !1, 1e4));
            }
            const l = await this._resolveInlayHintLabelPartHover(s, i);
            for await (const c of l)r.emitOne(c);
        }) : Ote.EMPTY;
    }
    async _resolveInlayHintLabelPartHover(t, e) {
        if (!t.part.location) return Ote.EMPTY;
        const { uri: n, range: i } = t.part.location, r = await this._resolverService.createModelReference(n);
        try {
            const s = r.object.textEditorModel;
            return this._languageFeaturesService.hoverProvider.has(s) ? vzo(this._languageFeaturesService.hoverProvider, s, new er(i.startLineNumber, i.startColumn), e).filter((o)=>!Gfn(o.hover.contents)).map((o)=>new Iwe(this, t.item.anchor.range, o.hover.contents, !1, 2 + o.ordinal)) : Ote.EMPTY;
        } finally{
            r.dispose();
        }
    }
}, Jbi = Re([
    F(1, Ph),
    F(2, kc),
    F(3, Al),
    F(4, av),
    F(5, yi),
    F(6, Rh),
    F(7, Nd),
    F(8, nr)
], Jbi);

}
