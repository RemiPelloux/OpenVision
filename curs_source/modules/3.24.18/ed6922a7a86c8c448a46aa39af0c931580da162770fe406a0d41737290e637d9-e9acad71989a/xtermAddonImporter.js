import { r7e } from "./amdX.js";
import { Pq } from "./encoding.js";
import { x } from "./tslib.es6.js";
var sMo, oMo;
export { oMo, sMo };
var __wakaru_O9h_initialized = false;
export function O9h() {
if (__wakaru_O9h_initialized) return;
__wakaru_O9h_initialized = true;
"use strict";
x(), r7e(), sMo = new Map, oMo = class {
    async importAddon(e) {
        let t = sMo.get(e);
        if (!t) {
            switch(e){
                case "clipboard":
                    t = (await Pq("@xterm/addon-clipboard", "lib/addon-clipboard.js")).ClipboardAddon;
                    break;
                case "image":
                    t = (await Pq("@xterm/addon-image", "lib/addon-image.js")).ImageAddon;
                    break;
                case "ligatures":
                    t = (await Pq("@xterm/addon-ligatures", "lib/addon-ligatures.js")).LigaturesAddon;
                    break;
                case "progress":
                    t = (await Pq("@xterm/addon-progress", "lib/addon-progress.js")).ProgressAddon;
                    break;
                case "search":
                    t = (await Pq("@xterm/addon-search", "lib/addon-search.js")).SearchAddon;
                    break;
                case "serialize":
                    t = (await Pq("@xterm/addon-serialize", "lib/addon-serialize.js")).SerializeAddon;
                    break;
                case "unicode11":
                    t = (await Pq("@xterm/addon-unicode11", "lib/addon-unicode11.js")).Unicode11Addon;
                    break;
                case "webgl":
                    t = (await Pq("@xterm/addon-webgl", "lib/addon-webgl.js")).WebglAddon;
                    break;
            }
            if (!t) throw new Error(`Could not load addon ${e}`);
            sMo.set(e, t);
        }
        return t;
    }
};

}
