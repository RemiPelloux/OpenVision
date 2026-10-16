import { Aw, HQ, PS, U1, kAr } from "./LYd.js";
import { $5e, Df } from "./index_20.js";
import { wAr } from "./index_35.js";
import { _9S, b9S, g9r } from "./ipa.js";
import { E } from "./tslib.es6.js";
var Whe, AJh, RJh;
export { AJh, RJh, Whe };
var __wakaru_C9S_initialized = false;
export function C9S() {
if (__wakaru_C9S_initialized) return;
__wakaru_C9S_initialized = true;
E(), wAr(), Aw(), $5e(), HQ(), Whe = class K3t extends U1 {
    constructor(e){
        super(e, e);
    }
    map(e, n) {
        let i = e.resolve(n.map(this.head));
        return K3t.valid(i) ? new K3t(i) : U1.near(i);
    }
    content() {
        return Df.empty;
    }
    eq(e) {
        return e instanceof K3t && e.head == this.head;
    }
    toJSON() {
        return {
            type: "gapcursor",
            pos: this.head
        };
    }
    static fromJSON(e, n) {
        if (typeof n.pos != "number") throw new RangeError("Invalid input for GapCursor.fromJSON");
        return new K3t(e.resolve(n.pos));
    }
    getBookmark() {
        return new AJh(this.anchor);
    }
    static valid(e) {
        let n = e.parent;
        if (n.isTextblock || !_9S(e) || !b9S(e)) return !1;
        let i = n.type.spec.allowGapCursor;
        if (i != null) return i;
        let r = n.contentMatchAt(e.index()).defaultType;
        return r && r.isTextblock;
    }
    static findGapCursorFrom(e, n, i = !1) {
        e: for(;;){
            if (!i && K3t.valid(e)) return e;
            let r = e.pos, s = null;
            for(let o = e.depth;; o--){
                let a = e.node(o);
                if (n > 0 ? e.indexAfter(o) < a.childCount : e.index(o) > 0) {
                    s = a.child(n > 0 ? e.indexAfter(o) : e.index(o) - 1);
                    break;
                } else if (o == 0) return null;
                r += n;
                let l = e.doc.resolve(r);
                if (K3t.valid(l)) return l;
            }
            for(;;){
                let o = n > 0 ? s.firstChild : s.lastChild;
                if (!o) {
                    if (s.isAtom && !s.isText && !PS.isSelectable(s)) {
                        e = e.doc.resolve(r + s.nodeSize * n), i = !1;
                        continue e;
                    }
                    break;
                }
                s = o, r += n;
                let a = e.doc.resolve(r);
                if (K3t.valid(a)) return a;
            }
            return null;
        }
    }
}, Whe.prototype.visible = !1, Whe.findFrom = Whe.findGapCursorFrom, U1.jsonID("gapcursor", Whe), AJh = class C2b {
    constructor(e){
        this.pos = e;
    }
    map(e) {
        return new C2b(e.map(this.pos));
    }
    resolve(e) {
        let n = e.resolve(this.pos);
        return Whe.valid(n) ? new Whe(n) : U1.near(n);
    }
}, RJh = kAr({
    ArrowLeft: g9r("horiz", -1),
    ArrowRight: g9r("horiz", 1),
    ArrowUp: g9r("vert", -1),
    ArrowDown: g9r("vert", 1)
});

}
