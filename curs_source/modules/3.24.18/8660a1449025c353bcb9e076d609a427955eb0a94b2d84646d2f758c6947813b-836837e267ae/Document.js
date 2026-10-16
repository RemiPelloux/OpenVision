import { Axr, Rxr } from "./Alias.js";
import { gYo, v_n } from "./Collection.js";
import { Aai, ERe, Mxr, S_n, Y6y, fJd, f_n, g4y, qj, vJd, zj } from "./LYd.js";
import { f8t, f_e } from "./Pair.js";
import { ieh, reh } from "./Schema_4.js";
import { dYo } from "./anchors.js";
import { _Jd } from "./applyReviver.js";
import { Pxr } from "./createNode.js";
import { m8t, mJd } from "./directives.js";
import { Mwe, Txr, cL, lR } from "./identity.js";
import { f4y } from "./stringifyDocument.js";
import { g8t } from "./toJS.js";
import { E } from "./tslib.es6.js";
var $Yo;
export { $Yo };
var __wakaru_Yxr_initialized = false;
export function Yxr() {
if (__wakaru_Yxr_initialized) return;
__wakaru_Yxr_initialized = true;
E(), Rxr(), gYo(), lR(), f8t(), g8t(), reh(), f4y(), dYo(), _Jd(), Pxr(), mJd(), $Yo = class JRb {
    constructor(e, n, i){
        this.commentBefore = null, this.comment = null, this.errors = [], this.warnings = [], Object.defineProperty(this, Mwe, {
            value: Txr
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
        i?._directives ? (this.directives = i._directives.atDocument(), this.directives.yaml.explicit && (o = this.directives.yaml.version)) : this.directives = new m8t({
            version: o
        }), this.setSchema(o, i), this.contents = e === void 0 ? null : this.createNode(e, r, i);
    }
    clone() {
        const e = Object.create(JRb.prototype, {
            [Mwe]: {
                value: Txr
            }
        });
        return e.commentBefore = this.commentBefore, e.comment = this.comment, e.errors = this.errors.slice(), e.warnings = this.warnings.slice(), e.options = Object.assign({}, this.options), this.directives && (e.directives = this.directives.clone()), e.schema = this.schema.clone(), e.contents = zj(this.contents) ? this.contents.clone(e.schema) : this.contents, this.range && (e.range = this.range.slice()), e;
    }
    add(e) {
        S_n(this.contents) && this.contents.add(e);
    }
    addIn(e, n) {
        S_n(this.contents) && this.contents.addIn(e, n);
    }
    createAlias(e, n) {
        if (!e.anchor) {
            const i = fJd(this);
            e.anchor = !n || i.has(n) ? vJd(n || "a", i) : n;
        }
        return new Axr(e.anchor);
    }
    createNode(e, n, i) {
        let r;
        if (typeof n == "function") e = n.call({
            "": e
        }, "", e), r = n;
        else if (Array.isArray(n)) {
            const _ = (y)=>typeof y == "number" || y instanceof String || y instanceof Number, b = n.filter(_).map(String);
            b.length > 0 && (n = n.concat(b)), r = n;
        } else i === void 0 && n && (i = n, n = void 0);
        const { aliasDuplicateObjects: s, anchorPrefix: o, flow: a, keepUndefined: l, onTagObj: c, tag: u } = i ?? {}, { onAnchor: d, setAnchors: h, sourceObjects: p } = Y6y(this, o || "a"), g = {
            aliasDuplicateObjects: s ?? !0,
            keepUndefined: l ?? !1,
            onAnchor: d,
            onTagObj: c,
            replacer: r,
            schema: this.schema,
            sourceObjects: p
        }, f = Aai(e, u, g);
        return a && qj(f) && (f.flow = !0), h(), f;
    }
    createPair(e, n, i = {}) {
        const r = this.createNode(e, null, i), s = this.createNode(n, null, i);
        return new f_e(r, s);
    }
    delete(e) {
        return S_n(this.contents) ? this.contents.delete(e) : !1;
    }
    deleteIn(e) {
        return v_n(e) ? this.contents == null ? !1 : (this.contents = null, !0) : S_n(this.contents) ? this.contents.deleteIn(e) : !1;
    }
    get(e, n) {
        return qj(this.contents) ? this.contents.get(e, n) : void 0;
    }
    getIn(e, n) {
        return v_n(e) ? !n && cL(this.contents) ? this.contents.value : this.contents : qj(this.contents) ? this.contents.getIn(e, n) : void 0;
    }
    has(e) {
        return qj(this.contents) ? this.contents.has(e) : !1;
    }
    hasIn(e) {
        return v_n(e) ? this.contents !== void 0 : qj(this.contents) ? this.contents.hasIn(e) : !1;
    }
    set(e, n) {
        this.contents == null ? this.contents = Mxr(this.schema, [
            e
        ], n) : S_n(this.contents) && this.contents.set(e, n);
    }
    setIn(e, n) {
        v_n(e) ? this.contents = n : this.contents == null ? this.contents = Mxr(this.schema, Array.from(e), n) : S_n(this.contents) && this.contents.setIn(e, n);
    }
    setSchema(e, n = {}) {
        typeof e == "number" && (e = String(e));
        let i;
        switch(e){
            case "1.1":
                this.directives ? this.directives.yaml.version = "1.1" : this.directives = new m8t({
                    version: "1.1"
                }), i = {
                    resolveKnownTags: !1,
                    schema: "yaml-1.1"
                };
                break;
            case "1.2":
            case "next":
                this.directives ? this.directives.yaml.version = e : this.directives = new m8t({
                    version: e
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
                    const r = JSON.stringify(e);
                    throw new Error(`Expected '1.1', '1.2' or null as first argument, but found: ${r}`);
                }
        }
        if (n.schema instanceof Object) this.schema = n.schema;
        else if (i) this.schema = new ieh(Object.assign(i, n));
        else throw new Error("With a null YAML version, the { schema: Schema } option is required");
    }
    toJS({ json: e, jsonArg: n, mapAsMap: i, maxAliasCount: r, onAnchor: s, reviver: o } = {}) {
        const a = {
            anchors: new Map,
            doc: this,
            keep: !e,
            mapAsMap: i === !0,
            mapKeyWarned: !1,
            maxAliasCount: typeof r == "number" ? r : 100
        }, l = ERe(this.contents, n ?? "", a);
        if (typeof s == "function") for (const { count: c, res: u } of a.anchors.values())s(u, c);
        return typeof o == "function" ? f_n(o, {
            "": l
        }, "", l) : l;
    }
    toJSON(e, n) {
        return this.toJS({
            json: !0,
            jsonArg: e,
            mapAsMap: !1,
            onAnchor: n
        });
    }
    toString(e = {}) {
        if (this.errors.length > 0) throw new Error("Document with errors cannot be stringified");
        if ("indent" in e && (!Number.isInteger(e.indent) || Number(e.indent) <= 0)) {
            const n = JSON.stringify(e.indent);
            throw new Error(`"indent" option must be a positive integer, not ${n}`);
        }
        return g4y(this, e);
    }
};

}
