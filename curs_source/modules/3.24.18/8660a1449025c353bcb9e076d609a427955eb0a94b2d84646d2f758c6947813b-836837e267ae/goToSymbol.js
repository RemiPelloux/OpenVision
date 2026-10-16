import { Ei } from "./Iwo.js";
import { bo } from "./arrays.js";
import { Xs, yo } from "./cancellation.js";
import { Ud } from "./editorExtensions.js";
import { $0n, I6e, KDa, Kbi, kst, tWr } from "./ipa.js";
import { Dg, Nd } from "./languageFeatures.js";
import { Ki } from "./network.js";
import { iSt } from "./referencesModel.js";
import { p6t } from "./spanLifecycle.js";
import { __ } from "./tracing_2.js";
import { E } from "./tslib.es6.js";
import { Zde } from "./ze.js";
var __wakaru_Kwt_initialized = false;
export function Kwt() {
if (__wakaru_Kwt_initialized) return;
__wakaru_Kwt_initialized = true;
"use strict";
E(), bo(), yo(), Ei(), Ki(), Ud(), Dg(), iSt(), __(), p6t(), Zde("_executeDefinitionProvider", (t, e, n)=>{
    const i = t.get(Nd), r = kst(i.definitionProvider, e, n, !1, Xs.None);
    return I6e(()=>r);
}), Zde("_executeDefinitionProvider_recursive", (t, e, n)=>{
    const i = t.get(Nd), r = kst(i.definitionProvider, e, n, !0, Xs.None);
    return I6e(()=>r);
}), Zde("_executeTypeDefinitionProvider", (t, e, n)=>{
    const i = t.get(Nd), r = tWr(i.typeDefinitionProvider, e, n, !1, Xs.None);
    return I6e(()=>r);
}), Zde("_executeTypeDefinitionProvider_recursive", (t, e, n)=>{
    const i = t.get(Nd), r = tWr(i.typeDefinitionProvider, e, n, !0, Xs.None);
    return I6e(()=>r);
}), Zde("_executeDeclarationProvider", (t, e, n)=>{
    const i = t.get(Nd), r = KDa(i.declarationProvider, e, n, !1, Xs.None);
    return I6e(()=>r);
}), Zde("_executeDeclarationProvider_recursive", (t, e, n)=>{
    const i = t.get(Nd), r = KDa(i.declarationProvider, e, n, !0, Xs.None);
    return I6e(()=>r);
}), Zde("_executeReferenceProvider", (t, e, n)=>{
    const i = t.get(Nd), r = $0n(i.referenceProvider, e, n, !1, !1, Xs.None);
    return I6e(()=>r);
}), Zde("_executeReferenceProvider_recursive", (t, e, n)=>{
    const i = t.get(Nd), r = $0n(i.referenceProvider, e, n, !1, !0, Xs.None);
    return I6e(()=>r);
}), Zde("_executeImplementationProvider", (t, e, n)=>{
    const i = t.get(Nd), r = Kbi(i.implementationProvider, e, n, !1, Xs.None);
    return I6e(()=>r);
}), Zde("_executeImplementationProvider_recursive", (t, e, n)=>{
    const i = t.get(Nd), r = Kbi(i.implementationProvider, e, n, !0, Xs.None);
    return I6e(()=>r);
});

}
