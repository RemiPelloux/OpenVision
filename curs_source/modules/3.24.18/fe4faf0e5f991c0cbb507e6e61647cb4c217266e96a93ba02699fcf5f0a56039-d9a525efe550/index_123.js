import { A4i, Yhr } from "./callable-instance.js";
import { MS } from "./default.js";
import { LPt, b4i } from "./index_116.js";
import { y4i } from "./index_117.js";
import { w4i, yMe } from "./index_118.js";
import { Lhr } from "./index_119.js";
import { k4i } from "./index_120.js";
import { Xhr } from "./index_121.js";
import { E4i } from "./index_122.js";
import { N$e } from "./index_4.mjs";
import { i } from "./plugin-brand-icon.js";
function xMe(r, e) {
    if (typeof e != "function") throw new TypeError("Cannot `" + r + "` without `parser`");
}
function CMe(r, e) {
    if (typeof e != "function") throw new TypeError("Cannot `" + r + "` without `compiler`");
}
function SMe(r, e) {
    if (e) throw new Error("Cannot call `" + r + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.");
}
function OPt(r) {
    if (!yMe(r) || typeof r.type != "string") throw new TypeError("Expected node, got `" + r + "`");
}
function zPt(r, e, a) {
    if (!a) throw new Error("`" + r + "` finished async. Use `" + e + "` instead");
}
function Gfe(r) {
    return Jhr(r) ? r : new Xhr(r);
}
function Jhr(r) {
    return !!(r && typeof r == "object" && "message" in r && "messages" in r);
}
function Qhr(r) {
    return typeof r == "string" || egr(r);
}
function egr(r) {
    return !!(r && typeof r == "object" && "byteLength" in r && "byteOffset" in r);
}
var EMe, tgr, BPt, ngr, rgr;
export { BPt, CMe, EMe, Gfe, Jhr, OPt, Qhr, SMe, egr, ngr, rgr, tgr, xMe, zPt };
var __wakaru_T4i_initialized = false;
export function T4i() {
if (__wakaru_T4i_initialized) return;
__wakaru_T4i_initialized = true;
b4i(), EMe = N$e(y4i(), 1), MS(), w4i(), k4i(), E4i(), A4i(), tgr = {}.hasOwnProperty, BPt = class Uci extends Yhr {
    constructor(){
        super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = Lhr();
    }
    copy() {
        const e = new Uci;
        let a = -1;
        for(; ++a < this.attachers.length;){
            const s = this.attachers[a];
            e.use(...s);
        }
        return e.data((0, EMe.default)(!0, {}, this.namespace)), e;
    }
    data(e, a) {
        return typeof e == "string" ? arguments.length === 2 ? (SMe("data", this.frozen), this.namespace[e] = a, this) : tgr.call(this.namespace, e) && this.namespace[e] || void 0 : e ? (SMe("data", this.frozen), this.namespace = e, this) : this.namespace;
    }
    freeze() {
        if (this.frozen) return this;
        const e = this;
        for(; ++this.freezeIndex < this.attachers.length;){
            const [a, ...s] = this.attachers[this.freezeIndex];
            if (s[0] === !1) continue;
            s[0] === !0 && (s[0] = void 0);
            const l = a.call(e, ...s);
            typeof l == "function" && this.transformers.use(l);
        }
        return this.frozen = !0, this.freezeIndex = Number.POSITIVE_INFINITY, this;
    }
    parse(e) {
        this.freeze();
        const a = Gfe(e), s = this.parser || this.Parser;
        return xMe("parse", s), s(String(a), a);
    }
    process(e, a) {
        const s = this;
        return this.freeze(), xMe("process", this.parser || this.Parser), CMe("process", this.compiler || this.Compiler), a ? l(void 0, a) : new Promise(l);
        function l(u, p) {
            const m = Gfe(e), b = s.parse(m);
            s.run(b, m, function(_, v, x) {
                if (_ || !v || !x) return g(_);
                const C = v, E = s.stringify(C, x);
                Qhr(E) ? x.value = E : x.result = E, g(_, x);
            });
            function g(_, v) {
                _ || !v ? p(_) : u ? u(v) : a(void 0, v);
            }
            i(g, "realDone");
        }
        i(l, "executor");
    }
    processSync(e) {
        let a = !1, s;
        return this.freeze(), xMe("processSync", this.parser || this.Parser), CMe("processSync", this.compiler || this.Compiler), this.process(e, l), zPt("processSync", "process", a), s;
        function l(u, p) {
            a = !0, LPt(u), s = p;
        }
        i(l, "realDone");
    }
    run(e, a, s) {
        OPt(e), this.freeze();
        const l = this.transformers;
        return !s && typeof a == "function" && (s = a, a = void 0), s ? u(void 0, s) : new Promise(u);
        function u(p, m) {
            const b = Gfe(a);
            l.run(e, b, g);
            function g(_, v, x) {
                const C = v || e;
                _ ? m(_) : p ? p(C) : s(void 0, C, x);
            }
            i(g, "realDone");
        }
        i(u, "executor");
    }
    runSync(e, a) {
        let s = !1, l;
        return this.run(e, a, u), zPt("runSync", "run", s), l;
        function u(p, m) {
            LPt(p), l = m, s = !0;
        }
        i(u, "realDone");
    }
    stringify(e, a) {
        this.freeze();
        const s = Gfe(a), l = this.compiler || this.Compiler;
        return CMe("stringify", l), OPt(e), l(e, s);
    }
    use(e, ...a) {
        const s = this.attachers, l = this.namespace;
        if (SMe("use", this.frozen), e != null) if (typeof e == "function") b(e, a);
        else if (typeof e == "object") Array.isArray(e) ? m(e) : p(e);
        else throw new TypeError("Expected usable value, not `" + e + "`");
        return this;
        function u(g) {
            if (typeof g == "function") b(g, []);
            else if (typeof g == "object") if (Array.isArray(g)) {
                const [_, ...v] = g;
                b(_, v);
            } else p(g);
            else throw new TypeError("Expected usable value, not `" + g + "`");
        }
        function p(g) {
            if (!("plugins" in g) && !("settings" in g)) throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");
            m(g.plugins), g.settings && (l.settings = (0, EMe.default)(!0, l.settings, g.settings));
        }
        function m(g) {
            let _ = -1;
            if (g != null) if (Array.isArray(g)) for(; ++_ < g.length;){
                const v = g[_];
                u(v);
            }
            else throw new TypeError("Expected a list of plugins, not `" + g + "`");
        }
        function b(g, _) {
            let v = -1, x = -1;
            for(; ++v < s.length;)if (s[v][0] === g) {
                x = v;
                break;
            }
            if (x === -1) s.push([
                g,
                ..._
            ]);
            else if (_.length > 0) {
                let [C, ...E] = _;
                const A = s[x][1];
                yMe(A) && yMe(C) && (C = (0, EMe.default)(!0, A, C)), s[x] = [
                    g,
                    C,
                    ...E
                ];
            }
        }
    }
}, i(BPt, "Processor"), ngr = BPt, rgr = new ngr().freeze(), i(xMe, "assertParser"), i(CMe, "assertCompiler"), i(SMe, "assertUnfrozen"), i(OPt, "assertNode"), i(zPt, "assertDone"), i(Gfe, "vfile"), i(Jhr, "looksLikeAVFile"), i(Qhr, "looksLikeAValue"), i(egr, "isUint8Array");

}
