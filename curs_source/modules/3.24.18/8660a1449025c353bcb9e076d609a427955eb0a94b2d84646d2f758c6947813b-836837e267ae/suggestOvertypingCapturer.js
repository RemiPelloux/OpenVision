import { Nt, Qe } from "./Iwo.js";
import { E } from "./tslib.es6.js";
var iNa, gDp;
export { gDp, iNa };
var __wakaru_wx1_initialized = false;
export function wx1() {
if (__wakaru_wx1_initialized) return;
__wakaru_wx1_initialized = true;
"use strict";
E(), Qe(), iNa = class O2b {
    constructor(e, n){
        this._disposables = new Nt, this._lastOvertyped = [], this._locked = !1, this._disposables.add(e.onWillType(()=>{
            if (this._locked || !e.hasModel()) return;
            const i = e.getSelections(), r = i.length;
            let s = !1;
            for(let a = 0; a < r; a++)if (!i[a].isEmpty()) {
                s = !0;
                break;
            }
            if (!s) {
                this._lastOvertyped.length !== 0 && (this._lastOvertyped.length = 0);
                return;
            }
            this._lastOvertyped = [];
            const o = e.getModel();
            for(let a = 0; a < r; a++){
                const l = i[a];
                if (o.getValueLengthInRange(l) > O2b._maxSelectionLength) return;
                this._lastOvertyped[a] = {
                    value: o.getValueInRange(l),
                    multiline: l.startLineNumber !== l.endLineNumber
                };
            }
        })), this._disposables.add(n.onDidTrigger((i)=>{
            this._locked = !0;
        })), this._disposables.add(n.onDidCancel((i)=>{
            this._locked = !1;
        }));
    }
    getLastOvertypedInfo(e) {
        if (e >= 0 && e < this._lastOvertyped.length) return this._lastOvertyped[e];
    }
    dispose() {
        this._disposables.dispose();
    }
}, iNa._maxSelectionLength = 51200, gDp = iNa;

}
