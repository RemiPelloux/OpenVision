import { KL, S, Se, jn, we } from "./HVr.js";
import { Vo, er } from "./actions.js";
import { Pe, _i } from "./codicons.js";
import { en, zp } from "./dom_2.js";
import { rt } from "./nls.js";
import { Nk } from "./qIc.js";
import { Ft, Sr } from "./themables.js";
import { x } from "./tslib.es6.js";
var c7c;
export { c7c };
var __wakaru_dSg_initialized = false;
export function dSg() {
if (__wakaru_dSg_initialized) return;
__wakaru_dSg_initialized = true;
"use strict";
x(), en(), Vo(), _i(), Se(), jn(), Sr(), rt(), c7c = class extends we {
    constructor(e, t, n, i, r, s, o, a, c){
        super(), this._getViewZoneId = e, this._marginDomNode = t, this._modifiedEditor = n, this._diff = i, this._editor = r, this._viewLineCounts = s, this._originalTextModel = o, this._contextMenuService = a, this._clipboardService = c, this._visibility = !1, this._marginDomNode.style.zIndex = "10", this._diffActions = document.createElement("div"), this._editor.getModifiedEditor()?.getIsMultiDiffEditor?.() || (this._diffActions.className = Ft.asClassName(Pe.lightBulb) + " lightbulb-glyph"), this._diffActions.style.position = "absolute";
        const l = this._modifiedEditor.getOption(68);
        this._diffActions.style.right = "0px", this._diffActions.style.visibility = "hidden", this._diffActions.style.height = `${l}px`, this._diffActions.style.lineHeight = `${l}px`, this._marginDomNode.appendChild(this._diffActions);
        let u = 0;
        const h = n.getOption(132) && !KL, p = (g, f)=>{
            this._contextMenuService.showContextMenu({
                domForShadowRoot: h ? n.getDomNode() ?? void 0 : void 0,
                getAnchor: ()=>({
                        x: g,
                        y: f
                    }),
                getActions: ()=>{
                    const v = [], b = i.modified.isEmpty;
                    return v.push(new er("diff.clipboard.copyDeletedContent", b ? i.original.length > 1 ? S(231, null) : S(232, null) : i.original.length > 1 ? S(233, null) : S(234, null), void 0, !0, async ()=>{
                        const T = this._originalTextModel.getValueInRange(i.original.toExclusiveRange());
                        await this._clipboardService.writeText(T);
                    })), i.original.length > 1 && v.push(new er("diff.clipboard.copyDeletedLineContent", S(b ? 235 : 236, null, i.original.startLineNumber + u), void 0, !0, async ()=>{
                        let T = this._originalTextModel.getLineContent(i.original.startLineNumber + u);
                        T === "" && (T = this._originalTextModel.getEndOfLineSequence() === 0 ? `
` : `\r
`), await this._clipboardService.writeText(T);
                    })), n.getOption(96) || v.push(new er("diff.inline.revertChange", S(237, null), void 0, !0, async ()=>{
                        this._editor.revert(this._diff);
                    })), v;
                },
                autoSelectFirstItem: !0
            });
        };
        this._register(zp(this._diffActions, "mousedown", (g)=>{
            if (!g.leftButton) return;
            const { top: f, height: v } = Nk(this._diffActions), b = Math.floor(l / 3);
            g.preventDefault(), p(g.posx, f + v + b);
        })), this._register(n.onMouseMove((g)=>{
            (g.target.type === 8 || g.target.type === 5) && g.target.detail.viewZoneId === this._getViewZoneId() ? (u = this._updateLightBulbPosition(this._marginDomNode, g.event.browserEvent.y, l), this.visibility = !0) : this.visibility = !1;
        })), this._register(n.onMouseDown((g)=>{
            g.event.rightButton && (g.target.type === 8 || g.target.type === 5) && g.target.detail.viewZoneId === this._getViewZoneId() && (g.event.preventDefault(), u = this._updateLightBulbPosition(this._marginDomNode, g.event.browserEvent.y, l), p(g.event.posx, g.event.posy + l));
        }));
    }
    get visibility() {
        return this._visibility;
    }
    set visibility(e) {
        this._visibility !== e && (this._visibility = e, this._diffActions.style.visibility = e ? "visible" : "hidden");
    }
    _updateLightBulbPosition(e, t, n) {
        const { top: i } = Nk(e), r = t - i, s = Math.floor(r / n), o = s * n;
        if (this._diffActions.style.top = `${o}px`, this._viewLineCounts) {
            let a = 0;
            for(let c = 0; c < this._viewLineCounts.length; c++)if (a += this._viewLineCounts[c], s < a) return c;
        }
        return s;
    }
};

}
