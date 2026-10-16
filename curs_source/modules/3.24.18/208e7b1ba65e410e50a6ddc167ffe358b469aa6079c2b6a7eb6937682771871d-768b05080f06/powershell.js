import { Ce } from "./path.js";
import { Zn, gn } from "./pfs.js";
import { h } from "./tslib.es6.js";
var EA, XG, QG, ih, Od, Ld;
export { EA, Ld, Od, QG, XG, ih };
var __wakaru_ZG_initialized = false;
export function ZG() {
if (__wakaru_ZG_initialized) return;
__wakaru_ZG_initialized = true;
"use strict";
switch(h(), Ce(), gn(), EA = /^\d+$/, XG = /^Microsoft.PowerShell_.*/, QG = /^Microsoft.PowerShellPreview_.*/, process.arch){
    case "ia32":
        ih = 1;
        break;
    case "arm":
    case "arm64":
        ih = 2;
        break;
    default:
        ih = 0;
        break;
}
process.env.PROCESSOR_ARCHITEW6432 ? Od = process.env.PROCESSOR_ARCHITEW6432 === "ARM64" ? 2 : 0 : process.env.PROCESSOR_ARCHITECTURE === "ARM64" ? Od = 2 : process.env.PROCESSOR_ARCHITECTURE === "X86" ? Od = 1 : Od = 0, Ld = class {
    constructor(e, t, n){
        this.exePath = e, this.displayName = t, this.knownToExist = n;
    }
    async exists() {
        return this.knownToExist === void 0 && (this.knownToExist = await Zn.existsFile(this.exePath)), this.knownToExist;
    }
};

}
