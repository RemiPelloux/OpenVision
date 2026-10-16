import { Tpp } from "./api_5.js";
import { Epp, J_e, Jt1, L7r, O7r, en1, ln1, nn1, on1, rn1, sn1, vEa, yae } from "./ipa.js";
import { an1 } from "./schemas_7.js";
import { E } from "./tslib.es6.js";
var Opp, Fpp, Bpp, Upp, jpp, bEa, pn1, V$t, gvi, $pp, Hpp, Wpp, Gpp;
export { $pp, Bpp, Fpp, Gpp, Hpp, Opp, Upp, V$t, Wpp, bEa, gvi, jpp, pn1 };
var __wakaru_mn1_initialized = false;
export function mn1() {
if (__wakaru_mn1_initialized) return;
__wakaru_mn1_initialized = true;
"use strict";
E(), an1(), Tpp(), Opp = 128 * 1024, Fpp = O7r({
    CLIENT_ID: yae(),
    CLIENT_SECRET: J_e(yae()),
    scopes: J_e(L7r(yae()))
}), Bpp = rn1({
    caBundle: yae().check(nn1(), en1(1), Jt1(Opp))
}), Upp = O7r({
    type: J_e(on1("stdio")),
    command: yae(),
    args: J_e(L7r(yae())),
    env: J_e(vEa(yae(), yae())),
    envFile: J_e(yae()),
    cwd: J_e(yae()),
    enabledTools: J_e(L7r(yae()))
}), jpp = O7r({
    type: J_e(Epp([
        "http",
        "sse"
    ])),
    url: yae(),
    headers: J_e(vEa(yae(), yae())),
    auth: J_e(Fpp),
    tls: J_e(Bpp),
    placement: J_e(Epp([
        "server",
        "client"
    ])),
    enabledTools: J_e(L7r(yae()))
}), bEa = sn1([
    Upp,
    jpp
]), pn1 = O7r({
    mcpServers: vEa(yae(), bEa)
}), V$t = class extends Error {
    constructor(t, e){
        super(e), this.name = "McpConfigError", this.problem = t;
    }
}, gvi = (t)=>typeof t == "object" && t !== null && !Array.isArray(t), $pp = (t)=>{
    try {
        return JSON.parse(t);
    } catch  {
        throw new V$t("invalid_json", "Config is not valid JSON.");
    }
}, Hpp = (t, e)=>{
    const n = ln1(e);
    if (n === void 0) throw gvi(e) && e.command === void 0 && e.url === void 0 ? new V$t("no_transport", `Server "${t}" must have either a command or url.`) : new V$t("invalid_server", `Invalid configuration for server "${t}".`);
    return n;
}, Wpp = (t)=>Object.fromEntries(Object.entries(t).map(([e, n])=>[
            e.trim(),
            n
        ]).filter(([e])=>e !== "")), Gpp = (t)=>{
    if (!gvi(t) || typeof t.command != "string" || t.command.trim() !== "" || typeof t.url != "string" || t.url.trim() === "") return t;
    const e = {
        ...t
    };
    return delete e.command, e.type === "stdio" && delete e.type, e;
};

}
