import { Gt, Qe, st, tt } from "./Iwo.js";
import { bn, jn } from "./SZu.js";
import { or, yi } from "./configuration.js";
import { Rn } from "./extensions.js";
import { NB } from "./glob.js";
import { It } from "./instantiation.js";
import { bYu, du } from "./map.js";
import { Ul, eW, g4, i6t } from "./path_2.js";
import { Lr, Mc, iL } from "./resources.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { Sr, yr } from "./workspace.js";
import { gCe } from "./yBp.js";
var LPe, OCe;
export { LPe, OCe };
var __wakaru_OPe_initialized = false;
export function OPe() {
if (__wakaru_OPe_initialized) return;
__wakaru_OPe_initialized = true;
"use strict";
E(), Gt(), NB(), Qe(), Ul(), Lr(), or(), Rn(), It(), Sr(), du(), LPe = class extends st {
    constructor(t, e){
        super(), this.configurationService = t, this.workspaceContextService = e, this._onDidChange = this._register(new tt), this.onDidChange = this._onDidChange.event, this.patterns = [], this.enabled = !0, this.cache = new bYu(1e3), this._templateRegexValidation = /[a-zA-Z0-9]/, this._parsedTemplateExpression = /\$\{(dirname|filename|extname|extname\((?<extnameN>[-+]?\d+)\)|dirname\((?<dirnameN>[-+]?\d+)\))\}/g, this._filenameCaptureExpression = /(?<filename>^\.*[^.]*)/, this.storeEnablementState(), this.storeCustomPatterns(), this.registerListeners();
    }
    registerListeners() {
        this._register(this.configurationService.onDidChangeConfiguration((t)=>{
            if (t.affectsConfiguration(LPe.SETTING_ID_ENABLED)) {
                const e = this.enabled;
                this.storeEnablementState(), e !== this.enabled && this.patterns.length > 0 && this._onDidChange.fire();
            } else t.affectsConfiguration(LPe.SETTING_ID_PATTERNS) && (this.cache.clear(), this.storeCustomPatterns(), this._onDidChange.fire());
        }));
    }
    storeEnablementState() {
        this.enabled = this.configurationService.getValue(LPe.SETTING_ID_ENABLED);
    }
    storeCustomPatterns() {
        this.patterns = [];
        const t = this.configurationService.getValue(LPe.SETTING_ID_PATTERNS);
        for(const e in t){
            const n = t[e];
            if (!this._templateRegexValidation.test(n)) continue;
            const i = eW(e), r = gCe(e);
            this.patterns.push({
                pattern: e,
                template: n,
                isAbsolutePath: i,
                parsedPattern: r
            });
        }
        this.patterns.sort((e, n)=>this.patternWeight(n.pattern) - this.patternWeight(e.pattern));
    }
    patternWeight(t) {
        let e = 0;
        for (const n of t.split("/"))n === "**" ? e += 1 : n === "*" ? e += 10 : n.includes("*") || n.includes("?") ? e += 50 : n !== "" && (e += 100);
        return e;
    }
    getName(t) {
        if (!this.enabled || this.patterns.length === 0) return;
        const e = t.toString(), n = this.cache.get(e);
        if (n !== void 0) return n ?? void 0;
        const i = this.applyPatterns(t);
        return this.cache.set(e, i ?? null), i;
    }
    applyPatterns(t) {
        const e = this.workspaceContextService.getWorkspaceFolder(t);
        let n;
        for (const i of this.patterns){
            let r;
            if (e && !i.isAbsolutePath ? (n || (n = iL(Mc(e.uri), t) ?? t.path), r = n) : r = t.path, i.parsedPattern(r)) return this.applyTemplate(i.template, t, r);
        }
    }
    applyTemplate(t, e, n) {
        let i;
        return t.replace(this._parsedTemplateExpression, (r, s, ...o)=>{
            i = i ?? i6t(e.path);
            const { dirnameN: a = "0", extnameN: l = "0" } = o.pop();
            if (s === "filename") {
                const { filename: c } = this._filenameCaptureExpression.exec(i.base)?.groups ?? {};
                if (c) return c;
            } else if (s === "extname") {
                const c = this.getExtnames(i.base);
                if (c) return c;
            } else if (s.startsWith("extname")) {
                const c = parseInt(l), u = this.getNthExtname(i.base, c);
                if (u) return u;
            } else if (s.startsWith("dirname")) {
                const c = parseInt(a), u = this.getNthDirname(g4(n), c);
                if (u) return u;
            }
            return r;
        });
    }
    removeLeadingDot(t) {
        let e = t;
        for(; e.startsWith(".");)e = e.slice(1);
        return e;
    }
    getNthDirname(t, e) {
        t = t.startsWith("/") ? t.slice(1) : t;
        const n = t.split("/");
        return this.getNthFragment(n, e);
    }
    getExtnames(t) {
        return this.removeLeadingDot(t).split(".").slice(1).join(".");
    }
    getNthExtname(t, e) {
        const n = this.removeLeadingDot(t).split(".");
        return n.shift(), this.getNthFragment(n, e);
    }
    getNthFragment(t, e) {
        const n = t.length;
        let i;
        e < 0 ? i = Math.abs(e) - 1 : i = n - e - 1;
        const r = t[i];
        if (!(r === void 0 || r === "")) return r;
    }
}, LPe.SETTING_ID_PATTERNS = "workbench.editor.customLabels.patterns", LPe.SETTING_ID_ENABLED = "workbench.editor.customLabels.enabled", LPe = Re([
    F(0, yi),
    F(1, yr)
], LPe), OCe = jn("ICustomEditorLabelService"), bn(OCe, LPe, 1);

}
