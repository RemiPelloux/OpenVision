import { ERs, YLi } from "./index_144.js";
import { $Rf, yjl } from "./index_145.js";
import { HRf, Tjl } from "./index_146.js";
import { Ijl, WRf } from "./index_147.js";
import { Djl, GRf } from "./index_148.js";
import { Mjl, VRf } from "./index_149.js";
import { Pjl, jRf } from "./index_150.js";
import { Ljl, qRf } from "./index_151.js";
import { Njl, zRf } from "./index_152.js";
import { $jl, KRf } from "./index_153.js";
import { LRs, ZLi, jTn, qTn, tNi } from "./index_154.js";
import { $Rs, Zjl } from "./index_155.js";
import { QRf, eql } from "./index_156.js";
import { JRf, tql } from "./index_157.js";
import { eDf, nql } from "./index_158.js";
import { fql, gql, hql, pql, vql } from "./index_166.js";
import { A_, bS } from "./qIc.js";
import { x } from "./tslib.es6.js";
var _ql, cNi;
export { _ql, cNi };
var __wakaru_jRs_initialized = false;
export function jRs() {
if (__wakaru_jRs_initialized) return;
__wakaru_jRs_initialized = true;
x(), A_(), $Rf(), HRf(), WRf(), GRf(), VRf(), jRf(), qRf(), zRf(), KRf(), YLi(), tNi(), Zjl(), QRf(), JRf(), eDf(), vql(), _ql = bS.create({
    name: "starterKit",
    addExtensions () {
        var e, t, n, i;
        const r = [];
        return this.options.bold !== !1 && r.push(Tjl.configure(this.options.bold)), this.options.blockquote !== !1 && r.push(yjl.configure(this.options.blockquote)), this.options.bulletList !== !1 && r.push(jTn.configure(this.options.bulletList)), this.options.code !== !1 && r.push(Ijl.configure(this.options.code)), this.options.codeBlock !== !1 && r.push(Djl.configure(this.options.codeBlock)), this.options.document !== !1 && r.push(Mjl.configure(this.options.document)), this.options.dropcursor !== !1 && r.push(hql.configure(this.options.dropcursor)), this.options.gapcursor !== !1 && r.push(pql.configure(this.options.gapcursor)), this.options.hardBreak !== !1 && r.push(Pjl.configure(this.options.hardBreak)), this.options.heading !== !1 && r.push(Ljl.configure(this.options.heading)), this.options.undoRedo !== !1 && r.push(fql.configure(this.options.undoRedo)), this.options.horizontalRule !== !1 && r.push(Njl.configure(this.options.horizontalRule)), this.options.italic !== !1 && r.push($jl.configure(this.options.italic)), this.options.listItem !== !1 && r.push(ZLi.configure(this.options.listItem)), this.options.listKeymap !== !1 && r.push(LRs.configure((e = this.options) == null ? void 0 : e.listKeymap)), this.options.link !== !1 && r.push(ERs.configure((t = this.options) == null ? void 0 : t.link)), this.options.orderedList !== !1 && r.push(qTn.configure(this.options.orderedList)), this.options.paragraph !== !1 && r.push($Rs.configure(this.options.paragraph)), this.options.strike !== !1 && r.push(eql.configure(this.options.strike)), this.options.text !== !1 && r.push(tql.configure(this.options.text)), this.options.underline !== !1 && r.push(nql.configure((n = this.options) == null ? void 0 : n.underline)), this.options.trailingNode !== !1 && r.push(gql.configure((i = this.options) == null ? void 0 : i.trailingNode)), r;
    }
}), cNi = _ql;

}
