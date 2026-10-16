import { Qe, st } from "./Iwo.js";
import { Il, bn } from "./SZu.js";
import { cb, sC } from "./backendClient.js";
import { Rn } from "./extensions.js";
import { It, dn } from "./instantiation.js";
import { eXm, jel } from "./mcp_tool_connectweb.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
var exn, _ns;
export { _ns, exn };
var __wakaru_KCi_initialized = false;
export function KCi() {
if (__wakaru_KCi_initialized) return;
__wakaru_KCi_initialized = true;
"use strict";
E(), eXm(), Qe(), Rn(), It(), sC(), exn = Il("mcpToolServiceClient"), _ns = class extends st {
    constructor(t){
        super(), this.backendClient = this._register(t.createInstance(cb, {
            service: jel
        }));
    }
    client() {
        return this.backendClient.get();
    }
}, _ns = Re([
    F(0, dn)
], _ns), bn(exn, _ns, 1, 1);

}
