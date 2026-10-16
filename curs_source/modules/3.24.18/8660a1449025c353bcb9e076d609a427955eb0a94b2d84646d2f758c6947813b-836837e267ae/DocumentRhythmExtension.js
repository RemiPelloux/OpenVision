import { Aw, Fy, HQ, MS, Rw, j1 } from "./LYd.js";
import { gE } from "./index_23.js";
import { Doe } from "./index_33.js";
import { _Ip } from "./ipa.js";
import { E } from "./tslib.es6.js";
var RPa, bIp;
export { RPa, bIp };
var __wakaru_n01_initialized = false;
export function n01() {
if (__wakaru_n01_initialized) return;
__wakaru_n01_initialized = true;
"use strict";
E(), Fy(), gE(), Doe(), Aw(), HQ(), RPa = new j1("documentRhythm"), bIp = Rw.create({
    name: "documentRhythm",
    addProseMirrorPlugins () {
        return [
            new MS({
                key: RPa,
                state: {
                    init: (t, e)=>_Ip(e.doc),
                    apply: (t, e)=>t.docChanged ? _Ip(t.doc) : e
                },
                props: {
                    decorations: (t)=>RPa.getState(t) ?? null
                }
            })
        ];
    }
});

}
