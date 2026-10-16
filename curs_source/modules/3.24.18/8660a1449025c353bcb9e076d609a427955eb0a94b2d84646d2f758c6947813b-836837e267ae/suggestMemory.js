import { Nt, Qe } from "./Iwo.js";
import { bn, jn } from "./SZu.js";
import { Yu, qn } from "./async.js";
import { or, yi } from "./configuration.js";
import { Rn } from "./extensions.js";
import { It } from "./instantiation.js";
import { Iy, afn } from "./languages.js";
import { du, kv } from "./map.js";
import { Lke, Zi, ki } from "./storage_2.js";
import { Xq, wve } from "./ternarySearchTree.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
var MWr, Q3a, aDp, lDp, xst, kyi;
export { MWr, Q3a, aDp, kyi, lDp, xst };
var __wakaru_cDp_initialized = false;
export function cDp() {
if (__wakaru_cDp_initialized) return;
__wakaru_cDp_initialized = true;
"use strict";
E(), qn(), Qe(), du(), wve(), Iy(), or(), Rn(), It(), Zi(), MWr = class {
    constructor(t){
        this.name = t;
    }
    select(t, e, n) {
        if (n.length === 0) return 0;
        const i = n[0].score[0];
        for(let r = 0; r < n.length; r++){
            const { score: s, completion: o } = n[r];
            if (s[0] !== i) break;
            if (o.preselect) return r;
        }
        return 0;
    }
}, Q3a = class extends MWr {
    constructor(){
        super("first");
    }
    memorize(t, e, n) {}
    toJSON() {}
    fromJSON() {}
}, aDp = class extends MWr {
    constructor(){
        super("recentlyUsed"), this._cache = new kv(300, .66), this._seq = 0;
    }
    memorize(t, e, n) {
        const i = `${t.getLanguageId()}/${n.textLabel}`;
        this._cache.set(i, {
            touch: this._seq++,
            type: n.completion.kind,
            insertText: n.completion.insertText
        });
    }
    select(t, e, n) {
        if (n.length === 0) return 0;
        const i = t.getLineContent(e.lineNumber).substr(e.column - 10, e.column - 1);
        if (/\s$/.test(i)) return super.select(t, e, n);
        const r = n[0].score[0];
        let s = -1, o = -1, a = -1;
        for(let l = 0; l < n.length && n[l].score[0] === r; l++){
            const c = `${t.getLanguageId()}/${n[l].textLabel}`, u = this._cache.peek(c);
            if (u && u.touch > a && u.type === n[l].completion.kind && u.insertText === n[l].completion.insertText && (a = u.touch, o = l), n[l].completion.preselect && s === -1) return s = l;
        }
        return o !== -1 ? o : s !== -1 ? s : 0;
    }
    toJSON() {
        return this._cache.toJSON();
    }
    fromJSON(t) {
        this._cache.clear();
        const e = 0;
        for (const [n, i] of t)i.touch = e, i.type = typeof i.type == "number" ? i.type : afn.fromString(i.type), this._cache.set(n, i);
        this._seq = this._cache.size;
    }
}, lDp = class extends MWr {
    constructor(){
        super("recentlyUsedByPrefix"), this._trie = Xq.forStrings(), this._seq = 0;
    }
    memorize(t, e, n) {
        const { word: i } = t.getWordUntilPosition(e), r = `${t.getLanguageId()}/${i}`;
        this._trie.set(r, {
            type: n.completion.kind,
            insertText: n.completion.insertText,
            touch: this._seq++
        });
    }
    select(t, e, n) {
        const { word: i } = t.getWordUntilPosition(e);
        if (!i) return super.select(t, e, n);
        const r = `${t.getLanguageId()}/${i}`;
        let s = this._trie.get(r);
        if (s || (s = this._trie.findSubstr(r)), s) for(let o = 0; o < n.length; o++){
            const { kind: a, insertText: l } = n[o].completion;
            if (a === s.type && l === s.insertText) return o;
        }
        return super.select(t, e, n);
    }
    toJSON() {
        const t = [];
        return this._trie.forEach((e, n)=>t.push([
                n,
                e
            ])), t.sort((e, n)=>-(e[1].touch - n[1].touch)).forEach((e, n)=>e[1].touch = n), t.slice(0, 200);
    }
    fromJSON(t) {
        if (this._trie.clear(), t.length > 0) {
            this._seq = t[0][1].touch + 1;
            for (const [e, n] of t)n.type = typeof n.type == "number" ? n.type : afn.fromString(n.type), this._trie.set(e, n);
        }
    }
}, xst = class {
    constructor(t, e){
        this._storageService = t, this._configService = e, this._disposables = new Nt, this._persistSoon = new Yu(()=>this._saveState(), 500), this._disposables.add(t.onWillSaveState((n)=>{
            n.reason === Lke.SHUTDOWN && this._saveState();
        }));
    }
    dispose() {
        this._disposables.dispose(), this._persistSoon.dispose();
    }
    memorize(t, e, n) {
        this._withStrategy(t, e).memorize(t, e, n), this._persistSoon.schedule();
    }
    select(t, e, n) {
        return this._withStrategy(t, e).select(t, e, n);
    }
    _withStrategy(t, e) {
        const n = this._configService.getValue("editor.suggestSelection", {
            overrideIdentifier: t.getLanguageIdAtPosition(e.lineNumber, e.column),
            resource: t.uri
        });
        if (this._strategy?.name !== n) {
            this._saveState();
            const i = xst._strategyCtors.get(n) || Q3a;
            this._strategy = new i;
            try {
                const s = this._configService.getValue("editor.suggest.shareSuggestSelections") ? 0 : 1, o = this._storageService.get(`${xst._storagePrefix}/${n}`, s);
                o && this._strategy.fromJSON(JSON.parse(o));
            } catch  {}
        }
        return this._strategy;
    }
    _saveState() {
        if (this._strategy) {
            const e = this._configService.getValue("editor.suggest.shareSuggestSelections") ? 0 : 1, n = JSON.stringify(this._strategy);
            this._storageService.store(`${xst._storagePrefix}/${this._strategy.name}`, n, e, 1);
        }
    }
}, xst._strategyCtors = new Map([
    [
        "recentlyUsedByPrefix",
        lDp
    ],
    [
        "recentlyUsed",
        aDp
    ],
    [
        "first",
        Q3a
    ]
]), xst._storagePrefix = "suggest/memories", xst = Re([
    F(0, ki),
    F(1, yi)
], xst), kyi = jn("ISuggestMemories"), bn(kyi, xst, 1);

}
