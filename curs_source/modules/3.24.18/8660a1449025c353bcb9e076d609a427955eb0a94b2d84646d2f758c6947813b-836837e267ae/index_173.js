import { Fy, Rw } from "./LYd.js";
import { _1a, l9r } from "./index_150.js";
import { GQh, e9S } from "./index_151.js";
import { YQh, t9S } from "./index_152.js";
import { QQh, n9S } from "./index_153.js";
import { i9S, tJh } from "./index_154.js";
import { nJh, r9S } from "./index_155.js";
import { iJh, s9S } from "./index_156.js";
import { o9S, rJh } from "./index_157.js";
import { a9S, sJh } from "./index_158.js";
import { l9S, uJh } from "./index_159.js";
import { Bgi, E1a, Fgi, m9r, u9r } from "./index_160.js";
import { M1a, SJh } from "./index_161.js";
import { CJh, h9S } from "./index_162.js";
import { TJh, p9S } from "./index_163.js";
import { EJh, m9S } from "./index_164.js";
import { $Jh, FJh, OJh, UJh, jJh } from "./index_172.js";
import { E } from "./tslib.es6.js";
var HJh, S9r;
export { HJh, S9r };
var __wakaru_F1a_initialized = false;
export function F1a() {
if (__wakaru_F1a_initialized) return;
__wakaru_F1a_initialized = true;
E(), Fy(), e9S(), t9S(), n9S(), i9S(), r9S(), s9S(), o9S(), a9S(), l9S(), l9r(), m9r(), SJh(), h9S(), p9S(), m9S(), $Jh(), HJh = Rw.create({
    name: "starterKit",
    addExtensions () {
        var t, e, n, i;
        const r = [];
        return this.options.bold !== !1 && r.push(YQh.configure(this.options.bold)), this.options.blockquote !== !1 && r.push(GQh.configure(this.options.blockquote)), this.options.bulletList !== !1 && r.push(Fgi.configure(this.options.bulletList)), this.options.code !== !1 && r.push(QQh.configure(this.options.code)), this.options.codeBlock !== !1 && r.push(tJh.configure(this.options.codeBlock)), this.options.document !== !1 && r.push(nJh.configure(this.options.document)), this.options.dropcursor !== !1 && r.push(OJh.configure(this.options.dropcursor)), this.options.gapcursor !== !1 && r.push(FJh.configure(this.options.gapcursor)), this.options.hardBreak !== !1 && r.push(iJh.configure(this.options.hardBreak)), this.options.heading !== !1 && r.push(rJh.configure(this.options.heading)), this.options.undoRedo !== !1 && r.push(jJh.configure(this.options.undoRedo)), this.options.horizontalRule !== !1 && r.push(sJh.configure(this.options.horizontalRule)), this.options.italic !== !1 && r.push(uJh.configure(this.options.italic)), this.options.listItem !== !1 && r.push(u9r.configure(this.options.listItem)), this.options.listKeymap !== !1 && r.push(E1a.configure((t = this.options) == null ? void 0 : t.listKeymap)), this.options.link !== !1 && r.push(_1a.configure((e = this.options) == null ? void 0 : e.link)), this.options.orderedList !== !1 && r.push(Bgi.configure(this.options.orderedList)), this.options.paragraph !== !1 && r.push(M1a.configure(this.options.paragraph)), this.options.strike !== !1 && r.push(CJh.configure(this.options.strike)), this.options.text !== !1 && r.push(TJh.configure(this.options.text)), this.options.underline !== !1 && r.push(EJh.configure((n = this.options) == null ? void 0 : n.underline)), this.options.trailingNode !== !1 && r.push(UJh.configure((i = this.options) == null ? void 0 : i.trailingNode)), r;
    }
}), S9r = HJh;

}
