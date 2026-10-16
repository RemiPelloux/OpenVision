import { Vse } from "./A3u.js";
import { Se, bt, ve, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { Cn, qt } from "./configuration.js";
import { Pn } from "./extensions.js";
import { qM } from "./glob.js";
import { Ze } from "./instantiation.js";
import { YEc, oc } from "./map.js";
import { ba, e2, kO, sht } from "./path_2.js";
import { mn, vn } from "./qIc.js";
import { Li, h3, ml } from "./resources.js";
import { x } from "./tslib.es6.js";
import { Jn, ci } from "./workspace.js";
var O_e, ooe;
export { O_e, ooe };
var __wakaru_Gde_initialized = false;
export function Gde() {
if (__wakaru_Gde_initialized) return;
__wakaru_Gde_initialized = true;
"use strict";
x(), bt(), qM(), Se(), ba(), Li(), Cn(), Pn(), Ze(), ci(), oc(), O_e = class extends we {
    constructor(e, t){
        super(), this.configurationService = e, this.workspaceContextService = t, this._onDidChange = this._register(new ve), this.onDidChange = this._onDidChange.event, this.patterns = [], this.enabled = !0, this.cache = new YEc(1e3), this._templateRegexValidation = /[a-zA-Z0-9]/, this._parsedTemplateExpression = /\$\{(dirname|filename|extname|extname\((?<extnameN>[-+]?\d+)\)|dirname\((?<dirnameN>[-+]?\d+)\))\}/g, this._filenameCaptureExpression = /(?<filename>^\.*[^.]*)/, this.storeEnablementState(), this.storeCustomPatterns(), this.registerListeners();
    }
    registerListeners() {
        this._register(this.configurationService.onDidChangeConfiguration((e)=>{
            if (e.affectsConfiguration(O_e.SETTING_ID_ENABLED)) {
                const t = this.enabled;
                this.storeEnablementState(), t !== this.enabled && this.patterns.length > 0 && this._onDidChange.fire();
            } else e.affectsConfiguration(O_e.SETTING_ID_PATTERNS) && (this.cache.clear(), this.storeCustomPatterns(), this._onDidChange.fire());
        }));
    }
    storeEnablementState() {
        this.enabled = this.configurationService.getValue(O_e.SETTING_ID_ENABLED);
    }
    storeCustomPatterns() {
        this.patterns = [];
        const e = this.configurationService.getValue(O_e.SETTING_ID_PATTERNS);
        for(const t in e){
            const n = e[t];
            if (!this._templateRegexValidation.test(n)) continue;
            const i = e2(t), r = Vse(t);
            this.patterns.push({
                pattern: t,
                template: n,
                isAbsolutePath: i,
                parsedPattern: r
            });
        }
        this.patterns.sort((t, n)=>this.patternWeight(n.pattern) - this.patternWeight(t.pattern));
    }
    patternWeight(e) {
        let t = 0;
        for (const n of e.split("/"))n === "**" ? t += 1 : n === "*" ? t += 10 : n.includes("*") || n.includes("?") ? t += 50 : n !== "" && (t += 100);
        return t;
    }
    getName(e) {
        if (!this.enabled || this.patterns.length === 0) return;
        const t = e.toString(), n = this.cache.get(t);
        if (n !== void 0) return n ?? void 0;
        const i = this.applyPatterns(e);
        return this.cache.set(t, i ?? null), i;
    }
    applyPatterns(e) {
        const t = this.workspaceContextService.getWorkspaceFolder(e);
        let n;
        for (const i of this.patterns){
            let r;
            if (t && !i.isAbsolutePath ? (n || (n = h3(ml(t.uri), e) ?? e.path), r = n) : r = e.path, i.parsedPattern(r)) return this.applyTemplate(i.template, e, r);
        }
    }
    applyTemplate(e, t, n) {
        let i;
        return e.replace(this._parsedTemplateExpression, (r, s, ...o)=>{
            i = i ?? sht(t.path);
            const { dirnameN: a = "0", extnameN: c = "0" } = o.pop();
            if (s === "filename") {
                const { filename: l } = this._filenameCaptureExpression.exec(i.base)?.groups ?? {};
                if (l) return l;
            } else if (s === "extname") {
                const l = this.getExtnames(i.base);
                if (l) return l;
            } else if (s.startsWith("extname")) {
                const l = parseInt(c), u = this.getNthExtname(i.base, l);
                if (u) return u;
            } else if (s.startsWith("dirname")) {
                const l = parseInt(a), u = this.getNthDirname(kO(n), l);
                if (u) return u;
            }
            return r;
        });
    }
    removeLeadingDot(e) {
        let t = e;
        for(; t.startsWith(".");)t = t.slice(1);
        return t;
    }
    getNthDirname(e, t) {
        e = e.startsWith("/") ? e.slice(1) : e;
        const n = e.split("/");
        return this.getNthFragment(n, t);
    }
    getExtnames(e) {
        return this.removeLeadingDot(e).split(".").slice(1).join(".");
    }
    getNthExtname(e, t) {
        const n = this.removeLeadingDot(e).split(".");
        return n.shift(), this.getNthFragment(n, t);
    }
    getNthFragment(e, t) {
        const n = e.length;
        let i;
        t < 0 ? i = Math.abs(t) - 1 : i = n - t - 1;
        const r = e[i];
        if (!(r === void 0 || r === "")) return r;
    }
}, O_e.SETTING_ID_PATTERNS = "workbench.editor.customLabels.patterns", O_e.SETTING_ID_ENABLED = "workbench.editor.customLabels.enabled", O_e = ie([
    C(0, qt),
    C(1, Jn)
], O_e), ooe = vn("ICustomEditorLabelService"), mn(ooe, O_e, 1);

}
