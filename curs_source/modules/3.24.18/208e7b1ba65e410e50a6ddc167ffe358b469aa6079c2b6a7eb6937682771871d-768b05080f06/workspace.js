import { E } from "./configurationRegistry.js";
import { Q, ne } from "./instantiation.js";
import { $e } from "./network.js";
import { Ne } from "./nls.js";
import { Ce } from "./path.js";
import { Ae, Ft } from "./resources.js";
import { lc } from "./ternarySearchTree.js";
import { h } from "./tslib.es6.js";
import { ye } from "./uri.js";
var F5e, q6, od, K6, Tp, z6, Y6, gC;
export { F5e, K6, Tp, Y6, gC, od, q6, z6 };
var __wakaru_bn_initialized = false;
export function bn() {
if (__wakaru_bn_initialized) return;
__wakaru_bn_initialized = true;
"use strict";
h(), Ne(), Ce(), lc(), Ft(), ye(), ne(), $e(), F5e = Q("contextService"), q6 = {
    id: "ext-dev"
}, od = {
    id: "empty-window"
}, K6 = class {
    constructor(e, t){
        this.raw = t, this.uri = e.uri, this.index = e.index, this.name = e.name;
    }
    toResource(e) {
        return Ae(this.uri, e);
    }
    toJSON() {
        return {
            uri: this.uri,
            name: this.name,
            index: this.index
        };
    }
}, Tp = "code-workspace", z6 = `.${Tp}`, Y6 = [
    {
        name: E(2692, null),
        extensions: [
            Tp
        ]
    }
], gC = "workspace.json";

}
