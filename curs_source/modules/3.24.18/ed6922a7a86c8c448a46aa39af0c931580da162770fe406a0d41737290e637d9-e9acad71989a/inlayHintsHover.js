import { Ai, S, iy, jn } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { dr } from "./arrays.js";
import { bn, eW } from "./async.js";
import { $n, vi } from "./commands.js";
import { Cn, qt } from "./configuration.js";
import { j$c } from "./getHover.js";
import { du, va } from "./hover.js";
import { HFt, ife } from "./hoverTypes.js";
import { Ec, _g } from "./htmlContent.js";
import { nrs } from "./inlayHints.js";
import { G9i, j$s, yse } from "./inlayHintsController.js";
import { no, qr } from "./keybinding.js";
import { kl, pc } from "./language.js";
import { Jc, kh } from "./languageFeatures.js";
import { Ble, Qvn, qFt } from "./markdownHoverParticipant.js";
import { rt } from "./nls.js";
import { eo, ko } from "./opener.js";
import { Yn, ya } from "./position.js";
import { Vis, mHc, pFt } from "./qIc.js";
import { Nl, bc } from "./resolverService.js";
import { Mv, NOt } from "./textModel.js";
import { x } from "./tslib.es6.js";
var q$s, sRn;
export { q$s, sRn };
var __wakaru_$ku_initialized = false;
export function $ku() {
if (__wakaru_$ku_initialized) return;
__wakaru_$ku_initialized = true;
"use strict";
x(), bn(), _g(), ya(), Mv(), ife(), kl(), Nl(), j$c(), Qvn(), j$s(), Cn(), ko(), kh(), rt(), jn(), nrs(), dr(), no(), du(), vi(), q$s = class extends HFt {
    constructor(e, t, n, i){
        super(10, t, e.item.anchor.range, n, i, !0), this.part = e;
    }
}, sRn = class extends qFt {
    constructor(e, t, n, i, r, s, o, a, c){
        super(e, t, n, s, a, i, r, c), this._resolverService = o, this.hoverOrdinal = 6;
    }
    suggestHoverAnchor(e) {
        if (!yse.get(this._editor) || e.target.type !== 6) return null;
        const n = e.target.detail.injectedText?.options;
        return n instanceof NOt && n.attachedData instanceof G9i ? new q$s(n.attachedData, this, e.event.posx, e.event.posy) : null;
    }
    computeSync() {
        return [];
    }
    computeAsync(e, t, n, i) {
        return e instanceof q$s ? new eW(async (r)=>{
            const { part: s } = e;
            if (await s.item.resolve(i), i.isCancellationRequested) return;
            let o;
            typeof s.item.hint.tooltip == "string" ? o = new Ec().appendText(s.item.hint.tooltip) : s.item.hint.tooltip && (o = s.item.hint.tooltip), o && r.emitOne(new Ble(this, e.range, [
                o
            ], !1, 0)), iy(s.item.hint.textEdits) && r.emitOne(new Ble(this, e.range, [
                new Ec().appendText(S(1306, null))
            ], !1, 10001));
            let a;
            if (typeof s.part.tooltip == "string" ? a = new Ec().appendText(s.part.tooltip) : s.part.tooltip && (a = s.part.tooltip), a && r.emitOne(new Ble(this, e.range, [
                a
            ], !1, 1)), s.part.location || s.part.command) {
                let l;
                const u = this._editor.getOption(79) === "altKey", h = S(u ? Ai ? 1307 : 1308 : Ai ? 1309 : 1310, null);
                s.part.location && s.part.command ? l = new Ec().appendText(S(1311, null, h)) : s.part.location ? l = new Ec().appendText(S(1312, null, h)) : s.part.command && (l = new Ec(`[${S(1313, null)}](${mHc(s.part.command)} "${s.part.command.title}") (${h})`, {
                    isTrusted: !0
                })), l && r.emitOne(new Ble(this, e.range, [
                    l
                ], !1, 1e4));
            }
            const c = await this._resolveInlayHintLabelPartHover(s, i);
            for await (const l of c)r.emitOne(l);
        }) : eW.EMPTY;
    }
    async _resolveInlayHintLabelPartHover(e, t) {
        if (!e.part.location) return eW.EMPTY;
        const { uri: n, range: i } = e.part.location, r = await this._resolverService.createModelReference(n);
        try {
            const s = r.object.textEditorModel;
            return this._languageFeaturesService.hoverProvider.has(s) ? Vis(this._languageFeaturesService.hoverProvider, s, new Yn(i.startLineNumber, i.startColumn), t).filter((o)=>!pFt(o.hover.contents)).map((o)=>new Ble(this, e.item.anchor.range, o.hover.contents, !1, 2 + o.ordinal)) : eW.EMPTY;
        } finally{
            r.dispose();
        }
    }
}, sRn = ie([
    C(1, pc),
    C(2, eo),
    C(3, qr),
    C(4, va),
    C(5, qt),
    C(6, bc),
    C(7, Jc),
    C(8, $n)
], sRn);

}
