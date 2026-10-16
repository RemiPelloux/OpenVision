import { pnu } from "./api_4.js";
import { KY, QHf, ZHf, _Oi, ase, bOi, eWf, iNs, iWf, mnu, nWf, oWf, rWf } from "./f0s.js";
import { sWf } from "./schemas_4.js";
import { x } from "./tslib.es6.js";
var Cnu, Tnu, Enu, xnu, Inu, sNs, dWf, ibt, qEn, Anu, Rnu, Dnu, Mnu;
export { Anu, Cnu, Dnu, Enu, Inu, Mnu, Rnu, Tnu, dWf, ibt, qEn, sNs, xnu };
var __wakaru_hWf_initialized = false;
export function hWf() {
if (__wakaru_hWf_initialized) return;
__wakaru_hWf_initialized = true;
"use strict";
x(), sWf(), pnu(), Cnu = 128 * 1024, Tnu = bOi({
    CLIENT_ID: KY(),
    CLIENT_SECRET: ase(KY()),
    scopes: ase(_Oi(KY()))
}), Enu = nWf({
    caBundle: KY().check(eWf(), QHf(1), ZHf(Cnu))
}), xnu = bOi({
    type: ase(rWf("stdio")),
    command: KY(),
    args: ase(_Oi(KY())),
    env: ase(iNs(KY(), KY())),
    envFile: ase(KY()),
    cwd: ase(KY()),
    enabledTools: ase(_Oi(KY()))
}), Inu = bOi({
    type: ase(mnu([
        "http",
        "sse"
    ])),
    url: KY(),
    headers: ase(iNs(KY(), KY())),
    auth: ase(Tnu),
    tls: ase(Enu),
    placement: ase(mnu([
        "server",
        "client"
    ])),
    enabledTools: ase(_Oi(KY()))
}), sNs = iWf([
    xnu,
    Inu
]), dWf = bOi({
    mcpServers: iNs(KY(), sNs)
}), ibt = class extends Error {
    constructor(e, t){
        super(t), this.name = "McpConfigError", this.problem = e;
    }
}, qEn = (e)=>typeof e == "object" && e !== null && !Array.isArray(e), Anu = (e)=>{
    try {
        return JSON.parse(e);
    } catch  {
        throw new ibt("invalid_json", "Config is not valid JSON.");
    }
}, Rnu = (e, t)=>{
    const n = oWf(t);
    if (n === void 0) throw qEn(t) && t.command === void 0 && t.url === void 0 ? new ibt("no_transport", `Server "${e}" must have either a command or url.`) : new ibt("invalid_server", `Invalid configuration for server "${e}".`);
    return n;
}, Dnu = (e)=>Object.fromEntries(Object.entries(e).map(([t, n])=>[
            t.trim(),
            n
        ]).filter(([t])=>t !== "")), Mnu = (e)=>{
    if (!qEn(e) || typeof e.command != "string" || e.command.trim() !== "" || typeof e.url != "string" || e.url.trim() === "") return e;
    const t = {
        ...e
    };
    return delete t.command, t.type === "stdio" && delete t.type, t;
};

}
