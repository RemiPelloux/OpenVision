import { $cs, Zwi } from "./Document.js";
import { kxg } from "./compose-doc.js";
import { HXc, tgt } from "./directives.js";
import { MZc, Qwi, hBt } from "./errors_3.js";
import { FO, NE } from "./identity.js";
import { GZc, Myn, Ryn, Sxg, k5 } from "./qIc.js";
import { Dyn } from "./resolve-end.js";
import { x } from "./tslib.es6.js";
var VZc;
export { VZc };
var __wakaru_jZc_initialized = false;
export function jZc() {
if (__wakaru_jZc_initialized) return;
__wakaru_jZc_initialized = true;
x(), HXc(), Zwi(), Qwi(), NE(), kxg(), Dyn(), VZc = class {
    constructor(e = {}){
        this.doc = null, this.atDirectives = !1, this.prelude = [], this.errors = [], this.warnings = [], this.onError = (t, n, i, r)=>{
            const s = Myn(t);
            r ? this.warnings.push(new MZc(s, n, i)) : this.errors.push(new hBt(s, n, i));
        }, this.directives = new tgt({
            version: e.version || "1.2"
        }), this.options = e;
    }
    decorate(e, t) {
        const { comment: n, afterEmptyLine: i } = GZc(this.prelude);
        if (n) {
            const r = e.contents;
            if (t) e.comment = e.comment ? `${e.comment}
${n}` : n;
            else if (i || e.directives.docStart || !r) e.commentBefore = n;
            else if (k5(r) && !r.flow && r.items.length > 0) {
                let s = r.items[0];
                FO(s) && (s = s.key);
                const o = s.commentBefore;
                s.commentBefore = o ? `${n}
${o}` : n;
            } else {
                const s = r.commentBefore;
                r.commentBefore = s ? `${n}
${s}` : n;
            }
        }
        if (t) {
            for(let r = 0; r < this.errors.length; ++r)e.errors.push(this.errors[r]);
            for(let r = 0; r < this.warnings.length; ++r)e.warnings.push(this.warnings[r]);
        } else e.errors = this.errors, e.warnings = this.warnings;
        this.prelude = [], this.errors = [], this.warnings = [];
    }
    streamInfo() {
        return {
            comment: GZc(this.prelude).comment,
            directives: this.directives,
            errors: this.errors,
            warnings: this.warnings
        };
    }
    *compose(e, t = !1, n = -1) {
        for (const i of e)yield* this.next(i);
        yield* this.end(t, n);
    }
    *next(e) {
        switch(e.type){
            case "directive":
                this.directives.add(e.source, (t, n, i)=>{
                    const r = Myn(e);
                    r[0] += t, this.onError(r, "BAD_DIRECTIVE", n, i);
                }), this.prelude.push(e.source), this.atDirectives = !0;
                break;
            case "document":
                {
                    const t = Sxg(this.options, this.directives, e, this.onError);
                    this.atDirectives && !t.directives.docStart && this.onError(e, "MISSING_CHAR", "Missing directives-end/doc-start indicator line"), this.decorate(t, !1), this.doc && (yield this.doc), this.doc = t, this.atDirectives = !1;
                    break;
                }
            case "byte-order-mark":
            case "space":
                break;
            case "comment":
            case "newline":
                this.prelude.push(e.source);
                break;
            case "error":
                {
                    const t = e.source ? `${e.message}: ${JSON.stringify(e.source)}` : e.message, n = new hBt(Myn(e), "UNEXPECTED_TOKEN", t);
                    this.atDirectives || !this.doc ? this.errors.push(n) : this.doc.errors.push(n);
                    break;
                }
            case "doc-end":
                {
                    if (!this.doc) {
                        const n = "Unexpected doc-end without preceding document";
                        this.errors.push(new hBt(Myn(e), "UNEXPECTED_TOKEN", n));
                        break;
                    }
                    this.doc.directives.docEnd = !0;
                    const t = Ryn(e.end, e.offset + e.source.length, this.doc.options.strict, this.onError);
                    if (this.decorate(this.doc, !0), t.comment) {
                        const n = this.doc.comment;
                        this.doc.comment = n ? `${n}
${t.comment}` : t.comment;
                    }
                    this.doc.range[2] = t.offset;
                    break;
                }
            default:
                this.errors.push(new hBt(Myn(e), "UNEXPECTED_TOKEN", `Unsupported token ${e.type}`));
        }
    }
    *end(e = !1, t = -1) {
        if (this.doc) this.decorate(this.doc, !0), yield this.doc, this.doc = null;
        else if (e) {
            const n = Object.assign({
                _directives: this.directives
            }, this.options), i = new $cs(void 0, n);
            this.atDirectives && this.onError(t, "MISSING_CHAR", "Missing directives-end indicator line"), i.range = [
                0,
                t,
                t
            ], this.decorate(i, !1), yield i;
        }
    }
};

}
