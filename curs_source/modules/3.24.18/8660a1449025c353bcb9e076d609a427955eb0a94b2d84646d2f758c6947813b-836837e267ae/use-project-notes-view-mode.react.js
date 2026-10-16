import { D, Qe } from "./Iwo.js";
import { Ss } from "./aiMiscServices.js";
import { mv } from "./editor-panel-context.react.js";
import { xc } from "./glass-storage-service.js";
import { Bt } from "./nls.js";
import { Xcv } from "./project-notes-view-mode.js";
import { E } from "./tslib.es6.js";
import { Ru } from "./use-feature-gate.react_2.js";
import { In } from "./use-service.react_2.js";
var jql, Qcv;
export { Qcv, jql };
var __wakaru_Jcv_initialized = false;
export function Jcv() {
if (__wakaru_Jcv_initialized) return;
__wakaru_Jcv_initialized = true;
"use strict";
E(), Qe(), Bt(), Ss(), Ru(), In(), xc(), mv(), Xcv(), jql = [
    {
        mode: "rows",
        label: D("glass.project.document.view.rows", "List")
    },
    {
        mode: "board",
        label: D("glass.project.document.view.board", "Board")
    },
    {
        mode: "document",
        label: D("glass.project.document.view.document", "Brief")
    },
    {
        mode: "context",
        label: D("glass.project.document.view.context", "Library")
    }
], Qcv = jql.filter((t)=>t.mode !== "document");

}
