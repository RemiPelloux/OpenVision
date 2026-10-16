import { mcs, pcs } from "./Collection.js";
import { hcs, n$ } from "./Scalar_2.js";
import { Pwi } from "./createNode.js";
import { AM, NE, Zmt } from "./identity.js";
import { Tfe, Wwi, nZc, pyn } from "./qIc.js";
import { iZc } from "./stringifyCollection.js";
import { ngt } from "./toJS.js";
import { x } from "./tslib.es6.js";
var zKe;
export { zKe };
var __wakaru_agt_initialized = false;
export function agt() {
if (__wakaru_agt_initialized) return;
__wakaru_agt_initialized = true;
x(), Pwi(), iZc(), mcs(), NE(), n$(), ngt(), zKe = class extends pcs {
    static get tagName() {
        return "tag:yaml.org,2002:seq";
    }
    constructor(e){
        super(Zmt, e), this.items = [];
    }
    add(e) {
        this.items.push(e);
    }
    delete(e) {
        const t = Wwi(e);
        return typeof t != "number" ? !1 : this.items.splice(t, 1).length > 0;
    }
    get(e, t) {
        const n = Wwi(e);
        if (typeof n != "number") return;
        const i = this.items[n];
        return !t && AM(i) ? i.value : i;
    }
    has(e) {
        const t = Wwi(e);
        return typeof t == "number" && t < this.items.length;
    }
    set(e, t) {
        const n = Wwi(e);
        if (typeof n != "number") throw new Error(`Expected a valid index, not ${e}.`);
        const i = this.items[n];
        AM(i) && hcs(t) ? i.value = t : this.items[n] = t;
    }
    toJSON(e, t) {
        const n = [];
        t?.onCreate && t.onCreate(n);
        let i = 0;
        for (const r of this.items)n.push(Tfe(r, String(i++), t));
        return n;
    }
    toString(e, t, n) {
        return e ? nZc(this, e, {
            blockItemPrefix: "- ",
            flowChars: {
                start: "[",
                end: "]"
            },
            itemIndent: (e.indent || "") + "  ",
            onChompKeep: n,
            onComment: t
        }) : JSON.stringify(this);
    }
    static from(e, t, n) {
        const { replacer: i } = n, r = new this(e);
        if (t && Symbol.iterator in Object(t)) {
            let s = 0;
            for (let o of t){
                if (typeof i == "function") {
                    const a = t instanceof Set ? o : String(s++);
                    o = i.call(t, a, o);
                }
                r.items.push(pyn(o, void 0, n));
            }
        }
        return r;
    }
};

}
