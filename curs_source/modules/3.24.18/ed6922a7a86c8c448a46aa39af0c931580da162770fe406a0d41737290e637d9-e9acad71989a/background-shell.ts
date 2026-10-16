import { CC, EC, Nw, TC, wC } from "./A3u.js";
import { SC, aT } from "./controlled_2.ts";
import { cT, kC } from "./remote.ts";
import { D1, mw } from "./resource-names.ts";
import { F0 } from "./resource-provider.ts";
import { lT } from "./serialization.ts";
import { x } from "./tslib.es6.js";
var wWi, KDd;
export { KDd, wWi };
var __wakaru_YDd_initialized = false;
export function YDd() {
if (__wakaru_YDd_initialized) return;
__wakaru_YDd_initialized = true;
"use strict";
x(), aT(), cT(), D1(), F0(), lT(), wWi = Nw(mw.backgroundShellExecutor, (e)=>new kC(e, wC("backgroundShellSpawnArgs"), CC("backgroundShellSpawnResult")), (e, t)=>{
    t.register(new SC(e, EC("backgroundShellSpawnArgs"), TC("backgroundShellSpawnResult")));
}), KDd = Nw(mw.writeBackgroundShellInputExecutor, (e)=>new kC(e, wC("writeShellStdinArgs"), CC("writeShellStdinResult")), (e, t)=>{
    t.register(new SC(e, EC("writeShellStdinArgs"), TC("writeShellStdinResult")));
});

}
