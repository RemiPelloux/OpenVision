import { qRl } from "./chatLinkDrag.js";
import { E } from "./tslib.es6.js";
var ahv, lhv, chv, Ezl, Izl, xzl, Azl, Rzl, Pzl, Mzl, Dzl, Nzl, Lzl, Ozl;
export { Azl, Dzl, Ezl, Izl, Lzl, Mzl, Nzl, Ozl, Pzl, Rzl, ahv, chv, lhv, xzl };
var __wakaru_Kye_initialized = false;
export function Kye() {
if (__wakaru_Kye_initialized) return;
__wakaru_Kye_initialized = true;
"use strict";
E(), qRl(), ahv = "glass-sidebar-agent:", lhv = "glass-sidebar-agent-section:", chv = "glass-sidebar-section:", Ezl = class {
    constructor(t, e, n){
        this.agentId = t, this.canPin = e, this.dropSectionId = n, this.kind = "sidebar-agent";
    }
}, Izl = class {
    constructor(t){
        this.agentId = t, this.kind = "sidebar-new-agent";
    }
}, xzl = class {
    constructor(t){
        this.sectionId = t, this.kind = "sidebar-section";
    }
}, Azl = class {
    constructor(t){
        this.sectionId = t, this.kind = "sidebar-agent-section";
    }
}, Rzl = class {
    constructor(){
        this.kind = "pinned-container";
    }
}, Pzl = class {
    constructor(t){
        this.projectAgentId = t, this.kind = "project-agent";
    }
}, Mzl = class {
    constructor(){
        this.kind = "sidebar-background";
    }
}, Dzl = class {
    constructor(t){
        this.hostedAgentId = t, this.kind = "agent-panel";
    }
}, Nzl = class {
    constructor(t, e){
        this.scope = t, this.task = e, this.kind = "task";
    }
}, Lzl = class {
    constructor(t, e){
        this.scope = t, this.status = e, this.kind = "task-status";
    }
}, Ozl = class {
    constructor(t, e){
        this.scope = t, this.status = e, this.kind = "task-status-section";
    }
};

}
