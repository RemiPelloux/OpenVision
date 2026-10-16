import { Se, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { db, nE } from "./backendClient.js";
import { Pn } from "./extensions.js";
import { Ze, _t } from "./instantiation.js";
import { Cbo, wuh } from "./mcp_tool_connectweb.js";
import { mn, pd } from "./qIc.js";
import { x } from "./tslib.es6.js";
var sVt, sYi;
export { sVt, sYi };
var __wakaru_QOn_initialized = false;
export function QOn() {
if (__wakaru_QOn_initialized) return;
__wakaru_QOn_initialized = true;
"use strict";
x(), wuh(), Se(), Pn(), Ze(), nE(), sVt = pd("mcpToolServiceClient"), sYi = class extends we {
    constructor(e){
        super(), this.backendClient = this._register(e.createInstance(db, {
            service: Cbo
        }));
    }
    client() {
        return this.backendClient.get();
    }
}, sYi = ie([
    C(0, _t)
], sYi), mn(sVt, sYi, 1, 1);

}
