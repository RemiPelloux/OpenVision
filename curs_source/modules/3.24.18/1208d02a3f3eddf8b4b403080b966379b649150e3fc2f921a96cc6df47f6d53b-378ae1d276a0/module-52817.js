require.d(exports, {
    createIdePluginsActivate: ()=>c
});
var o = require(63553), r = require(70857), i = require(91398), n = require(34102);
async function c(e) {
    const t = [];
    let s;
    const c = new Promise((e)=>{
        s = e;
    });
    let a;
    (0, n.Vo)(e.context, c);
    const l = new Promise((e)=>{
        a = e;
    });
    let d;
    (0, n.zZ)(e.context, l);
    const p = new Promise((e)=>{
        d = e;
    });
    (0, n.zT)(e.context, p), (0, n.Vs)(e.context), (0, n.Pd)(e.context), (0, n.FJ)(e.context);
    const u = Promise.resolve(e.gitExecutor), { pluginsService: g, refreshPluginHooks: x } = await (0, n.Dx)({
        workspacePaths: [
            ...e.workspacePaths
        ],
        getThirdPartyExtensibilityEnabled: ()=>i.cursor.getThirdPartyExtensibilityEnabled(),
        getAllowUserLocalPluginImports: ()=>i.cursor.getAllowUserLocalPluginImports(),
        deactivateTasks: t,
        context: e.context,
        gitExecutorPromise: u
    });
    x(), s?.({
        pluginsService: g,
        deleteDirectoryToTrash: n.WP,
        userHomeDirectory: r.homedir()
    }), a?.({
        pluginsService: g,
        cacheManager: new o.WCg(r.homedir()),
        userHomeDirectory: r.homedir()
    }), d?.({
        pluginsService: g,
        saveDirtyDocumentsUnder: n.e6
    });
    const m = (0, n.x7)({
        appendLine: e.appendLine,
        extensionPath: e.context.extensionPath
    });
    return t.push(()=>m.dispose()), {
        pluginsService: g,
        snapshot: {
            providerRegistered: !0,
            skillCommandsRegistered: !0,
            managedSkillsRefreshScheduled: !0
        },
        dispose: ()=>{
            for (const e of t.splice(0).reverse())e();
        }
    };
}
