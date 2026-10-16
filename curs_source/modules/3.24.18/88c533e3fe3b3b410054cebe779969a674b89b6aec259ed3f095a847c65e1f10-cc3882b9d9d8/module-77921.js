require.d(exports, {
    createIdeCanvasDiagnostics: ()=>c
});
var o = require(87305), t = require(37949), a = require(76760), n = require(22438);
const i = (0, t.h)("cursor-agent-host-canvas-diagnostics");
function c(s) {
    const e = (0, a.join)(s.projectDir, "canvases"), r = (0, a.join)(s.execExtensionPath, "dist", "agent-sdk"), t = (0, o.WT)({
        canvasesDir: e,
        sdkSourceDir: r,
        tsResolveAnchor: s.execExtensionPath
    });
    return t.bootstrapReady.then((e)=>{
        void 0 === e && i.error(s.logContext, "Canvas SDK source missing from extension bundle");
    }, (o)=>{
        const t = (0, n.E)(o, {
            canvasesDir: e,
            sdkSourceDir: r
        });
        i.warn(s.logContext, "Canvas dir bootstrap failed", {
            errorName: t.errorName,
            errorMessage: t.errorMessage
        });
    }), {
        resourceDefaults: {
            getCanvasDiagnostics: (s)=>t.getDiagnostics(s)
        }
    };
}
