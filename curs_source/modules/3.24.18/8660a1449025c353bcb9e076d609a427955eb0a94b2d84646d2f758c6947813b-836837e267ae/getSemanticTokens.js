import { Ei, Kv } from "./Iwo.js";
import { DCg, ICg, MCg, PCg, Rml, ous, vxk } from "./Ycg.js";
import { Xs, yo } from "./cancellation.js";
import { hs, nr, rs } from "./commands.js";
import { Dg, Nd } from "./languageFeatures.js";
import { dd, xp } from "./model.js";
import { Qs, qt } from "./range.js";
import { ACg } from "./semanticTokensDto.js";
import { E } from "./tslib.es6.js";
import { To } from "./types_2.js";
import { fn, rt } from "./uri.js";
var NCg, LCg;
export { LCg, NCg };
var __wakaru_OCg_initialized = false;
export function OCg() {
if (__wakaru_OCg_initialized) return;
__wakaru_OCg_initialized = true;
"use strict";
E(), yo(), Ei(), fn(), xp(), rs(), To(), ACg(), Qs(), Dg(), NCg = class {
    constructor(t, e, n){
        this.provider = t, this.tokens = e, this.error = n;
    }
}, LCg = class {
    constructor(t, e){
        this.provider = t, this.tokens = e;
    }
}, hs.registerCommand("_provideDocumentSemanticTokensLegend", async (t, ...e)=>{
    const [n] = e;
    Kv(n instanceof rt);
    const i = t.get(dd).getModel(n);
    if (!i) return;
    const { documentSemanticTokensProvider: r } = t.get(Nd), s = vxk(r, i);
    return s ? s[0].getLegend() : t.get(nr).executeCommand("_provideDocumentRangeSemanticTokensLegend", n);
}), hs.registerCommand("_provideDocumentSemanticTokens", async (t, ...e)=>{
    const [n] = e;
    Kv(n instanceof rt);
    const i = t.get(dd).getModel(n);
    if (!i) return;
    const { documentSemanticTokensProvider: r } = t.get(Nd);
    if (!PCg(r, i)) return t.get(nr).executeCommand("_provideDocumentRangeSemanticTokens", n, i.getFullModelRange());
    const s = await MCg(r, i, null, null, Xs.None);
    if (!s) return;
    const { provider: o, tokens: a } = s;
    if (!a || !ous(a)) return;
    const l = ICg({
        id: 0,
        type: "full",
        data: a.data
    });
    return a.resultId && o.releaseDocumentSemanticTokens(a.resultId), l;
}), hs.registerCommand("_provideDocumentRangeSemanticTokensLegend", async (t, ...e)=>{
    const [n, i] = e;
    Kv(n instanceof rt);
    const r = t.get(dd).getModel(n);
    if (!r) return;
    const { documentRangeSemanticTokensProvider: s } = t.get(Nd), o = DCg(s, r);
    if (o.length === 0) return;
    if (o.length === 1) return o[0].getLegend();
    if (!i || !qt.isIRange(i)) return console.warn("provideDocumentRangeSemanticTokensLegend might be out-of-sync with provideDocumentRangeSemanticTokens unless a range argument is passed in"), o[0].getLegend();
    const a = await Rml(s, r, qt.lift(i), Xs.None);
    if (a) return a.provider.getLegend();
}), hs.registerCommand("_provideDocumentRangeSemanticTokens", async (t, ...e)=>{
    const [n, i] = e;
    Kv(n instanceof rt), Kv(qt.isIRange(i));
    const r = t.get(dd).getModel(n);
    if (!r) return;
    const { documentRangeSemanticTokensProvider: s } = t.get(Nd), o = await Rml(s, r, qt.lift(i), Xs.None);
    if (!(!o || !o.tokens)) return ICg({
        id: 0,
        type: "full",
        data: o.tokens.data
    });
});

}
