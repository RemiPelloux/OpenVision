import { gs, yt } from "./codicons.js";
import { cW, hO } from "./context_pb.js";
import { Gn, ta } from "./themables.js";
import { E } from "./tslib.es6.js";
import { Sz, eC } from "./types_4.js";
import { Ai, Xo } from "./uuid_2.js";
import { at } from "./web.js";
import { Er, wt } from "./yBp.js";
import { xn } from "./ze.js";
var GIg, qIg;
export { GIg, qIg };
var __wakaru_zRk_initialized = false;
export function zRk() {
if (__wakaru_zRk_initialized) return;
__wakaru_zRk_initialized = true;
"use strict";
E(), at(), at(), at(), cW(), gs(), ta(), Xo(), Sz(), GIg = wt("<i>"), qIg = new eC("Chat", ()=>(()=>{
        var t = GIg();
        return xn(()=>Er(t, Gn.asClassName(yt.commentDiscussion))), t;
    })(), {
    case: "simple_mentions_handler",
    contextIntent: ()=>({
            uuid: Ai(),
            type: hO.USER_ADDED,
            intent: {
                case: "chatHistory",
                value: {}
            }
        })
}, 9.7);

}
