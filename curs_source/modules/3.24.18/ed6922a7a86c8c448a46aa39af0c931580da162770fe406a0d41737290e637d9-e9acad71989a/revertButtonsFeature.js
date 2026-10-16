import { S, Se, rn, we } from "./HVr.js";
import { Pe, _i } from "./codicons.js";
import { Fn, en } from "./dom_2.js";
import { DE } from "./iconLabels_2.js";
import { Vl, hA, wze } from "./lineRange.js";
import { Cb, nU } from "./model_2.js";
import { rt } from "./nls.js";
import { qa } from "./observable.js";
import { Ds, Xt, cu, h5, tw } from "./qIc.js";
import { dt, qi } from "./range.js";
import { Mle, Ple } from "./rangeMapping.js";
import { x } from "./tslib.es6.js";
var _yi, z7c, Tis, Eis;
export { Eis, Tis, _yi, z7c };
var __wakaru_PSg_initialized = false;
export function PSg() {
if (__wakaru_PSg_initialized) return;
__wakaru_PSg_initialized = true;
"use strict";
x(), en(), DE(), _i(), Se(), qa(), hA(), qi(), Ple(), Cb(), rt(), _yi = [], z7c = class extends we {
    constructor(e, t, n, i){
        super(), this._editors = e, this._diffModel = t, this._options = n, this._widget = i, this._selectedDiffs = Ds(this, (r)=>{
            const o = this._diffModel.read(r)?.diff.read(r);
            if (!o) return _yi;
            const a = this._editors.modifiedSelections.read(r);
            if (a.every((h)=>h.isEmpty())) return _yi;
            const c = new wze(a.map((h)=>Vl.fromRangeInclusive(h))), u = o.mappings.filter((h)=>h.lineRangeMapping.innerChanges && c.intersects(h.lineRangeMapping.modified)).map((h)=>({
                    mapping: h,
                    rangeMappings: h.lineRangeMapping.innerChanges.filter((p)=>a.some((g)=>dt.areIntersecting(p.modifiedRange, g)))
                }));
            return u.length === 0 || u.every((h)=>h.rangeMappings.length === 0) ? _yi : u;
        }), this._register(tw((r, s)=>{
            if (!this._options.shouldRenderOldRevertArrows.read(r)) return;
            const o = this._diffModel.read(r), a = o?.diff.read(r);
            if (!o || !a || o.movedTextToCompare.read(r)) return;
            const c = [], l = this._selectedDiffs.read(r), u = new Set(l.map((h)=>h.mapping));
            if (l.length > 0) {
                const h = this._editors.modifiedSelections.read(r), p = s.add(new Eis(h[h.length - 1].positionLineNumber, this._widget, l.flatMap((g)=>g.rangeMappings), !0));
                this._editors.modified.addGlyphMarginWidget(p), c.push(p);
            }
            for (const h of a.mappings)if (!u.has(h) && !h.lineRangeMapping.modified.isEmpty && h.lineRangeMapping.innerChanges) {
                const p = s.add(new Eis(h.lineRangeMapping.modified.startLineNumber, this._widget, h.lineRangeMapping, !1));
                this._editors.modified.addGlyphMarginWidget(p), c.push(p);
            }
            s.add(rn(()=>{
                for (const h of c)this._editors.modified.removeGlyphMarginWidget(h);
            }));
        }));
    }
}, Tis = class qkm extends we {
    constructor(t, n, i, r){
        super(), this._lineNumber = t, this._widget = n, this._diffs = i, this._revertSelection = r, this._id = `revertButton${qkm.counter++}`, this._domNode = cu("div.revertButton", {
            title: this._revertSelection ? S(257, null) : S(258, null)
        }, [
            h5(Pe.arrowRight)
        ]).root, this._register(Xt(this._domNode, Fn.MOUSE_DOWN, (s)=>{
            s.button !== 2 && (s.stopPropagation(), s.preventDefault());
        })), this._register(Xt(this._domNode, Fn.MOUSE_UP, (s)=>{
            s.stopPropagation(), s.preventDefault();
        })), this._register(Xt(this._domNode, Fn.CLICK, (s)=>{
            this._diffs instanceof Mle ? this._widget.revert(this._diffs) : this._widget.revertRangeMappings(this._diffs), s.stopPropagation(), s.preventDefault();
        }));
    }
    getId() {
        return this._id;
    }
    getDomNode() {
        return this._domNode;
    }
    getPosition() {
        return {
            lane: nU.Right,
            range: {
                startColumn: 1,
                startLineNumber: this._lineNumber,
                endColumn: 1,
                endLineNumber: this._lineNumber
            },
            zIndex: 10001
        };
    }
}, Tis.counter = 0, Eis = Tis;

}
