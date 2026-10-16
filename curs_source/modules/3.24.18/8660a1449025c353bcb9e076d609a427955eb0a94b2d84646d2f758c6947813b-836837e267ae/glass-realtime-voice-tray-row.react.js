import { Zw0 } from "./glass-realtime-voice-tray.react.js";
import { E } from "./tslib.es6.js";
import { wTv } from "./wTv.js";
import { lazy as Jw0 } from "./react-runtime/react/esm-index-production.js";
var WQl, ETv;
export { ETv, WQl };
var __wakaru_GQl_initialized = false;
export function GQl() {
if (__wakaru_GQl_initialized) return;
__wakaru_GQl_initialized = true;
"use strict";
E(), WQl = ()=>Promise.resolve().then(()=>(Zw0(), wTv)), ETv = Jw0(async ()=>({
        default: (await WQl()).GlassRealtimeVoiceTray
    }));

}
