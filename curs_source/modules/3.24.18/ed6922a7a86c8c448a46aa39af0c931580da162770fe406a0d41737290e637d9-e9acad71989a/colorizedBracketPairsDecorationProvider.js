import { Se, bt, ve, we } from "./HVr.js";
import { HV, VOc, cQr, dQr, hQr, lQr, pQr, uQr } from "./editorColorRegistry.js";
import { kI } from "./qIc.js";
import { dt, qi } from "./range.js";
import { as } from "./themeService.js";
import { x } from "./tslib.es6.js";
var DFc, DQr;
export { DFc, DQr };
var __wakaru_Ygg_initialized = false;
export function Ygg() {
if (__wakaru_Ygg_initialized) return;
__wakaru_Ygg_initialized = true;
"use strict";
x(), bt(), Se(), qi(), HV(), as(), DFc = class extends we {
    constructor(e){
        super(), this.textModel = e, this.colorProvider = new DQr, this.onDidChangeEmitter = this._register(new ve), this.onDidChange = this.onDidChangeEmitter.event, this.colorizationOptions = e.getOptions().bracketPairColorizationOptions, this._register(e.bracketPairs.onDidChange((t)=>{
            this.onDidChangeEmitter.fire();
        }));
    }
    handleDidChangeOptions(e) {
        this.colorizationOptions = this.textModel.getOptions().bracketPairColorizationOptions;
    }
    getDecorationsInRange(e, t, n, i) {
        return i ? [] : t === void 0 ? [] : this.colorizationOptions.enabled ? this.textModel.bracketPairs.getBracketsInRange(e, !0).map((s)=>({
                id: `bracket${s.range.toString()}-${s.nestingLevel}`,
                options: {
                    description: "BracketPairColorization",
                    inlineClassName: this.colorProvider.getInlineClassName(s, this.colorizationOptions.independentColorPoolPerBracketType)
                },
                ownerId: 0,
                range: s.range
            })).toArray() : [];
    }
    getAllDecorations(e, t) {
        return e === void 0 ? [] : this.colorizationOptions.enabled ? this.getDecorationsInRange(new dt(1, 1, this.textModel.getLineCount(), 1), e, t) : [];
    }
}, DQr = class {
    constructor(){
        this.unexpectedClosingBracketClassName = "unexpected-closing-bracket";
    }
    getInlineClassName(e, t) {
        return e.isInvalid ? this.unexpectedClosingBracketClassName : this.getInlineClassNameOfLevel(t ? e.nestingLevelOfEqualBracketType : e.nestingLevel);
    }
    getInlineClassNameOfLevel(e) {
        return `bracket-highlighting-${e % 30}`;
    }
}, kI((e, t)=>{
    const n = [
        cQr,
        lQr,
        uQr,
        dQr,
        hQr,
        pQr
    ], i = new DQr;
    t.addRule(`.monaco-editor .${i.unexpectedClosingBracketClassName} { color: ${e.getColor(VOc)}; }`);
    const r = n.map((s)=>e.getColor(s)).filter((s)=>!!s).filter((s)=>!s.isTransparent());
    for(let s = 0; s < 30; s++){
        const o = r[s % r.length];
        t.addRule(`.monaco-editor .${i.getInlineClassNameOfLevel(s)} { color: ${o}; }`);
    }
});

}
