import { cHg, o_l } from "./callable-instance.js";
import { QRe } from "./default.js";
import { G$g, QEi } from "./index4.js";
import { $$g } from "./index_111.js";
import { V$g } from "./index_113.js";
import { z$g } from "./index_114.js";
import { aHg } from "./index_115.js";
import { Jvl, a_l, c_l, d_s, exi, h_s, j$g, o_s, uHg, u_s } from "./qIc.js";
import { x } from "./tslib.es6.js";
var l_l, u_l, d_l;
export { d_l, l_l, u_l };
var __wakaru_hHg_initialized = false;
export function hHg() {
if (__wakaru_hHg_initialized) return;
__wakaru_hHg_initialized = true;
x(), $$g(), G$g(), QRe(), V$g(), cHg(), z$g(), aHg(), l_l = {}.hasOwnProperty, u_l = class Pwm extends o_l {
    constructor(){
        super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = j$g();
    }
    copy() {
        const t = new Pwm;
        let n = -1;
        for(; ++n < this.attachers.length;){
            const i = this.attachers[n];
            t.use(...i);
        }
        return t.data(QEi(!0, {}, this.namespace)), t;
    }
    data(t, n) {
        return typeof t == "string" ? arguments.length === 2 ? (h_s("data", this.frozen), this.namespace[t] = n, this) : l_l.call(this.namespace, t) && this.namespace[t] || void 0 : t ? (h_s("data", this.frozen), this.namespace = t, this) : this.namespace;
    }
    freeze() {
        if (this.frozen) return this;
        const t = this;
        for(; ++this.freezeIndex < this.attachers.length;){
            const [n, ...i] = this.attachers[this.freezeIndex];
            if (i[0] === !1) continue;
            i[0] === !0 && (i[0] = void 0);
            const r = n.call(t, ...i);
            typeof r == "function" && this.transformers.use(r);
        }
        return this.frozen = !0, this.freezeIndex = Number.POSITIVE_INFINITY, this;
    }
    parse(t) {
        this.freeze();
        const n = exi(t), i = this.parser || this.Parser;
        return u_s("parse", i), i(String(n), n);
    }
    process(t, n) {
        const i = this;
        return this.freeze(), u_s("process", this.parser || this.Parser), d_s("process", this.compiler || this.Compiler), n ? r(void 0, n) : new Promise(r);
        function r(s, o) {
            const a = exi(t), c = i.parse(a);
            i.run(c, a, function(u, h, p) {
                if (u || !h || !p) return l(u);
                const g = h, f = i.stringify(g, p);
                uHg(f) ? p.value = f : p.result = f, l(u, p);
            });
            function l(u, h) {
                u || !h ? o(u) : s ? s(h) : n(void 0, h);
            }
        }
    }
    processSync(t) {
        let n = !1, i;
        return this.freeze(), u_s("processSync", this.parser || this.Parser), d_s("processSync", this.compiler || this.Compiler), this.process(t, r), c_l("processSync", "process", n), i;
        function r(s, o) {
            n = !0, Jvl(s), i = o;
        }
    }
    run(t, n, i) {
        a_l(t), this.freeze();
        const r = this.transformers;
        return !i && typeof n == "function" && (i = n, n = void 0), i ? s(void 0, i) : new Promise(s);
        function s(o, a) {
            const c = exi(n);
            r.run(t, c, l);
            function l(u, h, p) {
                const g = h || t;
                u ? a(u) : o ? o(g) : i(void 0, g, p);
            }
        }
    }
    runSync(t, n) {
        let i = !1, r;
        return this.run(t, n, s), c_l("runSync", "run", i), r;
        function s(o, a) {
            Jvl(o), r = a, i = !0;
        }
    }
    stringify(t, n) {
        this.freeze();
        const i = exi(n), r = this.compiler || this.Compiler;
        return d_s("stringify", r), a_l(t), r(t, i);
    }
    use(t, ...n) {
        const i = this.attachers, r = this.namespace;
        if (h_s("use", this.frozen), t != null) if (typeof t == "function") c(t, n);
        else if (typeof t == "object") Array.isArray(t) ? a(t) : o(t);
        else throw new TypeError("Expected usable value, not `" + t + "`");
        return this;
        function s(l) {
            if (typeof l == "function") c(l, []);
            else if (typeof l == "object") if (Array.isArray(l)) {
                const [u, ...h] = l;
                c(u, h);
            } else o(l);
            else throw new TypeError("Expected usable value, not `" + l + "`");
        }
        function o(l) {
            if (!("plugins" in l) && !("settings" in l)) throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");
            a(l.plugins), l.settings && (r.settings = QEi(!0, r.settings, l.settings));
        }
        function a(l) {
            let u = -1;
            if (l != null) if (Array.isArray(l)) for(; ++u < l.length;){
                const h = l[u];
                s(h);
            }
            else throw new TypeError("Expected a list of plugins, not `" + l + "`");
        }
        function c(l, u) {
            let h = -1, p = -1;
            for(; ++h < i.length;)if (i[h][0] === l) {
                p = h;
                break;
            }
            if (p === -1) i.push([
                l,
                ...u
            ]);
            else if (u.length > 0) {
                let [g, ...f] = u;
                const v = i[p][1];
                o_s(v) && o_s(g) && (g = QEi(!0, v, g)), i[p] = [
                    l,
                    g,
                    ...f
                ];
            }
        }
    }
}, d_l = new u_l().freeze();

}
