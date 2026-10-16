import { $Yo, Yxr } from "./Document.js";
import { $4y, Kai, feh, qj, zai } from "./LYd.js";
import { H4y } from "./compose-doc.js";
import { m8t, mJd } from "./directives.js";
import { Xxr, k_n, seh } from "./errors_5.js";
import { dB, lR } from "./identity.js";
import { Vai } from "./resolve-end.js";
import { E } from "./tslib.es6.js";
var veh;
export { veh };
var __wakaru__eh_initialized = false;
export function _eh() {
if (__wakaru__eh_initialized) return;
__wakaru__eh_initialized = true;
E(), mJd(), Yxr(), Xxr(), lR(), H4y(), Vai(), veh = class {
    constructor(t = {}){
        this.doc = null, this.atDirectives = !1, this.prelude = [], this.errors = [], this.warnings = [], this.onError = (e, n, i, r)=>{
            const s = Kai(e);
            r ? this.warnings.push(new seh(s, n, i)) : this.errors.push(new k_n(s, n, i));
        }, this.directives = new m8t({
            version: t.version || "1.2"
        }), this.options = t;
    }
    decorate(t, e) {
        const { comment: n, afterEmptyLine: i } = feh(this.prelude);
        if (n) {
            const r = t.contents;
            if (e) t.comment = t.comment ? `${t.comment}
${n}` : n;
            else if (i || t.directives.docStart || !r) t.commentBefore = n;
            else if (qj(r) && !r.flow && r.items.length > 0) {
                let s = r.items[0];
                dB(s) && (s = s.key);
                const o = s.commentBefore;
                s.commentBefore = o ? `${n}
${o}` : n;
            } else {
                const s = r.commentBefore;
                r.commentBefore = s ? `${n}
${s}` : n;
            }
        }
        if (e) {
            for(let r = 0; r < this.errors.length; ++r)t.errors.push(this.errors[r]);
            for(let r = 0; r < this.warnings.length; ++r)t.warnings.push(this.warnings[r]);
        } else t.errors = this.errors, t.warnings = this.warnings;
        this.prelude = [], this.errors = [], this.warnings = [];
    }
    streamInfo() {
        return {
            comment: feh(this.prelude).comment,
            directives: this.directives,
            errors: this.errors,
            warnings: this.warnings
        };
    }
    *compose(t, e = !1, n = -1) {
        for (const i of t)yield* this.next(i);
        yield* this.end(e, n);
    }
    *next(t) {
        switch(t.type){
            case "directive":
                this.directives.add(t.source, (e, n, i)=>{
                    const r = Kai(t);
                    r[0] += e, this.onError(r, "BAD_DIRECTIVE", n, i);
                }), this.prelude.push(t.source), this.atDirectives = !0;
                break;
            case "document":
                {
                    const e = $4y(this.options, this.directives, t, this.onError);
                    this.atDirectives && !e.directives.docStart && this.onError(t, "MISSING_CHAR", "Missing directives-end/doc-start indicator line"), this.decorate(e, !1), this.doc && (yield this.doc), this.doc = e, this.atDirectives = !1;
                    break;
                }
            case "byte-order-mark":
            case "space":
                break;
            case "comment":
            case "newline":
                this.prelude.push(t.source);
                break;
            case "error":
                {
                    const e = t.source ? `${t.message}: ${JSON.stringify(t.source)}` : t.message, n = new k_n(Kai(t), "UNEXPECTED_TOKEN", e);
                    this.atDirectives || !this.doc ? this.errors.push(n) : this.doc.errors.push(n);
                    break;
                }
            case "doc-end":
                {
                    if (!this.doc) {
                        const n = "Unexpected doc-end without preceding document";
                        this.errors.push(new k_n(Kai(t), "UNEXPECTED_TOKEN", n));
                        break;
                    }
                    this.doc.directives.docEnd = !0;
                    const e = zai(t.end, t.offset + t.source.length, this.doc.options.strict, this.onError);
                    if (this.decorate(this.doc, !0), e.comment) {
                        const n = this.doc.comment;
                        this.doc.comment = n ? `${n}
${e.comment}` : e.comment;
                    }
                    this.doc.range[2] = e.offset;
                    break;
                }
            default:
                this.errors.push(new k_n(Kai(t), "UNEXPECTED_TOKEN", `Unsupported token ${t.type}`));
        }
    }
    *end(t = !1, e = -1) {
        if (this.doc) this.decorate(this.doc, !0), yield this.doc, this.doc = null;
        else if (t) {
            const n = Object.assign({
                _directives: this.directives
            }, this.options), i = new $Yo(void 0, n);
            this.atDirectives && this.onError(e, "MISSING_CHAR", "Missing directives-end indicator line"), i.range = [
                0,
                e,
                e
            ], this.decorate(i, !1), yield i;
        }
    }
};

}
