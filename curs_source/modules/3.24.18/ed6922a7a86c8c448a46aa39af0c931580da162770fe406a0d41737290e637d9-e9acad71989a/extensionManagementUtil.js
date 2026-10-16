import { Ps, jn, si } from "./HVr.js";
import { Ug } from "./extensionManagement.js";
import { G_, xu } from "./extensions_3.js";
import { QH } from "./process.js";
import { j6 } from "./telemetryUtils.js";
import { x } from "./tslib.es6.js";
import { gr } from "./types_2.js";
import { Qt } from "./uri.js";
import { Ao } from "./xmo.js";
var Ach, Rch, Dch, Mch;
export { Ach, Dch, Mch, Rch };
var __wakaru_Uw_initialized = false;
export function Uw() {
if (__wakaru_Uw_initialized) return;
__wakaru_Uw_initialized = true;
"use strict";
x(), Ps(), Ug(), G_(), jn(), Qt(), si(), QH(), j6(), gr(), Ach = /^([^.]+\..+)-(\d+\.\d+\.\d+)(-(.+))?$/, Rch = class P1r {
    constructor(t, n, i = "undefined"){
        this.identifier = t, this.version = n, this.targetPlatform = i, this.id = t.id;
    }
    static create(t) {
        const n = t.manifest ? t.manifest.version : t.version, i = t.manifest ? t.targetPlatform : t.properties.targetPlatform;
        return new P1r(t.identifier, n, i);
    }
    static parse(t) {
        const n = Ach.exec(t);
        return n && n[1] && n[2] ? new P1r({
            id: n[1]
        }, n[2], n[4] || void 0) : null;
    }
    toString() {
        return `${this.id}-${this.version}${this.targetPlatform !== "undefined" ? `-${this.targetPlatform}` : ""}`;
    }
    equals(t) {
        return t instanceof P1r ? Ao(this, t) && this.version === t.version && this.targetPlatform === t.targetPlatform : !1;
    }
}, Dch = /^([^.]+\..+)@((prerelease)|(\d+\.\d+\.\d+(-.*)?))$/, Mch = new xu("pprice.better-merge");

}
