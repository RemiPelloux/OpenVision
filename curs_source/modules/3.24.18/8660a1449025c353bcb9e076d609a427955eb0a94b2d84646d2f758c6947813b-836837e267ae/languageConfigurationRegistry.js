import { Fa, Gt, Pn, Qe, m4, st, tt } from "./Iwo.js";
import { bn, jn } from "./SZu.js";
import { gFd, yAy } from "./characterPair.js";
import { or, yi } from "./configuration.js";
import { RAy, kFd } from "./electricCharacter.js";
import { Rn } from "./extensions.js";
import { PAy, wFd } from "./indentRules.js";
import { It } from "./instantiation.js";
import { Kp, Ph } from "./language.js";
import { MFd, NAy } from "./languageBracketsConfiguration.js";
import { Lbt, mFd } from "./languageConfiguration.js";
import { iR, y4 } from "./modesRegistry.js";
import { CFd, MAy } from "./onEnter.js";
import { SFd, lwr } from "./richEditBrackets.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { P9t, swr } from "./wordHelper.js";
import { FFd, LAy, rwr } from "./ze.js";
var hwr, fA, pwr, mwr, BFd, cUo, uUo, UFd, Kii;
export { BFd, Kii, UFd, cUo, fA, hwr, mwr, pwr, uUo };
var __wakaru_RD_initialized = false;
export function RD() {
if (__wakaru_RD_initialized) return;
__wakaru_RD_initialized = true;
"use strict";
E(), Gt(), Qe(), Fa(), P9t(), Lbt(), yAy(), RAy(), PAy(), MAy(), lwr(), It(), or(), Kp(), Rn(), y4(), NAy(), hwr = class {
    constructor(t){
        this.languageId = t;
    }
    affects(t) {
        return this.languageId ? this.languageId === t : !0;
    }
}, fA = jn("languageConfigurationService"), pwr = class extends st {
    constructor(t, e){
        super(), this.configurationService = t, this.languageService = e, this._registry = this._register(new UFd), this.onDidChangeEmitter = this._register(new tt), this.onDidChange = this.onDidChangeEmitter.event, this.configurations = new Map;
        const n = new Set(Object.values(mwr));
        this._register(this.configurationService.onDidChangeConfiguration((i)=>{
            const r = i.change.keys.some((o)=>n.has(o)), s = i.change.overrides.filter(([o, a])=>a.some((l)=>n.has(l))).map(([o])=>o);
            if (r) this.configurations.clear(), this.onDidChangeEmitter.fire(new hwr(void 0));
            else for (const o of s)this.languageService.isRegisteredLanguageId(o) && (this.configurations.delete(o), this.onDidChangeEmitter.fire(new hwr(o)));
        })), this._register(this._registry.onDidChange((i)=>{
            this.configurations.delete(i.languageId), this.onDidChangeEmitter.fire(new hwr(i.languageId));
        }));
    }
    register(t, e, n) {
        return this._registry.register(t, e, n);
    }
    getLanguageConfiguration(t) {
        let e = this.configurations.get(t);
        return e || (e = LAy(t, this._registry, this.configurationService, this.languageService), this.configurations.set(t, e)), e;
    }
}, pwr = Re([
    F(0, yi),
    F(1, Ph)
], pwr), mwr = {
    brackets: "editor.language.brackets",
    colorizedBracketPairs: "editor.language.colorizedBracketPairs"
}, BFd = class {
    constructor(t){
        this.languageId = t, this._resolved = null, this._entries = [], this._order = 0, this._resolved = null;
    }
    register(t, e) {
        const n = new cUo(t, e, ++this._order);
        return this._entries.push(n), this._resolved = null, m4(Pn(()=>{
            for(let i = 0; i < this._entries.length; i++)if (this._entries[i] === n) {
                this._entries.splice(i, 1), this._resolved = null;
                break;
            }
        }));
    }
    getResolvedConfiguration() {
        if (!this._resolved) {
            const t = this._resolve();
            t && (this._resolved = new Kii(this.languageId, t));
        }
        return this._resolved;
    }
    _resolve() {
        return this._entries.length === 0 ? null : (this._entries.sort(cUo.cmp), FFd(this._entries.map((t)=>t.configuration)));
    }
}, cUo = class {
    constructor(t, e, n){
        this.configuration = t, this.priority = e, this.order = n;
    }
    static cmp(t, e) {
        return t.priority === e.priority ? t.order - e.order : t.priority - e.priority;
    }
}, uUo = class {
    constructor(t){
        this.languageId = t;
    }
}, UFd = class extends st {
    constructor(){
        super(), this._entries = new Map, this._onDidChange = this._register(new tt), this.onDidChange = this._onDidChange.event, this._register(this.register(iR, {
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
    register(t, e, n = 0) {
        let i = this._entries.get(t);
        i || (i = new BFd(t), this._entries.set(t, i));
        const r = i.register(e, n);
        return this._onDidChange.fire(new uUo(t)), m4(Pn(()=>{
            r.dispose(), this._onDidChange.fire(new uUo(t));
        }));
    }
    getLanguageConfiguration(t) {
        return this._entries.get(t)?.getResolvedConfiguration() || null;
    }
}, Kii = class _Ab {
    constructor(e, n){
        this.languageId = e, this.underlyingConfig = n, this._brackets = null, this._electricCharacter = null, this._onEnterSupport = this.underlyingConfig.brackets || this.underlyingConfig.indentationRules || this.underlyingConfig.onEnterRules ? new CFd(this.underlyingConfig) : null, this.comments = _Ab._handleComments(this.underlyingConfig), this.characterPair = new gFd(this.underlyingConfig), this.wordDefinition = this.underlyingConfig.wordPattern || swr, this.indentationRules = this.underlyingConfig.indentationRules, this.underlyingConfig.indentationRules ? this.indentRulesSupport = new wFd(this.underlyingConfig.indentationRules) : this.indentRulesSupport = null, this.foldingRules = this.underlyingConfig.folding || {}, this.bracketsNew = new MFd(e, this.underlyingConfig);
    }
    getWordDefinition() {
        return rwr(this.wordDefinition);
    }
    get brackets() {
        return !this._brackets && this.underlyingConfig.brackets && (this._brackets = new SFd(this.languageId, this.underlyingConfig.brackets)), this._brackets;
    }
    get electricCharacter() {
        return this._electricCharacter || (this._electricCharacter = new kFd(this.brackets)), this._electricCharacter;
    }
    onEnter(e, n, i, r) {
        return this._onEnterSupport ? this._onEnterSupport.onEnter(e, n, i, r) : null;
    }
    getAutoClosingPairs() {
        return new mFd(this.characterPair.getAutoClosingPairs());
    }
    getAutoCloseBeforeSet(e) {
        return this.characterPair.getAutoCloseBeforeSet(e);
    }
    getSurroundingPairs() {
        return this.characterPair.getSurroundingPairs();
    }
    static _handleComments(e) {
        const n = e.comments;
        if (!n) return null;
        const i = {};
        if (n.lineComment && (typeof n.lineComment == "string" ? i.lineCommentToken = n.lineComment : (i.lineCommentToken = n.lineComment.comment, i.lineCommentNoIndent = n.lineComment.noIndent)), n.blockComment) {
            const [r, s] = n.blockComment;
            i.blockCommentStartToken = r, i.blockCommentEndToken = s;
        }
        return i;
    }
}, bn(fA, pwr, 1);

}
