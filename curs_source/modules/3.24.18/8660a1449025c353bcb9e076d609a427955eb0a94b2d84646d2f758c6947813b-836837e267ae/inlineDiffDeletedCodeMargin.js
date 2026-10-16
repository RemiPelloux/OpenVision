import { D, Di, Qe, st, tY } from "./Iwo.js";
import { vu, za } from "./actions.js";
import { gs, yt } from "./codicons.js";
import { Hn, n0 } from "./dom_2.js";
import { Bt } from "./nls.js";
import { Gn, ta } from "./themables.js";
import { E } from "./tslib.es6.js";
import { Ex } from "./ze.js";
var Oqd;
export { Oqd };
var __wakaru_sLy_initialized = false;
export function sLy() {
if (__wakaru_sLy_initialized) return;
__wakaru_sLy_initialized = true;
"use strict";
E(), Hn(), vu(), gs(), Qe(), Di(), ta(), Bt(), Oqd = class extends st {
    constructor(t, e, n, i, r, s, o, a, l){
        super(), this._getViewZoneId = t, this._marginDomNode = e, this._modifiedEditor = n, this._diff = i, this._editor = r, this._viewLineCounts = s, this._originalTextModel = o, this._contextMenuService = a, this._clipboardService = l, this._visibility = !1, this._marginDomNode.style.zIndex = "10", this._diffActions = document.createElement("div"), this._editor.getModifiedEditor()?.getIsMultiDiffEditor?.() || (this._diffActions.className = Gn.asClassName(yt.lightBulb) + " lightbulb-glyph"), this._diffActions.style.position = "absolute";
        const c = this._modifiedEditor.getOption(68);
        this._diffActions.style.right = "0px", this._diffActions.style.visibility = "hidden", this._diffActions.style.height = `${c}px`, this._diffActions.style.lineHeight = `${c}px`, this._marginDomNode.appendChild(this._diffActions);
        let u = 0;
        const d = n.getOption(132) && !tY, h = (p, g)=>{
            this._contextMenuService.showContextMenu({
                domForShadowRoot: d ? n.getDomNode() ?? void 0 : void 0,
                getAnchor: ()=>({
                        x: p,
                        y: g
                    }),
                getActions: ()=>{
                    const f = [], _ = i.modified.isEmpty;
                    return f.push(new za("diff.clipboard.copyDeletedContent", _ ? i.original.length > 1 ? D(231, null) : D(232, null) : i.original.length > 1 ? D(233, null) : D(234, null), void 0, !0, async ()=>{
                        const y = this._originalTextModel.getValueInRange(i.original.toExclusiveRange());
                        await this._clipboardService.writeText(y);
                    })), i.original.length > 1 && f.push(new za("diff.clipboard.copyDeletedLineContent", D(_ ? 235 : 236, null, i.original.startLineNumber + u), void 0, !0, async ()=>{
                        let y = this._originalTextModel.getLineContent(i.original.startLineNumber + u);
                        y === "" && (y = this._originalTextModel.getEndOfLineSequence() === 0 ? `
` : `\r
`), await this._clipboardService.writeText(y);
                    })), n.getOption(96) || f.push(new za("diff.inline.revertChange", D(237, null), void 0, !0, async ()=>{
                        this._editor.revert(this._diff);
                    })), f;
                },
                autoSelectFirstItem: !0
            });
        };
        this._register(n0(this._diffActions, "mousedown", (p)=>{
            if (!p.leftButton) return;
            const { top: g, height: f } = Ex(this._diffActions), _ = Math.floor(c / 3);
            p.preventDefault(), h(p.posx, g + f + _);
        })), this._register(n.onMouseMove((p)=>{
            (p.target.type === 8 || p.target.type === 5) && p.target.detail.viewZoneId === this._getViewZoneId() ? (u = this._updateLightBulbPosition(this._marginDomNode, p.event.browserEvent.y, c), this.visibility = !0) : this.visibility = !1;
        })), this._register(n.onMouseDown((p)=>{
            p.event.rightButton && (p.target.type === 8 || p.target.type === 5) && p.target.detail.viewZoneId === this._getViewZoneId() && (p.event.preventDefault(), u = this._updateLightBulbPosition(this._marginDomNode, p.event.browserEvent.y, c), h(p.event.posx, p.event.posy + c));
        }));
    }
    get visibility() {
        return this._visibility;
    }
    set visibility(t) {
        this._visibility !== t && (this._visibility = t, this._diffActions.style.visibility = t ? "visible" : "hidden");
    }
    _updateLightBulbPosition(t, e, n) {
        const { top: i } = Ex(t), r = e - i, s = Math.floor(r / n), o = s * n;
        if (this._diffActions.style.top = `${o}px`, this._viewLineCounts) {
            let a = 0;
            for(let l = 0; l < this._viewLineCounts.length; l++)if (a += this._viewLineCounts[l], s < a) return l;
        }
        return s;
    }
};

}
