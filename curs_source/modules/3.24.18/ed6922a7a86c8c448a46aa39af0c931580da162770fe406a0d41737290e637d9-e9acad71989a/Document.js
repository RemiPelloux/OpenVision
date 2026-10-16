import { Dwi, Mwi } from "./Alias.js";
import { aBt, mcs } from "./Collection.js";
import { Dre, igt } from "./Pair.js";
import { DZc, RZc } from "./Schema_4.js";
import { ucs } from "./anchors.js";
import { jXc } from "./applyReviver.js";
import { Pwi } from "./createNode.js";
import { HXc, tgt } from "./directives.js";
import { AM, Kle, NE, xwi } from "./identity.js";
import { AEg, GXc, Lwi, Tfe, VXc, YEg, dBt, k5, oBt, pyn, w5 } from "./qIc.js";
import { XEg } from "./stringifyDocument.js";
import { ngt } from "./toJS.js";
import { x } from "./tslib.es6.js";
var $cs;
export { $cs };
var __wakaru_Zwi_initialized = false;
export function Zwi() {
if (__wakaru_Zwi_initialized) return;
__wakaru_Zwi_initialized = true;
x(), Mwi(), mcs(), NE(), igt(), ngt(), DZc(), XEg(), ucs(), jXc(), Pwi(), HXc(), $cs = class _wm {
    constructor(t, n, i){
        this.commentBefore = null, this.comment = null, this.errors = [], this.warnings = [], Object.defineProperty(this, Kle, {
            value: xwi
        });
        let r = null;
        typeof n == "function" || Array.isArray(n) ? r = n : i === void 0 && n && (i = n, n = void 0);
        const s = Object.assign({
            intAsBigInt: !1,
            keepSourceTokens: !1,
            logLevel: "warn",
            prettyErrors: !0,
            strict: !0,
            stringKeys: !1,
            uniqueKeys: !0,
            version: "1.2"
        }, i);
        this.options = s;
        let { version: o } = s;
        i?._directives ? (this.directives = i._directives.atDocument(), this.directives.yaml.explicit && (o = this.directives.yaml.version)) : this.directives = new tgt({
            version: o
        }), this.setSchema(o, i), this.contents = t === void 0 ? null : this.createNode(t, r, i);
    }
    clone() {
        const t = Object.create(_wm.prototype, {
            [Kle]: {
                value: xwi
            }
        });
        return t.commentBefore = this.commentBefore, t.comment = this.comment, t.errors = this.errors.slice(), t.warnings = this.warnings.slice(), t.options = Object.assign({}, this.options), this.directives && (t.directives = this.directives.clone()), t.schema = this.schema.clone(), t.contents = w5(this.contents) ? this.contents.clone(t.schema) : this.contents, this.range && (t.range = this.range.slice()), t;
    }
    add(t) {
        dBt(this.contents) && this.contents.add(t);
    }
    addIn(t, n) {
        dBt(this.contents) && this.contents.addIn(t, n);
    }
    createAlias(t, n) {
        if (!t.anchor) {
            const i = GXc(this);
            t.anchor = !n || i.has(n) ? VXc(n || "a", i) : n;
        }
        return new Dwi(t.anchor);
    }
    createNode(t, n, i) {
        let r;
        if (typeof n == "function") t = n.call({
            "": t
        }, "", t), r = n;
        else if (Array.isArray(n)) {
            const b = (T)=>typeof T == "number" || T instanceof String || T instanceof Number, y = n.filter(b).map(String);
            y.length > 0 && (n = n.concat(y)), r = n;
        } else i === void 0 && n && (i = n, n = void 0);
        const { aliasDuplicateObjects: s, anchorPrefix: o, flow: a, keepUndefined: c, onTagObj: l, tag: u } = i ?? {}, { onAnchor: h, setAnchors: p, sourceObjects: g } = AEg(this, o || "a"), f = {
            aliasDuplicateObjects: s ?? !0,
            keepUndefined: c ?? !1,
            onAnchor: h,
            onTagObj: l,
            replacer: r,
            schema: this.schema,
            sourceObjects: g
        }, v = pyn(t, u, f);
        return a && k5(v) && (v.flow = !0), p(), v;
    }
    createPair(t, n, i = {}) {
        const r = this.createNode(t, null, i), s = this.createNode(n, null, i);
        return new Dre(r, s);
    }
    delete(t) {
        return dBt(this.contents) ? this.contents.delete(t) : !1;
    }
    deleteIn(t) {
        return aBt(t) ? this.contents == null ? !1 : (this.contents = null, !0) : dBt(this.contents) ? this.contents.deleteIn(t) : !1;
    }
    get(t, n) {
        return k5(this.contents) ? this.contents.get(t, n) : void 0;
    }
    getIn(t, n) {
        return aBt(t) ? !n && AM(this.contents) ? this.contents.value : this.contents : k5(this.contents) ? this.contents.getIn(t, n) : void 0;
    }
    has(t) {
        return k5(this.contents) ? this.contents.has(t) : !1;
    }
    hasIn(t) {
        return aBt(t) ? this.contents !== void 0 : k5(this.contents) ? this.contents.hasIn(t) : !1;
    }
    set(t, n) {
        this.contents == null ? this.contents = Lwi(this.schema, [
            t
        ], n) : dBt(this.contents) && this.contents.set(t, n);
    }
    setIn(t, n) {
        aBt(t) ? this.contents = n : this.contents == null ? this.contents = Lwi(this.schema, Array.from(t), n) : dBt(this.contents) && this.contents.setIn(t, n);
    }
    setSchema(t, n = {}) {
        typeof t == "number" && (t = String(t));
        let i;
        switch(t){
            case "1.1":
                this.directives ? this.directives.yaml.version = "1.1" : this.directives = new tgt({
                    version: "1.1"
                }), i = {
                    resolveKnownTags: !1,
                    schema: "yaml-1.1"
                };
                break;
            case "1.2":
            case "next":
                this.directives ? this.directives.yaml.version = t : this.directives = new tgt({
                    version: t
                }), i = {
                    resolveKnownTags: !0,
                    schema: "core"
                };
                break;
            case null:
                this.directives && delete this.directives, i = null;
                break;
            default:
                {
                    const r = JSON.stringify(t);
                    throw new Error(`Expected '1.1', '1.2' or null as first argument, but found: ${r}`);
                }
        }
        if (n.schema instanceof Object) this.schema = n.schema;
        else if (i) this.schema = new RZc(Object.assign(i, n));
        else throw new Error("With a null YAML version, the { schema: Schema } option is required");
    }
    toJS({ json: t, jsonArg: n, mapAsMap: i, maxAliasCount: r, onAnchor: s, reviver: o } = {}) {
        const a = {
            anchors: new Map,
            doc: this,
            keep: !t,
            mapAsMap: i === !0,
            mapKeyWarned: !1,
            maxAliasCount: typeof r == "number" ? r : 100
        }, c = Tfe(this.contents, n ?? "", a);
        if (typeof s == "function") for (const { count: l, res: u } of a.anchors.values())s(u, l);
        return typeof o == "function" ? oBt(o, {
            "": c
        }, "", c) : c;
    }
    toJSON(t, n) {
        return this.toJS({
            json: !0,
            jsonArg: t,
            mapAsMap: !1,
            onAnchor: n
        });
    }
    toString(t = {}) {
        if (this.errors.length > 0) throw new Error("Document with errors cannot be stringified");
        if ("indent" in t && (!Number.isInteger(t.indent) || Number(t.indent) <= 0)) {
            const n = JSON.stringify(t.indent);
            throw new Error(`"indent" option must be a positive integer, not ${n}`);
        }
        return YEg(this, t);
    }
};

}
