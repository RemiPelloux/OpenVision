import { wA, yE } from "./controlled_2.ts";
import { CA, SE } from "./remote.ts";
import { Bx, pT } from "./resource-names.ts";
import { zI } from "./resource-provider.ts";
import { TA } from "./serialization.ts";
import { E } from "./tslib.es6.js";
import { BT, CE, TE, kE, wE } from "./yBp.js";
var XKr, xym;
export { XKr, xym };
var __wakaru_Aym_initialized = false;
export function Aym() {
if (__wakaru_Aym_initialized) return;
__wakaru_Aym_initialized = true;
"use strict";
E(), wA(), CA(), Bx(), zI(), TA(), XKr = BT(pT.backgroundShellExecutor, (t)=>new SE(t, kE("backgroundShellSpawnArgs"), wE("backgroundShellSpawnResult")), (t, e)=>{
    e.register(new yE(t, TE("backgroundShellSpawnArgs"), CE("backgroundShellSpawnResult")));
}), xym = BT(pT.writeBackgroundShellInputExecutor, (t)=>new SE(t, kE("writeShellStdinArgs"), wE("writeShellStdinResult")), (t, e)=>{
    e.register(new yE(t, TE("writeShellStdinArgs"), CE("writeShellStdinResult")));
});

}
