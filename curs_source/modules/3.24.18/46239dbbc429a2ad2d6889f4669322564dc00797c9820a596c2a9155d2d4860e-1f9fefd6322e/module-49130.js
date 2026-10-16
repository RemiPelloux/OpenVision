require.d(exports, {
    setHostCanvasAgentStoreFilesDirsHook: ()=>r
});
const t = Symbol.for("anysphere.cursor.canvasPeerAgentStoreFilesDirs");
function r(s) {
    const e = globalThis;
    void 0 !== s ? e[t] = s : delete e[t];
}
