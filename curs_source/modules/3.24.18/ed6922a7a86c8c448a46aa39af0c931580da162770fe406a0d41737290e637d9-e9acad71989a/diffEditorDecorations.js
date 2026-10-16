import { Se, we } from "./HVr.js";
import { ryi } from "./diffEditorViewZones.js";
import { Nvn, p7c } from "./movedBlocksLinesFeature.js";
import { qa } from "./observable.js";
import { Ds, Obi, jns } from "./qIc.js";
import { Ans, Dns, Evn, G8c, H8c, Mns, Pns, Rns, Tvn, W8c, Xbi } from "./registrations.contribution.js";
import { x } from "./tslib.es6.js";
import { Dle } from "./utils_13.js";
var m7c;
export { m7c };
var __wakaru_hSg_initialized = false;
export function hSg() {
if (__wakaru_hSg_initialized) return;
__wakaru_hSg_initialized = true;
"use strict";
x(), Se(), qa(), ryi(), p7c(), Evn(), Dle(), m7c = class extends we {
    constructor(e, t, n, i){
        super(), this._editors = e, this._diffModel = t, this._options = n, this._decorations = Ds(this, (r)=>{
            const s = this._diffModel.read(r), o = s?.diff.read(r);
            if (!o) return null;
            const a = this._diffModel.read(r).movedTextToCompare.read(r), c = this._options.renderIndicators.read(r), l = this._options.showEmptyDecorations.read(r), u = [], h = [];
            if (!a) for (const g of o.mappings)if (g.lineRangeMapping.original.isEmpty || u.push({
                range: g.lineRangeMapping.original.toInclusiveRange(),
                options: c ? Rns : Mns
            }), g.lineRangeMapping.modified.isEmpty || h.push({
                range: g.lineRangeMapping.modified.toInclusiveRange(),
                options: c ? Ans : Dns
            }), g.lineRangeMapping.modified.isEmpty || g.lineRangeMapping.original.isEmpty) g.lineRangeMapping.original.isEmpty || u.push({
                range: g.lineRangeMapping.original.toInclusiveRange(),
                options: W8c
            }), g.lineRangeMapping.modified.isEmpty || h.push({
                range: g.lineRangeMapping.modified.toInclusiveRange(),
                options: Pns
            });
            else {
                const f = this._options.useTrueInlineDiffRendering.read(r) && jns(g.lineRangeMapping);
                for (const v of g.lineRangeMapping.innerChanges || [])if (g.lineRangeMapping.original.contains(v.originalRange.startLineNumber) && u.push({
                    range: v.originalRange,
                    options: v.originalRange.isEmpty() && l ? G8c : Tvn
                }), g.lineRangeMapping.modified.contains(v.modifiedRange.startLineNumber) && h.push({
                    range: v.modifiedRange,
                    options: v.modifiedRange.isEmpty() && l && !f ? H8c : Xbi
                }), f) {
                    const b = s.model.original.getValueInRange(v.originalRange);
                    h.push({
                        range: v.modifiedRange,
                        options: {
                            description: "deleted-text",
                            before: {
                                content: b,
                                inlineClassName: "inline-deleted-text"
                            },
                            zIndex: 1e5,
                            showIfCollapsed: !0
                        }
                    });
                }
            }
            if (a) for (const g of a.changes){
                const f = g.original.toInclusiveRange();
                f && u.push({
                    range: f,
                    options: c ? Rns : Mns
                });
                const v = g.modified.toInclusiveRange();
                v && h.push({
                    range: v,
                    options: c ? Ans : Dns
                });
                for (const b of g.innerChanges || [])u.push({
                    range: b.originalRange,
                    options: Tvn
                }), h.push({
                    range: b.modifiedRange,
                    options: Xbi
                });
            }
            const p = this._diffModel.read(r).activeMovedText.read(r);
            for (const g of o.movedTexts)u.push({
                range: g.lineRangeMapping.original.toInclusiveRange(),
                options: {
                    description: "moved",
                    blockClassName: "movedOriginal" + (g === p ? " currentMove" : ""),
                    blockPadding: [
                        Nvn.movedCodeBlockPadding,
                        0,
                        Nvn.movedCodeBlockPadding,
                        Nvn.movedCodeBlockPadding
                    ]
                }
            }), h.push({
                range: g.lineRangeMapping.modified.toInclusiveRange(),
                options: {
                    description: "moved",
                    blockClassName: "movedModified" + (g === p ? " currentMove" : ""),
                    blockPadding: [
                        4,
                        0,
                        4,
                        4
                    ]
                }
            });
            return {
                originalDecorations: u,
                modifiedDecorations: h
            };
        }), this._register(Obi(this._editors.original, this._decorations.map((r)=>r?.originalDecorations || []))), this._register(Obi(this._editors.modified, this._decorations.map((r)=>r?.modifiedDecorations || [])));
    }
};

}
