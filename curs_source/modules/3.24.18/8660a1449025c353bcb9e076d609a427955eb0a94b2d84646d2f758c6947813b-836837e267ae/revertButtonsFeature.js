import { D, Pn, Qe, st } from "./Iwo.js";
import { gs, yt } from "./codicons.js";
import { Hn, Pr } from "./dom_2.js";
import { bW } from "./iconLabels_2.js";
import { DD, eyt, wd } from "./lineRange.js";
import { J0, ihe } from "./model_2.js";
import { Bt } from "./nls.js";
import { Jc } from "./observable.js";
import { Qs, qt } from "./range.js";
import { Swe, ywe } from "./rangeMapping.js";
import { E } from "./tslib.es6.js";
import { DI, Zo, li, n_e, xv } from "./ze.js";
var JTr, kzd, Rqo, Pqo;
export { JTr, Pqo, Rqo, kzd };
var __wakaru_ALy_initialized = false;
export function ALy() {
if (__wakaru_ALy_initialized) return;
__wakaru_ALy_initialized = true;
"use strict";
E(), Hn(), bW(), gs(), Qe(), Jc(), DD(), Qs(), Swe(), J0(), Bt(), JTr = [], kzd = class extends st {
    constructor(t, e, n, i){
        super(), this._editors = t, this._diffModel = e, this._options = n, this._widget = i, this._selectedDiffs = Zo(this, (r)=>{
            const o = this._diffModel.read(r)?.diff.read(r);
            if (!o) return JTr;
            const a = this._editors.modifiedSelections.read(r);
            if (a.every((d)=>d.isEmpty())) return JTr;
            const l = new eyt(a.map((d)=>wd.fromRangeInclusive(d))), u = o.mappings.filter((d)=>d.lineRangeMapping.innerChanges && l.intersects(d.lineRangeMapping.modified)).map((d)=>({
                    mapping: d,
                    rangeMappings: d.lineRangeMapping.innerChanges.filter((h)=>a.some((p)=>qt.areIntersecting(h.modifiedRange, p)))
                }));
            return u.length === 0 || u.every((d)=>d.rangeMappings.length === 0) ? JTr : u;
        }), this._register(DI((r, s)=>{
            if (!this._options.shouldRenderOldRevertArrows.read(r)) return;
            const o = this._diffModel.read(r), a = o?.diff.read(r);
            if (!o || !a || o.movedTextToCompare.read(r)) return;
            const l = [], c = this._selectedDiffs.read(r), u = new Set(c.map((d)=>d.mapping));
            if (c.length > 0) {
                const d = this._editors.modifiedSelections.read(r), h = s.add(new Pqo(d[d.length - 1].positionLineNumber, this._widget, c.flatMap((p)=>p.rangeMappings), !0));
                this._editors.modified.addGlyphMarginWidget(h), l.push(h);
            }
            for (const d of a.mappings)if (!u.has(d) && !d.lineRangeMapping.modified.isEmpty && d.lineRangeMapping.innerChanges) {
                const h = s.add(new Pqo(d.lineRangeMapping.modified.startLineNumber, this._widget, d.lineRangeMapping, !1));
                this._editors.modified.addGlyphMarginWidget(h), l.push(h);
            }
            s.add(Pn(()=>{
                for (const d of l)this._editors.modified.removeGlyphMarginWidget(d);
            }));
        }));
    }
}, Rqo = class vRb extends st {
    constructor(e, n, i, r){
        super(), this._lineNumber = e, this._widget = n, this._diffs = i, this._revertSelection = r, this._id = `revertButton${vRb.counter++}`, this._domNode = xv("div.revertButton", {
            title: this._revertSelection ? D(257, null) : D(258, null)
        }, [
            n_e(yt.arrowRight)
        ]).root, this._register(li(this._domNode, Pr.MOUSE_DOWN, (s)=>{
            s.button !== 2 && (s.stopPropagation(), s.preventDefault());
        })), this._register(li(this._domNode, Pr.MOUSE_UP, (s)=>{
            s.stopPropagation(), s.preventDefault();
        })), this._register(li(this._domNode, Pr.CLICK, (s)=>{
            this._diffs instanceof ywe ? this._widget.revert(this._diffs) : this._widget.revertRangeMappings(this._diffs), s.stopPropagation(), s.preventDefault();
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
            lane: ihe.Right,
            range: {
                startColumn: 1,
                startLineNumber: this._lineNumber,
                endColumn: 1,
                endLineNumber: this._lineNumber
            },
            zIndex: 10001
        };
    }
}, Rqo.counter = 0, Pqo = Rqo;

}
