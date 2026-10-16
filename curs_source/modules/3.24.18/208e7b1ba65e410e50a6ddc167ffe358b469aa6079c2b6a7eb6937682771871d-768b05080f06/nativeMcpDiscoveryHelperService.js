import { Ko, oe } from "./platform.js";
import { h } from "./tslib.es6.js";
import { x, ye } from "./uri.js";
import { homedir as Wst } from "os";
var xTe;
export { xTe };
var __wakaru_Bst_initialized = false;
export function Bst() {
if (__wakaru_Bst_initialized) return;
__wakaru_Bst_initialized = true;
"use strict";
h(), oe(), ye(), xTe = class {
    constructor(){}
    load() {
        return Promise.resolve({
            platform: Ko,
            homedir: x.file(Wst()),
            winAppData: this.uriFromEnvVariable("APPDATA"),
            xdgHome: this.uriFromEnvVariable("XDG_CONFIG_HOME")
        });
    }
    uriFromEnvVariable(e) {
        const t = process.env[e];
        if (t) return x.file(t);
    }
};

}
