import { Ce, L } from "./path.js";
import { h } from "./tslib.es6.js";
import { createHash as Dze } from "crypto";
import { promises as rO } from "fs";
function Oze(e) {
    return Dze("sha1").update(e).digest("hex");
}
async function Lze(e) {
    try {
        const [t, n, r] = await Promise.all([
            rO.stat(L(e, sO)),
            rO.readFile(L(e, ipe), "utf8"),
            rO.readFile(L(e, ape))
        ]), { entrySha1: s } = JSON.parse(n);
        return s === Oze(r) ? Math.round(t.mtimeMs) : void 0;
    } catch  {
        return;
    }
}
var sO, ipe, ape, ope;
export { Lze, Oze, ape, ipe, ope, sO };
var __wakaru_Uze_initialized = false;
export function Uze() {
if (__wakaru_Uze_initialized) return;
__wakaru_Uze_initialized = true;
"use strict";
h(), Ce(), sO = "out/vs/workbench/workbench.glass.main.bundle.js", ipe = `${sO}.stamp.json`, ape = "out/vs/workbench/workbench.glass.main.js", ope = class {
    readStamp(e) {
        return Lze(e);
    }
};

}
