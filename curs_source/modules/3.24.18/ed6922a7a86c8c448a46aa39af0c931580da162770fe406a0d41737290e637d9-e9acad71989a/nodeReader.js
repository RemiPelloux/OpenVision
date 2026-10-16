import { WBe, uW } from "./length.js";
import { EQr, dOt, nfn, pA } from "./qIc.js";
import { x } from "./tslib.es6.js";
var SFc;
export { SFc };
var __wakaru_jgg_initialized = false;
export function jgg() {
if (__wakaru_jgg_initialized) return;
__wakaru_jgg_initialized = true;
"use strict";
x(), WBe(), SFc = class {
    constructor(e){
        this.lastOffset = uW, this.nextNodes = [
            e
        ], this.offsets = [
            uW
        ], this.idxs = [];
    }
    readLongestNodeAt(e, t) {
        if (dOt(e, this.lastOffset)) throw new Error("Invalid offset");
        for(this.lastOffset = e;;){
            const n = nfn(this.nextNodes);
            if (!n) return;
            const i = nfn(this.offsets);
            if (dOt(e, i)) return;
            if (dOt(i, e)) if (pA(i, n.length) <= e) this.nextNodeAfterCurrent();
            else {
                const r = EQr(n);
                r !== -1 ? (this.nextNodes.push(n.getChild(r)), this.offsets.push(i), this.idxs.push(r)) : this.nextNodeAfterCurrent();
            }
            else {
                if (t(n)) return this.nextNodeAfterCurrent(), n;
                {
                    const r = EQr(n);
                    if (r === -1) {
                        this.nextNodeAfterCurrent();
                        return;
                    } else this.nextNodes.push(n.getChild(r)), this.offsets.push(i), this.idxs.push(r);
                }
            }
        }
    }
    nextNodeAfterCurrent() {
        for(;;){
            const e = nfn(this.offsets), t = nfn(this.nextNodes);
            if (this.nextNodes.pop(), this.offsets.pop(), this.idxs.length === 0) break;
            const n = nfn(this.nextNodes), i = EQr(n, this.idxs[this.idxs.length - 1]);
            if (i !== -1) {
                this.nextNodes.push(n.getChild(i)), this.offsets.push(pA(e, t.length)), this.idxs[this.idxs.length - 1] = i;
                break;
            } else this.idxs.pop();
        }
    }
};

}
