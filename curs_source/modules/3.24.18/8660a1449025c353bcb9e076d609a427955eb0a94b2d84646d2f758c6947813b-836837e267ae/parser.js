import { Rjo, S5e, WBd, h0r, nyt } from "./ast.js";
import { UBd, a0r } from "./beforeEditPositionMapper.js";
import { V2y } from "./concat23Trees.js";
import { Ftt } from "./length.js";
import { K2y, XBd } from "./nodeReader.js";
import { Xve, nfn } from "./smallImmutableSet.js";
import { E } from "./tslib.es6.js";
import { G2y, Jgn, KBd, Mri } from "./ze.js";
var ZBd;
export { ZBd };
var __wakaru_QBd_initialized = false;
export function QBd() {
if (__wakaru_QBd_initialized) return;
__wakaru_QBd_initialized = true;
"use strict";
E(), h0r(), a0r(), nfn(), Ftt(), V2y(), K2y(), ZBd = class {
    constructor(t, e, n, i){
        if (this.tokenizer = t, this.createImmutableLists = i, this._itemsConstructed = 0, this._itemsFromCache = 0, n && i) throw new Error("Not supported");
        this.oldNodeReader = n ? new XBd(n) : void 0, this.positionMapper = new UBd(e);
    }
    get nodesConstructed() {
        return this._itemsConstructed;
    }
    get nodesReused() {
        return this._itemsFromCache;
    }
    parseDocument() {
        this._itemsConstructed = 0, this._itemsFromCache = 0;
        let t = this.parseList(Xve.getEmpty(), 0);
        return t || (t = S5e.getEmpty()), t;
    }
    parseList(t, e) {
        const n = [];
        for(;;){
            let r = this.tryReadChildFromCache(t);
            if (!r) {
                const s = this.tokenizer.peek();
                if (!s || s.kind === 0 && Mri(s.length) || s.kind === 2 && s.bracketIds.intersects(t)) break;
                r = this.parseChild(t, e + 1);
            }
            r.kind === 4 && r.childrenLength === 0 || n.push(r);
        }
        return this.oldNodeReader ? G2y(n) : KBd(n, this.createImmutableLists);
    }
    tryReadChildFromCache(t) {
        if (this.oldNodeReader) {
            const e = this.positionMapper.getDistanceToNextChange(this.tokenizer.offset);
            if (e === null || !Mri(e)) {
                const n = this.oldNodeReader.readLongestNodeAt(this.positionMapper.getOffsetBeforeChange(this.tokenizer.offset), (i)=>e !== null && !Jgn(i.length, e) ? !1 : i.canBeReused(t));
                if (n) return this._itemsFromCache++, this.tokenizer.skip(n.length), n;
            }
        }
    }
    parseChild(t, e) {
        this._itemsConstructed++;
        const n = this.tokenizer.read();
        switch(n.kind){
            case 2:
                return new WBd(n.bracketIds, n.length);
            case 0:
                return n.astNode;
            case 1:
                {
                    if (e > 300) return new nyt(n.length);
                    const i = t.merge(n.bracketIds), r = this.parseList(i, e + 1), s = this.tokenizer.peek();
                    return s && s.kind === 2 && (s.bracketId === n.bracketId || s.bracketIds.intersects(n.bracketIds)) ? (this.tokenizer.read(), Rjo.create(n.astNode, r, s.astNode)) : Rjo.create(n.astNode, r, null);
                }
            default:
                throw new Error("unexpected");
        }
    }
};

}
