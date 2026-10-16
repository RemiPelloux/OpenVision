import { Qe, st } from "./Iwo.js";
import { LTr } from "./diffEditorViewZones.js";
import { $qd, uoi } from "./movedBlocksLinesFeature.js";
import { Jc } from "./observable.js";
import { BGo, CTr, FGo, LGo, NGo, OGo, fqd, gqd, mqd, vqd, wTr } from "./registrations.contribution.js";
import { E } from "./tslib.es6.js";
import { bwe } from "./utils_13.js";
import { XGo, Zo, lTr } from "./ze.js";
var Hqd;
export { Hqd };
var __wakaru_oLy_initialized = false;
export function oLy() {
if (__wakaru_oLy_initialized) return;
__wakaru_oLy_initialized = true;
"use strict";
E(), Qe(), Jc(), LTr(), $qd(), CTr(), bwe(), Hqd = class extends st {
    constructor(t, e, n, i){
        super(), this._editors = t, this._diffModel = e, this._options = n, this._decorations = Zo(this, (r)=>{
            const s = this._diffModel.read(r), o = s?.diff.read(r);
            if (!o) return null;
            const a = this._diffModel.read(r).movedTextToCompare.read(r), l = this._options.renderIndicators.read(r), c = this._options.showEmptyDecorations.read(r), u = [], d = [];
            if (!a) for (const p of o.mappings)if (p.lineRangeMapping.original.isEmpty || u.push({
                range: p.lineRangeMapping.original.toInclusiveRange(),
                options: l ? LGo : FGo
            }), p.lineRangeMapping.modified.isEmpty || d.push({
                range: p.lineRangeMapping.modified.toInclusiveRange(),
                options: l ? NGo : OGo
            }), p.lineRangeMapping.modified.isEmpty || p.lineRangeMapping.original.isEmpty) p.lineRangeMapping.original.isEmpty || u.push({
                range: p.lineRangeMapping.original.toInclusiveRange(),
                options: fqd
            }), p.lineRangeMapping.modified.isEmpty || d.push({
                range: p.lineRangeMapping.modified.toInclusiveRange(),
                options: mqd
            });
            else {
                const g = this._options.useTrueInlineDiffRendering.read(r) && XGo(p.lineRangeMapping);
                for (const f of p.lineRangeMapping.innerChanges || [])if (p.lineRangeMapping.original.contains(f.originalRange.startLineNumber) && u.push({
                    range: f.originalRange,
                    options: f.originalRange.isEmpty() && c ? vqd : wTr
                }), p.lineRangeMapping.modified.contains(f.modifiedRange.startLineNumber) && d.push({
                    range: f.modifiedRange,
                    options: f.modifiedRange.isEmpty() && c && !g ? gqd : BGo
                }), g) {
                    const _ = s.model.original.getValueInRange(f.originalRange);
                    d.push({
                        range: f.modifiedRange,
                        options: {
                            description: "deleted-text",
                            before: {
                                content: _,
                                inlineClassName: "inline-deleted-text"
                            },
                            zIndex: 1e5,
                            showIfCollapsed: !0
                        }
                    });
                }
            }
            if (a) for (const p of a.changes){
                const g = p.original.toInclusiveRange();
                g && u.push({
                    range: g,
                    options: l ? LGo : FGo
                });
                const f = p.modified.toInclusiveRange();
                f && d.push({
                    range: f,
                    options: l ? NGo : OGo
                });
                for (const _ of p.innerChanges || [])u.push({
                    range: _.originalRange,
                    options: wTr
                }), d.push({
                    range: _.modifiedRange,
                    options: BGo
                });
            }
            const h = this._diffModel.read(r).activeMovedText.read(r);
            for (const p of o.movedTexts)u.push({
                range: p.lineRangeMapping.original.toInclusiveRange(),
                options: {
                    description: "moved",
                    blockClassName: "movedOriginal" + (p === h ? " currentMove" : ""),
                    blockPadding: [
                        uoi.movedCodeBlockPadding,
                        0,
                        uoi.movedCodeBlockPadding,
                        uoi.movedCodeBlockPadding
                    ]
                }
            }), d.push({
                range: p.lineRangeMapping.modified.toInclusiveRange(),
                options: {
                    description: "moved",
                    blockClassName: "movedModified" + (p === h ? " currentMove" : ""),
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
                modifiedDecorations: d
            };
        }), this._register(lTr(this._editors.original, this._decorations.map((r)=>r?.originalDecorations || []))), this._register(lTr(this._editors.modified, this._decorations.map((r)=>r?.modifiedDecorations || [])));
    }
};

}
