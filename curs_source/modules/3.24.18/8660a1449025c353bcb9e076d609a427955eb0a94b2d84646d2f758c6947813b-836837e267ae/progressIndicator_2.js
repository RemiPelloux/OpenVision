import { Gt, Qe, st, tt } from "./Iwo.js";
import { NHd, ab } from "./progress.js";
import { E } from "./tslib.es6.js";
var Sgl, yMe, kgl, wgl;
export { Sgl, kgl, wgl, yMe };
var __wakaru_rAi_initialized = false;
export function rAi() {
if (__wakaru_rAi_initialized) return;
__wakaru_rAi_initialized = true;
"use strict";
E(), Gt(), Qe(), ab(), Sgl = class extends st {
    constructor(t, e){
        super(), this.progressBar = t, this.group = e, this.registerListeners();
    }
    registerListeners() {
        this.group && this._register(this.group.onDidModelChange((t)=>{
            (t.kind === 8 || t.kind === 6 && this.group && this.group.isEmpty) && this.progressBar.stop().hide();
        }));
    }
    show(t, e) {
        return this.group && this.group.isEmpty ? NHd : t === !0 ? this.doShow(!0, e) : this.doShow(t, e);
    }
    doShow(t, e) {
        return typeof t == "boolean" ? this.progressBar.infinite().show(e) : this.progressBar.total(t).show(e), {
            total: (n)=>{
                this.progressBar.total(n);
            },
            worked: (n)=>{
                this.progressBar.hasTotal() ? this.progressBar.worked(n) : this.progressBar.infinite().show();
            },
            done: ()=>{
                this.progressBar.stop().hide();
            }
        };
    }
    async showWhile(t, e) {
        if (this.group && this.group.isEmpty) try {
            await t;
        } catch  {}
        return this.doShowWhile(t, e);
    }
    async doShowWhile(t, e) {
        try {
            this.progressBar.infinite().show(e), await t;
        } catch  {} finally{
            this.progressBar.stop().hide();
        }
    }
}, ((t)=>{
    let e;
    ((r)=>{
        r[r.None = 0] = "None", r[r.Done = 1] = "Done", r[r.Infinite = 2] = "Infinite", r[r.While = 3] = "While", r[r.Work = 4] = "Work";
    })(e = t.Type || (t.Type = {})), t.None = {
        type: 0
    }, t.Done = {
        type: 1
    }, t.Infinite = {
        type: 2
    };
    class n {
        constructor(s, o, a){
            this.whilePromise = s, this.whileStart = o, this.whileDelay = a, this.type = 3;
        }
    }
    t.While = n;
    class i {
        constructor(s, o){
            this.total = s, this.worked = o, this.type = 4;
        }
    }
    t.Work = i;
})(yMe || (yMe = {})), kgl = class extends st {
    constructor(t, e){
        super(), this.progressBar = t, this.scope = e, this.progressState = yMe.None, this.registerListeners();
    }
    registerListeners() {
        this._register(this.scope.onDidChangeActive(()=>{
            this.scope.isActive ? this.onDidScopeActivate() : this.onDidScopeDeactivate();
        }));
    }
    onDidScopeActivate() {
        if (this.progressState.type !== yMe.Done.type) if (this.progressState.type === 3) {
            let t;
            if (this.progressState.whileDelay > 0) {
                const e = this.progressState.whileDelay - (Date.now() - this.progressState.whileStart);
                e > 0 && (t = e);
            }
            this.doShowWhile(t);
        } else this.progressState.type === 2 ? this.progressBar.infinite().show() : this.progressState.type === 4 && (this.progressState.total && this.progressBar.total(this.progressState.total).show(), this.progressState.worked && this.progressBar.worked(this.progressState.worked).show());
    }
    onDidScopeDeactivate() {
        this.progressBar.stop().hide();
    }
    show(t, e) {
        return typeof t == "boolean" ? this.progressState = yMe.Infinite : this.progressState = new yMe.Work(t, void 0), this.scope.isActive && (this.progressState.type === 2 ? this.progressBar.infinite().show(e) : this.progressState.type === 4 && typeof this.progressState.total == "number" && this.progressBar.total(this.progressState.total).show(e)), {
            total: (n)=>{
                this.progressState = new yMe.Work(n, this.progressState.type === 4 ? this.progressState.worked : void 0), this.scope.isActive && this.progressBar.total(n);
            },
            worked: (n)=>{
                !this.scope.isActive || this.progressBar.hasTotal() ? (this.progressState = new yMe.Work(this.progressState.type === 4 ? this.progressState.total : void 0, this.progressState.type === 4 && typeof this.progressState.worked == "number" ? this.progressState.worked + n : n), this.scope.isActive && this.progressBar.worked(n)) : (this.progressState = yMe.Infinite, this.progressBar.infinite().show());
            },
            done: ()=>{
                this.progressState = yMe.Done, this.scope.isActive && this.progressBar.stop().hide();
            }
        };
    }
    async showWhile(t, e) {
        this.progressState.type === 3 && (t = Promise.allSettled([
            t,
            this.progressState.whilePromise
        ])), this.progressState = new yMe.While(t, e || 0, Date.now());
        try {
            this.doShowWhile(e), await t;
        } catch  {} finally{
            (this.progressState.type !== 3 || this.progressState.whilePromise === t) && (this.progressState = yMe.None, this.scope.isActive && this.progressBar.stop().hide());
        }
    }
    doShowWhile(t) {
        this.scope.isActive && this.progressBar.infinite().show(t);
    }
}, wgl = class extends st {
    constructor(t, e){
        super(), this.scopeId = t, this._isActive = e, this._onDidChangeActive = this._register(new tt), this.onDidChangeActive = this._onDidChangeActive.event;
    }
    get isActive() {
        return this._isActive;
    }
    PUBLIC_BE_CAREFUL_onScopeOpened(t) {
        this.onScopeOpened(t);
    }
    PUBLIC_BE_CAREFUL_onScopeClosed(t) {
        this.onScopeClosed(t);
    }
    onScopeOpened(t) {
        t === this.scopeId && (this._isActive || (this._isActive = !0, this._onDidChangeActive.fire()));
    }
    onScopeClosed(t) {
        t === this.scopeId && this._isActive && (this._isActive = !1, this._onDidChangeActive.fire());
    }
};

}
