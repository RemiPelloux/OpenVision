import { JVu, mvy } from "./generateUniqueID.js";
import { GFt, Kun } from "./getActivationStart.js";
import { Vun, fpr } from "./getNavigationEntry.js";
import { E } from "./tslib.es6.js";
import { Rse, Zk } from "./types.js";
var Yun;
export { Yun };
var __wakaru_RXn_initialized = false;
export function RXn() {
if (__wakaru_RXn_initialized) return;
__wakaru_RXn_initialized = true;
"use strict";
E(), Rse(), mvy(), Kun(), fpr(), Yun = (t, e = -1)=>{
    const n = Vun();
    let i = "navigate";
    return n && (Zk.document?.prerendering || GFt() > 0 ? i = "prerender" : Zk.document?.wasDiscarded ? i = "restore" : n.type && (i = n.type.replace(/_/g, "-"))), {
        name: t,
        value: e,
        rating: "good",
        delta: 0,
        entries: [],
        id: JVu(),
        navigationType: i
    };
};

}
