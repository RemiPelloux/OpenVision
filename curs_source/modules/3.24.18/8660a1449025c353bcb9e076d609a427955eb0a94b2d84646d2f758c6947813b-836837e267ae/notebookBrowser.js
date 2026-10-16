import { Y7 } from "./notebookCommon.js";
import { oEt } from "./notebookEditorInput.js";
import { F0k } from "./notebookRange.js";
import { E } from "./tslib.es6.js";
var Was, ayg, Rdl, zIi, Xze;
export { Rdl, Was, Xze, ayg, zIi };
var __wakaru_Mat_initialized = false;
export function Mat() {
if (__wakaru_Mat_initialized) return;
__wakaru_Mat_initialized = true;
"use strict";
E(), Y7(), oEt(), F0k(), Was = "jupyter-notebook", ayg = "ms-toolsai.jupyter", Rdl = new Map, Rdl.set(Was, new Map), Rdl.get(Was)?.set("python", {
    extensionIds: [
        "ms-python.python",
        ayg
    ],
    displayName: "Python + Jupyter"
}), zIi = ((t)=>(t[t.Left = 1] = "Left", t[t.Center = 2] = "Center", t[t.Right = 4] = "Right", t[t.Full = 7] = "Full", t))(zIi || {}), Xze = ((t)=>(t[t.Preview = 0] = "Preview", t[t.Editing = 1] = "Editing", t))(Xze || {});

}
