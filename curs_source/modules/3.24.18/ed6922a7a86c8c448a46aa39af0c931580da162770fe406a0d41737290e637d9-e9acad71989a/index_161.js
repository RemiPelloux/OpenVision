import { nNi, rDf, sDf } from "./f0s.js";
import { Zwe, um } from "./index_15.js";
import { wCi } from "./index_30.js";
import { AW, I_, kCi, xb, zS } from "./qIc.js";
import { x } from "./tslib.es6.js";
var oee, sql, oql;
export { oee, oql, sql };
var __wakaru_uDf_initialized = false;
export function uDf() {
if (__wakaru_uDf_initialized) return;
__wakaru_uDf_initialized = true;
x(), wCi(), zS(), Zwe(), AW(), oee = class Zot extends xb {
    constructor(t){
        super(t, t);
    }
    map(t, n) {
        let i = t.resolve(n.map(this.head));
        return Zot.valid(i) ? new Zot(i) : xb.near(i);
    }
    content() {
        return um.empty;
    }
    eq(t) {
        return t instanceof Zot && t.head == this.head;
    }
    toJSON() {
        return {
            type: "gapcursor",
            pos: this.head
        };
    }
    static fromJSON(t, n) {
        if (typeof n.pos != "number") throw new RangeError("Invalid input for GapCursor.fromJSON");
        return new Zot(t.resolve(n.pos));
    }
    getBookmark() {
        return new sql(this.anchor);
    }
    static valid(t) {
        let n = t.parent;
        if (n.isTextblock || !rDf(t) || !sDf(t)) return !1;
        let i = n.type.spec.allowGapCursor;
        if (i != null) return i;
        let r = n.contentMatchAt(t.index()).defaultType;
        return r && r.isTextblock;
    }
    static findGapCursorFrom(t, n, i = !1) {
        e: for(;;){
            if (!i && Zot.valid(t)) return t;
            let r = t.pos, s = null;
            for(let o = t.depth;; o--){
                let a = t.node(o);
                if (n > 0 ? t.indexAfter(o) < a.childCount : t.index(o) > 0) {
                    s = a.child(n > 0 ? t.indexAfter(o) : t.index(o) - 1);
                    break;
                } else if (o == 0) return null;
                r += n;
                let c = t.doc.resolve(r);
                if (Zot.valid(c)) return c;
            }
            for(;;){
                let o = n > 0 ? s.firstChild : s.lastChild;
                if (!o) {
                    if (s.isAtom && !s.isText && !I_.isSelectable(s)) {
                        t = t.doc.resolve(r + s.nodeSize * n), i = !1;
                        continue e;
                    }
                    break;
                }
                s = o, r += n;
                let a = t.doc.resolve(r);
                if (Zot.valid(a)) return a;
            }
            return null;
        }
    }
}, oee.prototype.visible = !1, oee.findFrom = oee.findGapCursorFrom, xb.jsonID("gapcursor", oee), sql = class Gwm {
    constructor(t){
        this.pos = t;
    }
    map(t) {
        return new Gwm(t.map(this.pos));
    }
    resolve(t) {
        let n = t.resolve(this.pos);
        return oee.valid(n) ? new oee(n) : xb.near(n);
    }
}, oql = kCi({
    ArrowLeft: nNi("horiz", -1),
    ArrowRight: nNi("horiz", 1),
    ArrowUp: nNi("vert", -1),
    ArrowDown: nNi("vert", 1)
});

}
