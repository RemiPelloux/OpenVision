import { ed } from "./notebookCommon.js";
import { oZ } from "./notebookEditorInput.js";
import { nTe } from "./notebookRange.js";
import { x } from "./tslib.es6.js";
var rer, fMh, ser, axo, cxo, lxo, gBn, fBn, vMh, oer, qjt, nB, uxo, l8, iTe, j_, Hw, Y_e, rTe;
export { Hw, Y_e, axo, cxo, fBn, fMh, gBn, iTe, j_, l8, lxo, nB, oer, qjt, rTe, rer, ser, uxo, vMh };
var __wakaru_Kg_initialized = false;
export function Kg() {
if (__wakaru_Kg_initialized) return;
__wakaru_Kg_initialized = true;
"use strict";
x(), ed(), oZ(), nTe(), rer = "notebook.cell.expandCellInput", fMh = "notebook.cell.execute", ser = "notebook.cell.detectLanguage", axo = "notebook.cell.changeLanguage", cxo = "notebook.cell.quitEdit", lxo = "notebook.cell.expandCellOutput", gBn = "jupyter-notebook", fBn = "ms-toolsai.jupyter", vMh = new Map([
    [
        gBn,
        fBn
    ]
]), oer = new Map, oer.set(gBn, new Map), oer.get(gBn)?.set("python", {
    extensionIds: [
        "ms-python.python",
        fBn
    ],
    displayName: "Python + Jupyter"
}), qjt = ((e)=>(e[e.fullCell = 0] = "fullCell", e[e.firstLine = 1] = "firstLine", e))(qjt || {}), nB = ((e)=>(e[e.Uninitialized = 0] = "Uninitialized", e[e.Estimated = 1] = "Estimated", e[e.FromCache = 2] = "FromCache", e[e.Measured = 3] = "Measured", e))(nB || {}), uxo = ((e)=>(e[e.Fold = 0] = "Fold", e))(uxo || {}), l8 = ((e)=>(e[e.Left = 1] = "Left", e[e.Center = 2] = "Center", e[e.Right = 4] = "Right", e[e.Full = 7] = "Full", e))(l8 || {}), iTe = ((e)=>(e[e.Default = 1] = "Default", e[e.Center = 2] = "Center", e[e.CenterIfOutsideViewport = 3] = "CenterIfOutsideViewport", e))(iTe || {}), j_ = ((e)=>(e[e.Preview = 0] = "Preview", e[e.Editing = 1] = "Editing", e))(j_ || {}), Hw = ((e)=>(e[e.Container = 0] = "Container", e[e.Editor = 1] = "Editor", e[e.Output = 2] = "Output", e[e.ChatInput = 3] = "ChatInput", e))(Hw || {}), Y_e = ((e)=>(e[e.None = 0] = "None", e[e.Top = 1] = "Top", e[e.Bottom = 2] = "Bottom", e[e.Both = 3] = "Both", e))(Y_e || {}), rTe = ((e)=>(e[e.None = 0] = "None", e[e.Start = 1] = "Start", e[e.End = 2] = "End", e[e.Both = 3] = "Both", e))(rTe || {});

}
