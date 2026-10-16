import { Fr, ii } from "./environment.js";
import { Wt, cn } from "./files.js";
import { ne } from "./instantiation.js";
import { B } from "./ipc.js";
import { Z, te } from "./log.js";
import { br, fr } from "./state.js";
import { w } from "./themeMainService.js";
import { h } from "./tslib.es6.js";
import { Br, Oi } from "./uriIdentity.js";
import { Ls, Us } from "./userDataProfile.js";
import { dWe, va } from "./userDataProfile_2.js";
var Wi, $k;
export { $k, Wi };
var __wakaru_Rc_initialized = false;
export function Rc() {
if (__wakaru_Rc_initialized) return;
__wakaru_Rc_initialized = true;
"use strict";
h(), Fr(), Wt(), ne(), te(), Oi(), Us(), dWe(), br(), Wi = Ls, $k = class extends va {
    constructor(e, t, n, r, s){
        super(e, t, n, r, s);
    }
    getAssociatedEmptyWindows() {
        const e = [];
        for (const t of this.profilesObject.emptyWindows.keys())e.push({
            id: t
        });
        return e;
    }
}, $k = B([
    w(0, fr),
    w(1, Br),
    w(2, ii),
    w(3, cn),
    w(4, Z)
], $k);

}
