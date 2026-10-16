import { Qe, XE, st } from "./Iwo.js";
import { Rml, _xk, aus, wCg } from "./Ycg.js";
import { Yu, qn } from "./async.js";
import { or, yi } from "./configuration.js";
import { Ud } from "./editorExtensions.js";
import { OCg } from "./getSemanticTokens.js";
import { Twe, xHe } from "./languageFeatureDebounce.js";
import { Dg, Nd } from "./languageFeatures.js";
import { Mml, qxi } from "./semanticTokensConfig.js";
import { Aml } from "./semanticTokensProviderStyling.js";
import { Gxi, Pml } from "./semanticTokensStyling.js";
import { D3, Xw } from "./stopwatch.js";
import { Dl, Ml } from "./themeService.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { sv } from "./ze.js";
var IEt;
export { IEt };
var __wakaru_FCg_initialized = false;
export function FCg() {
if (__wakaru_FCg_initialized) return;
__wakaru_FCg_initialized = true;
"use strict";
E(), qn(), Qe(), Ud(), OCg(), Mml(), Aml(), or(), Dl(), xHe(), D3(), Dg(), Pml(), IEt = class extends st {
    constructor(t, e, n, i, r, s){
        super(), this._semanticTokensStylingService = e, this._themeService = n, this._configurationService = i, this._editor = t, this._provider = s.documentRangeSemanticTokensProvider, this._debounceInformation = r.for(this._provider, "DocumentRangeSemanticTokens", {
            min: 100,
            max: 500
        }), this._tokenizeViewport = this._register(new Yu(()=>this._tokenizeViewportNow(), 100)), this._outstandingRequests = [];
        const o = ()=>{
            this._editor.hasModel() && this._tokenizeViewport.schedule(this._debounceInformation.get(this._editor.getModel()));
        };
        this._register(this._editor.onDidScrollChange(()=>{
            o();
        })), this._register(this._editor.onDidChangeModel(()=>{
            this._cancelAll(), o();
        })), this._register(this._editor.onDidChangeModelContent((a)=>{
            this._cancelAll(), o();
        })), this._register(this._provider.onDidChange(()=>{
            this._cancelAll(), o();
        })), this._register(this._configurationService.onDidChangeConfiguration((a)=>{
            a.affectsConfiguration(qxi) && (this._cancelAll(), o());
        })), this._register(this._themeService.onDidColorThemeChange(()=>{
            this._cancelAll(), o();
        })), o();
    }
    static get(t) {
        return t.getContribution(IEt.ID);
    }
    _cancelAll() {
        for (const t of this._outstandingRequests)t.cancel();
        this._outstandingRequests = [];
    }
    _removeOutstandingRequest(t) {
        for(let e = 0, n = this._outstandingRequests.length; e < n; e++)if (this._outstandingRequests[e] === t) {
            this._outstandingRequests.splice(e, 1);
            return;
        }
    }
    _tokenizeViewportNow() {
        if (!this._editor.hasModel()) return;
        const t = this._editor.getModel();
        if (t.tokenization.hasCompleteSemanticTokens()) return;
        if (!aus(t, this._themeService, this._configurationService)) {
            t.tokenization.hasSomeSemanticTokens() && t.tokenization.setSemanticTokens(null, !1);
            return;
        }
        if (!_xk(this._provider, t)) {
            t.tokenization.hasSomeSemanticTokens() && t.tokenization.setSemanticTokens(null, !1);
            return;
        }
        const e = this._editor.getVisibleRangesPlusViewportAboveBelow();
        this._outstandingRequests = this._outstandingRequests.concat(e.map((n)=>this._requestRange(t, n)));
    }
    _requestRange(t, e) {
        const n = t.getVersionId(), i = XE((s)=>Promise.resolve(Rml(this._provider, t, e, s))), r = new Xw(!1);
        return i.then((s)=>{
            if (this._debounceInformation.update(t, r.elapsed()), !s || !s.tokens || t.isDisposed() || t.getVersionId() !== n) return;
            const { provider: o, tokens: a } = s, l = this._semanticTokensStylingService.getStyling(o);
            t.tokenization.setPartialSemanticTokens(e, wCg(a, l, t.getLanguageId()));
        }).then(()=>this._removeOutstandingRequest(i), ()=>this._removeOutstandingRequest(i)), i;
    }
}, IEt.ID = "editor.contrib.viewportSemanticTokens", IEt = Re([
    F(1, Gxi),
    F(2, Ml),
    F(3, yi),
    F(4, Twe),
    F(5, Nd)
], IEt), sv(IEt.ID, IEt, 1);

}
