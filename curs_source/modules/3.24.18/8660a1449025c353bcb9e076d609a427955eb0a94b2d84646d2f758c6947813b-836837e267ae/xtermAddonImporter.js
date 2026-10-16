import { Rie } from "./Ycg.js";
import { glt } from "./amdX.js";
import { E } from "./tslib.es6.js";
var Ovl, Fvl;
export { Fvl, Ovl };
var __wakaru_pPg_initialized = false;
export function pPg() {
if (__wakaru_pPg_initialized) return;
__wakaru_pPg_initialized = true;
"use strict";
E(), glt(), Ovl = new Map, Fvl = class {
    async importAddon(t) {
        let e = Ovl.get(t);
        if (!e) {
            switch(t){
                case "clipboard":
                    e = (await Rie("@xterm/addon-clipboard", "lib/addon-clipboard.js")).ClipboardAddon;
                    break;
                case "image":
                    e = (await Rie("@xterm/addon-image", "lib/addon-image.js")).ImageAddon;
                    break;
                case "ligatures":
                    e = (await Rie("@xterm/addon-ligatures", "lib/addon-ligatures.js")).LigaturesAddon;
                    break;
                case "progress":
                    e = (await Rie("@xterm/addon-progress", "lib/addon-progress.js")).ProgressAddon;
                    break;
                case "search":
                    e = (await Rie("@xterm/addon-search", "lib/addon-search.js")).SearchAddon;
                    break;
                case "serialize":
                    e = (await Rie("@xterm/addon-serialize", "lib/addon-serialize.js")).SerializeAddon;
                    break;
                case "unicode11":
                    e = (await Rie("@xterm/addon-unicode11", "lib/addon-unicode11.js")).Unicode11Addon;
                    break;
                case "webgl":
                    e = (await Rie("@xterm/addon-webgl", "lib/addon-webgl.js")).WebglAddon;
                    break;
            }
            if (!e) throw new Error(`Could not load addon ${t}`);
            Ovl.set(t, e);
        }
        return e;
    }
};

}
