import { Yle, sgt } from "./YAMLMap.js";
import { agt, zKe } from "./YAMLSeq.js";
import { AM, FO, NE } from "./identity.js";
import { Acs } from "./pairs.js";
import { Tfe, gZc, mZc } from "./qIc.js";
import { ngt } from "./toJS.js";
import { x } from "./tslib.es6.js";
var Eyn, Kwi;
export { Eyn, Kwi };
var __wakaru_fZc_initialized = false;
export function fZc() {
if (__wakaru_fZc_initialized) return;
__wakaru_fZc_initialized = true;
x(), NE(), ngt(), sgt(), agt(), Acs(), Eyn = class gwm extends zKe {
    constructor(){
        super(), this.add = Yle.prototype.add.bind(this), this.delete = Yle.prototype.delete.bind(this), this.get = Yle.prototype.get.bind(this), this.has = Yle.prototype.has.bind(this), this.set = Yle.prototype.set.bind(this), this.tag = gwm.tag;
    }
    toJSON(t, n) {
        if (!n) return super.toJSON(t);
        const i = new Map;
        n?.onCreate && n.onCreate(i);
        for (const r of this.items){
            let s, o;
            if (FO(r) ? (s = Tfe(r.key, "", n), o = Tfe(r.value, s, n)) : s = Tfe(r, "", n), i.has(s)) throw new Error("Ordered maps must not include duplicate keys");
            i.set(s, o);
        }
        return i;
    }
    static from(t, n, i) {
        const r = gZc(t, n, i), s = new this;
        return s.items = r.items, s;
    }
}, Eyn.tag = "tag:yaml.org,2002:omap", Kwi = {
    collection: "seq",
    identify: (e)=>e instanceof Map,
    nodeClass: Eyn,
    default: !1,
    tag: "tag:yaml.org,2002:omap",
    resolve (e, t) {
        const n = mZc(e, t), i = [];
        for (const { key: r } of n.items)AM(r) && (i.includes(r.value) ? t(`Ordered maps must not include duplicate keys: ${r.value}`) : i.push(r.value));
        return Object.assign(new Eyn, n);
    },
    createNode: (e, t, n)=>Eyn.from(e, t, n)
};

}
