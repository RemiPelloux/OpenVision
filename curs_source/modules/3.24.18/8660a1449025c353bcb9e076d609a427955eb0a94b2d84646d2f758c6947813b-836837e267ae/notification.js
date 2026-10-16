import { Gt, en } from "./Iwo.js";
import { jn } from "./SZu.js";
import { It } from "./instantiation.js";
import { Ua, ob } from "./severity_2.js";
import { E } from "./tslib.es6.js";
var Yn, Wr, F1, ene, AT, Awr, b6d;
export { AT, Awr, F1, Wr, Yn, b6d, ene };
var __wakaru_Ks_initialized = false;
export function Ks() {
if (__wakaru_Ks_initialized) return;
__wakaru_Ks_initialized = true;
"use strict";
E(), Gt(), ob(), It(), Yn = Ua, Wr = jn("notificationService"), F1 = ((t)=>(t[t.DEFAULT = 0] = "DEFAULT", t[t.OPTIONAL = 1] = "OPTIONAL", t[t.SILENT = 2] = "SILENT", t[t.URGENT = 3] = "URGENT", t))(F1 || {}), ene = ((t)=>(t[t.WORKSPACE = 0] = "WORKSPACE", t[t.PROFILE = 1] = "PROFILE", t[t.APPLICATION = 2] = "APPLICATION", t))(ene || {}), AT = ((t)=>(t[t.OFF = 0] = "OFF", t[t.ERROR = 1] = "ERROR", t))(AT || {}), Awr = class {
    constructor(){
        this.progress = new b6d, this.onDidClose = en.None, this.onDidChangeVisibility = en.None;
    }
    updateSeverity(t) {}
    updateMessage(t) {}
    updateActions(t) {}
    close() {}
}, b6d = class {
    infinite() {}
    done() {}
    total(t) {}
    worked(t) {}
};

}
