import { Ivi, Tze, bQr, mFc, vwe } from "./ast.js";
import { uFc, wvi } from "./beforeEditPositionMapper.js";
import { Vgg } from "./concat23Trees.js";
import { WBe } from "./length.js";
import { SFc, jgg } from "./nodeReader.js";
import { Hgg, Zgn, bFc, dOt } from "./qIc.js";
import { dre, mOt } from "./smallImmutableSet.js";
import { x } from "./tslib.es6.js";
var kFc;
export { kFc };
var __wakaru_wFc_initialized = false;
export function wFc() {
if (__wakaru_wFc_initialized) return;
__wakaru_wFc_initialized = true;
"use strict";
x(), Ivi(), wvi(), mOt(), WBe(), Vgg(), jgg(), kFc = class {
    constructor(e, t, n, i){
        if (this.tokenizer = e, this.createImmutableLists = i, this._itemsConstructed = 0, this._itemsFromCache = 0, n && i) throw new Error("Not supported");
        this.oldNodeReader = n ? new SFc(n) : void 0, this.positionMapper = new uFc(t);
    }
    get nodesConstructed() {
        return this._itemsConstructed;
    }
    get nodesReused() {
        return this._itemsFromCache;
    }
    parseDocument() {
        this._itemsConstructed = 0, this._itemsFromCache = 0;
        let e = this.parseList(dre.getEmpty(), 0);
        return e || (e = vwe.getEmpty()), e;
    }
    parseList(e, t) {
        const n = [];
        for(;;){
            let r = this.tryReadChildFromCache(e);
            if (!r) {
                const s = this.tokenizer.peek();
                if (!s || s.kind === 0 && Zgn(s.length) || s.kind === 2 && s.bracketIds.intersects(e)) break;
                r = this.parseChild(e, t + 1);
            }
            r.kind === 4 && r.childrenLength === 0 || n.push(r);
        }
        return this.oldNodeReader ? Hgg(n) : bFc(n, this.createImmutableLists);
    }
    tryReadChildFromCache(e) {
        if (this.oldNodeReader) {
            const t = this.positionMapper.getDistanceToNextChange(this.tokenizer.offset);
            if (t === null || !Zgn(t)) {
                const n = this.oldNodeReader.readLongestNodeAt(this.positionMapper.getOffsetBeforeChange(this.tokenizer.offset), (i)=>t !== null && !dOt(i.length, t) ? !1 : i.canBeReused(e));
                if (n) return this._itemsFromCache++, this.tokenizer.skip(n.length), n;
            }
        }
    }
    parseChild(e, t) {
        this._itemsConstructed++;
        const n = this.tokenizer.read();
        switch(n.kind){
            case 2:
                return new mFc(n.bracketIds, n.length);
            case 0:
                return n.astNode;
            case 1:
                {
                    if (t > 300) return new Tze(n.length);
                    const i = e.merge(n.bracketIds), r = this.parseList(i, t + 1), s = this.tokenizer.peek();
                    return s && s.kind === 2 && (s.bracketId === n.bracketId || s.bracketIds.intersects(n.bracketIds)) ? (this.tokenizer.read(), bQr.create(n.astNode, r, s.astNode)) : bQr.create(n.astNode, r, null);
                }
            default:
                throw new Error("unexpected");
        }
    }
};

}
