import { Tde, nkt, wN, wX } from "./base.ts";
import { Lu } from "./hook-step.ts";
import { x } from "./tslib.es6.js";
import { nso } from "./types.ts";
var BMd, UMd, $Md, HMd, WMd, oso;
export { $Md, BMd, HMd, UMd, WMd, oso };
var __wakaru__wv_initialized = false;
export function _wv() {
if (__wakaru__wv_initialized) return;
__wakaru__wv_initialized = true;
"use strict";
x(), nso(), wX(), BMd = (e, t)=>{
    if (e.matcher !== void 0) {
        if (!Tde(e.matcher)) t.push("Hook script matcher must be a string if provided");
        else if (e.matcher !== "" && e.matcher !== "*") try {
            new RegExp(e.matcher);
        } catch (n) {
            t.push(`Hook script matcher "${e.matcher}" is not a valid regex: ${n?.message ?? String(n)}`);
        }
    }
    if (e.timeout !== void 0 && (typeof e.timeout != "number" ? t.push("Hook script timeout must be a number (seconds)") : e.timeout <= 0 ? t.push("Hook script timeout must be a positive number") : e.timeout > 3600 && console.warn(`[hooks] Hook timeout of ${e.timeout}s is very long (>1 hour)`)), e.loop_limit !== void 0) {
        const n = e.loop_limit;
        n !== null && (typeof n != "number" ? t.push("Hook script loop_limit must be a positive integer or null") : Number.isInteger(n) ? n <= 0 && t.push("Hook script loop_limit must be a positive integer (use null for no limit)") : t.push("Hook script loop_limit must be an integer"));
    }
    e.failClosed !== void 0 && typeof e.failClosed != "boolean" && t.push("Hook script failClosed must be a boolean");
}, UMd = (e, t)=>{
    Tde(e.command) || t.push("Hook script command must be a string");
}, $Md = (e, t)=>{
    Tde(e.prompt) ? e.prompt.trim() === "" && t.push("Prompt hook 'prompt' property cannot be empty") : t.push("Prompt hook must have a 'prompt' property (string)"), e.model !== void 0 && (Tde(e.model) ? e.model.trim() === "" && t.push("Prompt hook 'model' cannot be an empty string") : t.push("Prompt hook 'model' must be a string if provided"));
}, HMd = (e)=>{
    const t = [];
    if (!nkt(e)) return t.push(`Hook script must be an object with either a 'command' property (command hook) or 'type: "prompt"' with a 'prompt' property (prompt hook)`), wN(!1, t);
    const n = e.type;
    return n === "prompt" ? $Md(e, t) : n === "command" || n === void 0 ? UMd(e, t) : t.push(`Invalid hook type: "${n}". Must be "command", "prompt", or omitted (defaults to "command")`), BMd(e, t), wN(t.length === 0, t);
}, WMd = (e, t)=>{
    const n = [];
    if (!Array.isArray(e)) return n.push(`${t} must be an array of hook scripts`), wN(!1, n);
    for(let i = 0; i < e.length; i++){
        const r = HMd(e[i]);
        r.isValid || n.push(`${t}[${i}]: ${r.errors.join(", ")}`);
    }
    return wN(n.length === 0, n);
}, oso = (e)=>{
    const t = [];
    if (!nkt(e)) return t.push("Hooks config must be an object"), wN(!1, t);
    if (typeof e.version != "number" ? t.push("Config version must be a number") : (!Number.isInteger(e.version) || e.version < 1) && t.push("Config version must be a positive integer"), !nkt(e.hooks)) return t.push("Config hooks must be an object"), wN(!1, t);
    e.stop_hook_loop_limit !== void 0 && console.warn("[hooks] DEPRECATION WARNING: 'stop_hook_loop_limit' is deprecated. Use 'loop_limit' on individual hook scripts instead. The configured value is being ignored.");
    const n = Object.values(Lu), i = e.hooks;
    for (const [r, s] of Object.entries(i)){
        if (!n.includes(r)) {
            t.push(`Unknown hook type: ${r}. Valid types are: ${n.join(", ")}`);
            continue;
        }
        if (s !== void 0) {
            const o = WMd(s, r);
            o.isValid || t.push(...o.errors);
        }
    }
    return wN(t.length === 0, t);
};

}
