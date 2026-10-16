import { zUm } from "./api_6.js";
import { DV1, GV1, Jae, NV1, OV1, TXa, WV1, des, fjm, jbe, qV1, ues } from "./gYa.js";
import { zV1 } from "./schemas_9.js";
import { E } from "./tslib.es6.js";
var Tjm, Ejm, Ijm, xjm, Ajm, Rjm, W0i;
export { Ajm, Ejm, Ijm, Rjm, Tjm, W0i, xjm };
var __wakaru_XV1_initialized = false;
export function XV1() {
if (__wakaru_XV1_initialized) return;
__wakaru_XV1_initialized = true;
"use strict";
E(), zV1(), zUm(), Tjm = 128 * 1024, Ejm = des({
    CLIENT_ID: Jae(),
    CLIENT_SECRET: jbe(Jae()),
    scopes: jbe(ues(Jae()))
}), Ijm = WV1({
    caBundle: Jae().check(OV1(), NV1(1), DV1(Tjm))
}), xjm = des({
    type: jbe(qV1("stdio")),
    command: Jae(),
    args: jbe(ues(Jae())),
    env: jbe(TXa(Jae(), Jae())),
    envFile: jbe(Jae()),
    cwd: jbe(Jae()),
    enabledTools: jbe(ues(Jae()))
}), Ajm = des({
    type: jbe(fjm([
        "http",
        "sse"
    ])),
    url: Jae(),
    headers: jbe(TXa(Jae(), Jae())),
    auth: jbe(Ejm),
    tls: jbe(Ijm),
    placement: jbe(fjm([
        "server",
        "client"
    ])),
    enabledTools: jbe(ues(Jae()))
}), Rjm = GV1([
    xjm,
    Ajm
]), des({
    mcpServers: TXa(Jae(), Rjm)
}), W0i = class extends Error {
    constructor(t, e){
        super(e), this.name = "McpConfigError", this.problem = t;
    }
};

}
