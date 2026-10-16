import { Kuu } from "./f0s.js";
import { M0 } from "./index_18.js";
import { iY } from "./index_28.js";
import { AW, A_, bS, cy, rb, zS } from "./qIc.js";
import { x } from "./tslib.es6.js";
var HFs, Yuu;
export { HFs, Yuu };
var __wakaru_Tnv_initialized = false;
export function Tnv() {
if (__wakaru_Tnv_initialized) return;
__wakaru_Tnv_initialized = true;
"use strict";
x(), A_(), M0(), iY(), zS(), AW(), HFs = new cy("documentRhythm"), Yuu = bS.create({
    name: "documentRhythm",
    addProseMirrorPlugins () {
        return [
            new rb({
                key: HFs,
                state: {
                    init: (e, t)=>Kuu(t.doc),
                    apply: (e, t)=>e.docChanged ? Kuu(e.doc) : t
                },
                props: {
                    decorations: (e)=>HFs.getState(e) ?? null
                }
            })
        ];
    }
});

}
