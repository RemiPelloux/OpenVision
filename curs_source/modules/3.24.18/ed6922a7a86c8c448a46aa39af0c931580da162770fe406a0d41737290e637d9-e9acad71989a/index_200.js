import { eth } from "./api_6.js";
import { WLv } from "./schemas_8.js";
import { x } from "./tslib.es6.js";
import { $Lv, ALv, Cth, HLv, LX, MLv, Pgo, RLv, ULv, Xse, azi, czi } from "./xmo.js";
var Pth, Lth, Nth, Oth, Fth, Bth, Q2n;
export { Bth, Fth, Lth, Nth, Oth, Pth, Q2n };
var __wakaru_qLv_initialized = false;
export function qLv() {
if (__wakaru_qLv_initialized) return;
__wakaru_qLv_initialized = true;
"use strict";
x(), WLv(), eth(), Pth = 128 * 1024, Lth = czi({
    CLIENT_ID: LX(),
    CLIENT_SECRET: Xse(LX()),
    scopes: Xse(azi(LX()))
}), Nth = ULv({
    caBundle: LX().check(MLv(), RLv(1), ALv(Pth))
}), Oth = czi({
    type: Xse(HLv("stdio")),
    command: LX(),
    args: Xse(azi(LX())),
    env: Xse(Pgo(LX(), LX())),
    envFile: Xse(LX()),
    cwd: Xse(LX()),
    enabledTools: Xse(azi(LX()))
}), Fth = czi({
    type: Xse(Cth([
        "http",
        "sse"
    ])),
    url: LX(),
    headers: Xse(Pgo(LX(), LX())),
    auth: Xse(Lth),
    tls: Xse(Nth),
    placement: Xse(Cth([
        "server",
        "client"
    ])),
    enabledTools: Xse(azi(LX()))
}), Bth = $Lv([
    Oth,
    Fth
]), czi({
    mcpServers: Pgo(LX(), Bth)
}), Q2n = class extends Error {
    constructor(e, t){
        super(t), this.name = "McpConfigError", this.problem = e;
    }
};

}
