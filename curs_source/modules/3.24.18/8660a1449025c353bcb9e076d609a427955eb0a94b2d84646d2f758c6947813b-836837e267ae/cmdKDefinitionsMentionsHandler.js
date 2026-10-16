import { gs, yt } from "./codicons.js";
import { cW, hO } from "./context_pb.js";
import { Gn, ta } from "./themables.js";
import { E } from "./tslib.es6.js";
import { Sz, eC } from "./types_4.js";
import { Ai, Xo } from "./uuid_2.js";
import { at } from "./web.js";
import { Er, wt } from "./yBp.js";
import { xn } from "./ze.js";
var HIg, WIg;
export { HIg, WIg };
var __wakaru_qRk_initialized = false;
export function qRk() {
if (__wakaru_qRk_initialized) return;
__wakaru_qRk_initialized = true;
"use strict";
E(), at(), at(), at(), cW(), gs(), ta(), Xo(), Sz(), HIg = wt("<i>"), WIg = new eC("Definitions", ()=>(()=>{
        var t = HIg();
        return xn(()=>Er(t, Gn.asClassName(yt.symbolTypeParameter))), t;
    })(), {
    case: "simple_mentions_handler",
    contextIntent: ()=>({
            uuid: Ai(),
            type: hO.USER_ADDED,
            intent: {
                case: "cmdKDefinitions",
                value: {}
            }
        })
}, 9.7);

}
