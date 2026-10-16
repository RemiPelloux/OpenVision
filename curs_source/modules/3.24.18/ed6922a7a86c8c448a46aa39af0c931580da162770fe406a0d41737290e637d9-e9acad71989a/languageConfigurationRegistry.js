import { Ps, Se, bt, rn, u3, ve, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { KMc, dpg } from "./characterPair.js";
import { Cn, qt } from "./configuration.js";
import { Spg, tPc } from "./electricCharacter.js";
import { Pn } from "./extensions.js";
import { kpg, nPc } from "./indentRules.js";
import { Ze } from "./instantiation.js";
import { kl, pc } from "./language.js";
import { CPc, Lpg } from "./languageBracketsConfiguration.js";
import { ize, zMc } from "./languageConfiguration.js";
import { $T, Sy } from "./modesRegistry.js";
import { iPc, wpg } from "./onEnter.js";
import { APc, Npg, egn, mn, vn } from "./qIc.js";
import { bfi, ePc } from "./richEditBrackets.js";
import { x } from "./tslib.es6.js";
import { C2t, NAe } from "./wordHelper.js";
var Cfi, uC, Tfi, Efi, RPc, EXr, xXr, DPc, ogn;
export { Cfi, DPc, EXr, Efi, RPc, Tfi, ogn, uC, xXr };
var __wakaru_HT_initialized = false;
export function HT() {
if (__wakaru_HT_initialized) return;
__wakaru_HT_initialized = true;
"use strict";
x(), bt(), Se(), Ps(), NAe(), ize(), dpg(), Spg(), kpg(), wpg(), bfi(), Ze(), Cn(), kl(), Pn(), $T(), Lpg(), Cfi = class {
    constructor(e){
        this.languageId = e;
    }
    affects(e) {
        return this.languageId ? this.languageId === e : !0;
    }
}, uC = vn("languageConfigurationService"), Tfi = class extends we {
    constructor(e, t){
        super(), this.configurationService = e, this.languageService = t, this._registry = this._register(new DPc), this.onDidChangeEmitter = this._register(new ve), this.onDidChange = this.onDidChangeEmitter.event, this.configurations = new Map;
        const n = new Set(Object.values(Efi));
        this._register(this.configurationService.onDidChangeConfiguration((i)=>{
            const r = i.change.keys.some((o)=>n.has(o)), s = i.change.overrides.filter(([o, a])=>a.some((c)=>n.has(c))).map(([o])=>o);
            if (r) this.configurations.clear(), this.onDidChangeEmitter.fire(new Cfi(void 0));
            else for (const o of s)this.languageService.isRegisteredLanguageId(o) && (this.configurations.delete(o), this.onDidChangeEmitter.fire(new Cfi(o)));
        })), this._register(this._registry.onDidChange((i)=>{
            this.configurations.delete(i.languageId), this.onDidChangeEmitter.fire(new Cfi(i.languageId));
        }));
    }
    register(e, t, n) {
        return this._registry.register(e, t, n);
    }
    getLanguageConfiguration(e) {
        let t = this.configurations.get(e);
        return t || (t = Npg(e, this._registry, this.configurationService, this.languageService), this.configurations.set(e, t)), t;
    }
}, Tfi = ie([
    C(0, qt),
    C(1, pc)
], Tfi), Efi = {
    brackets: "editor.language.brackets",
    colorizedBracketPairs: "editor.language.colorizedBracketPairs"
}, RPc = class {
    constructor(e){
        this.languageId = e, this._resolved = null, this._entries = [], this._order = 0, this._resolved = null;
    }
    register(e, t) {
        const n = new EXr(e, t, ++this._order);
        return this._entries.push(n), this._resolved = null, u3(rn(()=>{
            for(let i = 0; i < this._entries.length; i++)if (this._entries[i] === n) {
                this._entries.splice(i, 1), this._resolved = null;
                break;
            }
        }));
    }
    getResolvedConfiguration() {
        if (!this._resolved) {
            const e = this._resolve();
            e && (this._resolved = new ogn(this.languageId, e));
        }
        return this._resolved;
    }
    _resolve() {
        return this._entries.length === 0 ? null : (this._entries.sort(EXr.cmp), APc(this._entries.map((e)=>e.configuration)));
    }
}, EXr = class {
    constructor(e, t, n){
        this.configuration = e, this.priority = t, this.order = n;
    }
    static cmp(e, t) {
        return e.priority === t.priority ? e.order - t.order : e.priority - t.priority;
    }
}, xXr = class {
    constructor(e){
        this.languageId = e;
    }
}, DPc = class extends we {
    constructor(){
        super(), this._entries = new Map, this._onDidChange = this._register(new ve), this.onDidChange = this._onDidChange.event, this._register(this.register(Sy, {
            brackets: [
                [
                    "(",
                    ")"
                ],
                [
                    "[",
                    "]"
                ],
                [
                    "{",
                    "}"
                ]
            ],
            surroundingPairs: [
                {
                    open: "{",
                    close: "}"
                },
                {
                    open: "[",
                    close: "]"
                },
                {
                    open: "(",
                    close: ")"
                },
                {
                    open: "<",
                    close: ">"
                },
                {
                    open: '"',
                    close: '"'
                },
                {
                    open: "'",
                    close: "'"
                },
                {
                    open: "`",
                    close: "`"
                }
            ],
            colorizedBracketPairs: [],
            folding: {
                offSide: !0
            }
        }, 0));
    }
    register(e, t, n = 0) {
        let i = this._entries.get(e);
        i || (i = new RPc(e), this._entries.set(e, i));
        const r = i.register(t, n);
        return this._onDidChange.fire(new xXr(e)), u3(rn(()=>{
            r.dispose(), this._onDidChange.fire(new xXr(e));
        }));
    }
    getLanguageConfiguration(e) {
        return this._entries.get(e)?.getResolvedConfiguration() || null;
    }
}, ogn = class VSm {
    constructor(t, n){
        this.languageId = t, this.underlyingConfig = n, this._brackets = null, this._electricCharacter = null, this._onEnterSupport = this.underlyingConfig.brackets || this.underlyingConfig.indentationRules || this.underlyingConfig.onEnterRules ? new iPc(this.underlyingConfig) : null, this.comments = VSm._handleComments(this.underlyingConfig), this.characterPair = new KMc(this.underlyingConfig), this.wordDefinition = this.underlyingConfig.wordPattern || C2t, this.indentationRules = this.underlyingConfig.indentationRules, this.underlyingConfig.indentationRules ? this.indentRulesSupport = new nPc(this.underlyingConfig.indentationRules) : this.indentRulesSupport = null, this.foldingRules = this.underlyingConfig.folding || {}, this.bracketsNew = new CPc(t, this.underlyingConfig);
    }
    getWordDefinition() {
        return egn(this.wordDefinition);
    }
    get brackets() {
        return !this._brackets && this.underlyingConfig.brackets && (this._brackets = new ePc(this.languageId, this.underlyingConfig.brackets)), this._brackets;
    }
    get electricCharacter() {
        return this._electricCharacter || (this._electricCharacter = new tPc(this.brackets)), this._electricCharacter;
    }
    onEnter(t, n, i, r) {
        return this._onEnterSupport ? this._onEnterSupport.onEnter(t, n, i, r) : null;
    }
    getAutoClosingPairs() {
        return new zMc(this.characterPair.getAutoClosingPairs());
    }
    getAutoCloseBeforeSet(t) {
        return this.characterPair.getAutoCloseBeforeSet(t);
    }
    getSurroundingPairs() {
        return this.characterPair.getSurroundingPairs();
    }
    static _handleComments(t) {
        const n = t.comments;
        if (!n) return null;
        const i = {};
        if (n.lineComment && (typeof n.lineComment == "string" ? i.lineCommentToken = n.lineComment : (i.lineCommentToken = n.lineComment.comment, i.lineCommentNoIndent = n.lineComment.noIndent)), n.blockComment) {
            const [r, s] = n.blockComment;
            i.blockCommentStartToken = r, i.blockCommentEndToken = s;
        }
        return i;
    }
}, mn(uC, Tfi, 1);

}
