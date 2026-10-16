import { Gt, Qe, st, tt } from "./Iwo.js";
import { Cjo, Sjo, Tjo, bBd, doe, kjo, wjo, yjo } from "./editorColorRegistry.js";
import { Qs, qt } from "./range.js";
import { Dl } from "./themeService.js";
import { E } from "./tslib.es6.js";
import { nne } from "./ze.js";
var o8d, Hjo;
export { Hjo, o8d };
var __wakaru_Q2y_initialized = false;
export function Q2y() {
if (__wakaru_Q2y_initialized) return;
__wakaru_Q2y_initialized = true;
"use strict";
E(), Gt(), Qe(), Qs(), doe(), Dl(), o8d = class extends st {
    constructor(t){
        super(), this.textModel = t, this.colorProvider = new Hjo, this.onDidChangeEmitter = this._register(new tt), this.onDidChange = this.onDidChangeEmitter.event, this.colorizationOptions = t.getOptions().bracketPairColorizationOptions, this._register(t.bracketPairs.onDidChange((e)=>{
            this.onDidChangeEmitter.fire();
        }));
    }
    handleDidChangeOptions(t) {
        this.colorizationOptions = this.textModel.getOptions().bracketPairColorizationOptions;
    }
    getDecorationsInRange(t, e, n, i) {
        return i ? [] : e === void 0 ? [] : this.colorizationOptions.enabled ? this.textModel.bracketPairs.getBracketsInRange(t, !0).map((s)=>({
                id: `bracket${s.range.toString()}-${s.nestingLevel}`,
                options: {
                    description: "BracketPairColorization",
                    inlineClassName: this.colorProvider.getInlineClassName(s, this.colorizationOptions.independentColorPoolPerBracketType)
                },
                ownerId: 0,
                range: s.range
            })).toArray() : [];
    }
    getAllDecorations(t, e) {
        return t === void 0 ? [] : this.colorizationOptions.enabled ? this.getDecorationsInRange(new qt(1, 1, this.textModel.getLineCount(), 1), t, e) : [];
    }
}, Hjo = class {
    constructor(){
        this.unexpectedClosingBracketClassName = "unexpected-closing-bracket";
    }
    getInlineClassName(t, e) {
        return t.isInvalid ? this.unexpectedClosingBracketClassName : this.getInlineClassNameOfLevel(e ? t.nestingLevelOfEqualBracketType : t.nestingLevel);
    }
    getInlineClassNameOfLevel(t) {
        return `bracket-highlighting-${t % 30}`;
    }
}, nne((t, e)=>{
    const n = [
        yjo,
        Sjo,
        kjo,
        wjo,
        Cjo,
        Tjo
    ], i = new Hjo;
    e.addRule(`.monaco-editor .${i.unexpectedClosingBracketClassName} { color: ${t.getColor(bBd)}; }`);
    const r = n.map((s)=>t.getColor(s)).filter((s)=>!!s).filter((s)=>!s.isTransparent());
    for(let s = 0; s < 30; s++){
        const o = r[s % r.length];
        e.addRule(`.monaco-editor .${i.getInlineClassNameOfLevel(s)} { color: ${o}; }`);
    }
});

}
