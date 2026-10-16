import { Gae, dCe, k6, oGt } from "./base.ts";
import { dh } from "./hook-step.ts";
import { E } from "./tslib.es6.js";
import { d7a } from "./types.ts";
var vSm, _Sm, bSm, ySm, SSm, g7a;
export { SSm, _Sm, bSm, g7a, vSm, ySm };
var __wakaru_v41_initialized = false;
export function v41() {
if (__wakaru_v41_initialized) return;
__wakaru_v41_initialized = true;
"use strict";
E(), d7a(), Gae(), vSm = (t, e)=>{
    if (t.matcher !== void 0) {
        if (!dCe(t.matcher)) e.push("Hook script matcher must be a string if provided");
        else if (t.matcher !== "" && t.matcher !== "*") try {
            new RegExp(t.matcher);
        } catch (n) {
            e.push(`Hook script matcher "${t.matcher}" is not a valid regex: ${n?.message ?? String(n)}`);
        }
    }
    if (t.timeout !== void 0 && (typeof t.timeout != "number" ? e.push("Hook script timeout must be a number (seconds)") : t.timeout <= 0 ? e.push("Hook script timeout must be a positive number") : t.timeout > 3600 && console.warn(`[hooks] Hook timeout of ${t.timeout}s is very long (>1 hour)`)), t.loop_limit !== void 0) {
        const n = t.loop_limit;
        n !== null && (typeof n != "number" ? e.push("Hook script loop_limit must be a positive integer or null") : Number.isInteger(n) ? n <= 0 && e.push("Hook script loop_limit must be a positive integer (use null for no limit)") : e.push("Hook script loop_limit must be an integer"));
    }
    t.failClosed !== void 0 && typeof t.failClosed != "boolean" && e.push("Hook script failClosed must be a boolean");
}, _Sm = (t, e)=>{
    dCe(t.command) || e.push("Hook script command must be a string");
}, bSm = (t, e)=>{
    dCe(t.prompt) ? t.prompt.trim() === "" && e.push("Prompt hook 'prompt' property cannot be empty") : e.push("Prompt hook must have a 'prompt' property (string)"), t.model !== void 0 && (dCe(t.model) ? t.model.trim() === "" && e.push("Prompt hook 'model' cannot be an empty string") : e.push("Prompt hook 'model' must be a string if provided"));
}, ySm = (t)=>{
    const e = [];
    if (!oGt(t)) return e.push(`Hook script must be an object with either a 'command' property (command hook) or 'type: "prompt"' with a 'prompt' property (prompt hook)`), k6(!1, e);
    const n = t.type;
    return n === "prompt" ? bSm(t, e) : n === "command" || n === void 0 ? _Sm(t, e) : e.push(`Invalid hook type: "${n}". Must be "command", "prompt", or omitted (defaults to "command")`), vSm(t, e), k6(e.length === 0, e);
}, SSm = (t, e)=>{
    const n = [];
    if (!Array.isArray(t)) return n.push(`${e} must be an array of hook scripts`), k6(!1, n);
    for(let i = 0; i < t.length; i++){
        const r = ySm(t[i]);
        r.isValid || n.push(`${e}[${i}]: ${r.errors.join(", ")}`);
    }
    return k6(n.length === 0, n);
}, g7a = (t)=>{
    const e = [];
    if (!oGt(t)) return e.push("Hooks config must be an object"), k6(!1, e);
    if (typeof t.version != "number" ? e.push("Config version must be a number") : (!Number.isInteger(t.version) || t.version < 1) && e.push("Config version must be a positive integer"), !oGt(t.hooks)) return e.push("Config hooks must be an object"), k6(!1, e);
    t.stop_hook_loop_limit !== void 0 && console.warn("[hooks] DEPRECATION WARNING: 'stop_hook_loop_limit' is deprecated. Use 'loop_limit' on individual hook scripts instead. The configured value is being ignored.");
    const n = Object.values(dh), i = t.hooks;
    for (const [r, s] of Object.entries(i)){
        if (!n.includes(r)) {
            e.push(`Unknown hook type: ${r}. Valid types are: ${n.join(", ")}`);
            continue;
        }
        if (s !== void 0) {
            const o = SSm(s, r);
            o.isValid || e.push(...o.errors);
        }
    }
    return k6(e.length === 0, e);
};

}
