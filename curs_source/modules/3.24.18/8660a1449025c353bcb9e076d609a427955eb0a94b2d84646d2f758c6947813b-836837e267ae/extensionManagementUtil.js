import { Di, Ei, Fa } from "./Iwo.js";
import { jy } from "./extensionManagement.js";
import { Pw, lm } from "./extensions_3.js";
import { Qc } from "./gYa.js";
import { nY } from "./process.js";
import { uV } from "./telemetryUtils.js";
import { E } from "./tslib.es6.js";
import { To } from "./types_2.js";
import { fn } from "./uri.js";
var tKm, nKm, iKm, rKm;
export { iKm, nKm, rKm, tKm };
var __wakaru_iF_initialized = false;
export function iF() {
if (__wakaru_iF_initialized) return;
__wakaru_iF_initialized = true;
"use strict";
E(), Fa(), jy(), Pw(), Di(), fn(), Ei(), nY(), uV(), To(), tKm = /^([^.]+\..+)-(\d+\.\d+\.\d+)(-(.+))?$/, nKm = class TXs {
    constructor(e, n, i = "undefined"){
        this.identifier = e, this.version = n, this.targetPlatform = i, this.id = e.id;
    }
    static create(e) {
        const n = e.manifest ? e.manifest.version : e.version, i = e.manifest ? e.targetPlatform : e.properties.targetPlatform;
        return new TXs(e.identifier, n, i);
    }
    static parse(e) {
        const n = tKm.exec(e);
        return n && n[1] && n[2] ? new TXs({
            id: n[1]
        }, n[2], n[4] || void 0) : null;
    }
    toString() {
        return `${this.id}-${this.version}${this.targetPlatform !== "undefined" ? `-${this.targetPlatform}` : ""}`;
    }
    equals(e) {
        return e instanceof TXs ? Qc(this, e) && this.version === e.version && this.targetPlatform === e.targetPlatform : !1;
    }
}, iKm = /^([^.]+\..+)@((prerelease)|(\d+\.\d+\.\d+(-.*)?))$/, rKm = new lm("pprice.better-merge");

}
