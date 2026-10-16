import { Ftt, IQ } from "./length.js";
import { E } from "./tslib.es6.js";
import { Fjo, Fri, Jgn, ND } from "./ze.js";
var XBd;
export { XBd };
var __wakaru_K2y_initialized = false;
export function K2y() {
if (__wakaru_K2y_initialized) return;
__wakaru_K2y_initialized = true;
"use strict";
E(), Ftt(), XBd = class {
    constructor(t){
        this.lastOffset = IQ, this.nextNodes = [
            t
        ], this.offsets = [
            IQ
        ], this.idxs = [];
    }
    readLongestNodeAt(t, e) {
        if (Jgn(t, this.lastOffset)) throw new Error("Invalid offset");
        for(this.lastOffset = t;;){
            const n = Fri(this.nextNodes);
            if (!n) return;
            const i = Fri(this.offsets);
            if (Jgn(t, i)) return;
            if (Jgn(i, t)) if (ND(i, n.length) <= t) this.nextNodeAfterCurrent();
            else {
                const r = Fjo(n);
                r !== -1 ? (this.nextNodes.push(n.getChild(r)), this.offsets.push(i), this.idxs.push(r)) : this.nextNodeAfterCurrent();
            }
            else {
                if (e(n)) return this.nextNodeAfterCurrent(), n;
                {
                    const r = Fjo(n);
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
            const t = Fri(this.offsets), e = Fri(this.nextNodes);
            if (this.nextNodes.pop(), this.offsets.pop(), this.idxs.length === 0) break;
            const n = Fri(this.nextNodes), i = Fjo(n, this.idxs[this.idxs.length - 1]);
            if (i !== -1) {
                this.nextNodes.push(n.getChild(i)), this.offsets.push(ND(t, e.length)), this.idxs[this.idxs.length - 1] = i;
                break;
            } else this.idxs.pop();
        }
    }
};

}
