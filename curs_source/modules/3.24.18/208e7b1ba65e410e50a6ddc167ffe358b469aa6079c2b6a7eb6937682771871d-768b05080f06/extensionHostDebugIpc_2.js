import { Kp, h7, p7, u7 } from "./argv.js";
import { E } from "./configurationRegistry.js";
import { GI, IWe } from "./extensionHostDebugIpc.js";
import { h } from "./tslib.es6.js";
import { createServer as NWe } from "net";
function VI(e, t, n = p7) {
    const r = e.find((f)=>f.length > 0 && f[0] !== "-"), s = {}, i = [
        "_"
    ], a = [], o = {};
    let l;
    for(const f in t){
        const v = t[f];
        v.type === "subcommand" ? f === r && (l = v) : (v.alias && (s[f] = v.alias), v.type === "string" || v.type === "string[]" ? (i.push(f), v.deprecates && i.push(...v.deprecates)) : v.type === "boolean" && (a.push(f), v.deprecates && a.push(...v.deprecates)), v.global && (o[f] = v));
    }
    if (l && r) {
        const f = o;
        for(const k in l.options)f[k] = l.options[k];
        const v = [
            ...e
        ];
        v.splice(v.indexOf(r), 1);
        const T = n.getSubcommandReporter ? n.getSubcommandReporter(r) : void 0, S = VI(v, f, T);
        return {
            [r]: S,
            _: []
        };
    }
    const d = (0, u7.default)(e, {
        string: i,
        boolean: a,
        alias: s
    }), u = {}, m = d;
    u._ = d._.map((f)=>String(f)).filter((f)=>f.length > 0), delete m._;
    for(const f in t){
        const v = t[f];
        if (v.type === "subcommand") continue;
        v.alias && delete m[v.alias];
        let T = m[f];
        if (v.deprecates) for (const S of v.deprecates)m.hasOwnProperty(S) && (T || (T = m[S], T && n.onDeprecatedOption(S, v.deprecationMessage || E(1906, null, f))), delete m[S]);
        if (typeof T < "u") {
            if (v.type === "string[]") {
                if (Array.isArray(T) || (T = [
                    T
                ]), !v.allowEmptyValue) {
                    const S = T.filter((k)=>k.length > 0);
                    S.length !== T.length && (n.onEmptyValue(f), T = S.length > 0 ? S : void 0);
                }
            } else v.type === "string" && (Array.isArray(T) ? (T = T.pop(), n.onMultipleValues(f, T)) : !T && !v.allowEmptyValue && (n.onEmptyValue(f), T = void 0));
            u[f] = T, v.deprecationMessage && n.onDeprecatedOption(f, v.deprecationMessage);
        }
        delete m[f];
    }
    for(const f in m)n.onUnknownOption(f);
    return u;
}
var g7;
export { VI, g7 };
var __wakaru_DWe_initialized = false;
export function DWe() {
if (__wakaru_DWe_initialized) return;
__wakaru_DWe_initialized = true;
"use strict";
h(), IWe(), h7(), g7 = class extends GI {
    constructor(e){
        super(), this.windowsMainService = e;
    }
    call(e, t, n) {
        return t === "openExtensionDevelopmentHostWindow" ? this.openExtensionDevelopmentHostWindow(n[0], n[1]) : super.call(e, t, n);
    }
    async openExtensionDevelopmentHostWindow(e, t) {
        const n = VI(e, Kp);
        n.debugRenderer = t;
        const r = n.extensionDevelopmentPath;
        if (!r) return {
            success: !1
        };
        const [s] = await this.windowsMainService.openExtensionDevelopmentHostWindow(r, {
            context: 5,
            cli: n,
            forceProfile: n.profile,
            forceTempProfile: n["profile-temp"]
        });
        if (!t) return {
            success: !0
        };
        const i = s.win;
        if (!i) return {
            success: !0
        };
        const a = i.webContents.debugger;
        let o = a.isAttached() ? 1 / 0 : 0;
        const l = NWe((d)=>{
            o++ === 0 && a.attach();
            let u = !1;
            const m = (T)=>{
                u || d.write(JSON.stringify(T) + "\0");
            }, f = (T, S, k, y)=>m({
                    method: S,
                    params: k,
                    sessionId: y
                });
            i.on("close", ()=>{
                a.removeListener("message", f), d.end(), u = !0;
            }), a.addListener("message", f);
            let v = Buffer.alloc(0);
            d.on("data", (T)=>{
                v = Buffer.concat([
                    v,
                    T
                ]);
                for(let S = v.indexOf(0); S !== -1; S = v.indexOf(0)){
                    let k;
                    try {
                        const y = v.slice(0, S).toString("utf8");
                        v = v.slice(S + 1), k = JSON.parse(y);
                    } catch (y) {
                        console.error("error reading cdp line", y);
                    }
                    a.sendCommand(k.method, k.params, k.sessionId).then((y)=>m({
                            id: k.id,
                            sessionId: k.sessionId,
                            result: y
                        })).catch((y)=>m({
                            id: k.id,
                            sessionId: k.sessionId,
                            error: {
                                code: 0,
                                message: y.message
                            }
                        }));
                }
            }), d.on("error", (T)=>{
                console.error("error on cdp pipe:", T);
            }), d.on("close", ()=>{
                u = !0, --o === 0 && a.detach();
            });
        });
        return await new Promise((d)=>l.listen(0, d)), i.on("close", ()=>l.close()), {
            rendererDebugPort: l.address().port,
            success: !0
        };
    }
};

}
