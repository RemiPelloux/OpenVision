import { I0e, J8t, N9i, O$s, e4e, eRn } from "./De_3.js";
import { si } from "./HVr.js";
import { dr } from "./arrays.js";
import { Ar, Ji } from "./cancellation.js";
import { yc } from "./editorExtensions.js";
import { Jc, kh } from "./languageFeatures.js";
import { li } from "./network.js";
import { IK } from "./qIc.js";
import { xKe } from "./referencesModel.js";
import { fht } from "./spanLifecycle.js";
import { yv } from "./tracing_2.js";
import { x } from "./tslib.es6.js";
var __wakaru_iyt_initialized = false;
export function iyt() {
if (__wakaru_iyt_initialized) return;
__wakaru_iyt_initialized = true;
"use strict";
x(), dr(), Ar(), si(), li(), yc(), kh(), xKe(), yv(), fht(), IK("_executeDefinitionProvider", (e, t, n)=>{
    const i = e.get(Jc), r = e4e(i.definitionProvider, t, n, !1, Ji.None);
    return I0e(()=>r);
}), IK("_executeDefinitionProvider_recursive", (e, t, n)=>{
    const i = e.get(Jc), r = e4e(i.definitionProvider, t, n, !0, Ji.None);
    return I0e(()=>r);
}), IK("_executeTypeDefinitionProvider", (e, t, n)=>{
    const i = e.get(Jc), r = N9i(i.typeDefinitionProvider, t, n, !1, Ji.None);
    return I0e(()=>r);
}), IK("_executeTypeDefinitionProvider_recursive", (e, t, n)=>{
    const i = e.get(Jc), r = N9i(i.typeDefinitionProvider, t, n, !0, Ji.None);
    return I0e(()=>r);
}), IK("_executeDeclarationProvider", (e, t, n)=>{
    const i = e.get(Jc), r = O$s(i.declarationProvider, t, n, !1, Ji.None);
    return I0e(()=>r);
}), IK("_executeDeclarationProvider_recursive", (e, t, n)=>{
    const i = e.get(Jc), r = O$s(i.declarationProvider, t, n, !0, Ji.None);
    return I0e(()=>r);
}), IK("_executeReferenceProvider", (e, t, n)=>{
    const i = e.get(Jc), r = J8t(i.referenceProvider, t, n, !1, !1, Ji.None);
    return I0e(()=>r);
}), IK("_executeReferenceProvider_recursive", (e, t, n)=>{
    const i = e.get(Jc), r = J8t(i.referenceProvider, t, n, !1, !0, Ji.None);
    return I0e(()=>r);
}), IK("_executeImplementationProvider", (e, t, n)=>{
    const i = e.get(Jc), r = eRn(i.implementationProvider, t, n, !1, Ji.None);
    return I0e(()=>r);
}), IK("_executeImplementationProvider_recursive", (e, t, n)=>{
    const i = e.get(Jc), r = eRn(i.implementationProvider, t, n, !0, Ji.None);
    return I0e(()=>r);
});

}
