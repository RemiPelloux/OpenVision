import { Ss } from "./aiMiscServices.js";
import { pd } from "./background_composer_pb.js";
import { fhc } from "./environment-setup-analytics.js";
import { CJv } from "./environment-setup-run-state.react.js";
import { pLn } from "./environment-setup-tab-helpers.js";
import { nOs } from "./environment-setup-tab-requests.js";
import { d_ } from "./index_205.js";
import { ub } from "./localAgentRepository.js";
import { E } from "./tslib.es6.js";
import { fLn } from "./use-generalized-env-setup-enabled.react.js";
import { KAt } from "./use-glass-environments.react.js";
import { $dc } from "./use-glass-event.react.js";
import { IG } from "./use-header-tracked-git-derived.react.js";
import { $h } from "./use-reactive.react_2.js";
import { ZLs } from "./use-resolved-github-mirror.react.js";
import { In } from "./use-service.react_2.js";
import { Af } from "./use-solid-selector.react_2.js";
import { Bs } from "./window.js";
var IS_, n1c, Ftn, Btn, xS_, i1c;
export { Btn, Ftn, IS_, i1c, n1c, xS_ };
var __wakaru_TVC_initialized = false;
export function TVC() {
if (__wakaru_TVC_initialized) return;
__wakaru_TVC_initialized = true;
"use strict";
E(), d_(), pd(), Bs(), ub(), Ss(), CJv(), pLn(), nOs(), fhc(), fLn(), KAt(), $dc(), IG(), $h(), ZLs(), In(), Af(), IS_ = {
    value: "done",
    onChange: ()=>({
            dispose: ()=>{}
        })
}, n1c = new Set, Ftn = new Set, Btn = {
    bcIds: new Set,
    listeners: new Set,
    version: 0,
    dismiss (t) {
        this.bcIds.add(t), this.version++;
        for (const e of this.listeners)e();
    },
    subscribe: (t)=>(Btn.listeners.add(t), ()=>{
            Btn.listeners.delete(t);
        }),
    getVersion: ()=>Btn.version
}, xS_ = {
    actionHistory: [],
    hasBlockingActions: !1,
    isSaveEnvironmentReady: !1
}, i1c = {
    entry: null,
    readiness: {
        ...xS_,
        hasSetupVmEnvironmentToolResult: !1,
        hasSuccessfulEnvironmentJsonProposal: !1
    }
};

}
