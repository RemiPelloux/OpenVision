require.d(exports, {
    w: ()=>o
});
var r = require("./module-11762.js");
function n(e, t, i) {
    e.appendLine?.(`${t}: ${String(i)}`);
}
async function o(e) {
    const t = async ()=>{
        if (void 0 !== e.extensionPath && 0 !== e.extensionPath.length) try {
            await e.ensureCanvasSdkMirror({
                extensionPath: e.extensionPath
            });
        } catch (t) {
            if ((0, r.t6)(t)) return;
            n(e, "Canvas SDK mirror failed", t);
        }
    };
    try {
        if (!e.getAuthToken()) return void await t();
        const i = await e.getManagedSkills();
        await e.syncBuiltinSkills(e.ctx, {
            managedSkills: i.skills ?? []
        }), await t();
    } catch (i) {
        n(e, "Failed to sync builtin skills", i), await t();
    }
}
