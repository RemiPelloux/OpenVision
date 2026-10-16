import { Ayh, Csa, Esa, EtS, Ryh, Syh, Tsa, pDr, qtS, ysa } from "./LYd.js";
import { WtS, xyh } from "./callable-instance.js";
import { mWe } from "./default.js";
import { CtS, dDr } from "./index4.js";
import { StS } from "./index_116.js";
import { TtS } from "./index_118.js";
import { xtS } from "./index_119.js";
import { HtS } from "./index_120.js";
import { E } from "./tslib.es6.js";
var Pyh, Myh, Dyh;
export { Dyh, Myh, Pyh };
var __wakaru_VtS_initialized = false;
export function VtS() {
if (__wakaru_VtS_initialized) return;
__wakaru_VtS_initialized = true;
E(), StS(), CtS(), mWe(), TtS(), WtS(), xtS(), HtS(), Pyh = {}.hasOwnProperty, Myh = class m2b extends xyh {
    constructor(){
        super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = EtS();
    }
    copy() {
        const e = new m2b;
        let n = -1;
        for(; ++n < this.attachers.length;){
            const i = this.attachers[n];
            e.use(...i);
        }
        return e.data(dDr(!0, {}, this.namespace)), e;
    }
    data(e, n) {
        return typeof e == "string" ? arguments.length === 2 ? (Esa("data", this.frozen), this.namespace[e] = n, this) : Pyh.call(this.namespace, e) && this.namespace[e] || void 0 : e ? (Esa("data", this.frozen), this.namespace = e, this) : this.namespace;
    }
    freeze() {
        if (this.frozen) return this;
        const e = this;
        for(; ++this.freezeIndex < this.attachers.length;){
            const [n, ...i] = this.attachers[this.freezeIndex];
            if (i[0] === !1) continue;
            i[0] === !0 && (i[0] = void 0);
            const r = n.call(e, ...i);
            typeof r == "function" && this.transformers.use(r);
        }
        return this.frozen = !0, this.freezeIndex = Number.POSITIVE_INFINITY, this;
    }
    parse(e) {
        this.freeze();
        const n = pDr(e), i = this.parser || this.Parser;
        return Csa("parse", i), i(String(n), n);
    }
    process(e, n) {
        const i = this;
        return this.freeze(), Csa("process", this.parser || this.Parser), Tsa("process", this.compiler || this.Compiler), n ? r(void 0, n) : new Promise(r);
        function r(s, o) {
            const a = pDr(e), l = i.parse(a);
            i.run(l, a, function(u, d, h) {
                if (u || !d || !h) return c(u);
                const p = d, g = i.stringify(p, h);
                qtS(g) ? h.value = g : h.result = g, c(u, h);
            });
            function c(u, d) {
                u || !d ? o(u) : s ? s(d) : n(void 0, d);
            }
        }
    }
    processSync(e) {
        let n = !1, i;
        return this.freeze(), Csa("processSync", this.parser || this.Parser), Tsa("processSync", this.compiler || this.Compiler), this.process(e, r), Ryh("processSync", "process", n), i;
        function r(s, o) {
            n = !0, Syh(s), i = o;
        }
    }
    run(e, n, i) {
        Ayh(e), this.freeze();
        const r = this.transformers;
        return !i && typeof n == "function" && (i = n, n = void 0), i ? s(void 0, i) : new Promise(s);
        function s(o, a) {
            const l = pDr(n);
            r.run(e, l, c);
            function c(u, d, h) {
                const p = d || e;
                u ? a(u) : o ? o(p) : i(void 0, p, h);
            }
        }
    }
    runSync(e, n) {
        let i = !1, r;
        return this.run(e, n, s), Ryh("runSync", "run", i), r;
        function s(o, a) {
            Syh(o), r = a, i = !0;
        }
    }
    stringify(e, n) {
        this.freeze();
        const i = pDr(n), r = this.compiler || this.Compiler;
        return Tsa("stringify", r), Ayh(e), r(e, i);
    }
    use(e, ...n) {
        const i = this.attachers, r = this.namespace;
        if (Esa("use", this.frozen), e != null) if (typeof e == "function") l(e, n);
        else if (typeof e == "object") Array.isArray(e) ? a(e) : o(e);
        else throw new TypeError("Expected usable value, not `" + e + "`");
        return this;
        function s(c) {
            if (typeof c == "function") l(c, []);
            else if (typeof c == "object") if (Array.isArray(c)) {
                const [u, ...d] = c;
                l(u, d);
            } else o(c);
            else throw new TypeError("Expected usable value, not `" + c + "`");
        }
        function o(c) {
            if (!("plugins" in c) && !("settings" in c)) throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");
            a(c.plugins), c.settings && (r.settings = dDr(!0, r.settings, c.settings));
        }
        function a(c) {
            let u = -1;
            if (c != null) if (Array.isArray(c)) for(; ++u < c.length;){
                const d = c[u];
                s(d);
            }
            else throw new TypeError("Expected a list of plugins, not `" + c + "`");
        }
        function l(c, u) {
            let d = -1, h = -1;
            for(; ++d < i.length;)if (i[d][0] === c) {
                h = d;
                break;
            }
            if (h === -1) i.push([
                c,
                ...u
            ]);
            else if (u.length > 0) {
                let [p, ...g] = u;
                const f = i[h][1];
                ysa(f) && ysa(p) && (p = dDr(!0, f, p)), i[h] = [
                    c,
                    p,
                    ...g
                ];
            }
        }
    }
}, Dyh = new Myh().freeze();

}
